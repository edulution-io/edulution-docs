---
title: edulution Server
description: Der pädagogische Server auf Basis von linuxmuster.net – Benutzer, Gruppen, Geräte und Rechte
sidebar_custom_props:
  audience: admin
---

# edulution Server

Der **edulution Server** liefert die pädagogische Infrastruktur out-of-the-box: **linuxmuster.net**
als Unterbau, automatisiertes Benutzer- und Gruppenmanagement, sichere Datei-Ablage,
User Management und Backup-Mechanismen. Er läuft auf eigener Hardware oder virtualisiert und
integriert sich nahtlos in die [edulution Plattform](../edulution-plattform/index.md).

In der Plattform erscheint der Server als App **Schulserver**. Alle Daten stammen dabei live aus
der Linuxmuster-API (`linuxmuster-api7`) – die Plattform hält dafür keinen eigenen Zwischenspeicher.

## Wo Sie anfangen

- **[Installation](./installation.md)** – die Linuxmuster-API auf dem Schulserver einrichten,
  Bind-User und Setup-Token anlegen.
- **[Linuxmuster & LINBO](./linuxmuster.md)** – Aufbau der App, Geräteverwaltung,
  Elternzuweisung und die LINBO-Ansicht.
- **[Benutzerverwaltung](./benutzerverwaltung.md)** – Benutzerkonten über die
  Sophomorix-Verwaltungslisten anzeigen, importieren und pflegen.

:::info[Ohne Linuxmuster kein Schulserver]
Die App steht nur zur Verfügung, wenn die **Zielplattform** in den
[globalen Einstellungen](../edulution-plattform/konfiguration/einstellungen.md#allgemein) auf
**Linuxmuster** gesetzt ist. Steht sie auf **Allgemein**, entfallen dieser Bereich und alle
darin beschriebenen Funktionen.
:::
