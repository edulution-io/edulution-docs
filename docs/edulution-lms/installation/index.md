---
sidebar_position: 0
title: Installation
sidebar_custom_props:
  audience: admin
---

# Installation

Wählen Sie die passende Installationsanleitung für Ihre Situation:

## Neue Installation

<Cards>
  <Card
    to="/docs/edulution-lms/installation/voraussetzungen"
    title="Voraussetzungen"
    text="Hardware, Software und Netzwerk-Anforderungen"
  />
  <Card
    to="/docs/edulution-lms/installation/schnellstart"
    title="Schnellstart"
    text="Aufsetzen der ersten Moodle-Instanz"
  />
  <Card
    to="/docs/edulution-lms/installation/detailliert"
    title="Detaillierte Installation"
    text="Vollständige Anleitung mit allen Optionen"
  />
</Cards>

## Bestehende Installation migrieren

<Cards>
  <Card
    to="/docs/edulution-lms/installation/migration"
    title="Migration"
    text="Bestehende Moodle-Installation zu edulution Moodle migrieren"
  />
</Cards>

## Deployment-Optionen

| Option | Beschreibung | Empfohlen für |
|--------|--------------|---------------|
| **edulution-Integration** | Teil der edulution-Infrastruktur | Bestehende edulution-Nutzer |
| **Standalone mit Traefik** | Eigenständig mit Let's Encrypt | Neue Installationen |
| **Standalone ohne Traefik** | Externer Reverse Proxy | Bestehende Infrastruktur |

## Nächste Schritte nach der Installation

1. [Synchronisation konfigurieren](/docs/edulution-lms/konfiguration/synchronisation)
2. [Plugins verwalten](/docs/edulution-lms/konfiguration/plugins)
3. [Admin-UI kennenlernen](/docs/edulution-lms/konfiguration/administration/admin-ui)
