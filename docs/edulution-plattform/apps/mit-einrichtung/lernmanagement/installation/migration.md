---
sidebar_position: 4
title: Migration
sidebar_custom_props:
  audience: admin
---

# Migration einer bestehenden Moodle-Installation

Diese Anleitung beschreibt, wie Sie eine bestehende Moodle-Installation zu edulution Moodle migrieren können.

:::warning Wichtig
Erstellen Sie vor der Migration unbedingt ein vollständiges Backup Ihrer bestehenden Installation!
:::

## Übersicht des Migrationsprozesses

```mermaid
flowchart TD
    A[Bestehendes Moodle] --> B[Backup erstellen]
    B --> C[edulution Moodle vorbereiten]
    C --> D[Datenbank migrieren]
    D --> E[Moodledata migrieren]
    E --> F[Plugins abgleichen]
    F --> G[Konfiguration anpassen]
    G --> H[Test & Validierung]
    H --> I[DNS umstellen]
    I --> J[Alte Installation deaktivieren]
```

## Voraussetzungen

- Bestehende Moodle-Installation (Version 3.9 oder höher)
- Zugriff auf Datenbank und Dateisystem der alten Installation
- Ausreichend Speicherplatz für Backup und neue Installation
- Geplante Wartungszeit (empfohlen: 2-4 Stunden)

## Schritt 1: Backup der alten Installation

### 1.1 Wartungsmodus aktivieren

Aktivieren Sie den Wartungsmodus auf der alten Installation:

```bash
# Via Moodle CLI
php /pfad/zu/moodle/admin/cli/maintenance.php --enable

# Oder via moosh (falls installiert)
moosh maintenance-on
```

### 1.2 Datenbank-Backup

**MariaDB/MySQL:**

```bash
mysqldump -u moodle_user -p \
    --single-transaction \
    --routines \
    --triggers \
    --events \
    moodle_database > moodle_backup_$(date +%Y%m%d).sql
```

**PostgreSQL:**

```bash
pg_dump -U moodle_user -Fc moodle_database > moodle_backup_$(date +%Y%m%d).dump
```

:::note PostgreSQL zu MariaDB
Wenn Ihre alte Installation PostgreSQL nutzt, müssen Sie die Datenbank zu MariaDB konvertieren. Siehe [PostgreSQL-Migration](#postgresql-zu-mariadb).
:::

### 1.3 Moodledata-Backup

```bash
# Moodledata-Verzeichnis sichern
tar -czvf moodledata_backup_$(date +%Y%m%d).tar.gz /pfad/zu/moodledata/
```

### 1.4 Plugin-Liste exportieren

Exportieren Sie die Liste der installierten Plugins:

```bash
# Via moosh
moosh plugin-list > installed_plugins.txt

# Oder manuell aus der Datenbank
mysql -u moodle_user -p moodle_database -e \
    "SELECT plugin, version FROM mdl_config_plugins WHERE plugin != 'core' ORDER BY plugin;" \
    > installed_plugins.txt
```

## Schritt 2: edulution Moodle vorbereiten

### 2.1 Repository klonen

```bash
git clone https://github.com/edulution-io/edulution-moodle.git
cd edulution-moodle
```

### 2.2 Basis-Konfiguration

```bash
cp .env.example .env
```

Wichtige Einstellungen für die Migration:

```bash
# Gleiche Moodle-Version wie alte Installation
MOODLE_VERSION=MOODLE_405_STABLE

# Migration aktivieren
MIGRATION_MODE=true

# Alte URL für URL-Replacement
OLD_MOODLE_URL=https://alte-moodle.ihre-schule.de
MOODLE_URL=https://moodle.ihre-schule.de

# Keycloak-Einstellungen
KEYCLOAK_URL=https://sso.ihre-schule.de
KEYCLOAK_REALM=schule
KEYCLOAK_CLIENT_ID=moodle
KEYCLOAK_CLIENT_SECRET=<secret>
```

### 2.3 Verzeichnisse erstellen

```bash
sudo mkdir -p /srv/docker/moodle/{data,db,config,backups,migration}
sudo chown -R 1000:1000 /srv/docker/moodle/
```

## Schritt 3: Datenbank migrieren

### 3.1 Backup in Migrations-Verzeichnis kopieren

```bash
cp moodle_backup_*.sql /srv/docker/moodle/migration/
```

### 3.2 Container starten (ohne Moodle)

```bash
# Nur Datenbank starten
docker compose up -d db

# Warten bis DB bereit
docker compose logs -f db
# Warten auf: "ready for connections"
```

### 3.3 Datenbank importieren

```bash
# Datenbank erstellen
docker compose exec db mysql -u root -p -e "CREATE DATABASE moodle CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"

# Backup importieren
docker compose exec -T db mysql -u root -p moodle < /srv/docker/moodle/migration/moodle_backup_*.sql
```

### 3.4 URLs in Datenbank ersetzen

```bash
# In Container einloggen
docker compose exec db mysql -u root -p moodle

# URLs ersetzen
UPDATE mdl_config SET value = 'https://moodle.ihre-schule.de' WHERE name = 'wwwroot';

# Alle URLs in Inhalten ersetzen
UPDATE mdl_course SET summary = REPLACE(summary, 'https://alte-moodle.ihre-schule.de', 'https://moodle.ihre-schule.de');
UPDATE mdl_course_sections SET summary = REPLACE(summary, 'https://alte-moodle.ihre-schule.de', 'https://moodle.ihre-schule.de');
# ... weitere Tabellen je nach Bedarf
```

:::tip Automatisches URL-Replacement
edulution Moodle kann URLs automatisch beim Start ersetzen. Setzen Sie in der `.env`:
```bash
MIGRATION_URL_REPLACE=true
MIGRATION_OLD_URL=https://alte-moodle.ihre-schule.de
```
:::

## Schritt 4: Moodledata migrieren

### 4.1 Backup extrahieren

```bash
# Moodledata extrahieren
tar -xzvf moodledata_backup_*.tar.gz -C /srv/docker/moodle/

# Umbenennen falls nötig
mv /srv/docker/moodle/moodledata /srv/docker/moodle/data
# Oder wenn bereits extrahiert:
# mv /srv/docker/moodle/pfad/zu/moodledata/* /srv/docker/moodle/data/

# Berechtigungen setzen
sudo chown -R 33:33 /srv/docker/moodle/data/
```

### 4.2 Cache-Verzeichnisse leeren

```bash
# Alte Caches entfernen
rm -rf /srv/docker/moodle/data/cache/*
rm -rf /srv/docker/moodle/data/localcache/*
rm -rf /srv/docker/moodle/data/temp/*
rm -rf /srv/docker/moodle/data/trashdir/*
rm -rf /srv/docker/moodle/data/sessions/*
```

## Schritt 5: Plugins abgleichen

### 5.1 Plugin-Liste erstellen

Erstellen Sie `config/plugins.json` basierend auf Ihrer exportierten Plugin-Liste:

```json
{
  "plugins": [
    {
      "component": "mod_attendance",
      "name": "Anwesenheit",
      "required": true,
      "description": "Anwesenheitstracking"
    },
    {
      "component": "mod_questionnaire",
      "name": "Fragebogen",
      "required": true
    },
    {
      "component": "block_xp",
      "name": "Level Up XP",
      "required": false
    }
  ]
}
```

### 5.2 Nicht verfügbare Plugins

Manche Plugins sind möglicherweise nicht im Moodle Plugin-Verzeichnis verfügbar. Für diese:

```json
{
  "component": "local_custom_plugin",
  "name": "Custom Plugin",
  "required": true,
  "source_url": "https://github.com/org/plugin/archive/main.zip"
}
```

:::warning Inkompatible Plugins
Einige Plugins sind möglicherweise nicht mit der neuen Moodle-Version kompatibel. Testen Sie diese vor der endgültigen Migration.
:::

## Schritt 6: Moodle starten

### 6.1 Container hochfahren

```bash
docker compose up -d moodle
```

### 6.2 Upgrade durchführen

```bash
# Logs beobachten
docker compose logs -f moodle

# Datenbank-Upgrade (falls nicht automatisch)
docker compose exec moodle php admin/cli/upgrade.php --non-interactive
```

### 6.3 Caches leeren

```bash
docker compose exec moodle php admin/cli/purge_caches.php
```

## Schritt 7: OAuth2/SSO konfigurieren

### 7.1 Keycloak-Client erstellen

Falls noch nicht vorhanden, erstellen Sie den Moodle-Client in Keycloak:

```yaml
Client ID: moodle
Client Protocol: openid-connect
Access Type: confidential
Valid Redirect URIs: https://moodle.ihre-schule.de/*
```

### 7.2 OAuth2 in Moodle aktivieren

```bash
# OAuth2-Issuer erstellen
docker compose exec moodle moosh auth-manage enable oauth2

# Oder via Admin-UI
# Site administration → Plugins → Authentication → Manage authentication
```

### 7.3 Bestehende Benutzer verknüpfen

Die Migration der Benutzer-Zuordnung kann auf verschiedene Weisen erfolgen:

**Option A: Automatische Verknüpfung via E-Mail**

```bash
# In .env setzen
OAUTH2_LINK_BY_EMAIL=true
```

Benutzer werden automatisch mit ihrem Keycloak-Account verknüpft, wenn die E-Mail-Adresse übereinstimmt.

**Option B: Manuelles Linking-Script**

```bash
docker compose exec moodle php /opt/scripts/link_oauth2_users.php
```

**Option C: Benutzer müssen sich neu verknüpfen**

Benutzer können sich mit ihrem alten Passwort anmelden und dann ihren Keycloak-Account verknüpfen.

## Schritt 8: Test und Validierung

### 8.1 Funktionstest-Checkliste

- [ ] Admin-Login funktioniert
- [ ] SSO-Login funktioniert
- [ ] Kurse sind sichtbar
- [ ] Kursinhalt wird korrekt angezeigt
- [ ] Dateien sind zugänglich
- [ ] Aktivitäten funktionieren (Quiz, Aufgaben, etc.)
- [ ] Einschreibungen sind korrekt
- [ ] Bewertungen sind vorhanden
- [ ] Kalender zeigt Termine
- [ ] Nachrichten funktionieren

### 8.2 Datenintegritäts-Check

```bash
# Datenbank-Prüfung
docker compose exec moodle php admin/cli/check_database_schema.php

# Datei-Prüfung
docker compose exec moodle php admin/cli/fix_orphaned_files.php --preview
```

## Schritt 9: DNS umstellen

Wenn alle Tests erfolgreich waren:

### 9.1 DNS-Eintrag ändern

```
moodle.ihre-schule.de    A    <neue-server-ip>
```

### 9.2 Propagation abwarten

```bash
# DNS-Propagation prüfen
dig moodle.ihre-schule.de
```

### 9.3 SSL-Zertifikat prüfen

```bash
# Zertifikat prüfen
docker compose logs traefik | grep -i certificate
```

## Schritt 10: Alte Installation deaktivieren

Nach erfolgreicher Migration und Testphase:

### 10.1 Alte Installation herunterfahren

```bash
# Auf altem Server
systemctl stop apache2  # oder nginx
systemctl stop mysql
```

### 10.2 Backup aufbewahren

Bewahren Sie das Backup der alten Installation für mindestens 30 Tage auf.

## PostgreSQL zu MariaDB

Falls Ihre alte Installation PostgreSQL nutzt:

### Konvertierungsprozess

1. **pgloader installieren**

```bash
apt install pgloader
```

2. **Konvertierungskonfiguration erstellen**

```lisp
LOAD DATABASE
    FROM postgresql://user:pass@localhost/moodle_pg
    INTO mysql://root:pass@localhost/moodle_mysql

WITH include no drop, create tables, no truncate,
     create indexes, reset sequences, foreign keys

SET maintenance_work_mem to '128MB',
    work_mem to '12MB'

CAST type text to varchar(16777215),
     type boolean to tinyint using (boolean-to-int ?column),
     type bytea to blob;
```

3. **Konvertierung ausführen**

```bash
pgloader migration.load
```

:::warning Manuelle Nacharbeit
Nach der Konvertierung sind möglicherweise manuelle Anpassungen an den Datentypen erforderlich.
:::

## Fehlerbehebung

### Fehler: "Table doesn't exist"

```bash
# Datenbank neu importieren mit korrektem Präfix
docker compose exec db mysql -u root -p moodle -e "SHOW TABLES LIKE 'mdl_%';"
```

### Fehler: "File not found"

```bash
# Moodledata-Berechtigungen prüfen
docker compose exec moodle ls -la /var/www/moodledata/
```

### Fehler: "Plugin incompatible"

```bash
# Plugin-Verzeichnis manuell entfernen
docker compose exec moodle rm -rf /var/www/html/moodle/mod/problematic_plugin
docker compose exec moodle php admin/cli/upgrade.php
```

## Rollback

Falls die Migration fehlschlägt:

1. DNS zurück auf alte Installation
2. Wartungsmodus auf alter Installation deaktivieren
3. Neue Container herunterfahren
4. Fehler analysieren und beheben
5. Migration erneut versuchen

## Nächste Schritte

Nach erfolgreicher Migration:

- [Synchronisation konfigurieren](/docs/edulution-plattform/apps/mit-einrichtung/lernmanagement/konfiguration/synchronisation)
- [Plugins verwalten](/docs/edulution-plattform/apps/mit-einrichtung/lernmanagement/konfiguration/plugins)
- [Backup einrichten](/docs/edulution-plattform/apps/mit-einrichtung/lernmanagement/konfiguration/administration/backup)
