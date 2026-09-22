# edulution-docs

Deutschsprachige Docusaurus-Dokumentation für edulution Plattform und edulution Mail.
Die Doku ist deutsch, alles GitHub-Seitige (Commit-Messages, PR-Titel und -Beschreibungen, Review-Kommentare) englisch.

## Vor dem Schreiben

- **Quelle ist der Code, nicht das Ticket.** Verhalten gegen den aktuellen Stand von `edulution-io/edulution-ui` (Branch `dev`) prüfen. Ein Ticket beschreibt die Absicht, nicht das, was ausgeliefert wurde.
- **UI-Texte wörtlich übernehmen** aus `apps/frontend/src/locales/de/translation.json`. Meldungen nicht nacherzählen – wer danach sucht, sucht nach dem Originalsatz.
- **Grenzwerte und Voreinstellungen aus den Konstanten lesen** (z. B. `libs/src/mail/constants/`), nicht schätzen und nicht aus einer älteren Doku übernehmen.

## Zuschnitt einer Seite

Nach [Diátaxis](https://diataxis.fr/) hat jede Seite genau einen Zweck. Die beiden, die hier vorkommen:

- **Anleitung** – bringt jemanden durch eine Aufgabe („Mailbox anlegen“).
- **Nachschlagewerk** – Felder, Grenzwerte, Meldungen; wird überflogen, nicht gelesen.

Beides auf einer Seite zu mischen hilft niemandem. Konzepte („was ist ein geteiltes Postfach“) gehören in einen eigenen kurzen Absatz am Anfang, nicht verteilt zwischen die Handgriffe.

## Aufgabe statt Bedienelement

- Überschriften und Sätze nennen das **Ziel**, nicht das Widget: „Mailbox anlegen“, nicht „Den Hinzufügen-Button verwenden“.
- Den Klick nur erwähnen, wenn er nicht auf der Hand liegt – dass eine ganze Tabellenzeile den Dialog öffnet, ist erwähnenswert, dass ein Speichern-Button gedrückt wird, nicht.
- **Keine Richtungsangaben** wie „oben rechts“ oder „weiter unten“. Sie stimmen je nach Bildschirmbreite nicht mehr und helfen mit Screenreader niemandem. Element beim Namen nennen; wenn nötig grob den Bereich („in der Werkzeugleiste“), nie die Bildschirmecke.
- Verben passend zur Handlung: *wählen Sie*, *geben Sie ein*, *aktivieren/deaktivieren Sie* (nicht „anhaken“), *öffnen Sie*.
- Nummerierte Schritte nur bei echter Reihenfolge, ein Schritt = eine Handlung, lieber unter sieben Schritte.

## Was nicht in die Doku gehört

- Was der Bildschirm ohnehin zeigt: Sortieren per Klick auf die Spaltenüberschrift, Einträge pro Seite, Auswahlkästchen, welche Spalten auf schmalen Bildschirmen wegfallen, eine Sicherheitsabfrage ohne Besonderheit.
- Beschriftungen, die sich selbst erklären: „**POP3 Zugriff** | Zugang per POP3“.
- Dieselbe Aussage zweimal. Jede Information steht an einer Stelle – dort, wo sie gebraucht wird.
- Platzhalter für später („TODO Screenshot“). Entweder ein Bild liegt vor oder der Abschnitt kommt ohne aus.

## Was hineingehört

- Verhalten, das man **nicht** sieht: was ein Speichern tatsächlich auslöst, was nach einem Teilfehler bestehen bleibt, was ein Schalter gerade **nicht** bewirkt.
- Grenzwerte und Voreinstellungen mit konkreter Zahl.
- Wer etwas sehen und tun darf, und was passiert, wenn eine Voraussetzung fehlt (leere Liste, Ladefehler, fehlende Berechtigung).
- Sonderfälle, die Nacharbeit erfordern, und der Weg zurück.
- **Fehlermeldungen** im Wortlaut, mit Ursache und Abhilfe. Der Wortlaut macht sie auffindbar, die beiden anderen Angaben beantworten „was ist passiert“ und „wie komme ich weiter“.

## Screenshots

Sparsam und gezielt: dort, wo ein Element schwer zu finden ist oder eine Entscheidung ansteht. Ein Bild, das nur wiederholt, was der Satz daneben sagt, bläht die Seite auf und veraltet mit dem nächsten UI-Umbau – ein falscher Screenshot kostet mehr Vertrauen, als ein fehlender gekostet hätte. Bei Oberflächen, die sich noch bewegen, lieber ganz darauf verzichten.

## Sprache und Form

- Sie-Form, Präsens, kurze Sätze.
- Deutsche Anführungszeichen „…“ (U+201E/U+201C), Halbgeviertstrich `–` mit Leerzeichen.
- Bedienelemente fett (**Speichern**), Platzhaltertexte kursiv (*Unverändert lassen*).
- Admonitions mit Titel in eckigen Klammern: `:::warning[Titel]`. Typ nach Gewicht wählen: `note` < `info` < `caution` < `warning` < `danger`.
- Feldlisten, Meldungen und Fehlerursachen als Tabelle, nicht als Fließtext.
- Frontmatter `sidebar_custom_props.audience` und vorhandene `<Audience roles="…">`-Blöcke beibehalten. Rollen, Organisationstypen und Syntax des Zielgruppen-Systems stehen im [README](README.md#zielgruppen-rollen-organisationstyp-modul).
- Interne Verweise als relative Links auf die `.md`-Datei, nie als absolute URL.

## Vor dem Commit

- `npm run build` ausführen. `onBrokenLinks` und `onBrokenAnchors` stehen auf `throw`, ein erfolgreicher Build belegt also, dass alle internen Verweise auflösen – auf die Seite ebenso wie auf den Abschnitt (`#anker`).
- Beim Verschieben oder Umbenennen von Seiten prüfen, ob eingehende Links und `docusaurus.config.ts` (Redirects) nachgezogen werden müssen.

## Grundlage

[Diátaxis](https://diataxis.fr/) (Seitenzuschnitt), [Google developer documentation style guide](https://developers.google.com/style/ui-elements) (Bedienelemente, keine Richtungsangaben), [Microsoft Writing Style Guide](https://learn.microsoft.com/en-us/style-guide/procedures-instructions/writing-step-by-step-instructions) (Schrittfolgen), [Google Technical Writing: Error Messages](https://developers.google.com/tech-writing/error-messages) (Fehlermeldungen).
