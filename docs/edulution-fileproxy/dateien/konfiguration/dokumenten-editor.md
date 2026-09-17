---
title: Dokumenten-Editor einrichten
description: OnlyOffice, Collabora Online oder EuroOffice für die Bearbeitung von Office-Dokumenten in der Dateien-App
sidebar_custom_props:
  audience: admin
---

# Dokumenten-Editor einrichten

Damit sich Office-Dokumente direkt in der [Dateien](../index.md)-App bearbeiten lassen, brauchen Sie
einen Dokumenten-Editor. Zur Wahl stehen drei; **aktiv ist immer genau einer**.

| Editor | Pfad | Geheimnis |
| --- | --- | --- |
| **OnlyOffice** | `/docservice/` | JWT Secret – wird automatisch erzeugt |
| **Collabora Online** | `/collabora` | WOPI-Geheimschlüssel – vergeben Sie selbst |
| **EuroOffice** | `/eurooffice/` | JWT Secret – wird automatisch erzeugt |

Die Einrichtung läuft in vier Schritten ab. **Schritt 1 und 3 sind für alle Editoren gleich**,
Schritt 2 und 4 hängen vom gewählten Editor ab.

## 1. Dokumenten-Editor auswählen

In den Einstellungen unter **Dateien** den Reiter **Allgemeine Einstellungen**
öffnen:

1. Bei **Aktiver Dokumenten-Editor** den gewünschten Editor auswählen – **OnlyOffice**,
   **Collabora** oder **EuroOffice**

## 2. Integration konfigurieren

Tragen Sie im Bereich der jeweiligen Integration die folgenden Werte ein.

### OnlyOffice

Im Bereich **OnlyOffice Integration**:

- **OnlyOffice-URL**: Die edulution Plattform Domain mit dem Pfad `/docservice/`, z. B.
  `https://ui.example.de/docservice/`
- **OnlyOffice JWT Secret**: Wird automatisch generiert

### Collabora Online

Im Bereich **Collabora Online Integration**:

- **Collabora URL**: Die edulution Plattform Domain mit dem Pfad `/collabora`, z. B.
  `https://ui.example.de/collabora`
- **Collabora WOPI-Geheimschlüssel**: Einen selbst gewählten, geheimen
  Schlüssel eintragen. Empfohlen wird ein ausreichend langer, zufälliger
  Schlüssel aus ausschließlich alphanumerischen Zeichen (A–Z, a–z, 0–9),
  um Probleme durch Sonderzeichen zu vermeiden.

:::note[Ohne Schrägstrich am Ende]
Die Collabora-URL endet – anders als bei OnlyOffice und EuroOffice – **ohne** Schrägstrich.
:::

### EuroOffice

Im Bereich **EuroOffice Integration**:

- **EuroOffice-URL**: Die edulution Plattform Domain mit dem Pfad `/eurooffice/`, z. B.
  `https://ui.example.de/eurooffice/`
- **EuroOffice JWT Secret**: Wird automatisch generiert

## 3. Container installieren

1. Innerhalb der Dateien-App-Konfiguration unter **Docker Anwendungen** auf "+" klicken
2. Dann auf **Installieren** klicken

Der Container wird abgerufen und installiert.

## 4. Traefik konfigurieren

In der Proxy-Konfiguration den "Expertenmodus" aktivieren und die Konfiguration des gewählten
Editors eintragen. Damit werden die Anfragen über Traefik an den jeweiligen Dienst weitergeleitet.

### OnlyOffice

Leitet die Anfragen an den OnlyOffice Documentserver weiter.

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

### Collabora Online

Leitet die Anfragen an den Collabora-Container weiter. Collabora lauscht auf Port **9980** und
braucht eigene Zeitüberschreitungen – deshalb weicht diese Konfiguration von den beiden anderen ab.

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

### EuroOffice

Leitet die Anfragen an den EuroOffice Documentserver weiter.

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

## Siehe auch

- [Vorschau, Bearbeiten und Drucken](../vorschau-und-drucken.md) – wie sich der Editor in der Dateien-App bemerkbar macht
- [Container-Verwaltung](../../../edulution-plattform/konfiguration/container-verwaltung.md) – Container aktualisieren und neu starten
