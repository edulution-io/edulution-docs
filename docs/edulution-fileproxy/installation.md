---
sidebar_position: 3
---

# Installation

FileProxy Server installieren und konfigurieren.

## Voraussetzungen

- **Linuxmuster Fileserver** mit Ubuntu 24.04 LTS
- [Package Server](./package-server) eingerichtet

:::tip Empfehlung
FileProxy sollte auf dem **gleichen Host wie der Fileserver** installiert werden. Dies ermöglicht direkten Zugriff auf die SMB-Shares und optimale Performance.

→ [Linuxmuster Fileserver installieren](https://docs.linuxmuster.net/de/v7.3/setup/setup-file-server.html)
:::

## Installation

```bash
sudo apt-get install edulution-fileproxy
```

Das Paket erstellt automatisch:
- Self-signed TLS-Zertifikat in `/etc/edulution-fileproxy/`
- Config-Datei `/etc/edulution-fileproxy/config.yml`
- Systemd Service `edulution-fileproxy`

## Konfiguration

Öffnen Sie die Config-Datei:

```bash
sudo nano /etc/edulution-fileproxy/config.yml
```

### Minimal-Konfiguration

```yaml
ldap:
  server: "ldaps://10.1.0.1:636"
  insecure_skip_verify: true

smb:
  server: "10.1.0.101"
  domain: "LINUXMUSTER"
  share_autodiscover: false
  shares:
    - name: default-school
    - name: linuxmuster-global

http:
  address: ":8443"
  webdav_prefix: "/webdav/"
  cert_file: "/etc/edulution-fileproxy/webdav.pem"
  key_file: "/etc/edulution-fileproxy/webdav.key"

log:
  level: "info"
  file: "/var/log/edulution-fileproxy/webdav-server.log"
```

### Wichtige Parameter

#### LDAP

| Parameter | Beschreibung | Beispiel |
|-----------|--------------|----------|
| `server` | LDAP-Server URL | `ldaps://10.1.0.1:636` (sicher)<br/>`ldap://10.1.0.1:389` (unsicher) |
| `insecure_skip_verify` | Zertifikat-Prüfung überspringen | `true` bei self-signed Zertifikaten |

#### SMB

| Parameter | Beschreibung | Wert |
|-----------|--------------|------|
| `server` | SMB-Server IP | `10.1.0.101` |
| `domain` | Windows-Domain | `LINUXMUSTER` |
| `share_autodiscover` | Auto-Erkennung | `false` empfohlen |
| `shares` | Liste der Shares | Array von `{name: "sharename"}` |

:::tip Share Autodiscover
Bei `share_autodiscover: true` werden Admin-Credentials (`username`, `password`) benötigt.

**Empfehlung:** Nutzen Sie `false` und definieren Sie Shares manuell - sicherer!
:::

## Service starten

```bash
sudo systemctl enable edulution-fileproxy
sudo systemctl start edulution-fileproxy
```

Status prüfen:

```bash
sudo systemctl status edulution-fileproxy
```

Logs ansehen:

```bash
sudo tail -f /var/log/edulution-fileproxy/webdav-server.log
```

## Sicherheit

:::warning Wichtig
- ❌ **Keine** Admin-Credentials in der Config (außer bei Autodiscover)
- ✅ User-Credentials werden nie gespeichert
- ✅ Jeder User sieht nur eigene Dateien
- ✅ SMB-Berechtigungen werden übernommen
:::

## Nächster Schritt

Richten Sie den [FileProxy in der UI](./ui-config) ein →
