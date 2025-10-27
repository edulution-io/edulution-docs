---
sidebar_position: 5
---

# UI Konfiguration

WebDAV in der edulution UI aktivieren.

## Voraussetzungen

- [FileProxy installiert](./installation)
- [Traefik konfiguriert](./traefik-config)
- Als **global-admin** eingeloggt

## WebDAV aktivieren

### 1. Einstellungen öffnen

Navigieren Sie zu: **Einstellungen** → **Files**

### 2. WebDAV konfigurieren

- **WebDAV aktivieren:** Toggle auf "An"
- **WebDAV-URL:** Ihre edulution-Domain + `/webdav`

**Beispiel:**
```
https://ui.beispielschule.de/webdav
```

:::warning URL-Format
- Muss mit `https://` beginnen
- Endet mit `/webdav` (ohne trailing slash)
- Verwenden Sie Ihre edulution-Domain, **nicht** die FileProxy-IP!
:::

### 3. Speichern

Klicken Sie auf **Speichern**.

## Testen

### Als Benutzer einloggen

1. Melden Sie sich als Lehrer/Schüler an
2. Öffnen Sie die **Files**-App
3. Sie sollten Ihre SMB-Shares sehen

## WebDAV-Client einrichten

### macOS

1. **Finder** → **Gehe zu** → **Mit Server verbinden** (⌘K)
2. Server: `https://ui.beispielschule.de/webdav`
3. Anmelden: `DOMAIN\username` und Passwort

### Windows

1. **Dieser PC** → **Netzlaufwerk verbinden**
2. Ordner: `https://ui.beispielschule.de/webdav`
3. Anmelden: `DOMAIN\username` und Passwort

### Linux

1. **Dateien** → **Andere Orte** → **Mit Server verbinden**
2. Server: `davs://ui.beispielschule.de/webdav`
3. Anmelden: `DOMAIN\username` und Passwort

## Authentifizierung

| Feld | Format | Beispiel |
|------|--------|----------|
| Benutzername | `DOMAIN\username` | `LINUXMUSTER\max.mustermann` |
| Passwort | LDAP-Passwort | Ihr Passwort |

:::info Domain
Die Domain aus FileProxy `config.yml` → `smb.domain` (z.B. `LINUXMUSTER`)
:::

## Troubleshooting

### Verbindung fehlgeschlagen

**Prüfen Sie:**
1. WebDAV-URL korrekt? (https://... /webdav)
2. Traefik läuft? `docker-compose logs traefik`
3. FileProxy läuft? `systemctl status edulution-fileproxy`

### Authentifizierung fehlgeschlagen

**Prüfen Sie:**
1. Format: `DOMAIN\username` korrekt?
2. LDAP erreichbar? FileProxy-Logs: `tail -f /var/log/edulution-fileproxy/webdav-server.log`

### Keine Shares sichtbar

**Prüfen Sie:**
1. SMB-Server erreichbar?
2. Shares in FileProxy `config.yml` definiert?
3. User hat Berechtigungen auf den Shares?

## Fertig!

Ihre Benutzer können jetzt von jedem Gerät auf ihre Dateien zugreifen. 🎉
