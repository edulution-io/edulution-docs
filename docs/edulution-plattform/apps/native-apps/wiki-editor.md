# Wiki-Editor

Im Editor des [Wikis](./wiki.md) sehen Sie beim Schreiben direkt das fertige Ergebnis: Überschriften, Listen, Tabellen, Bilder und Formeln werden sofort formatiert dargestellt – Markdown-Kenntnisse sind nicht nötig. Gespeichert wird die Seite als gewöhnliche Markdown-Datei auf der Datei-Freigabe des Wikis.

:::info[Geltungsbereich]
Diese Seite beschreibt den Editor im Wiki. Markdown-Felder in anderen Bereichen von edulution nutzen denselben Editor, dort stehen aber die Wiki-spezifischen Funktionen (Dateianhänge, `[[Wiki-Verlinkung]]`) nicht zur Verfügung.
:::

## Bearbeitungsmodus starten

Klicken Sie auf **Bearbeiten** (Stift-Symbol), um in den Bearbeitungsmodus zu wechseln. Voraussetzung ist Schreibrecht auf der zugrundeliegenden Datei-Freigabe. Änderungen werden automatisch gespeichert; die Statusanzeige zeigt den letzten Speicherzeitpunkt.

## Text formatieren

Für die Formatierung gibt es vier Wege, die sich beliebig kombinieren lassen:

| Weg | Wann sinnvoll |
|---|---|
| **Werkzeugleiste** oben im Editor | Alle Aktionen im Überblick |
| **Slash-Menü** (`/` am Zeilenanfang) | Schnelles Einfügen von Blöcken ohne Maus |
| **Auswahl-Menü** (erscheint über markiertem Text) | Textauszeichnung direkt an der Auswahl |
| **Markdown-Eingabe** (z. B. `## ` oder `- `) | Wenn Sie Markdown ohnehin beherrschen |

### Werkzeugleiste

Die Leiste am oberen Rand des Editors enthält von links nach rechts:

- **Überschriften** – Ausklappmenü mit Überschrift 1 bis 6 und Absatz
- **Fett**, **Kursiv**, **Durchgestrichen**, **Inline-Code**
- **Aufzählungsliste**, **Nummerierte Liste**, **Aufgabenliste**
- **Zitat**, **Hinweisboxen** (Ausklappmenü), **Codeblock**, **Matheblock**
- **Horizontale Trennlinie**
- **Link einfügen**, **Wiki-Seite verlinken**, **Medien einfügen** (Ausklappmenü), **Tabelle einfügen**
- **Suchen und ersetzen** – ganz rechts

### Slash-Menü

Tippen Sie am **Anfang einer leeren Zeile** ein `/`, um das Menü **Block einfügen** zu öffnen. Tippen Sie weiter, um die Liste zu filtern – gesucht wird über den Namen und über Stichwörter, sodass z. B. `h1`, `todo`, `latex` oder `attachment` ebenfalls treffen. Mit den Pfeiltasten wählen Sie einen Eintrag, mit `Enter` fügen Sie ihn ein, `Esc` schließt das Menü.

Steht der Cursor in einer leeren Zeile, erscheint zusätzlich links davon eine **Plus-Schaltfläche**, die dasselbe Menü öffnet.

Verfügbare Blöcke:

| Block | Beschreibung |
|---|---|
| **Überschrift 1–3** | Abschnittsüberschriften |
| **Absatz** | Einfacher Absatztext |
| **Aufzählungsliste**, **Nummerierte Liste**, **Aufgabenliste** | Listen, Aufgabenliste mit Häkchen |
| **Zitat** | Zitatblock |
| **Hinweis**, **Tipp**, **Wichtig**, **Warnung**, **Achtung** | Farbige Hinweisboxen |
| **Codeblock** | Eingerahmter Codeblock mit Syntaxhervorhebung |
| **Matheblock** | LaTeX-Formel |
| **Horizontale Trennlinie** | Visueller Trenner |
| **Link einfügen** | Link über Dialog |
| **Wiki-Seite verlinken** | Andere Wiki-Seite suchen und verlinken |
| **Bild per URL einfügen** | Bild über URL einbinden |
| **Datei hochladen** | Datei vom Gerät ins Wiki hochladen |
| **Vorhandene Datei einfügen** | Datei aus der WebDAV-Freigabe auswählen |
| **Tabelle einfügen** | 2×2-Tabelle mit Kopfzeile |

:::note[Nicht überall verfügbar]
Das Slash-Menü öffnet sich nur in normalen Absätzen. In Tabellenzellen, Codeblöcken und mitten in einem Satz bleibt `/` ein gewöhnliches Zeichen.
:::

### Auswahl-Menü

Markieren Sie Text, erscheint direkt darüber ein kleines Menü mit **Überschriften**, **Fett**, **Kursiv**, **Durchgestrichen**, **Inline-Code** und **Link einfügen**.

### Blöcke verschieben

Fahren Sie mit der Maus über einen Absatz, erscheint links davon ein **Anfasser** (sechs Punkte). Damit ziehen Sie den kompletten Block – Absatz, Liste, Tabelle, Bild oder Codeblock – an eine andere Stelle der Seite.

## Hinweisboxen

Hinweisboxen heben wichtige Informationen farblich hervor. Sie fügen sie über die Werkzeugleiste (**Hinweisboxen**) oder das Slash-Menü ein.

| Typ | Verwendung |
|---|---|
| **Hinweis** | Nützliche Information |
| **Tipp** | Hilfreicher Vorschlag |
| **Wichtig** | Entscheidende Information |
| **Warnung** | Wichtiger Warnhinweis |
| **Achtung** | Fehlerrisiko |

Im Markdown werden Hinweisboxen als Zitat mit vorangestelltem Marker gespeichert – dem Format, das auch GitHub verwendet:

```markdown
> [!TIP]
> Legen Sie für jede Klasse eine eigene Index-Seite an.
```

## Codeblöcke

Ein Codeblock wird mit Syntaxhervorhebung dargestellt. Oben rechts im Block liegt eine kleine Werkzeugleiste:

- **Sprache** – Auswahlliste mit den unterstützten Sprachen (u. a. Bash, C, C++, C#, CSS, Diff, Go, INI, Java, JavaScript, JSON, Markdown, PHP, Python, SCSS, Shell, SQL, TypeScript, XML, YAML) sowie **Klartext**
- **Dateiname** – optionale Beschriftung, die über dem Block angezeigt wird
- **Kopieren** – überträgt den Inhalt des Blocks in die Zwischenablage

Im Lesemodus bleiben Sprache, Dateiname und die Schaltfläche **Kopieren** sichtbar.

## Formeln (LaTeX)

Über **Matheblock** in der Werkzeugleiste oder `/mathe` im Slash-Menü öffnen Sie den Dialog **Mathematik einfügen**. Geben Sie dort einen LaTeX-Ausdruck ein – die **Vorschau** unterhalb des Feldes zeigt das gerenderte Ergebnis sofort an.

```latex
\frac{a}{b} \qquad x^2 + y^2 = z^2 \qquad \sum_{i=1}^{n} i = \frac{n(n+1)}{2}
```

Umschließende Trennzeichen (`$…$`, `$$…$$`, `\(…\)`, `\[…\]`) dürfen Sie mit eingeben, sie werden automatisch entfernt.

Ein **Doppelklick** auf eine fertige Formel öffnet den Dialog erneut zum Bearbeiten. Gespeichert wird die Formel als Codeblock mit der Sprache `math`:

````markdown
```math
x^2 + y^2 = z^2
```
````

:::note[Nur eigenständige Formeln]
Formeln werden als eigener Block eingefügt. Formeln mitten im Fließtext werden nicht gerendert.
:::

## Emojis

Tippen Sie einen Doppelpunkt gefolgt von mindestens zwei Buchstaben, z. B. `:smi`, öffnet sich die Liste **Emoji einfügen**. Gesucht wird über Namen, Kurzcodes und Schlagwörter. Mit den Pfeiltasten wählen Sie einen Eintrag, `Enter` fügt das Emoji als Zeichen in den Text ein, `Esc` bricht ab.

## Wiki-Verlinkung

Eine Verlinkung starten Sie über das Buch-Symbol in der Werkzeugleiste oder über **Wiki-Seite verlinken** im Slash-Menü – beide setzen die Zeichen `[[` an der Cursorposition ein. Alternativ tippen Sie `[[` selbst.

Anschließend erscheint die Auswahlliste **Wiki-Link einfügen**:

- Zunächst steht dort nur der Hinweis **Tippen, um eine Wiki-Seite zum Verlinken zu suchen**
- Ab **zwei eingegebenen Zeichen** durchsucht der Editor alle Wikis, auf die Sie Zugriff haben, und zeigt Titel und Pfad der Treffer an
- Auswahl mit den Pfeiltasten, Einfügen mit `Enter`; `Esc` schließt die Liste
- Findet die Suche keine Seite, erscheint der Hinweis **Keine passenden Wiki-Seiten gefunden.**
- Soll der Link anders heißen als die Seite, verwenden Sie `[[Seitenname|Anzeigetext]]`

## Dateien und Bilder anhängen

Anhänge liegen als echte Dateien auf der WebDAV-Freigabe des Wikis, nicht in der Markdown-Datei selbst. Damit bleiben sie über die App [Dateien](../../../edulution-fileproxy/dateien/index.md) erreichbar und lassen sich dort ansehen, [in der Dateivorschau öffnen](../../../edulution-fileproxy/dateien/vorschau-und-drucken.md#vorschau-öffnen), herunterladen, umbenennen oder ersetzen.

### Datei hochladen

Es gibt drei Wege, eine Datei vom eigenen Gerät hochzuladen:

- **Medien einfügen → Datei hochladen** in der Werkzeugleiste
- **Datei hochladen** im Slash-Menü
- Datei per **Drag & Drop** in den Editor ziehen oder aus der **Zwischenablage einfügen** (`Strg + V`)

Anschließend öffnet sich der Dialog **Ins Wiki hochladen**. Wählen Sie unter **Zielordner**, wo die Datei innerhalb dieses Wikis abgelegt wird, und bestätigen Sie mit **Hochladen**.

Nach dem Upload fügt der Editor die Datei an der Cursorposition ein:

- **Bilder** werden direkt als Bild angezeigt
- **Alle anderen Dateitypen** werden als **Dateikarte** mit Symbol und Dateiname eingefügt

### Vorhandene Datei einfügen

Über **Medien einfügen → Vorhandene Datei einfügen** (oder den gleichnamigen Eintrag im Slash-Menü) durchsuchen Sie die WebDAV-Freigabe und wählen eine oder mehrere bereits vorhandene Dateien aus. Die Auswahl bestätigen Sie mit **Einfügen**.

:::note[Nur Dateien im Ordner der Seite]
Anhänge werden relativ zur Wiki-Seite verlinkt. Dateien, die außerhalb des Ordners der aktuellen Seite liegen, lassen sich deshalb nicht einfügen – der Editor meldet in diesem Fall, dass sie übersprungen wurden.
:::

### Dateikarten verwenden

Klicken Sie eine Dateikarte an, erscheint darüber ein kleines Menü:

- **Vorschau** – öffnet die Datei in einem Fenster innerhalb von edulution (dieselbe [Dateivorschau](../../../edulution-fileproxy/dateien/vorschau-und-drucken.md#vorschau-öffnen) wie in der App **Dateien**)
- **Herunterladen** – lädt die Datei auf das eigene Gerät
- **Entfernen** – löscht nur die Karte aus der Seite; die Datei bleibt auf der Freigabe erhalten

:::info[Office-Dokumente in der Vorschau]
Office-Dokumente (`.docx`, `.xlsx`, `.pptx`, `.odt`, `.ods`, `.odp`) öffnet die **Vorschau** im eingerichteten Dokumenten-Editor – OnlyOffice, Collabora Online oder EuroOffice. Voraussetzung ist, dass Ihr Administrator einen [Dokumenten-Editor eingerichtet hat](../../../edulution-fileproxy/dateien/konfiguration/dokumenten-editor.md). Ist keiner konfiguriert, lässt sich ein Office-Dokument aus einer Dateikarte nicht öffnen; PDF-Dateien und Bilder öffnen sich unabhängig davon.
:::

### Bild per URL

Über **Medien einfügen → Bild per URL einfügen** binden Sie ein Bild ein, das bereits im Netz oder auf einem anderen Server liegt. Dabei wird keine Datei hochgeladen, sondern nur die Adresse hinterlegt.

## Tabellen

Eine neue Tabelle (2×2 mit Kopfzeile) fügen Sie über die Werkzeugleiste oder das Slash-Menü ein. Steht der Cursor in einer Tabelle, erscheint ein Menü mit den Aktionen **Spalte davor/danach einfügen**, **Spalte löschen**, **Zeile darüber/darunter einfügen**, **Zeile löschen** und **Tabelle löschen**.

## Suchen und ersetzen

Mit `Strg + F` (macOS: `Cmd + F`) oder dem Lupensymbol rechts in der Werkzeugleiste öffnen Sie **Suchen und ersetzen** für die geöffnete Seite:

- Alle Treffer werden im Text hervorgehoben, der aktuelle Treffer zusätzlich betont
- Die Anzeige **1 von 8** zeigt die Position in der Trefferliste; ohne Treffer erscheint **Keine Treffer**
- Mit **Vorheriger Treffer** / **Nächster Treffer** springen Sie durch das Dokument
- **Ersetzen** tauscht den aktuellen Treffer, **Alle ersetzen** alle Treffer auf einmal
- Über **Groß-/Kleinschreibung** schalten Sie die Unterscheidung von Groß- und Kleinbuchstaben ein
- `Esc` schließt die Leiste

:::note[Nur die aktuelle Seite]
Suchen und ersetzen wirkt ausschließlich auf die geöffnete Seite. Für die Suche über alle Wikis hinweg nutzen Sie die Volltextsuche (`Strg + Umschalt + F`, siehe [Wiki](./wiki.md#seiten-suchen)).
:::

## Tastenkombinationen

| Kombination | Wirkung |
|---|---|
| `Strg + B` | Fett |
| `Strg + I` | Kursiv |
| `Strg + Z` / `Strg + Y` | Rückgängig / Wiederholen |
| `Strg + F` | Suchen und ersetzen öffnen |
| `Strg + Umschalt + V` | Als unformatierten Text einfügen |
| `Strg + Umschalt + F` | Volltextsuche über alle Wikis |
| `/` | Slash-Menü am Zeilenanfang |
| `[[` | Wiki-Seite verlinken |
| `:` + mindestens zwei Buchstaben | Emoji-Auswahl |
| `Esc` | Offenes Menü oder offene Suchleiste schließen |

Auf macOS steht `Cmd` an der Stelle von `Strg`.

## Siehe auch

- [Wiki](./wiki.md) – Aufbau, Seitenverwaltung und Suche
- [Markdown-Hilfe](./markdown-hilfe.md) – Markdown-Syntax hinter dem Editor
- [Dateien](../../../edulution-fileproxy/dateien/index.md) – Freigabe, auf der Wiki-Seiten und Anhänge gespeichert werden; dort lassen sich Dateien auch [ansehen und bearbeiten](../../../edulution-fileproxy/dateien/vorschau-und-drucken.md#vorschau-öffnen)
- [Wiki-Einstellungen (Admin)](../../konfiguration/wiki-einstellungen.md) – Sichtbarkeit pro Freigabe steuern
