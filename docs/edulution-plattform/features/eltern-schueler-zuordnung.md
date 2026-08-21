# Eltern-Schüler-Zuordnung

Die **Eltern-Schüler-Zuordnung** verknüpft Eltern- und Schülerkonten miteinander. Eltern und Schüler stellen die Verknüpfung selbst über einen kurzlebigen **Zuweisungs-Code** her; anschließend prüft und bestätigt eine Lehrkraft oder Administration die Anfrage, bevor die Verknüpfung wirksam wird.

Die Funktion besteht aus zwei Teilen:

- einer **Selbstbedienungsseite** für Eltern und Schüler – *Meine Eltern* bzw. *Meine Kinder* in den Benutzereinstellungen,
- einer **Freigabeseite** für Administratoren – *Elternzuweisung* in der Linuxmuster-App.

:::info[Nur in Schulumgebungen]
Die Eltern-Schüler-Zuordnung steht ausschließlich in Schulumgebungen zur Verfügung. In reinen Business-Umgebungen wird die Funktion weder in den Benutzereinstellungen noch in der Linuxmuster-App angezeigt.
:::

## Meine Eltern / Meine Kinder (für Eltern und Schüler)

Die Selbstbedienungsseite finden Sie in den **Benutzereinstellungen**. Sie heißt je nach Rolle unterschiedlich:

- Schüler sehen **Meine Eltern** mit dem Hinweis *„Hier kannst du eine Verknüpfung mit deinen Eltern herstellen."*
- Eltern sehen **Meine Kinder** mit dem Hinweis *„Hier kannst du eine Verknüpfung mit deinen Kindern herstellen."*

Die Seite gliedert sich in drei aufklappbare Bereiche.

![Die Seite „Meine Kinder" mit den Bereichen Zuweisungs-Code, Code eingeben und Zuweisungen (Beispiel aus der Elternansicht)](/img/eltern-schueler-zuordnung/meine-kinder-uebersicht.png)

### Mein Zuweisungs-Code

Hier finden Sie Ihren persönlichen **Zuweisungs-Code** als Text sowie als **QR-Code**. Über das Kopiersymbol übernehmen Sie den Code in die Zwischenablage.

- Schüler teilen den Code mit ihrem Elternteil, Eltern teilen ihn mit ihrem Kind.
- Der Code ist **5 Minuten** gültig. Nach Ablauf muss ein neuer Code erzeugt werden.

Über die Schaltfläche **Neu generieren** (oben rechts) erzeugen Sie jederzeit einen neuen Code; der vorherige verliert damit seine Gültigkeit. Eine Rückmeldung bestätigt: *„Neuer Zuweisungs-Code generiert."*

:::info[Verknüpfung auch von beiden Seiten möglich]
Es ist unerheblich, wer beginnt: Entweder gibt das Elternteil den Code des Kindes ein – oder das Kind den Code des Elternteils. Das Ergebnis ist dieselbe Zuordnung.
:::

### Code eingeben

Im Bereich **Code eingeben** tragen Sie den Code ein, den Sie von der anderen Person erhalten haben, und bestätigen mit **Zuweisen**. Bei Erfolg erscheint der Hinweis *„Zuweisungsanfrage erfolgreich gesendet!"*, und die Anfrage wird zur Freigabe an die Administration übergeben.

Ist der eingegebene Code bereits abgelaufen, erscheint stattdessen der Hinweis *„Der Code ist abgelaufen. Bitte einen neuen Code anfordern."*. Lassen Sie sich in diesem Fall von der anderen Person einen neuen Code geben.

### Zuweisungen

Der Bereich **Zuweisungen** listet Ihre bestehenden und angefragten Verknüpfungen auf. Zu jedem Eintrag werden die zugeordnete Person (Vor- und Nachname, ersatzweise der Benutzername) sowie der aktuelle Status angezeigt:

| Status | Bedeutung |
| --- | --- |
| **Ausstehend** | Die Anfrage wurde gesendet und wartet auf die Freigabe durch die Administration. |
| **Akzeptiert** | Die Verknüpfung wurde freigegeben und ist wirksam. |
| **Abgelehnt** | Die Anfrage wurde von der Administration abgelehnt. |

Solange keine Verknüpfung besteht, erscheint der Hinweis *„Noch keine Zuweisungen."*.

## Elternzuweisung (für Administratoren)

Die Freigabe der Anfragen erfolgt in der **Linuxmuster**-App über den Bereich **Elternzuweisung** (*„Eltern-Schüler-Zuweisungen verwalten."*). Die Seite steht Lehrkräften und Administratoren mit Zugriff auf die Linuxmuster-App zur Verfügung.

![Kachel „Elternzuweisung" auf der Übersichtsseite der Linuxmuster-App](/img/eltern-schueler-zuordnung/elternzuweisung-kachel.png)

Sie zeigt die Zuordnungen in einer Tabelle mit folgenden Spalten:

![Tabelle der Eltern-Schüler-Zuweisungen mit Spalten Elternteil, Schüler, Status und Erstellt am](/img/eltern-schueler-zuordnung/elternzuweisung-tabelle.png)

| Spalte | Inhalt |
| --- | --- |
| **Elternteil** | Das anfragende bzw. zugeordnete Elternteil |
| **Schüler** | Der zugeordnete Schüler |
| **Status** | Ausstehend, Akzeptiert oder Abgelehnt |
| **Erstellt am** | Zeitpunkt der Anfrage |

### Anfragen bearbeiten

Über die Aktionen einer Zeile geben Sie eine Anfrage frei (**Akzeptieren**) oder lehnen sie ab (**Ablehnen**). Sie können mehrere Einträge auswählen und über die Schaltflächen am unteren Rand gemeinsam bearbeiten. Nach der Bearbeitung erscheint die Rückmeldung *„Status erfolgreich aktualisiert."*.

- Mit **Akzeptieren** wird die Verknüpfung in der Linuxmuster-Umgebung eingerichtet – das Elternteil wird dem Schülerkonto zugeordnet.
- Mit **Ablehnen** einer bereits akzeptierten Zuordnung wird die Verknüpfung wieder entfernt.

### Filtern und suchen

- Über das **Suchfeld** filtern Sie die Tabelle nach Elternteil oder Schüler (*„Nach Elternteil oder Schüler suchen…"*).
- Ein **Status-Filter** blendet gezielt *Alle*, *Ausstehend*, *Akzeptiert* oder *Abgelehnt* ein. Standardmäßig sind die **ausstehenden** Anfragen vorausgewählt.
- Super-Administratoren steht zusätzlich eine **Schulauswahl** zur Verfügung, um Anfragen schulübergreifend zu bearbeiten.

![Geöffneter Status-Filter mit den Optionen Alle, Ausstehend, Akzeptiert und Abgelehnt](/img/eltern-schueler-zuordnung/elternzuweisung-filter.png)

## Ablauf im Überblick

1. Elternteil und Schüler öffnen jeweils ihre Seite *Meine Kinder* bzw. *Meine Eltern* und rufen ihren **Zuweisungs-Code** ab.
2. Eine der beiden Personen gibt den Code der anderen unter **Code eingeben** ein und bestätigt mit **Zuweisen**.
3. Die Anfrage erscheint mit dem Status **Ausstehend** und liegt der Administration zur Freigabe vor.
4. Eine Lehrkraft oder Administration öffnet **Elternzuweisung** und wählt **Akzeptieren** oder **Ablehnen**.
5. Nach dem Akzeptieren wird die Verknüpfung eingerichtet; der Status wechselt auf **Akzeptiert**.

## Wer kann die Funktion nutzen?

- Die Seite **Meine Eltern** sehen **Schüler**, die Seite **Meine Kinder** sehen **Eltern**. Als Elternteil gelten dabei auch Konten mit einer Lehrer- oder Personal-Rolle.
- Eine gültige Zuordnung besteht immer aus **genau einer Eltern-Seite und einem Schüler**. Der Versuch, zwei Schüler oder zwei Elternteile zu verknüpfen – oder sich selbst zuzuweisen –, wird abgewiesen.
- Die Freigabeseite **Elternzuweisung** ist Teil der **Linuxmuster**-App und erfordert Zugriff auf diese App.

## Hinweise und Einschränkungen

- Der Zuweisungs-Code ist **5 Minuten** gültig und wird nicht dauerhaft gespeichert. Nach Ablauf oder nach **Neu generieren** wird ein neuer Code benötigt.
- Der **QR-Code** dient dem Scannen mit der edulution-App. In der Weboberfläche wird der Code angezeigt, aber nicht gescannt – dort geben Sie den Code manuell ein.
- Eine Zuordnung wird erst nach der **Freigabe durch die Administration** wirksam. Bis dahin bleibt sie **Ausstehend**.
- Bereits bestehende Zuordnungen lassen sich nicht doppelt anlegen; eine erneute Anfrage für dieselbe Verknüpfung wird abgewiesen.

## Siehe auch

- [Mein Profil](../benutzer/mein-profil.md)
- [Klassenraum](klassenzimmer.md)
- [Administration → Linuxmuster](../administration/linuxmuster.md)
