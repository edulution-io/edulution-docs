---
sidebar_custom_props:
  audience: admin
---

# Linuxmuster / LINBO

Die App **Schulserver** (in Unternehmensumgebungen **Server**) verbindet die edulution Plattform mit Ihrem Linuxmuster-Server und bündelt die Verwaltung von Benutzerkonten, Geräten und Elternzuweisungen. Der Bereich **LINBO** innerhalb dieser App zeigt zusätzlich die Hardwaregruppen und Images Ihrer LINBO-Installation.

Alle Daten werden direkt über die Linuxmuster-API (`linuxmuster-api7`) geladen – die edulution Plattform hält dafür keinen eigenen Zwischenspeicher.

:::warning[Voraussetzungen]
Die App steht nur zur Verfügung, wenn die **Plattform** in den globalen Einstellungen auf **Linuxmuster** gesetzt ist und die Linuxmuster-API mindestens in Version 7.3.26 vorliegt. Andernfalls ersetzt eine Meldung alle Seiten der App außer der [Versionsübersicht](#versionsübersicht):

| Meldung | Ursache | Abhilfe |
|---------|---------|---------|
| *„Die Linuxmuster API-Version ist zu alt. Mindestens Version 7.3.26 wird benötigt.“* | Die Linuxmuster-API ist älter als Version 7.3.26. | Aktualisieren Sie die Linuxmuster-API. |
| *„Die Linuxmuster API-Version konnte nicht ermittelt werden. Bitte die Erreichbarkeit der Linuxmuster API prüfen.“* | Die Plattform erreicht die Linuxmuster-API nicht. | Prüfen Sie die Verbindung, siehe [Einrichtung](#einrichtung-für-administratoren). |
| *„Sie haben keine Berechtigung für die Verwaltung des Schulservers. Dieser Bereich steht Schul- und Globaladministratoren zur Verfügung.“* | Das Konto ist weder Globaladmin noch Schuladmin. Andere Rollen haben gegenüber Linuxmuster keine Verwaltungsrechte. | Ein Administrator muss die Rolle zuweisen. |
:::

## Aufbau der App

Die Unterseiten wählen Sie über die Seitenleiste der App:

| Eintrag | Inhalt |
|---------|--------|
| **Übersicht** | Kacheln als Einstieg in alle Bereiche der App |
| **Benutzerverwaltung** | Benutzerkonten anzeigen, importieren und Passwörter verwalten |
| **Geräteverwaltung** | Hostliste der LINBO-Installation; Geräteliste pflegen und in Linuxmuster importieren |
| **Elternzuweisung** | Eltern ihren Kindern zuordnen |
| **LINBO** | Hardwaregruppen und Images der LINBO-Installation |
| **Versionsübersicht** | Versionen der beteiligten Linuxmuster-Komponenten |

:::note[Was nicht für jeden erscheint]
**Elternzuweisung** erscheint nur in Schulumgebungen; beim [Organisationstyp](../edulution-plattform/konfiguration/einstellungen.md#organisationstyp) **Unternehmen** entfällt der Eintrag.

**LINBO** steht Globaladmins immer offen. Schuladmins erreichen den Bereich nur mit einer neueren Linuxmuster-API (siehe [Mindestversionen der Linuxmuster-API](#mindestversionen-der-linuxmuster-api)); für alle anderen Rollen entfällt er ganz. Die übrigen Einträge bleiben davon unberührt.
:::

Die **Übersicht** führt zu denselben Bereichen wie die Seitenleiste:

- Die Benutzerverwaltung bietet je Benutzertyp eine Kachel: **Schüler**, **Lehrer**, **Extra-Schüler**, **Eltern**, **Mitarbeiter**, **Schuladmins** und **Globaladmins**. In Unternehmensumgebungen bleiben nur **Mitarbeiter** und **Globaladmins**; Schuladmins sehen die Kachel **Globaladmins** nicht.
- Die übrigen Kacheln heißen **Geräte**, **Elternzuweisung** (nicht in Unternehmensumgebungen), **LINBO** (nur mit Zugriff auf LINBO) und **Versionsübersicht**.

### Schulauswahl

In Umgebungen mit mehreren Schulen zeigen Benutzerverwaltung (mit Ausnahme der Liste der Globaladmins), Geräteverwaltung und Elternzuweisung für Globaladmins eine Schulauswahl. Ein Wechsel lädt die Listen neu. Schuladmins sehen dort keine Schulauswahl und arbeiten immer in ihrer eigenen Schule.

Nur die Liste der Hardwaregruppen im Bereich **LINBO** zeigt die Schulauswahl auch Schuladmins; sie enthält dann nur die eigene Schule.

### Listen aktualisieren sich selbst

Eine Aktion zum Neuladen gibt es in den LINBO-Listen nicht. Die Seiten holen die Daten selbst erneut vom Server, beim Zurückwechseln in den Browser-Tab und in diesen Abständen:

| Liste | Abstand |
|-------|---------|
| Hosts (samt **Status**) | 30 Sekunden |
| Gruppen und Images | 1 Minute |
| Sitzungen | 5 Sekunden, ein geöffnetes Protokoll alle 2 Sekunden |

Solange eine Gruppe im Gruppen-Editor geöffnet ist oder gespeichert wird, fragt die Gruppenliste nicht ab, damit ungespeicherte Änderungen erhalten bleiben.

### Sammelaktionen und Suche

Eine Sammelaktion trifft nur die ausgewählten Einträge, die die Suche gerade zeigt. Schränken Sie die Suche nach der Auswahl ein, sinkt die angezeigte Zahl entsprechend: Ausgeblendete Einträge bleiben ausgewählt, werden aber nicht angesprochen, und sind wieder Teil der Aktion, sobald Sie die Suche leeren. Das gilt für Hosts, Gruppen und Images.

## Benutzerverwaltung

Die Benutzerverwaltung ist je Benutzertyp (Schüler, Lehrer, Extra-Schüler, Eltern, Mitarbeiter) in zwei Registerkarten geteilt:

- **Tabelle** – die bestehenden Konten mit Anmeldename, Name, Klasse, Rolle, Quota und weiteren Eigenschaften. Über **CSV exportieren** laden Sie die angezeigten Konten herunter, über **Benutzer hinzufügen** legen Sie ein einzelnes Konto an.
- **Liste** – der Import über eine CSV-Datei. Die Liste entspricht der Datei `<Schule>/<Typ>.csv` auf dem Server.

Für Benutzertypen ohne Importunterstützung erscheint der Hinweis *„Für diesen Benutzertyp ist kein Import verfügbar.“*

### Import in drei Schritten

Der Import ist bewusst mehrstufig, damit Sie die Auswirkungen vor dem Schreiben sehen:

1. **Speichern** – die bearbeitete Liste wird auf dem Server abgelegt. Die Meldung weist ausdrücklich darauf hin, anschließend **Prüfen** zu verwenden; gespeichert allein bewirkt noch keine Änderung an den Konten.
2. **Prüfen** – Linuxmuster wertet die Liste aus und meldet das Ergebnis in einem Dialog, gegliedert in eine Übersicht sowie die Konten, die angelegt, aktualisiert oder entfernt würden, und die aufgetretenen Fehler.
3. **Anwenden** – erst dieser Schritt schreibt die Änderungen tatsächlich in Linuxmuster.

Eine CSV-Datei können Sie per Drag & Drop in den CSV-Bereich ziehen oder die aktuelle Liste als Vorlage herunterladen. Die Spalte **Gewünschter Login** stammt unverändert aus der CSV-Datei und kann vom später in LDAP hinterlegten Anmeldenamen abweichen.

:::note[Wer darf schreiben?]
Die schreibenden Aktionen **Speichern** und **Prüfen** stehen nur Globaladmins und Schuladmins zur Verfügung; für andere Rollen sind diese Schaltflächen ausgeblendet. Tabelle und Liste lassen sich weiterhin von allen berechtigten Benutzern einsehen, exportieren und lokal bearbeiten – die Änderungen werden dabei jedoch nicht auf den Server geschrieben.
:::

### Passwörter

Über die **Passwort-Aktionen** eines Kontos setzen Sie Passwörter neu. **Initiales Passwort wiederherstellen** setzt das aktuelle Passwort des Kontos auf das Initiale Passwort zurück. Welche Passwörter zulässig sind, bestimmt die [Passwortrichtlinie](./benutzerverwaltung.md#passwortrichtlinie).

:::tip[Ausführliche Anleitung]
Eine vollständige Beschreibung der Benutzerverwaltung – Benutzertabelle, Sophomorix-Status, Spalten der Verwaltungslisten, CSV-Import und -Export sowie der Prüf- und Übernahmeprozess – finden Sie unter [Benutzerverwaltung](./benutzerverwaltung.md).
:::

## Geräteverwaltung

Die Geräteverwaltung hat zwei Registerkarten:

- **Geräte** zeigt die [Hostliste der LINBO-Installation](#hosts) und löst LINBO-Aktionen aus. Sie erscheint nur für Benutzer, die auch den Bereich **LINBO** erreichen.
- **Import** [pflegt die Geräteliste](#geräteliste-pflegen) (`devices.csv`) von Linuxmuster.

### Geräteliste pflegen

Sie bearbeiten die Einträge direkt in der Tabelle, fügen mit **Gerät hinzufügen** eine Zeile hinzu oder importieren eine vorhandene CSV-Datei per Drag & Drop.

Jedes Gerät benötigt neben Rechnername, MAC- und IP-Adresse eine **Rolle** und ein **PXE-Flag**:

| Wert | PXE-Flag | Bedeutung | Im Auswahlfeld | LINBO-Kommandos | Import nach dem Speichern einer Gruppe |
|------|----------|-----------|----------------|-----------------|----------------------------------------|
| 0 | **Kein PXE** | Das Gerät bootet nicht über das Netzwerk. | wählbar | überspringen das Gerät | berücksichtigt das Gerät nicht |
| 1 | **Linbo-PXE** | Das Gerät bootet LINBO. | wählbar | erreichen das Gerät | berücksichtigt das Gerät |
| 2 | **Linbo-PXE + OPSI-Management** | Das Gerät bootet LINBO und wird zusätzlich über OPSI verwaltet. | gesperrt | erreichen das Gerät | berücksichtigt das Gerät |
| 3 | **OPSI-PXE** | Das Gerät startet über OPSI, nicht über LINBO. | gesperrt | überspringen das Gerät | berücksichtigt das Gerät |

Die gesperrten Werte lassen sich nicht neu vergeben; sie erscheinen nur bei Geräten, deren Eintrag in der Geräteliste sie bereits trägt. Die Bezeichnung des Werts 2 lautete früher *Linbo-PXE + OPSI-PXE*.

Die beiden Spalten rechts gelten an allen Stellen der App; die Abschnitte zu LINBO-Kommandos und zum Anwenden einer Gruppe verweisen hierher. Der Import berücksichtigt außerdem nur Geräte, deren Raum mit einem Buchstaben oder einer Ziffer beginnt.

Als Rolle stehen unter anderem *Schüler-PC im Klassenzimmer*, *Lehrer-PC im Klassenzimmer*, *Fachbereich-Lehrer-PC*, *Lehrer-PC*, *Server*, *Domaincontroller*, *Drucker*, *Router*, *Switch*, *Thinclient*, *BYOD*, *Mobiles Gerät*, *VOIP*, *WLan* und *IP-Only* zur Verfügung. In Unternehmensumgebungen entfallen die drei Klassenzimmer- und Fachbereich-Rollen, und *Lehrer-PC* heißt *Computer*.

:::warning[Anwenden importiert sofort]
**Anwenden** speichert die Geräteliste und importiert sie unmittelbar in Linuxmuster. Der Dialog **Geräteliste anwenden** fragt vorher nach; einen Prüflauf wie in der Benutzerverwaltung gibt es hier nicht.
:::

:::note[Wer darf schreiben?]
**Speichern** und **Anwenden** erscheinen nur für Globaladmins und Schuladmins. Andere Rollen können die Geräteliste einsehen, Zeilen hinzufügen und eine CSV-Datei einlesen, die Liste aber weder speichern noch importieren.
:::

### Namensregeln für Rechnername, Raum und Hardwaregruppe

Rechnername, Raum und Hardwaregruppe sind zugleich die Ziele, auf die ein `linbo-remote`-Lauf gerichtet wird, und müssen den Import nach Linuxmuster überstehen. Alle drei beginnen mit einem Buchstaben oder einer Ziffer, und keine der drei Spalten darf leer bleiben. Leerzeichen, Punkte und Pluszeichen sind in keiner der drei Spalten zulässig.

| Spalte | Erlaubt nach dem ersten Zeichen | Länge |
|--------|----------------------------------|-------|
| **Rechnername** | Buchstaben, Ziffern, Bindestrich; nicht am Ende | höchstens 15 Zeichen |
| **Raum** | Buchstaben, Ziffern, Bindestrich | höchstens 63 Zeichen |
| **Hardwaregruppe** | Buchstaben, Ziffern, Bindestrich, Unterstrich | höchstens 63 Zeichen |

Dieselben Regeln gelten für den Namen einer neuen [Hardwaregruppe](#gruppe-anlegen).

**Speichern** und **Anwenden** sind nicht gesperrt: Erst ein Klick prüft die Liste. Findet die Prüfung einen Fehler, bricht sie ab, schreibt nichts und zeigt eine Meldung. Die Tabelle markiert die betroffenen Zellen rot. Doppelte Einträge sowie MAC- und IP-Adressen prüft nur die Plattform im Browser, und zwar für jede Zeile; der Server wiederholt nur die Namensspalten der neuen und geänderten Zeilen.

| Meldung | Ursache | Abhilfe |
|---------|---------|---------|
| *„Bitte korrigieren Sie alle ungültigen Felder vor dem Speichern“* | Ein Rechnername, eine MAC- oder eine IP-Adresse kommt doppelt vor; eine MAC- oder IP-Adresse ist ungültig oder leer; Rechnername, Raum oder Hardwaregruppe ist leer. | Korrigieren Sie die markierten Zellen. |
| *„Mindestens ein Rechnername, Raum oder eine Hardwaregruppe entspricht nicht den Namensregeln. …“* | Ein Name verstößt gegen die Regeln der Tabelle. Die Meldung wiederholt sie. | Passen Sie den Namen an. |
| *„Mindestens eine neue oder geänderte Zeile enthält einen Rechnernamen, einen Raum oder eine Hardwaregruppe, die kein linbo-remote-Lauf ansprechen kann.“* | Eine Zeile besteht die Prüfung der Namensspalten auf dem Server nicht. | Passen Sie den Namen an. |
| *„Die gespeicherte Geräteliste konnte nicht gelesen werden, um die Änderung zu prüfen. Bitte erneut versuchen.“* | Die Plattform kann die gespeicherte Liste nicht lesen, etwa weil der Linuxmuster-Server nicht antwortet. Sie weist das Speichern ab, statt jede Zeile den Regeln zu unterwerfen. | Versuchen Sie es erneut. |

:::note[Ältere Namen dürfen bleiben, bis Sie die Zeile ändern]
Die Namensregeln gelten nur für neue und geänderte Zeilen. Eine Zeile, die unverändert der gespeicherten Geräteliste entspricht, lässt sich auch mit einem älteren Namen speichern und anwenden. Die Tabelle markiert eine solche Zelle gelb statt rot; beim Überfahren erscheint *„Dieser Name entspricht nicht den aktuellen Namensregeln. Die Zeile kann unverändert bleiben, muss aber angepasst werden, sobald sie bearbeitet wird.“*

Sobald Sie in dieser Zeile irgendeinen Wert ändern, muss sie den Regeln entsprechen. Das gilt auch nach dem Einlesen einer CSV-Datei: Eine eingelesene Zeile, die einer gespeicherten Zeile vollständig entspricht, gilt als unverändert.

Den Namen einer Hardwaregruppe ändern Sie nicht hier, sondern als Globaladmin im Bereich **LINBO** mit [**Umbenennen**](#eine-gruppe-umbenennen): Die Aktion stellt alle Geräte der Gruppe mit um und wendet die Änderung an, statt die Geräte von ihrer `start.conf` zu trennen.
:::

:::tip[Ausführliche Anleitung]
Wie Sie Geräte entfernen, was **Speichern** und **Anwenden** dabei jeweils bewirken, was bei einem fehlgeschlagenen Vorgang mit Ihren Änderungen geschieht, was passiert, wenn die Geräteliste inzwischen geändert wurde, wie der CSV-Dialog die Tabelle ersetzt und was mit Kommentarzeilen geschieht, beschreibt die [Geräteverwaltung](../edulution-plattform/apps/native-apps/geraeteverwaltung.md).
:::

### Hosts

Die Registerkarte **Geräte** listet die Rechner der Geräteliste. Geändert werden ihre Angaben in der Registerkarte **Import**, nicht hier.

Über die Auswahl **Rolle** in der Suchleiste schränken Sie die Liste auf einen oder mehrere Gerätetypen ein; ohne Auswahl erscheinen alle Geräte.

| Auswahl | Enthaltene Rollen |
|---------|-------------------|
| **Computer** | Schüler-PC im Klassenzimmer, Lehrer-PC im Klassenzimmer, Fachbereich-Lehrer-PC, Lehrer-PC, Thinclient |
| **Server** | Server, Domaincontroller |
| **Drucker** | Drucker |
| **iPads** | BYOD, Mobiles Gerät |
| **Netzwerk** | Router, Switch, WLan, VOIP, IP-Only |
| **Sonstige** | Geräte ohne Rolle und Geräte mit einer Rolle, die keiner dieser Gruppen angehört – etwa einer Rolle, die auf Ihrem Server zusätzlich eingerichtet wurde |

Die Auswahlen **Gruppe** und **Raum** erscheinen nur, wenn mindestens ein Host eine Gruppe beziehungsweise einen Raum hat. Alle Auswahlen wirken zusammen: Die Liste zeigt nur Hosts, die alle gesetzten Auswahlen erfüllen.

Die Ansichtswahl bietet drei Ansichten derselben Liste:

| Ansicht | Zeigt |
|---------|-------|
| **Kacheln** (Vorgabe) | je Host eine kleine Karte mit Hostname, **Status**, IP und MAC-Adresse sowie Gruppe und Raum als Etiketten. Das PXE-Kennzeichen erscheint nur bei Rechnern ohne LINBO-Netzwerkstart, also bei denen, die LINBO-Kommandos überspringen |
| **Datenblatt** | je Host eine Karte mit Hostname und **Status** und den Zeilen Rolle, IP, MAC-Adresse, Gruppe, Raum, PXE und Kommentar; Zeilen ohne Wert entfallen |
| **Tabelle** | Hostname, MAC-Adresse, IP, Gruppe, Raum, Rolle, **Status** und **Geplant** |

Ein Klick auf eine Karte – in der Tabelle auf eine ganze Zeile – öffnet den Dialog **Host \<Hostname\>**. Er zeigt den **Status** und alle Angaben, die die Geräteliste zu diesem Rechner führt. Zu denen des Datenblatts kommen Schule, PXE aktiv, DHCP-Optionen, Office-Schlüssel und Windows-Schlüssel hinzu. Hat die Plattform nach einer Aktion für genau diesen Host erhoben, wann seine Images zuletzt synchronisiert wurden, listet der Dialog das zusätzlich unter **Images**. Die Angaben lassen sich nur ansehen.

Zur Tabelle:

- **Geplant** zeigt „–“; beim Überfahren erscheint *„Geplante Aktionen werden vom Edulution-Satellite verwaltet und sind in dieser Version noch nicht angebunden.“*
- **Rolle** zeigt dieselbe Bezeichnung wie der Import. Eine Rolle, die Ihre Installation selbst definiert hat, erscheint unter ihrem technischen Namen, ein Gerät ohne Rolle mit „—“.
- Bricht das Laden mittendrin ab, zeigt die Tabelle die bis dahin geladenen Hosts und bis zum nächsten Laden den Hinweis *„Die Hosts konnten nicht vollständig geladen werden.“*
- Sechs weitere Spalten lassen sich über die Spaltenauswahl einschalten: **PXE** mit der Bezeichnung des PXE-Kennzeichens, **PXE aktiv**, **Kommentar**, **DHCP-Optionen**, **Office-Schlüssel** und **Windows-Schlüssel**. Die Suche findet einen Rechner auch über seinen **Kommentar**; die beiden Schlüssel bleiben aus der Suche heraus.

:::note[Hosts sind schulgebunden]
Anders als die Gruppen gehören Hosts zu einer Schule. Ein Schuladmin sieht die Rechner seiner eigenen Schule, und jede Aktion wirkt auf diese Schule. Ein Globaladmin wählt über die [Schulauswahl](#schulauswahl) jede Schule des Servers.
:::

**Status** nennt je Host **Online** oder **Offline**; beim Überfahren der Spaltenüberschrift erscheint, wann der Zustand zuletzt erhoben wurde. Solange noch keine Erhebung vorliegt, zeigt das Feld „–“ und beim Überfahren *„Noch nicht abgefragt“*. Nach einer Aktion – etwa **Aufwecken**, **Neu starten** oder **Herunterfahren** – fragt die Plattform den Status der erreichten Hosts nach 5, 15, 30 und 60 Sekunden erneut ab. Hat die Aktion genau einen Host getroffen, nennt **Status** außerdem, welches System der Rechner gerade ausführt: *LINBO*, *Linux*, *Windows* oder *Unbekanntes Betriebssystem*. Beim Überfahren listet es je Image, wann es auf dem Rechner zuletzt synchronisiert wurde oder dass es dort noch nie synchronisiert wurde. Das System nennt die Linuxmuster-API erst ab der [genannten Version](#mindestversionen-der-linuxmuster-api); sonst und nach einer Aktion für mehrere Hosts zeigt **Status** nur **Online** oder **Offline**.

#### Hosts auswählen

Aktionen für einzelne Hosts laufen immer über die Auswahl – auch einen einzigen Rechner wählen Sie dafür aus. Welche Aktionen die Aktionsleiste anbietet, hängt von der Auswahl ab:

| Aktion | Erscheint |
|--------|-----------|
| **Aufwecken**, **Neu starten**, **Herunterfahren**, **Aktion schicken** | sobald mindestens ein Host ausgewählt ist; die Leiste nennt dann die Anzahl |
| **Raum-Aktion** | auch ohne Auswahl, sofern ein Raum einen gültigen Namen und mindestens einen Host mit LINBO-Netzwerkstart hat |
| **Sitzungen** | auch ohne Auswahl |

Zu welchen Meldungen es kommt, wenn einzelne Hosts nicht erreichbar sind oder kein gültiges Ziel darstellen:

| Fall | Meldung im Dialog **Aktion schicken** | Meldung nach dem Auslösen |
|------|----------------------------------------|---------------------------|
| Name ist kein gültiges Ziel eines `linbo-remote`-Laufs, etwa ein älterer Name mit Unterstrich | *„Der Rechner … wird übersprungen, weil sein Name kein gültiges Ziel eines linbo-remote-Laufs ist.“* | *„Der Rechner … wurde übersprungen, weil sein Name kein gültiges Ziel eines linbo-remote-Laufs ist.“* (bei mehreren: *„… Rechner wurden übersprungen, weil ihre Namen kein gültiges Ziel eines linbo-remote-Laufs sind: …“*) |
| Kein Rechner der Auswahl hat einen gültigen Namen | *„Keiner der ausgewählten Rechner hat einen Namen, der Ziel eines linbo-remote-Laufs sein kann.“* – **Ausführen** ist gesperrt | – |
| Kein LINBO-Netzwerkstart in der Geräteliste | *„Der Rechner … wird übersprungen, weil für ihn in der Geräteliste kein LINBO-Netzwerkstart eingetragen ist.“* | *„Ohne LINBO-Netzwerkstart übersprungen: …“* |
| Kein Rechner der Auswahl hat einen LINBO-Netzwerkstart | *„Für keinen der ausgewählten Rechner ist in der Geräteliste ein LINBO-Netzwerkstart eingetragen.“* – **Ausführen** ist gesperrt | – |
| Host ist nicht erreichbar | – | *„… war nicht erreichbar und wurde übersprungen: …“* (bei mehreren: *„Einzelne Rechner waren nicht erreichbar und wurden übersprungen: …“*) |
| Der Auftrag erreicht einen Teil der Hosts nicht | – | *„… von … Rechnern haben den Auftrag nicht erhalten: …“* |
| **Aufwecken** gelingt nicht für alle | – | *„… von … Rechnern konnten nicht aufgeweckt werden: …“* |

Die Warnungen nach dem Auslösen erscheinen bei **Neu starten**, **Herunterfahren** und **Aktion schicken**; ist keiner der ausgewählten Rechner ein gültiges Ziel, läuft nichts.

:::caution[LINBO-Kommandos erreichen nur Rechner mit LINBO-Netzwerkstart]
`linbo-remote` spricht nur Rechner an, deren PXE-Flag in der [Geräteliste](#geräteliste-pflegen) LINBO-Kommandos zulässt (Tabelle dort). Alle anderen Rechner überspringt jedes LINBO-Kommando – **Neu starten**, **Herunterfahren**, **Aktion schicken** sowie die Aktionen für eine Gruppe oder einen Raum. Bleibt in der Auswahl, der Gruppe oder dem Raum kein solcher Rechner übrig, lässt sich das Ziel nicht wählen beziehungsweise das Abschicken ist gesperrt.

**Aufwecken** ist davon nicht betroffen: Es weckt jeden ausgewählten Rechner über seine MAC-Adresse, unabhängig vom PXE-Flag.
:::

Nach einer Sammelaktion wählt die Plattform die Hosts ab, für die der Server den Auftrag angenommen hat – auch dann, wenn er einzelne davon als offline übersprungen hat – und ebenso die Rechner, die sie selbst übersprungen hat. Ausgewählt bleiben nur Rechner, die der Auftrag gar nicht erreicht hat, etwa weil bei einem großen Lauf ein Teil nicht zugestellt werden konnte. Ein zweiter Versuch trifft so die bereits bedienten nicht noch einmal.

#### Eine Aktion an einen Raum schicken

**Raum-Aktion** richtet eine Kommandokette an einen Raum, auch ohne dass ein Rechner ausgewählt ist. Sie wählen den Raum aus einer Liste.

- Die Räume stammen aus der Geräteliste (`devices.csv`), nicht aus den Sitzplänen.
- Ein Raum, dessen Name kein gültiges Ziel eines `linbo-remote`-Laufs ist, steht in der Liste, lässt sich aber nicht wählen; der Grund steht am Eintrag. Ebenso ein Raum ohne Rechner mit LINBO-Netzwerkstart.
- Der Dialog nennt, wie viele Rechner mit LINBO-Netzwerkstart die Geräteliste in diesem Raum führt und wie viele übrigen Rechner des Raums übersprungen werden. Der Server löst den Raum beim Ausführen selbst auf.
- Aktionen mit Betriebssystem stehen nur für Räume bereit, deren Rechner alle derselben Hardwaregruppe angehören; bei einem gemischten Raum nennt der Dialog die beteiligten Gruppen. Führt der Raum auch Rechner mit LINBO-Netzwerkstart, aber ohne Hardwaregruppe, sind diese Aktionen ebenfalls gesperrt, denn für sie würde die Standard-`start.conf` gelten. Weisen Sie die Rechner zuerst einer Hardwaregruppe zu.
- Die Rückfrage vor einem zerstörenden Schritt nennt den Raum statt einer Anzahl von Rechnern.
- Sind Hosts ausgewählt, steht im Feld **Ziel** zunächst *Raum wählen*; die aktuelle Auswahl bleibt als Ziel wählbar.

#### Der Kommando-Dialog

**Aktion schicken** öffnet einen Dialog in zwei Schritten:

- **Schritt 1 von 2 · Ziel und Aktion** nennt die ausgewählten Rechner namentlich – oder, aus dem Bereich **Gruppen** heraus, die Hardwaregruppe, an die die Kette geht – und setzt aus einzelnen Schritten eine **Kommandokette** zusammen. **Weiter** führt zum zweiten Schritt.
- **Schritt 2 von 2 · Ausführung** legt fest, wann und wie die Kette läuft, und fasst Ziel, Schritte und die **Kommandokette** in der Schreibweise zusammen, die Sie auch auf der Konsole verwenden würden. **Zurück** kehrt zum ersten Schritt zurück, ohne die Kette oder die gewählten Optionen zu verwerfen.

Im Feld **Modus** wählen Sie, wie Sie die Kette zusammenstellen:

- **Einfach** führt je Betriebssystem der `start.conf` eine Zeile mit **Formatieren**, **Sync** und **Start** und dazu die Schalter **Partitionieren** und **Cache befüllen** (`rsync`). Daraus entsteht die Kette in der Reihenfolge Partitionieren, Formatieren, Cache befüllen, Sync, Start. Führt die `start.conf` kein Betriebssystem, bleiben nur die beiden Schalter.
- **Erweitert** ist der Baukasten mit dem vollen Kommando-Katalog. Die Kette wird genau in der Reihenfolge ausgeführt, in der die Schritte stehen; mit **Nach oben** und **Nach unten** ordnen Sie sie um, mit **Entfernen** nehmen Sie einen Schritt heraus. Diese drei Schaltflächen gibt es nur in diesem Modus.

Je nach Schritt verlangt der Dialog ein zusätzliches Argument:

| Schritt | Auswahl |
|---------|---------|
| **Sync**, **Neu**, **Start**, **Prestart**, **Postsync**, **Abbild erstellen**, **Abbild hochladen**, **Differenz erstellen**, **Differenz hochladen** | das Betriebssystem – mit seinem Namen aus der `start.conf`, nicht als Ziffer |
| **Formatieren** | die Partition, benannt mit Nummer, Gerät und Bezeichnung, oder **Alle Partitionen** |
| **Cache befüllen** | die Übertragungsart `rsync`, `multicast` oder `torrent` |
| **Partitionieren**, **Beschriften**, **Neu starten**, **Herunterfahren** | – |

:::note[Woher die Nummern stammen]
Betriebssysteme und Partitionen werden in der Reihenfolge gezählt, in der ihre Abschnitte in der `start.conf` stehen – nicht nach der Ziffer im Gerätenamen. Der Dialog zählt dabei genauso wie der LINBO-Client: Ein auskommentierter Abschnitt steht nicht zur Auswahl, zählt aber mit, sodass die folgenden Einträge ihre Nummer behalten. Deshalb kann die Partition `/dev/sda5` die Nummer 3 tragen, und auf einem Rechner mit zwei Festplatten steht jede Partition einzeln zur Wahl, statt mit der gleich nummerierten der anderen Platte zusammengefasst zu werden.
:::

Im zweiten Schritt legen Sie fest:

| Feld | Wirkung |
|------|---------|
| **Zeitpunkt** | **Jetzt** oder **Beim nächsten Start** der Rechner |
| **Rechner vorher aufwecken** | Weckt die Rechner und wartet die eingetragenen Sekunden, bevor die Kette läuft. Vorgabe 60, höchstens 300 Sekunden. |
| **Abstand zwischen den Weckpaketen** | Weckt die Rechner nacheinander statt gleichzeitig. Höchstens 10 Sekunden. Nur mit dem Wecken wählbar. |
| **Weckpaket zusätzlich an die Broadcast-Adresse senden** | Nur mit dem Wecken wählbar. |
| **Oberfläche des Clients beim nächsten Start abschalten** | Wirkt erst beim nächsten Start. |
| **Automatische Funktionen der start.conf beim nächsten Start übergehen** | Wirkt erst beim nächsten Start. Überspringt das in der `start.conf` eingestellte automatische Partitionieren, Formatieren, **Cache befüllen** und Starten. |

:::warning[Rückfrage vor zerstörenden Schritten]
**Neu**, **Formatieren** und **Partitionieren** löschen Daten auf den Zielrechnern. Enthält die Kette einen dieser Schritte, öffnet **Ausführen** zunächst die Rückfrage *„Zerstörende Aktion ausführen?“*. Sie nennt die betroffenen Rechner – bei mehreren Hardwaregruppen auch deren Anzahl, bei einer ganzen Hardwaregruppe oder einem Raum stattdessen die Gruppe beziehungsweise den Raum – sowie die zerstörenden Schritte. Erst **Ausführen** in der Rückfrage schickt die Kette; **Abbrechen** kehrt zum zweiten Schritt zurück, Kette und Optionen bleiben erhalten.
:::

Lässt sich nicht weitergehen oder nicht ausführen, nennt der Dialog den Grund an der gesperrten Schaltfläche – etwa ein Schritt, dem noch die Auswahl fehlt, eine fehlende Wartezeit für das Wecken oder ein Lauf, der bereits läuft.

Nicht jede Aktion steht für jede Auswahl bereit. Fehlt eine, erklärt der Dialog, warum:

| Hinweis | Ursache |
|---------|---------|
| Abbild-Aktionen laufen nur auf genau einem Rechner | **Abbild erstellen**, **Abbild hochladen**, **Differenz erstellen** und **Differenz hochladen** verlangen einen einzelnen Host – für eine Hardwaregruppe oder einen Raum stehen sie deshalb nie bereit |
| Aktionen mit Betriebssystem verlangen dieselbe Hardwaregruppe | die Position des Betriebssystems lässt sich nur aus **einer** `start.conf` auflösen |
| Für diese Hardwaregruppe gibt es keine `start.conf` | die Gruppe der ausgewählten Rechner ist auf dem Server nicht beschrieben – etwa bei Servern und Druckern in `nopxe` |
| Die `start.conf` dieser Hardwaregruppe konnte nicht geladen werden | der Server war nicht erreichbar oder hat die Anfrage abgelehnt; die Gruppe kann sehr wohl eine `start.conf` besitzen |

Solange die `start.conf` der Gruppe noch geladen wird, bleiben die Aktionen mit Betriebssystem wählbar; die Auswahlliste füllt sich, sobald die Datei vorliegt.

Nach dem Abschicken meldet die Plattform, ob die Kette alle Rechner erreicht hat; die Meldungen stehen unter [Hosts auswählen](#hosts-auswählen). Die Statusspalte der betroffenen Zeilen wird anschließend mehrfach nachgefragt, weil ein Rechner, der gerade neu startet, nicht sofort antwortet.

#### Laufende Sitzungen

Ein Lauf wird auf dem Schulserver je Host in einer eigenen Sitzung ausgeführt und läuft dort weiter, auch wenn Sie den Dialog schließen oder die Seite verlassen. **Sitzungen** zeigt, was gerade läuft; steht etwas an, nennt die Schaltfläche die Anzahl.

- Der Dialog listet je Sitzung den Hostnamen und seit wann sie läuft.
- Eine Sitzung, die Sie laufen gesehen haben und die inzwischen beendet ist, bleibt mit der Marke **Beendet** in der Liste, bis Sie die Seite neu laden; höchstens 50 solcher Einträge merkt sich die Seite.
- **Protokoll** zeigt die Ausgabe des Laufs für diesen Host; **Zurück zur Liste** führt zur Übersicht. Der Schulserver schreibt die Ausgabe mit, solange der Lauf dauert, und behält sie danach – das Protokoll eines beendeten Laufs bleibt lesbar.
- Befehle, die Sie mit **Beim nächsten Start** abschicken, erscheinen hier nicht: Der Schulserver listet sie nicht auf, und sie lassen sich aus der Plattform nicht zurücknehmen. Der Dialog weist darauf hin.
- Antwortet der Server nicht, bleibt der zuletzt bekannte Stand stehen, und der Dialog sagt es. Der nächste Versuch läuft von selbst, ohne die Meldung bei jedem Durchgang zu wiederholen.

:::note[Die Liste folgt nicht der gewählten Schule]
Welche Sitzungen Sie sehen, entscheidet der Schulserver anhand Ihres Kontos: Ein Schuladmin sieht die Hosts der eigenen Schule, ein Globaladmin jede laufende Sitzung. Der Schulauswahl folgt die Liste deshalb nicht – ein Wechsel blendet keine Sitzung aus, die weiterläuft.
:::

## Elternzuweisung

Hier geben Sie die Verknüpfungen frei, die Eltern und Schüler selbst über einen Zuweisungs-Code
angefragt haben. Wie die Anfrage entsteht, beschreibt
[Benutzereinstellungen → Meine Kinder/Eltern](../edulution-plattform/uebersicht/benutzereinstellungen/meine-kinder-eltern.md).

![Tabelle der Eltern-Schüler-Zuweisungen mit Spalten Elternteil, Schüler, Status und Erstellt am](/img/eltern-schueler-zuordnung/elternzuweisung-tabelle.png)

Die Tabelle zeigt **Elternteil**, **Schüler**, **Status** und **Erstellt am**.

:::info[Akzeptierte und abgelehnte Anfragen sind ausgeblendet]
Der Status-Filter steht zu Beginn auf **Ausstehend**. Eine Anfrage, die Sie akzeptieren oder
ablehnen, verschwindet deshalb sofort aus der Tabelle – sie ist nicht gelöscht. Um sie wieder zu
sehen, etwa um eine Ablehnung zurückzunehmen, wählen Sie im Status-Filter **Akzeptiert**,
**Abgelehnt** oder **Alle**. Ihre Wahl gilt bis zur Abmeldung.
:::

Die Tabelle enthält nur Anfragen, die über einen Code entstanden sind. Eltern, die direkt in der
[Benutzerverwaltung](./benutzerverwaltung.md) zugeordnet wurden, stehen hier nicht – Eltern und
Kind sehen sie trotzdem als **Akzeptiert**.

### Wer entscheidet

Eine Anfrage gehört zur **Schule des Kindes**, auch wenn das Elternteil an einer anderen Schule
geführt wird.

| Rolle | Darf |
| --- | --- |
| **Globaladmins** | Anfragen aller Schulen sehen und entscheiden; die Schule wählen sie über die Schulauswahl |
| **Schuladmins** | Anfragen der eigenen Schule sehen und entscheiden |
| andere Rollen mit Zugriff auf den Schulserver | Anfragen der eigenen Schule sehen, aber nicht entscheiden |

Wer nicht entscheiden darf, sieht **Akzeptieren** und **Ablehnen** trotzdem. Ein Klick führt zu
*„Du hast keine Berechtigung, auf diese Ressource zuzugreifen.“*, der Status bleibt unverändert.

### Anfragen entscheiden

Solange eine Anfrage **Ausstehend** ist, ändert sich auf dem Linuxmuster-Server nichts – erst die
Entscheidung schreibt ins AD.

Wählen Sie in der Zeile **Akzeptieren** oder **Ablehnen**. Für mehrere Anfragen auf einmal wählen
Sie die Zeilen aus; die beiden Schaltflächen erscheinen dann in der Leiste mit den schwebenden
Schaltflächen.

| Aktion | Wirkung |
| --- | --- |
| **Akzeptieren** | nimmt das Elternteil in die Gruppen `<schüler>-parents` und `<klasse>-parents` auf. Fehlt `<schüler>-parents` noch, legt der Linuxmuster-Server sie dabei an. Schlägt das fehl, erscheint eine Fehlermeldung und die Anfrage bleibt, wie sie war. |
| **Ablehnen** einer ausstehenden Anfrage | schließt die Anfrage. Eltern und Kind können sie nicht erneut stellen. |
| **Ablehnen** einer akzeptierten Anfrage | nimmt das Elternteil aus beiden Gruppen wieder heraus. Die Gruppe `<schüler>-parents` selbst bleibt bestehen. |
| **Akzeptieren** einer abgelehnten Anfrage | holt eine versehentliche Ablehnung zurück – der einzige Weg, denn eine neue Anfrage für dasselbe Paar ist nicht möglich. |

| Meldung | Bedeutung |
| --- | --- |
| *„Status erfolgreich aktualisiert.“* | Alle gewählten Anfragen wurden geändert. |
| *„Status für 2 von 5 Zuweisungen fehlgeschlagen.“* (Zahlen je nach Fall) | Bei einer Sammelbearbeitung schlugen einzelne Anfragen fehl, meist an der Linuxmuster-API oder an fehlender Berechtigung für die Schule. Die übrigen sind geändert. Die Tabelle wird neu geladen; bearbeiten Sie die verbliebenen Anfragen einzeln, um die Ursache zu sehen. |

## LINBO

Der Bereich **LINBO** hat zwei Unterseiten: **Gruppen** und **Images**. Beim Öffnen landen Sie auf **Gruppen**; entfällt diese Unterseite wegen einer älteren Linuxmuster-API (siehe [Mindestversionen der Linuxmuster-API](#mindestversionen-der-linuxmuster-api)), landen Sie auf **Images**. Die Hostliste liegt in der [Geräteverwaltung](#hosts).

:::note[Ältere Adressen]
`…/linbo/configs` und `…/linbo/hosts` aus früheren Versionen leiten auf die Gruppen beziehungsweise auf die Registerkarte **Geräte** der Geräteverwaltung weiter. Lesezeichen funktionieren also weiterhin.
:::

### Gruppen

Eine **Hardwaregruppe** ist eine `start.conf` auf dem Server: Sie beschreibt das Plattenlayout und die Betriebssysteme aller Rechner, die ihr zugeordnet sind. Die Seite listet die Hardwaregruppen des Servers – also genau die Gruppen, für die eine `start.conf` vorliegt.

:::note[Gruppen, Images und Vorlagen gelten für alle Schulen]
`start.conf`-Dateien, Images und Beispielkonfigurationen liegen serverweit unter `/srv/linbo`, nicht je Schule. Die **Schulauswahl** ändert die Gruppen deshalb nicht, nur die Zahl der zugeordneten Rechner. Ein Schuladmin ändert hier, was alle Schulen des Servers verwenden.
:::

Die Ansichtswahl bietet vier Ansichten derselben Liste:

| Ansicht | Zeigt |
|---------|-------|
| **Plattenkarte** (Vorgabe) | jede Platte der Gruppe als eigener Balken ihrer Partitionen, nach Rolle eingefärbt, dazu die Betriebssysteme mit Autostart-Zeit und die verwendeten Images |
| **Kacheln** | Systemtyp, Betriebssysteme, Zahl der zugeordneten Rechner, verwendete Images und die Partitionen als Balken je Platte, dazu Cache, Download-Typ und Aktualisierungszeitpunkt |
| **Datenblatt** | die gesetzten Schlüssel der Gruppe: Server, Cache, Download-Typ, Systemtyp, Abmeldung nach, Kernel-Optionen und Virtueller Desktop, dazu die verwendeten Images |
| **Tabelle** | ID, Betriebssysteme, verwendete Images, Partitionen, Zahl der Rechner und Aktualisierungszeitpunkt |

Die Suche findet eine Gruppe über ihren Namen und den Dateinamen ihrer `start.conf`.

#### Aktionen einer Gruppe

Die Aktionsleiste bietet die Aktionen an, sobald Gruppen ausgewählt sind. Aktionen, die sich auf eine einzelne Gruppe beziehen, stehen nur bei genau einer ausgewählten Gruppe zur Wahl. Die Vorschau öffnen Sie zudem per Klick auf eine Karte oder eine Zeile der **Tabelle**.

| Aktion | Wirkung |
|--------|---------|
| **Bearbeiten** | öffnet den [Gruppen-Editor](#der-gruppen-editor) |
| **Vorschau** | zeigt die ausgewertete `start.conf`, ihre Rohdaten und die GRUB-Konfiguration |
| **Duplizieren** | legt eine Kopie unter neuem Namen an |
| **Umbenennen** | gibt der Gruppe einen neuen Namen und stellt ihre Geräte in allen Schulen mit um; nur für Globaladmins, siehe [Eine Gruppe umbenennen](#eine-gruppe-umbenennen) |
| **Sicherungen** | listet die Sicherungen der `start.conf` und spielt eine davon zurück |
| **VDI** | öffnet die VDI-Konfiguration der Gruppe |
| **Aktion schicken** | öffnet den [Kommando-Dialog](#der-kommando-dialog) für alle Rechner der Gruppe |
| **Löschen** | löscht die `start.conf` der Gruppe auf dem Server |

**Aktion schicken** richtet eine Kommandokette an die Hardwaregruppe als Ganzes:

- Der Server ermittelt selbst, welche Rechner der **ausgewählten Schule** dazugehören. Rechner derselben Gruppe in einer anderen Schule erreicht der Lauf nicht; wechseln Sie dafür die Schule in der Schulauswahl.
- Der Dialog nennt die Gruppe und dazu, wie viele ihrer Rechner mit LINBO-Netzwerkstart die ausgewählte Schule führt und wie viele übrigen übersprungen werden (siehe [Hosts auswählen](#hosts-auswählen)). Führt sie keinen solchen Rechner, steht keine Aktion zur Wahl, und der Dialog sagt, warum.
- Solange die Rechnerliste der Schule noch geladen wird oder das Laden fehlgeschlagen ist, steht ebenfalls keine Aktion zur Wahl; der Dialog nennt dann das Laden als Grund. Direkt nach dem Aufruf der Seite kann das kurz der Fall sein.
- Die Betriebssysteme für **Sync**, **Neu** und **Start** stammen aus der `start.conf` der Gruppe.
- Die Aktion ist ausgegraut, solange ein anderer Auftrag läuft, und für eine Gruppe, deren Name die Regeln für `linbo-remote` nicht erfüllt; der Grund steht an der Schaltfläche.
- Nach dem Abschicken meldet die Plattform, ob die Kette die Gruppe erreicht hat; waren Rechner offline, nennt sie den Hinweis des Servers dazu. Was der Lauf ausgibt, sehen Sie unter [Laufende Sitzungen](#laufende-sitzungen).

Solange keine Gruppe ausgewählt ist, bietet die Aktionsleiste außerdem **linbo.iso** an. Die Schaltfläche lädt das Startmedium, das der Server unter `/srv/linbo/linbo.iso` vorhält.

#### Gruppe anlegen

**Gruppe anlegen** steht in allen vier Ansichten zur Verfügung, solange keine Gruppe ausgewählt ist. Sie vergeben einen Namen und wählen eine **Vorlage**:

- Der Name folgt den Regeln der Spalte **Hardwaregruppe** ([Namensregeln](#namensregeln-für-rechnername-raum-und-hardwaregruppe)). Einen Namen, den eine gelistete Gruppe bereits trägt, weist der Dialog schon bei der Eingabe ab; Groß- und Kleinschreibung spielt dabei keine Rolle.
- Zur Wahl stehen *Minimal — nur Cache-Partition*, *Windows (UEFI)* (Vorgabe), *Linux (UEFI)*, *Windows und Linux (UEFI)* und *Windows und Linux (BIOS)*. Der Hinweis zur Vorlage nennt, wie viele Partitionen sie anlegt und auf welchem Gerät.
- Mit einer neueren Linuxmuster-API (siehe [Mindestversionen der Linuxmuster-API](#mindestversionen-der-linuxmuster-api)) stehen zusätzlich die Beispielkonfigurationen aus `/srv/linbo/examples` zur Wahl. Eine solche Vorlage wird unverändert übernommen; nur Gruppenname, Serveradresse und Schule schreibt die Plattform beim Anlegen neu.
- Die Serveradresse holt die Plattform beim Öffnen des Dialogs, falls sie noch unbekannt ist. Gelingt das nicht – etwa weil die Linuxmuster-API die Serverinformationen nur Globaladmins herausgibt –, verwendet sie die Serveradresse einer vorhandenen Gruppe.
- Die neue Gruppe übernimmt die gewählte Schule in ihr Feld **Schule** (Gruppen-Editor, Registerkarte **Allgemein**); ist keine Schule gewählt, bleibt das Feld leer.

Eine neu angelegte Gruppe steht ohne Neuladen in der Liste. Alle fünf Vorlagen legen ihr Layout mit dem Plattentyp **Automatisch** (`/dev/disk0pX`) an, unabhängig von der Hardware; das Gerät nennt der Hinweis zur Vorlage, bevor Sie schreiben. Möchten Sie feste Gerätenamen, wählen Sie im Gruppen-Editor auf der Registerkarte **Partitionen** einen anderen **Plattentyp**.

**Duplizieren** übernimmt Partitionen, Betriebssysteme und Einstellungen der Vorlage; der Gruppenname in der Datei wird auf den neuen Namen umgeschrieben.

Eine angelegte oder duplizierte Gruppe wendet die Plattform an wie nach dem Speichern im [Gruppen-Editor](#der-gruppen-editor).

| Meldung | Ursache | Abhilfe |
|---------|---------|---------|
| *„Die Gruppe ‚…‘ existiert bereits.“* | Eine gelistete Gruppe trägt den Namen schon. | Wählen Sie einen anderen Namen. |
| *„Dieser Name ist als Gruppenname nicht zulässig.“* | Der Name verstößt gegen die Namensregeln. | Passen Sie den Namen an. |
| *„Auf dem Server existiert bereits eine start.conf für ‚…‘. Wähle einen anderen Namen — sonst würde die vorhandene Gruppe überschrieben.“* | Für den Namen liegt eine `start.conf` auf dem Server, auch wenn die Liste sie nicht zeigt. Die Plattform prüft das vor dem Anlegen und vor dem Duplizieren und ersetzt keine vorhandene Gruppe. | Wählen Sie einen anderen Namen. |
| *„Die Serveradresse konnte nicht geladen werden. Die Gruppe wurde nicht angelegt.“* | Die Plattform findet weder über die Linuxmuster-API noch bei einer vorhandenen Gruppe eine Serveradresse. | Legen Sie die Gruppe als Globaladmin an oder duplizieren Sie eine vorhandene Gruppe. |
| *„Gruppe ‚…‘ wurde angelegt, aber nicht angewendet. Bitte wende die Geräteliste in der Geräteverwaltung an.“* | Die `start.conf` ist geschrieben, das Anwenden schlug fehl. | Wenden Sie die Geräteliste in der [Geräteverwaltung](#geräteverwaltung) an. |
| *„‚…‘ wurde als ‚…‘ dupliziert, aber nicht angewendet. Bitte wende die Geräteliste in der Geräteverwaltung an.“* | Die `start.conf` der Kopie ist geschrieben, das Anwenden schlug fehl. | Wenden Sie die Geräteliste in der [Geräteverwaltung](#geräteverwaltung) an. |

:::warning[Namen, die kein LINBO-Lauf ansprechen kann]
Die Namensregel entspricht den Zielen, die ein `linbo-remote`-Lauf annimmt. Ein Name, der mit einem Bindestrich oder Unterstrich beginnt, wird auf der Kommandozeile als Option gelesen; die Gruppe ließe sich anlegen, aber von keinem Lauf mehr ansprechen.

Gruppen, die vor Einführung der Regel unter einem solchen Namen entstanden sind, bleiben in der Liste und lassen sich ansehen, in der Vorschau öffnen und löschen. Im Gruppen-Editor bleibt **Speichern** dagegen gesperrt; die Meldung nennt den Gruppennamen als Grund (siehe [Wenn Speichern gesperrt ist](#wenn-speichern-gesperrt-ist)). Geben Sie der Gruppe in diesem Fall mit [**Umbenennen**](#eine-gruppe-umbenennen) einen zulässigen Namen.
:::

:::note[Welche Rolle Gruppen schreiben darf]
Anlegen, Speichern, Duplizieren und Löschen einer Gruppe reicht die Plattform an die Linuxmuster-API weiter; welche Rolle die Aktion ausführen darf, prüft die API. Lesen und Vorschau sind davon nicht betroffen. **Umbenennen** ist in der Oberfläche Globaladmins vorbehalten.
:::

:::warning[Was beim Löschen verschwindet]
Gelöscht werden die `start.conf`, die GRUB-Konfiguration **und**, falls vorhanden, die [VDI-Konfiguration](#vdi-konfiguration) der Gruppe. Rechner dieser Gruppe starten danach ohne Konfiguration, bis ihnen eine andere Gruppe zugewiesen wird. Der Server legt vor dem Löschen Sicherungen der `start.conf` und der VDI-Konfiguration an. Die Plattform löscht die VDI-Konfiguration zuerst; lässt sie sich nicht löschen, bleibt die Gruppe unverändert bestehen. So findet eine spätere Gruppe gleichen Namens keine verwaiste VDI-Konfiguration vor.

Beim Löschen läuft kein Geräteimport.
:::

#### Eine Gruppe umbenennen

**Umbenennen** ist Globaladmins vorbehalten, weil die Geräte einer Gruppe in jeder Schule liegen können; für andere Rollen ist die Aktion ausgegraut, und der Grund steht an der Schaltfläche.

- Für den neuen Namen gelten dieselben Regeln wie beim Anlegen.
- Keine Geräteliste einer Schule darf bereits Geräte mit diesem Gruppennamen führen, auch nicht in anderer Groß- und Kleinschreibung.
- Der Dialog nennt die Gesamtzahl der Geräte, die umgestellt werden, und dahinter die betroffenen Schulen: *„… Geräte (…) werden auf den neuen Namen umgestellt.“*

Die Plattform benennt in dieser Reihenfolge um:

1. Sie speichert die `start.conf` unter dem neuen Namen und trägt ihn in der Geräteliste jeder betroffenen Schule ein. Jede Geräteliste liest sie dafür unmittelbar vorher erneut: Hat ein anderer Admin sie inzwischen gespeichert, bleibt seine Änderung erhalten, und umgestellt werden nur die Geräte, die dann noch in der alten Gruppe stehen.
2. Sofern vorhanden, übernimmt sie die VDI-Konfiguration unter dem neuen Namen.
3. Sie wendet die Änderung über den Geräteimport jeder betroffenen Schule an.
4. Erst wenn die VDI-Konfiguration übernommen ist und alle Importe gelungen sind, löscht sie die alte `start.conf` und die alte VDI-Konfiguration. Schlägt ein Import fehl, bleiben beide erhalten, denn die Geräte dieser Schule starten noch von ihnen. Ließ sich die VDI-Konfiguration nicht übernehmen, bleibt die alte Gruppe ebenfalls bestehen, damit die VDI-Konfiguration nicht verloren geht.

Danach gilt:

- Die Sicherungen der `start.conf` bleiben unter dem alten Namen.
- Lässt sich die Geräteliste einer Schule nicht ändern, nimmt die Plattform die Umstellung zurück – nur für die Geräte, die sie selbst umgestellt hat.
- Nach dem Umbenennen, auch nach einem fehlgeschlagenen, lädt die Seite Gruppen und Hosts neu, dazu jede bereits in der [Geräteverwaltung](#geräteverwaltung) geöffnete Geräteliste einer betroffenen Schule. Wird die Umbenennung vorab abgewiesen, bleiben die Gerätelisten unberührt.
- Bleibt etwas offen – etwa eine alte Datei, die sich nicht löschen ließ –, nennt das Ergebnis im Dialog, was noch zu tun ist.

| Meldung | Ursache und Abhilfe |
|---------|---------------------|
| *„In der Geräteliste von … gibt es bereits Geräte mit der Gruppe ‚…‘. Wähle einen anderen Namen.“* | Der neue Name ist in der Geräteliste einer der genannten Schulen schon vergeben. Geändert wurde nichts; wählen Sie einen anderen Namen. |
| *„Die Gruppe ‚…‘ wird gerade umbenannt. Warte, bis die Umbenennung abgeschlossen ist, und versuche es erneut.“* | Eine andere Umbenennung mit dem alten oder dem neuen Namen läuft noch, oder die Gruppe wird gerade gespeichert, wiederhergestellt, gelöscht oder ihre VDI-Konfiguration geschrieben. Geändert wurde nichts; warten Sie und versuchen Sie es erneut. |
| *„Die Geräte der Schule ‚…‘ konnten nicht auf den neuen Gruppennamen umgestellt werden. Die Umbenennung wurde vollständig zurückgenommen.“* | Die Geräteliste dieser Schule ließ sich nicht lesen oder schreiben. Geräte und `start.conf` sind im Ausgangszustand; versuchen Sie es erneut. |
| *„Die VDI-Konfiguration konnte nicht übernommen werden. Damit sie nicht verloren geht, bleibt die alte Gruppe ‚…‘ bestehen. Übertrage die VDI-Konfiguration auf ‚…‘ und lösche danach die alte Gruppe.“* | Die Geräte stehen bereits in der neuen Gruppe, deren VDI-Konfiguration fehlt aber. Übertragen Sie die VDI-Konfiguration auf die neue Gruppe und löschen Sie anschließend die alte. |
| *„Die alte Gruppe ‚…‘ bleibt erhalten, weil der Geräteimport nicht für alle Schulen gelang und deren Geräte noch von ihr starten. Wende die Geräteliste dort an und lösche danach die alte Gruppe.“* | Mindestens ein Geräteimport ist fehlgeschlagen. Wenden Sie die Geräteliste dieser Schule in der [Geräteverwaltung](#geräteverwaltung) an und löschen Sie anschließend die alte Gruppe. |
| *„Nach dem Umbenennen wurde die Geräteverwaltung von … neu geladen. Ungespeicherte Änderungen dort wurden verworfen.“* | In der Geräteverwaltung der genannten Schulen standen ungespeicherte Änderungen. Tragen Sie sie erneut ein. |
| *„Die Geräte der Schule ‚…‘ konnten nicht umgestellt werden, und die Umstellung ließ sich für … nicht zurücknehmen. Diese Geräte zeigen weiterhin auf ‚…‘; beide Gruppen bleiben erhalten. Bitte prüfe die Geräteliste.“* | Auch das Zurücknehmen ist gescheitert. In den genannten Schulen stehen die Geräte bereits in der neuen Gruppe. Stellen Sie sie in der [Geräteverwaltung](#geräteverwaltung) zurück oder benennen Sie die Gruppe erneut um. |
| *„Die Geräte der Schule ‚…‘ konnten nicht umgestellt werden; alle Geräte bleiben in der bisherigen Gruppe. Die neu angelegte start.conf ‚…‘ ließ sich nicht wieder entfernen — lösche sie bitte von Hand.“* | Die Geräte sind zurückgestellt, die neue `start.conf` liegt aber noch auf dem Server. Löschen Sie die Gruppe mit dem neuen Namen. |

#### Sicherungen der start.conf

Der Server legt jede Sicherung selbst an, sobald eine `start.conf` geschrieben wird, und behält die zehn letzten Fassungen. Vor dem Zurückspielen sichert er zusätzlich die aktuelle `start.conf`.

Nach dem **Wiederherstellen** wendet die Plattform die Gruppe an wie nach dem Speichern im [Gruppen-Editor](#der-gruppen-editor): Sie startet den Geräteimport einer Schule, die die Gruppe per PXE startet, damit das Boot-Menü der zurückgespielten Fassung folgt. Die Meldung nennt diese Schule, sagt, dass noch kein Computer die Gruppe startet, oder dass das Anwenden fehlgeschlagen ist – dann wenden Sie die Geräteliste in der Geräteverwaltung an. Zurückgespielt ist die Datei in jedem Fall.

#### VDI-Konfiguration

**VDI** öffnet die Datei `start.conf.<Gruppe>.vdi` der Gruppe. Der Dialog zeigt die Felder, die die Schulkonsole schreibt – darunter **VDI aktiviert**, **Name**, **Hostname**, **Betriebssystemtyp**, **IP-Adresse**, **MAC-Adresse**, **Netzwerkbrücke**, **Kerne**, **Arbeitsspeicher (MiB)** und **VM-IDs (kommagetrennt)**. **Speichern** ersetzt die Datei als Ganzes, **VDI abschalten** löscht sie nach einer Rückfrage; die `start.conf` der Gruppe bleibt in beiden Fällen unberührt. In der Liste der Gruppen erscheint die VDI-Konfiguration nicht als eigene Gruppe.

Die Datei gehört edulution-linbo-vdi. Felder, die der Dialog nicht anzeigt, schreibt die Plattform unverändert zurück, statt sie zu verwerfen.

| Meldung | Ursache | Abhilfe |
|---------|---------|---------|
| *„Die VDI-Konfiguration konnte nicht gelesen werden. Schließe den Dialog und versuche es erneut, damit die gespeicherte Konfiguration nicht durch ein leeres Formular ersetzt wird.“* | Die Datei ließ sich nicht lesen. **Speichern** ist gesperrt, denn ein leeres Formular würde die gespeicherte Konfiguration ersetzen. | Schließen Sie den Dialog und öffnen Sie ihn erneut. |

**Speichern** bleibt auch gesperrt, solange ein Feld einen unzulässigen Wert enthält; der Dialog nennt den Fehler am Feld:

| Feld | Zulässig |
|------|----------|
| **Kerne**, **Arbeitsspeicher (MiB)** | ganze Zahlen ab 1 |
| **VM-IDs (kommagetrennt)** | ganze Zahlen ab 1, mehrere durch Kommas getrennt |
| **VLAN-Tag** | ganze Zahlen von 0 bis 4094; 0 bedeutet *kein VLAN* |
| **MAC-Adresse** | im Format `aa:bb:cc:dd:ee:ff` |
| **IP-Adresse** | eine IPv4-Adresse wie `10.0.0.50` |

Geprüft werden nur Felder, die Sie ändern: Ein Wert, der unverändert aus einer älteren Datei stammt, sperrt das Speichern nicht.

#### Die Vorschau

Die Vorschau **Gruppe \<ID\>** hat drei Registerkarten:

- **Zusammenfassung** – die ausgewertete `start.conf`: der Abschnitt `[LINBO]` als Liste der gesetzten Schlüssel, dazu dasselbe Plattenlayout wie im Gruppen-Editor – je Platte ihre Partitionen, dann die Betriebssysteme.
- **Rohdaten** – der unveränderte Inhalt der `start.conf`.
- **GRUB cfg** – der Inhalt der GRUB-Konfiguration.

Existiert zu einer Gruppe keine `start.conf`, entfallen die ersten beiden Registerkarten.

:::note[Die GRUB-Vorschau zeigt den Stand auf dem Server]
Die Registerkarte **GRUB cfg** liest die Konfiguration bei jedem Öffnen erneut vom Server und zeigt damit nicht die Fassung, die beim Laden der Liste mitkam. Verweigert die Linuxmuster-API das Lesen der einzelnen Konfiguration, bleibt die Vorschau ohne Fehlermeldung bei der Fassung aus der Liste.
:::

:::note[Auswertung der start.conf]
Die Zusammenfassung liest die Datei so, wie LINBO selbst sie liest: Abschnitts- und Schlüsselnamen werden unabhängig von der Groß- und Kleinschreibung erkannt, und als Ja-Wert gelten ausschließlich `yes`, `true` und `enable`. Ein Schlüssel mit einem anderen Wert – etwa `Autostart = 1` – zählt daher als *aus*. Ein leerer oder fehlender Schlüssel erhält den Standardwert, den auch der LINBO-Client annimmt.
:::

#### Der Gruppen-Editor

**Bearbeiten** öffnet die Gruppe unter einer eigenen Adresse (`…/linbo/groups/<Name>`). Diese Adresse lässt sich verlinken und übersteht ein Neuladen; ein unbekannter Name führt mit der Meldung *„Die Gruppe ‚…‘ gibt es nicht.“* zurück auf die Liste.

Die Registerkarte **Allgemein** zeigt die Felder der Gruppe in Abschnitten. Der Editor öffnet im einfachen Modus; mit **Erweitert** und **Einfach** schalten Sie auf dieser Registerkarte um. Bei einer Gruppe mit unzulässigem Namen erscheint für Globaladmins stattdessen **Umbenennen**.

| Abschnitt | Felder |
|-----------|--------|
| **Übersicht** | Gruppe, Server, Cache |
| **Hardware** | Systemtyp, Download-Typ |
| **Startoptionen** | Beim Start partitionieren, Beim Start formatieren, Beim Start Cache aktualisieren, Schule |
| **Darstellung** | Sprache, Minimales Layout verwenden, Clientdetails standardmäßig anzeigen |
| **Erweiterte Einstellungen** | Abmeldung nach, Kernel-Optionen – nur im erweiterten Modus |

- Gruppe, Server und Cache lassen sich nicht ändern: Der Name ist die Identität der Gruppe, und die Cache-Partition ergibt sich aus dem Partitionslayout.
- *Vorgabe des Servers* bei **Sprache** bedeutet, dass die Gruppe keine eigene Sprache setzt.
- **Abmeldung nach** erwartet Sekunden; die Vorgabe ist 600.
- **Kernel-Optionen** bietet im erweiterten Modus Schaltflächen für `quiet`, `splash`, `acpi=noirq`, `acpi=off`, `irqpoll` und `dhcpretry=9`. Ein Klick hängt den Wert an die bestehenden Optionen an; ist er bereits gesetzt, ist die Schaltfläche ausgegraut.
- Ein Feld, das Sie leeren, verschwindet beim Speichern aus der `start.conf`, statt als leerer Eintrag darin stehen zu bleiben. Für LINBO ist das der Unterschied zwischen *nicht gesetzt* und *auf leer gesetzt*: Der Wert fällt auf die Vorgabe zurück. Das betrifft unter anderem **Schule**, **Abmeldung nach** und **Kernel-Optionen**.

:::warning[Beim Start formatieren]
**Beim Start partitionieren** legt das Plattenlayout bei jedem Start neu an, **Beim Start formatieren** formatiert dabei alle Partitionen. Lokal auf den Rechnern gespeicherte Daten gehen dann bei jedem Start verloren.
:::

Die Registerkarte **Partitionen** zeigt je Platte eine Karte. Mit den Preset-Schaltflächen fügen Sie eine Partition mit Vorgabewerten hinzu:

| Preset | Dateisystem | Größe | Besonderheit |
|--------|-------------|-------|--------------|
| *EFI* | vfat | 200 MiB | bootfähig |
| *MSR* | keines | 128 MiB | – |
| *Windows* | ntfs | 40 GiB | bootfähig, legt ein Betriebssystem an |
| *Linux* | ext4 | 20 GiB | bootfähig, legt ein Betriebssystem an |
| *Swap* | swap | 4 GiB | – |
| *Daten* | ntfs | 10 GiB | nicht bootfähig, legt kein Betriebssystem an |
| *Erweitert* | keines | Rest der Platte | – |
| *Cache* | ext4 | Rest der Platte | wird zur Cache-Partition der Gruppe |

- Eine Partition lässt sich per Ziehen innerhalb ihrer Platte verschieben, und ein Preset lässt sich direkt an die Stelle ziehen, an der die neue Partition entstehen soll. Klicken Sie ein Preset nur an, bestimmt es die Position selbst: *EFI* an den Anfang, *MSR* dahinter, alle übrigen ans Ende. Gerätenamen und alle Verweise darauf werden danach neu durchnummeriert.
- Ein Klick auf eine Partition öffnet einen Dialog mit den Unterregisterkarten **Partition** und **Betriebssystem**. Er öffnet in der einfachen Ansicht; **Erweitert** blendet auf **Partition** zusätzlich **Partitionstyp** und **Dateisystem** ein und gilt nur für die geöffnete Partition.
- **Neue Festplatte** fügt eine weitere Platte hinzu. Solange sie keine Partition trägt, bleibt sie beim Wechsel der Registerkarten erhalten, wird aber nicht in die `start.conf` geschrieben – legen Sie vor dem Speichern mindestens eine Partition darauf an.

Der **Plattentyp** bestimmt die Gerätenamen: *Automatisch* (`/dev/disk0pX`), *SATA*, *VirtIO*, *Xen*, *IDE*, *MMC* oder *NVMe*.

| Fall | Plattentyp |
|------|------------|
| Die fünf Vorlagen; eine im Editor hinzugefügte Platte in einer Gruppe ohne Platten | *Automatisch* |
| Eine weitere Platte | Typ der letzten Platte (z. B. `/dev/sdb` zusätzlich zu `/dev/sda`) und die nächste freie Gerätenummer |
| Bereits vorhandene Platten und die Beispielkonfigurationen des Servers | bleiben unverändert; **Duplizieren** übernimmt das Layout unverändert |

Ein Wechsel des Plattentyps nummeriert die Partitionen der Platte samt aller Verweise darauf um.

Im Feld **Größe** gilt:

| Eingabe | Bedeutung |
|---------|-----------|
| nackte Zahl | Kibibytes |
| Suffix `K`, `M`, `G` oder `T` | legt die Einheit fest, wahlweise gefolgt von `B` oder `iB`, etwa `40GB` |
| leer | *Rest der Platte* (in der Plattenkarte als `∞` dargestellt) |

Dezimalzahlen, Leerzeichen in der Angabe und andere Einheiten liest LINBO nicht, und eine Partition muss mindestens 2 MiB groß sein; eine solche Größe markiert der Dialog als ungültig. Der Dialog nennt laufend, welche Größe aus der Eingabe wird.

Der Abschnitt **Betriebssysteme** listet die Einträge der Gruppe mit Partition, Basisimage, Kernel, Initrd und den Schaltern für Autostart, Sync und Start. **Partition bearbeiten** öffnet die Partition, an der ein Eintrag hängt. Zeigt das Root-Gerät eines Eintrags auf keine Partition des Layouts, kennzeichnet ihn **Ohne Partition**, und er lässt sich hier löschen; dieselbe Kennzeichnung trägt das Betriebssystem auf der Karte der Gruppe in der **Plattenkarte**.

Bearbeitet wird ein Betriebssystem auf der Unterregisterkarte **Betriebssystem** des Partitionsdialogs:

| Feld | Hinweis |
|------|---------|
| **Name**, **Version**, **Standardaktion**, **Symbol**, **Beschreibung**, **Basisimage** | |
| **Startknöpfe im LINBO-Menü** | *Start*, *Sync & Start*, *Neu & Start* und *Autostart* |
| **Autostart-Timeout (Sekunden)** | nur solange *Autostart* aktiviert ist; mindestens 1 |
| **Kernel**, **Zusätzliche Kernel-Parameter**, **Opsi-Setup erzwingen**, **Opsi-Status wiederherstellen**, **Im Startmenü ausblenden** | nur nach **Erweitert** |

Zwei Felder richten sich nach dem Dateisystem der Partition: **Initrd** erscheint nur, wenn die Partition kein NTFS trägt – ein Windows-System startet ohne Initrd –, und **Kernel** ist auf NTFS eine Auswahl aus `auto`, `grub.exe` und `reboot` statt eines freien Textfelds.

Trägt eine Partition noch kein Betriebssystem, weist die Unterregisterkarte darauf hin und bietet **Betriebssystem hinzufügen** an. Die Schaltfläche erscheint nur auf Partitionen, von denen LINBO ein System starten kann. Firmware-, erweiterte und Swap-Partitionen, Partitionen ohne Dateisystem und die Cache-Partition kommen nicht infrage; eine Partition aus dem Preset *Daten* dagegen schon.

:::warning[Betriebssystem auf einer nicht startfähigen Partition]
Ändern Sie an einer Partition, an der ein Betriebssystem hängt, das Dateisystem oder den Partitionstyp auf einen Wert, von dem LINBO nicht startet – oder machen Sie sie zur Cache-Partition –, bleibt der Eintrag erhalten und weiter bearbeitbar. Die Unterregisterkarte **Betriebssystem** weist dann darauf hin, dass LINBO dieses System hier nicht mehr starten kann.

Gelöscht wird der Eintrag nicht – setzen Sie das Dateisystem oder den Partitionstyp zurück, damit das System wieder startet. Im Abschnitt **Betriebssysteme** lässt sich der Eintrag in diesem Zustand nicht entfernen: Die Schaltfläche zum Löschen erscheint dort nur bei verwaisten Einträgen, deren Partition es gar nicht mehr gibt.
:::

##### Wenn Speichern gesperrt ist

In diesen Fällen bleibt **Speichern** im Editor gesperrt, und der Editor nennt den Grund:

| Meldung | Ursache | Abhilfe |
|---------|---------|---------|
| *„Die Gruppe ‚…‘ kann nicht gespeichert werden, weil ihr Name kein gültiges Ziel für einen linbo-remote-Lauf ist. Er muss mit einem Buchstaben oder einer Ziffer beginnen, darf danach nur Buchstaben, Ziffern, Bindestrich und Unterstrich enthalten und höchstens 63 Zeichen lang sein. Die Gruppe lässt sich weiterhin löschen.“* | Die Gruppe entstand vor Einführung der Namensregel. | Ein Globaladmin benennt die Gruppe mit **Umbenennen** um. Der Editor bietet die Aktion Globaladmins an; anderen Rollen nennt er, dass ein Globaladmin die Gruppe umbenennen kann. Solange im Editor ungespeicherte Änderungen vorliegen, ist die Aktion gesperrt (*„Verwirf zuerst deine ungespeicherten Änderungen, um die Gruppe umzubenennen; unter diesem Namen lassen sie sich nicht speichern.“*). |
| *„Die Gruppe kann nicht gespeichert werden, weil diese Partitionen eine ungültige Größe haben: …. Korrigiere die Größe unter ‚Partitionen‘.“* | Mindestens eine Größe ist ungültig. | Korrigieren Sie die genannten Größen auf der Registerkarte **Partitionen**. |

##### Speichern und Anwenden

Nach dem **Speichern** wendet die Plattform die Gruppe sofort an: Sie startet den Geräteimport einer Schule, in der der Gruppe ein Gerät zugeordnet ist, das der Import nach dem [PXE-Flag](#geräteliste-pflegen) berücksichtigt. Dadurch wird die Startkonfiguration der Gruppe neu erzeugt. Gesucht wird zuerst in der gewählten Schule, als Globaladmin danach in den übrigen Schulen des Servers – ein Schuladmin wendet nur in seiner eigenen Schule an. Importiert wird nur die erste Schule, die die Gruppe verwendet.

| Meldung | Bedeutung |
|---------|-----------|
| *„Gruppe ‚…‘ wurde gespeichert und über den Geräteimport der Schule ‚…‘ angewendet.“* | Die Gruppe ist angewendet; die Meldung nennt die Schule, deren Import gelaufen ist. |
| *„Gruppe ‚…‘ wurde gespeichert. Noch startet kein Computer diese Gruppe, daher musste nichts angewendet werden.“* | Keinem passenden Gerät ist die Gruppe zugeordnet. |
| *„Gruppe ‚…‘ wurde gespeichert, aber nicht angewendet. Bitte wende die Geräteliste in der Geräteverwaltung an.“* | Der Import ist fehlgeschlagen. Die `start.conf` liegt auf dem Server; wenden Sie die Geräteliste der betroffenen Schule in der [Geräteverwaltung](#geräteverwaltung) mit **Anwenden** an. |

:::warning[Der Import übernimmt die gespeicherte Geräteliste]
Der Geräteimport ist derselbe, den **Anwenden** in der Geräteverwaltung auslöst. Er übernimmt die auf dem Server gespeicherte Geräteliste der Schule vollständig – auch Änderungen, die dort gespeichert, aber noch nicht angewendet wurden.
:::

:::caution[Die Gruppe wurde inzwischen geändert]
Hat jemand anderes die `start.conf` der Gruppe auf dem Server geändert, seit Sie den Editor geöffnet haben – etwa ein anderer Admin oder ein zweiter Tab –, speichert die Plattform nicht: Es wird nichts geschrieben und nichts angewendet. Die Meldung lautet *„Die start.conf dieser Gruppe wurde inzwischen geändert. Deine Änderungen wurden nicht gespeichert.“* **Neu laden** in der Meldung holt den aktuellen Stand und verwirft Ihre ungespeicherten Änderungen im Editor. Notieren Sie diese deshalb vorher.
:::

Bevor die Plattform eine `start.conf` schreibt, prüft sie deren Abschnitt `[LINBO]`. Ein `Cache`-Eintrag in einer Partitionssektion oder eine auskommentierte Zeile zählt dabei nicht. Eine `start.conf`, die Sie direkt auf dem Server ablegen, durchläuft diese Prüfung der Plattform nicht.

| Meldung | Ursache | Abhilfe |
|---------|---------|---------|
| *„Die start.conf nennt keine Gruppe. Ohne Group-Eintrag im [LINBO]-Abschnitt lädt LINBO die Gruppe nicht.“* | Es gibt keinen `Group`-Eintrag. | Tragen Sie den Gruppennamen als `Group` im Abschnitt `[LINBO]` ein. |
| *„Die start.conf nennt die Gruppe ‚…‘, wird aber unter ‚…‘ gespeichert. Der Dateiname ist die Identität der Gruppe; beide müssen übereinstimmen.“* | Der `Group`-Eintrag entspricht nicht dem Namen, unter dem die Gruppe gespeichert wird. | Setzen Sie `Group` auf den Namen, unter dem Sie speichern. |
| *„Die start.conf nennt keine Cache-Partition. LINBO kann eine Gruppe ohne Cache nicht starten.“* | Im Abschnitt `[LINBO]` ist keine Cache-Partition genannt. | Legen Sie eine Partition mit dem Preset *Cache* an. |

### Images

Die Ansichtswahl bietet vier Ansichten:

| Ansicht | Zeigt |
|---------|-------|
| **Speicher** | wie voll die Partition mit dem Image ist, dazu Partitionsgerät, Dateizahl und **Verwendet in** |
| **Kacheln** | Betriebssystem-Symbol, Größe, vorhandene Sidecars und die erste Zeile der Beschreibung |
| **Datenblatt** (Vorgabe) | Dateiname, Größe, Partition, Partitionsgröße, ob eine Prüfsumme vorliegt, Dateizahl, Aktualisierungszeitpunkt und **Verwendet in** |
| **Tabelle** | Name, Größe, **Verwendet in**, Sidecars und Aktualisierungszeitpunkt |

Die Suche findet ein Image über seinen Namen, seine Beschreibung und die Fehlermeldung, die die Plattform zu einem fehlerhaften Image anzeigt. Ein Klick auf eine Karte oder eine Zeile der **Tabelle** öffnet die Details des Images. Die Liste hat keine Schulauswahl.

Gruppen und Images verweisen aufeinander: Jede Ansicht der Gruppen nennt die Images, die eine Gruppe startet, und jede Ansicht der Images nennt unter **Verwendet in** die Gruppen, die ein Image starten. Die Zuordnung liest die Plattform aus den `start.conf`-Dateien.

:::note[Zwei Namen, ein Image]
Ein Image heißt nach seinem Verzeichnis auf dem Server (`debian13`); die Bilddatei darin trägt zusätzlich die Endung (`debian13.qcow2`). Angezeigt und in allen Aktionen verwendet wird der Name des Images, nicht der der Datei.
:::

:::note[Ein Image mit unlesbarer .info-Datei bleibt in der Liste]
Fehlt einem Image eine lesbare `.info`-Datei, führt der Server es nicht in seiner Bestandsliste. Die Plattform zeigt es trotzdem an; in der **Tabelle** trägt es den Vermerk *Nicht lesbar*, beim Überfahren erscheint die Meldung des Servers. **Herunterladen** ist gesperrt (*„Der Server kann die Datei dieses Images nicht lesen.“*), und im Editor sind die Beipack-Dateien nur zu lesen – speichern lässt sich dort nur der Name. Löschen bleibt möglich.
:::

Sidecars sind die Beipack-Dateien eines Images: Beschreibung (`.desc`), Info (`.info`), VDI-Konfiguration (`.vdi`), Torrent (`.torrent`), Maschinenkonto (`.macct`), Prüfsumme (`.md5`), Hashsumme (`.hash`), Registry (`.reg`), Pre-Start-Skript (`.prestart`) und Post-Sync-Skript (`.postsync`). In der Spalte **Sidecars** steht je vorhandener Datei ein Buchstabenkürzel; welcher Dateityp dahintersteht, erscheint beim Überfahren mit dem Mauszeiger. Der Detaildialog zeigt zusätzlich Dateiname, Image-Ordner, Pfad, Größe, MD5-Summe und die Dateien des Images, jeweils als **Image** oder **Beipack-Datei** gekennzeichnet. Liegt ein `.info`-Sidecar vor, kommen **Erstellt**, **Image-Größe**, **Partitionsgröße** und die **Beschreibung** hinzu.

:::note[Erstellt und Aktualisiert können auseinanderliegen]
**Erstellt** stammt aus dem `.info`-Sidecar und ist die Uhrzeit, die der Schulserver beim Erstellen des Images auf seiner eigenen Uhr gelesen hat – ohne Zeitzone. Die Plattform zeigt sie unverändert an. **Aktualisiert** dagegen ist ein absoluter Zeitpunkt und wird in die Zeitzone Ihres Browsers umgerechnet. Stehen Schulserver und Arbeitsplatz in derselben Zeitzone – der Normalfall –, passen beide Angaben zusammen; andernfalls unterscheiden sie sich um den Abstand der beiden Zonen.
:::

#### Image hochladen

**Image hochladen** steht in allen vier Ansichten zur Verfügung, solange kein Image ausgewählt ist. Bietet der Server den Upload nicht an, fehlt die Schaltfläche; legen Sie das Image dann direkt auf dem Server ab.

Zulässig sind diese Dateitypen; andere weist der Dialog ab und nennt dabei die abgelehnte Datei:

| Dateityp | Endungen |
|----------|----------|
| Image-Dateien | `.qcow2`, `.qdiff` |
| Beipack-Dateien hinter der Image-Endung | `.desc`, `.info`, `.vdi`, `.torrent`, `.macct`, `.md5`, `.hash` – etwa `debian13.qcow2.info` |
| Beipack-Dateien hinter dem Image-Namen | `.reg`, `.prestart`, `.postsync` – etwa `debian13.reg` |

Für den Namen eines neuen Images gelten dieselben Regeln wie beim [Duplizieren](#aktionen-eines-images), und zwar auch für den Dateinamen samt Endung. Ein Name, der sich von einem vorhandenen Image nur in Groß- und Kleinschreibung unterscheidet, wird abgewiesen.

Fehlt zu einer hochgeladenen `.qcow2`-Datei die `.info`-Datei – bei einem neuen Namen ebenso wie beim Ersetzen eines Images ohne `.info` –, weist der Dialog darauf hin: *„Zu ‚…‘ fehlt noch die .info-Datei. Ohne sie ist das Image unvollständig und lässt sich nicht verwalten, bis du die .info-Datei hochgeladen hast.“*

:::warning[Ein Upload unter vorhandenem Namen ersetzt das Image]
Laden Sie eine `.qcow2`-Datei unter dem Namen eines vorhandenen Images hoch, ersetzt der Upload dieses Image. Der Dialog nennt das betroffene Image schon im Hinweis zum Dateinamen; **Hochladen** fragt dann in einem zweiten Dialog nach, und erst **Ersetzen und hochladen** startet den Upload. **Abbrechen** kehrt zum Upload-Dialog zurück, Datei und Name bleiben erhalten.

Die bisherige Version legt der Server in einem Sicherungsordner ab, der unter **Sicherungen** nicht erscheint und sich nur direkt auf dem Server löschen lässt – bei großen Images belegt er entsprechend viel Speicherplatz. Das gilt auch, wenn Sie zu einem vorhandenen Image nur eine Beipack-Datei hochladen: Auch dann kopiert der Server das vollständige Image in diesen Ordner.
:::

Der Browser überträgt die Datei in Teilstücken von 16 MiB an die edulution-API, die sie an den Schulserver weiterreicht. Die Obergrenze für eine Datei liegt bei 100 GiB; wie Sie sie ändern, steht unter [Einrichtung](#einrichtung-für-administratoren).

- **Abbrechen** bricht die laufende Übertragung ab und verwirft zugleich die Daten, die der Server bereits entgegengenommen hat – es bleibt kein angefangenes Image auf dem Server zurück. Fällt **Abbrechen** in den Augenblick, in dem der Server das vollständig übertragene Image bereits fertigstellt, wartet die Plattform diesen Schritt ab; das Image liegt danach vollständig vor.
- Scheitert ein Teilstück unterwegs – die Verbindung reißt ab oder der Server antwortet mit einem Fehler –, wartet der Browser 2 Sekunden, beim zweiten Mal 5, prüft dann, ob das Teilstück doch angekommen ist, und sendet es andernfalls erneut. Scheitert auch der dritte Versuch, bricht der Upload ab. Weist der Server ein Teilstück ab, etwa wegen eines unzulässigen Image- oder Dateinamens, endet der Upload sofort mit der Meldung.
- Bricht die Übertragung ab, setzt ein erneuter Upload derselben Datei dort an, wo er stehengeblieben ist, und der Dialog weist mit *„Setzt einen abgebrochenen Upload bei N % fort“* darauf hin. Fortgesetzt wird nur im selben Browser, innerhalb von 24 Stunden und mit derselben Datei.

| Meldung | Ursache | Abhilfe |
|---------|---------|---------|
| *„Zu diesem Image-Namen gibt es noch kein Image. Lade zuerst die .qcow2-Datei hoch, sonst erscheint die Datei in keiner Liste“* | Sie haben eine Beipack-Datei für ein Image hochgeladen, das es nicht gibt. | Laden Sie zuerst die `.qcow2`-Datei hoch. |
| *„Der Dateiname passt nicht zum Image-Namen. Der Upload wurde abgelehnt, weil das Image sonst in keiner Liste erscheinen würde“* | Dateiname und Image-Name passen nicht zusammen. | Korrigieren Sie einen von beiden. |
| *„Diese Datei wird bereits hochgeladen“* | Dieselbe Datei desselben Images wird gerade übertragen, etwa aus einem zweiten Tab oder von einer anderen Administration. Der erste Upload läuft weiter. | Warten Sie, bis der erste Upload endet. |
| *„Die Datei ist größer als …. Bitte komprimiere die Datei oder wähle eine kleinere.“* | Die Datei überschreitet die Obergrenze für Uploads (Vorgabe 100 GiB). | Wählen Sie eine kleinere Datei oder heben Sie die Grenze an, siehe [Einrichtung](#einrichtung-für-administratoren). |
| *„Die auf dem Server abgelegte Datei hat nicht die Größe der gewählten Datei, daher wurde der Upload nicht abgeschlossen“* | Am Ende weicht die Größe der abgelegten Datei von der gewählten ab. Die Plattform behält den Vermerk über den angefangenen Upload. | Laden Sie dieselbe Datei erneut hoch; der Upload setzt fort. |

#### Aktionen eines Images

Die Aktionsleiste bietet die Aktionen an, sobald Images ausgewählt sind; Aktionen für ein einzelnes Image stehen nur bei genau einer Auswahl zur Wahl.

| Aktion | Wirkung |
|--------|---------|
| **Herunterladen** | lädt die Image-Datei herunter; gesperrt, solange ein anderer Download läuft |
| **Bearbeiten** | öffnet den [Sidecar-Editor](#beschreibung-und-skripte-bearbeiten) |
| **Sicherungen** | listet die Sicherungen des Images zum Wiederherstellen oder Löschen |
| **Duplizieren** | kopiert das Image samt Beschreibung, Registry-Patch und Skripten, aber ohne Sicherungen |
| **Diff ändern** | erscheint nur, wenn zum Image ein Differenzimage existiert |
| **Diff löschen** | löscht die Differenzimages aller ausgewählten Images, die eines haben |
| **Löschen** | löscht die ausgewählten Images mit Sicherungen, Differenzimage und Beipack-Dateien |
| **Dienste neu starten** | startet den Multicast- und den Torrent-Dienst des Servers neu; steht auch ohne Auswahl zur Verfügung |

Nach Änderungen an Images starten Sie mit **Dienste neu starten** den Multicast- und den Torrent-Dienst des Servers neu, damit beide die geänderten Images verteilen. Die Plattform fragt vorher nach; laufende Übertragungen werden beim Neustart unterbrochen. Danach nennt eine Meldung die neu gestarteten Dienste. Scheitert der Neustart oder überschreitet er sein Zeitlimit, nennt die Meldung den Grund, den die Linuxmuster-API zurückgibt. Die Dienste gelten für den ganzen Server: Auch ein Schuladmin startet sie für alle Schulen neu. Ältere Linuxmuster-API-Versionen bieten den Neustart nicht an (siehe [Mindestversionen der Linuxmuster-API](#mindestversionen-der-linuxmuster-api)).

Beim Duplizieren und beim Umbenennen erlaubt der Name Buchstaben, Ziffern, Leerzeichen sowie `.`, `_`, `+` und `-` und ist höchstens 200 Zeichen lang; er darf nicht mit einem Punkt beginnen und keine zwei Punkte hintereinander enthalten. Einen Namen, den ein Image bereits trägt, weist der Dialog ab – auch in anderer Groß- und Kleinschreibung und beim Duplizieren auch den Namen der Vorlage.

Meldet die Linuxmuster-API beim **Löschen** einen Serverfehler oder antwortet sie nicht, prüft die Plattform anhand der Imageliste nach: Führt der Server das Image dort nicht mehr, gilt es als gelöscht.

:::note[Große Images brauchen Zeit – und werden nicht wiederholt]
**Duplizieren**, **Wiederherstellen**, Umbenennen und die Löschaktionen verschieben oder kopieren die vollständigen Image-Dateien auf dem Server. Dafür gilt ein eigenes Zeitlimit von zehn Minuten. Wird es überschritten, meldet die Oberfläche einen Fehler, obwohl der Server weiterarbeitet und die Aktion noch gelingen kann. Die Plattform wiederholt sie deshalb nicht von selbst – beim Wiederherstellen entstünde sonst eine weitere Sicherung. Warten Sie, bis die Imageliste den Stand des Servers zeigt, bevor Sie die Aktion erneut auslösen; wie Sie das Zeitlimit anheben, steht unter [Einrichtung](#einrichtung-für-administratoren).
:::

#### Beschreibung und Skripte bearbeiten

Der Editor öffnet für das Image selbst, für sein Differenzimage und für jede einzelne Sicherung. Er hat je eine Registerkarte für die Dateien, die Sie ändern können: **Beschreibung** (`.desc`), **Info** (`.info`), **VDI-Konfiguration** (`.vdi`), **Registry** (`.reg`), **Pre-Start Script** (`.prestart`) und **Post-Sync Script** (`.postsync`).

- Beim Differenzimage entfällt **Post-Sync Script**, denn dieses Skript führt der Server nur am Basisimage.
- Für VDI-Konfiguration, Registry-Patch und Skripte bietet der Editor **Aus anderem Image übernehmen** an: Die Auswahl listet alle Images, die für diesen Dateityp Inhalt haben, und übernimmt ihn in das Feld.
- Umbenannt wird ein Image über das Namensfeld im Editor seines Basisimages.
- Die `.info`-Datei ist Pflicht: Ohne sie lässt sich das Image nicht mehr einlesen. Ist ihr Feld leer, sperrt der Editor das Speichern und weist darauf hin. Der Inhalt stammt vom Server – Zeitstempel, Image- und Partitionsgröße – und sollte nur mit Bedacht geändert werden.

:::caution[Ein leeres Feld löscht die Datei]
Der Server schreibt beim Speichern immer alle Beipack-Dateien neu und löscht dabei jede, für die kein Inhalt ankommt. Ein Feld, das Sie leeren, löscht also die zugehörige Datei auf dem Server.
:::

Hat jemand anderes die Beipack-Dateien geändert, seit Sie den Editor geöffnet haben, speichert die Plattform nicht, sondern meldet *„Die Beipack-Dateien dieses Images wurden inzwischen geändert. Deine Änderungen wurden nicht gespeichert.“* **Neu laden** in der Meldung holt den aktuellen Stand und verwirft dabei Ihre Eingaben.

#### Sicherungen

Über das Zahnrad einer Zeile (*„Einstellungen der Sicherung vom …“*) öffnen Sie den Editor für die Beipack-Dateien dieser Sicherung. Der mit **Basisimage** gekennzeichnete Eintrag ist das Image selbst, keine Sicherung.

Vor dem Wiederherstellen legt der Server eine neue Sicherung des aktuellen Images an. Zwei Wiederherstellungen desselben Images innerhalb derselben Minute schlagen fehl; ein erneuter Versuch nach einer Minute gelingt.

## Versionsübersicht

Die Seite **Versionsübersicht** listet die Versionen der beteiligten Linuxmuster-Komponenten – nützlich, um die Mindestversionen der nächsten Abschnitte zu prüfen.

Sie ist die einzige Seite der App, die weder die Versionsprüfung noch die Rollenprüfung der Voraussetzungen am Seitenanfang durchläuft. Sie bleibt deshalb erreichbar, wenn die Linuxmuster-API zu alt oder nicht erreichbar ist oder dem Konto die Rolle fehlt – über den Eintrag **Versionsübersicht** in der Seitenleiste; die **Übersicht** ist dann durch die Meldung ersetzt und bietet die Kachel nicht an.

Die Versionen lädt die Plattform bei der Anmeldung für Globaladmins und Schuladmins; Globaladmins lädt die Seite sie beim Öffnen erneut. Bei anderen Rollen bleibt die Liste leer. Ist die Linuxmuster-API nicht erreichbar, hat die Plattform keine Versionen und die Liste bleibt ebenfalls leer.

## Mindestversionen der Linuxmuster-API

Einzelne Funktionen setzen eine neuere Linuxmuster-API voraus:

| Version | Funktion | Ohne diese Version |
|---------|----------|--------------------|
| 7.3.26 | die App **Schulserver** | Eine Meldung ersetzt alle Seiten außer der **Versionsübersicht**, siehe Voraussetzungen am Seitenanfang. |
| 7.3.35 | der Bereich **LINBO** und die Registerkarte **Geräte** | *„Diese LINBO-Funktion benötigt mindestens linuxmuster-api 7.3.35. Der verbundene Server ist älter.“* |
| 7.4.8 | **Neu starten**, **Herunterfahren**, **Aktion schicken** (Hosts und Gruppen), **Raum-Aktion**, **Sitzungen** | Die Schaltflächen erscheinen nicht. |
| 7.4.10 | **Bearbeiten**, **Sicherungen**, **Duplizieren** und die Löschaktionen der Images | *„Diese LINBO-Funktion benötigt mindestens linuxmuster-api 7.4.10. Der verbundene Server ist älter.“* |
| 7.4.11 | die Unterseite **Gruppen**; die Zuordnung von Images und Gruppen (**Verwendet in**) | Die Unterseite entfällt, der Bereich öffnet auf **Images**; die Zuordnung fehlt. |
| 7.4.12 | **Status** nennt das laufende System eines Hosts | **Status** zeigt nur **Online** oder **Offline**. |
| 7.4.13 | Zugriff von Schuladmins auf **LINBO**; **Sicherungen** und **VDI** einer Gruppe; **linbo.iso**; Beispielkonfigurationen als Vorlage | Der Bereich entfällt für Schuladmins; die Funktionen erscheinen nicht. |
| 7.4.14 | **Dienste neu starten** bei den Images | *„Diese LINBO-Funktion benötigt mindestens linuxmuster-api 7.4.14. Der verbundene Server ist älter.“* |

## Einschränkungen in dieser Version

Eine laufende Sitzung lässt sich aus der Plattform heraus **nicht abbrechen** und nicht mitverfolgen, wie es `tmux attach` auf der Konsole erlaubt. Sie sehen den Lauf und sein Protokoll, beenden können Sie ihn nur auf dem Server.

## Einrichtung (für Administratoren)

- Die **Plattform** stellen Sie unter [Einstellungen (Settings) → Globale Einstellungen → Allgemein](../edulution-plattform/konfiguration/einstellungen.md#allgemein) auf **Linuxmuster**.
- Welche Bereiche dieser App sichtbar sind und wie sie beschriftet werden, hängt zusätzlich vom [Organisationstyp](../edulution-plattform/konfiguration/einstellungen.md#organisationstyp) ab.
- Die Verbindung zum Schulserver richten Sie nach der Anleitung [Anpassung am Linuxmuster-Server](./installation.md) ein.
- Die Obergrenze für den Upload eines Images liegt bei 100 GiB. Um sie zu ändern, setzen Sie die Umgebungsvariable `LINBO_MAX_UPLOAD_BYTES` des edulution-API-Dienstes auf einen Wert in Bytes.
- Dauern Kopier- und Verschiebeaktionen an sehr großen Images länger als zehn Minuten, setzen Sie die Umgebungsvariable `LMN_API_FILE_OPERATION_TIMEOUT_MS` des edulution-API-Dienstes auf einen höheren Wert in Millisekunden; ohne Angabe gilt `600000`.

:::note[Viele gleichzeitige Anmeldungen]
Die Plattform meldet jeden Benutzer von ihrer eigenen Adresse aus an der Linuxmuster-API an. Antwortet die API mit einer Begrenzung (HTTP 429) oder mit 503, wiederholt die Plattform den Versuch mit Wartezeiten und meldet erst danach *„Die LMN-API ist gerade ausgelastet. Bitte versuche es in Kürze erneut.“* (HTTP 503). Das kann vorkommen, wenn sich viele Benutzer zur gleichen Zeit anmelden, etwa zu Stundenbeginn. Ob und wie sich die Begrenzung der Linuxmuster-API einstellen lässt, steht in deren Dokumentation.
:::

## Siehe auch

- [Einstellungen (Settings)](../edulution-plattform/konfiguration/einstellungen.md) – weitere globale Konfigurationsoptionen
- [Satelliten verwalten](../edulution-satellite/verwaltung.md) – Standorte anbinden und Dienste betreiben
- [Administration](../edulution-plattform/konfiguration/administration.md) – allgemeine Admin-Aufgaben
