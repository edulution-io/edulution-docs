# Infoboard

Das **Infoboard** – das digitale schwarze Brett – dient als zentrale Kommunikationsplattform für Ankündigungen und Mitteilungen. Die Einträge werden nach Kategorien geordnet, können mit Bildern versehen und auf Wunsch zusätzlich als Push-Benachrichtigung verschickt werden.

## Übersicht

Die Mitteilungen sind in Kategorien eingeteilt. Für jede Kategorie wird eine eigene Spalte mit den zugehörigen Einträgen angezeigt.

![Infoboard - Standard Ansicht](/img/schwarzes-brett/schwarzes-brett-normal-view.png)

:::tip[Rastergröße]
Standardmäßig werden die Kategorien in einer Zeile von links nach rechts aufgelistet. Um die Darstellung an Bildschirmgröße und Mitteilungsmenge anzupassen, lässt sich in der Menüleiste oben über die Einstellung **Ansicht** zwischen **Auto**, **1 Zeile**, **2 Zeilen** und **3 Zeilen** wählen.

![Infoboard - Mehrzeilig](/img/schwarzes-brett/schwarzes-brett-change-row-count.png)
:::

### Leere Kategorien

Kategorien ohne aktive Mitteilungen werden nicht angezeigt. Dadurch stehen die Spalten mit aktuellen Mitteilungen immer vorne, und eine wichtige Mitteilung rutscht nicht hinter mehrere leere Kategorien.

Sobald eine Kategorie wieder eine aktive Mitteilung enthält, erscheint sie automatisch erneut – auch ohne die Seite neu zu laden. Enthält keine der für Sie freigegebenen Kategorien eine aktive Mitteilung, erscheint anstelle der Spalten der Hinweis **Derzeit gibt es auf keinem Infoboard offene Themen.**

<Audience roles="advanced">

:::tip[Eigene leere Kategorien einblenden]
Wenn Sie Mitteilungen verwalten dürfen, blendet die Einstellung **Ansicht** → **Leere Infoboards anzeigen** zusätzlich die leeren Kategorien ein, für die Sie Schreibrechte besitzen – etwa um dort die erste Mitteilung zu erstellen. Die Einstellung ist standardmäßig ausgeschaltet und wird pro Benutzer gespeichert, gilt also auf allen Ihren Geräten.

Leere Kategorien, für die Sie nur Leserechte besitzen, bleiben unabhängig davon ausgeblendet.

Unabhängig von dieser Einstellung können Sie über **Erstellen** in der Menüleiste jederzeit eine Mitteilung in jeder Kategorie anlegen, für die Sie Schreibrechte besitzen.
:::

</Audience>

### Tabelle

Übersicht aller Mitteilungen, filterbar nach Kategorien.

![Infoboard - Tabellen Ansicht](/img/schwarzes-brett/schwarzes-brett-table-view.png)

## Mitteilungen

<Audience roles="advanced">

### Mitteilung erstellen

![Infoboard - Neue Mitteilung erstellen](/img/schwarzes-brett/schwarzes-brett-create-new-entry.png)

1. Wählen Sie eine **Kategorie**.
2. Geben Sie einen **Titel** ein und verfassen Sie den **Inhalt** im Editor. Dieser unterstützt Formatierungen wie **Fett**, *Kursiv*, Listen und Links; bei Bedarf lassen sich auch Bilder direkt einfügen.
3. Legen Sie optional den Sichtbarkeitszeitraum fest – ein Datum, ab dem die Mitteilung erscheint (**Aktiv von**), und ein Datum, ab dem sie nicht mehr angezeigt wird (**Aktiv bis**).
4. Wählen Sie über die **Veröffentlichungsart**, ob und wie die Mitteilung verschickt wird (siehe [Veröffentlichungsart](#veröffentlichungsart)).
5. Speichern Sie die Mitteilung.

:::info[Autor]
Neben dem Zeitstempel der neuen Mitteilung wird auch der Ersteller/Autor angeheftet und dann in der Kachelansicht angezeigt.
:::

:::info[Standard-Ablaufdatum]
Das Ablaufdatum (**Aktiv bis**) wird standardmäßig auf 2 Wochen nach der Erstellung der Mitteilung gesetzt, sodass veraltete Mitteilungen automatisch verschwinden. Bei Bedarf kann das Ablaufdatum angepasst werden.

Zum Beispiel sollten bei einer Schulaufführung die Informationen früh genug erscheinen, damit sich die Eltern den Abend frei halten können. In diesem Fall reichen die 2 Wochen möglicherweise nicht aus.
:::

#### Veröffentlichungsart

Beim Erstellen einer Mitteilung kann festgelegt werden, ob und auf welchem Weg die Empfänger benachrichtigt werden:

- **Nur Push** – Es wird ausschließlich eine Push-Benachrichtigung verschickt, ohne dass ein Aushang im Infoboard erscheint.
- **Nur Aushang** – Die Mitteilung erscheint nur im Infoboard, ohne Push-Benachrichtigung.
- **Push & Aushang** – Die Mitteilung erscheint im Infoboard und wird zusätzlich per Push verschickt.

:::info[Titel & Text]
Für die Push-Benachrichtigung lassen sich **Titel** und **Text** individuell festlegen. Der Push-Text ist auf 150 Zeichen begrenzt.
:::

### Mitteilung bearbeiten oder löschen

Bestehende Mitteilungen lassen sich jederzeit nachträglich anpassen oder entfernen – über das Kontextmenü (Drei-Punkte-Menü) der jeweiligen Kachel oder über die Tabellenansicht.

- **Bearbeiten** – Öffnet denselben Dialog wie beim Erstellen. Alle Felder (Kategorie, Titel, Inhalt, Sichtbarkeitszeitraum, Veröffentlichungsart) können geändert werden.
- **Löschen** – Entfernt die Mitteilung. Vor dem endgültigen Löschen erscheint eine Sicherheitsabfrage.

:::tip[Mitteilung deaktivieren statt löschen]
Über die Einstellung **Aktiv** einer Mitteilung lässt sich diese vorübergehend ausblenden, ohne sie zu löschen. So bleibt der Inhalt erhalten und kann später wieder eingeblendet werden.

War es die letzte aktive Mitteilung der Kategorie, verschwindet damit auch deren Spalte aus der Übersicht (siehe [Leere Kategorien](#leere-kategorien)). Dasselbe geschieht, wenn die letzte Mitteilung ihr Datum **Aktiv bis** überschreitet.
:::

</Audience>

## Kategorien

Mitteilungen werden Kategorien zugeordnet, nach denen die Tabelle gefiltert werden kann. Typische Kategorien sind:

- **Veranstaltungen & Ankündigungen** – Schulevents, Tag der offenen Tür, etc.
- **Nachhilfe & Unterstützung** – Lernpartnerschaften, Hausaufgabenhilfe
- **Fundsachen** – Verlorene und gefundene Gegenstände

### Kontextmenü

![Infoboard - Kontextmenü einer Kategorie](/img/schwarzes-brett/schwarzes-brett-category-context-menu.png)

- **Mitteilung erstellen** – Siehe [Mitteilung erstellen](#mitteilung-erstellen).
- **Kategorien verwalten** – (Nur für Administratoren sichtbar) Leitet zu den App-Einstellungen des Infoboards weiter (siehe [Verwalten](#verwalten)).

<Audience roles="admin">

### Verwalten

Die App-Einstellungen sind ausschließlich für Administratoren verfügbar. Dort lässt sich festlegen, welche Kategorien hinzugefügt, angepasst oder gelöscht werden.

![Infoboard - Einstellungen](/img/schwarzes-brett/schwarzes-brett-app-settings.png)

#### Einstellungen

Um eine bestimmte Kategorie anzupassen, kann einfach auf die Kategorie geklickt werden.

![Infoboard - Kategorie Einstellungen](/img/schwarzes-brett/schwarzes-brett-category-settings-menu.png)

- **Name** – Der angezeigte Name der Kategorie.
- **Aktiv** – Die Sichtbarkeit der ganzen Kategorie.
- **Standardsichtbarkeit der Mitteilungen** – Die Mitteilungen werden in auf-/zuklappbaren Kacheln dargestellt. Diese Einstellung legt fest, ob sie standardmäßig auf- oder zugeklappt sind:
  - **Vollständig sichtbar** – Standardmäßig aufgeklappt.
  - **Nur Titel anzeigen** – Standardmäßig zugeklappt.
- **Infoboard App** – Nutzer, die Teil einer dieser Gruppen sind, können die Einträge sehen und lesen.
- **Mitteilungen verwalten** – Nutzer, die Teil einer dieser Gruppen sind, können die Einträge verwalten und eigene Mitteilungen teilen.

:::info[Infoboard App]
Dies erlaubt eine Beschränkung auf bestimmte **Zugriffsgruppen**. So lassen sich z. B. Mitteilungen, die nur das Kollegium oder eine einzelne Klasse betreffen, gezielt austeilen.
:::

</Audience>

## Siehe auch

- [Dashboard](../../uebersicht/dashboard.md) – Schnellzugriff auf das Infoboard
- [App-Store](../app-store.md) – Infoboard aktivieren
