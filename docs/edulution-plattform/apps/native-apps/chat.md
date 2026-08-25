# Chat

Die **Chat**-App bündelt die Kommunikation innerhalb von edulution an einer Stelle: Gruppenunterhaltungen mit den eigenen Klassen, Projekten und Gruppen sowie – sofern freigeschaltet – einen **KI-Chat** als persönlichen Assistenten.

## Aufbau

Die Seitenleiste der Chat-App ist in zwei Bereiche gegliedert:

- **Konversationen** – die Gruppenunterhaltungen, die sich aus Ihren Gruppen ergeben.
- **Assistent** – der Eintrag **KI-Chat**. Dieser Bereich erscheint nur, wenn Sie Zugriff auf den KI-Chat haben (siehe [KI-Chat](#ki-chat)).

Neben einer Konversation mit ungelesenen Nachrichten wird die Anzahl der ungelesenen Nachrichten als Zähler angezeigt.

## Konversationen

Welche Kategorien unter **Konversationen** erscheinen, richtet sich nach Ihrer Installation:

- In einer Schulumgebung (linuxmuster) sind das **Schulklassen** und **Projekte**.
- In einer generischen Umgebung ist das eine gemeinsame Kategorie **Gruppen**.

Die verfügbaren Unterhaltungen leiten sich automatisch aus Ihren Gruppenmitgliedschaften ab – jede Klasse, jedes Projekt bzw. jede Gruppe, der Sie angehören, wird zu einer eigenen Gruppenunterhaltung. Wählen Sie eine Unterhaltung aus, um deren Nachrichten zu lesen und über das Eingabefeld am unteren Rand zu antworten.

### Unterhaltungsliste

Die Liste Ihrer Unterhaltungen bietet:

- **Suche** – das Feld „Unterhaltungen durchsuchen…" filtert die Liste

  ![Suchfeld über der Unterhaltungsliste](/img/chat/02-unterhaltungsliste-suche.png)

- **Filter** – die Reiter **Alle** und **Ungelesen**

  ![Filterreiter Alle und Ungelesen](/img/chat/03-unterhaltungsliste-filter.png)

- **Vorschau** – jede Zeile zeigt die letzte Nachricht (eigene Nachrichten mit dem Präfix „Du:"), den Zeitpunkt und – bei bearbeiteten Nachrichten – den Hinweis „(bearbeitet)"

Ist noch keine Unterhaltung vorhanden, erscheint „Keine Unterhaltungen". Die zuletzt geöffnete Unterhaltung wird beim nächsten Aufruf automatisch wieder geöffnet.

## Nachrichten schreiben

Wählen Sie links eine Klasse, ein Projekt oder eine Gruppe aus und schreiben Sie in das Eingabefeld „Nachricht schreiben…".

- **Enter** sendet die Nachricht, **Umschalt + Enter** fügt einen Zeilenumbruch ein
- **Emojis** fügen Sie über die Emoji-Schaltfläche ein (mit Suche)
- **Markdown** wird in gesendeten Nachrichten dargestellt
- Eine Nachricht darf bis zu **20.000 Zeichen** lang sein; ein Zeichenzähler zeigt die Länge an und sperrt das Senden bei Überschreitung
- Leere Nachrichten lassen sich nicht senden

:::note Nur Text und Emojis
Der Messenger überträgt Text und Emojis. Datei- oder Bildanhänge sind im Chat nicht vorgesehen – nutzen Sie dafür die [Dateiverwaltung](../dateien/index.md).
:::

## Nachrichten bearbeiten und löschen

Über die Nachrichtenaktionen bearbeiten oder löschen Sie **ausschließlich Ihre eigenen** Nachrichten. Die Schaltfläche für die Nachrichtenaktionen erscheint, sobald Sie eine Nachricht überfahren:

![Schaltfläche für die Nachrichtenaktionen an einer eigenen Nachricht](/img/chat/09-nachrichtenaktionen-button.png)

Sie öffnet ein Menü mit folgenden Aktionen:

- **Kopieren** – bei jeder Nachricht möglich
- **Bearbeiten** – nur bei eigenen Nachrichten; bearbeitete Nachrichten erhalten den Zusatz „(bearbeitet)"
- **Löschen** – nur bei eigenen Nachrichten; nach einer Bestätigung wird der Text durch „Diese Nachricht wurde gelöscht" ersetzt

![Menü der Nachrichtenaktionen mit Kopieren, Bearbeiten und Löschen](/img/chat/10-nachrichtenaktionen-menu.png)

## Lesebestätigungen

An **Ihren eigenen** Nachrichten zeigt ein doppelter Haken den Lesestatus:

- **Grau** – von einem Teil der Empfänger gelesen
- **Grün** – von allen anderen Teilnehmern gelesen

Ein Tooltip („Gelesen von …") nennt die Personen, die die Nachricht gelesen haben. Eine Unterhaltung wird automatisch als gelesen markiert, sobald Sie sie öffnen.

## Profilbilder

- In den Nachrichten erscheint das **Profilbild** der jeweiligen Person; ohne hinterlegtes Bild werden die Initialen angezeigt.
- Ihr eigenes Profilbild legen Sie unter [Mein Profil → Profilbild](../../erste-schritte/benutzereinstellungen/benutzerdetails.md#profilbild) fest.
- In der Kopfzeile einer Unterhaltung sehen Sie die Profilbilder der Mitglieder samt Mitgliederzahl.

## Benachrichtigungen

Bei einer neuen Nachricht erhalten **alle Gruppenmitglieder außer dem Absender** eine [Benachrichtigung](../../features/benachrichtigungen.md):

- **Titel** – Name der Gruppe
- **Absender** – Vor- und Nachname
- **Inhalt** – Text der Nachricht

Pro Unterhaltung gibt es **eine** Benachrichtigung, die bei jeder neuen Nachricht aktualisiert wird – es entsteht also keine Flut einzelner Meldungen. Sobald Sie die Unterhaltung öffnen und damit als gelesen markieren, wird auch die zugehörige Benachrichtigung entfernt.

## Echtzeit-Aktualisierung

Neue, bearbeitete und gelöschte Nachrichten erscheinen **ohne Neuladen** in Echtzeit. Über „Ältere Nachrichten laden" holen Sie zurückliegende Nachrichten nach; die Schaltfläche „Nach unten scrollen" bringt Sie wieder zur neuesten Nachricht.

:::tip Faire Nutzung
Zum Schutz vor Überlastung ist die Zahl der Aktionen pro Sekunde begrenzt. Im normalen Gebrauch merken Sie davon nichts; erst sehr schnelles, automatisiertes Senden wird kurzzeitig gebremst.
:::

## KI-Chat

Über den Eintrag **KI-Chat** im Bereich **Assistent** stellen Sie Fragen an einen KI-Assistenten.

![Eintrag „KI-Chat" im Bereich Assistent der Seitenleiste](/img/chat/11-ki-chat-eintrag.png)

Frühere Unterhaltungen bleiben als **KI-Unterhaltungen** erhalten.
Über **Neuer Chat** beginnen Sie eine neue Unterhaltung.

![Schaltfläche „Neuer Chat" oben rechts im KI-Chat](/img/chat/12-ki-chat-neuer-chat.png)

Steht mehr als ein Modell zur Verfügung, wählen Sie das gewünschte über die Modellauswahl.

![Modellauswahl in der Kopfzeile einer KI-Unterhaltung](/img/chat/14-ki-chat-modellauswahl.png)

### Zugriff auf den KI-Chat

Der KI-Chat ist nicht automatisch für alle Nutzer verfügbar, sondern wird von der Administration je Nutzergruppe freigeschaltet.

- Haben Sie **keinen** Zugriff, erscheint der Eintrag **KI-Chat** gar nicht in der Seitenleiste. Rufen Sie die Adresse des KI-Chats direkt auf, werden Sie zurück zur Chat-App geleitet – der KI-Chat lässt sich ohne Freigabe nicht öffnen.
- Wird Ihnen der Zugriff **während einer laufenden Sitzung** entzogen, erhalten Sie den Hinweis, dass Sie keinen Zugriff mehr auf den KI-Chat haben, und werden ebenfalls aus dem KI-Chat herausgeführt.

:::info
Global-Admins haben unabhängig von der Gruppen-Freigabe immer Zugriff auf den KI-Chat.
:::

<Audience roles="admin">

## Einrichtung (für Administratoren)

Welche Nutzergruppen den KI-Chat verwenden dürfen, legen Sie als Global-Admin in den [Einstellungen der Chat-App](../../konfiguration/einstellungen.md#chat-ki-chat) fest. Die Anbindung an einen KI-Dienst richten Sie unter [Administration → KI-Chat konfigurieren](../../konfiguration/administration.md#27-ki-chat-konfigurieren) ein.

</Audience>

## Siehe auch

- [Mein Profil → Profilbild](../../erste-schritte/benutzereinstellungen/benutzerdetails.md#profilbild) – Profilbild für den Chat hinterlegen
- [Benachrichtigungen](../../features/benachrichtigungen.md) – Chat-Nachrichten in der Benachrichtigungsleiste
- [Konferenzen](../konferenzen.md) – Audio- und Videokonferenzen
