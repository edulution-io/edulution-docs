---
title: edulution Mail
description: Der integrierte Mailserver auf Mailcow-Basis – Postfächer, Verteilerlisten und Mail-Clients
---

# E-Mail

Die **E-Mail-App** ist der in edulution integrierte Mail-Client. Sie lesen, schreiben und verwalten darin Ihre Nachrichten, ohne die Plattform zu verlassen. Grundlage ist das edulution-Mailsystem, entweder auf mailcow-Basis (mit SOGo) oder auf Stalwart-Basis; die App greift über die Standardprotokolle auf Ihr Postfach zu. Auf einer mailcow-Installation erreichen Sie über **In SOGo öffnen** zusätzlich das vollständige SOGo-Webmail in einem neuen Tab.

## Ordner und Postfächer

Haben Sie Zugriff auf **freigegebene Postfächer** (z. B. ein Funktionspostfach wie `verwaltung@…`), erscheinen diese als zusätzliche Postfächer mit eigenen Ordnern in der Ordnerliste.

Die Gesamtzahl ungelesener Nachrichten lässt **Spam**, **Papierkorb** und **Entwürfe** außen vor, am Postfach in der Ordnerliste ebenso wie am E-Mail-Symbol in der Seitenleiste und im Dashboard. Neben diesen Ordnern selbst steht ihre Zahl weiterhin.

## Nachrichten lesen und verwalten

**Anhänge** speichern Sie außer auf Ihrem Gerät auch direkt in Ihrem edulution-Dateibereich (**In Dateien speichern**).

### Nachrichten löschen

**In den Papierkorb verschieben** legt Nachrichten im **Papierkorb** des Postfachs ab, in dem sie liegen. Bei einem freigegebenen Postfach ist das dessen eigener Papierkorb, nicht Ihrer.

:::caution[Postfach ohne Papierkorb]
Besitzt ein Postfach keinen Papierkorb, löscht **In den Papierkorb verschieben** die Nachrichten endgültig. Die Schaltfläche behält ihre Beschriftung; erst die Sicherheitsabfrage weist darauf hin: „Es gibt keinen Papierkorb-Ordner. Diese E-Mail wird endgültig gelöscht.“ Für ein kurzes Zeitfenster lässt sich das Löschen trotzdem rückgängig machen (siehe [Endgültiges Löschen rückgängig machen](#endgültiges-löschen-rückgängig-machen)).
:::

### Endgültiges Löschen rückgängig machen

Auch endgültiges Löschen lässt sich für ein kurzes Zeitfenster rückgängig machen: im Papierkorb, beim Leeren von Papierkorb oder Spam-Ordner und in einem Postfach ohne Papierkorb. Wie lang es ist, legen Sie unter [Mein Profil → Senden rückgängig machen](../edulution-plattform/uebersicht/benutzereinstellungen/e-mail.md#senden-rückgängig-machen) mit **Zeitfenster** fest; das gilt auch bei ausgeschaltetem verzögertem Senden.

Während dieses Zeitfensters zeigt eine Meldung die Schaltfläche **Rückgängig**. Gelöscht wird auf dem Mailserver, also auch dann, wenn Sie edulution vorher schließen.

| Meldung | Ursache und Abhilfe |
|---------|---------------------|
| **E-Mails konnten nicht gelöscht werden – sie sind wieder sichtbar** | Das Löschen ist auf dem Mailserver gescheitert, meist weil Ihnen in einem freigegebenen Postfach das Recht zum Löschen fehlt, seltener wegen einer gestörten Verbindung. Die Nachrichten bleiben erhalten. |

### Darstellung von HTML-Nachrichten

Skripte und Formulare entfernt edulution vor der Anzeige, damit fremder Code nicht innerhalb von edulution ausgeführt wird. Ein eingebettetes Formular, etwa ein Umfrage- oder Anmeldefeld eines Newsletters, lässt sich deshalb nicht ausfüllen; nutzen Sie den Link zur Website des Absenders.

Bilder und andere extern nachgeladene Inhalte blendet edulution zum Schutz Ihrer Privatsphäre zunächst aus, bei jedem Absender. Eine dauerhafte Ausnahme für einzelne Absender gibt es nicht. Es erscheint der Hinweis „Um deine Privatsphäre zu schützen, wurde der automatische Download einiger Bilder in dieser Nachricht verhindert.“ Mit **Bilder herunterladen** laden Sie die Inhalte für diese Nachricht nach; die Freigabe gilt, bis Sie die Seite oder die Liste mit **Aktualisieren** neu laden, und auch für die Druckansicht.

## E-Mail verfassen

Unter **Von** stehen neben Ihrer eigenen Adresse die freigegebenen Postfächer zur Auswahl, für die Sie eine Sendeberechtigung besitzen; die Adresse eines Verteilers, dem Sie angehören, steht dort nicht zur Auswahl.

Text und Anhänge zusammen dürfen höchstens 20 MB groß sein. Anhänge zählen dabei mit etwa einem Drittel mehr als ihrer Dateigröße, weil sie für den Versand kodiert werden. Solange die Grenze überschritten ist, speichert edulution den Entwurf nicht automatisch. Eine Nachricht nimmt außerdem höchstens zehn Anhänge auf; bei mehr scheitert das Senden mit der irreführenden Meldung **Die Datei ist größer als 20 MB. Bitte komprimiere die Datei oder wähle eine kleinere.**

### Verzögertes Senden

Ist in Ihren E-Mail-Einstellungen das **verzögerte Senden** aktiviert (siehe [Mein Profil → Senden rückgängig machen](../edulution-plattform/uebersicht/benutzereinstellungen/e-mail.md#senden-rückgängig-machen)), verschickt edulution die Nachricht erst nach der eingestellten Dauer. Bis dahin zeigt die Meldung **Nachricht wird gesendet …** die Schaltfläche **Rückgängig**; sie bricht den Versand ab und öffnet die Nachricht mit allen Empfängern, dem Text und den Anhängen erneut zur Bearbeitung. Der Versand läuft auf dem Server, also auch dann, wenn Sie den Browser vorher schließen.

Schlägt der verzögerte Versand fehl (**Verzögerte Nachricht konnte nicht gesendet werden**), öffnet edulution die Nachricht erneut zur Bearbeitung, sofern edulution noch geöffnet ist. Ein bereits gespeicherter Entwurf bleibt in jedem Fall erhalten.

### Empfängervorschläge im Adressfeld

Sobald Sie in **An**, **CC** oder **BCC** zu tippen beginnen, schlägt edulution passende Empfänger vor. Die Vorschläge stammen aus drei Quellen und erscheinen in dieser Reihenfolge:

1. **Zuletzt verwendete Empfänger** aus Ihren vorherigen Nachrichten.
2. **Kontakte** aus den Adressbüchern der [Kontakte-App](../edulution-plattform/apps/native-apps/kontakte.md), sofern sie eingerichtet ist und Ihre Eingabe mindestens zwei Zeichen umfasst. Durchsucht werden gleichzeitig alle Adressbücher, auf die Sie Zugriff haben: Ihre eigenen, die für Sie freigegebenen und das globale Adressbuch. Am Vorschlag wird zusätzlich das Adressbuch genannt, aus dem er stammt; steht dieselbe Adresse in mehreren Adressbüchern, erscheint sie einmal und nennt alle.
3. **Empfänger aus dem Verzeichnis**: Verteiler, Alias-Adressen und freigegebene Postfächer. Auf einer Instanz mit mehreren Schulen stehen darunter auch die der anderen Schulen. Verteiler, die ein Administrator in edulution unter [Einstellungen → Gruppen](../edulution-plattform/konfiguration/einstellungen.md#gruppen) angelegt hat, schlägt das Adressfeld nicht vor; ihre Adresse geben Sie vollständig ein.

Die Liste ist auf 50 Vorschläge begrenzt.

Auf die **Schreibweise von Umlauten und Sonderzeichen** kommt es dabei nicht an: `Müller`, `Mueller` und `Muller` führen zum selben Vorschlag, gleich welche Schreibweise im Verzeichnis oder im Kontakt hinterlegt ist. Dasselbe gilt für `ß` und `ss` sowie für Akzentzeichen. Wie in der [Kontaktsuche](../edulution-plattform/apps/native-apps/kontakte.md#suche) wird die Schreibweise bei sehr kurzen Eingaben nicht zusätzlich vereinfacht.

:::info[Einzelne Personen stammen aus Ihren Adressbüchern]
Das Verzeichnis liefert keine einzelnen Personen. Ist die Kontakte-App für Sie nicht eingerichtet, schlägt edulution daher nur zuletzt verwendete Empfänger, Verteiler, Alias-Adressen und freigegebene Postfächer vor. Ein Hinweis darauf erscheint nicht.

Eine Adresse, zu der Sie keinen Kontakt haben, tippen Sie wie gewohnt vollständig ein; sie wird als Empfänger übernommen. Personen, die Sie häufig anschreiben, legen Sie am besten als Kontakt in einem Ihrer Adressbücher an.
:::

:::info[Eltern über den Namen des Kindes finden]
Die Eltern eines Kindes erreichen Sie über den zugehörigen Eltern-Verteiler, den Sie auch durch Eingabe des Namens des Kindes finden. Der Vorschlag weist dann zusätzlich aus, über welches Kind er gefunden wurde; das hilft, wenn mehrere Familien denselben Nachnamen tragen. Auch hier spielt die Schreibweise keine Rolle: `Öztürk`, `Oeztuerk` und `Ozturk` führen gleichermaßen zum Eltern-Verteiler des Kindes. Einzelne Elternteile werden nur vorgeschlagen, wenn sie in einem Ihrer Adressbücher stehen.
:::

### Verteiler als Empfänger

Einen **Verteiler** aus den Vorschlägen zeigt das Adressfeld als einen Eintrag mit Gruppensymbol und der Zahl seiner Mitglieder.

| Element am Eintrag | Bedeutung |
|---|---|
| **Gruppensymbol und Name** | Ein Klick darauf kopiert die Adresse des Verteilers in die Zwischenablage |
| **Pluszeichen** (*… in Empfänger auflösen*) | Ersetzt den Verteiler durch seine einzelnen Mitglieder, damit Sie einzelne Personen entfernen können |
| **Warnsymbol** (*Mitglieder erneut laden*) | Die Mitglieder konnten nicht geladen werden; ein Klick versucht es erneut |

Lösen Sie den Verteiler nicht auf, verteilt das Mailsystem die Nachricht an seine Mitglieder; die Zustellung ist dieselbe.

:::info[Nicht jeder Eintrag lässt sich auflösen]
Auflösen lassen sich nur Verteiler, die das Mailsystem als solche kennt. Lassen sich zu einem Verteiler keine Mitglieder ermitteln, bleibt er ohne Zahl und ohne Pluszeichen stehen. Als einzelne Adresse ist er weiterhin verwendbar, und die Nachricht wird normal an ihn versendet.

Ohne Mitglieder bleiben auch Verteiler **einer anderen Schule** der Instanz. Dasselbe gilt für schulübergreifende Verteiler, die zu keiner einzelnen Schule gehören, und zwar auch auf einer Instanz mit nur einer Schule. Sie lassen sich wie jeder andere Verteiler auswählen und anschreiben, und die Nachricht wird zugestellt; ihre Mitglieder zeigt edulution jedoch nicht an. Ein Warnsymbol erscheint dafür nicht, da es sich nicht um einen Fehler handelt.
:::

### Empfängerprüfung beim Senden

Beim Senden prüft edulution, ob Empfänger mit einer Adresse Ihrer Organisation im Mailsystem bekannt sind. Dabei werden neben den primären Adressen auch **Alias-Adressen** (zusätzliche Adressformen einer Person oder Gruppe) und **Alias-Domänen** berücksichtigt. Externe Adressen werden nicht geprüft und immer versendet.

- Ist **kein** Empfänger im Mailsystem bekannt, wird die Nachricht nicht gesendet. Sie erhalten einen Hinweis mit den betroffenen Adressen, und die Nachricht bleibt zur Bearbeitung geöffnet.
- Sind nur **einzelne** Empfänger unbekannt, wird die Nachricht an die übrigen Empfänger gesendet; die übersprungenen Adressen werden Ihnen angezeigt.
- Ist das Mailsystem **vorübergehend nicht erreichbar**, wird die Prüfung für diesen Sendevorgang übersprungen, damit gültige Empfänger nicht fälschlich abgewiesen werden. Die Empfängervorschläge zeigen dann gegebenenfalls kurzzeitig keine Alias-Adressen an.

### Schreibfenster schließen

Beim **Verwerfen** einer neuen Nachricht löscht edulution auch den bereits automatisch gespeicherten Entwurf. Bearbeiten Sie einen vorhandenen Entwurf, stellt **Verwerfen** dessen vorherige Fassung wieder her. Ist die Nachricht zu groß für einen Entwurf, fehlt **Als Entwurf speichern**; Sie können sie dann nur verwerfen oder weiter bearbeiten.

### HTML-Quelltext bearbeiten

Mit **HTML-Quellcode** in der Formatierungsleiste wechseln Sie zur direkten HTML-Bearbeitung, mit **Editor** zurück. Fertiges HTML, etwa einen gestalteten Newsletter aus einer Vorlage, fügen Sie im HTML-Quellcode ein. Aufbau und Gestaltung übernimmt edulution; ergänzt werden nur Umbruchregeln, damit lange Wörter und Links in allen Mailprogrammen umbrechen.

:::warning[Wechsel zurück in die formatierte Ansicht]
Der formatierte Editor unterstützt nicht alle HTML-Bestandteile, etwa eigene Formatvorlagen (`<style>`), eingebettete Frames oder SVG-Grafiken. Schalten Sie mit solchem HTML zurück zu **Editor**, gehen diese Bestandteile verloren. Der Dialog **Nicht unterstütztes HTML** listet sie vorher auf; bleiben Sie im Zweifel im HTML-Quellcode, bis Sie die Nachricht versenden.
:::

:::tip[Hinweis]
Fügen Sie HTML-Quelltext direkt in die **formatierte** Ansicht ein, wird er als reiner Text übernommen und die Tags erscheinen sichtbar in der Nachricht. Verwenden Sie dafür **HTML-Quellcode**.
:::

## Benachrichtigungen bei neuen E-Mails

Trifft eine neue E-Mail ein, werden Sie in edulution benachrichtigt: über die **Benachrichtigungen** der Plattform und, sofern auf Ihrem Gerät eingerichtet, zusätzlich als **Push-Benachrichtigung**. Nachrichten, die im **Spam**-Ordner oder im **Papierkorb** landen, lösen keine Benachrichtigung aus.

## Hinweis auf aktive automatische Antwort

Ist eine **automatische Antwort (Abwesenheitsnotiz)** aktiv, nennt die E-Mail-App im Kopfbereich den Namen der aktiven Vorlage. Haben Sie ein freigegebenes Postfach ausgewählt, bezieht sich der Hinweis auf dieses Postfach, sofern Sie dessen automatische Antwort verwalten dürfen; sonst erscheint keiner.

## Einstellungen

Signatur, verzögertes Senden, automatische Antwort, Weiterleitung und Filter verwalten Sie in den **E-Mail-Einstellungen** (siehe [Mein Profil → E-Mail](../edulution-plattform/uebersicht/benutzereinstellungen/e-mail.md)).

Die Sprache des über **In SOGo öffnen** erreichbaren Webmailers richtet sich nach der Sprache, die Sie unter [Mein Profil → Sprache](../edulution-plattform/uebersicht/benutzereinstellungen/benutzeroberflaeche.md#sprache) gewählt haben; dasselbe gilt für Benachrichtigungen, die das Mailsystem selbst verschickt. Das **Theme** des Webmailers legt dagegen die Administration fest.

## Passwörter für Mail-Programme

Mit Stalwart als Mailserver melden sich Thunderbird, Outlook und Handy-Apps nicht mit Ihrem Schulpasswort an, sondern mit je einem eigenen **Gerätepasswort** pro Gerät. Sie erzeugen und widerrufen es unter [Mein Profil → E-Mail](../edulution-plattform/uebersicht/benutzereinstellungen/e-mail.md#passwörter-für-mail-programme). Das Passwort zeigt edulution nur beim Erzeugen einmal an. Die E-Mail-App in edulution selbst benötigt kein Gerätepasswort.

<Audience roles="user">

Ob die E-Mail-App für Sie sichtbar ist, an welcher Stelle sie in der App-Liste erscheint und welches Theme der Webmailer verwendet, legt die Administration Ihrer Schule fest. Dasselbe gilt für den Zugriff auf **freigegebene Postfächer**: Fehlt Ihnen ein Postfach, für das Sie berechtigt sein sollten, kann nur die Administration das einrichten.

</Audience>

<Audience roles="admin">

## Einrichtung (für Administratoren)

Welche Nutzergruppen die E-Mail-App überhaupt sehen, an welcher Stelle sie in der App-Liste erscheint und welches Theme der SOGo-Webmailer verwendet, legen Administratoren unter [Einstellungen → E-Mails](../edulution-plattform/konfiguration/einstellungen.md#e-mails) fest.

Die Postfächer selbst — anlegen, Speicherplatz vergeben, löschen sowie ein Postfach als **freigegebenes Postfach** an weitere Benutzer freigeben — verwalten Administratoren unter [Mailboxen und geteilte Postfächer](./konfiguration/mailbox-verwaltung.md).

Einzelne Personen schlagen die Empfängerfelder ausschließlich aus den Adressbüchern der Kontakte-App vor. Ist die [Kontakte-App](../edulution-plattform/konfiguration/einstellungen.md#kontakte-carddav) nicht konfiguriert oder für eine Nutzergruppe nicht freigegeben, erhalten deren Mitglieder beim Verfassen keine Personenvorschläge. Verteiler, Alias-Adressen und freigegebene Postfächer stehen weiterhin zur Verfügung, und eine Fehlermeldung erscheint nicht.

Auf einer Mailcow-Installation stellt SOGo jedem Benutzer zusätzlich systemweite Adressbücher bereit: das globale Adressbuch der Mail-Domain und, je nach Konfiguration, das Adressbuch **Benutzer**. Beide enthalten die Postfächer aller Schulen der Instanz. Über sie finden Benutzer beim Verfassen daher auch Personen anderer Schulen. Soll das nicht möglich sein, schalten Sie in der SOGo-Konfiguration für beide Benutzerquellen die Verwendung als Adressbuch ab (`isAddressBook`). Personenvorschläge stammen danach nur noch aus den eigenen und den freigegebenen Adressbüchern.

Die Mitglieder von Verteilern einer anderen Schule und von schulübergreifenden Verteilern zeigt edulution beim Verfassen nicht an (siehe [Verteiler als Empfänger](#verteiler-als-empfänger)). Für solche Verteiler lässt sich auch kein Kalender freigeben (siehe [Freigabe an einen Verteiler](../edulution-plattform/apps/native-apps/kalender.md#freigabe-an-einen-verteiler)). Ausgenommen sind Global-Admins: Sie gehören keiner einzelnen Schule an, sehen die Mitglieder aller Verteiler und können Kalender für jeden Verteiler freigeben.

Postfach-Freigaben und die Übernahme der Profilsprache in den Webmailer laufen nicht über IMAP, sondern über die [DAV-Verbindung](../edulution-plattform/konfiguration/einstellungen.md#dav-verbindung) der E-Mail-App. Diese Verbindung gilt ausschließlich für die E-Mail-App: Die Kalender- und die Kontakte-App bringen jeweils eine eigene mit, und eine dort abgeschaltete Zertifikatsprüfung lockert die Prüfung der E-Mail-Verbindung nicht. Ist die DAV-URL fehlerhaft eingetragen, betrifft das nur diese Funktionen — Nachrichten lesen, verfassen, Ordner und Filter bleiben davon unberührt.

## Mailserver wählen

edulution Mail läuft wahlweise auf **mailcow** (mit SOGo, bisher der einzige Mailserver) oder auf **Stalwart**, das Mail, Kalender und Kontakte allein bereitstellt. Die Oberfläche für Ihre Nutzer bleibt dieselbe. Welcher Mailserver gilt, legen Sie in den Einstellungen der E-Mail-App unter **Mailserver** fest (siehe [Einstellungen → E-Mails](../edulution-plattform/konfiguration/einstellungen.md#mailserver)). Bestehende Installationen bleiben auf mailcow. Bei Stalwart tragen Sie zusätzlich den **Benutzer der Verwaltungs-API** ein, mit dem edulution den Mailserver verwaltet; mailcow braucht dafür nur den API-Schlüssel. Die Einrichtung eines neuen Stalwart-Servers trägt diese Werte selbst ein (siehe unten).

:::caution[Umschalten nur mit bereitem Zielserver]
Stellen Sie erst um, wenn der neue Mailserver erreichbar ist und die Postfächer dorthin übertragen sind. edulution überträgt keine Postfächer beim Umschalten.
:::

Einige Funktionen gibt es nur mit Stalwart: Mail-Domains und Zweitadressen verwalten Sie dann in edulution, und die Nutzer erzeugen Gerätepasswörter. Auf mailcow bleibt beides in mailcow selbst; die beiden Bereiche in den Einstellungen verweisen darauf.

## Stalwart einrichten

Stalwart installieren Sie wie andere Anwendungen im Bereich **Container**: Im Dialog **Plugin zur Installation auswählen** wählen Sie die App **E-Mail** und darunter die Grundlage **Stalwart**; ohne Auswahl wird mailcow installiert (siehe [Container-Verwaltung → E-Mail: mailcow oder Stalwart wählen](../edulution-plattform/konfiguration/container-verwaltung.md#e-mail-mailcow-oder-stalwart-wählen)).

Nach dem Anlegen des Containers richtet edulution den neuen Server selbst ein: Es legt die erste Domain an, richtet ein Dienstkonto für die Verwaltung ein, startet den Container bei Bedarf neu und trägt die Zugangsdaten in der Konfiguration ein. Die Zugangsdaten stammen aus der Container-Konfiguration; Sie müssen sie nicht erneut eingeben. Dauert der Start zu lang oder schlägt ein Schritt fehl, erscheint eine Meldung wie **Die Ersteinrichtung des Mailservers ist fehlgeschlagen** oder **Der Mailserver hat nicht rechtzeitig geantwortet**.

:::info[Zertifikatsprüfung]
Die Prüfung des Zertifikats lässt sich bei der Einrichtung nur für den Stalwart-Container selbst abschalten, nicht für eine andere Adresse. Andernfalls erscheint **Die Zertifikatsprüfung lässt sich nur für den Stalwart-Container abschalten**. Solange die Zugangsdaten aus dem Container kommen, nimmt die Einrichtung außerdem nur die Adresse des Containers oder dessen öffentliche Adresse an.
:::

## Mail-Domains

Mit Stalwart verwalten Sie die Domains des Mailservers in den Einstellungen der E-Mail-App im Bereich **Mail-Domains** (siehe [Einstellungen → E-Mails](../edulution-plattform/konfiguration/einstellungen.md#mail-domains)). Die Tabelle zeigt je Domain die Zahl der Postfächer und Verteiler sowie den Stand der DNS-Einträge.

- **Domain hinzufügen**: Nach dem Anlegen erzeugt der Mailserver die DKIM-Schlüssel. Die zugehörigen Einträge sehen Sie anschließend unter **DNS-Einträge**.
- **DNS-Einträge**: Der Dialog listet die Einträge, die in die DNS-Zone der Domain gehören (etwa MX, SPF, DKIM, DMARC), und prüft live, ob sie dort vorhanden sind. Jeder Eintrag steht auf **Gefunden**, **Weicht ab** (der Dialog nennt, was stattdessen im DNS steht) oder **Fehlt**. Einzelne Werte oder alle Einträge lassen sich kopieren. Ohne diese Einträge nehmen andere Mailserver keine Post für die Domain an.
- **Domain entfernen**: Hat die Domain noch Postfächer, nimmt das Entfernen diese mit; die Sicherheitsabfrage nennt deren Zahl.

Auf einer Installation mit mailcow zeigt der Bereich nur den Hinweis, dass der Mailserver seine Domains selbst verwaltet.

## Zweitadressen und Verteiler

Im Bereich **Zweitadressen und Verteiler** legen Sie zusätzliche Adressen an, die Post an ein oder mehrere Postfächer weiterleiten. Mehrere Ziele machen aus einer Zweitadresse einen Verteiler. Eine Beschreibung ist optional. Die Spalte **Herkunft** unterscheidet Adressen **Von Hand** von solchen **Aus dem Verzeichnis**; Letztere stammen aus Gruppen in edulution und werden dort geändert, nicht hier. Optionen im Detail: [Einstellungen → E-Mails](../edulution-plattform/konfiguration/einstellungen.md#zweitadressen-und-verteiler). Auf mailcow verwalten Sie Adressen in mailcow selbst.

</Audience>
