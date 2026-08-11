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

## KI-Chat

Über den Eintrag **KI-Chat** im Bereich **Assistent** stellen Sie Fragen an einen KI-Assistenten. Frühere Unterhaltungen bleiben als **KI-Unterhaltungen** erhalten; über **Neuer Chat** beginnen Sie eine neue Unterhaltung. Steht mehr als ein Modell zur Verfügung, wählen Sie das gewünschte über die Modellauswahl.

### Zugriff auf den KI-Chat

Der KI-Chat ist nicht automatisch für alle Nutzer verfügbar, sondern wird von der Administration je Nutzergruppe freigeschaltet.

- Haben Sie **keinen** Zugriff, erscheint der Eintrag **KI-Chat** gar nicht in der Seitenleiste. Rufen Sie die Adresse des KI-Chats direkt auf, werden Sie zurück zur Chat-App geleitet – der KI-Chat lässt sich ohne Freigabe nicht öffnen.
- Wird Ihnen der Zugriff **während einer laufenden Sitzung** entzogen, erhalten Sie den Hinweis, dass Sie keinen Zugriff mehr auf den KI-Chat haben, und werden ebenfalls aus dem KI-Chat herausgeführt.

:::info
Global-Admins haben unabhängig von der Gruppen-Freigabe immer Zugriff auf den KI-Chat.
:::

## Einrichtung (für Administratoren)

Welche Nutzergruppen den KI-Chat verwenden dürfen, legen Sie als Global-Admin in den [Einstellungen der Chat-App](../administration/einstellungen.md#chat-ki-chat) fest. Die Anbindung an einen KI-Dienst richten Sie unter [Administration → KI-Chat konfigurieren](../administration/administration.md#27-ki-chat-konfigurieren) ein.
