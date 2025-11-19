---
sidebar_position: 5
---

# FileProxy in der UI einrichten

In diesem Abschnitt richten Sie den FileProxy in der edulution UI ein, damit Ihre Benutzer auf ihre Netzlaufwerke zugreifen können.

## Warum FileProxy?

Der **edulution FileProxy** bietet gegenüber der Standard-Dateifreigabe entscheidende Vorteile:

- **🚀 Höhere Performance** - Deutlich schnellere Up- und Downloads
- **📦 Kein Upload-Limit** - Standard: 50 MB, mit FileProxy: Unbegrenzt
- **💾 Große Dateien** - Videos, Backups und große Projekte problemlos übertragen
- **⚡ Optimiert** - In Go entwickelt für maximale Geschwindigkeit

## Voraussetzungen

- FileProxy ist [installiert und konfiguriert](installation)
- Sie sind als **global-admin** eingeloggt

## 1. WebDAV-Server hinzufügen

Navigieren Sie zu: **Einstellungen** → **Dateien**

### Server anlegen

Im Abschnitt **WebDAV-Server** klicken Sie auf **+** um einen neuen Server hinzuzufügen:

| Feld | Wert | Beispiel |
|------|------|----------|
| **Anzeigename** | FileProxy | `FileProxy` |
| **URL** | FileProxy-URL mit Port | `https://10.1.0.5:8443/webdav/` |
| **Typ** | edulution File Proxy | Aus Dropdown auswählen |

:::tip URL-Format
Die URL muss exakt so aussehen:
- Mit `https://` beginnen
- IP-Adresse oder Hostname Ihres FileProxy-Servers
- Port `:8443`
- Pfad `/webdav/` (mit trailing slash!)

**Beispiel**: `https://10.1.0.5:8443/webdav/`
:::

Klicken Sie auf **Speichern**.

## 2. WebDAV-Shares einrichten

Im Abschnitt **WebDAV-Shares** legen Sie jetzt die Ordner fest, die in der Dateien-App erscheinen sollen.

### Empfohlene Shares

Klicken Sie für jeden Share auf **+** und tragen Sie folgende Werte ein:

#### Home (Persönliches Verzeichnis)

| Feld | Wert |
|------|------|
| **Anzeigename** | Home |
| **Server** | FileProxy |
| **Pfad** | `/webdav/default-school/` |
| **Pfad-Variable** | `homeDirectory` |
| **Nutzergruppen** | `all-teachers, all-students, all-admins` |

:::tip Pfad-Variable
Die Variable `{homeDirectory}` wird automatisch durch das persönliche Home-Verzeichnis des Benutzers ersetzt.
:::

![Home-Verzeichnis mit Pfad-Variable](/img/fileproxy/webdav-home-variable.png)

#### Share (Gemeinsame Dateien)

| Feld | Wert |
|------|------|
| **Anzeigename** | Share |
| **Server** | FileProxy |
| **Pfad** | `/webdav/default-school/share/` |
| **Nutzergruppen** | `all-teachers, all-students, all-admins` |

#### Projects (Projekt-Ordner)

| Feld | Wert |
|------|------|
| **Anzeigename** | Projects |
| **Server** | FileProxy |
| **Pfad** | `/webdav/default-school/share/projects/` |
| **Nutzergruppen** | `all-teachers, all-students, all-admins` |

#### Student-Home

| Feld | Wert |
|------|------|
| **Anzeigename** | Student-Home |
| **Server** | FileProxy |
| **Pfad** | `/webdav/default-school/students/` |
| **Nutzergruppen** | `all-teachers, all-admins` |

#### Teacher-home

| Feld | Wert |
|------|------|
| **Anzeigename** | Teacher-home |
| **Server** | FileProxy |
| **Pfad** | `/webdav/default-school/share/teachers/` |
| **Nutzergruppen** | `all-teachers` |

![WebDAV Einstellungen](/img/fileproxy/webdav-einstellungen.png)

:::info Share-Pfade anpassen
Die Pfade oben sind Beispielwerte basierend auf einer Standard-Linuxmuster Konfiguration.

**Ihre Pfade finden:**
1. Schauen Sie in die FileProxy `config.yml` → Sektion `shares:`
2. Die dort definierten Shares bestimmen die verfügbaren Pfade
3. Format: `/webdav/<school-name>/<share-name>/`
:::

## 3. Ergebnis: Dateien-App

Nach der Einrichtung sehen Ihre Benutzer die konfigurierten Shares in der **Dateien-App**:

![Dateien App mit Shares](/img/fileproxy/dateien-app-shares.png)

- **Home** - Persönliches Verzeichnis
- **Share** - Gemeinsame Dateien
- **Projects** - Projektordner
- **Student-Home** - Schülerverzeichnisse (nur für Lehrer/Admins)
- **Teacher-home** - Lehrerverzeichnis

Jeder Benutzer sieht nur die Ordner und Dateien, für die er Berechtigungen hat.

## Upload-Limits

Mit aktiviertem FileProxy können Ihre Benutzer Dateien jeder Größe hochladen:

| Methode | Upload-Limit |
|---------|--------------|
| **Standard (ohne FileProxy)** | ~50 MB |
| **Mit FileProxy** | Unbegrenzt* |

\* *Abhängig von verfügbarem Speicherplatz und Quotas*

Mehr dazu in der [Dateien-App Dokumentation](../edulution-ui/features/dateien.md#dateigröße).

## Benutzer testen

Ihre Benutzer können jetzt auf ihre Dateien zugreifen:

1. Melden Sie sich als Lehrer oder Schüler an
2. Öffnen Sie die **Dateien**-App aus dem Hauptmenü
3. Die konfigurierten Shares werden in der Seitenleiste angezeigt
4. Testen Sie einen Upload einer großen Datei (>50 MB)

## Troubleshooting

### Keine Shares sichtbar

**Prüfen Sie:**
1. WebDAV-Server korrekt angelegt? (URL, Port, Typ)
2. Shares angelegt und Nutzergruppen zugewiesen?
3. FileProxy läuft? `systemctl status edulution-fileproxy`

### Verbindung fehlgeschlagen

**Prüfen Sie:**
1. URL Format korrekt? `https://IP:8443/webdav/`
2. Firewall-Regeln? Port 8443 erreichbar?
3. FileProxy-Logs: `tail -f /var/log/edulution-fileproxy/webdav-server.log`

### Authentifizierung fehlgeschlagen

**Prüfen Sie:**
1. LDAP-Server erreichbar?
2. LDAP-Konfiguration in FileProxy `config.yml` korrekt?
3. Benutzer existiert im LDAP?

### Upload schlägt fehl

**Prüfen Sie:**
1. Speicherplatz auf SMB-Server verfügbar?
2. Benutzer hat Schreibrechte auf dem Share?
3. Quota nicht überschritten? (siehe [Dashboard](../edulution-ui/features/dashboard.md))

## Nächste Schritte

- Informieren Sie Ihre Benutzer über die neuen Möglichkeiten
- Testen Sie große Datei-Uploads (Videos, Backups)
- Passen Sie Shares nach Bedarf an

Ihre Benutzer können jetzt große Dateien schnell und sicher übertragen! 🎉
