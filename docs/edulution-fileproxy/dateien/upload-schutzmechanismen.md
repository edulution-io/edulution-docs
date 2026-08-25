---
sidebar_position: 10
---

# Schutzmechanismen beim Hochladen

Bevor Dateien tatsächlich übertragen werden, prüft edulution die Auswahl im Browser: Dateinamen, die auf dem Server oder unter Windows Probleme bereiten würden, werden abgewiesen, und bereits vorhandene Dateien werden vor dem Überschreiben angezeigt. Bilder, die innerhalb der Apps hochgeladen werden, wandelt edulution zusätzlich automatisch in das platzsparende Format WebP um.

## Prüfungen im Upload-Dialog

Im Dialog **Dateien hochladen** erscheinen die Hinweise direkt unter den Schaltflächen **Dateien hinzufügen** und **Ordner hinzufügen** – noch bevor etwas übertragen wird. Die Farbe des Warndreiecks zeigt an, ob der Upload noch möglich ist:

| Farbe | Bedeutung | Hochladen möglich |
|---|---|---|
| **Gelb** | Hinweis – etwas wird überschrieben | ja |
| **Rot** | Fehler – die Auswahl muss korrigiert werden | nein |

Solange eine rote Warnung angezeigt wird, bleibt die Schaltfläche **Hochladen** deaktiviert. Entfernen Sie die betroffenen Einträge über das Kreuz an der jeweiligen Vorschau oder – bei ungültigen Namen – über **Ungültige Dateien verwerfen**.

## Ungültige Dateinamen

Die Dateien werden auf einem Samba-Server abgelegt und sind über WebDAV auch im Datei-Explorer von Windows erreichbar. Namen, die dort nicht zulässig sind, lehnt edulution deshalb bereits im Browser ab, statt sie hochzuladen und den Fehler erst beim Zugriff sichtbar werden zu lassen.

### Nicht erlaubt

| Regel | Beispiel für einen ungültigen Namen |
|---|---|
| Die Zeichen `<` `>` `:` `"` `\|` `?` `*` | `Klassenarbeit 12:30.docx` |
| Die Zeichen `/` und `\` | `Mathe/Physik.pdf` |
| Steuerzeichen (unsichtbare Zeichen, etwa Tabulator oder Zeilenumbruch) | – |
| Ein Punkt am Ende des Namens | `Notizen.` |
| Nur Leerzeichen, `.` oder `..` als Name | `..` |
| Mehr als 255 Zeichen (beim Erstellen und Umbenennen) | – |

Umlaute, Leerzeichen und Bindestriche im Namen sind unproblematisch.

### Beim Hochladen

Enthält eine ausgewählte Datei ein unzulässiges Zeichen, erscheint eine rote Warnung mit der Liste der betroffenen Namen:

> **Ungültige Dateinamen**
> Die folgenden Dateien können nicht hochgeladen werden, da ihr Name ungültige Zeichen enthält (`< > : " | ? *`):

Bei Ordnern wird zusätzlich geprüft, wie die enthaltenen Dateien und Unterordner heißen. Verstößt auch nur ein Eintrag darin gegen die Regeln, lässt sich der gesamte Ordner nicht hochladen:

> **Ordner enthält ungültigen Dateinamen**
> Die folgenden Ordner können nicht hochgeladen werden, da darin enthaltene Dateien oder Unterordner ungültige Zeichen (`< > : " | ? *`) im Namen verwenden:

Ungültige Einträge werden gar nicht erst in die Liste der zu übertragenden Dateien aufgenommen. Über **Ungültige Dateien verwerfen** blenden Sie die Warnung aus und laden die übrigen Dateien hoch. Sollen die abgewiesenen Dateien mit übertragen werden, benennen Sie sie zuerst auf Ihrem Computer um und wählen Sie sie erneut aus.

### Beim Erstellen und Umbenennen

Dieselben Regeln gelten für **Ordner erstellen**, **Datei erstellen** und **Umbenennen**. Der Name wird schon während der Eingabe geprüft, die Schaltfläche zum Bestätigen bleibt bis zur Korrektur deaktiviert:

> Der Name enthält ungültige Zeichen. Folgende Zeichen sind nicht erlaubt: `< > : " | ? *`

Zusätzlich weist der Dialog auf einen Punkt am Ende des Namens und auf die Grenze von 255 Zeichen hin.

:::note[Auch der Server prüft mit]
Die Prüfung im Browser dient dem schnellen Feedback. Unabhängig davon lehnt auch die Serverseite unzulässige Namen ab – über eine andere Oberfläche oder direkt per WebDAV lassen sich also ebenfalls keine solchen Dateien anlegen.
:::

## Bereits vorhandene Dateien

Existiert im Zielordner bereits eine Datei oder ein Ordner mit demselben Namen, wird dieser beim Hochladen **überschrieben**. edulution weist vorher darauf hin – wo, hängt davon ab, wie Sie die Dateien auswählen.

### Über den Upload-Dialog

Im Dialog erscheint eine gelbe Warnung mit der vollständigen Liste der betroffenen Namen:

> **Warnung: Dateien existieren bereits**
> Die folgenden Dateien werden überschrieben:

Ordner werden getrennt aufgeführt (**Warnung: Ordner existieren bereits**). Der Upload bleibt möglich – die Liste ist ein Hinweis, keine Sperre. Wollen Sie eine vorhandene Datei behalten, entfernen Sie die neue Datei über das Kreuz an ihrer Vorschau aus der Auswahl.

### Per Drag & Drop in die Dateiliste

Ziehen Sie Dateien direkt in die Dateiübersicht, fragt edulution vor der Übertragung nach. Der Dialog listet auf, was überschrieben würde, und bietet drei Möglichkeiten:

| Schaltfläche | Wirkung |
|---|---|
| **Ersetzen** | Alle Dateien werden hochgeladen, vorhandene gleichen Namens überschrieben |
| **Nur neue Dateien hochladen** | Nur die Dateien, die es noch nicht gibt; vorhandene bleiben unverändert |
| **Abbrechen** | Es wird nichts hochgeladen |

**Nur neue Dateien hochladen** erscheint nur, wenn die Auswahl überhaupt neue Dateien enthält.

Derselbe Dialog erscheint, wenn Sie Dateien in eine [Freigabe](./index.md#teilen-sharing) mit Schreibrecht ziehen.

## Weitere Grenzen beim Hochladen

| Grenze | Wert |
|---|---|
| Dateien pro Upload (inklusive Ordnerinhalten) | 100 |
| Dateien innerhalb eines hochgeladenen Ordners | 100 |
| Maximale Größe je Datei | abhängig vom [FileProxy](./index.md#dateigröße) |

Wird eine Grenze überschritten, erscheint eine rote Warnung – bei Drag & Drop stattdessen eine Meldung am Bildschirmrand. Reicht während der Übertragung der Speicherplatz nicht aus, bricht edulution den Upload ab und meldet *Upload abgebrochen: Nicht genügend Speicherplatz*. Ihre aktuelle Speichernutzung sehen Sie im [Dashboard](../../edulution-plattform/erste-schritte/dashboard.md#quotas).

## Bilder werden automatisch in WebP umgewandelt

Bilder, die Sie **innerhalb einer App** hochladen – etwa als Anhang am Schwarzen Brett oder auf dem Whiteboard – wandelt edulution im Browser automatisch in das Format **WebP** um und komprimiert sie. Das spart Speicherplatz und verkürzt die Ladezeit für alle, die den Inhalt später ansehen.

Betroffen sind die Formate **JPEG**, **PNG**, **GIF** und **WebP**. Andere Dateien – auch andere Bildformate wie SVG oder TIFF – bleiben unverändert.

### Was dabei passiert

- Die Dateiendung wechselt zu `.webp`, der übrige Name bleibt erhalten: aus `Ausflug.jpg` wird `Ausflug.webp`
- Sehr große Bilder werden auf die maximale Kantenlänge verkleinert, das Seitenverhältnis bleibt erhalten
- Anschließend wird die Qualität schrittweise reduziert, bis das Bild die Größengrenze des jeweiligen Bereichs einhält
- Schlägt die Umwandlung fehl – etwa bei einer defekten Datei – wird das Bild unverändert hochgeladen

### Grenzen je Bereich

| Bereich | Maximale Größe | Maximale Kantenlänge |
|---|---|---|
| Schwarzes Brett (Anhänge) | 16 MB | 3840 px |
| [Whiteboard](../../edulution-plattform/apps/native-apps/whiteboard.md) | 16 MB | 3840 px |
| Texteditor (E-Mail, Signatur, Schwarzes Brett, Einstellungen) | 8 MB | 3840 px |
| App-Symbole und Grafiken in den Einstellungen | 8 MB | 3840 px |
| Umfragen – Bilder im Editor | 4 MB | 3840 px |
| Umfragen – Bilder als Antwort | 512 KB | 2048 px |

:::info[Nicht betroffen: die Dateien-App]
Bilder, die Sie in der Dateien-App hochladen, werden **unverändert** gespeichert – mit ihrem ursprünglichen Format, ihrer Auflösung und ihrer Qualität. Die automatische Umwandlung betrifft ausschließlich Bilder, die als Teil eines Inhalts in einer App hochgeladen werden.
:::

## Siehe auch

- [Dateien](./index.md) – Übersicht über die Dateiverwaltung
- [Dashboard](../../edulution-plattform/erste-schritte/dashboard.md#quotas) – Speichernutzung und Quota anzeigen
- [Whiteboard](../../edulution-plattform/apps/native-apps/whiteboard.md) – Bilder auf dem Whiteboard
