---
sidebar_position: 1
title: edulution OnlyOffice
---

# Installation

## Container installieren

![OnlyOffice Dokumentserver Container Installation](/img/edulution-onlyoffice/edu-onlyoffice-install-container.webp)

1. Innerhalb der Dateinen-App-Konfiguration unter Docker Anwendungen auf "+" clicken
2. Dann auf "Installieren"

Der Container wird abgerufen und installiert.

## Only Office Integration

![OnlyOffice Dokumentserver Konfiguration](/img/edulution-onlyoffice/edu-onlyoffice-config.webp)

1. Als URL die edulution UI domain angeben mit dem Pfad `/docservice/`
2. Das JWT Secret unter `/src/docker/edulution-ui/edulution.env` als `EDULUTION_ONLYOFFICE_JWT_SECRET` auslesen

## Traefik konfigurieren

![OnlyOffice Dokumentserver Konfiguration](/img/edulution-onlyoffice/edu-onlyoffice-proxy-config.webp)

In der Proxy-Konfiguration den "Expertenmodus" aktivieren und folgendes eintragen. Damit werden die Anfragen an OnlyOffice über Traefik an den OnlyOffice Documentserver weitergeleitet.

```yaml
http:
  routers:
    docservice:
      rule: PathPrefix(`/docservice/`)
      service: docservice
      entryPoints:
        - websecure
      middlewares:
        - docservice-strip-prefix
        - docservice-add-headers
  services:
    docservice:
      loadBalancer:
        servers:
          - url: http://edulution-onlyoffice-documentserver
  middlewares:
    docservice-strip-prefix:
      stripPrefix:
        prefixes:
          - /docservice/
    docservice-add-headers:
      headers:
        customRequestHeaders:
          X-Forwarded-Proto: https
```

**Anschließend "Speichern"**
