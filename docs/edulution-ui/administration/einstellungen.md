# Einstellungen (Settings)

Die Einstellungen sind nur für Global-Admins zugänglich und ermöglichen die zentrale Konfiguration von edulution.io.

:::caution Nur Global-Admin
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

![Globale Einstellungen](/img/einstellungen/global-settings.png)

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

![Branding](/img/einstellungen/branding.png)

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

![E-Mail Einstellungen](/img/einstellungen/email-settings.png)

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

:::warning Sicherheitshinweis
In Produktivumgebungen sollten Sie immer "Sichere Verbindung" aktivieren und "Nicht zertifizierte Verbindungen ablehnen" einschalten, um die Sicherheit der E-Mail-Kommunikation zu gewährleisten.
:::

**Speichern / Löschen**
- **Speichern** (grün) - Speichert die E-Mail-Einstellungen
- **Löschen** (rot) - Löscht die aktuellen Konfigurationen

---

## Container

![Container Übersicht](/img/einstellungen/container.png)

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

:::info Fortgeschrittene Verwaltung
Die Container-Übersicht ist für fortgeschrittene Administratoren. Änderungen sollten nur mit entsprechendem Docker-Know-how vorgenommen werden.
:::

---

## Benutzerverwaltung

![Benutzerverwaltung](/img/einstellungen/user-admin.png)

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

![Info / Lizenz](/img/einstellungen/info-license.png)

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
