# GoodNotes mit edulution verbinden

Diese Anleitung zeigt, wie Sie GoodNotes auf dem iPad so einrichten, dass Ihre Notizbücher automatisch per WebDAV in Ihr edulution-Dateisystem gesichert werden.

## Voraussetzungen

- GoodNotes 6 auf Ihrem iPad installiert
- Zugang zu Ihrer edulution-Instanz
- Ihre WebDAV-URL und Zugangsdaten

## Automatisches Backup einrichten

### Schritt 1: Profil-Menü öffnen

Öffnen Sie GoodNotes und tippen Sie oben rechts auf Ihr **Profil-Icon**.

![Profil-Icon antippen](/img/goodnotes/schritt1-profil-icon.png)

### Schritt 2: Cloud & Backup öffnen

Wählen Sie im Menü den Punkt **Cloud & Backup**.

![Cloud & Backup auswählen](/img/goodnotes/schritt2-cloud-and-backup.png)

### Schritt 3: Automatic Backup aktivieren

Tippen Sie auf **Automatic Backup**.

![Automatic Backup auswählen](/img/goodnotes/schritt3-automatic-backup.png)

### Schritt 4: WebDAV als Cloud-Speicher wählen

1. Aktivieren Sie **Auto Backup** (Schalter auf grün)
2. Setzen Sie **Cloud Storage** auf **WebDAV**
3. Tippen Sie auf **Connect to WebDAV server**


![WebDAV als Cloud-Speicher](/img/goodnotes/schritt4-webdav-verbinden.png)

### Schritt 5: WebDAV-Verbindung einrichten

Geben Sie Ihre edulution-Zugangsdaten ein:

| Feld | Eingabe                                                                          |
|---|----------------------------------------------------------------------------------|
| **HOST** | `https://<deine-edulution-instanz>/webdav/<schulkürzel>/<rolle>/<benutzername>/` |
| **USER** | Ihr Schul-Benutzername                                                           |
| **PASSWORD** | Ihr normales Anmeldepasswort                                                     |

Tippen Sie auf **Done**, um die Verbindung herzustellen.

![WebDAV-Authentifizierung](/img/goodnotes/schritt5-webdav-authentifizierung.png)


## Ergebnis

Nach erfolgreicher Einrichtung werden alle GoodNotes-Notizbücher automatisch als PDF (oder im gewählten Format) in Ihr edulution-Dateisystem gesichert. Die Dateien erscheinen im konfigurierten Zielordner und können über die edulution Dateien-App oder per WebDAV-Laufwerk am Computer aufgerufen werden.

## Troubleshooting

### Verbindung schlägt fehl

**Mögliche Ursachen:**
1. WebDAV-URL falsch eingegeben — prüfen Sie das `https://`-Format und den vollständigen Pfad
2. Benutzername oder Passwort falsch
3. Keine WLAN-Verbindung

### Backup startet nicht

- Stellen Sie sicher, dass **Auto Backup** aktiviert ist (grüner Schalter)
- Prüfen Sie, ob **Upload only over WiFi and Bluetooth** aktiviert ist und Sie mit einem WLAN verbunden sind
- Öffnen Sie GoodNotes erneut — das Backup startet im Hintergrund

### Dateien erscheinen nicht in edulution

- Das Backup erfolgt nicht in Echtzeit. Warten Sie einige Minuten
- Prüfen Sie den **Destination Folder** in den Backup-Einstellungen
- Stellen Sie sicher, dass genügend Speicherplatz (Quota) vorhanden ist

## Siehe auch

- [Dateien-Übersicht](./dateien/index.md) - Alle Funktionen der Dateien-App
- [WebDAV unter macOS](./dateien/webdav-macos.md) - Dateien im Finder einbinden
- [Mobile App](./mobile-app.md) - Weitere mobile Nutzungsmöglichkeiten