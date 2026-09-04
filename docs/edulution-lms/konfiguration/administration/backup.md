---
sidebar_position: 2
title: Backup & Wiederherstellung
sidebar_custom_props:
  audience: admin
---

# Backup & Wiederherstellung

edulution Moodle erstellt automatische Backups und bietet verschiedene Wiederherstellungsoptionen.

## Automatische Backups

### Konfiguration

```bash
# Automatische Backups aktivieren
BACKUP_ENABLED=true

# Backup-Zeitplan (Cron-Format)
BACKUP_SCHEDULE=0 2 * * *    # Täglich um 2:00 Uhr

# Aufbewahrungsdauer
BACKUP_RETENTION_DAYS=30

# Backup-Pfad
BACKUP_PATH=/srv/docker/moodle/backups
```

### Backup-Inhalt

Jedes Backup enthält:

| Komponente | Beschreibung | Dateigröße |
|------------|--------------|------------|
| **Datenbank** | Vollständiger MySQL-Dump | ~100MB-1GB |
| **Moodledata** | Alle hochgeladenen Dateien | Variabel |
| **Konfiguration** | config.php, plugins.json | ~1MB |
| **Metadaten** | Backup-Info, Checksummen | ~1KB |

### Backup-Format

```
/srv/docker/moodle/backups/
├── moodle_backup_20240115_020000.tar.gz
├── moodle_backup_20240114_020000.tar.gz
├── moodle_backup_20240113_020000.tar.gz
└── ...
```

Jede Backup-Datei enthält:

```
moodle_backup_20240115_020000/
├── database.sql.gz          # Datenbank-Dump
├── moodledata.tar.gz        # Moodledata-Archiv
├── config/                  # Konfigurationsdateien
│   ├── config.php
│   └── plugins.json
├── backup_info.json         # Metadaten
└── checksums.sha256         # Prüfsummen
```

## Manuelles Backup

### Via Admin-UI

1. Öffnen Sie `/moodle-admin`
2. Navigieren Sie zu "Backups"
3. Klicken Sie auf "Backup erstellen"
4. Wählen Sie den Backup-Typ:
   - **Vollständig**: Datenbank + Moodledata
   - **Nur Datenbank**: Schnelleres Backup
   - **Nur Dateien**: Nur Moodledata

### Via CLI

```bash
# Vollständiges Backup
docker compose exec moodle /opt/scripts/backup.sh

# Nur Datenbank
docker compose exec moodle /opt/scripts/backup.sh --db-only

# Nur Moodledata
docker compose exec moodle /opt/scripts/backup.sh --data-only

# Mit benutzerdefiniertem Namen
docker compose exec moodle /opt/scripts/backup.sh --name vor_update

# Backup ohne Kompression (schneller)
docker compose exec moodle /opt/scripts/backup.sh --no-compress
```

### Via API

```bash
# Vollständiges Backup
curl -X POST -u admin:password \
  https://moodle.de/moodle-admin/api/backups

# Nur Datenbank
curl -X POST -u admin:password \
  -H "Content-Type: application/json" \
  -d '{"type": "database"}' \
  https://moodle.de/moodle-admin/api/backups
```

## Backup-Verifizierung

### Automatische Verifizierung

Nach jedem Backup werden automatisch geprüft:

1. **Dateigröße**: Backup muss Mindestgröße haben
2. **Integrität**: Archiv muss lesbar sein
3. **Checksummen**: SHA256-Prüfsummen werden erstellt

### Manuelle Verifizierung

```bash
# Backup-Integrität prüfen
docker compose exec moodle /opt/scripts/backup.sh --verify latest

# Spezifisches Backup prüfen
docker compose exec moodle /opt/scripts/backup.sh --verify moodle_backup_20240115_020000.tar.gz

# Checksummen prüfen
cd /srv/docker/moodle/backups
sha256sum -c moodle_backup_20240115_020000/checksums.sha256
```

## Wiederherstellung

:::danger Achtung
Die Wiederherstellung überschreibt alle aktuellen Daten unwiderruflich!
:::

### Vor der Wiederherstellung

1. **Wartungsmodus aktivieren**
2. **Aktuelles Backup erstellen** (falls möglich)
3. **Benutzer informieren**

### Via Admin-UI

1. Navigieren Sie zu "Backups"
2. Wählen Sie das gewünschte Backup
3. Klicken Sie auf "Wiederherstellen"
4. Bestätigen Sie die Warnung
5. Warten Sie auf den Abschluss

### Via CLI

```bash
# Letztes Backup wiederherstellen
docker compose exec moodle /opt/scripts/restore.sh latest

# Spezifisches Backup wiederherstellen
docker compose exec moodle /opt/scripts/restore.sh moodle_backup_20240115_020000.tar.gz

# Nur Datenbank wiederherstellen
docker compose exec moodle /opt/scripts/restore.sh --db-only moodle_backup_20240115_020000.tar.gz

# Dry-Run (zeigt was passieren würde)
docker compose exec moodle /opt/scripts/restore.sh --dry-run latest
```

### Wiederherstellungs-Schritte

Der Restore-Prozess:

1. Wartungsmodus wird aktiviert
2. Aktueller Stand wird gesichert (Notfall-Backup)
3. Datenbank wird wiederhergestellt
4. Moodledata wird wiederhergestellt
5. Konfiguration wird geprüft
6. Cache wird geleert
7. Datenbank-Upgrade wird ausgeführt (falls nötig)
8. Wartungsmodus wird deaktiviert

## Externes Backup

### Backup auf NAS/NFS

```yaml
volumes:
  - type: volume
    source: backup_nfs
    target: /srv/backups
    volume:
      nocopy: true

volumes:
  backup_nfs:
    driver: local
    driver_opts:
      type: nfs
      o: addr=nas.local,rw,nolock
      device: ":/backups/moodle"
```

### Backup zu S3

```bash
# S3-Sync konfigurieren
BACKUP_S3_ENABLED=true
BACKUP_S3_BUCKET=moodle-backups
BACKUP_S3_ACCESS_KEY=your-access-key
BACKUP_S3_SECRET_KEY=your-secret-key
BACKUP_S3_ENDPOINT=s3.eu-central-1.amazonaws.com
```

### Backup zu Restic

```bash
# Restic-Repository konfigurieren
BACKUP_RESTIC_ENABLED=true
BACKUP_RESTIC_REPO=s3:s3.amazonaws.com/bucket/moodle
BACKUP_RESTIC_PASSWORD=your-restic-password
```

## Backup-Rotation

### Automatische Rotation

Alte Backups werden automatisch gelöscht:

```bash
BACKUP_RETENTION_DAYS=30
```

### Manuelle Bereinigung

```bash
# Backups älter als 14 Tage löschen
docker compose exec moodle /opt/scripts/backup.sh --cleanup 14

# Alle Backups außer den letzten 5 löschen
docker compose exec moodle /opt/scripts/backup.sh --keep-last 5
```

## Disaster Recovery

### Vollständiger Datenverlust

Bei totalem Datenverlust:

1. **Neuen Server aufsetzen**
   ```bash
   git clone https://github.com/edulution-io/edulution-moodle.git
   cd edulution-moodle
   cp .env.example .env
   ```

2. **Backup von externem Speicher holen**
   ```bash
   scp backup-server:/backups/moodle_backup_latest.tar.gz /srv/docker/moodle/backups/
   ```

3. **Container starten**
   ```bash
   docker compose up -d
   ```

4. **Restore ausführen**
   ```bash
   docker compose exec moodle /opt/scripts/restore.sh moodle_backup_latest.tar.gz
   ```

### Datenbank-Recovery

Bei Datenbank-Korruption:

```bash
# Container stoppen
docker compose stop moodle

# Datenbank-Container neu erstellen
docker compose rm -f db
docker compose up -d db

# Warten bis DB bereit
sleep 30

# Backup wiederherstellen
docker compose exec moodle /opt/scripts/restore.sh --db-only latest

# Moodle neu starten
docker compose start moodle
```

### Point-in-Time Recovery

Mit Binary Logs:

```bash
# Binary Logs aktivieren (in mysql config)
log_bin = mysql-bin
expire_logs_days = 7

# Wiederherstellen bis bestimmtem Zeitpunkt
mysqlbinlog --stop-datetime="2024-01-15 10:30:00" mysql-bin.* | mysql -u root -p moodle
```

## Monitoring

### Backup-Status prüfen

```bash
# Letztes Backup
docker compose exec moodle /opt/scripts/backup.sh --status

# Backup-Liste
docker compose exec moodle ls -lah /srv/backups/
```

### Benachrichtigungen

```bash
# Webhook bei Backup-Fehler
WEBHOOK_URL=https://hooks.slack.com/...
WEBHOOK_ON_BACKUP=true
```

### Healthcheck

```bash
# Backup-Age prüfen (Warnung wenn > 48h)
docker compose exec moodle /opt/scripts/backup.sh --check-age 48
```

## Best Practices

### Empfohlene Backup-Strategie

| Typ | Häufigkeit | Aufbewahrung |
|-----|------------|--------------|
| Vollständig | Täglich | 30 Tage |
| Datenbank | Stündlich | 7 Tage |
| Extern | Wöchentlich | 1 Jahr |

### Vor Updates

```bash
# Backup vor Moodle-Update
docker compose exec moodle /opt/scripts/backup.sh --name vor_update_$(date +%Y%m%d)
```

### Test-Restores

Führen Sie regelmäßig Test-Restores durch:

1. Backup auf Test-System kopieren
2. Restore durchführen
3. Funktionalität prüfen
4. Dokumentieren

## Fehlerbehebung

### Backup fehlgeschlagen

```bash
# Logs prüfen
docker compose logs moodle | grep -i backup

# Speicherplatz prüfen
df -h /srv/docker/moodle/backups

# Berechtigungen prüfen
ls -la /srv/docker/moodle/backups
```

### Restore fehlgeschlagen

```bash
# Backup-Integrität prüfen
tar -tzf /srv/docker/moodle/backups/backup.tar.gz

# Manueller Datenbank-Import
docker compose exec -T db mysql -u root -p moodle < database.sql
```

### Backup zu groß

```bash
# Moodledata bereinigen
docker compose exec moodle php admin/cli/purge_caches.php
docker compose exec moodle rm -rf /var/www/moodledata/trashdir/*
docker compose exec moodle rm -rf /var/www/moodledata/temp/*
```
