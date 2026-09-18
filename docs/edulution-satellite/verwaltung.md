---
sidebar_custom_props:
  audience: admin
---

# Satelliten verwalten

Satelliten sind eigenständige edulution-Geräte (Appliances) an entfernten Standorten, die über einen WireGuard-Tunnel mit Ihrer zentralen edulution-Instanz verbunden sind. Nach der Kopplung lassen sich ihre Netzwerke (VLANs), Authentifizierungs-Anbieter (LDAP) und Dienste wie der mDNS-Repeater und der RADIUS-Server zentral aus der edulution Plattform heraus verwalten und überwachen.

:::tip[Satelliten erstmalig in Betrieb nehmen]
Diese Seite beschreibt den **laufenden Betrieb** in der edulution Plattform. Die Erstinbetriebnahme eines Geräts – Apps installieren, WireGuard starten, Gerät koppeln und zentrale Netze bereitstellen – ist unter [edulution Satellite](./index.md) beschrieben.
:::

Die Verwaltung gliedert sich in zwei Bereiche:

- **Einstellungen → Satellites** – Satelliten koppeln, genehmigen, einer Schule zuweisen und aktualisieren (nur Global-Admin).
- **App „Satellites"** – den laufenden Betrieb eines ausgewählten Satelliten einsehen und konfigurieren (Übersicht, Netzwerke, Authentifizierung, Dienste, LINBO).

:::warning[Nur Global-Admin]
Das Koppeln und Verwalten von Satelliten in den **Einstellungen** ist ausschließlich für Global-Admins zugänglich. Der Schulfilter im Satelliten-Bereich erscheint ebenfalls nur für Global-Admins mit mehr als einer Schule.
:::

## Lebenszyklus eines Satelliten

Ein Satellit durchläuft mehrere Zustände, bis er betriebsbereit ist:

| Status | Bedeutung |
|--------|-----------|
| **Ausstehend** (pending) | Der Satellit hat sich registriert und wartet auf Ihre Genehmigung. |
| **Gekoppelt** (paired) | Der Satellit wurde über seine Seriennummer vorab gekoppelt und meldet sich bei der nächsten Verbindung. |
| **Akzeptiert** (accepted) | Der Satellit ist freigegeben und wird im Satelliten-Bereich angezeigt. |
| **Abgelehnt** (rejected) | Die Verbindungsanfrage wurde abgewiesen. |
| **Online** | Ein akzeptierter Satellit ist aktuell erreichbar (regelmäßiger Heartbeat). |

Nur **akzeptierte** Satelliten erscheinen im Satelliten-Bereich und können dort konfiguriert werden.

## Satelliten koppeln und verwalten (Einstellungen)

Öffnen Sie als Global-Admin die **Einstellungen** (Zahnrad-Symbol unten im Menü) und wählen Sie in der Seitenleiste **Satellites**. Unter dem Abschnitt **Verbundene Satellites** werden alle Satelliten – unabhängig von ihrem Status – in einer gemeinsamen Liste angezeigt; jeder Eintrag ist mit seinem aktuellen Status gekennzeichnet. Die Liste aktualisiert sich automatisch in regelmäßigen Abständen.

Solange noch kein Satellit vorhanden ist, erscheint nur die Schaltfläche zum Hinzufügen.

### Satellit hinzufügen

1. Klicken Sie auf die Schaltfläche mit dem **Plus-Symbol** (*Satellit hinzufügen*).
2. Geben Sie im Dialog **Satellit hinzufügen** die **Seriennummer** des Geräts ein (z. B. `SN-1234567890`).
3. Bestätigen Sie mit **Hinzufügen**.

Bei Erfolg erscheint die Meldung, dass der Satellit hinzugefügt wurde und auf die erste Verbindung gewartet wird.

:::note[Bereits gekoppelte Geräte]
Ist die Seriennummer bereits mit einer anderen edulution-Instanz gekoppelt, meldet der Dialog dies und nennt – sofern bekannt – den aktuellen Besitzer. Die Kopplung muss dann zuerst an der anderen Instanz aufgehoben werden.
:::

### Einen Satelliten genehmigen oder ablehnen

Für jeden Satelliten werden Name, Status, Version, zugewiesene Schule, URL sowie – sofern gemeldet – Hostname, letzter Kontakt, Modell, Seriennummer und MAC-Adressen angezeigt. Bei akzeptierten Satelliten erscheinen zusätzlich Statusanzeigen der laufenden Dienste (● aktiv / ○ gestoppt). Je nach Status stehen folgende Aktionen zur Verfügung:

| Status | Verfügbare Aktionen |
|--------|---------------------|
| Ausstehend | **Akzeptieren**, **Ablehnen**, **Entfernen** |
| Abgelehnt | **Akzeptieren**, **Entfernen** |
| Akzeptiert | **Updates prüfen** (wenn online), **Entkoppeln**, **Entfernen**, Schule zuweisen |

- **Akzeptieren** gibt den Satelliten frei; er erscheint anschließend im Satelliten-Bereich.
- **Ablehnen** weist die Anfrage ab.
- **Entkoppeln** löst die Kopplung, sodass das Gerät an einer anderen Instanz verwendet werden kann.
- **Entfernen** löscht den Eintrag aus der Liste.

### Schule zuweisen

Akzeptierten Satelliten können Sie über das Auswahlfeld eine **Schule** zuordnen. Die Zuordnung steuert, unter welcher Schule der Satellit im Satelliten-Bereich gruppiert und gefiltert wird. Über **Keine Schule** entfernen Sie die Zuordnung wieder.

### WireGuard-Tunnel

Sobald ein Tunnel besteht, zeigt der Satelliten-Eintrag einen Abschnitt **WireGuard-Tunnel** mit **Tunnel-IP**, **Peer-Endpunkt** und **öffentlichem Schlüssel**. Über **WG neu konfigurieren** senden Sie die WireGuard-Konfiguration erneut an den Satelliten:

- Ist der Satellit online, wird die Konfiguration sofort übertragen.
- Ist er offline, wird sie bei der nächsten Verbindung angewendet.

### Updates

Bei akzeptierten, online erreichbaren Satelliten können Sie über **Updates prüfen** nach neuen Versionen suchen. Steht ein Update bereit, wird die aktuelle Version mit der verfügbaren Zielversion angezeigt, und Sie können einzelne Komponenten gezielt aktualisieren. Ist alles aktuell, erscheint der Hinweis **Aktuell**.

## Der Satelliten-Bereich

Den laufenden Betrieb eines Satelliten verwalten Sie in der App **Satellites** (sofern für Sie freigeschaltet). Am oberen Rand befindet sich die Satelliten-Auswahl, darunter wechseln Sie über die Seitenleiste zwischen **Übersicht**, **Netzwerke**, **Authentifizierung**, **Diensten** und **LINBO**.

### Satellit auswählen

Über das Auswahlfeld **Satellit** wählen Sie das gewünschte Gerät. Jeder Eintrag ist mit seinem Verbindungszustand gekennzeichnet (`[Online]` bzw. `[Offline]`) und – falls zugewiesen – mit der Schule. Global-Admins mit Satelliten an mehreren Schulen sehen zusätzlich das Feld **Schule**, mit dem sich die Auswahl auf eine Schule (oder **Alle Schulen**) einschränken lässt. Die Liste enthält ausschließlich akzeptierte Satelliten und wird laufend aktualisiert.

Ist kein Satellit ausgewählt, erscheint der Hinweis, einen Satelliten auszuwählen. Ist der gewählte Satellit offline, wird statt der Inhalte die Meldung **Satellit ist offline** angezeigt.

### Übersicht

Die **Übersicht** fasst den Zustand des ausgewählten Satelliten zusammen:

- **Satellite-Übersicht** – Status (Online/Offline), Version, Laufzeit und Seriennummer.
- **Kennzahlen-Kacheln** – Anzahl der **Netzwerke**, **Container** und **Auth-Anbieter**. Ein Klick auf eine Kachel führt direkt zur jeweiligen Unterseite.
- **Container-Status** – ein Ringdiagramm mit der Zahl laufender und gestoppter Container.
- **Ressourcen** – Auslastung von CPU, Arbeitsspeicher und Speicher als Balken. Neben der Auslastung wird die Plattform (z. B. MikroTik-Board und Architektur) angezeigt.

Die Ressourcen-Balken sind nach Auslastung eingefärbt:

| Auslastung | Farbe | Bedeutung |
|------------|-------|-----------|
| unter 65 % | grün | normaler Bereich |
| 65 % bis 85 % | gelb | erhöhte Auslastung |
| ab 85 % | rot | kritische Auslastung |

:::note[Hardware- und VM-Satelliten]
Bei MikroTik-basierten Geräten werden die detaillierten Hardware-Metriken bevorzugt verwendet; auf VM-Satelliten dienen die Host-Werte als Grundlage. Liefert die Hardware keine Metriken, erscheint statt der Balken ein entsprechender Hinweis.
:::

### Netzwerke

Die Unterseite **Netzwerke** verwaltet die VLAN-Netzwerke des Satelliten. Die Tabelle zeigt **VLAN**, **Name**, **Eltern-Interface**, **Adresse**, **Maske** und **Satelliten-IP**. Über die Schaltflächen am unteren Rand sowie die Aktionen je Zeile können Sie Netzwerke anlegen, bearbeiten, löschen und die Liste neu laden.

Beim Anlegen oder Bearbeiten füllen Sie folgende Felder aus:

| Feld | Beschreibung |
|------|--------------|
| **Name** | Bezeichnung des Netzwerks |
| **VLAN-ID** | numerische VLAN-Kennung (beim Bearbeiten nicht änderbar) |
| **Eltern-Interface** | physisches Interface, auf dem das VLAN aufsetzt (Auswahl) |
| **Adresse** | Netzadresse, z. B. `10.0.0.0` |
| **Maske** | Präfixlänge, z. B. `24` |
| **Satelliten-IP** | IP-Adresse des Satelliten in diesem Netz, z. B. `10.0.0.1` |

### Authentifizierung

Unter **Authentifizierung** pflegen Sie die LDAP-Authentifizierungs-Anbieter des Satelliten. Die Tabelle zeigt **Name**, **Server**, **Port**, **SSL** und **Base DN**. Neben Anlegen, Bearbeiten, Löschen und Neuladen können Sie einen ausgewählten Anbieter über **Testen** prüfen – das Ergebnis wird als **Verbindung erfolgreich** oder **Verbindung fehlgeschlagen** gemeldet.

Der Dialog umfasst folgende Felder:

| Feld | Beschreibung |
|------|--------------|
| **Name** | Bezeichnung des Anbieters (beim Bearbeiten nicht änderbar) |
| **Server** | Adresse des LDAP-Servers |
| **Port** | LDAP-Port (Standard `389`) |
| **SSL** | verschlüsselte Verbindung aktivieren |
| **Zertifikat prüfen** | Server-Zertifikat validieren |
| **Bind-Benutzer** | Benutzer für die LDAP-Anmeldung |
| **Passwort** | Passwort des Bind-Benutzers |
| **Base DN** | Basis-DN für die Suche |
| **Benutzerfilter** | LDAP-Filter, Standard `(uid={username})` |

### Dienste

Die Unterseite **Dienste** bündelt die laufenden Dienste in drei ausklappbaren Abschnitten:

- **mDNS-Repeater** – leitet mDNS-Anfragen zwischen zwei Netzwerken weiter. Die Tabelle zeigt **Name**, **Netzwerk 1**, **Netzwerk 2** (jeweils als VLAN) und den **Status**. Einzelne Repeater lassen sich **starten**, **stoppen** und löschen.
- **RADIUS-Server** – stellt die Netzwerk-Authentifizierung bereit. Die Tabelle zeigt **Name**, **Netzwerk** (VLAN), den zugeordneten **Auth**-Anbieter und den **Status**. Auch hier können Einträge gestartet, gestoppt und gelöscht werden.
- **Container** – listet die auf dem Satelliten laufenden Container mit **Name**, **Status** und zugeordneten **Netzwerken** (rein informativ).

Über die Aktion zum Neuladen aktualisieren Sie alle drei Listen.

### LINBO

Der Eintrag **LINBO** zeigt, was die LINBO-Installation *des Satelliten* über die Rechner an seinem Standort weiß. Er ist unabhängig vom Bereich **LINBO** der App **Schulserver**: dort sehen Sie die LINBO-Installation Ihres zentralen Linuxmuster-Servers, hier die des ausgewählten Satelliten.

Der Bereich gliedert sich in die Unterseiten **Konfigurationen**, **Hosts**, **Images**, **Synchronisation** und **Einstellungen**.

#### Konfigurationen

Die Unterseite **Konfigurationen** listet die Hardwaregruppen, die der Satellit vom Linuxmuster-Server übernommen hat – also die `start.conf`-Dateien, die in seinem Zwischenspeicher liegen. Die Daten stammen ausschließlich vom ausgewählten Satelliten.

Oben rechts wählen Sie zwischen denselben vier Ansichten wie in der [Gruppenliste des Schulservers](../edulution-server/linuxmuster.md#gruppen): **Plattenkarte** (Vorgabe), **Kacheln**, **Datenblatt** und **Tabelle**. Karten und Tabellenspalten sind dort beschrieben und hier dieselben. Es entfallen nur die Auswahlkästchen, die Kachel zum Anlegen und die Aktionen, weil sich die Konfigurationen hier nicht ändern lassen.

:::note[Die Ansichtswahl gilt für beide Bereiche]
Die gewählte Ansicht wird zusammen mit der Gruppenliste des Schulservers gespeichert. Stellen Sie hier auf **Datenblatt** um, erscheint auch die Gruppenliste im Bereich **LINBO** der App **Schulserver** in dieser Ansicht – und umgekehrt.
:::

Über das Suchfeld schränken Sie die Liste auf einen Gruppennamen oder einen Dateinamen wie `start.conf.raum101` ein. Die Zahl der zugeordneten Rechner stammt aus der Hostliste desselben Satelliten: gezählt werden die Rechner, die der Satellit dieser Gruppe zuordnet, nicht die des Linuxmuster-Servers.

:::note[Jede Gruppe wird einzeln gelesen]
Der Satellit liefert in seiner Gruppenliste keine `start.conf`. Die Plattform liest deshalb beim Öffnen und beim Neuladen die `start.conf` jeder Gruppe einzeln vom Satelliten und wertet sie aus wie am Schulserver. Die Karten zeigen damit dieselben Angaben, einschließlich Cache, Download-Typ und der verwendeten Images. Bei vielen Gruppen erscheint die Liste erst, wenn alle Dateien gelesen sind; bis dahin läuft die Ladeanzeige.
:::

Als **Aktualisiert** zeigt die Plattform den Zeitstempel, den der Satellit mit der GRUB-Konfiguration der Gruppe übernommen hat, bei einer Gruppe ohne GRUB-Konfiguration den Zeitpunkt ihrer Synchronisation. Die letzte Änderung der `start.conf` ist das nicht.

Durch Anklicken einer Karte oder Tabellenzeile öffnen Sie die Vorschau. Sie liest die Datei im Moment des Öffnens erneut vom Satelliten und hat diese Registerkarten:

- **Zusammenfassung** – die ausgewertete `start.conf` mit den gesetzten Schlüsseln und dem Plattenlayout, in derselben Darstellung wie im Bereich **LINBO** der App **Schulserver**.
- **Rohdaten** – der unveränderte Inhalt der Datei.

Liegt dem Satelliten für die Gruppe eine GRUB-Konfiguration vor, zeigt die Registerkarte **GRUB cfg** sie zusätzlich. Für eine Gruppe, der noch kein Rechner zugeordnet ist, hat der Satellit keine; die Registerkarte entfällt dann.

:::note[Nur Anzeige]
Die Konfigurationen des Satelliten lassen sich nicht anlegen, bearbeiten, duplizieren oder löschen. Sie stammen aus der Synchronisation mit dem Linuxmuster-Server; geändert werden sie deshalb am Server, nicht am Satelliten. Mit der Aktion zum Neuladen holen Sie den aktuellen Stand.
:::

:::note[Wenn eine Datei nicht gelesen werden kann]
Die Plattform unterscheidet drei Fälle. Lässt sich die Liste nicht laden, erscheint über der Liste ein Hinweis, statt eine leere Liste zu zeigen. Lässt sich eine einzelne `start.conf` nicht lesen – etwa weil die Datei auf dem Satelliten fehlt, obwohl die Gruppe noch in der Liste steht –, erscheint die Gruppe als eine ohne `start.conf`, und die Vorschau meldet den Lesefehler ausdrücklich. Eine vorhandene, aber leere Datei behandelt die Vorschau wie eine fehlende: Sie zeigt dann nur die GRUB-Konfiguration oder, wenn es auch die nicht gibt, den Hinweis, dass die Gruppe weder eine `start.conf` noch eine GRUB-Konfiguration hat.
:::

#### Hosts

Die Tabelle listet alle Rechner, die der Satellit kennt, mit **Hostname**, **MAC-Adresse**, **IP**, **Gruppe**, **Raum**, **Status**, **Abbild** und **Zuletzt gesehen**. Über das Suchfeld schränken Sie die Liste auf einen Hostnamen ein, über das Filtersymbol daneben auf eine oder mehrere **Gruppen**. Beide Filter arbeiten im Browser: die Liste wird vollständig geladen, sodass das Filtern ohne erneute Abfrage des Satelliten geschieht.

Die Spalte **Status** nennt den Betriebszustand, den der Satellit zuletzt gemeldet hat:

| Status | Bedeutung |
|--------|-----------|
| **Online** | Der Rechner hat sich innerhalb des Meldeintervalls gemeldet. |
| **Offline** | Innerhalb des Meldeintervalls kam keine Meldung. |
| **Überträgt** | Der Rechner überträgt gerade ein Abbild. |

:::note[Wann ein Rechner als offline gilt]
Maßgeblich ist das Meldeintervall des Satelliten – standardmäßig **300 Sekunden**. Ein Rechner, der sich länger nicht gemeldet hat, erscheint als *Offline*, auch wenn er tatsächlich noch läuft. Meldet der Satellit einen Zustand, den die Plattform nicht kennt, wird dieser unverändert angezeigt, statt ihn als *Unbekannt* zu verwerfen.
:::

Die Spalte **Abbild** vergleicht das Abbild auf dem Rechner mit dem des Satelliten und nennt darunter den Namen des Abbilds:

| Anzeige | Bedeutung |
|---------|-----------|
| **Aktuell** | Der Rechner hat den Stand des Satelliten. |
| **Veraltet** | Auf dem Satelliten liegt eine neuere Fassung. |
| **Nie synchronisiert** | Der Rechner hat noch kein Abbild bezogen. |
| **Unbekannt** | Der Satellit meldet für diesen Rechner keinen Abgleichsstand. |

:::note[Nur Anzeige]
Die Hostliste des Satelliten lässt sich nicht bearbeiten. Die Rechner stammen aus der Synchronisation mit dem Linuxmuster-Server und werden auf dem Satelliten zwischengespeichert; angelegt, geändert und gelöscht werden sie deshalb am Server, nicht am Satelliten. Mit der Aktion zum Neuladen holen Sie den aktuellen Stand.
:::

:::note[Hostliste und Abbild-Stand werden getrennt geladen]
Beide Angaben stammen aus verschiedenen Abfragen. Scheitert nur der Abbild-Stand, stehen die Rechner trotzdem in der Tabelle, in der Spalte **Abbild** alle mit *Unbekannt*. Scheitert die Hostliste, bleibt die Tabelle leer. In beiden Fällen meldet die Plattform den Fehler.
:::

#### Images

Die Unterseite **Images** verwaltet die LINBO-Images, die auf dem Satelliten selbst liegen, und gleicht sie mit denen des Schulservers ab. Oben rechts wählen Sie zwischen denselben vier Ansichten wie in der [Imageliste des Schulservers](../edulution-server/linuxmuster.md#images): **Datenblatt** (Vorgabe), **Kacheln**, **Speicher** und **Tabelle**. In allen Ansichten schränken Sie die Liste über das Suchfeld auf einen Namen ein.

:::note[Die Ansichtswahl gilt für beide Bereiche]
Die gewählte Ansicht wird zusammen mit der Imageliste des Schulservers gespeichert. Stellen Sie hier auf **Speicher** um, erscheint auch die Imageliste im Bereich **LINBO** der App **Schulserver** in dieser Ansicht – und umgekehrt.
:::

Ein Klick auf eine Karte öffnet die Beipack-Dateien des Images; für ein Image im Altformat wird das wie bei der Zeilenaktion mit einem Hinweis abgelehnt. Die übrigen Aktionen – Prüfsumme, Sicherungen, Übertragen und Löschen – stehen nur in der **Tabelle** zur Verfügung.

:::note[Die Karten zeigen weniger als am Schulserver]
Die Imageliste des Satelliten enthält weder die Beschreibung noch Partitionsangaben oder die Prüfsumme. Beschreibung, Partition und Partitionsgröße bleiben in den Karten deshalb leer, und die Füllanzeige der Ansicht **Speicher** entfällt. Das **Datenblatt** weist bei jedem Image *keine Prüfsumme* aus, auch wenn auf dem Satelliten eine hinterlegt ist – ob eine vorliegt, zeigt erst **Prüfsumme prüfen**.
:::

Die Tabelle zeigt **Image**, **Typ**, **Größe**, **Status**, **Abgleich** und **Geändert**.

| Spalte | Bedeutung |
|--------|-----------|
| **Typ** | **Basisimage** oder **Differenzimage** |
| **Status** | **Verfügbar** – regulär im Imageverzeichnis abgelegt; **Altformat** – außerhalb der Imageverzeichnisse |
| **Abgleich** | Vergleich mit dem Schulserver: **Satellit neuer**, **Server neuer**, **Gleich alt**, **Nur am Satelliten**, **Nur am Server** oder **Unbekannt** |

Images, die nur auf dem Schulserver liegen, führt die **Tabelle** zusätzlich auf: mit **Nur am Server** im Abgleich, Größe und Datum vom Server und ohne Status. Für sie steht nur **Vom Server holen** bereit; die übrigen Aktionen lehnt die Plattform mit einem Hinweis ab, weil das Image auf dem Satelliten noch fehlt. In den Kartenansichten erscheinen solche Images nicht, denn die Karten zeigen die Images auf dem Satelliten.

:::note[Images im Altformat]
Für ein Image im Altformat bietet der Satellit keine Detail- und Änderungsrouten an. Die Aktionen dieser Zeile – Prüfsumme, Sicherungen, Beipack-Dateien und Löschen – werden deshalb nicht ausgeführt, sondern mit einem Hinweis abgelehnt.
:::

In der Tabelle stehen je Zeile folgende Aktionen bereit:

| Aktion | Wirkung |
|--------|---------|
| **Prüfsumme prüfen** | vergleicht das Image mit der hinterlegten Prüfsumme |
| **Sicherungen** | öffnet die Sicherungen des Images |
| **Bearbeiten** | öffnet die Beipack-Dateien des Images |
| **Vom Server holen** | ersetzt das Image auf dem Satelliten durch das des Schulservers |
| **Zum Server übertragen** | ersetzt das Image auf dem Schulserver durch das des Satelliten |
| **Löschen** | löscht das Image samt seinem Verzeichnis |

##### Prüfsumme prüfen

Der Satellit berechnet die Prüfsumme und meldet, ob sie mit der hinterlegten übereinstimmt. Einen Fortschritt meldet er dabei nicht. Bei großen Images dauert die Berechnung länger, als die Verbindung zum Satelliten zulässt; die Prüfung läuft dann auf dem Satelliten weiter, ihr Ergebnis ist in der Plattform aber nicht mehr abrufbar. Ist für das Image keine Prüfsumme hinterlegt, wird auch das gemeldet.

##### Übertragen

Welche Richtung angeboten wird, entscheidet die Plattform aus dem Vergleich mit dem Schulserver:

- Liegt das Image nur auf einer Seite, ist genau die Richtung möglich, die es auf die andere bringt.
- Lässt sich nicht feststellen, welche Kopie neuer ist, bleiben **beide** Richtungen gesperrt.
- Würde die Übertragung die neuere Kopie durch die ältere ersetzen, meldet die Plattform, welche Kopie neuer ist, und startet die Übertragung **nicht**.

:::warning[Was eine Übertragung überschreibt]
**Vom Server holen** löscht das Imageverzeichnis auf dem Satelliten vollständig – einschließlich aller dortigen Sicherungen und Beipack-Dateien – und ersetzt es durch den Stand des Servers. **Zum Server übertragen** überschreibt das Image auf dem Schulserver, das auch andere Satelliten nutzen. Beide Schritte lassen sich nicht rückgängig machen.
:::

Eine gestartete Übertragung meldet der Satellit nicht zurück. Die Plattform bestätigt nur den Start; den Ausgang sehen Sie, wenn Sie die Liste später neu laden.

:::note[Wenn der Abgleich nicht verfügbar ist]
Antwortet der Schulserver nicht auf den Vergleich, bleibt die Spalte **Abgleich** ohne Aussage und es wird keine Übertragungsrichtung angeboten. Die Imageliste selbst bleibt nutzbar.
:::

##### Sicherungen

Es öffnet sich derselbe Dialog wie im Bereich **LINBO** der App **Schulserver**. Er listet die Sicherungen des Images mit Zeitpunkt, Dateizahl und Größe. Einzelne Sicherungen lassen sich wiederherstellen oder löschen. Vor beiden Schritten fragt die Plattform nach. Den Hinweis, dass sich eine Wiederherstellung zurücknehmen lässt, und die Einstellungen je Sicherung gibt es hier nicht, denn der Satellit bietet beides nicht an.

:::warning[Wiederherstellen mischt zwei Stände]
Beim Wiederherstellen wird die Sicherung selbst gelöscht. Dateien, die im Image vorhanden sind, in der Sicherung aber fehlen, bleiben erhalten – das Ergebnis ist also eine Mischung aus beiden Ständen und nicht der Stand der Sicherung. Der Schritt lässt sich nicht rückgängig machen. Die Nachfrage vor dem Wiederherstellen nennt diese Warnung noch einmal.
:::

Meldet der Satellit den Ausgang der Wiederherstellung nicht zurück, weist die Plattform darauf hin, dass der Vorgang noch laufen kann. Laden Sie die Liste in diesem Fall neu, bevor Sie erneut wiederherstellen.

##### Beipack-Dateien

Der Dialog zeigt die Beipack-Dateien des Images in denselben Registerkarten wie im Bereich **LINBO** der App **Schulserver**: **Beschreibung**, **Info**, **Registry**, **Pre-Start Script** und **Post-Sync Script**. **Info** enthält die vom Satelliten erzeugten Angaben und ist nur lesbar. Eine **VDI-Konfiguration** bietet der Satellit nicht an.

Anders als am Schulserver speichert **Speichern** nur die Datei der geöffneten Registerkarte. Was Sie in anderen Registerkarten geändert haben, bleibt als Entwurf stehen, bis Sie dort ebenfalls speichern.

:::note[Was sich eine Änderung teilt]
**Registry** (`.reg`), **Pre-Start Script** (`.prestart`) und **Post-Sync Script** (`.postsync`) gelten gemeinsam für Basis- und Differenzimage – eine Änderung hier wirkt auf beide. Ein leerer Inhalt löscht die Datei nicht, sondern setzt sie auf null Bytes; Beipack-Dateien zu löschen bietet der Satellit nicht an. Inhalte über 200 KB nimmt der Satellit nicht an und werden nicht gespeichert.
:::

##### Löschen

Vor dem Löschen ermittelt die Plattform den Umfang und nennt ihn im Bestätigungsdialog: gelöscht wird das gesamte Imageverzeichnis mit allen Dateien und Sicherungen, und der Schritt lässt sich nicht rückgängig machen. Lässt sich der Umfang nicht ermitteln, wird das Image **nicht** gelöscht.

#### Synchronisation

Die Unterseite **Synchronisation** zeigt, was der Satellit vom Linuxmuster-Server übernommen und auf seinem eigenen System angewendet hat – und lässt einen Lauf von Hand anstoßen.

Der Abschnitt **Synchronisationszustand** nennt den **Modus** (**Synchronisation aktiv** oder **Offline**), den Zeitpunkt der letzten Synchronisation, die Zahl der übernommenen Hosts und Konfigurationen, wie viele Hosts davon online sind und ob der Satellit die Schulserver-API erreicht. Dazu kommen der **Gesamtzustand** über alle Bestandteile, der **letzte Lauf** – inkrementell, vollständig oder eine Wiederherstellung – mit Ergebnis, Beginn und Ende, der **Cursor** sowie die Zeitpunkte des letzten Sicherungspunkts und der letzten Wiederherstellung. Läuft gerade ein Lauf, wird das hier vermerkt; ein zuletzt gemeldeter Fehler erscheint darunter.

Der **Cursor** ist die Stelle, bis zu der der Satellit die Änderungen des Schulservers zuletzt übernommen hat; der nächste gewöhnliche Lauf liest ab dort weiter. Steht beim Cursor **Keiner – der nächste Lauf liest den gesamten Bestand**, übernimmt der nächste Lauf wieder alles – so erkennen Sie auch, dass **Cursor zurücksetzen** gegriffen hat. Hat der Satellit die verwalteten Dateien aus einem Sicherungspunkt wiederhergestellt – von Hand oder nach einem fehlgeschlagenen Lauf –, vermerkt der letzte Lauf das eigens.

Die Zahl der Hosts online ermittelt die Seite beim Öffnen, beim Neuladen und nach jeder Aktion, nicht bei den Abfragen während eines Laufs.

:::note[Offline heißt nicht zwingend abgeschaltet]
**Offline** meldet der Satellit auch dann, wenn er seine eigenen Einstellungen nicht lesen konnte. Die Anzeige belegt also nicht, dass die Synchronisation abgeschaltet wurde – prüfen Sie im Zweifel die Unterseite **Einstellungen**.
:::

Darunter steht je Bestandteil eine Karte: **Hosts und Konfigurationen**, **start.conf**, **devices.csv**, **GRUB und hostcfg** sowie **DHCP-Konfiguration**. Jede Karte nennt ihren Zustand als **Aktuell**, **Ausstehend**, **Fehler** oder **Keine Angabe** und zeigt eine gemeldete Fehlermeldung im Wortlaut. **Ausstehend** heißt, dass der Satellit noch auf eine Rückmeldung wartet – etwa darauf, dass der DHCP-Dienst die neue Konfiguration übernommen hat.

:::note[Nur DHCP hat einen mehrstufigen Ablauf]
Die übrigen Bestandteile liegen im LINBO-Dateisystem des Satelliten: Schreiben und Anwenden fallen dort zusammen. Die DHCP-Konfiguration wird dagegen von einem eigenen Dienst übernommen, der den Vollzug zurückmeldet. Nur ihre Karte zeigt deshalb die vier Stufen **Gewünscht**, **Geschrieben**, **Geprüft** und **Angewendet** mit je eigenem Zustand (**Aktuell**, **Ausstehend**, **Unverändert**, **Fehlgeschlagen**, **Nicht zutreffend**, **Nicht gemeldet** oder **Keine Angabe**). Meldet der Satellit den Vollzug nicht zurück, bleiben die Stufen sichtbar – **Geprüft** und **Angewendet** dann als **Nicht gemeldet** – und die Karte weist zusätzlich darauf hin.
:::

**Keine Angabe** und **Nicht gemeldet** bedeuten fehlende Information, nicht einen Fehler: Ein Satellit, der noch nie synchronisiert hat, ruht genauso in diesem Zustand wie einer, dessen DHCP-Dienst nicht zurückmeldet. Beide werden deshalb neutral und nicht als Störung dargestellt.

##### Einen Lauf anstoßen

Unten rechts stehen **Synchronisieren**, **Vollständig synchronisieren**, **Cursor zurücksetzen** und die Aktion zum Neuladen. **Synchronisieren** übernimmt nur, was sich seit dem Cursor geändert hat; **Vollständig synchronisieren** übernimmt den gesamten Bestand und schreibt alle verwalteten Dateien neu. **Cursor zurücksetzen** verwirft den Cursor, sodass der nächste gewöhnliche Lauf wieder alles betrachtet; einen Lauf startet es selbst nicht. Jede der drei Aktionen fragt vor dem Start nach.

:::note[Während ein Lauf läuft]
Die drei Aktionen verschwinden und Sicherungspunkte lassen sich nicht wiederherstellen, solange ein Lauf läuft – auch einer, den der Satellit selbst nach seinem Zeitplan gestartet hat; der Zustand wird dann alle fünf Sekunden nachgeladen – aber nur dann: Jede Abfrage kostet den Satelliten eine Prüfung der Verbindung zum Schulserver. Ein Lauf überdauert regelmäßig die Verbindung zum Satelliten; bricht sie ab, gilt der Lauf weiterhin als laufend und wird nicht als fehlgeschlagen gemeldet. Die Seite folgt einem Lauf, solange der Satellit ihn als laufend meldet; lässt sich sein Zustand nicht lesen, gibt sie nach fünf Minuten auf – laden Sie sie dann neu. Läuft auf dem Satelliten bereits ein Lauf, wird auch das gemeldet, statt einen zweiten zu starten.
:::

##### Sicherungspunkte

Vor einem Lauf legt der Satellit einen Sicherungspunkt an. Der Abschnitt **Sicherungspunkte** listet sie mit Zeitpunkt und Kennung; je Eintrag können Sie über **Wiederherstellen** auf diesen Stand zurückgehen. Der Satellit hält nur die jüngsten Sicherungspunkte vor – ältere verschwinden von selbst aus der Liste.

:::warning[Was eine Wiederherstellung ersetzt]
Beim Wiederherstellen werden alle verwalteten `start.conf`-Dateien, alle DHCP- und GRUB-Konfigurationen sowie der zwischengespeicherte Host- und Konfigurationsbestand gelöscht und durch den Stand des Sicherungspunkts ersetzt. Images und Treiber bleiben unberührt. Die Plattform fragt vor dem Schritt nach und nennt dabei den Sicherungspunkt mit Zeitpunkt und Kennung.
:::

Solange kein Sicherungspunkt vorliegt, weist der Abschnitt dies aus. Lässt sich der Zustand insgesamt nicht lesen, erscheint über der Seite ein Hinweis, statt eine leere Seite zu zeigen.

#### Einstellungen

Die Unterseite **Einstellungen** pflegt die **Verbindung zum Schulserver**, die der Satellit für die Synchronisation nutzt. Sie wirkt ausschließlich auf den ausgewählten Satelliten; die zentralen Plattformeinstellungen bleiben davon unberührt.

| Feld | Bedeutung |
|------|-----------|
| **Synchronisation aktiv** | `true` oder `false` – schaltet die selbsttätige Synchronisation ein oder aus |
| **Intervall (Sekunden, 0 deaktiviert)** | Abstand zwischen zwei selbsttätigen Läufen; `0` schaltet den Zeitgeber ab |
| **API-Adresse** | Adresse der Linuxmuster-API des Schulservers |
| **Benutzer** | Benutzer für die Anmeldung an dieser API |
| **Passwort** | Passwort dieses Benutzers |
| **Schule** | Schule, deren Bestand der Satellit übernimmt |
| **LINBO-Server-IP** | IP-Adresse, die der Satellit den Rechnern als LINBO-Server nennt |

Neben jedem Feld steht, woher der Satellit den Wert bezieht:

| Kennzeichnung | Bedeutung |
|---------------|-----------|
| **Standard** | Vorgabewert des Satelliten |
| **Aus der Umgebung** | bei der Einrichtung des Geräts gesetzt |
| **Überschrieben** | hier in der Plattform gesetzt |

Jedes Feld wird einzeln gespeichert. Die Plattform prüft eine Eingabe nach denselben Regeln wie der Satellit und nennt unter dem Feld den Grund, wenn ein Wert nicht passt; gespeichert werden kann er dann nicht. Leerzeichen am Anfang und Ende entfernt der Satellit beim Speichern. Ein geleertes Feld wird nicht gespeichert; einen hier überschriebenen Wert entfernt **Auf Standard zurücksetzen**.

**Auf Standard zurücksetzen** verwirft die hier gesetzte Überschreibung, sodass wieder der Wert aus der Umgebung beziehungsweise der Vorgabewert gilt. Die Schaltfläche steht deshalb nur bei Feldern mit der Kennzeichnung **Überschrieben** zur Verfügung – ein Wert aus der Umgebung lässt sich hier nicht zurücksetzen.

:::note[Zeitplan und Intervall starten womöglich sofort einen Lauf]
Änderungen an **Synchronisation aktiv** und **Intervall** – auch das Zurücksetzen auf den Standard – richten den Zeitplan des Satelliten neu ein. Ist ein Lauf dabei bereits überfällig, startet der Satellit ihn sofort nach dem Speichern. Die Plattform fragt deshalb vorher nach.
:::

:::note[Das Passwort wird nie zurückgegeben]
Der Satellit gibt das gespeicherte Passwort nicht heraus; über dem Feld steht nur die maskierte Form, die er meldet – vier Sterne und die letzten vier Zeichen – oder **Nicht gesetzt**, wenn kein Passwort hinterlegt ist. Das Eingabefeld beginnt bei jedem Aufruf leer – das ist keine Aufforderung, das Passwort zu löschen: Ein leer gelassenes Feld wird nicht gesendet. Nur wenn Sie etwas eintragen und speichern, wird das Passwort ersetzt.
:::

Über **Verbindung testen** prüft der Satellit, ob er den Schulserver erreicht. Dabei verwendet er die in **API-Adresse**, **Benutzer** und **Passwort** eingetragenen, noch nicht gespeicherten Werte und für leer gelassene Felder die gespeicherten – so lässt sich etwa ein neues Passwort prüfen, bevor es gespeichert wird. Der Test speichert selbst nichts. Das Ergebnis lautet:

- **Der Schulserver ist erreichbar.** – zusammen mit der Version der API und der Antwortzeit,
- **Der Schulserver antwortet, meldet aber keinen betriebsbereiten Zustand.** – meist sind Benutzer oder Passwort falsch,
- **Der Schulserver ist nicht erreichbar.**

:::note[Satellitenwechsel verwirft Eingaben]
Wechseln Sie den Satelliten, während ein Feld noch ungespeichert ist, wird die Eingabe verworfen. So gelangt kein Wert – und vor allem kein Passwort – versehentlich auf das falsche Gerät.
:::

## Siehe auch

- [Einstellungen](../edulution-plattform/konfiguration/einstellungen.md) – weitere globale Konfigurationsoptionen
- [Administration](../edulution-plattform/konfiguration/administration.md) – allgemeine Admin-Aufgaben
