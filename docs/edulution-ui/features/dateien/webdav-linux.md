---
sidebar_position: 3
---

# Linux Dateimanager

Diese Anleitung zeigt, wie Sie Ihre edulution-Dateien in verschiedenen Linux-Dateimanagern einbinden.

## Voraussetzungen

Öffnen Sie zunächst die **Dateien**-App in edulution und klicken Sie auf **WebDAV-Zugang**.

![WebDAV-Zugang Button](/img/dateien/dateien-webdav-zugang.png)

Dort finden Sie:

- **WebDAV-URL (Linux)**: Die URL für Linux (z.B. `davs://ui.schule.de/webdav2/`)
- **Benutzername**: Ihr Schul-Account

## GNOME Dateien (Nautilus)

Der Standard-Dateimanager in Ubuntu, Fedora und anderen GNOME-basierten Distributionen.

### Schritt 1: Andere Orte öffnen

1. Öffnen Sie **Dateien** (Nautilus)
2. Klicken Sie in der Seitenleiste auf **Andere Orte**

### Schritt 2: Server-Adresse eingeben

Am unteren Rand finden Sie das Feld **Mit Server verbinden**:

1. Geben Sie die WebDAV-URL ein (z.B. `davs://ui.schule.de/webdav2/`)
2. Drücken Sie **Enter** oder klicken Sie auf **Verbinden**

### Schritt 3: Anmelden

Im Anmeldedialog:

| Feld | Eingabe |
|------|---------|
| **Benutzername** | Ihr Schul-Benutzername |
| **Passwort** | Ihr normales Anmeldepasswort |

Wählen Sie optional **Passwort für diese Sitzung merken** oder **Passwort dauerhaft speichern**.

Klicken Sie auf **Verbinden**.

### Lesezeichen speichern

Nach erfolgreicher Verbindung können Sie den Server als Lesezeichen speichern:

1. Klicken Sie mit der rechten Maustaste auf den verbundenen Server in der Seitenleiste
2. Wählen Sie **Zu Lesezeichen hinzufügen**

## KDE Dolphin

Der Standard-Dateimanager in KDE Plasma (Kubuntu, openSUSE, etc.).

### Schritt 1: Netzwerk öffnen

1. Öffnen Sie **Dolphin**
2. Klicken Sie in der Seitenleiste auf **Netzwerk**

### Schritt 2: Netzwerkordner hinzufügen

1. Klicken Sie auf **Netzwerkordner hinzufügen**
2. Wählen Sie **WebDAV** (oder **Secure WebDAV** für davs://)
3. Klicken Sie auf **Weiter**

### Schritt 3: Verbindung einrichten

| Feld | Eingabe |
|------|---------|
| **Name** | Beliebiger Name (z.B. "Schule Dateien") |
| **Benutzer** | Ihr Schul-Benutzername |
| **Server** | Server-Adresse ohne Protokoll (z.B. `ui.schule.de`) |
| **Port** | 443 (für HTTPS) |
| **Ordner** | Pfad (z.B. `/webdav2/`) |

Aktivieren Sie **Verschlüsselte Verbindung verwenden (SSL)**.

Klicken Sie auf **Speichern und Verbinden**.

## Andere Dateimanager

### Thunar (Xfce)

1. Drücken Sie **Strg + L** um die Adressleiste zu öffnen
2. Geben Sie die WebDAV-URL ein (z.B. `davs://ui.schule.de/webdav2/`)
3. Drücken Sie **Enter**
4. Geben Sie Benutzername und Passwort ein

### Nemo (Linux Mint / Cinnamon)

1. Wählen Sie **Datei** → **Mit Server verbinden...**
2. Geben Sie die WebDAV-URL ein
3. Klicken Sie auf **Verbinden**
4. Melden Sie sich an

### PCManFM (LXDE/LXQt)

1. Drücken Sie **Strg + L** für die Adressleiste
2. Geben Sie die WebDAV-URL ein
3. Drücken Sie **Enter**

## Kommandozeile (davfs2)

Für permanente Einbindung über die Kommandozeile:

### Installation

```bash
# Debian/Ubuntu
sudo apt install davfs2

# Fedora
sudo dnf install davfs2

# Arch Linux
sudo pacman -S davfs2
```

### Einbindung als Benutzer

1. Fügen Sie sich zur davfs2-Gruppe hinzu:
   ```bash
   sudo usermod -aG davfs2 $USER
   ```
   (Abmelden und wieder anmelden erforderlich)

2. Erstellen Sie einen Mountpoint:
   ```bash
   mkdir ~/schule-dateien
   ```

3. Konfigurieren Sie die Zugangsdaten in `~/.davfs2/secrets`:
   ```
   https://ui.schule.de/webdav2/ benutzername passwort
   ```

4. Setzen Sie sichere Berechtigungen:
   ```bash
   chmod 600 ~/.davfs2/secrets
   ```

5. Fügen Sie einen Eintrag in `/etc/fstab` hinzu:
   ```
   https://ui.schule.de/webdav2/ /home/benutzer/schule-dateien davfs user,noauto 0 0
   ```

6. Mounten Sie das Laufwerk:
   ```bash
   mount ~/schule-dateien
   ```

## Troubleshooting

### Fehler: "Verbindung fehlgeschlagen"

**Mögliche Ursachen:**
1. URL falsch eingegeben
2. Keine Internetverbindung
3. gvfs-backends nicht installiert

**Lösung für GNOME/GTK-basierte Dateimanager:**
```bash
# Debian/Ubuntu
sudo apt install gvfs-backends

# Fedora
sudo dnf install gvfs-smb
```

### Fehler: "Authentifizierung fehlgeschlagen"

**Mögliche Ursachen:**
1. Benutzername oder Passwort falsch
2. Account gesperrt

### Langsame Verbindung oder Timeout

Einige Dateimanager haben kurze Timeouts. Versuchen Sie:

1. Alternative Dateimanager (Nautilus funktioniert oft am besten)
2. davfs2 für zuverlässigere Verbindungen

### Zertifikatsfehler

Falls das Schulzertifikat nicht vertraut wird:

```bash
# Debian/Ubuntu - Zertifikat installieren
sudo cp schulzertifikat.crt /usr/local/share/ca-certificates/
sudo update-ca-certificates
```

## Siehe auch

- [Dateien-Übersicht](./index.md) - Alle Funktionen der Dateien-App
- [Windows Datei-Explorer](./webdav-windows.md) - Anleitung für Windows
- [macOS Finder](./webdav-macos.md) - Anleitung für Mac
