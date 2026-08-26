---
sidebar_position: 1
title: edulution FileProxy
description: Der WebDAV-zu-SMB-Proxy hinter der Dateien-App
sidebar_custom_props:
  audience: admin
---

# edulution FileProxy

Der **FileProxy** ist der Dienst hinter der Dateien-App: Er stellt die Netzlaufwerke Ihrer
Einrichtung als WebDAV bereit – ein WebDAV-zu-SMB-Proxy für sicheren Dateizugriff auf
Windows-Freigaben. Wie die App selbst bedient wird, steht im Zweig
**[Dateien](./dateien/index.md)** daneben.

## Was ist FileProxy?

**edulution-fileproxy** verbindet WebDAV-Clients (Browser, mobile Apps, Desktop-Programme) mit Windows-Dateifreigaben (SMB/CIFS). Entwickelt für Bildungseinrichtungen, ermöglicht es Schülern und Lehrern plattformübergreifenden Zugriff auf ihre Netzlaufwerke.

### Kernfunktionen

- 🔐 **LDAP-Authentifizierung** - Zentrale Anmeldung über Active Directory
- 🔄 **Credential-Passthrough** - Jeder User sieht nur seine eigenen Dateien
- 🚀 **Performance** - Optimiert in Go für hohe Geschwindigkeit
- 🔒 **TLS-Verschlüsselung** - Sichere HTTPS-Verbindung standardmäßig
- 📱 **Plattformunabhängig** - Funktioniert auf allen Geräten

## Architektur

```mermaid
graph LR
    A[WebDAV Client] -->|HTTPS| B[Traefik Proxy]
    B -->|HTTPS| C[FileProxy]
    C -->|LDAP| D[Active Directory]
    C -->|SMB| E[Windows Shares]
```

**Ablauf:**
1. User gibt LDAP-Credentials im WebDAV-Client ein
2. FileProxy authentifiziert gegen LDAP
3. FileProxy nutzt User-Credentials für SMB-Verbindung
4. User sieht nur eigene Dateien mit eigenen Berechtigungen

## Installation

Die Installation erfolgt in 4 Schritten:

1. **[Package Server](./konfiguration/package-server.md)** - Edulution Repository einrichten
2. **[FileProxy installieren](./konfiguration/installation.md)** - Server aufsetzen und konfigurieren
3. **[Traefik konfigurieren](./konfiguration/traefik-config.md)** - Reverse Proxy einrichten
4. **[UI konfigurieren](./konfiguration/ui-config.md)** - WebDAV in edulution aktivieren

## Voraussetzungen

- **Linuxmuster Fileserver** mit Ubuntu 24.04 LTS
- Zugriff auf LDAP-Server (Port 636/389)
- Zugriff auf SMB-Server (Port 445)
- Edulution UI mit Traefik

:::tip[Installation auf dem Fileserver]
FileProxy sollte auf dem **gleichen Host wie der Fileserver** installiert werden. Dies bietet:
- **Optimale Performance** - Direkter Zugriff auf SMB-Shares
- **Einfache Verwaltung** - Alles an einem Ort
- **Ressourcen-Effizienz** - Keine zusätzliche VM nötig

→ [Linuxmuster Fileserver Setup](https://docs.linuxmuster.net/de/v7.3/setup/setup-file-server.html)
:::

## Erste Schritte

Beginnen Sie mit der [Package Server Einrichtung](./konfiguration/package-server.md) →
