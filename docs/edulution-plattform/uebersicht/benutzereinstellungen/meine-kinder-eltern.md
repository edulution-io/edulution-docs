---
sidebar_custom_props:
  audienceOrg: school
---

# Meine Kinder/Eltern

Hier verknüpfen Sie Eltern- und Schülerkonten miteinander. Die Verknüpfung stellen Eltern und
Schüler selbst über einen kurzlebigen **Zuweisungs-Code** her; anschließend prüft und bestätigt eine
Lehrkraft oder die Administration die Anfrage, bevor sie wirksam wird.

Die Seite heißt je nach Rolle unterschiedlich:

- Schüler sehen **Meine Eltern** mit dem Hinweis *„Hier kannst du eine Verknüpfung mit deinen Eltern herstellen."*
- Eltern sehen **Meine Kinder** mit dem Hinweis *„Hier kannst du eine Verknüpfung mit deinen Kindern herstellen."*

![Die Seite „Meine Kinder" mit den Bereichen Zuweisungs-Code, Code eingeben und Zuweisungen (Beispiel aus der Elternansicht)](/img/eltern-schueler-zuordnung/meine-kinder-uebersicht.png)

:::info[Nur in Schulumgebungen]
Die Eltern-Schüler-Zuordnung steht ausschließlich in Schulumgebungen zur Verfügung. In reinen
Business-Umgebungen wird die Funktion weder in den Benutzereinstellungen noch in der
Schulserver-App angezeigt.
:::

Die Seite gliedert sich in drei aufklappbare Bereiche.

## Mein Zuweisungs-Code

Hier finden Sie Ihren persönlichen **Zuweisungs-Code** als Text sowie als **QR-Code**. Über das Kopiersymbol übernehmen Sie den Code in die Zwischenablage.

- Schüler teilen den Code mit ihrem Elternteil, Eltern teilen ihn mit ihrem Kind.
- Der Code ist **5 Minuten** gültig. Nach Ablauf muss ein neuer Code erzeugt werden.

Über die Schaltfläche **Neu generieren** (oben rechts) erzeugen Sie jederzeit einen neuen Code; der vorherige verliert damit seine Gültigkeit. Eine Rückmeldung bestätigt: *„Neuer Zuweisungs-Code generiert."*

:::info[Verknüpfung auch von beiden Seiten möglich]
Es ist unerheblich, wer beginnt: Entweder gibt das Elternteil den Code des Kindes ein – oder das Kind den Code des Elternteils. Das Ergebnis ist dieselbe Zuordnung.
:::

## Code eingeben

Im Bereich **Code eingeben** tragen Sie den Code ein, den Sie von der anderen Person erhalten haben, und bestätigen mit **Zuweisen**. Bei Erfolg erscheint der Hinweis *„Zuweisungsanfrage erfolgreich gesendet!"*, und die Anfrage wird zur Freigabe an die Administration übergeben.

Ist der eingegebene Code bereits abgelaufen, erscheint stattdessen der Hinweis *„Der Code ist abgelaufen. Bitte einen neuen Code anfordern."*. Lassen Sie sich in diesem Fall von der anderen Person einen neuen Code geben.

:::info[QR-Code nur in der App]
Der QR-Code dient dem Scannen mit der [edulution.io App](../../../edulution-app/index.md). In der
Weboberfläche wird der Code zwar angezeigt, aber nicht gescannt – dort geben Sie ihn manuell ein.
:::

## Zuweisungen

Der Bereich **Zuweisungen** listet Ihre bestehenden und angefragten Verknüpfungen auf. Zu jedem Eintrag werden die zugeordnete Person (Vor- und Nachname, ersatzweise der Benutzername) sowie der aktuelle Status angezeigt:

| Status | Bedeutung |
| --- | --- |
| **Ausstehend** | Die Anfrage wurde gesendet und wartet auf die Freigabe durch die Administration. |
| **Akzeptiert** | Die Verknüpfung wurde freigegeben und ist wirksam. |
| **Abgelehnt** | Die Anfrage wurde von der Administration abgelehnt. |

Solange keine Verknüpfung besteht, erscheint der Hinweis *„Noch keine Zuweisungen."*.

Kind und Elternteil müssen nicht derselben Schule angehören – auch schulübergreifende Zuweisungen innerhalb einer Instanz werden auf beiden Seiten angezeigt. Freigegeben wird eine solche Anfrage immer in der **Schule des Kindes**: Nur dort erscheint sie in der [Elternzuweisung](../../../edulution-server/linuxmuster.md#elternzuweisung) der Schulserver-App.

## Ablauf im Überblick

1. Elternteil und Schüler öffnen jeweils ihre Seite *Meine Kinder* bzw. *Meine Eltern* und rufen ihren **Zuweisungs-Code** ab.
2. Eine der beiden Personen gibt den Code der anderen unter **Code eingeben** ein und bestätigt mit **Zuweisen**.
3. Die Anfrage erscheint mit dem Status **Ausstehend** und liegt der Administration zur Freigabe vor.
4. Eine Lehrkraft oder Administration öffnet **Elternzuweisung** in der Schulserver-App und wählt **Akzeptieren** oder **Ablehnen**.
5. Nach dem Akzeptieren wird die Verknüpfung eingerichtet; der Status wechselt auf **Akzeptiert**.

## Wer kann die Funktion nutzen?

- Die Seite **Meine Eltern** sehen **Schüler**, die Seite **Meine Kinder** sehen **Eltern**. Als Elternteil gelten dabei auch Konten mit einer Lehrer- oder Personal-Rolle.
- Eine gültige Zuordnung besteht immer aus **genau einer Eltern-Seite und einem Schüler**. Der Versuch, zwei Schüler oder zwei Elternteile zu verknüpfen – oder sich selbst zuzuweisen –, wird abgewiesen.
- Bereits bestehende Zuordnungen lassen sich nicht doppelt anlegen; eine erneute Anfrage für dieselbe Verknüpfung wird abgewiesen (*„Diese Zuweisung existiert bereits."*) – auch dann, wenn die Zuordnung zuvor **abgelehnt** wurde. Eine abgelehnte Zuordnung lässt sich also nicht erneut anfragen; sie kann nur von der Administration nachträglich freigegeben werden.
- Eine Zuordnung wird erst nach der **Freigabe durch die Administration** wirksam. Bis dahin bleibt sie **Ausstehend**.

## Siehe auch

- [Klassenzimmer](../../apps/native-apps/klassenzimmer.md) – Gruppen betreuen und Bildschirme beaufsichtigen
- [Schulserver → Elternzuweisung](../../../edulution-server/linuxmuster.md#elternzuweisung) – die Freigabe durch die Administration
