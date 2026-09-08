# E-Mail


![E-Mail](/img/benutzer/profil-email.png)

Konfiguration der E-Mail-Synchronisation für mobile Geräte.

## E-Mail-Sync

Einrichtung der E-Mail-Synchronisation:
- **Dropdown-Menü**: "Laden..." zeigt verfügbare Sync-Optionen
- **E-Mail-Adresse**: Tragen Sie Ihre E-Mail-Adresse ein
- **Passwort**: Ihr E-Mail-Passwort für die Synchronisation

## Sync-Jobs

Übersicht über aktive E-Mail-Synchronisationen:

**Tabellenspalten:**
- **Hostname**: Mail-Server Adresse
- **Port**: Verwendeter Port
- **Verschlüsselung**: SSL/TLS Einstellungen
- **Benutzername**: Login-Name
- **Sync-Intervall**: Häufigkeit der Synchronisation
- **Aktiv**: Status der Synchronisation

**Status:** "Keine Daten verfügbar", wenn keine Sync-Jobs konfiguriert sind

**Aktionen:**
- **Neu laden**: Button zum Aktualisieren der Sync-Job Liste

:::tip[Hinweis]
Weitere Informationen zur E-Mail-Migration finden Sie unter [E-Mail Migration](../../../edulution-mail/migration.md).
:::

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

## Automatische Antwort

Mit der automatischen Antwort (Abwesenheitsnotiz) beantworten Sie eingehende Nachrichten automatisch, z. B. während einer Abwesenheit. Sie können mehrere **Vorlagen** anlegen, aber es ist immer nur eine gleichzeitig aktiv.

### Vorlagen verwalten

- Über die Auswahl **Vorlage auswählen** wechseln Sie zwischen vorhandenen Vorlagen; **Neue Vorlage** legt eine weitere an.
- Oberhalb des Formulars sehen Sie, ob aktuell eine Vorlage aktiv ist oder keine automatische Antwort läuft.

### Vorlage bearbeiten

| Feld | Beschreibung |
|------|--------------|
| **Name der Vorlage** | Interne Bezeichnung der Vorlage |
| **Betreff** | Betreff der automatischen Antwort. Mit `${subject}` fügen Sie den ursprünglichen Betreff der eingehenden Nachricht ein |
| **Nachricht** | Text der automatischen Antwort |
| **E-Mail-Adressen** | Antworten werden nur für Nachrichten an diese Adressen gesendet (Hauptadresse und Aliase). Über **Standardadressen hinzufügen** ergänzen Sie Ihre eigenen Adressen |
| **Mindestabstand zwischen Antworten (Tage)** | Verhindert, dass derselbe Absender innerhalb dieses Zeitraums mehrfach automatisch beantwortet wird |
| **Eingehende Nachrichten während der Abwesenheit verwerfen** | Verwirft eingehende Nachrichten im Aktivierungszeitraum |

Zusätzlich können Sie unter **Aktivierungsbedingungen** den Geltungsbereich optional einschränken (siehe [Aktivierungsbedingungen](#aktivierungsbedingungen)).

### Absender einschränken (intern / extern)

Über die Option **Antworten an Absender außerhalb der Organisation senden** legen Sie fest, ob auch externe Absender eine automatische Antwort erhalten:

- **Deaktiviert**: Die automatische Antwort geht ausschließlich an Absender innerhalb der Domänen Ihrer Organisation (interne Absender).
- **Aktiviert**: Auch externe Absender werden berücksichtigt. Zusätzlich wählen Sie aus, welche Absender genau beantwortet werden:
  - **Interne und alle externen Absender** – alle Absender erhalten eine Antwort.
  - **Nur externe Absender (nicht intern)** – ausschließlich Absender außerhalb der Organisation erhalten eine Antwort; interne Absender werden nicht automatisch beantwortet.
  - **Nur meine Kontakte** – reserviert für eine künftige Kontakte-App und derzeit nicht auswählbar.

Die zur Unterscheidung herangezogenen **internen Domänen** Ihrer Organisation werden unterhalb der Option angezeigt.

### Aktivieren und Löschen

- **Speichern** sichert die Vorlage. Änderungen müssen gespeichert sein, bevor eine Vorlage aktiviert werden kann.
- **Aktivieren** schaltet die Vorlage scharf; eine zuvor aktive Vorlage wird dabei automatisch deaktiviert.
- **Deaktivieren** schaltet die automatische Antwort wieder ab.
- **Löschen** entfernt die ausgewählte Vorlage nach einer Sicherheitsabfrage.

### Automatische Antwort für freigegebene Postfächer

Sind Sie als Berechtigter für ein oder mehrere **freigegebene Postfächer** (z. B. `verwaltung@…`) eingetragen, können Sie auch deren automatische Antwort verwalten. Der Abschnitt **Automatische Antwort für freigegebene Postfächer** erscheint nur dann, wenn Ihnen mindestens ein freigegebenes Postfach zugewiesen ist – andernfalls bleibt er ausgeblendet.

- Über die Auswahl **Freigegebenes Postfach auswählen** wählen Sie das Postfach, dessen automatische Antwort Sie bearbeiten möchten.
- Darunter erscheint dasselbe Formular wie für Ihr eigenes Postfach: Sie legen **Vorlagen** an, bearbeiten Betreff, Nachricht und Adressen, schränken den Geltungsbereich ein und **aktivieren** bzw. **deaktivieren** die automatische Antwort.
- Jedes freigegebene Postfach besitzt eigene Vorlagen und eine eigene aktive Antwort, unabhängig von Ihrem persönlichen Postfach. Beim Wechsel des Postfachs werden dessen Vorlagen geladen.

## Weiterleitung

Leiten Sie eingehende E-Mails automatisch an andere Adressen weiter.

- **Weiterleitung aktivieren**: Schaltet die Weiterleitung ein. Erst danach werden die weiteren Optionen angezeigt.
- **Weiterleiten an**: Die Zieladressen, an die eingehende E-Mails weitergeleitet werden (maximal vier). Eine Weiterleitung an Ihre eigenen Adressen ist nicht möglich.
- **Kopie in diesem Postfach behalten**: Ist diese Option aktiv, verbleibt zusätzlich eine Kopie jeder Nachricht in Ihrem Postfach.
- Unter **Aktivierungsbedingungen** lässt sich die Weiterleitung optional zeitlich einschränken (siehe [Aktivierungsbedingungen](#aktivierungsbedingungen)).
- **Speichern** übernimmt die Konfiguration, **Löschen** entfernt sie nach einer Sicherheitsabfrage.

### Aktivierungsbedingungen

Automatische Antwort und Weiterleitung lassen sich optional nach Zeitraum, Tageszeit und Wochentagen einschränken. Ohne Angabe gelten sie durchgehend.

| Feld | Beschreibung |
|------|--------------|
| **Startdatum** / **Enddatum** | Zeitraum, in dem die Funktion aktiv ist |
| **Täglich ab** / **Täglich bis** | Tägliche Uhrzeitspanne, in der die Funktion greift |
| **Aktive Wochentage** | Wochentage (Mo–So), an denen die Funktion angewendet wird |

## Filter

Mit Filtern legen Sie Regeln fest, die automatisch auf eingehende E-Mails angewendet werden. So können Sie Nachrichten beispielsweise in einen bestimmten Ordner einsortieren, weiterleiten, markieren oder verwerfen lassen.

:::info[Auswertungsreihenfolge]
Die Regeln werden von oben nach unten ausgewertet. Über **Nach oben** und **Nach unten** können Sie die Reihenfolge einer Regel anpassen.
:::

### Filterregel erstellen

1. Klicken Sie auf **Filter erstellen**, um eine neue Regel anzulegen
2. Vergeben Sie einen **Filternamen**
3. Über den Schalter neben der Regel können Sie diese aktivieren oder deaktivieren – deaktivierte Regeln bleiben erhalten, werden aber nicht angewendet
4. Klicken Sie auf **Fertig**, um die Bearbeitung der Regel abzuschließen
5. Klicken Sie abschließend auf **Speichern**, damit die Filter wirksam werden

### Bedingungen

Legen Sie unter **Für eingehende Nachrichten, die** fest, wann eine Regel greift:

- **allen folgenden Regeln entsprechen** – die Regel greift nur, wenn *alle* Bedingungen zutreffen
- **einer der folgenden Regeln entsprechen** – die Regel greift, sobald *eine* der Bedingungen zutrifft

Über **Bedingung hinzufügen** fügen Sie weitere Bedingungen hinzu. Jede Bedingung besteht aus einem Feld, einem Vergleich und einem Wert.

| Feld | Beschreibung |
|------|--------------|
| **Von** | Absender der Nachricht |
| **An** | Empfänger der Nachricht |
| **Cc** | Kopieempfänger der Nachricht |
| **Betreff** | Betreffzeile der Nachricht |
| **Größe** | Größe der Nachricht (z. B. `1M`) |

| Vergleich | Beschreibung |
|-----------|--------------|
| **enthält** | Der Wert kommt im Feld vor |
| **ist** | Das Feld stimmt exakt mit dem Wert überein |
| **entspricht** | Das Feld passt auf ein Muster (mit Platzhaltern) |
| **ist größer als** | Nur bei **Größe**: Nachricht ist größer als der Wert |
| **ist kleiner als** | Nur bei **Größe**: Nachricht ist kleiner als der Wert |

### Aktionen

Bestimmen Sie unter **Diese Aktionen ausführen**, was mit zutreffenden Nachrichten geschehen soll. Über **Aktion hinzufügen** können Sie mehrere Aktionen kombinieren.

| Aktion | Beschreibung |
|--------|--------------|
| **Nachricht ablegen in** | Verschiebt die Nachricht in den ausgewählten Ordner |
| **Umleiten an** | Leitet die Nachricht an eine andere E-Mail-Adresse weiter |
| **Kopie senden an** | Sendet eine Kopie an eine andere E-Mail-Adresse, behält das Original |
| **Nachricht verwerfen** | Löscht die Nachricht ohne Zustellung |
| **Markierung hinzufügen** | Versieht die Nachricht zusätzlich mit einer Markierung |
| **Markierung setzen** | Setzt die Markierung der Nachricht (ersetzt vorhandene) |

Als Markierungen stehen **Gelesen**, **Beantwortet**, **Markiert**, **Gelöscht** und **Entwurf** zur Verfügung.

### Weitere Regeln stoppen

Mit der Option **Weitere Regeln nicht mehr verarbeiten** beenden Sie die Auswertung, sobald diese Regel zutrifft.

:::warning[Hinweis]
Wenn diese Regel zutrifft, werden keine darunterliegenden Regeln mehr ausgewertet – auch nicht Weiterleitung und automatische Antwort.
:::

### Filter löschen

Über **Alle löschen** entfernen Sie sämtliche Filterregeln dauerhaft. Sie werden vor dem endgültigen Löschen um Bestätigung gebeten.

---
