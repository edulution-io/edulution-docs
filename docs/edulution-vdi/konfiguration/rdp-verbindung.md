---
sidebar_position: 4
title: RDP-Verbindung
sidebar_custom_props:
  audience: admin
---

# RDP-Verbindung

## Eigenschaften der Verbindung

Die Sitzungen werden mit festen Vorgaben aufgebaut, die sich in der Oberfläche nicht ändern lassen:

| Eigenschaft | Wert |
| --- | --- |
| Port | `3389` |
| Authentisierung | **NLA** |
| Auflösung | passt sich der Fenstergröße an |
| Hintergrundbild | aktiviert |

Das Zertifikat des Ziels wird dabei nicht geprüft – die Verbindung läuft innerhalb des Schulnetzes zwischen Guacamole und der virtuellen Maschine.

## Direkte RDP-Verbindung (nur für Global-Admins)

Global-Admins finden in der Aktionsleiste am unteren Rand zusätzlich die Schaltfläche **Verbinden**. Sie öffnet den Dialog **RDP-Verbindung**, in dem Sie im Feld **Host** gezielt eine einzelne Maschine ansprechen, statt einen beliebigen freien Client anzufordern.

Der Host wird gegen die dem Server bekannten VDI-Maschinen geprüft: Adressen außerhalb dieser Liste weist die Plattform mit der Meldung *„Der angefragte Host ist kein gültiges VDI-Ziel."* ab. Erlaubt sind Buchstaben, Ziffern, Punkt, Bindestrich und Unterstrich bei maximal 253 Zeichen.

Für alle anderen Benutzer enthält die Aktionsleiste ausschließlich **Neu laden**.
