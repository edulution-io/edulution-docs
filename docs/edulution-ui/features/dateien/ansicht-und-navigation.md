---
sidebar_position: 5
---

# Ansicht und Navigation

Die Dateiliste lässt sich in zwei Ansichten darstellen, per Tastatur bedienen und über Filter auf die Dateitypen eingrenzen, die Sie gerade brauchen. Die Bedienelemente dafür finden Sie in der Zeile über der Dateiliste – neben dem Suchfeld **Tippen, um zu filtern**.

## Tabellen- und Kachelansicht

Rechts über der Dateiliste schalten Sie mit zwei Symbolen zwischen den Ansichten um:

| Symbol | Ansicht | Darstellung |
|---|---|---|
| ☰ | **Tabellenansicht** | Eine Zeile pro Datei mit Spalten für Name, Größe, Typ und Änderungsdatum – sortierbar über die Spaltenköpfe |
| ▦ | **Kachelansicht** | Große Symbole bzw. Vorschaubilder mit Dateiname und Zeitpunkt der letzten Änderung |

In beiden Ansichten gilt:

- Ein Klick auf einen Ordner wechselt hinein; ein Klick auf einen Dateinamen öffnet die [Dateivorschau](./index.md#dateivorschau) – bei Formaten ohne Vorschau bleibt der Klick wirkungslos
- Die **Checkbox** wählt ein Element aus, ohne es zu öffnen – für die Auswahl stehen dann die [Aktionen mit Dateien](./index.md#aktionen-mit-dateien) zur Verfügung
- Über das Symbol **⋮** öffnen Sie das Aktionsmenü eines einzelnen Elements
- Dateien lassen sich per Drag & Drop in einen Ordner ziehen
- In Unterordnern steht ganz oben der Eintrag **..**, der eine Ebene nach oben führt

Die gewählte Ansicht wird im Browser gespeichert und beim nächsten Aufruf der Dateien wieder verwendet. Die Einstellung gilt pro Browser und pro App – die Dateien-App und Auswahldialoge anderer Apps merken sich ihre Ansicht also getrennt voneinander.

## Navigation mit der Tastatur

Sie können sich durch die Dateiliste bewegen, ohne die Maus zu benutzen:

| Taste | Wirkung |
|---|---|
| ↓ / ↑ | Nächstes bzw. vorheriges Element (in der Kachelansicht: eine Zeile nach unten bzw. oben) |
| → / ← | Nächstes bzw. vorheriges Element – nur in der Kachelansicht |
| **Enter** | Markiertes Element öffnen: Ordner wechseln oder Datei in der Vorschau bzw. im Editor öffnen – sofern für den Dateityp eine Vorschau möglich ist |
| **Esc** | Geöffnete Vorschau schließen, sonst die Tastaturnavigation beenden |

Das aktuell markierte Element wird hervorgehoben; die Liste scrollt automatisch mit, sodass es immer sichtbar bleibt. Ist die Vorschau geöffnet, wechselt sie beim Blättern direkt zur jeweils markierten Datei – so lassen sich Bilder oder Dokumente nacheinander durchsehen.

Solange Sie in einem Eingabefeld tippen – etwa im Suchfeld –, sind die Pfeiltasten dem Eingabefeld vorbehalten und bewegen die Markierung nicht.

## Anzahl der Elemente

Unter der Dateiliste steht, wie viele Elemente der aktuelle Ordner enthält, zum Beispiel `12 Elemente`. Gezählt wird, was nach Suche und Filtern tatsächlich angezeigt wird – der Eintrag **..** zählt nicht mit.

Sobald Sie Elemente auswählen, zeigt dieselbe Stelle die Auswahl an, zum Beispiel `3 von 12 Dateien ausgewählt`.

## Filter

Über die Schaltfläche **Filter** blenden Sie einzelne Dateiarten aus oder ein:

- **Systemdateien anzeigen** – Dateien, die Betriebssysteme automatisch anlegen (z. B. `.DS_Store`, `Thumbs.db`)
- **Versteckte Dateien anzeigen** – alle Dateien und Ordner, deren Name mit einem Punkt beginnt (z. B. `.ssh`)
- **Dateikategorien** – Ordner, Dokument, Tabelle, Präsentation, Bild, Video, Audio, PDF, Archive, Code und Diagramm

System- und versteckte Dateien sind standardmäßig ausgeblendet, alle Kategorien sind standardmäßig eingeschaltet. Die Einstellungen werden im Browser gespeichert und gelten auch nach einem Ordnerwechsel und beim nächsten Aufruf weiter.

### Aktive Filter erkennen und zurücksetzen

Weicht ein Filter von der Standardeinstellung ab, erscheint an der Schaltfläche **Filter** ein Zähler mit der Anzahl der aktiven Filter. Gezählt werden abgeschaltete Dateikategorien sowie die eingeschalteten Optionen für System- und versteckte Dateien.

Sobald mindestens ein Filter aktiv ist, steht im Filtermenü unten der Eintrag **Zurücksetzen**. Ein Klick darauf schaltet alle Kategorien wieder ein und blendet System- und versteckte Dateien wieder aus.

:::tip
Wenn eine Datei fehlt, obwohl sie im Ordner liegt, lohnt sich ein Blick auf den Zähler an der Schaltfläche **Filter**: Meist ist noch ein Filter aus einer früheren Sitzung aktiv.
:::

## Siehe auch

- [Dateien](./index.md) – Übersicht über die Dateiverwaltung
- [Browser Download-Einstellungen](./browser-download-einstellungen.md) – Downloads im Browser erlauben
