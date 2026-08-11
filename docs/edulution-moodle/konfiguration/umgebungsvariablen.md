---
sidebar_position: 1
title: Umgebungsvariablen
---

# Umgebungsvariablen

edulution Moodle wird vollständig über Umgebungsvariablen konfiguriert. Diese Referenz listet alle verfügbaren Optionen.

## Allgemein

| Variable | Standard | Beschreibung |
|----------|----------|--------------|
| `ENVIRONMENT` | `production` | Umgebung: `production` oder `development` |
| `TIMEZONE` | `Europe/Berlin` | Zeitzone des Containers |
| `DATA_PATH` | `/srv/docker/moodle` | Basis-Pfad für alle Daten |

## Moodle-Grundkonfiguration

| Variable | Standard | Beschreibung |
|----------|----------|--------------|
| `MOODLE_URL` | - | **Erforderlich.** Vollständige URL zu Moodle |
| `MOODLE_SITE_NAME` | `Moodle` | Name der Moodle-Site |
| `MOODLE_SITE_SHORTNAME` | `moodle` | Kurzname der Site |
| `MOODLE_ADMIN_USER` | `admin` | Admin-Benutzername |
| `MOODLE_ADMIN_PASSWORD` | (generiert) | Admin-Passwort |
| `MOODLE_ADMIN_EMAIL` | `admin@localhost` | Admin-E-Mail-Adresse |
| `MOODLE_LANG` | `de` | Standard-Sprache |
| `MOODLE_VERSION` | `MOODLE_405_STABLE` | Moodle-Version (Branch) |

### Moodle-Pfade

| Variable | Standard | Beschreibung |
|----------|----------|--------------|
| `MOODLE_PATH` | `/var/www/html/moodle` | Moodle-Installationspfad |
| `MOODLE_DATA_PATH` | `/var/www/moodledata` | Moodledata-Verzeichnis |
| `MOODLE_CACHE_DIR` | `/var/www/moodledata/cache` | Cache-Verzeichnis |

### Moodle-Performance

| Variable | Standard | Beschreibung |
|----------|----------|--------------|
| `MOODLE_CACHE_STORES` | `redis` | Cache-Speicher: `redis`, `file`, `memcached` |
| `MOODLE_SESSION_HANDLER` | `redis` | Session-Handler: `redis`, `file`, `database` |
| `MOODLE_LOCK_FACTORY` | `redis` | Lock-Factory: `redis`, `file`, `database` |

## Datenbank

| Variable | Standard | Beschreibung |
|----------|----------|--------------|
| `MARIADB_HOST` | `db` | Datenbank-Host |
| `MARIADB_PORT` | `3306` | Datenbank-Port |
| `MARIADB_DATABASE` | `moodle` | Datenbank-Name |
| `MARIADB_USER` | `moodle` | Datenbank-Benutzer |
| `MARIADB_PASSWORD` | - | Datenbank-Passwort |
| `MARIADB_PASSWORD_FILE` | - | Pfad zu Passwort-Datei (für Secrets) |
| `MARIADB_ROOT_PASSWORD` | - | Root-Passwort |
| `MARIADB_ROOT_PASSWORD_FILE` | - | Pfad zu Root-Passwort-Datei |

### Datenbank-Optionen

| Variable | Standard | Beschreibung |
|----------|----------|--------------|
| `DB_PREFIX` | `mdl_` | Tabellen-Präfix |
| `DB_COLLATION` | `utf8mb4_unicode_ci` | Datenbank-Collation |
| `DB_MAX_CONNECTIONS` | `100` | Maximale Verbindungen |

## Redis

| Variable | Standard | Beschreibung |
|----------|----------|--------------|
| `REDIS_HOST` | `redis` | Redis-Host |
| `REDIS_PORT` | `6379` | Redis-Port |
| `REDIS_PASSWORD` | - | Redis-Passwort (optional) |
| `REDIS_PREFIX` | `moodle_` | Key-Präfix |
| `REDIS_SESSION_DB` | `0` | Redis-DB für Sessions |
| `REDIS_CACHE_DB` | `1` | Redis-DB für Cache |
| `REDIS_LOCK_DB` | `2` | Redis-DB für Locks |

## Keycloak/OAuth2

### OAuth2-Client (für SSO)

| Variable | Standard | Beschreibung |
|----------|----------|--------------|
| `KEYCLOAK_URL` | - | **Erforderlich.** Keycloak-URL |
| `KEYCLOAK_REALM` | - | **Erforderlich.** Realm-Name |
| `KEYCLOAK_CLIENT_ID` | `moodle` | Client-ID für SSO |
| `KEYCLOAK_CLIENT_SECRET` | - | Client-Secret |
| `KEYCLOAK_CLIENT_SECRET_FILE` | - | Pfad zu Secret-Datei |

### OAuth2-Optionen

| Variable | Standard | Beschreibung |
|----------|----------|--------------|
| `OAUTH2_ENABLED` | `true` | OAuth2 aktivieren |
| `OAUTH2_ISSUER_NAME` | `Keycloak` | Angezeigter Name |
| `OAUTH2_LOGIN_TEXT` | `Login mit SSO` | Button-Text |
| `OAUTH2_LINK_BY_EMAIL` | `true` | Benutzer via E-Mail verknüpfen |
| `OAUTH2_CREATE_USERS` | `false` | Benutzer automatisch erstellen |

### Sync Service Account

| Variable | Standard | Beschreibung |
|----------|----------|--------------|
| `KEYCLOAK_SYNC_CLIENT_ID` | `moodle-sync` | Sync-Client-ID |
| `KEYCLOAK_SYNC_CLIENT_SECRET` | - | Sync-Client-Secret |
| `KEYCLOAK_SYNC_CLIENT_SECRET_FILE` | - | Pfad zu Secret-Datei |

## Synchronisation

### Allgemein

| Variable | Standard | Beschreibung |
|----------|----------|--------------|
| `SYNC_ENABLED` | `true` | Synchronisation aktivieren |
| `SYNC_INTERVAL` | `300` | Sync-Intervall in Sekunden |
| `SYNC_ON_STARTUP` | `true` | Sync beim Start ausführen |
| `SYNC_LOG_LEVEL` | `INFO` | Log-Level: `DEBUG`, `INFO`, `WARNING`, `ERROR` |

### Benutzer-Sync

| Variable | Standard | Beschreibung |
|----------|----------|--------------|
| `SYNC_USERS` | `true` | Benutzer synchronisieren |
| `SYNC_ROLES` | `role-teacher,role-student,role-schooladministrator` | Zu synchronisierende Rollen (kommagetrennt) |
| `SYNC_USER_ATTRIBUTES` | `firstName,lastName,email` | Zu synchronisierende Attribute |
| `SYNC_USER_FILTER` | - | LDAP-Filter für Benutzer |

### Gruppen-Sync

| Variable | Standard | Beschreibung |
|----------|----------|--------------|
| `SYNC_GROUPS` | `true` | Gruppen synchronisieren |
| `SYNC_GROUP_PREFIX` | - | Nur Gruppen mit diesem Präfix |
| `SYNC_GROUP_ATTRIBUTE` | - | Attribut für Gruppen-Filter |
| `SYNC_CREATE_COURSES` | `true` | Kurse automatisch erstellen |
| `SYNC_COURSE_CATEGORY` | `Synced Courses` | Kategorie für erstellte Kurse |

### Rollen-Mapping

| Variable | Standard | Beschreibung |
|----------|----------|--------------|
| `SYNC_ROLE_TEACHER` | `editingteacher` | Moodle-Rolle für role-teacher |
| `SYNC_ROLE_STUDENT` | `student` | Moodle-Rolle für role-student |
| `SYNC_ROLE_ADMIN` | `manager` | Moodle-Rolle für role-schooladministrator |

### Soft-Delete

| Variable | Standard | Beschreibung |
|----------|----------|--------------|
| `SYNC_SOFT_DELETE` | `true` | Soft-Delete aktivieren |
| `SYNC_SOFT_DELETE_DAYS` | `30` | Tage bis zur endgültigen Löschung |
| `SYNC_SUSPEND_DELETED` | `true` | Gelöschte Benutzer suspendieren |

## Plugins

| Variable | Standard | Beschreibung |
|----------|----------|--------------|
| `PLUGIN_CONFIG` | `/srv/config/plugins.json` | Pfad zur Plugin-Konfiguration |
| `PLUGIN_STATE_FILE` | `/srv/data/plugin_state.json` | State-Datei für Plugin-Manager |
| `PLUGIN_INSTALL_DELAY` | `3` | Verzögerung zwischen Plugin-Installationen |
| `PLUGIN_SYNC_ON_STARTUP` | `true` | Plugins beim Start synchronisieren |

## Admin-UI

| Variable | Standard | Beschreibung |
|----------|----------|--------------|
| `ADMIN_UI_ENABLED` | `true` | Admin-UI aktivieren |
| `ADMIN_UI_PATH` | `/moodle-admin` | URL-Pfad zur Admin-UI |
| `ADMIN_UI_PORT` | `8081` | Port für Admin-UI |
| `ADMIN_UI_USERNAME` | `admin` | Admin-UI Benutzername |
| `ADMIN_UI_PASSWORD` | - | Admin-UI Passwort |
| `ADMIN_UI_PASSWORD_FILE` | - | Pfad zu Passwort-Datei |

## Backup

| Variable | Standard | Beschreibung |
|----------|----------|--------------|
| `BACKUP_ENABLED` | `true` | Automatische Backups aktivieren |
| `BACKUP_SCHEDULE` | `0 2 * * *` | Cron-Ausdruck für Backup-Zeitplan |
| `BACKUP_PATH` | `/srv/backups` | Backup-Verzeichnis |
| `BACKUP_RETENTION_DAYS` | `30` | Tage bis zur Löschung alter Backups |
| `BACKUP_COMPRESSION` | `gzip` | Kompression: `gzip`, `bzip2`, `none` |
| `BACKUP_INCLUDE_DB` | `true` | Datenbank in Backup einschließen |
| `BACKUP_INCLUDE_DATA` | `true` | Moodledata in Backup einschließen |

## E-Mail

| Variable | Standard | Beschreibung |
|----------|----------|--------------|
| `SMTP_HOST` | - | SMTP-Server |
| `SMTP_PORT` | `587` | SMTP-Port |
| `SMTP_USER` | - | SMTP-Benutzername |
| `SMTP_PASSWORD` | - | SMTP-Passwort |
| `SMTP_SECURE` | `tls` | Verschlüsselung: `tls`, `ssl`, `none` |
| `SMTP_FROM` | - | Absender-Adresse |
| `SMTP_FROM_NAME` | `Moodle` | Absender-Name |

## PHP-Konfiguration

| Variable | Standard | Beschreibung |
|----------|----------|--------------|
| `PHP_MEMORY_LIMIT` | `512M` | Memory-Limit |
| `PHP_MAX_EXECUTION_TIME` | `300` | Max. Ausführungszeit |
| `PHP_MAX_INPUT_TIME` | `300` | Max. Input-Zeit |
| `PHP_POST_MAX_SIZE` | `100M` | Max. POST-Größe |
| `PHP_UPLOAD_MAX_FILESIZE` | `100M` | Max. Upload-Größe |
| `PHP_MAX_INPUT_VARS` | `5000` | Max. Input-Variablen |
| `PHP_OPCACHE_ENABLE` | `1` | OPcache aktivieren |
| `PHP_OPCACHE_MEMORY` | `256` | OPcache Memory (MB) |

## Sicherheit

| Variable | Standard | Beschreibung |
|----------|----------|--------------|
| `MOODLE_SECURE_COOKIES` | `true` | Sichere Cookies erzwingen |
| `MOODLE_SSL_PROXY` | `true` | Hinter SSL-Proxy |
| `MOODLE_CRON_PASSWORD` | - | Passwort für Web-Cron |
| `MOODLE_PASSWORD_POLICY` | `true` | Passwort-Policy aktivieren |

## Logging

| Variable | Standard | Beschreibung |
|----------|----------|--------------|
| `LOG_LEVEL` | `INFO` | Container-Log-Level |
| `LOG_FORMAT` | `json` | Log-Format: `json`, `text` |
| `LOG_PATH` | `/var/log/moodle` | Log-Verzeichnis |
| `LOG_ROTATION` | `daily` | Log-Rotation: `daily`, `weekly`, `monthly` |
| `LOG_RETENTION_DAYS` | `30` | Log-Aufbewahrung in Tagen |

## Webhook-Benachrichtigungen

| Variable | Standard | Beschreibung |
|----------|----------|--------------|
| `WEBHOOK_URL` | - | Webhook-URL für Benachrichtigungen |
| `WEBHOOK_ON_ERROR` | `true` | Benachrichtigung bei Fehlern |
| `WEBHOOK_ON_SYNC` | `false` | Benachrichtigung nach Sync |
| `WEBHOOK_ON_BACKUP` | `false` | Benachrichtigung nach Backup |

## Migration

| Variable | Standard | Beschreibung |
|----------|----------|--------------|
| `MIGRATION_MODE` | `false` | Migrationsmodus aktivieren |
| `MIGRATION_OLD_URL` | - | URL der alten Installation |
| `MIGRATION_URL_REPLACE` | `false` | URLs automatisch ersetzen |

## Beispiel `.env`-Datei

```bash
# Basis
ENVIRONMENT=production
TIMEZONE=Europe/Berlin
MOODLE_URL=https://moodle.schule.de
MOODLE_SITE_NAME=Unsere Schule Moodle

# Datenbank
MARIADB_PASSWORD=geheim123
MARIADB_ROOT_PASSWORD=supergeheim456

# Keycloak
KEYCLOAK_URL=https://sso.schule.de
KEYCLOAK_REALM=schule
KEYCLOAK_CLIENT_SECRET=abc123...
KEYCLOAK_SYNC_CLIENT_SECRET=xyz789...

# Sync
SYNC_ENABLED=true
SYNC_INTERVAL=300
SYNC_GROUP_PREFIX=moodle_

# Backup
BACKUP_ENABLED=true
BACKUP_SCHEDULE=0 2 * * *
```

## Secrets-Management

Für sensible Daten empfehlen wir die Verwendung von Docker Secrets:

```yaml
secrets:
  moodle_db_password:
    file: ./secrets/db_password
```

Und in der `.env`:

```bash
MARIADB_PASSWORD_FILE=/run/secrets/moodle_db_password
```

:::tip Best Practice
Verwenden Sie immer `_FILE`-Varianten für Passwörter in Produktionsumgebungen.
:::
