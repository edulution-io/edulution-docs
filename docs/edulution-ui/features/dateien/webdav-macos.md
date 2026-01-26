---
sidebar_position: 2
---

# macOS Finder

Diese Anleitung zeigt, wie Sie Ihre edulution-Dateien im macOS Finder einbinden.

## Voraussetzungen

Öffnen Sie zunächst die **Dateien**-App in edulution und klicken Sie auf **WebDAV-Zugang**. Dort finden Sie:

- **WebDAV-URL** (z.B. `davs://ui.schule.de/webdav2/`)
- **Benutzername** (Ihr Schul-Account)

:::tip URL-Format für macOS
macOS unterstützt das `davs://`-Format direkt. Sie können die URL aus der Dateien-App unverändert verwenden.

Alternativ funktioniert auch `https://` - der Finder erkennt WebDAV automatisch.
:::

## Mit Server verbinden

### Schritt 1: Dialog öffnen

Öffnen Sie den **Finder** und wählen Sie im Menü:

**Gehe zu** → **Mit Server verbinden...**

Oder nutzen Sie die Tastenkombination: **⌘ + K** (Command + K)

### Schritt 2: Server-Adresse eingeben

Im Dialog **Mit Server verbinden**:

1. Geben Sie die WebDAV-URL ein (z.B. `davs://ui.schule.de/webdav2/`)
2. Klicken Sie auf **Verbinden**

:::tip Favorit speichern
Klicken Sie auf das **+**-Symbol neben der Adressleiste, um den Server als Favorit zu speichern. So können Sie sich beim nächsten Mal schneller verbinden.
:::

### Schritt 3: Anmelden

Wählen Sie **Registrierter Benutzer** und geben Sie ein:

| Feld | Eingabe |
|------|---------|
| **Name** | Ihr Schul-Benutzername (aus der Dateien-App) |
| **Kennwort** | Ihr normales Anmeldepasswort |

Aktivieren Sie optional **Dieses Kennwort im Schlüsselbund sichern**, um sich nicht jedes Mal neu anmelden zu müssen.

Klicken Sie auf **Verbinden**.

## Ergebnis

Das Netzlaufwerk erscheint nun:

- In der **Finder-Seitenleiste** unter "Orte"
- Auf dem **Schreibtisch** (falls in den Finder-Einstellungen aktiviert)
- Unter `/Volumes/` im Dateisystem

Sie können:

- Dateien per Drag & Drop kopieren
- Dokumente direkt öffnen und bearbeiten
- Ordner erstellen und verwalten

## Automatische Verbindung beim Anmelden

Um das Laufwerk automatisch beim Mac-Start zu verbinden:

1. Öffnen Sie **Systemeinstellungen** → **Benutzer & Gruppen**
2. Wählen Sie Ihren Benutzer und dann **Anmeldeobjekte**
3. Klicken Sie auf **+** und wählen Sie das verbundene Netzlaufwerk aus
4. Klicken Sie auf **Hinzufügen**

## Troubleshooting

### Fehler: "Verbindung zum Server ist fehlgeschlagen"

**Mögliche Ursachen:**
1. URL falsch eingegeben - prüfen Sie `davs://` oder `https://`
2. Keine Internetverbindung
3. Server nicht erreichbar

**Lösung:** Versuchen Sie alternativ das `https://`-Format statt `davs://`.

### Fehler: "Der eingegebene Name oder das Kennwort ist falsch"

**Mögliche Ursachen:**
1. Benutzername oder Passwort falsch getippt
2. Caps Lock aktiviert
3. Account gesperrt - wenden Sie sich an Ihren Administrator

### Verbindung wird nach dem Aufwachen getrennt

Dies ist normales Verhalten. Um erneut zu verbinden:

1. Klicken Sie auf das getrennte Laufwerk in der Seitenleiste
2. Oder nutzen Sie **⌘ + K** und wählen Sie den Server aus den Favoriten

### Dateien werden nicht sofort aktualisiert

Der Finder speichert Verzeichnislisten zwischen. Zum Aktualisieren:

- Drücken Sie **⌘ + R** (Command + R)
- Oder wählen Sie **Darstellung** → **Aktualisieren**

## Siehe auch

- [Dateien-Übersicht](./index.md) - Alle Funktionen der Dateien-App
- [Windows Datei-Explorer](./webdav-windows.md) - Anleitung für Windows
- [Linux Dateimanager](./webdav-linux.md) - Anleitung für Linux
