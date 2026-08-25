---
sidebar_position: 1
title: edulution FileProxy
description: Die Dateien-App und der WebDAV-zu-SMB-Proxy dahinter
---

# edulution FileProxy

Dieser Bereich umfasst zwei Dinge: die **[Dateien](./dateien/index.md)**-App, mit der Sie in
edulution Ordner durchsuchen, Dateien teilen und Dokumente bearbeiten – und den **FileProxy**, den
Dienst, der die Netzlaufwerke Ihrer Einrichtung dafür bereitstellt.

<Audience roles="user">

Als Nutzer:in interessiert Sie die App: **[Dateien](./dateien/index.md)** beschreibt Navigation,
Freigaben, Vorschau, Quotas und die Einbindung per WebDAV.

</Audience>

## Der Proxy dahinter

WebDAV-zu-SMB Proxy für sicheren Dateizugriff auf Windows-Shares.

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

1. **[Package Server](./package-server.md)** - Edulution Repository einrichten
2. **[FileProxy installieren](./installation.md)** - Server aufsetzen und konfigurieren
3. **[Traefik konfigurieren](./traefik-config.md)** - Reverse Proxy einrichten
4. **[UI konfigurieren](./ui-config.md)** - WebDAV in edulution aktivieren

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

Beginnen Sie mit der [Package Server Einrichtung](./package-server.md) →
