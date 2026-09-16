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
| Die virtuellen Desktops selbst | Linuxmuster-Server | [Virtuelle Maschinen](virtuelle-maschinen.md) |
| Die Eigenschaften der Verbindung | fest vorgegeben | [RDP-Verbindung](rdp-verbindung.md) |

Die Reihenfolge ist frei: Ohne virtuelle Maschinen auf dem Server bleiben die Karten in der App leer, ohne eingerichtete App sind die Maschinen aus der Plattform heraus nicht erreichbar.

:::warning[Die VDI-Umgebung selbst wird hier nicht aufgesetzt]
Diese Seiten beschreiben, wie edulution an eine vorhandene VDI-Umgebung angebunden wird. Das Aufsetzen der Umgebung auf dem Linuxmuster-Server – Klone anlegen, Images vorbereiten, Gruppen für den virtuellen Desktop aktivieren – gehört zur Server-Administration. Eine Anleitung dazu wird ergänzt, sobald sie vorliegt; bis dahin hilft der [Support](https://edulution.io) weiter.
:::

## Wenn etwas nicht funktioniert

Welche Meldung auf welche fehlende Einstellung hindeutet, steht in der [Übersicht](../index.md#meldungen-und-ihre-ursachen).
