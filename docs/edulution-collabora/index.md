---
title: edulution Collabora
---

# Installation

Collabora Online ist eine Alternative zu OnlyOffice für die Bearbeitung von
Office-Dokumenten direkt in der Dateien-App. Die folgenden Schritte
beschreiben die Einrichtung.

## Dokumenten-Editor auswählen

In den Einstellungen unter **Dateien** den Reiter **Allgemeine Einstellungen**
öffnen:

1. Bei **Aktiver Dokumenten-Editor** den Eintrag **Collabora** auswählen

## Collabora Online Integration

Im Bereich **Collabora Online Integration** folgende Werte eintragen:

- **Collabora URL**: Die edulution UI Domain mit dem Pfad `/collabora`, z. B.
  `https://ui.example.de/collabora`
- **Collabora WOPI-Geheimschlüssel**: Einen selbst gewählten, geheimen
  Schlüssel eintragen. Empfohlen wird ein ausreichend langer, zufälliger
  Schlüssel aus ausschließlich alphanumerischen Zeichen (A–Z, a–z, 0–9),
  um Probleme durch Sonderzeichen zu vermeiden.

## Container installieren

1. Innerhalb der Dateien-App-Konfiguration unter **Docker Anwendungen** auf "+" klicken
2. Dann auf **Installieren** klicken

Der Container wird abgerufen und installiert.

## Traefik konfigurieren

In der Proxy-Konfiguration den "Expertenmodus" aktivieren und Folgendes
eintragen. Damit werden die Anfragen an Collabora über Traefik an den
Collabora-Container weitergeleitet.

```yaml
http:
  routers:
    collabora:
      rule: PathPrefix(`/collabora`)
      service: collabora
      entryPoints:
        - websecure
      tls: {}
      middlewares:
        - collabora-headers

  middlewares:
    collabora-headers:
      headers:
        customRequestHeaders:
          X-Forwarded-Proto: https

  services:
    collabora:
      loadBalancer:
        servers:
          - url: http://edulution-collabora:9980
        serversTransport: collabora-transport

  serversTransports:
    collabora-transport:
      forwardingTimeouts:
        dialTimeout: "30s"
        responseHeaderTimeout: "0s"
        idleConnTimeout: "0s"
```

**Anschließend "Speichern"**
