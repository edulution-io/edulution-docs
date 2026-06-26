---
title: edulution EuroOffice
---

# Installation

EuroOffice ist eine Alternative zu Collabora und OnlyOffice für die
Bearbeitung von Office-Dokumenten direkt in der Dateien-App. Die folgenden
Schritte beschreiben die Einrichtung.

## Dokumenten-Editor auswählen

In den Einstellungen unter **Dateien** den Reiter **Allgemeine Einstellungen**
öffnen:

1. Bei **Aktiver Dokumenten-Editor** den Eintrag **EuroOffice** auswählen

## EuroOffice Integration

Im Bereich **EuroOffice Integration** folgende Werte eintragen:

- **EuroOffice-URL**: Die edulution UI Domain mit dem Pfad `/eurooffice/`, z. B.
  `https://ui.example.de/eurooffice/`
- **EuroOffice JWT Secret**: Wird automatisch generiert

## Container installieren

1. Innerhalb der Dateien-App-Konfiguration unter **Docker Anwendungen** auf "+" klicken
2. Dann auf **Installieren** klicken

Der Container wird abgerufen und installiert.

## Traefik konfigurieren

In der Proxy-Konfiguration den "Expertenmodus" aktivieren und Folgendes
eintragen. Damit werden die Anfragen an EuroOffice über Traefik an den
EuroOffice Documentserver weitergeleitet.

```yaml
http:
  routers:
    eurooffice:
      rule: PathPrefix(`/eurooffice/`)
      service: eurooffice
      entryPoints:
        - websecure
      middlewares:
        - eurooffice-strip-prefix
        - eurooffice-add-headers
  services:
    eurooffice:
      loadBalancer:
        servers:
          - url: http://edulution-eurooffice-documentserver
  middlewares:
    eurooffice-strip-prefix:
      stripPrefix:
        prefixes:
          - /eurooffice/
    eurooffice-add-headers:
      headers:
        customRequestHeaders:
          X-Forwarded-Proto: https
```

**Anschließend "Speichern"**
