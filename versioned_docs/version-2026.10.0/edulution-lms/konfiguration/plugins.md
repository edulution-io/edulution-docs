---
sidebar_position: 3
title: Plugin-Verwaltung
sidebar_custom_props:
  audience: admin
---

# Plugin-Verwaltung

edulution Moodle verwaltet Plugins automatisch über eine zentrale Konfigurationsdatei.

## Übersicht

Der Plugin-Manager:

- Installiert fehlende Plugins beim Container-Start
- Aktualisiert alle Plugins bei Moodle-Version-Änderung
- Entfernt nicht mehr benötigte Plugins
- Unterstützt gepinnte Versionen
- Respektiert Entwickler-Plugins nur in Development

## Konfigurationsdatei

### plugins.json

Die Standard-Konfigurationsdatei ist `config/plugins.json`:

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
      "description": "Umfragen und Feedback erstellen"
    },
    {
      "component": "block_xp",
      "name": "Level Up XP",
      "required": false,
      "description": "Gamification mit Erfahrungspunkten"
    }
  ]
}
```

### Plugin-Optionen

| Feld | Typ | Erforderlich | Beschreibung |
|------|-----|--------------|--------------|
| `component` | string | Ja | Plugin-Komponente (z.B. `mod_attendance`) |
| `name` | string | Nein | Anzeigename |
| `required` | boolean | Nein | `true` = Fehler wenn Installation fehlschlägt |
| `description` | string | Nein | Beschreibung |
| `dev_only` | boolean | Nein | Nur in Development installieren |
| `version` | string | Nein | Gepinnte Version |
| `source_url` | string | Nein | Alternative Download-URL |

### Erweiterte Beispiele

```json
{
  "plugins": [
    {
      "component": "mod_attendance",
      "name": "Anwesenheit",
      "required": true
    },
    {
      "component": "theme_boost_union",
      "name": "Boost Union Theme",
      "required": false,
      "version": "2024042200"
    },
    {
      "component": "local_adminer",
      "name": "Adminer",
      "required": false,
      "dev_only": true,
      "description": "Datenbank-Management (nur Development)"
    },
    {
      "component": "mod_custom_plugin",
      "name": "Custom Plugin",
      "required": true,
      "source_url": "https://github.com/org/plugin/archive/main.zip"
    }
  ]
}
```

### plugins.csv (Alternative)

Alternativ können Sie eine CSV-Datei verwenden:

```csv
component,name,required,description,dev_only,version
mod_attendance,Anwesenheit,true,Anwesenheitstracking,,
mod_questionnaire,Fragebogen,true,Umfragen erstellen,,
block_xp,Level Up XP,false,Gamification,,
local_adminer,Adminer,false,DB-Management,true,
```

## Plugin-Typen

### Aktivitäten (mod_)

```json
{
  "component": "mod_attendance",
  "name": "Anwesenheit"
}
```

Beliebte Aktivitäts-Plugins:
- `mod_attendance` - Anwesenheitstracking
- `mod_questionnaire` - Fragebögen
- `mod_hvp` - H5P Interactive Content
- `mod_bigbluebuttonbn` - BigBlueButton Integration

### Blöcke (block_)

```json
{
  "component": "block_xp",
  "name": "Level Up XP"
}
```

Beliebte Block-Plugins:
- `block_xp` - Gamification
- `block_completion_progress` - Fortschrittsanzeige
- `block_configurable_reports` - Berichte

### Themes (theme_)

```json
{
  "component": "theme_boost_union",
  "name": "Boost Union"
}
```

Beliebte Themes:
- `theme_boost_union` - Erweitertes Boost-Theme
- `theme_moove` - Modernes Theme
- `theme_academi` - Bildungs-Theme

### Lokale Plugins (local_)

```json
{
  "component": "local_adminer",
  "name": "Adminer",
  "dev_only": true
}
```

### Weitere Plugin-Typen

| Präfix | Typ | Beispiel |
|--------|-----|----------|
| `auth_` | Authentifizierung | `auth_saml2` |
| `enrol_` | Einschreibung | `enrol_auto` |
| `report_` | Berichte | `report_customsql` |
| `tool_` | Admin-Tools | `tool_recyclebin` |
| `format_` | Kursformate | `format_tiles` |
| `qtype_` | Fragetypen | `qtype_stack` |

## Plugin-Synchronisation

### Automatisch beim Start

Der Container synchronisiert Plugins automatisch beim Start:

```bash
PLUGIN_SYNC_ON_STARTUP=true
```

### Manuell auslösen

```bash
# Via CLI
docker compose exec moodle python3 /opt/scripts/plugin_manager.py --sync

# Force (alle Plugins neu installieren)
docker compose exec moodle python3 /opt/scripts/plugin_manager.py --sync --force

# Dry-Run
docker compose exec moodle python3 /opt/scripts/plugin_manager.py --sync --dry-run
```

### Via Admin-UI

1. Öffnen Sie `/moodle-admin`
2. Navigieren Sie zu "Plugins"
3. Klicken Sie auf "Plugins synchronisieren"

## Version-Updates

### Bei Moodle-Update

Wenn die Moodle-Version geändert wird, werden automatisch alle Plugins neu installiert:

1. Plugin-Manager erkennt Versionsänderung
2. Wartungsmodus wird aktiviert
3. Alle Plugins werden entfernt und neu installiert
4. Datenbank-Upgrade wird ausgeführt
5. Wartungsmodus wird deaktiviert

### Gepinnte Versionen

Um eine spezifische Plugin-Version zu erzwingen:

```json
{
  "component": "theme_boost_union",
  "version": "2024042200"
}
```

:::warning Kompatibilität
Stellen Sie sicher, dass die gepinnte Version mit Ihrer Moodle-Version kompatibel ist.
:::

## Status-Report

### Via CLI

```bash
# Status aller Plugins
docker compose exec moodle python3 /opt/scripts/plugin_manager.py --report

# JSON-Format
docker compose exec moodle python3 /opt/scripts/plugin_manager.py --report --json

# Liste konfigurierter Plugins
docker compose exec moodle python3 /opt/scripts/plugin_manager.py --list
```

### Beispiel-Report

```markdown
# Moodle Plugin Status Report

**Moodle Version:** 2024042200
**Moodle Release:** 4.5
**Last Sync:** 2024-01-15T10:30:00

## Configured Plugins

| Plugin | Status | Version | Required |
|--------|--------|---------|----------|
| Anwesenheit | Installed | 2024011500 | Yes |
| Fragebogen | Installed | 2024020100 | Yes |
| Level Up XP | Missing | - | No |

## Summary

- Configured plugins: 3
- Installed (configured): 2
- Missing: 1
```

## Fehlerbehebung

### Plugin nicht gefunden

```
ERROR: Plugin not found in Moodle plugin directory
```

**Lösung**: Prüfen Sie den Component-Namen im [Moodle Plugin Directory](https://moodle.org/plugins/).

### Inkompatible Version

```
ERROR: Plugin incompatible with this Moodle version
```

**Lösung**:
1. Entfernen Sie die Version-Pinnung
2. Oder warten Sie auf ein Plugin-Update
3. Oder setzen Sie `required: false`

### Rate-Limit erreicht

```
WARNING: Rate limit reached, waiting 60s...
```

Der Plugin-Manager respektiert die Moodle.org Rate-Limits. Dies ist normal bei vielen Plugins.

### Installation fehlgeschlagen

```bash
# Logs prüfen
docker compose logs moodle | grep -i plugin

# Plugin manuell installieren
docker compose exec moodle moosh plugin-install mod_problematic

# Plugin-Verzeichnis prüfen
docker compose exec moodle ls -la /var/www/html/moodle/mod/
```

## Best Practices

### Entwicklung vs. Produktion

Nutzen Sie `dev_only` für Entwickler-Plugins:

```json
{
  "component": "local_adminer",
  "dev_only": true
}
```

Diese werden nur installiert wenn `ENVIRONMENT=development`.

### Backup vor Plugin-Änderungen

```bash
# Backup erstellen
docker compose exec moodle /opt/scripts/backup.sh

# Dann Plugins ändern
docker compose restart moodle
```

### Schrittweise Migration

Bei vielen neuen Plugins:

1. Wenige Plugins hinzufügen
2. Testen
3. Weitere hinzufügen
4. Wiederholen

### Plugin-Dokumentation

Dokumentieren Sie genutzte Plugins in der `plugins.json`:

```json
{
  "component": "mod_attendance",
  "name": "Anwesenheit",
  "description": "Wird für automatische Anwesenheitserfassung im Unterricht genutzt"
}
```
