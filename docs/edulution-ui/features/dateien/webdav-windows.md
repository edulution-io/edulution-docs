---
sidebar_position: 1
---

# Windows Datei-Explorer

Diese Anleitung zeigt, wie Sie Ihre edulution-Dateien als Netzlaufwerk im Windows Datei-Explorer einbinden.

## Voraussetzungen

Öffnen Sie zunächst die **Dateien**-App in edulution und klicken Sie auf **WebDAV-Zugang**. Dort finden Sie:

- **WebDAV-URL** (z.B. `davs://ui.schule.de/webdav2/`)
- **Benutzername** (Ihr Schul-Account)

:::tip URL-Format für Windows
Windows benötigt das Format `https://` statt `davs://`. Ersetzen Sie einfach `davs://` durch `https://` in der URL.

Beispiel: `davs://ui.schule.de/webdav2/` wird zu `https://ui.schule.de/webdav2/`
:::

## Netzlaufwerk verbinden

### Schritt 1: Datei-Explorer öffnen

Öffnen Sie den **Datei-Explorer** (Windows-Taste + E) und klicken Sie mit der rechten Maustaste auf **Dieser PC**.

Wählen Sie **Netzlaufwerk verbinden...**.

### Schritt 2: Verbindung einrichten

Im Dialog **Netzlaufwerk verbinden**:

| Feld | Eingabe |
|------|---------|
| **Laufwerk** | Wählen Sie einen freien Buchstaben (z.B. `Z:`) |
| **Ordner** | Ihre WebDAV-URL mit `https://` (z.B. `https://ui.schule.de/webdav2/`) |

Aktivieren Sie:
- [x] **Verbindung bei Anmeldung wiederherstellen** (optional, für automatische Verbindung)
- [x] **Verbindung mit anderen Anmeldeinformationen herstellen**

Klicken Sie auf **Fertig stellen**.

### Schritt 3: Anmelden

Geben Sie Ihre Zugangsdaten ein:

| Feld | Eingabe |
|------|---------|
| **Benutzername** | Ihr Schul-Benutzername (aus der Dateien-App) |
| **Kennwort** | Ihr normales Anmeldepasswort |

Aktivieren Sie optional **Anmeldedaten speichern**, um sich nicht jedes Mal neu anmelden zu müssen.

Klicken Sie auf **OK**.

## Ergebnis

Das Netzlaufwerk erscheint nun im Datei-Explorer unter **Dieser PC**. Sie können:

- Dateien per Drag & Drop kopieren
- Dokumente direkt öffnen und bearbeiten
- Ordner erstellen und verwalten

## Troubleshooting

### Fehler: "Der Netzwerkpfad wurde nicht gefunden"

**Mögliche Ursachen:**
1. URL falsch eingegeben - prüfen Sie das `https://`-Format
2. Keine Internetverbindung
3. Server nicht erreichbar

### Fehler: "Zugriff verweigert"

**Mögliche Ursachen:**
1. Benutzername oder Passwort falsch
2. Account gesperrt - wenden Sie sich an Ihren Administrator

### Verbindung sehr langsam

Der Windows WebDAV-Client hat standardmäßig Einschränkungen. Für bessere Performance:

1. Öffnen Sie die **Eingabeaufforderung als Administrator**
2. Führen Sie aus:
   ```
   reg add HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\WebClient\Parameters /v FileSizeLimitInBytes /t REG_DWORD /d 4294967295 /f
   ```
3. Starten Sie den WebClient-Dienst neu:
   ```
   net stop webclient
   net start webclient
   ```

### SSL-Zertifikatsfehler

Falls ein Zertifikatsfehler auftritt, wenden Sie sich an Ihren Administrator. Das Schulzertifikat muss auf Ihrem Computer installiert sein.

## Siehe auch

- [Dateien-Übersicht](./index.md) - Alle Funktionen der Dateien-App
- [macOS Finder](./webdav-macos.md) - Anleitung für Mac
- [Linux Dateimanager](./webdav-linux.md) - Anleitung für Linux
