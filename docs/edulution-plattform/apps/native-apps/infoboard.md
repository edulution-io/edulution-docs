# Infoboard

Das **Infoboard** – das digitale schwarze Brett – dient als zentrale Kommunikationsplattform für Ankündigungen und Mitteilungen. Die Einträge werden nach Kategorien geordnet, können mit Bildern versehen und auf Wunsch zusätzlich als Push-Benachrichtigung verschickt werden.

## Übersicht

Die Mitteilungen sind in Kategorien eingeteilt. Für jede Kategorie wird eine eigene Spalte mit den zugehörigen Einträgen angezeigt.

![Infoboard - Standard Ansicht](/img/schwarzes-brett/schwarzes-brett-normal-view.png)

:::tip[Rastergröße]
Standardmäßig werden die Kategorien in einer Zeile von links nach rechts aufgelistet. Um die Darstellung an Bildschirmgröße und Mitteilungsmenge anzupassen, lässt sich in der Menüleiste oben über die Einstellung **Ansicht** zwischen **Auto**, **1 Zeile**, **2 Zeilen** und **3 Zeilen** wählen.

![Infoboard - Mehrzeilig](/img/schwarzes-brett/schwarzes-brett-change-row-count.png)
:::

### Tabelle

Übersicht aller Mitteilungen, filterbar nach Kategorien.

![Infoboard - Tabellen Ansicht](/img/schwarzes-brett/schwarzes-brett-table-view.png)

### Bilder von anderen Servern

Eine Mitteilung kann Bilder enthalten, die nicht auf dem edulution-Server liegen, sondern über die Adresse eines anderen Servers eingebunden sind. Beim Laden eines solchen Bildes erfährt dieser Server, wer die Mitteilung wann gelesen hat. Das Infoboard lädt diese Bilder deshalb nicht automatisch: An ihrer Stelle steht **Externes Bild blockiert**, und über dem Inhalt erscheint ein Hinweis mit dem Link **Bilder herunterladen**.

![Infoboard - Blockierte Bilder von anderen Servern](/img/schwarzes-brett/schwarzes-brett-external-images-blocked.png)

Ein Klick auf **Bilder herunterladen** lädt die Bilder dieser einen Mitteilung, und zwar nur für Sie. Die Freigabe gilt, bis Sie die Seite neu laden oder sich abmelden, auch wenn Sie die Mitteilung zwischendurch zu- und wieder aufklappen. Ändert der Autor den Inhalt der Mitteilung, werden ihre Bilder erneut blockiert. Beim Bearbeiten gilt die Sperre nicht: Öffnen Sie eine solche Mitteilung im Editor, lädt dieser ihre Bilder sofort.

Bilder, die über den Editor hochgeladen wurden, liegen auf dem edulution-Server und werden sofort angezeigt.

## Mitteilungen

<Audience roles="advanced">

### Mitteilung erstellen

![Infoboard - Neue Mitteilung erstellen](/img/schwarzes-brett/schwarzes-brett-create-new-entry.png)

1. Wählen Sie eine **Kategorie**.
2. Geben Sie einen **Titel** ein und verfassen Sie den **Inhalt** im Editor. Die Werkzeugleiste zeigt zunächst **Fett**, *Kursiv*, Unterstrichen, Links und **Bild hochladen**. Die übrigen Formate, darunter Überschriften, Schriftart und Schriftgröße, Listen, Einzüge und die Ausrichtung, blenden Sie über die Schaltfläche mit den drei Punkten (**Weitere Formatierung**) ein.
3. Legen Sie optional den Sichtbarkeitszeitraum fest – ein Datum, ab dem die Mitteilung erscheint (**Aktiv von**), und ein Datum, ab dem sie nicht mehr angezeigt wird (**Aktiv bis**).
4. Wählen Sie über die **Veröffentlichungsart**, ob und wie die Mitteilung verschickt wird (siehe [Veröffentlichungsart](#veröffentlichungsart)).
5. Speichern Sie die Mitteilung. Der Inhalt braucht dafür mindestens zehn sichtbare Zeichen oder ein Bild. Eine ältere Mitteilung mit kürzerem Inhalt lässt sich erst wieder speichern, nachdem Sie den Inhalt entsprechend verlängert haben, auch wenn Sie nur ein anderes Feld ändern möchten.

:::info[Autor]
Neben dem Zeitstempel der neuen Mitteilung wird auch der Ersteller/Autor angeheftet und dann in der Kachelansicht angezeigt.
:::

:::info[Bilder]
Bilder, die Sie über **Bild hochladen** einfügen, sehen alle Leser sofort. Ein Bild, das nur über die Adresse eines anderen Servers eingebunden ist, etwa aus einem kopierten Abschnitt einer Webseite, zeigt das Infoboard erst an, nachdem der Leser es freigegeben hat (siehe [Bilder von anderen Servern](#bilder-von-anderen-servern)).
:::

:::tip[Hell und dunkel]
Arbeiten Sie im dunklen Design, zeigt die Schaltfläche **Im Light Mode anzeigen** in der Werkzeugleiste den Inhalt so an, wie er im hellen Design erscheint. So lassen sich Textfarben für beide Designs prüfen.
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
