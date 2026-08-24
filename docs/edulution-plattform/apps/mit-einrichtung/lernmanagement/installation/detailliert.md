---
sidebar_position: 3
title: Detaillierte Installation
sidebar_custom_props:
  audience: admin
---

# Detaillierte Installation

Diese Anleitung beschreibt die vollständige Installation von edulution Moodle mit allen Optionen.

## Installation innerhalb von edulution

### 1. Moodle zum edulution-Stack hinzufügen

Navigieren Sie zu Ihrem edulution-Verzeichnis:

```bash
cd /srv/docker/edulution
```

### 2. Moodle-Compose-Datei erstellen

Erstellen Sie die Datei `docker-compose.moodle.yml`:

```yaml
services:
  moodle:
    image: ghcr.io/edulution-io/edulution-moodle:latest
    container_name: edulution-moodle
    restart: unless-stopped
    environment:
      # Basis-Einstellungen
      MOODLE_URL: https://${DOMAIN}/moodle
      MOODLE_SITE_NAME: "${SCHOOL_NAME} Moodle"
      MOODLE_ADMIN_EMAIL: admin@${DOMAIN}

      # Datenbank
      MARIADB_HOST: moodle-db
      MARIADB_DATABASE: moodle
      MARIADB_USER: moodle
      MARIADB_PASSWORD_FILE: /run/secrets/moodle_db_password

      # Keycloak
      KEYCLOAK_URL: https://sso.${DOMAIN}
      KEYCLOAK_REALM: ${KEYCLOAK_REALM}
      KEYCLOAK_CLIENT_ID: moodle
      KEYCLOAK_CLIENT_SECRET_FILE: /run/secrets/moodle_keycloak_secret

      # Sync
      KEYCLOAK_SYNC_CLIENT_ID: moodle-sync
      KEYCLOAK_SYNC_CLIENT_SECRET_FILE: /run/secrets/moodle_sync_secret
      SYNC_ENABLED: "true"
      SYNC_INTERVAL: 300

      # Redis
      REDIS_HOST: moodle-redis

    volumes:
      - moodle_data:/var/www/moodledata
      - ./config/moodle/plugins.json:/srv/config/plugins.json:ro
    secrets:
      - moodle_db_password
      - moodle_keycloak_secret
      - moodle_sync_secret
    networks:
      - edulution
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.moodle.rule=Host(`${DOMAIN}`) && PathPrefix(`/moodle`)"
      - "traefik.http.routers.moodle.entrypoints=websecure"
      - "traefik.http.routers.moodle.tls.certresolver=letsencrypt"
      - "traefik.http.services.moodle.loadbalancer.server.port=80"
      # Admin-UI
      - "traefik.http.routers.moodle-admin.rule=Host(`${DOMAIN}`) && PathPrefix(`/moodle-admin`)"
      - "traefik.http.routers.moodle-admin.entrypoints=websecure"
      - "traefik.http.routers.moodle-admin.tls.certresolver=letsencrypt"
    depends_on:
      - moodle-db
      - moodle-redis

  moodle-db:
    image: mariadb:10.11
    container_name: edulution-moodle-db
    restart: unless-stopped
    environment:
      MARIADB_ROOT_PASSWORD_FILE: /run/secrets/moodle_db_root_password
      MARIADB_DATABASE: moodle
      MARIADB_USER: moodle
      MARIADB_PASSWORD_FILE: /run/secrets/moodle_db_password
    volumes:
      - moodle_db:/var/lib/mysql
      - ./config/moodle/mysql:/etc/mysql/conf.d:ro
    secrets:
      - moodle_db_root_password
      - moodle_db_password
    networks:
      - edulution

  moodle-redis:
    image: redis:7-alpine
    container_name: edulution-moodle-redis
    restart: unless-stopped
    command: redis-server --appendonly yes
    volumes:
      - moodle_redis:/data
    networks:
      - edulution

volumes:
  moodle_data:
  moodle_db:
  moodle_redis:

secrets:
  moodle_db_password:
    file: ./secrets/moodle_db_password
  moodle_db_root_password:
    file: ./secrets/moodle_db_root_password
  moodle_keycloak_secret:
    file: ./secrets/moodle_keycloak_secret
  moodle_sync_secret:
    file: ./secrets/moodle_sync_secret

networks:
  edulution:
    external: true
```

### 3. Secrets erstellen

```bash
mkdir -p secrets

# Passwörter generieren
openssl rand -base64 32 > secrets/moodle_db_password
openssl rand -base64 32 > secrets/moodle_db_root_password

# Keycloak-Secrets eintragen (aus Keycloak kopieren)
echo "ihr-moodle-client-secret" > secrets/moodle_keycloak_secret
echo "ihr-sync-client-secret" > secrets/moodle_sync_secret

# Berechtigungen setzen
chmod 600 secrets/*
```

### 4. Keycloak konfigurieren

#### Moodle-Client erstellen

In Keycloak unter Clients → Create:

```yaml
Client ID: moodle
Client Protocol: openid-connect
Root URL: https://ihre-domain.de/moodle
```

Nach dem Erstellen unter Settings:

```yaml
Access Type: confidential
Valid Redirect URIs:
  - https://ihre-domain.de/moodle/*
  - https://ihre-domain.de/moodle/admin/oauth2callback.php
Web Origins: https://ihre-domain.de
```

Kopieren Sie das Secret aus dem Tab "Credentials".

#### Sync-Client erstellen

```yaml
Client ID: moodle-sync
Client Protocol: openid-connect
Access Type: confidential
Service Account Enabled: ON
```

Service Account Rollen zuweisen:
1. Tab "Service Account Roles"
2. Client Roles → realm-management
3. Hinzufügen: `view-users`, `query-users`, `view-groups`, `query-groups`

### 5. Plugin-Konfiguration

Erstellen Sie `config/moodle/plugins.json`:

```json
{
  "plugins": [
    {
      "component": "mod_attendance",
      "name": "Anwesenheit",
      "required": true,
      "description": "Anwesenheitstracking für Kurse"
    },
    {
      "component": "mod_questionnaire",
      "name": "Fragebogen",
      "required": true,
      "description": "Umfragen und Feedback"
    },
    {
      "component": "block_xp",
      "name": "Level Up XP",
      "required": false,
      "description": "Gamification mit Erfahrungspunkten"
    },
    {
      "component": "theme_boost_union",
      "name": "Boost Union Theme",
      "required": false,
      "description": "Erweitertes Boost-Theme"
    }
  ]
}
```

### 6. Moodle starten

```bash
docker compose -f docker-compose.yml -f docker-compose.moodle.yml up -d
```

### 7. Status prüfen

```bash
# Logs beobachten
docker compose -f docker-compose.yml -f docker-compose.moodle.yml logs -f moodle

# Status prüfen
docker compose -f docker-compose.yml -f docker-compose.moodle.yml ps
```

---

## Standalone Installation

### 1. Repository klonen

```bash
git clone https://github.com/edulution-io/edulution-moodle.git /srv/docker/moodle
cd /srv/docker/moodle
```

### 2. Umgebungsvariablen konfigurieren

```bash
cp .env.example .env
```

Bearbeiten Sie `.env`:

```bash
# =============================================================================
# ALLGEMEIN
# =============================================================================
ENVIRONMENT=production
TIMEZONE=Europe/Berlin

# =============================================================================
# MOODLE
# =============================================================================
MOODLE_URL=https://moodle.ihre-schule.de
MOODLE_SITE_NAME=Moodle Ihrer Schule
MOODLE_ADMIN_USER=admin
MOODLE_ADMIN_EMAIL=admin@ihre-schule.de
# Leer lassen für auto-generiertes Passwort
MOODLE_ADMIN_PASSWORD=

# Moodle-Version (Branch-Name)
MOODLE_VERSION=MOODLE_405_STABLE

# Sprache
MOODLE_LANG=de

# =============================================================================
# DATENBANK
# =============================================================================
MARIADB_HOST=db
MARIADB_DATABASE=moodle
MARIADB_USER=moodle
MARIADB_PASSWORD=<sicheres-passwort>
MARIADB_ROOT_PASSWORD=<sicheres-root-passwort>

# =============================================================================
# KEYCLOAK
# =============================================================================
KEYCLOAK_URL=https://sso.ihre-schule.de
KEYCLOAK_REALM=schule
KEYCLOAK_CLIENT_ID=moodle
KEYCLOAK_CLIENT_SECRET=<client-secret>

# Sync Service Account
KEYCLOAK_SYNC_CLIENT_ID=moodle-sync
KEYCLOAK_SYNC_CLIENT_SECRET=<sync-secret>

# =============================================================================
# SYNCHRONISATION
# =============================================================================
SYNC_ENABLED=true
SYNC_INTERVAL=300
SYNC_USERS=true
SYNC_GROUPS=true
SYNC_GROUP_PREFIX=
SYNC_ROLES=role-teacher,role-student,role-schooladministrator
SYNC_SOFT_DELETE=true
SYNC_SOFT_DELETE_DAYS=30

# =============================================================================
# REDIS
# =============================================================================
REDIS_HOST=redis
REDIS_PORT=6379

# =============================================================================
# TRAEFIK (für Standalone mit eigenem Traefik)
# =============================================================================
TRAEFIK_ACME_EMAIL=admin@ihre-schule.de
TRAEFIK_DOMAIN=moodle.ihre-schule.de

# =============================================================================
# BACKUP
# =============================================================================
BACKUP_ENABLED=true
BACKUP_SCHEDULE=0 2 * * *
BACKUP_RETENTION_DAYS=30
BACKUP_PATH=/srv/docker/moodle/backups

# =============================================================================
# ADMIN UI
# =============================================================================
ADMIN_UI_ENABLED=true
ADMIN_UI_PATH=/moodle-admin
ADMIN_UI_USERNAME=admin
ADMIN_UI_PASSWORD=<admin-ui-passwort>
```

### 3. Mit Traefik starten

```bash
docker compose --profile traefik up -d
```

### 4. Ohne Traefik (externer Reverse Proxy)

Wenn Sie einen externen Reverse Proxy verwenden:

```bash
docker compose up -d
```

Konfigurieren Sie Ihren Reverse Proxy für:
- Port 80 des Moodle-Containers
- SSL-Terminierung
- WebSocket-Support (für BigBlueButton, etc.)

**Beispiel nginx-Konfiguration:**

```nginx
server {
    listen 443 ssl http2;
    server_name moodle.ihre-schule.de;

    ssl_certificate /etc/letsencrypt/live/moodle.ihre-schule.de/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/moodle.ihre-schule.de/privkey.pem;

    client_max_body_size 100M;

    location / {
        proxy_pass http://localhost:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # WebSocket Support
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }

    location /moodle-admin {
        proxy_pass http://localhost:8081;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

---

## Docker-Netzwerk-Konfiguration

### Internes Netzwerk

Alle Container kommunizieren über ein internes Docker-Netzwerk:

```yaml
networks:
  moodle-internal:
    driver: bridge
    internal: true  # Kein Internet-Zugang
```

### Externes Netzwerk (edulution)

Bei Integration in edulution:

```yaml
networks:
  edulution:
    external: true
```

---

## Persistente Daten

### Volumes

| Volume | Pfad im Container | Beschreibung |
|--------|-------------------|--------------|
| `moodle_data` | `/var/www/moodledata` | Moodle-Dateien (Uploads, Cache) |
| `moodle_db` | `/var/lib/mysql` | Datenbank-Dateien |
| `moodle_redis` | `/data` | Redis-Persistenz |

### Bind Mounts (Alternative)

```yaml
volumes:
  - /srv/docker/moodle/data:/var/www/moodledata
  - /srv/docker/moodle/db:/var/lib/mysql
  - /srv/docker/moodle/config:/srv/config
  - /srv/docker/moodle/backups:/srv/backups
```

---

## Health Checks

### Container Health

```yaml
healthcheck:
  test: ["CMD", "/opt/scripts/healthcheck.sh"]
  interval: 30s
  timeout: 10s
  retries: 3
  start_period: 300s
```

### Monitoring-Endpunkte

| Endpunkt | Beschreibung |
|----------|--------------|
| `/health` | Basis-Health-Check |
| `/health/db` | Datenbank-Verbindung |
| `/health/redis` | Redis-Verbindung |
| `/health/sync` | Sync-Service-Status |

---

## Updates

### Moodle-Updates

```bash
# Image aktualisieren
docker compose pull moodle

# Neustart
docker compose up -d moodle

# Upgrade ausführen (automatisch beim Start)
docker compose logs -f moodle | grep -i upgrade
```

### Plugin-Updates

```bash
# Plugins aktualisieren
docker compose exec moodle python3 /opt/scripts/plugin_manager.py --sync --force

# Oder Container neustarten
docker compose restart moodle
```

---

## Fehlerbehebung

### Container-Logs

```bash
# Alle Logs
docker compose logs -f

# Nur Moodle
docker compose logs -f moodle

# Nur Fehler
docker compose logs moodle 2>&1 | grep -i error
```

### Shell im Container

```bash
docker compose exec moodle bash
```

### Datenbank-Zugriff

```bash
docker compose exec db mysql -u root -p moodle
```

### Moodle CLI

```bash
docker compose exec moodle php admin/cli/maintenance.php --enable
docker compose exec moodle moosh config-get core
```

## Nächste Schritte

- [Umgebungsvariablen](/docs/edulution-plattform/apps/mit-einrichtung/lernmanagement/konfiguration/umgebungsvariablen) - Alle Einstellungen
- [Synchronisation](/docs/edulution-plattform/apps/mit-einrichtung/lernmanagement/konfiguration/synchronisation) - Sync-Konfiguration
- [Admin-UI](/docs/edulution-plattform/apps/mit-einrichtung/lernmanagement/konfiguration/administration/admin-ui) - Verwaltungsoberfläche
