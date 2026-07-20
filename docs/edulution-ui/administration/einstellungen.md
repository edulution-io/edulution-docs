# Einstellungen (Settings)

Die Einstellungen sind nur für Global-Admins zugänglich und ermöglichen die zentrale Konfiguration von edulution.io.

:::caution[Nur Global-Admin]
Diese Seite ist nur als Global-Administrator sichtbar. Sie erscheint im Menü rechts unten.
:::

## Zugriff

Als Global-Admin finden Sie **Einstellungen** (Zahnrad-Symbol) im Menü rechts unten.

## Tabs

Die Einstellungen sind in 5 Bereiche gegliedert:
- **Container** - Docker Container Verwaltung
- **Globale Einstellungen** - Systemweite Einstellungen
- **E-Mails** - E-Mail und SOGo Webmailer Konfiguration
- **Benutzerverwaltung** - Verwaltung von Benutzerkonten
- **Info** - Lizenz und Systeminformationen

---

## Globale Einstellungen

![Globale Einstellungen](/img/einstellungen/global-settings.webp)

### Allgemein

**Zielplattform**
- Auswahl: **Linuxmuster** oder **Allgemein**
- Bestimmt die Integration mit dem Schulnetzwerk

**Standard-Anwendung nach Login**
- Wählen Sie welche App nach Login angezeigt wird
- Optionen: Dashboard, Info Board, Dateien, etc.

### Zwei-Faktor-Authentisierung

**Benutzergruppen**
- Legen Sie fest, für welche Benutzergruppen 2FA verpflichtend ist
- Suchfeld: "Tippen um zu suchen"
- MFA-Einrichtung wird für ausgewählte Gruppen erzwungen

### LDAP

**Distinguished Name (DN)**
- LDAP-Zugangsdaten für Gruppensynchronisation
- Beispiel: `CN=edulutionui-binduser,OU=Management,OU=GLOBAL,DC=linuxmuster,DC=lan`

**Passwort**
- LDAP Bind-Passwort (verschlüsselt)

### Branding

![Branding](/img/einstellungen/branding.webp)

**Logo**
- Laden Sie Ihr Schul-Logo hoch
- Wird auf Login-Seite und in der App angezeigt
- Button: **Datei auswählen**

**Organisationsinformationen**
- **Organisationsname**: Name der Schule (z.B. "Albert-Schweitzer-Schule")
- **Straße**: Straße (z.B. "Lindenweg 12")
- **Postleitzahl**: PLZ (z.B. "74235")
- **Stadt**: Stadt (z.B. "Heilbronn")
- **Organisations-Webseite**: Webseite (z.B. "http://albert-schule-hn.de")

Diese Informationen erscheinen in der edulution App.

**Speichern** - Button zum Speichern unten

---

## E-Mails

![E-Mail Einstellungen](/img/einstellungen/email-settings.webp)

Die E-Mail-Einstellungen ermöglichen die Konfiguration der Mail-App und des SOGo Webmailers.

### Sortierung

**Position in der App-Liste**
- Numerischer Wert (z.B. "10")
- Bestimmt an welcher Stelle die E-Mail-App in der App-Liste und in den Einstellungen angezeigt wird
- Niedrigere Zahlen = weiter oben in der Liste

### Nutzergruppen

**Zugriff auf die Mail-App**
- Wählen Sie die Nutzergruppen aus, die Zugriff auf die Mail-App bekommen sollen
- Beispiel-Gruppen: `all-teachers`, `all-parents`, `all-staff`, `all-admins`, `all-students`
- Mehrfachauswahl möglich
- Nur ausgewählte Gruppen sehen die Mail-App in ihrer Anwendungsübersicht

### Allgemein

**Theme**
- Wählen Sie das Theme für den SOGo Webmailer
- Optionen:
  - **Dunkel** - Dunkles Design für den Webmailer
  - **Hell** - Helles Design für den Webmailer
- Das Ändern des Themes startet die nuspezifischen Container neu

:::info
Das Theme beeinflusst nur die Darstellung des SOGo Webmailers (`https://mail.ihre-domain.de/SOGo`). Die edulution UI verwendet weiterhin das systemweite Dark/Light Mode Setting.
:::

**Standard-Signatur**

Diese Signatur wird beim Verfassen einer neuen E-Mail automatisch angefügt. Sie gilt für alle Benutzer, die keine eigene Signatur hinterlegt haben (siehe [Mein Profil → Signatur](../benutzer/mein-profil.md#signatur)).

- Bearbeiten Sie die Signatur im Editor mit den gewohnten Formatierungsfunktionen
- Über die Editor-/Quelltext-Umschaltung oben rechts im Editor wechseln Sie zwischen der formatierten Ansicht und der direkten HTML-Bearbeitung. HTML, Links und Bilder werden unverändert übernommen
- Enthält der Quelltext Elemente oder Formatierungen, die der formatierte Editor nicht unterstützt (etwa Tabellen, Textausrichtung oder Schriftgrößen), fragt ein Bestätigungsdialog vor dem Zurückschalten nach und listet auf, was dabei entfernt würde
- Bilder können direkt eingefügt werden; sehr große Bilder werden mit einem Hinweis quittiert

:::tip[Bildgröße]
Ein Logo in der Standard-Signatur wird jeder gesendeten E-Mail beigefügt. Verwenden Sie deshalb ein möglichst kleines Bild (unter 100 KB), um das Mailaufkommen nicht unnötig zu vergrößern.
:::

### IMAP Integration

Die IMAP-Integration ermöglicht den Zugriff auf externe oder interne IMAP-Server.

**URL**
- Geben Sie den FQDN (Fully Qualified Domain Name) des IMAP-Servers an
- Beispiel: `imap.example.com` oder `ui.73.dev.multi.schule`
- Wird für die Anbindung an den Mail-Server verwendet

**Port**
- Port-Nummer des IMAP-Servers
- Standard: **993** (IMAP über SSL/TLS)
- Alternative: **143** (IMAP mit STARTTLS)

**Sichere Verbindung**
- Toggle-Schalter zum Aktivieren/Deaktivieren
- Aktiviert: Verbindung über TLS oder STARTTLS
- Sollte für Produktivumgebungen immer aktiviert sein

**Nicht zertifizierte Verbindungen ablehnen**
- Toggle-Schalter für Zertifikatsprüfung
- Aktiviert: SSL/TLS-Zertifikat wird validiert
- Deaktiviert: Selbstsignierte Zertifikate werden akzeptiert

:::warning[Sicherheitshinweis]
In Produktivumgebungen sollten Sie immer "Sichere Verbindung" aktivieren und "Nicht zertifizierte Verbindungen ablehnen" einschalten, um die Sicherheit der E-Mail-Kommunikation zu gewährleisten.
:::

**Speichern / Löschen**
- **Speichern** (grün) - Speichert die E-Mail-Einstellungen
- **Löschen** (rot) - Löscht die aktuellen Konfigurationen

### Mailbox-Verwaltung

{/* TODO Screenshot: Abschnitt "Mailbox-Verwaltung" mit der Mailbox-Tabelle */}

Im Abschnitt **Mailbox-Verwaltung** legen Sie die Mailboxen des Mailcow-Servers an, bearbeiten sie und löschen sie — ohne dafür die Mailcow-Oberfläche zu öffnen. Der Abschnitt befindet sich in den Einstellungen der Mail-App unterhalb der Mail-Server-Konfiguration.

:::info[Voraussetzungen]
Die Tabelle wird nur für **Administratoren** mit Daten gefüllt; sämtliche Funktionen dieses Abschnitts sind Administratoren vorbehalten. Außerdem müssen **URL und API-Token des Mailcow-Servers** in den Mail-Server-Einstellungen hinterlegt sein. Fehlen sie, bleibt die Tabelle leer und Sie erhalten die Meldung "Mailcow-Mailboxen konnten nicht abgerufen werden".
:::

#### Die Tabelle

Jede Zeile ist eine Mailbox. Alle Spalten lassen sich per Klick auf die Spaltenüberschrift sortieren, das Suchfeld filtert nach dem Benutzernamen, und die Tabelle zeigt 10 Einträge pro Seite.

| Spalte | Inhalt |
|--------|--------|
| **Benutzername** | Vollständige E-Mail-Adresse. Freigegebene Mailboxen tragen zusätzlich die Markierung **Shared** |
| **Name** | Anzeigename der Mailbox |
| **Domain** | Mail-Domain der Mailbox |
| **Quota** | Belegter und zugewiesener Speicher, z.B. "2,1 GB / 3 GB" |
| **Aktiv** | Grüner Haken oder rotes Kreuz |
| **Nachrichten** | Anzahl der Nachrichten in der Mailbox |

Über das Filtermenü blenden Sie mit **Nur Shared** ausschließlich freigegebene Mailboxen ein. Auf schmalen Bildschirmen werden Domain, Quota und Nachrichten ausgeblendet.

:::note[Löschen führt nur über den Bearbeiten-Dialog]
Die Tabelle hat bewusst **keine Auswahlkästchen und keinen Löschen-Button in der Werkzeugleiste**. Es gibt also kein Löschen mehrerer Mailboxen auf einmal. Um eine Mailbox zu löschen, öffnen Sie sie per Klick auf die Zeile und verwenden den Löschen-Button im Dialog.
:::

#### Mailbox anlegen

{/* TODO Screenshot: Dialog "Mailbox erstellen" mit Pflichtfeldern und Zugriffseinstellungen */}

Über den Hinzufügen-Button oben rechts in der Tabelle öffnen Sie den Dialog **Mailbox erstellen**.

| Feld | Bedeutung |
|------|-----------|
| **Lokaler Teil** | Der Teil vor dem `@`, z.B. `max.mustermann`. Höchstens 64 Zeichen, erlaubt sind Buchstaben, Ziffern, `_`, `+`, `-` und Punkte als Trenner. Großbuchstaben werden automatisch in Kleinbuchstaben umgewandelt |
| **Domain** | Auswahlliste der in Mailcow angelegten Domains. Existiert genau eine Domain, ist sie bereits vorausgewählt |
| **Name** | Anzeigename, z.B. `Max Mustermann` |
| **Quota (MB)** | Speicherplatz in **Megabyte**. Voreinstellung 3072 MB (3 GB), Minimum 1 MB, Maximum 1.048.576 MB (1 TiB) |
| **Passwort** / **Passwort bestätigen** | Mindestens 8 Zeichen, davon mindestens eine Ziffer und ein Sonderzeichen |

:::warning[Die Domain lässt sich nicht frei eintippen]
Auswählbar sind ausschließlich Domains, die Mailcow bereits kennt. Ist die Liste leer, konnten die Domains nicht geladen werden — dann lässt sich keine Mailbox anlegen, und Sie prüfen zuerst die Mailcow-Verbindung.
:::

:::info[Quota 0 für "unbegrenzt" ist hier nicht möglich]
Mailcow selbst deutet eine Quota von 0 als unbegrenzt. Über diese Oberfläche ist das nicht eingebbar, da mindestens 1 MB verlangt wird.
:::

Unter **Zugriffseinstellungen** legen Sie mit Ja/Nein-Schaltern fest, ob die Mailbox **Aktiv** ist, ob eine **Passwortänderung erzwungen** wird und ob **SOGo-, IMAP-, POP3- und SMTP-Zugriff** erlaubt sind.

:::caution[Die Protokoll-Schalter greifen erst beim Bearbeiten]
Beim **Anlegen** werden **SOGo Zugriff**, **IMAP Zugriff**, **POP3 Zugriff** und **SMTP Zugriff** zwar angezeigt, aber noch nicht an Mailcow übertragen — eine neue Mailbox erhält immer die Mailcow-Standardwerte. Wollen Sie einzelne Protokolle sperren, öffnen Sie die Mailbox nach dem Anlegen erneut und speichern die Schalter dort.
:::

#### Mailbox bearbeiten

Ein Klick auf eine beliebige Stelle der Zeile öffnet **Mailbox bearbeiten**.

**Adresse und Domain sind nicht mehr änderbar** — die beiden Felder werden im Bearbeiten-Modus ausgeblendet. Um eine Adresse zu ändern, legen Sie eine neue Mailbox an. Das Feld **Passwort** trägt hier den Platzhalter "Unverändert lassen": Lassen Sie es leer, bleibt das bestehende Passwort erhalten.

Zusätzlich erscheint im Bearbeiten-Modus der Bereich **Benutzer-ACL**. Diese 14 Schalter steuern, welche Selbstbedienungs-Funktionen der **Inhaber der Mailbox** in Mailcow bzw. SOGo nutzen darf — etwa **Spam-Alias**, **Spam-Score**, **Sync-Jobs**, **Quarantäne** oder **App-Passwörter**. Sie haben nichts mit der Freigabe an andere Benutzer zu tun.

:::warning[Die Benutzer-ACL wird bei jedem Speichern neu vergeben]
Der Dialog liest den aktuellen ACL-Stand **nicht** aus Mailcow aus, sondern zeigt beim Öffnen immer **alle 14 Optionen als aktiviert** an. Speichern Sie eine Mailbox, werden damit auch alle ACL-Optionen wieder erteilt — auch solche, die Sie zuvor in Mailcow abgeschaltet hatten. Haben Sie einzelne Optionen bewusst gesperrt, müssen Sie sie bei jedem Bearbeiten in derselben Sitzung erneut abschalten.
:::

:::note[Beim Bearbeiten gibt es kein Zurückrollen]
Das Speichern einer bestehenden Mailbox löst nacheinander bis zu drei Anfragen aus: Mailbox-Daten, Benutzer-ACL und Berechtigungen. Schlägt eine der späteren fehl, bleiben die bereits übernommenen Änderungen bestehen. Die Tabelle wird in diesem Fall sofort aktualisiert, sodass Sie den tatsächlichen Stand sehen.
:::

#### Freigegebene Mailboxen (Shared Mailbox)

{/* TODO Screenshot: Bearbeiten-Dialog mit aktiviertem Schalter "Shared Mailbox", Feldern "Berechtigte Benutzer" und "Geteilte Ordner" */}

Mit dem Schalter **Shared Mailbox** machen Sie eine Mailbox zu einem freigegebenen Postfach, das mehrere Personen gemeinsam nutzen (z.B. `sekretariat@…`). Erst dann erscheint das Feld **Berechtigte Benutzer**.

**Berechtigte Benutzer** ist eine Mehrfachauswahl über die übrigen Mailboxen der Tabelle — freigeben können Sie also nur an Personen, die selbst eine Mailcow-Mailbox besitzen. Eingetragene Benutzer erhalten:

- **volle Zugriffsrechte auf die freigegebenen Ordner** der Mailbox (lesen, schreiben, verschieben, löschen),
- das Recht, **im Namen dieser Adresse zu senden**,
- das Postfach in ihrer Mail-App angezeigt, inklusive der Verwaltung der automatischen Antwort (siehe [E-Mail](../features/e-mail.md)).

Das Feld **Geteilte Ordner** bestimmt, auf welche IMAP-Ordner sich diese Rechte beziehen. Es erscheint nur beim **Bearbeiten** einer bereits gespeicherten freigegebenen Mailbox. Wählen Sie nichts aus, werden beim ersten Speichern automatisch alle Ordner der Mailbox freigegeben.

:::warning[Für die Freigabe wird das Mailbox-Passwort benötigt]
Um die Rechte auf dem Mailserver setzen zu können, muss edulution sich an der Mailbox anmelden. Solange **Shared Mailbox** aktiv ist und noch keine Zugangsdaten hinterlegt sind, ist das Feld **Passwort** deshalb ein Pflichtfeld — der Hinweis "Passwort ist erforderlich, um die Mailbox zu teilen" erscheint und **Speichern** bleibt gesperrt.

Das Passwort wird bereits im Browser verschlüsselt und nur verschlüsselt gespeichert; im Klartext verlässt es den Browser nicht.
:::

:::caution[Passwortänderungen außerhalb von edulution]
Ändern Sie das Passwort einer freigegebenen Mailbox direkt in Mailcow oder SOGo, passen die hinterlegten Zugangsdaten nicht mehr. Freigaben und das Laden der Ordnerliste schlagen dann fehl, bis Sie das neue Passwort hier erneut eintragen.
:::

:::caution[Freigabe abschalten entzieht keine Rechte]
Den Schalter **Shared Mailbox** auszuschalten entfernt nur die Markierung — die bereits erteilten Zugriffsrechte und das Senderecht der berechtigten Benutzer **bleiben bestehen**. Um eine Freigabe wirklich zurückzunehmen, lassen Sie die Mailbox freigegeben, leeren die Liste **Berechtigte Benutzer** und speichern. Erst danach können Sie den Schalter gefahrlos ausschalten.
:::

#### Mailbox löschen

Öffnen Sie die Mailbox per Klick auf die Zeile und wählen Sie im Dialog **Löschen**. Es folgt eine Sicherheitsabfrage, die die betroffene Adresse nennt; eine Eingabe zur Bestätigung ist nicht erforderlich, ein Klick genügt.

:::danger[Das Löschen ist endgültig]
Alle E-Mails und Daten der Mailbox werden unwiderruflich gelöscht. Es gibt keinen Papierkorb und kein Zurückholen über die edulution-Oberfläche.
:::

Beim Löschen räumt edulution die Freigaben mit auf: Die Adresse wird aus den **Berechtigte Benutzer**-Listen aller anderen Mailboxen entfernt, das Senderecht wird zurückgenommen und die Adresse verschwindet aus der Empfängervorschlagsliste der Mail-App.

#### Häufige Fehlermeldungen

| Meldung | Ursache |
|---------|---------|
| "Eine Mailbox mit dieser Adresse existiert bereits" | Lokaler Teil und Domain sind bereits vergeben |
| "Das Passwort entspricht nicht der konfigurierten Komplexitätsrichtlinie" | Mailcows eigene Passwortrichtlinie ist strenger als die Prüfung im Dialog |
| "Die maximale Anzahl an Mailboxen für diese Domain ist erreicht" | Das in Mailcow gesetzte Mailbox-Limit der Domain ist ausgeschöpft |
| "Die gewünschte Quota überschreitet das verbleibende Domain-Kontingent" | Die Summe aller Quotas würde das Kontingent der Domain übersteigen |
| "Mailcow hat den Zugriff verweigert (API-Token prüfen)" | Der hinterlegte API-Token ist ungültig oder hat zu wenig Rechte |

Bei einem Fehler bleibt der Dialog geöffnet und die Tabelle wird aktualisiert, sodass Sie sofort sehen, was tatsächlich übernommen wurde.

---

## Kontakte (CardDAV)

![Einstellungen der Kontakte-App mit CardDAV-Konfiguration](/img/einstellungen/kontakte-carddav.webp)

Die Kontakte-App bindet die Adressbücher der Schule über einen CardDAV-Server (z.B. SOGo) an. In den Einstellungen der App legen Sie die Verbindung zum CardDAV-Server fest.

### Sortierung

**Position in der App-Liste**
- Numerischer Wert
- Bestimmt, an welcher Stelle die Kontakte-App in der App-Liste und in den Einstellungen angezeigt wird
- Niedrigere Zahlen = weiter oben in der Liste

### An App-Leiste anpinnen

**Dauerhaft in der App-Leiste anzeigen**
- Toggle-Schalter
- Aktiviert: Die Kontakte-App erscheint dauerhaft in der App-Leiste
- Deaktiviert: Die App wird dort nur angezeigt, solange sie geöffnet ist

### Nutzergruppen

**Zugriff auf die Kontakte-App**
- Wählen Sie die Nutzergruppen aus, die Zugriff auf die Kontakte-App bekommen sollen
- Mehrfachauswahl möglich
- Nur ausgewählte Gruppen sehen die Kontakte-App in ihrer Anwendungsübersicht

### CardDAV-Verbindung

**CardDAV-URL**
- Basis-URL des CardDAV-Servers inklusive Pfad
- Beispiel: `https://mail.example.com/SOGo/dav/`
- Wird für die Anbindung der Adressbücher verwendet

**Authentifizierungsmodus**
- HTTP-Authentifizierungsverfahren für die CardDAV-Verbindung
- Optionen: **Basic**, **Digest**, **OAuth**

:::info
Aktuell ist nur **Basic Auth** implementiert. Das Feld ist daher fest auf Basic eingestellt; weitere Modi sind in Vorbereitung.
:::

**Nicht zertifizierte Verbindungen ablehnen**
- Toggle-Schalter für die Zertifikatsprüfung
- Aktiviert: Das SSL/TLS-Zertifikat des CardDAV-Servers wird validiert
- Deaktiviert: Selbstsignierte Zertifikate werden akzeptiert

:::warning[Sicherheitshinweis]
In Produktivumgebungen sollten Sie "Nicht zertifizierte Verbindungen ablehnen" aktiviert lassen, um die Sicherheit der CardDAV-Verbindung zu gewährleisten.
:::

---

## Klassenraum (Veyon-Proxy)

Der Klassenraum bindet die Bildschirmüberwachung der Schüler-Geräte über einen Veyon-WebAPI-Proxy an. In den Einstellungen der Klassenraum-App legen Sie unter **Veyon Proxy** fest, über welche Adresse edulution die Veyon-WebAPI erreicht.

### Proxy-Tabelle

Die Proxys werden als Tabelle gepflegt. Über den Hinzufügen-Button oben rechts in der Tabelle öffnen Sie den Dialog **Konfiguration erstellen**; ein Klick auf eine bestehende Zeile öffnet **Konfiguration bearbeiten** und bietet dort auch das Löschen an.

| Feld | Bedeutung |
|------|-----------|
| **Subnet** | Subnetz der Schüler-Geräte in CIDR-Notation, z.B. `10.0.0.0/24` |
| **Proxy Adresse** | URL des Veyon-WebAPI-Proxy, z.B. `https://veyon.ihre-domain.de:11080` |

:::warning[Die Proxy-Adresse muss `https` verwenden]
Für die Anmeldung an der Veyon-WebAPI sendet edulution das **Passwort der Lehrkraft** an diese Adresse. Über `http` ginge es im Klartext durch das Netz. Adressen ohne `https` werden deshalb bereits im Dialog abgelehnt, und auch das Speichern der App-Konfiguration schlägt mit einer Fehlermeldung fehl.

Bestehende Konfigurationen mit einer `http`-Adresse bleiben zwar gespeichert, lassen sich aber nicht mehr speichern, ohne die Adresse auf `https` umzustellen. Stellen Sie den Veyon-WebAPI-Proxy daher auf TLS um, bevor Sie die Klassenraum-Einstellungen das nächste Mal bearbeiten.
:::

:::info[Aktuell wird nur der erste Eintrag verwendet]
Sie können mehrere Zeilen anlegen, edulution verbindet sich derzeit jedoch immer über die **Proxy Adresse der ersten Zeile**. Das Feld **Subnet** wird noch nicht zur Auswahl des passenden Proxys ausgewertet. Für Schulen mit mehreren Subnetzen bedeutet das: alle Schüler-Geräte müssen über denselben Proxy erreichbar sein.
:::

### Wenn kein Proxy konfiguriert ist

Ohne konfigurierten Proxy zeigen die Schülerkarten im Unterricht keine Bildschirmvorschau und die Veyon-Aktionen bleiben deaktiviert — die Karte sieht dabei genauso aus wie bei einem ausgeschalteten Gerät. Fehlt die Vorschau für alle Schüler, prüfen Sie zuerst diese Einstellung.

---

## Container

![Container Übersicht](/img/einstellungen/container.webp)

Übersicht aller Docker Container des Systems.

### Container-Tabelle

| Spalte | Beschreibung |
|--------|--------------|
| **Container-Name** | Name des Containers |
| **Image** | Docker Image und Version |
| **Zustand** | Status (läuft) |
| **Status** | Laufzeit (z.B. "Seit 2 Tagen") |
| **Port** | Verwendete Ports |

### Hauptcontainer

**Mail:**
- edulution-mail

**OnlyOffice:**
- edulution-onlyoffice-documentserver
- edulution-onlyoffice-postgresql
- mailcowdockerized-sogo-mailcow-1

**API & UI:**
- edulution-ui
- edulution-api

**Mailcow (E-Mail System):**
- mailcowdockerized-* Container (ca. 15 Container)

**Datenbanken:**
- edulution-keybank-db
- edulution-db (mongo:7)
- edulution-keycloak-db (postgres:16)
- redis Instanzen

**Weitere:**
- edulution-traefik (traefik:v3.1)
- edulution-keycloak
- edulution-webdav-proxy

**Neu laden** - Button zum Aktualisieren unten

:::info[Fortgeschrittene Verwaltung]
Die Container-Übersicht ist für fortgeschrittene Administratoren. Änderungen sollten nur mit entsprechendem Docker-Know-how vorgenommen werden.
:::

---

## Benutzerverwaltung

![Benutzerverwaltung](/img/einstellungen/user-admin.webp)

### Zwei-Faktor-Authentisierung zurücksetzen

**Benutzer auswählen**
- Suchfeld: "Tippen um zu suchen"
- Wählen Sie Benutzer aus, deren 2FA zurückgesetzt werden soll
- Button: **Zurücksetzen** (grün)

Nützlich wenn Benutzer:
- Ihr Authenticator-Gerät verloren haben
- Probleme mit 2FA haben
- Neues Gerät einrichten müssen

---

## Info

![Info / Lizenz](/img/einstellungen/info-license.webp)

### Lizenz-Übersicht

**Status:** "Keine Lizenz registriert"

**Lizenz registrieren**
- Dialog zum Registrieren einer Lizenz
- **Lizenzschlüssel** Eingabefeld
- "Geben Sie den Lizenzschlüssel ein, den Sie mit Ihrem Kauf erhalten haben"
- Buttons: **Abbrechen** / **Registrieren**

---

## Siehe auch

- [Administration](administration.md) - Allgemeine Admin-Aufgaben
- [Experten-Tipps](experten-tipps.md) - Fortgeschrittene Konfiguration
- [Linuxmuster verbinden](../configure-lmn-server/configure_lmn-server.md) - Server-Integration
