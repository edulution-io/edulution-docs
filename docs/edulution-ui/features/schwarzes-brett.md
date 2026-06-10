# Schwarzes Brett

Das Schwarze Brett dient als zentrale Kommunikationsplattform für Ankündigungen und Mitteilungen. Beiträge werden nach Kategorien geordnet, können mit Bildern versehen und auf Wunsch zusätzlich als Push-Benachrichtigung verschickt werden.

## Übersicht

Die Beiträge sind in Kategorien eingeteilt. Für jede Kategorie wird eine eigene Spalte mit den zugehörigen Einträgen angezeigt.

![Schwarzes Brett - Standard Ansicht](/img/schwarzes-brett/schwarzes-brett-normal-view.png)

:::tip[Rastergröße]
Standardmäßig gibt es eine Zeile, in der die Kategorien von links nach rechts aufgelistet werden. Um die Ansicht an Bildschirmgröße und Beitragsmenge anzupassen, lässt sich in der Menüleiste oben die Anzahl der Zeilen auf 1, 2 oder 3 setzen.

![Schwarzes Brett - Mehrzeilig](/img/schwarzes-brett/schwarzes-brett-change-row-count.png)
:::

### Tabelle

Übersicht aller Beiträge, filterbar nach Kategorien.

![Schwarzes Brett - Tabellen Ansicht](/img/schwarzes-brett/schwarzes-brett-table-view.png)

## Beiträge

### Beitrag erstellen

![Schwarzes Brett - Neuer Eintrag erstellen](/img/schwarzes-brett/schwarzes-brett-create-new-entry.png)

1. Wählen Sie eine **Kategorie**.
2. Geben Sie einen **Titel** ein und verfassen Sie den **Inhalt** im Editor. Dieser unterstützt Formatierungen wie **Fett**, *Kursiv*, Listen und Links; bei Bedarf lassen sich auch Bilder direkt einfügen.
3. Legen Sie optional einen **Sichtbarkeitszeitraum** fest – ein Datum, ab dem der Beitrag erscheint (**Sichtbar ab**), und ein **Ablaufdatum**, ab dem er nicht mehr angezeigt wird (**Sichtbar bis**).
4. Wählen Sie, ob und wie der Beitrag als [Benachrichtigung](#benachrichtigungen) verschickt werden soll.
5. Speichern Sie den Beitrag.

:::info[Autor]
Neben dem Zeitstempel des neuen Beitrages wird auch der Ersteller/Autor angeheftet und dann in der Kachelansicht angezeigt.
:::

:::info[Standard-Ablaufdatum]
Das Ablaufdatum wird standardmäßig auf 2 Wochen nach der Erstellung des Beitrages gesetzt, sodass veraltete Mitteilungen automatisch verschwinden. Bei Bedarf kann das Ablaufdatum angepasst werden.

Zum Beispiel sollten bei einer Schulaufführung die Informationen früh genug erscheinen, damit sich die Eltern den Abend frei halten können. In diesem Fall reichen die 2 Wochen möglicherweise nicht aus.
:::

#### Benachrichtigungen

Beim Erstellen eines Beitrags kann festgelegt werden, ob und auf welchem Weg die Empfänger benachrichtigt werden:

- **Nur Push** – Es wird ausschließlich eine Push-Benachrichtigung verschickt, ohne dass ein Beitrag am Schwarzen Brett erscheint.
- **Nur Schwarzes Brett** – Der Beitrag erscheint nur am Schwarzen Brett, ohne Push-Benachrichtigung.
- **Push & Schwarzes Brett** – Der Beitrag erscheint am Schwarzen Brett und wird zusätzlich per Push verschickt.

:::info[Titel & Text]
Für die Push-Benachrichtigung lassen sich **Titel** und **Text** individuell festlegen. Der Push-Text ist auf 150 Zeichen begrenzt.
:::

### Beitrag bearbeiten oder löschen

Bestehende Beiträge lassen sich jederzeit nachträglich anpassen oder entfernen – über das Kontextmenü (Drei-Punkte-Menü) der jeweiligen Kachel oder über die Tabellenansicht.

- **Bearbeiten** – Öffnet denselben Dialog wie beim Erstellen. Alle Felder (Kategorie, Titel, Inhalt, Sichtbarkeitszeitraum, Benachrichtigungseinstellungen) können geändert werden.
- **Löschen** – Entfernt den Beitrag. Vor dem endgültigen Löschen erscheint eine Sicherheitsabfrage.

:::tip[Beitrag deaktivieren statt löschen]
Über die Einstellung **Aktiv** eines Beitrags lässt sich dieser vorübergehend ausblenden, ohne ihn zu löschen. So bleibt der Inhalt erhalten und kann später wieder eingeblendet werden.
:::

## Kategorien

Beiträge werden Kategorien zugeordnet, nach denen die Tabelle gefiltert werden kann. Typische Kategorien sind:

- **Veranstaltungen & Ankündigungen** – Schulevents, Tag der offenen Tür, etc.
- **Nachhilfe & Unterstützung** – Lernpartnerschaften, Hausaufgabenhilfe
- **Fundsachen** – Verlorene und gefundene Gegenstände

### Kontextmenü

![Schwarzes Brett - Kontextmenü einer Kategorie](/img/schwarzes-brett/schwarzes-brett-category-context-menu.png)

- **Mitteilung erstellen** – Siehe [Beitrag erstellen](#beitrag-erstellen).
- **Kategorien verwalten** – (Nur für Administratoren sichtbar) Leitet zu den App-Einstellungen des Schwarzen Bretts weiter (siehe [Verwalten](#verwalten)).

### Verwalten

Die App-Einstellungen sind ausschließlich für Administratoren verfügbar. Dort lässt sich festlegen, welche Kategorien hinzugefügt, angepasst oder gelöscht werden.

![Schwarzes Brett - Einstellungen](/img/schwarzes-brett/schwarzes-brett-app-settings.png)

#### Einstellungen

Um eine bestimmte Kategorie anzupassen, kann einfach auf die Kategorie geklickt werden.

![Schwarzes Brett - Kategorie Einstellungen](/img/schwarzes-brett/schwarzes-brett-category-settings-menu.png)

- **Name** – Der angezeigte Name der Kategorie.
- **Aktiv** – Die Sichtbarkeit der ganzen Kategorie.
- **Standard-Sichtbarkeit der Mitteilungen** – Die Beiträge werden in auf-/zuklappbaren Kacheln dargestellt. Diese Einstellung legt fest, ob sie standardmäßig auf- oder zugeklappt sind:
  - **Vollständig sichtbar** – Standardmäßig aufgeklappt.
  - **Nur Titel anzeigen** – Standardmäßig zugeklappt.
- **Infoboard App** – Nutzer, die Teil einer dieser Gruppen sind, können die Einträge sehen und lesen.
- **Mitteilungen verwalten** – Nutzer, die Teil einer dieser Gruppen sind, können die Einträge verwalten und eigene Beiträge teilen.

:::info[Infoboard App]
Dies erlaubt eine Beschränkung auf bestimmte **Zugriffsgruppen**. So lassen sich z. B. Mitteilungen, die nur das Kollegium oder eine einzelne Klasse betreffen, gezielt austeilen.
:::

## Siehe auch

- [Dashboard](dashboard.md) – Schnellzugriff auf das Schwarze Brett
- [App-Store](app-store.md) – Schwarzes Brett aktivieren
- [Weitere Features](weitere-features.md) – Übersicht zusätzlicher Funktionen
