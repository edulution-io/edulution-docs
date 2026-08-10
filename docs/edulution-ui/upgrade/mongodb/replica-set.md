# MongoDB als Replica Set betreiben

Ab Version 2.2 benötigt die edulution API MongoDB als Replica Set. Ein einzelner Knoten genügt, die vorhandenen Daten bleiben erhalten.

:::info[Neuinstallationen]
Nichts zu tun. Die mitgelieferte `docker-compose.yml` startet MongoDB bereits als Replica Set.
:::

## 1. Container stoppen

```bash
cd /srv/docker/edulution-ui
docker compose down
```

## 2. Sicherung anlegen

```bash
cp -a data/db data/db.backup-$(date +%F)
```

## 3. Dienst `edu-db` ersetzen

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
`$$KEYFILE` und `$$@` nicht zu `$` vereinfachen — sonst startet der Container nicht.
:::

## 4. `edu-api` auf die Datenbank warten lassen

Ausführliche Form mit `condition: service_healthy`, nicht die Kurzform `depends_on: [edu-db, …]`:

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

In der `edulution.env`, Host und Zugangsdaten bleiben unverändert:

```ini
MONGODB_SERVER_URL=mongodb://edu-db:27017/?replicaSet=rs0&directConnection=true
```

## 6. Starten und prüfen

```bash
docker compose up -d
docker compose ps
```

`edulution-db` muss `healthy` melden. Zustand direkt abfragen:

```bash
docker exec edulution-db sh -c 'tr -d "[:space:]" < /keyfile/mongo.key | mongosh --quiet -u __system --authenticationDatabase local --eval "rs.status().members[0].stateStr"'
```

Erwartete Ausgabe: `PRIMARY`

## Fehlerbehebung

| Meldung | Ursache |
| --- | --- |
| `Transaction numbers are only allowed on a replica set member or mongos` | `--replSet rs0` fehlt im `command` |
| `getaddrinfo ENOTFOUND …` | `directConnection=true` fehlt in `MONGODB_SERVER_URL` |
| `security.keyFile is required when authorization is enabled with replica sets` | `--keyFile /keyfile/mongo.key` fehlt im `command` |
| `edulution-db` wird nicht `healthy` | `docker logs edulution-db` — `data/db-keyfile/mongo.key` muss Rechte `400` und Eigentümer `mongodb` haben |
