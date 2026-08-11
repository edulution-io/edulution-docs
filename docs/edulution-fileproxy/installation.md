---
sidebar_position: 3
---

# Installation

FileProxy Server installieren und konfigurieren.

## Voraussetzungen

- **Linuxmuster Fileserver** mit Ubuntu 24.04 LTS
- [Package Server](./package-server) eingerichtet

:::tip[Empfehlung]
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

`apt install edulution-fileproxy` legt unter `/etc/edulution-fileproxy/config.yml` bereits eine vollständige Default-Konfiguration an (kopiert aus `config.example.yml`). Diese enthält alle Blöcke, die für einen funktionsfähigen Start nötig sind – einschließlich des standardmäßig aktivierten Wiki-Indexers. Anpassen müssen Sie üblicherweise nur IPs, Domain und die Share-Liste:

```yaml
ldap:
  server: "ldaps://10.1.0.1:636"
  insecure_skip_verify: true
  base_dn: "DC=linuxmuster,DC=lan"   # Pflicht für ACL-Auswertung und Wiki-Suche

smb:
  server: "10.1.0.101"
  domain: "LINUXMUSTER"
  share_autodiscover: false
  shares:
    - name: default-school
    - name: linuxmuster-global

  indexer_service_account:
    user: "global-admin"
    password_file: "/etc/edulution-fileproxy/indexer.secret"

http:
  address: ":8443"
  webdav_prefix: "/webdav/"
  cert_file: "/etc/edulution-fileproxy/webdav.pem"
  key_file: "/etc/edulution-fileproxy/webdav.key"

log:
  level: "info"
  file: "/var/log/edulution-fileproxy/webdav-server.log"

elasticsearch:
  enabled: true                       # Wiki-Indexer; siehe „Wiki-Funktion vorbereiten" unten
  url: "http://127.0.0.1:9200"
```

### Wichtige Parameter

#### LDAP

| Parameter | Beschreibung | Beispiel |
|-----------|--------------|----------|
| `server` | LDAP-Server URL | `ldaps://10.1.0.1:636` (sicher)<br/>`ldap://10.1.0.1:389` (unsicher) |
| `insecure_skip_verify` | Zertifikat-Prüfung überspringen | `true` bei self-signed Zertifikaten |
| `base_dn` | Pflicht für ACL-Auswertung und Wiki-Suche (Gruppen → SIDs auflösen) | `DC=linuxmuster,DC=lan` |

#### SMB

| Parameter | Beschreibung | Wert |
|-----------|--------------|------|
| `server` | SMB-Server IP | `10.1.0.101` |
| `domain` | Windows-Domain | `LINUXMUSTER` |
| `share_autodiscover` | Auto-Erkennung | `false` empfohlen |
| `shares` | Liste der Shares | Array von `{name: "sharename"}` |
| `indexer_service_account.user` | AD-Konto für SMB-Lesezugriffe des Wiki-Indexers | `global-admin` |
| `indexer_service_account.password_file` | Pfad zur Passwort-Datei (Mode 0600) | `/etc/edulution-fileproxy/indexer.secret` |

:::tip[Share Autodiscover]
Bei `share_autodiscover: true` werden Admin-Credentials (`username`, `password`) benötigt.

**Empfehlung:** Nutzen Sie `false` und definieren Sie Shares manuell - sicherer!
:::

#### Elasticsearch (Wiki-Indexer)

| Parameter | Beschreibung | Wert |
|-----------|--------------|------|
| `enabled` | Wiki-Indexer aktivieren (Standard: an) | `true` |
| `url` | URL des ES-Sidecars | `http://127.0.0.1:9200` |

Siehe [Wiki-Infrastruktur](./wiki-infrastruktur) für die vollständige Einrichtung von ES-Sidecar und Erstindex.

## Wiki-Funktion vorbereiten

Die Wiki-Funktion ist in der mitgelieferten `config.yml` standardmäßig aktiviert (`elasticsearch.enabled: true`). Vor dem ersten Start muss daher entweder das Indexer-Passwort hinterlegt **oder** die Wiki-Funktion explizit deaktiviert werden – sonst beendet sich FileProxy beim Start mit einem Fatal-Fehler (`smb.indexer_service_account.user is required when elasticsearch.enabled is true`).

**Variante A – Wiki nutzen (Standard):**

```bash
echo -n 'GLOBAL_ADMIN_PASSWORT' | sudo tee /etc/edulution-fileproxy/indexer.secret
sudo chmod 600 /etc/edulution-fileproxy/indexer.secret
```

Anschließend gemäß [Wiki-Infrastruktur](./wiki-infrastruktur) den Elasticsearch-Sidecar starten und den ersten Index-Lauf durchführen.

**Variante B – Wiki nicht nutzen:**

In `/etc/edulution-fileproxy/config.yml`:

```yaml
elasticsearch:
  enabled: false
```

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

:::warning[Wichtig]
- ❌ **Keine** Admin-Credentials in der Config (außer bei Autodiscover)
- ✅ User-Credentials werden nie gespeichert
- ✅ Jeder User sieht nur eigene Dateien
- ✅ SMB-Berechtigungen werden übernommen
:::

## Nächster Schritt

Richten Sie den [FileProxy in der UI](./ui-config) ein →
