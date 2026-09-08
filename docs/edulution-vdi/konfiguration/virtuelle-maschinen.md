---
sidebar_position: 3
title: Virtuelle Maschinen
sidebar_custom_props:
  audience: admin
---

# Virtuelle Maschinen bereitstellen

Die Desktops selbst verwaltet nicht edulution, sondern der Linuxmuster-Server. Die Plattform fragt dort die vorhandenen VDI-Klone ab und fordert bei **Starten** eine freie Maschine an.

## Woher die Angebote kommen

Ob eine Gruppe einen virtuellen Desktop bereitstellt, ist Teil ihrer `start.conf` – das Datenblatt der Gruppe in der [Linuxmuster-App](../../edulution-server/linuxmuster.md) zeigt den Wert an, bearbeiten lässt er sich in dieser Version dort nicht.

Die Namen der VDI-Gruppen auf dem Server bestimmen, welche Karte in der App gefüllt wird:

| Gruppe auf dem Server | Karte in der App |
| --- | --- |
| `win11` | **Windows 11** |
| `ubuntu` | **Ubuntu** |

Gibt es zu einer Karte keine passende Gruppe, bleibt sie ohne verfügbare Clients.

## Weiter

- [RDP-Verbindung](rdp-verbindung.md) – mit welchen Vorgaben die Sitzungen aufgebaut werden
- [Schulserver: Linuxmuster](../../edulution-server/linuxmuster.md) – Gruppen und deren `start.conf` am Schulserver
