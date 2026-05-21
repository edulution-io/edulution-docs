---
sidebar_position: 1
title: edulution OnlyOffice
---

# Installation

OnlyOffice ist eine Alternative zu Collabora für die Bearbeitung von
Office-Dokumenten direkt in der Dateien-App. Die folgenden Schritte
beschreiben die Einrichtung.

## Dokumenten-Editor auswählen

In den Einstellungen unter **Dateien** den Reiter **Allgemeine Einstellungen**
öffnen:

1. Bei **Aktiver Dokumenten-Editor** den Eintrag **OnlyOffice** auswählen

## OnlyOffice Integration

Im Bereich **OnlyOffice Integration** folgende Werte eintragen:

- **OnlyOffice-URL**: Die edulution UI Domain mit dem Pfad `/docservice/`, z. B.
  `https://ui.example.de/docservice/`
- **OnlyOffice JWT Secret**: Wird automatisch generiert

## Container installieren

1. Innerhalb der Dateien-App-Konfiguration unter **Docker Anwendungen** auf "+" klicken
2. Dann auf **Installieren** klicken

Der Container wird abgerufen und installiert.

## Traefik konfigurieren

In der Proxy-Konfiguration den "Expertenmodus" aktivieren und folgendes
eintragen. Damit werden die Anfragen an OnlyOffice über Traefik an den
OnlyOffice Documentserver weitergeleitet.

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
