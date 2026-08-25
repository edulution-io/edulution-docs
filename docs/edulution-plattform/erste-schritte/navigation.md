# Navigation

Die Oberfläche von edulution wird über zwei Leisten bedient: die **App-Leiste** am rechten Bildschirmrand wechselt zwischen den Apps, die **Menüleiste** am linken Rand führt innerhalb einer App durch deren Bereiche. Dazwischen liegt der Arbeitsbereich der geöffneten App.

:::info[Begriffe]
Die App-Leiste enthält Ihre Favoriten und die gerade laufenden Apps; sie ist in allen Apps gleich. Die Menüleiste gehört zur geöffneten App und ändert sich mit ihr. In den Beschreibungen einzelner Apps wird die Menüleiste teilweise auch **Seitenleiste** genannt.
:::

![Navigation Uebersicht](/img/navigation_overview.png)

## App-Leiste

Die App-Leiste steht am rechten Rand und ist von oben nach unten so aufgebaut:

| Bereich | Inhalt |
|---|---|
| **App Launcher** | edulution-Logo mit der Beschriftung *App Launcher* – öffnet die Übersicht aller Apps |
| **Favoriten** | Alle Apps, die dauerhaft angepinnt sind |
| **Laufende Apps** | Durch eine Trennlinie abgesetzt: alle geöffneten Apps, die nicht angepinnt sind |
| **Benachrichtigungen** | Glockensymbol mit Zähler ungelesener [Benachrichtigungen](../apps/native-apps/benachrichtigungen.md) |
| **Benutzermenü** | Profilbild und Name mit den Einträgen *Benutzereinstellungen* und *Abmelden* |

Ein Klick auf einen Eintrag öffnet die App. Die aktive App ist hervorgehoben; fahren Sie mit der Maus über einen Eintrag, klappt zusätzlich der vollständige App-Name auf.

![Navigation App-Launcher](/img/navigation_app-launcher.png)

### Favoriten

Welche Apps dauerhaft in der App-Leiste stehen, legt der Global-Admin je App über die Einstellung **An App-Leiste anpinnen** fest (siehe [Einstellungen](../konfiguration/einstellungen.md)). Ist sie aktiviert, bleibt die App dauerhaft sichtbar. Ist sie deaktiviert, erscheint die App dort nur, solange sie geöffnet ist.

Angezeigt werden ausschließlich Apps, für die Ihre Nutzergruppe freigeschaltet ist. Global-Admins finden am Ende der Favoriten zusätzlich den Eintrag **Einstellungen**.

### Laufende Apps

Öffnen Sie eine App, die nicht angepinnt ist – zum Beispiel über den App Launcher –, erscheint sie unterhalb der Trennlinie im Bereich der laufenden Apps. Dort bleibt sie auch dann stehen, wenn Sie zu einer anderen App wechseln oder die Seite neu laden, sodass Sie jederzeit zurückspringen können.

Zum Beenden fahren Sie mit der Maus über den Eintrag und klicken auf das **X** links neben dem App-Namen. Handelt es sich um die gerade geöffnete App, wechselt edulution zurück zur Startseite.

:::note[Anzahl]
Es werden höchstens 20 laufende Apps vorgehalten. Kommt eine weitere hinzu, entfällt der jeweils älteste Eintrag. Die Liste wird pro Browser gespeichert und ist auf einem anderen Gerät eine andere.
:::

### Benachrichtigungszähler

Einige Apps zeigen am Symbol eine farbige Zahl an:

| App | Bedeutung |
|---|---|
| **E-Mail** | Ungelesene Nachrichten in den persönlichen Postfächern |
| **Chat** | Ungelesene Chat-Nachrichten |
| **Konferenzen** | Aktuell laufende Konferenzen |
| **Infoboard** | Neue Mitteilungen |
| **Benachrichtigungen** | Ungelesene Benachrichtigungen |

### Blättern in der App-Leiste

Passen nicht alle Einträge auf den Bildschirm, erscheinen am oberen und unteren Ende der Liste kleine Pfeilschaltflächen. Blättern können Sie außerdem mit dem Mausrad über der Leiste oder per Wischgeste. Wechseln Sie in eine App, deren Eintrag gerade außerhalb des sichtbaren Bereichs liegt, blättert die Leiste automatisch dorthin.

## App Launcher

Der App Launcher zeigt alle Apps, auf die Sie Zugriff haben – angepinnte wie nicht angepinnte – als Kachelraster.

**Öffnen:**

- Klick auf das edulution-Logo am oberen Ende der App-Leiste
- Tastenkombination `Strg + K` (unter macOS `⌘ + K`)

**Suchen:** Über dem Raster liegt das Feld *Tippen um Apps zu filtern…*. Die Eingabe muss nicht zusammenhängend sein, die Buchstaben müssen nur in dieser Reihenfolge im Namen vorkommen: `kal` findet *Kalender*, `eml` findet *E-Mail*. Passt keine App zur Eingabe, erscheint **Keine App gefunden**.

**Bedienen:** Mit den Pfeiltasten wechseln Sie zwischen den Kacheln, `Enter` öffnet die hervorgehobene App. Ein Klick auf eine Kachel öffnet die App ebenfalls und schließt den Launcher. Die Kacheln tragen dieselben Benachrichtigungszähler wie die App-Leiste.

## Menüleiste

Die Menüleiste am linken Rand gehört zur geöffneten App. Ganz oben steht der Name der App; ein Klick darauf führt zurück zu deren Startansicht. Darunter folgen die Bereiche der App, der aktive Eintrag ist farbig hervorgehoben.

Apps ohne eigene Untergliederung – etwa das [Dashboard](./dashboard.md) – haben keine Menüleiste; der Arbeitsbereich nutzt dann die volle Breite.

### Mehrstufige Untermenüs

Einträge mit Unterpunkten tragen rechts einen Pfeil. Ein Klick darauf klappt die Unterpunkte auf oder wieder zu, ohne den Bereich zu wechseln:

- Mehrere Bereiche dürfen gleichzeitig aufgeklappt bleiben.
- Untermenüs können mehrere Ebenen tief sein. Der Pfad zum aktiven Eintrag klappt automatisch auf, sodass Sie stets sehen, wo Sie sich befinden.
- Sehr tief verschachtelte Menüs wechseln ab der fünften Ebene in eine Einzelansicht: Sie steigen mit einem Klick in die Ebene hinein und über **Zurück** wieder heraus.
- Ist ein Bereich zugeklappt, fasst die Zahl an seinem Eintrag die Zähler aller darin enthaltenen Unterpunkte zusammen. Beim Aufklappen entfällt sie, weil die Unterpunkte ihre eigenen Zahlen zeigen.

Manche Einträge bieten zusätzliche Aktionen. Diese erreichen Sie über das Drei-Punkte-Symbol, das erscheint, sobald Sie mit der Maus über den Eintrag fahren.

### Suchfeld

In Apps mit vielen Menüeinträgen liegt unter dem App-Namen ein Suchfeld. Während der Eingabe bleiben nur noch die passenden Einträge stehen; enthält ein zugeklappter Bereich einen Treffer, klappt er automatisch auf. Über das **X** im Feld setzen Sie die Suche zurück, bei fehlenden Treffern erscheint ein entsprechender Hinweis.

Derzeit gibt es das Suchfeld in diesen Apps:

| App | Sucht in | Besonderheit |
|---|---|---|
| **Einstellungen** | Allen Einstellungsseiten und App-Namen | – |
| **[Wiki](../apps/native-apps/wiki.md)** | Der Baumansicht aller Wikis und Seiten | `Enter` öffnet zusätzlich die Volltextsuche über alle Inhalte |

### Fußbereich

Einige Apps blenden unterhalb der Menüeinträge einen festen Fußbereich ein:

- **[Dateien](../apps/dateien/index.md)**: Zugangsdaten für [WebDAV](../apps/dateien/webdav-windows.md) sowie die Anzeige des belegten Speicherplatzes
- **[Kontakte](../apps/native-apps/kontakte.md)**: Schaltfläche zum Anlegen eines neuen Adressbuchs
- **[E-Mail](../../edulution-mail/index.md)**: Hinweis, solange die Ordnerliste noch geladen wird

## Bedienung auf Tablet und Smartphone

Auf schmalen Bildschirmen und in der [mobilen App](../../edulution-app/mobile-ansicht.md) sind beide Leisten eingeklappt. Stattdessen erscheint oben eine schmale Leiste mit je einer Schaltfläche:

| Schaltfläche | Wirkung |
|---|---|
| **Links** (Menü-Symbol) | Blendet die Menüleiste der geöffneten App von links ein |
| **Rechts** (Menü-Symbol) | Blendet die App-Leiste von rechts ein |

Es ist immer nur eine der beiden Leisten geöffnet: Öffnen Sie die eine, schließt sich die andere. Ein Klick neben die eingeblendete Leiste schließt sie wieder.

Die eingeblendete App-Leiste zeigt die Apps mit vollem Namen untereinander – zuerst die Favoriten, nach der Trennlinie die laufenden Apps. Am unteren linken Rand stehen die installierte Version und der Copyright-Hinweis.

![Navigation Mobile Ansicht mit geschlossener Seitenleiste](/img/navigation_mobile_closed.png) ![Navigation Mobile Ansicht mit offener Seitenleiste](/img/navigation_mobile_opened.png)

## Weitere Informationen

- [Dashboard](./dashboard.md) – Startseite nach der Anmeldung
- [Benachrichtigungen](../apps/native-apps/benachrichtigungen.md) – Benachrichtigungsbereich hinter dem Glockensymbol
- [Mein Profil](./mein-profil.md) – Einträge des Benutzermenüs
- [Einstellungen](../konfiguration/einstellungen.md) – Apps anpinnen und Nutzergruppen freischalten
