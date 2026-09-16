---
sidebar_position: 6
title: Geräte einschreiben
description: Neue Geräte per Passcode und QR-Code einbuchen und offene Einschreibungen verwalten
sidebar_custom_props:
  audience: admin
---

# Geräte einschreiben

Ein Gerät kommt über eine **Einschreibung** in die Verwaltung: edulution erzeugt in Relution eine Einladung, das Gerät koppelt sich damit, und danach erscheint es im [Inventar](./geraete.md).

:::caution[Nur für Administratoren]
Einschreibungen anlegen und löschen dürfen ausschließlich Global- und Schuladministratoren.
:::

## Einschreibung erzeugen

![Gerät einschreiben](/img/features/mdm-enroll.png)

Über die Schaltfläche **Gerät einschreiben** öffnen Sie den Dialog:

| Feld | Beschreibung |
|------|--------------|
| **Plattform** | iOS, Android, Android Enterprise, macOS oder Windows |
| **Bezeichnung** | Freier Name, z. B. *„iPad Max Mustermann"* |
| **Benutzer** | Zuzuordnender Benutzer (Suchauswahl) |
| **BYOD (Bring Your Own Device)** | Privates Gerät statt Dienstgerät |
| **Einmalige Verwendung** | Die Einschreibung lässt sich nur ein einziges Mal einlösen |
| **Einschreibung per E-Mail senden** | Versendet die Einladung per E-Mail – nur möglich, wenn ein Benutzer gewählt ist |

Nach **Einschreibung erzeugen** erhalten Sie einen **Passcode** und einen **Enrollment-Link** als QR-Code. Der Nutzer öffnet den Link oder tippt den Passcode in der Relution-App ein, um das Gerät zu koppeln. Über **Weitere Einschreibung** legen Sie direkt die nächste an.

:::note[Wer wird zugeordnet]
Der gewählte Benutzer muss in Relution existieren – also über die [Benutzer-Synchronisation](./einrichtung/benutzer-synchronisation.md) angelegt worden sein. Ohne Benutzer entsteht eine Einschreibung ohne Zuordnung; sie funktioniert, das Gerät taucht danach aber bei niemandem im eigenen Geltungsbereich auf.
:::

:::tip[Dienstgerät statt BYOD]
**BYOD** ist voreingestellt. Für Schul- oder Firmengeräte deaktivieren Sie den Schalter – die Einschreibung wird dann als Dienstgerät angelegt und im Inventar entsprechend als **Eigentum** ausgewiesen.
:::

## Offene Einschreibungen

![Einschreibungen](/img/features/mdm-enrollments.png)

Der Reiter **Einschreibungen** zeigt alle Einladungen, die noch nicht zu einem Gerät geführt haben:

| Spalte | Beschreibung |
|--------|--------------|
| **Bezeichnung** | Name der Einschreibung |
| **Plattform** | Zielplattform |
| **Benutzer** | Zugeordneter Benutzer |
| **Status** | Erstellt, Einladung versendet, Eingeschrieben, Gelöscht oder Ungültig |
| **Eigentum** | BYOD, Dienstgerät oder Unbekannt |
| **Angelegt am** | Erstellungszeitpunkt |

Sie können nach dem Status filtern und ausgewählte Einträge über **Auswahl löschen** entfernen. Eine gelöschte Einschreibung lässt sich nicht mehr einlösen – für dasselbe Gerät legen Sie dann eine neue an.

## Siehe auch

- [Geräte](./geraete.md) – das Inventar, in dem gekoppelte Geräte erscheinen
- [Benutzer-Synchronisation](./einrichtung/benutzer-synchronisation.md) – wie Benutzer nach Relution kommen
