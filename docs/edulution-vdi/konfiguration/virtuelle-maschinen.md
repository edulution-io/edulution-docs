---
sidebar_position: 3
title: Virtuelle Maschinen
sidebar_custom_props:
  audience: admin
---

# Virtuelle Maschinen bereitstellen

Die Desktops selbst verwaltet nicht edulution, sondern der Linuxmuster-Server. Die Plattform fragt dort die vorhandenen VDI-Klone ab und fordert bei **Starten** eine freie Maschine an.

## Woher die Angebote kommen

Eine LINBO-Hardwaregruppe stellt virtuelle Desktops bereit, wenn sie eine VDI-Konfiguration (`start.conf.<Gruppe>.vdi`) hat und darin **VDI aktiviert** ist. Angelegt wird sie auf dem Linuxmuster-Server mit dem Assistenten `vdi-setup` ([Installation](../server/installation.md#vdi-gruppe-anlegen)); bearbeiten lässt sie sich danach in der App **Schulserver** unter **LINBO → Gruppen** mit der Aktion **VDI** ([VDI-Konfiguration](../../edulution-server/linuxmuster.md#vdi-konfiguration)).

Der Name der Gruppe bestimmt, welche Karte in der App gefüllt wird:

| Gruppe auf dem Server | Karte in der App |
| --- | --- |
| `win11` | **Windows 11** |
| `ubuntu` | **Ubuntu** |

Eine Gruppe mit einem anderen Namen wird vom Dienst zwar verwaltet, erscheint in der App aber nicht. Gibt es zu einer Karte keine passende Gruppe oder sind deren Klone noch nicht fertig, zeigt die Karte „Keine Clients gefunden“.

Die Zahl auf der Karte ist `available_vms` aus der Zusammenfassung des Dienstes: fertige, laufende Klone, die niemand belegt ([Betrieb](../server/betrieb.md#zustand-prüfen)).

## Weiter

- [RDP-Verbindung](rdp-verbindung.md) – mit welchen Vorgaben die Sitzungen aufgebaut werden
- [Server einrichten](../server/index.md) – wie Master, Vorlage und Klone auf dem Linuxmuster-Server entstehen
- [Schulserver: Linuxmuster](../../edulution-server/linuxmuster.md) – Gruppen und deren `start.conf` am Schulserver
