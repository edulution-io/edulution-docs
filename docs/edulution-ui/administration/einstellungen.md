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

---

## Kalender (CalDAV)

![Einstellungen der Kalender-App mit CalDAV-Konfiguration](/img/einstellungen/kalender-caldav.webp)

Die Kalender-App bindet die Kalender der Schule über einen CalDAV-Server (z.B. SoGo) an. In den Einstellungen der App legen Sie die Verbindung zum CalDAV-Server fest.

### Sortierung

**Position in der App-Liste**
- Numerischer Wert
- Bestimmt, an welcher Stelle die Kalender-App in der App-Liste und in den Einstellungen angezeigt wird
- Niedrigere Zahlen = weiter oben in der Liste

### An App-Leiste anpinnen

**Dauerhaft in der App-Leiste anzeigen**
- Toggle-Schalter
- Aktiviert: Die Kalender-App erscheint dauerhaft in der App-Leiste
- Deaktiviert: Die App wird dort nur angezeigt, solange sie geöffnet ist

### Nutzergruppen

**Zugriff auf die Kalender-App**
- Wählen Sie die Nutzergruppen aus, die Zugriff auf die Kalender-App bekommen sollen
- Mehrfachauswahl möglich
- Nur ausgewählte Gruppen sehen die Kalender-App in ihrer Anwendungsübersicht

### CalDAV-Verbindung

**CalDAV-URL**
- Basis-URL des CalDAV-Servers inklusive Pfad
- Beispiel: `https://mail.example.com/SOGo/dav/`
- Wird für die Anbindung der Kalender verwendet

:::tip[edulution-mail als CalDAV-Server]
Setzen Sie **edulution-mail** (mailcow) ein, erreichen Sie den Server direkt über seinen Container-Namen im Docker-Netzwerk, statt den Umweg über die öffentliche Adresse zu nehmen:

```
https://mailcowdockerized-nginx-mailcow-1
```

Das SSL-Zertifikat ist nicht auf diesen internen Namen ausgestellt. Schalten Sie deshalb **Nicht zertifizierte Verbindungen ablehnen** aus, sonst schlägt die Verbindung fehl.
:::

:::info[Backend-Voraussetzung]
Die reine Terminsynchronisierung funktioniert mit jedem standardkonformen CalDAV-Server. Das [Freigeben und Abonnieren von Kalendern](../features/kalender.md#kalender-freigeben) nutzt dagegen die proprietären ACL-Funktionen von **SoGo** und steht nur zur Verfügung, wenn hier ein SoGo-Server hinterlegt ist.
:::

**Authentifizierungsmodus**
- HTTP-Authentifizierungsverfahren für die CalDAV-Verbindung
- Optionen: **Basic**, **Digest**, **OAuth**

:::info
Aktuell ist nur **Basic Auth** implementiert. Das Feld ist daher fest auf Basic eingestellt; weitere Modi sind in Vorbereitung.
:::

**Nicht zertifizierte Verbindungen ablehnen**
- Toggle-Schalter für die Zertifikatsprüfung
- Aktiviert: Das SSL/TLS-Zertifikat des CalDAV-Servers wird validiert
- Deaktiviert: Selbstsignierte Zertifikate werden akzeptiert

:::warning[Sicherheitshinweis]
In Produktivumgebungen sollten Sie "Nicht zertifizierte Verbindungen ablehnen" aktiviert lassen, um die Sicherheit der CalDAV-Verbindung zu gewährleisten. Ausgenommen ist die oben beschriebene interne Container-Adresse von edulution-mail: Sie bleibt innerhalb des Docker-Netzwerks und verlässt den Host nicht.
:::

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

:::tip[edulution-mail als CardDAV-Server]
Setzen Sie **edulution-mail** (mailcow) ein, erreichen Sie den Server direkt über seinen Container-Namen im Docker-Netzwerk, statt den Umweg über die öffentliche Adresse zu nehmen:

```
https://mailcowdockerized-nginx-mailcow-1
```

Das SSL-Zertifikat ist nicht auf diesen internen Namen ausgestellt. Schalten Sie deshalb **Nicht zertifizierte Verbindungen ablehnen** aus, sonst schlägt die Verbindung fehl.
:::

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
In Produktivumgebungen sollten Sie "Nicht zertifizierte Verbindungen ablehnen" aktiviert lassen, um die Sicherheit der CardDAV-Verbindung zu gewährleisten. Ausgenommen ist die oben beschriebene interne Container-Adresse von edulution-mail: Sie bleibt innerhalb des Docker-Netzwerks und verlässt den Host nicht.
:::

---

## Chat (KI-Chat)

Die Chat-App umfasst einen **KI-Chat**. In den Einstellungen der Chat-App steuern Sie über Nutzergruppen, wer den KI-Chat verwenden darf.

Die Verbindung zu einem KI-Dienst richten Sie unter
[Administration → KI-Chat konfigurieren](./administration#27-ki-chat-konfigurieren)
ein.

### KI-Chat-Zugriff

**Gruppen, die den KI-Chat nutzen dürfen**
- Wählen Sie die Nutzergruppen aus, die den KI-Chat verwenden dürfen
- Mehrfachauswahl möglich
- Bleibt die Liste leer, hat niemand Zugriff auf den KI-Chat

:::info
Global-Admins haben unabhängig von dieser Auswahl immer Zugriff auf den KI-Chat.
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
