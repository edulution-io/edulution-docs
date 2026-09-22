# Konferenzen

Mit der App **Konferenzen** legen Sie Räume für Audio- und Videokonferenzen an, laden einzelne Personen oder ganze Gruppen ein und starten den Raum, wenn es losgeht. Der Raum selbst kommt von BigBlueButton und bringt Bildschirmfreigabe, Whiteboard, Chat, geteilte Notizen und Umfragen mit.

:::info[BigBlueButton erforderlich]
Konferenzen laufen auf einem BigBlueButton-Server, der zuvor eingerichtet sein muss. Die Anleitung dazu folgt in einem eigenen Dokument.
:::

## Übersicht

Die Konferenzen stehen als Karten in zwei Abschnitten:

- **Meine Konferenzen** – die Konferenzen, die Sie selbst angelegt haben. Nur dort stehen Bearbeiten, Beenden und Löschen zur Verfügung.
- **Eingeladen** – die Konferenzen anderer, zu denen Sie eingeladen sind. Gibt es keine, steht dort „Noch keine Konferenzen“.

Jede Karte nennt Namen und Icon der Konferenz, den Ersteller und unter **Beigetreten**, wie viele der eingeladenen Teilnehmer gerade im Raum sind. Die übrigen Angaben erscheinen nur, wenn sie zutreffen:

| Anzeige | Bedeutung |
|---------|-----------|
| **Live** mit grünem Punkt | Die Konferenz läuft gerade. |
| Schlüsselsymbol | Die Konferenz ist durch ein Passwort geschützt. |
| Weltkugelsymbol | Die Konferenz ist öffentlich. Ein Klick darauf öffnet **Konferenz teilen** mit Zugangslink und QR-Code. |

Das Suchfeld (*Suche nach Konferenzname*) filtert beide Abschnitte nach dem Namen, während Sie tippen.

:::info[Live-Teilnehmerzahl]
**Beigetreten** aktualisiert sich automatisch, solange die Konferenz läuft – ein manuelles Neuladen ist dafür nicht erforderlich. Aus Datenschutzgründen wird ausschließlich die Anzahl angezeigt, nicht, wer beigetreten ist.
:::

## Konferenz anlegen

1. Wählen Sie in **Meine Konferenzen** die Karte **Konferenz erstellen**.
2. Geben Sie einen Namen ein und laden Sie Teilnehmer oder Gruppen ein.
3. Legen Sie die [Raumeinstellungen](#raumeinstellungen) fest.
4. Speichern Sie die Konferenz.

| Feld | Bedeutung |
|------|-----------|
| **Name der Konferenz** | Pflichtfeld, 3 bis 60 Zeichen. Der Name steht auf der Karte und im Titel des Konferenzfensters. |
| **Icon** | Bild, das die Karte anstelle des Standardsymbols zeigt. |
| **Teilnehmer** | Personen, die eingeladen werden (*Tippen um zu suchen*). Sie selbst sind immer Teilnehmer und lassen sich nicht auswählen. |
| **Gruppen** | Ganze Klassen, Projekte oder Gruppen einladen – bequemer, als deren Mitglieder einzeln zu suchen. |
| **Passwort** | Optional. Wer beitritt, muss es eingeben. |
| **Zutrittsbeschränkung** | **Privat**: nur eingeladene Teilnehmer. **Öffentlich**: zusätzlich jeder, der den Zugangslink hat – auch ohne Anmeldung an der Plattform. |

Ist der Name kürzer als drei oder länger als 60 Zeichen, meldet das Formular „Mindestens 3 Zeichen“ beziehungsweise „Maximal 60 Zeichen“ und speichert nicht.

### Raumeinstellungen

Vier Schalter legen fest, wie sich der Raum beim Beitritt verhält. Alle sind zunächst deaktiviert und lassen sich später über **Bearbeiten** ändern.

| Schalter | Wirkung, wenn aktiviert |
|----------|-------------------------|
| **Teilnehmer beim Betreten stummschalten** | Alle betreten die Konferenz mit deaktiviertem Mikrofon und können sich selbst wieder freischalten. |
| **Freigabe durch Moderator bevor der Raum betreten werden kann** | Teilnehmer warten, bis ein Moderator sie in die Konferenz lässt. |
| **Jeder Teilnehmer kann die Konferenz starten** | Nicht nur der Ersteller, sondern alle Eingeladenen können die Konferenz starten; bei einer öffentlichen Konferenz auch externe Personen über den Zugangslink. Wer startet, tritt als Moderator bei, sodass stets ein Moderator anwesend ist. Beenden darf die Konferenz weiterhin nur der Ersteller. |
| **Alle Teilnehmer nehmen als Moderator teil** | Alle erhalten beim Beitritt Moderatorrechte. |

:::info[Sich ausschließende Einstellungen]
**Freigabe durch Moderator bevor der Raum betreten werden kann** und **Alle Teilnehmer nehmen als Moderator teil** können nicht gleichzeitig aktiv sein: Wenn alle Moderatoren sind, gibt es niemanden mehr, der freigegeben werden müsste. Aktivieren Sie den einen Schalter, deaktiviert die Plattform den anderen.
:::

:::caution[Änderungen während einer laufenden Konferenz]
Die Raumeinstellungen werden beim **Start** der Konferenz angewendet. Ändern Sie eine Einstellung, während die Konferenz läuft, greift sie erst, nachdem die Konferenz beendet und erneut gestartet wurde.
:::

## Konferenz starten und beitreten

Auf der Karte führt eine Schaltfläche in den Raum:

- **Starten** startet die Konferenz und öffnet sie zugleich für Sie.
- **Beitreten** ersetzt **Starten**, sobald die Konferenz läuft.
- Das Stopp-Symbol daneben beendet die Konferenz für alle. Es erscheint nur beim Ersteller und nur, solange die Konferenz läuft.

:::info[Wer darf eine Konferenz starten?]
Standardmäßig kann nur der Ersteller eine Konferenz starten; eingeladene Teilnehmer sehen **Beitreten** erst, sobald sie läuft. Ist **Jeder Teilnehmer kann die Konferenz starten** aktiviert, erscheint **Starten** auch bei den Eingeladenen, und externe Personen können eine öffentliche Konferenz über den Zugangslink selbst starten.
:::

Sie können jeweils nur an einer Konferenz teilnehmen. Ist noch ein Konferenzfenster oder ein Konferenz-Tab offen, lehnt die Plattform den Beitritt zu einer zweiten Konferenz mit „Du befindest dich bereits in einer Konferenz. Bitte schließe die laufende Konferenz, bevor du einer neuen beitrittst.“ ab.

## Das Konferenzfenster

Die Konferenz öffnet sich in einem Fenster innerhalb der Plattform. Sein Titel nennt die Konferenz beim Namen („Konferenz: Mathe 8a“), sodass bei mehreren offenen Fenstern erkennbar bleibt, welches welche Konferenz zeigt.

Das Fenster lässt sich verschieben, in der Größe ändern, über **Maximieren** bildschirmfüllend aufziehen und über **Minimieren** zu einer schmalen Leiste am unteren Rand zusammenlegen. Die Konferenz läuft dabei weiter; über **Maximieren** in dieser Leiste holen Sie das Fenster in seiner vorherigen Größe und Position zurück.

### Wechsel in andere Apps

Wechseln Sie über die Seitenleiste in eine andere App, während eine Konferenz läuft, hängt das weitere Verhalten von der Größe des Fensters ab:

- Ein **bildschirmfüllendes** Fenster würde die andere App vollständig verdecken. Die Plattform legt es deshalb selbsttätig als Leiste ab und holt es zurück – wieder bildschirmfüllend –, sobald Sie zu **Konferenzen** zurückkehren.
- Ein **verkleinertes** Fenster bleibt geöffnet und schwebt über der anderen App. So verfolgen Sie die Konferenz weiter, während Sie nebenbei arbeiten.

:::note[Ein selbst minimiertes Fenster bleibt liegen]
Haben Sie das Fenster von Hand über **Minimieren** abgelegt, bleibt es auch beim Zurückwechseln zu **Konferenzen** dort – die Plattform holt nur die Fenster zurück, die sie beim Verlassen der Seite selbst abgelegt hat.
:::

Schließen Sie das Konferenzfenster, verwirft die Plattform die gemerkte Größe und Position: Die nächste Konferenz öffnet sich wieder in der Standardgröße.

### Konferenz in einem eigenen Tab

Über **In neuem Tab öffnen** verschieben Sie die laufende Konferenz in einen Browser-Tab; das Fenster in der Plattform schließt sich dabei. Im Tab entfallen Minimieren, Maximieren und der beschriebene Wechsel zwischen den Apps.

Diesen Weg schlägt die Plattform von sich aus vor, wenn sie die Konferenz nicht einbetten kann – etwa weil der Browser Cookies von Drittanbietern blockiert oder weil Sie die edulution-App verwenden. Es erscheint dann der Dialog **An dieser Konferenz teilnehmen** mit der Schaltfläche **In neuem Tab öffnen**.

:::note[Blockierte Pop-ups]
Verhindert der Browser das Öffnen des Tabs, bleibt der Dialog **An dieser Konferenz teilnehmen** stehen. Erlauben Sie Pop-ups für die Plattform und wählen Sie **In neuem Tab öffnen** erneut. Ist die Konferenz bereits in einem Tab offen, meldet die Plattform „Diese Konferenz ist bereits in einem anderen Tab geöffnet.“
:::

## Öffentliche Konferenzen teilen

Eine öffentliche Konferenz erreicht jeder über ihren Zugangslink, auch ohne Konto auf der Plattform. Den Link erhalten Sie über das Weltkugelsymbol auf der Karte oder im Bearbeiten-Dialog unter **Zugangslink** – dort jeweils zum Kopieren und als QR-Code.

Wer dem Link folgt, gibt seinen vollständigen Namen ein, bei geschützten Konferenzen zusätzlich das Passwort. Läuft die Konferenz noch nicht, landet er im Warteraum: „Die Konferenz wurde noch nicht gestartet. Du befindest dich derzeit im Warteraum und wirst automatisch weitergeleitet, sobald die Konferenz beginnt.“

:::caution[Der Link gilt weiter]
Der Zugangslink bleibt gültig, solange die Konferenz öffentlich ist – unabhängig davon, ob sie gerade läuft. Um den Zutritt zu beenden, stellen Sie die Zutrittsbeschränkung auf **Privat** um oder vergeben ein Passwort. Über den Link erscheint dann „Die Konferenz konnte nicht gefunden werden.“ beziehungsweise die Abfrage des neuen Passworts.
:::

## Konferenz bearbeiten

Wählen Sie auf der Karte **Bearbeiten**. Der Dialog entspricht dem beim Anlegen; Name, Icon, Teilnehmer, Gruppen, Passwort, Zutrittsbeschränkung und Raumeinstellungen lassen sich ändern. Bearbeiten können Sie nur eigene Konferenzen und immer nur eine: Sobald mehrere Karten ausgewählt sind, entfällt **Bearbeiten**.

## Konferenz löschen

Löschen können Sie eigene Konferenzen – einzeln über **Löschen** auf der Karte oder mehrere zugleich, indem Sie die Karten auswählen und **Löschen** in der Werkzeugleiste wählen. Die Konferenz verschwindet damit auch bei allen Eingeladenen; wer gerade über den Zugangslink wartet, sieht „Die Konferenz wurde abgesagt.“

## Meldungen

| Meldung | Ursache | Abhilfe |
|---------|---------|---------|
| „Du befindest dich bereits in einer Konferenz. Bitte schließe die laufende Konferenz, bevor du einer neuen beitrittst.“ | Ein anderes Konferenzfenster oder ein Konferenz-Tab ist noch offen. | Die laufende Konferenz verlassen und das Fenster beziehungsweise den Tab schließen, dann erneut beitreten. |
| „Diese Konferenz ist bereits in einem anderen Tab geöffnet.“ | Sie sind derselben Konferenz bereits in einem Browser-Tab beigetreten. | Zu diesem Tab wechseln. |
| „Die Konferenz wurde nicht gestartet“ | Beitritt zu einer Konferenz, die noch nicht läuft. | Warten, bis der Ersteller startet. Über den Zugangslink werden Sie aus dem Warteraum automatisch weitergeleitet. |
| „Das eingegebene Passwort ist falsch“ | Das Passwort der Konferenz wurde geändert oder falsch eingegeben. | Passwort beim Ersteller erfragen und erneut eingeben. |
| „Du bist nicht der Ersteller der Konferenz“ | Starten, Beenden oder Ändern einer fremden Konferenz. | Den Ersteller bitten – er steht auf der Karte. |
| „Ein Meeting mit dieser ID wurde nicht gefunden“ | Die Konferenz wurde zwischenzeitlich gelöscht. | Übersicht neu laden. |
| „Die Konferenz-App ist nicht richtig konfiguriert, wende dich an den Systemadministrator“ | Der BigBlueButton-Server ist in der Plattform nicht oder unvollständig hinterlegt. | An die Administration wenden. |
| „Der externe BBB-Server ist nicht erreichbar“ | Der BigBlueButton-Server antwortet nicht. | Später erneut versuchen; hält es an, an die Administration wenden. |
| „Du bist nicht autorisiert auf den externen BBB-Server zuzugreifen“ | Die hinterlegten Zugangsdaten des BigBlueButton-Servers werden abgelehnt. | An die Administration wenden. |

<Audience roles="admin">

## BigBlueButton konfigurieren

:::caution[Konfiguration erforderlich]
Die App setzt einen konfigurierten BigBlueButton-Server voraus. Die ausführliche Anleitung zur Einrichtung folgt in einem eigenen Administrations-Dokument.
:::

</Audience>

## Siehe auch

- [Whiteboard](./whiteboard.md) – Integriertes Whiteboard in Konferenzen
- [Klassenraum](./klassenzimmer.md) – Konferenzen im Unterricht nutzen
- [Dashboard](../../uebersicht/dashboard.md) – Laufende Konferenzen anzeigen
