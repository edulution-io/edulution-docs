# Markdown-Hilfe

Diese Übersicht zeigt die Markdown-Formatierungen, die im edulution Wiki unterstützt werden. Der Editor arbeitet als WYSIWYG-Editor und bietet alle Aktionen über die Werkzeugleiste und das Slash-Menü an (siehe [Wiki-Editor](wiki-editor.md)) – Sie können die hier gezeigte Markdown-Schreibweise aber auch direkt eingeben, sie wird beim Tippen umgewandelt. Gespeichert wird jede Seite als reine Markdown-Datei.

:::info[Geltungsbereich]
Diese Hilfe bezieht sich auf den [Wiki](wiki.md)-Editor. Andere Markdown-Felder in edulution unterstützen je nach Kontext einen Teil der hier beschriebenen Formatierungen.
:::

## Textauszeichnung

| Formatierung | Eingabe | Ergebnis |
|---|---|---|
| Fett | `**Beispiel**` | **Beispiel** |
| Kursiv | `*Beispiel*` | *Beispiel* |
| Durchgestrichen | `~~Beispiel~~` | ~~Beispiel~~ |
| Inline-Code | `` `Beispiel` `` | `Beispiel` |

## Überschriften

```markdown
# Überschrift 1
## Überschrift 2
### Überschrift 3
```

Verwenden Sie genau ein `#` (Überschrift 1) pro Seite – idealerweise als Seitentitel ganz oben.

## Absätze und Zeilenumbrüche

- Eine **Leerzeile** trennt zwei Absätze.
- Zwei Leerzeichen am Zeilenende erzeugen einen **harten Zeilenumbruch** innerhalb desselben Absatzes.

## Listen

**Aufzählung**

```markdown
- Erster Eintrag
- Zweiter Eintrag
  - Untereintrag
```

**Nummerierte Liste**

```markdown
1. Erster Schritt
2. Zweiter Schritt
3. Dritter Schritt
```

**Aufgabenliste**

```markdown
- [ ] Offen
- [x] Erledigt
```

## Links

| Eingabe | Ergebnis |
|---|---|
| `[edulution](https://edulution.io)` | externer Link |
| `[Anker](#textauszeichnung)` | Sprung zu Abschnitt auf gleicher Seite |
| `[[Seitenname]]` | Wiki-interner Verweis (siehe unten) |
| `[[Seitenname\|Anzeigetext]]` | Wiki-interner Verweis mit eigenem Linktext |

### Wiki-Verlinkung

Über `[[Seitenname]]` verlinken Sie auf eine andere Wiki-Seite. Die Zeichen `[[` müssen Sie nicht selbst tippen – das Buch-Symbol in der Werkzeugleiste und der Slash-Menü-Eintrag **Wiki-Seite verlinken** setzen sie für Sie ein. Sobald `[[` im Text steht und Sie mindestens zwei Zeichen eingegeben haben, schlägt der Editor passende Seiten aus allen Wikis zur Auswahl vor.

```markdown
Mehr Details finden Sie in [[Lehrerhandbuch]].
```

Soll der Link anders heißen als die Zielseite, trennen Sie Seitenname und Anzeigetext mit einem senkrechten Strich:

```markdown
Mehr Details finden Sie im [[Lehrerhandbuch|Handbuch für das Kollegium]].
```

## Bilder

```markdown
![Alternativtext](https://example.com/bild.png)
```

Bilder lassen sich auch per Drag & Drop oder direkt aus der Zwischenablage in den Editor einfügen. Sie werden dann in das Wiki hochgeladen und relativ zur Seite verlinkt (siehe [Anhänge](#anhänge)).

## Anhänge

Dateien, die Sie in eine Wiki-Seite hochladen, liegen auf derselben WebDAV-Freigabe wie die Seite und werden **relativ** verlinkt – ohne führenden Schrägstrich und ohne Servernamen:

```markdown
![Klassenfoto](bilder/klassenfoto.jpg)
[Elternbrief.pdf](anhaenge/Elternbrief.pdf)
```

Nicht-Bild-Dateien stellt der Editor als **Dateikarte** mit Symbol, Dateiname und den Aktionen Vorschau, Herunterladen und Entfernen dar. Im Markdown ist eine Dateikarte ein gewöhnlicher Link.

:::note[Nur innerhalb des Seitenordners]
Relative Anhang-Links dürfen nicht aus dem Ordner der Seite herausführen. Pfade mit `..` oder mit führendem `/` werden nicht als Anhang aufgelöst.
:::

## Code-Blöcke

Einrücken oder mit drei Backticks umschließen. Mit Sprachangabe wird Syntax-Highlighting aktiviert:

````markdown
```python
def hallo():
    print("Hallo Welt")
```
````

Zusätzlich lassen sich im Editor eine Sprache und ein optionaler Dateiname zum Block auswählen; über die Schaltfläche **Kopieren** wird der Inhalt in die Zwischenablage übernommen.

## Hinweisboxen

Hinweisboxen sind Zitate mit einem Marker in der ersten Zeile – dieselbe Schreibweise, die auch GitHub verwendet:

```markdown
> [!TIP]
> Legen Sie für jede Klasse eine eigene Index-Seite an.
```

Unterstützt werden `[!NOTE]` (Hinweis), `[!TIP]` (Tipp), `[!IMPORTANT]` (Wichtig), `[!WARNING]` (Warnung) und `[!CAUTION]` (Achtung).

## Formeln

Mathematische Formeln schreiben Sie als Code-Block mit der Sprache `math`. Sie werden mit KaTeX gerendert:

````markdown
```math
x^2 + y^2 = z^2
```
````

Im Editor öffnen Sie über **Matheblock** einen Dialog mit Live-Vorschau; ein Doppelklick auf eine fertige Formel öffnet ihn erneut. Formeln mitten im Fließtext werden nicht gerendert.

## Emojis

Emojis fügen Sie direkt als Zeichen ein. Tippen Sie im Editor einen Doppelpunkt gefolgt von mindestens zwei Buchstaben (z. B. `:smi`), erscheint eine Auswahlliste; gespeichert wird anschließend das Emoji selbst, nicht der Kurzcode.

## Tabellen

```markdown
| Spalte A | Spalte B |
|----------|----------|
| Wert 1   | Wert 2   |
| Wert 3   | Wert 4   |
```

Ergibt:

| Spalte A | Spalte B |
|----------|----------|
| Wert 1   | Wert 2   |
| Wert 3   | Wert 4   |

Die Ausrichtung steuern Sie über Doppelpunkte in der Trennzeile (`:---` linksbündig, `:---:` zentriert, `---:` rechtsbündig).

## Zitate

```markdown
> Wer schreibt, der bleibt.
```

Verschachtelte Zitate sind über mehrere `>` möglich (`>> Antwort`).

## Trennlinie

Eine horizontale Linie erzeugen Sie mit drei oder mehr Bindestrichen auf einer eigenen Zeile:

```markdown
---
```

## Tipps

:::tip[Markdown beim Tippen]
Der Editor wandelt Markdown direkt bei der Eingabe um: `## ` erzeugt eine Überschrift, `- ` eine Aufzählung, `> ` ein Zitat. Sie sehen also stets das fertige Ergebnis statt des Quelltexts.
:::

:::note[Sonderzeichen schützen]
Zeichen wie `*`, `_`, `` ` `` oder `#` lassen sich mit einem vorangestellten Backslash `\` als normaler Text darstellen, z. B. `\*kein Kursiv\*`.
:::

:::note[Unformatiert einfügen]
Mit `Strg + Umschalt + V` fügen Sie Inhalte aus der Zwischenablage ohne deren Formatierung ein.
:::

## Siehe auch

- [Wiki](wiki.md) – Aufbau und Bedienung des Wikis
- [Wiki-Editor](wiki-editor.md) – Werkzeugleiste, Slash-Menü, Anhänge und Suchen/Ersetzen
