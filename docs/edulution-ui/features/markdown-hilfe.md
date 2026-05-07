# Markdown-Hilfe

Diese Übersicht zeigt die Markdown-Formatierungen, die im edulution Wiki unterstützt werden. Der Editor bietet die wichtigsten Aktionen über die Werkzeugleiste an – Sie können den Markdown-Text aber auch direkt eingeben.

:::info Geltungsbereich
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

### Wiki-Verlinkung

Über `[[Seitenname]]` verlinken Sie auf eine andere Seite im selben Wiki. Während der Eingabe schlägt der Editor passende Seiten vor. Ein Treffer wird nach dem Speichern als klickbarer Link dargestellt.

```markdown
Mehr Details finden Sie in [[Lehrerhandbuch]].
```

## Bilder

```markdown
![Alternativtext](https://example.com/bild.png)
```

Bilder lassen sich auch direkt aus der Zwischenablage in den Editor einfügen.

## Code-Blöcke

Einrücken oder mit drei Backticks umschließen. Mit Sprachangabe wird Syntax-Highlighting aktiviert:

````markdown
```python
def hallo():
    print("Hallo Welt")
```
````

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

:::tip Vorschau nutzen
Während der Bearbeitung im Wiki-Editor sehen Sie das gerenderte Ergebnis live. So lässt sich Formatierung schnell überprüfen, ohne die Seite zu speichern.
:::

:::note Sonderzeichen schützen
Zeichen wie `*`, `_`, `` ` `` oder `#` lassen sich mit einem vorangestellten Backslash `\` als normaler Text darstellen, z. B. `\*kein Kursiv\*`.
:::

## Siehe auch

- [Wiki](wiki.md) – Aufbau und Bedienung des Wikis
