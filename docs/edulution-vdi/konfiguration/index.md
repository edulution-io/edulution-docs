---
sidebar_position: 1
title: Übersicht
sidebar_custom_props:
  audience: admin
---

# Desktop-Bereitstellung einrichten

Damit die App **Desktop-Bereitstellung** in der Plattform erscheint und Sitzungen öffnen kann, greifen drei Teile ineinander:

| Teil | Wo er eingerichtet wird | Beschrieben in |
| --- | --- | --- |
| Die App und ihr Guacamole-Dienst | edulution Plattform | [App einrichten](app-einrichten.md) |
| Die virtuellen Desktops selbst | Linuxmuster-Server | [Virtuelle Maschinen](virtuelle-maschinen.md) und [Server einrichten](../server/index.md) |
| Die Eigenschaften der Verbindung | fest vorgegeben | [RDP-Verbindung](rdp-verbindung.md) |

Die Reihenfolge ist frei: Ohne virtuelle Maschinen auf dem Server bleiben die Karten in der App leer, ohne eingerichtete App sind die Maschinen aus der Plattform heraus nicht erreichbar.

:::info[Die VDI-Umgebung selbst]
Diese Seiten beschreiben, wie edulution an die VDI-Umgebung angebunden wird. Wie die Umgebung auf dem Linuxmuster-Server entsteht – Proxmox vorbereiten, den Dienst `edulution-linbo-vdi` installieren, Image vorbereiten –, steht unter [Server einrichten](../server/index.md).
:::

## Wenn etwas nicht funktioniert

Welche Meldung auf welche fehlende Einstellung hindeutet, steht in der [Übersicht](../index.md#meldungen-und-ihre-ursachen).
