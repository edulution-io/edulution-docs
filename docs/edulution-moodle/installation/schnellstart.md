---
sidebar_position: 2
title: Schnellstart
---

# Schnellstart

Diese Anleitung führt Sie in wenigen Minuten zu einer funktionierenden Moodle-Installation.

:::info Voraussetzungen
Stellen Sie sicher, dass alle [Voraussetzungen](/docs/edulution-moodle/installation/voraussetzungen) erfüllt sind.
:::

## 1. Repository klonen

```bash
git clone https://github.com/edulution-io/edulution-moodle.git
cd edulution-moodle
```

## 2. Konfiguration erstellen

Kopieren Sie die Beispiel-Konfiguration:

```bash
cp .env.example .env
```

Öffnen Sie die `.env`-Datei und passen Sie die wichtigsten Einstellungen an:

```bash
# Basis-Einstellungen
MOODLE_URL=https://moodle.ihre-schule.de
MOODLE_SITE_NAME="Moodle Ihrer Schule"
MOODLE_ADMIN_EMAIL=admin@ihre-schule.de

# Keycloak-Einstellungen
KEYCLOAK_URL=https://sso.ihre-schule.de
KEYCLOAK_REALM=schule
KEYCLOAK_CLIENT_ID=moodle
KEYCLOAK_CLIENT_SECRET=<ihr-client-secret>

# Sync Service Account
KEYCLOAK_SYNC_CLIENT_ID=moodle-sync
KEYCLOAK_SYNC_CLIENT_SECRET=<ihr-sync-secret>

# Datenbank (automatisch generiert wenn leer)
MARIADB_ROOT_PASSWORD=<sicheres-passwort>
MARIADB_PASSWORD=<sicheres-passwort>
```

:::tip Passwörter generieren
Generieren Sie sichere Passwörter mit:
```bash
openssl rand -base64 32
```
:::

## 3. Installation starten

### Innerhalb von edulution

Wenn Sie edulution bereits nutzen, starten Sie Moodle mit dem edulution-Profil:

```bash
docker compose -f deployment/compose/docker-compose.yml up -d
```

### Standalone mit Traefik

Für eine eigenständige Installation mit eigenem Reverse Proxy:

```bash
docker compose --profile traefik up -d
```

### Standalone ohne Traefik

Wenn Sie einen externen Reverse Proxy nutzen:

```bash
docker compose up -d
```

## 4. Installation abschließen

Die erste Initialisierung dauert einige Minuten. Verfolgen Sie den Fortschritt:

```bash
docker compose logs -f moodle
```

Warten Sie auf die Meldung:

```
[INFO] Moodle is ready!
[INFO] Sync service started
```

## 5. Erste Anmeldung

Öffnen Sie Ihren Browser und navigieren Sie zu Ihrer Moodle-URL (z.B. `https://moodle.ihre-schule.de`).

### Admin-Zugang

Die Admin-Zugangsdaten werden beim ersten Start generiert oder aus der `.env`-Datei verwendet:

| Parameter | Standard | Umgebungsvariable |
|-----------|----------|-------------------|
| **Benutzername** | `admin` | `MOODLE_ADMIN_USER` |
| **Passwort** | (generiert) | `MOODLE_ADMIN_PASSWORD` |

Das generierte Passwort finden Sie in den Logs:

```bash
docker compose logs moodle | grep "Admin password"
```

### SSO-Anmeldung

Nach der Konfiguration können sich alle Keycloak-Benutzer über "Login mit SSO" anmelden.

## 6. Admin-Oberfläche

Die edulution Moodle Admin-Oberfläche erreichen Sie unter:

```
https://moodle.ihre-schule.de/moodle-admin
```

Hier können Sie:
- Synchronisation manuell starten
- Plugin-Status überprüfen
- Backups verwalten
- Logs einsehen

## Schnell-Konfiguration

### Plugins hinzufügen

Bearbeiten Sie die `config/plugins.json`:

```json
{
  "plugins": [
    {
      "component": "mod_attendance",
      "name": "Anwesenheit",
      "required": true
    },
    {
      "component": "mod_questionnaire",
      "name": "Fragebogen",
      "required": false
    }
  ]
}
```

Plugins werden beim nächsten Container-Neustart automatisch installiert:

```bash
docker compose restart moodle
```

### Synchronisation konfigurieren

Standardmäßig werden alle Benutzer und Gruppen synchronisiert. Für feinere Kontrolle:

```bash
# Nur Gruppen mit bestimmtem Prefix synchronisieren
SYNC_GROUP_PREFIX=moodle_

# Nur bestimmte Rollen synchronisieren
SYNC_ROLES=role-teacher,role-student,role-schooladministrator

# Sync-Intervall (in Sekunden)
SYNC_INTERVAL=300
```

## Fehlerbehebung

### Container startet nicht

```bash
# Logs prüfen
docker compose logs moodle

# Container-Status
docker compose ps

# Neustart erzwingen
docker compose down && docker compose up -d
```

### Datenbank-Verbindung fehlgeschlagen

```bash
# Datenbank-Container prüfen
docker compose logs db

# Verbindung testen
docker compose exec moodle php admin/cli/check_database_schema.php
```

### Keycloak-Verbindung fehlgeschlagen

```bash
# Sync-Logs prüfen
docker compose logs moodle | grep -i keycloak

# Manuellen Sync-Test ausführen
docker compose exec moodle python3 /opt/sync/sync.py --test
```

## Nächste Schritte

- [Detaillierte Installation](/docs/edulution-moodle/installation/detailliert) - Erweiterte Optionen
- [Konfiguration](/docs/edulution-moodle/konfiguration/umgebungsvariablen) - Alle Einstellungen
- [Synchronisation](/docs/edulution-moodle/konfiguration/synchronisation) - Sync-Details
- [Admin-UI](/docs/edulution-moodle/administration/admin-ui) - Verwaltungsoberfläche
