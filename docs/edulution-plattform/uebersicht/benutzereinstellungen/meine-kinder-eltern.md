---
sidebar_custom_props:
  audienceOrg: school
---

# Meine Kinder/Eltern

Hier verknüpfen Sie ein Elternkonto mit dem Konto eines Kindes. Nach der Freigabe durch die
Schuladministration ist das Elternteil auf dem Schulserver als Elternteil des Kindes eingetragen –
Lehrkräfte finden es dann zum Beispiel in [edulution Mail](../../../edulution-mail/index.md) auch
über den Namen des Kindes.

Die Verknüpfung stoßen Eltern und Kind selbst an: Eine Person zeigt einen kurzlebigen
**Zuweisungs-Code**, die andere gibt ihn ein. Wirksam wird sie erst, wenn die Schuladministration
zustimmt.

Die Seite heißt je nach Rolle unterschiedlich:

| Rolle | Seite |
| --- | --- |
| Schüler | **Meine Eltern** |
| Eltern, Lehrer und Mitarbeiter | **Meine Kinder** |

Lehrer und Mitarbeiter zählen dabei als Elternteil, damit Beschäftigte der Schule ihre eigenen
Kinder verknüpfen können. Die Funktion gibt es nur in Schulumgebungen.

![Die Seite „Meine Kinder“ mit den Bereichen Mein Zuweisungs-Code, Code eingeben und Zuweisungen](/img/eltern-schueler-zuordnung/meine-kinder-uebersicht.png)

## Kind und Elternteil verknüpfen

Wer anfängt, spielt keine Rolle – das Kind kann den Code des Elternteils eingeben oder umgekehrt.
Weil der Code nur 5 Minuten gilt, erledigen Sie die Schritte am besten zusammen.

1. Person A öffnet in den Benutzereinstellungen **Meine Kinder** bzw. **Meine Eltern**. Unter
   **Mein Zuweisungs-Code** steht ihr Code.
2. Person A gibt den Code an Person B weiter – vorlesen, abtippen lassen oder über das Kopiersymbol
   in eine Nachricht übernehmen.
3. Person B öffnet ihre eigene Seite **Meine Kinder** bzw. **Meine Eltern**, gibt den Code unter
   **Code eingeben** ein und wählt **Zuweisen**. Es erscheint *„Zuweisungsanfrage erfolgreich
   gesendet!“*.
4. Die Anfrage steht nun bei beiden unter **Zuweisungen** mit dem Status **Ausstehend**. Eltern und
   Kind müssen nichts weiter tun.
5. Die Schuladministration gibt die Anfrage frei. Danach steht die Zuweisung auf **Akzeptiert**.

Den aktuellen Stand zeigt die Seite beim Öffnen oder nach **Neu laden** – sie aktualisiert sich nicht
von selbst.

:::info[Mehrere Kinder oder ein zweites Elternteil]
Jede Verknüpfung braucht einen eigenen Code, denn ein Code lässt sich nur einmal einlösen. Für das
nächste Kind oder das zweite Elternteil erzeugen Sie mit **Neu generieren** einen neuen Code.
:::

Freigegeben wird die Anfrage von der Administration der **Schule des Kindes** – auch dann, wenn das
Elternteil an einer anderen Schule der Instanz geführt wird. Bleibt eine Anfrage längere Zeit
**Ausstehend**, wenden Sie sich dorthin.

## Der Zuweisungs-Code

| Eigenschaft | Verhalten |
| --- | --- |
| Aufbau | 8 Zeichen aus Ziffern und den Buchstaben A–F |
| Gültigkeit | 5 Minuten ab Erzeugung |
| Einlösen | nur einmal; danach ist der Code verbraucht |
| Schreibweise | Groß- und Kleinschreibung sowie Leerzeichen am Anfang und Ende spielen keine Rolle |
| **Neu generieren** | erzeugt sofort einen neuen Code; der bisherige wird ungültig (*„Neuer Zuweisungs-Code generiert.“*) |

Ein abgelaufener oder eingelöster Code bleibt auf der Seite stehen, bis Sie sie neu öffnen oder
**Neu laden** wählen – erst dann erscheint automatisch ein neuer Code. Wird eine Eingabe
abgewiesen, etwa weil zwei Elternteile ihre Codes getauscht haben, bleibt der Code dagegen gültig.

Der QR-Code enthält denselben Code und ist zum Scannen mit der
[edulution.io App](../../../edulution-app/index.md) gedacht. In der Weboberfläche geben Sie den Code
von Hand ein.

## Status einer Zuweisung

| Status | Bedeutung |
| --- | --- |
| **Ausstehend** | Die Anfrage wartet auf die Freigabe durch die Schuladministration. |
| **Akzeptiert** | Das Elternteil ist auf dem Schulserver als Elternteil des Kindes eingetragen. |
| **Abgelehnt** | Die Schuladministration hat die Anfrage abgelehnt oder eine bestehende Verknüpfung wieder aufgehoben. |

Unter **Akzeptiert** erscheinen auch Verknüpfungen, die die Administration direkt auf dem
Schulserver eingetragen hat, ohne dass je ein Code im Spiel war. Entfernt sie eine Verknüpfung dort
wieder, verschwindet der Eintrag aus der Liste.

:::caution[Abgelehnt ist endgültig]
Eine abgelehnte Verknüpfung lässt sich nicht erneut anfragen – ein neuer Code führt zu *„Diese
Zuweisung existiert bereits.“*. Handelt es sich um einen Irrtum, wenden Sie sich an die
Schuladministration. Sie kann die abgelehnte Anfrage nachträglich freigeben.
:::

## Meldungen

| Meldung | Ursache | Abhilfe |
| --- | --- | --- |
| *„Der Zuweisungs-Code ist unbekannt oder abgelaufen. Bitte einen neuen Code anfordern.“* | Tippfehler, der Code ist älter als 5 Minuten, wurde schon eingelöst oder durch **Neu generieren** ersetzt. Die Meldung unterscheidet diese Fälle nicht. | Eingabe prüfen. Stimmt sie, einen neuen Code geben lassen. |
| *„Du kannst dich nicht dir selbst zuweisen.“* | Sie haben Ihren eigenen Code eingegeben. | Den Code der anderen Person eingeben. |
| *„Du kannst keinem anderen Schüler zugewiesen werden.“* | Beide Konten stehen auf derselben Seite: zwei Schüler – oder zwei Eltern, auch wenn die Meldung nur Schüler nennt. Lehrer und Mitarbeiter zählen hier als Eltern. | Kind und Elternteil tauschen die Codes. |
| *„Deine Rolle erlaubt keine Zuweisung.“* | Eines der beiden Konten ist weder Schüler noch Elternteil, Lehrer oder Mitarbeiter. | Schuladministration fragen, ob das richtige Konto verwendet wird. |
| *„Diese Zuweisung existiert bereits.“* | Für dieses Kind und dieses Elternteil gibt es schon eine Anfrage – ausstehend, akzeptiert oder abgelehnt. | Status unter **Zuweisungen** prüfen; bei **Abgelehnt** an die Schuladministration wenden. |

## Siehe auch

- [Schulserver → Elternzuweisung](../../../edulution-server/linuxmuster.md#elternzuweisung) – die Freigabe durch die Schuladministration
- [Klassenzimmer](../../apps/native-apps/klassenzimmer.md) – Gruppen betreuen und Bildschirme beaufsichtigen
