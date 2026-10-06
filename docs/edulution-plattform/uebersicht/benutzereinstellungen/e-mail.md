# E-Mail


![E-Mail](/img/benutzer/profil-email.png)

## E-Mail-Sync

Mit **E-Mail-Sync** holen Sie E-Mails aus einem Postfach bei einem anderen Anbieter in Ihr edulution-Postfach. Sie wählen den Anbieter und geben E-Mail-Adresse und Passwort des Postfachs ein; edulution legt dafür einen Sync-Job an, der in der Tabelle **Sync-Jobs** erscheint. Mehr dazu unter [E-Mail Migration](../../../edulution-mail/migration.md).

## Signatur

Hier legen Sie die Signatur fest, die beim Verfassen neuer E-Mails verwendet wird.

- **Eigene Signatur verwenden**: Ist diese Option aktiv, wird beim Verfassen neuer E-Mails Ihre individuelle Signatur anstelle der global vorgegebenen verwendet. Ist sie deaktiviert, gilt weiterhin die globale Signatur.
- Bei aktivierter Option bearbeiten Sie die Signatur im Editor:
  - **Globale Signatur importieren**: Übernimmt die global vorgegebene Signatur als Ausgangspunkt
  - Über die Editor-/Quelltext-Umschaltung oben rechts im Editor wechseln Sie zwischen der formatierten Ansicht und der direkten HTML-Bearbeitung
  - Bilder können direkt in die Signatur eingefügt werden; sehr große Bilder werden mit einem Hinweis quittiert
- **Speichern** übernimmt die Änderungen, **Zurücksetzen** verwirft noch nicht gespeicherte Anpassungen.

:::warning[Wechsel zurück in die formatierte Ansicht]
Der formatierte Editor unterstützt nicht alle HTML-Formatierungen. Enthält Ihr Quelltext Bestandteile, die er nicht darstellen kann – ganze Elemente wie Tabellen oder eigene Formatvorlagen, aber auch einzelne Formatierungen wie Textausrichtung oder Schriftgröße –, gehen diese beim Zurückschalten in die **Editor**-Ansicht verloren. Vor dem Wechsel erscheint ein Bestätigungsdialog, der die betroffenen Elemente und Formatierungen auflistet: Mit **Abbrechen** bleibt Ihr Quelltext unverändert erhalten, mit **Trotzdem wechseln** übernehmen Sie den Verlust.
:::

Dieselbe Umschaltung steht Ihnen auch beim [Verfassen einer E-Mail](../../../edulution-mail/index.md#html-quelltext-bearbeiten) zur Verfügung.

## Senden rückgängig machen

Mit dieser Option verzögern Sie den Versand Ihrer E-Mails um ein kurzes Zeitfenster, in dem Sie das Senden noch abbrechen können. Das **Zeitfenster** gilt auch bei ausgeschaltetem verzögertem Senden für das [endgültige Löschen](../../../edulution-mail/index.md#endgültiges-löschen-rückgängig-machen).

- **Senden verzögern**: Standardmäßig ausgeschaltet.
- **Zeitfenster**: Wie lange der Versand zurückgehalten wird – 5, 10, 20 oder 30 Sekunden (Standard: 10 Sekunden).

Ablauf und Fehlerfälle beschreibt [E-Mail → Verzögertes Senden](../../../edulution-mail/index.md#verzögertes-senden).

## Automatische Antwort

Mit der automatischen Antwort (Abwesenheitsnotiz) beantworten Sie eingehende Nachrichten automatisch, z. B. während einer Abwesenheit. Sie können bis zu 20 **Vorlagen** anlegen, aber es ist immer nur eine gleichzeitig aktiv.

Die automatische Antwort gilt für Nachrichten an Ihre eigenen Adressen. Nachrichten, die Sie nur über einen in edulution angelegten Verteiler erreichen, beantwortet sie nicht.

### Vorlage bearbeiten

| Feld | Beschreibung |
|------|--------------|
| **Betreff** | Mit `${subject}` fügen Sie den ursprünglichen Betreff der eingehenden Nachricht ein |
| **Nachricht** | höchstens 4000 Zeichen |
| **E-Mail-Adressen** | Antworten werden nur für Nachrichten an diese Adressen gesendet (Hauptadresse und Aliase). Über **Standardadressen hinzufügen** ergänzen Sie Ihre eigenen Adressen |
| **Mindestabstand zwischen Antworten (Tage)** | Derselbe Absender wird innerhalb dieses Zeitraums nur einmal automatisch beantwortet; 1 bis 365 Tage, Standard 1 |
| **Eingehende Nachrichten während der Abwesenheit verwerfen** | Verwirft eingehende Nachrichten im Aktivierungszeitraum, aber nur von Absendern, die auch eine Antwort erhalten (siehe [Absender einschränken](#absender-einschränken-intern--extern)) |

Aktivieren lässt sich eine Vorlage erst, wenn ihre Änderungen gespeichert sind. **Aktivieren** schaltet eine zuvor aktive Vorlage automatisch ab.

Unter **Aktivierungsbedingungen** schränken Sie die Antwort optional nach Zeitraum, Tageszeit und Wochentagen ein; ohne Angabe gilt sie durchgehend.

### Absender einschränken (intern / extern)

Ist **Antworten an Absender außerhalb der Organisation senden** deaktiviert, geht die automatische Antwort nur an Absender innerhalb der Domänen Ihrer Organisation. Aktiviert wählen Sie, ob **Interne und alle externen Absender** oder **Nur externe Absender (nicht intern)** eine Antwort erhalten.

### Automatische Antwort für freigegebene Postfächer

Sind Sie als Berechtigter für ein oder mehrere **freigegebene Postfächer** (z. B. `verwaltung@…`) eingetragen, verwalten Sie auch deren automatische Antwort. Der Abschnitt **Automatische Antwort für freigegebene Postfächer** erscheint nur, wenn Ihnen mindestens ein freigegebenes Postfach zugewiesen ist. Jedes freigegebene Postfach hat eigene Vorlagen und eine eigene aktive Antwort, unabhängig von Ihrem persönlichen Postfach.

## Weiterleitung

Leiten Sie eingehende E-Mails automatisch an bis zu vier andere Adressen weiter. Eine Weiterleitung an Ihre eigenen Adressen ist nicht möglich. Standardmäßig bleibt keine Kopie in Ihrem Postfach; dafür aktivieren Sie **Kopie in diesem Postfach behalten**. Unter **Aktivierungsbedingungen** schränken Sie die Weiterleitung optional nach Zeitraum, Tageszeit und Wochentagen ein.

Die Vorschläge im Feld **Weiterleiten an** entsprechen den [Empfängervorschlägen beim Verfassen einer E-Mail](../../../edulution-mail/index.md#empfängervorschläge-im-adressfeld).

## Filter

Mit Filtern legen Sie Regeln fest, die automatisch auf eingehende E-Mails angewendet werden. So können Sie Nachrichten beispielsweise in einen bestimmten Ordner einsortieren, weiterleiten, markieren oder verwerfen lassen.

Sie können bis zu 50 Regeln anlegen, jede mit bis zu zehn Bedingungen und zehn Aktionen. Die Regeln werden von oben nach unten ausgewertet; die Reihenfolge ändern Sie mit **Nach oben** und **Nach unten**.

**Fertig** schließt nur die Bearbeitung einer Regel ab. Wirksam werden die Filter erst mit **Speichern**. Eine deaktivierte Regel bleibt erhalten, wird aber nicht angewendet. **Alle löschen** wirkt dagegen sofort, ohne **Speichern**.

Bei der Bedingung **Größe** geben Sie den Wert als ganze Zahl mit optionaler Einheit `K`, `M` oder `G` an, etwa `1M`. Andere Schreibweisen wie `1,5M` oder `1 MB` wertet der Filter als 0; **ist größer als** trifft dann auf jede Nachricht zu. Bei **entspricht** steht `*` für beliebig viele Zeichen und `?` für genau eines.

Wird der Zielordner einer Regel gelöscht, kennzeichnet edulution die Regel mit **Aktion erforderlich** und wendet sie nicht mehr an. Benennen Sie den Ordner nur um, zieht edulution die Regel selbst nach.

| Aktion | Beschreibung |
|--------|--------------|
| **Umleiten an** | Leitet die Nachricht an eine andere Adresse weiter, ohne sie zu behalten |
| **Kopie senden an** | Sendet eine Kopie an eine andere Adresse und behält das Original |
| **Markierung hinzufügen** | Ergänzt eine Markierung, vorhandene bleiben erhalten |
| **Markierung setzen** | Ersetzt die vorhandenen Markierungen |

:::warning[Weitere Regeln nicht mehr verarbeiten]
Trifft eine Regel mit dieser Option zu, werden keine darunterliegenden Regeln mehr ausgewertet, auch nicht Weiterleitung und automatische Antwort.
:::

---
