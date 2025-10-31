---
sidebar_position: 4
---

# Traefik Konfiguration

Reverse Proxy für FileProxy einrichten.

## Übersicht

Traefik leitet `/webdav` Anfragen von der edulution UI an den FileProxy-Server weiter.

## Voraussetzungen

- [FileProxy installiert und läuft](./installation)
- Traefik auf edulution UI VM
- FileProxy-Server IP-Adresse bekannt

## Konfiguration

### Config-Datei erstellen

Auf der **edulution UI VM**:

```bash
sudo nano /srv/docker/edulution-ui/data/traefik/config/webdav.yml
```

:::info Pfad
Der Pfad kann je nach Installation variieren. Suchen Sie nach dem Traefik-Config-Verzeichnis.
:::

### Config-Inhalt

```yaml
http:
  routers:
    webdav:
      rule: "PathPrefix(`/webdav`)"
      service: webdav
      entryPoints:
        - websecure
      tls: {}

  services:
    webdav:
      loadBalancer:
        servers:
          - url: "https://10.1.0.5:8443"
```

**Anpassen:** Ersetzen Sie `10.1.0.5` mit der IP Ihres FileProxy-Servers.

### Traefik neustarten

```bash
docker-compose restart traefik
```

## Nächster Schritt

Aktivieren Sie WebDAV in der [edulution UI](./ui-config) →
