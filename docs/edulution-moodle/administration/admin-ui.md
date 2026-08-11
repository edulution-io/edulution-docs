---
sidebar_position: 1
title: Admin-Oberfläche
---

# Admin-Oberfläche

Die edulution Moodle Admin-Oberfläche bietet eine zentrale Verwaltung für Synchronisation, Plugins, Backups und System-Status.

## Zugriff

Die Admin-UI ist unter folgendem Pfad erreichbar:

```
https://ihre-moodle-url.de/moodle-admin
```

### Authentifizierung

Der Zugang ist passwortgeschützt:

```bash
ADMIN_UI_USERNAME=admin
ADMIN_UI_PASSWORD=ihr-sicheres-passwort
```

:::warning Sicherheit
Ändern Sie das Standard-Passwort vor dem ersten Produktivbetrieb!
:::

## Dashboard

Das Dashboard zeigt eine Übersicht aller wichtigen Systemkomponenten:

### System-Status

| Indikator | Beschreibung |
|-----------|--------------|
| **Moodle** | Status des Moodle-Webservers |
| **Datenbank** | MariaDB-Verbindungsstatus |
| **Redis** | Cache-Verbindungsstatus |
| **Sync** | Status des Sync-Services |

### Schnellaktionen

- **Sync starten**: Sofortige Synchronisation auslösen
- **Caches leeren**: Alle Moodle-Caches purgen
- **Backup erstellen**: Manuelles Backup starten
- **Wartungsmodus**: Moodle in Wartung versetzen

## Synchronisation

### Sync-Status

Zeigt den aktuellen Status der Keycloak-Synchronisation:

- **Letzter Sync**: Zeitpunkt des letzten Sync-Laufs
- **Nächster Sync**: Geplanter nächster Sync
- **Status**: `idle`, `running`, `error`
- **Letzte Ergebnisse**: Statistiken des letzten Syncs

### Sync-Statistiken

| Metrik | Beschreibung |
|--------|--------------|
| Benutzer erstellt | Neue Benutzer angelegt |
| Benutzer aktualisiert | Bestehende Benutzer geändert |
| Benutzer deaktiviert | Als gelöscht markiert |
| Gruppen erstellt | Neue Kurse erstellt |
| Einschreibungen hinzugefügt | Neue Kurseinschreibungen |
| Einschreibungen entfernt | Ausschreibungen |

### Manueller Sync

1. Klicken Sie auf **"Sync jetzt starten"**
2. Wählen Sie den Sync-Typ:
   - **Vollständig**: Benutzer und Gruppen
   - **Nur Benutzer**: Nur Benutzerdaten
   - **Nur Gruppen**: Nur Gruppen/Kurse
3. Optional: **Dry-Run** aktivieren (keine Änderungen)
4. Bestätigen Sie den Vorgang

### Sync-Logs

Zeigt die letzten Sync-Ereignisse:

```
2024-01-15 10:30:00 [INFO] Starting sync...
2024-01-15 10:30:05 [INFO] Fetched 150 users from Keycloak
2024-01-15 10:30:10 [INFO] Created 5 new users
2024-01-15 10:30:15 [INFO] Updated 12 existing users
2024-01-15 10:30:20 [INFO] Sync completed successfully
```

## Plugin-Verwaltung

### Plugin-Liste

Zeigt alle konfigurierten und installierten Plugins:

| Spalte | Beschreibung |
|--------|--------------|
| **Name** | Plugin-Anzeigename |
| **Komponente** | Technischer Name (z.B. `mod_attendance`) |
| **Status** | Installed / Missing / Error |
| **Version** | Installierte Version |
| **Erforderlich** | Ja / Nein |

### Plugin-Aktionen

- **Plugins synchronisieren**: Alle Plugins mit Konfiguration abgleichen
- **Force-Sync**: Alle Plugins neu installieren
- **Report generieren**: Status-Report erstellen

### Plugin-Status

| Status | Farbe | Beschreibung |
|--------|-------|--------------|
| Installed | Grün | Plugin ist installiert |
| Missing | Gelb | Plugin fehlt, wird bei nächstem Sync installiert |
| Error | Rot | Installation fehlgeschlagen |
| Dev-Only | Grau | Nur in Development verfügbar |

## Backup-Management

### Backup-Übersicht

Zeigt vorhandene Backups:

| Spalte | Beschreibung |
|--------|--------------|
| **Datum** | Erstellungszeitpunkt |
| **Typ** | Automatisch / Manuell |
| **Größe** | Backup-Größe |
| **Inhalt** | DB / Data / Beide |
| **Status** | Erfolgreich / Fehlgeschlagen |

### Backup erstellen

1. Klicken Sie auf **"Backup erstellen"**
2. Wählen Sie den Backup-Typ:
   - **Vollständig**: Datenbank + Moodledata
   - **Nur Datenbank**: Nur MySQL-Dump
   - **Nur Dateien**: Nur Moodledata
3. Bestätigen Sie

### Backup herunterladen

Klicken Sie auf das Download-Symbol neben einem Backup.

:::note Große Backups
Bei großen Backups (>1GB) kann der Download einige Zeit dauern.
:::

### Backup wiederherstellen

:::danger Achtung
Die Wiederherstellung überschreibt alle aktuellen Daten!
:::

1. Wählen Sie ein Backup
2. Klicken Sie auf **"Wiederherstellen"**
3. Bestätigen Sie die Warnung
4. Warten Sie auf den Abschluss

## Benutzer-Verwaltung

### Benutzer-Liste

Zeigt synchronisierte Benutzer mit Filter-Optionen:

- **Alle Benutzer**
- **Aktive Benutzer**
- **Suspendierte Benutzer**
- **Zur Löschung markiert**

### Benutzer-Details

| Feld | Beschreibung |
|------|--------------|
| **Benutzername** | Moodle-Benutzername |
| **E-Mail** | E-Mail-Adresse |
| **Keycloak-ID** | Verknüpfte Keycloak-ID |
| **Rollen** | Zugewiesene Rollen |
| **Kurse** | Eingeschriebene Kurse |
| **Status** | Aktiv / Suspendiert |
| **Sync-Status** | Letzter Sync-Zeitpunkt |

### Benutzer-Aktionen

- **Passwort zurücksetzen**: Setzt das lokale Passwort zurück
- **Suspendieren**: Benutzer vorübergehend sperren
- **OAuth2 verknüpfen**: Manuelle Keycloak-Verknüpfung

## Log-Viewer

### Log-Typen

| Log | Beschreibung |
|-----|--------------|
| **Sync-Log** | Synchronisations-Ereignisse |
| **Plugin-Log** | Plugin-Installation/Updates |
| **Error-Log** | Fehler und Warnungen |
| **Access-Log** | Zugriffsprotokolle |

### Filter

- **Zeitraum**: Heute, Letzte 7 Tage, Letzte 30 Tage
- **Level**: Debug, Info, Warning, Error
- **Suche**: Freitext-Suche

### Export

Logs können als JSON oder CSV exportiert werden.

## System-Einstellungen

### Allgemeine Einstellungen

| Einstellung | Beschreibung |
|-------------|--------------|
| **Site-Name** | Name der Moodle-Instanz |
| **Zeitzone** | System-Zeitzone |
| **Sprache** | Standard-Sprache |

### Sync-Einstellungen

| Einstellung | Beschreibung |
|-------------|--------------|
| **Sync aktiviert** | Automatischen Sync an/aus |
| **Sync-Intervall** | Zeit zwischen Syncs |
| **Gruppen-Präfix** | Filter für Gruppen |

### Backup-Einstellungen

| Einstellung | Beschreibung |
|-------------|--------------|
| **Auto-Backup** | Automatische Backups an/aus |
| **Backup-Zeit** | Täglicher Backup-Zeitpunkt |
| **Aufbewahrung** | Tage bis zur Löschung |

## API-Endpunkte

Die Admin-UI stellt auch eine REST-API bereit:

### Authentifizierung

```bash
# Basic Auth
curl -u admin:password https://moodle.de/moodle-admin/api/status
```

### Endpunkte

| Methode | Pfad | Beschreibung |
|---------|------|--------------|
| GET | `/api/status` | System-Status |
| GET | `/api/sync/status` | Sync-Status |
| POST | `/api/sync` | Sync starten |
| GET | `/api/plugins` | Plugin-Liste |
| POST | `/api/plugins/sync` | Plugins synchronisieren |
| GET | `/api/backups` | Backup-Liste |
| POST | `/api/backups` | Backup erstellen |
| GET | `/api/logs` | Logs abrufen |

### Beispiele

```bash
# System-Status
curl -u admin:pass https://moodle.de/moodle-admin/api/status

# Sync starten
curl -X POST -u admin:pass https://moodle.de/moodle-admin/api/sync

# Backup erstellen
curl -X POST -u admin:pass \
  -H "Content-Type: application/json" \
  -d '{"type": "full"}' \
  https://moodle.de/moodle-admin/api/backups
```

## Fehlerbehebung

### Admin-UI nicht erreichbar

1. **Container prüfen**:
   ```bash
   docker compose ps
   ```

2. **Logs prüfen**:
   ```bash
   docker compose logs moodle | grep -i admin
   ```

3. **Port prüfen**:
   ```bash
   docker compose exec moodle netstat -tlnp | grep 8081
   ```

### Login fehlgeschlagen

1. **Credentials prüfen** in `.env`
2. **Container neustarten**:
   ```bash
   docker compose restart moodle
   ```

### API-Fehler

Prüfen Sie die API-Logs:

```bash
docker compose logs moodle | grep -i api
```
