# MongoDB als Replica Set betreiben

Ab Version 2.2 benötigt die edulution API MongoDB als Replica Set.
Hierbei genügt ein einzelner Knoten und die vorhandenen Daten bleiben erhalten.

:::info[Neuinstallationen]
Nichts zu tun. Die mitgelieferte `docker-compose.yml` startet MongoDB bereits als Replica Set.
:::

## 1. Container stoppen

```bash
cd /srv/docker/edulution-ui
docker compose down
```

## 2. Sicherung anlegen

Legen Sie eine Kopie des Datenverzeichnisses an, solange die Container gestoppt sind:

```bash
cp -a data/db data/db.backup-$(date +%F)
```

## 3. Dienst `edu-db` anpassen

Am Dienst `edu-db` ändern sich vier Schlüssel: `entrypoint` und `command` kommen neu hinzu, bei `volumes` kommt ein Eintrag dazu, und der `healthcheck` wird ersetzt. **Behalten Sie alle übrigen Schlüssel Ihrer Service-Definition bei** – insbesondere `networks`, falls Ihre Installation den Container an ein eigenes Netzwerk hängt.

```yaml
  edu-db:
    container_name: edulution-db
    image: mongo:7
    restart: always
    env_file:
      - edulution.env
    entrypoint:
      - bash
      - -c
      - |
        set -e
        KEYFILE=/keyfile/mongo.key
        if [ ! -s "$$KEYFILE" ]; then
          openssl rand -base64 756 > "$$KEYFILE"
        fi
        chmod 400 "$$KEYFILE"
        chown mongodb:mongodb "$$KEYFILE" 2>/dev/null || true
        exec docker-entrypoint.sh "$$@"
      - bash
    command:
      - mongod
      - --replSet
      - rs0
      - --keyFile
      - /keyfile/mongo.key
      - --bind_ip_all
    volumes:
      - ./data/db:/data/db
      - ./data/db-keyfile:/keyfile
    ulimits:
      nofile:
        soft: 64000
        hard: 64000
    healthcheck:
      test:
        - CMD-SHELL
        - |
          tr -d '[:space:]' < /keyfile/mongo.key | mongosh --quiet -u __system --authenticationDatabase local --eval " let status; try { status = rs.status(); } catch (e) { rs.initiate({ _id: 'rs0', members: [{ _id: 0, host: 'edulution-db:27017' }] }); status = rs.status(); } const primary = status && status.members && status.members.some(m => m.stateStr === 'PRIMARY'); if (!primary) { quit(1); }"
      interval: 5s
      timeout: 5s
      retries: 3
      start_period: 15s
```

:::warning[Doppelte Dollarzeichen beibehalten]
Vereinfachen Sie `$$KEYFILE` und `$$@` nicht zu `$` – sonst startet der Container nicht.
:::

Auf einem großen `data/db` kann der erste Start länger dauern, als der Healthcheck erlaubt (`start_period` plus `interval` × `retries`, hier rund 30 Sekunden). Setzen Sie in diesem Fall `start_period: 60s` und `retries: 10`.

## 4. `edu-api` auf die Datenbank warten lassen

Verwenden Sie die ausführliche Form mit `condition: service_healthy`, nicht die Kurzform `depends_on: [edu-db, …]`:

```yaml
  edu-api:
    depends_on:
      edu-keycloak:
        condition: service_healthy
      edu-db:
        condition: service_healthy
      edu-redis:
        condition: service_healthy
```

Sonst startet die API vor dem PRIMARY und läuft bis zum nächsten Neustart ohne Transaktionen.

## 5. `MONGODB_SERVER_URL` ergänzen

Hängen Sie in der `edulution.env` an den **vorhandenen** Wert von `MONGODB_SERVER_URL` die beiden Query-Parameter `replicaSet=rs0` und `directConnection=true` an. Host, Port und, falls vorhanden, Benutzer und Passwort bleiben unverändert:

```dotenv
MONGODB_SERVER_URL=mongodb://<benutzer>:<passwort>@edu-db:27017/?replicaSet=rs0&directConnection=true
```

Beachten Sie dabei, dass `--keyFile` aus Schritt 3 die Authentifizierung mit einschaltet:

- **Ihr bisheriger Wert enthält Zugangsdaten** (`benutzer:passwort@`): Übernehmen Sie sie unverändert, es ist nichts weiter zu tun.
- **Ihr bisheriger Wert enthält keine Zugangsdaten**: Die Datenbank lief ohne Authentifizierung, und in `data/db` existiert noch kein Benutzer. Legen Sie einen an, bevor die API startet – von innerhalb des Containers heraus, weil MongoDB den ersten Benutzer nur über eine lokale Verbindung zulässt:

  ```bash
  docker compose up -d edu-db
  docker exec -it edulution-db mongosh --eval 'db.getSiblingDB("admin").createUser({ user: "edulution", pwd: "<passwort>", roles: [{ role: "root", db: "admin" }] })'
  ```

  Tragen Sie diese Zugangsdaten anschließend in die `MONGODB_SERVER_URL` ein.

## 6. Starten und prüfen

```bash
docker compose up -d
docker compose ps
```

`edulution-db` muss `healthy` melden. Den Zustand fragen Sie direkt so ab:

```bash
docker exec edulution-db sh -c 'tr -d "[:space:]" < /keyfile/mongo.key | mongosh --quiet -u __system --authenticationDatabase local --eval "rs.status().members[0].stateStr"'
```

Erwartete Ausgabe: `PRIMARY`

## Zurück zum Ausgangszustand

Kommt die API nicht hoch, spielen Sie die Sicherung aus Schritt 2 zurück:

```bash
docker compose down
rm -rf data/db data/db-keyfile
cp -a data/db.backup-JJJJ-MM-TT data/db
```

Setzen Sie danach den `edu-db`-Block und den Wert von `MONGODB_SERVER_URL` auf ihren vorherigen Stand zurück und starten Sie neu:

```bash
docker compose up -d
```

## Fehlerbehebung

| Meldung | Ursache / Abhilfe |
| --- | --- |
| `Transaction numbers are only allowed on a replica set member or mongos` | `--replSet rs0` fehlt im `command` |
| `getaddrinfo ENOTFOUND …` | `directConnection=true` fehlt in `MONGODB_SERVER_URL` |
| `security.keyFile is required when authorization is enabled with replica sets` | `--keyFile /keyfile/mongo.key` fehlt im `command` |
| `Authentication failed` | Die Zugangsdaten in `MONGODB_SERVER_URL` fehlen oder passen nicht zum angelegten Benutzer (siehe Schritt 5) |
| `dependency failed to start: container edulution-db is unhealthy` | Der Healthcheck lief aus, bevor die Datenbank bereit war. `start_period: 60s` und `retries: 10` setzen und erneut starten |
| `edulution-db` wird nicht `healthy` | `docker logs edulution-db` prüfen. `data/db-keyfile/mongo.key` muss Rechte `400` haben und dem Benutzer `mongodb` gehören |
