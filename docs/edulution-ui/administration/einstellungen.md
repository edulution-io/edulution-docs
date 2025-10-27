# Einstellungen (Settings)

Die Einstellungen sind nur für Global-Admins zugänglich und ermöglichen die zentrale Konfiguration von edulution.io.

:::caution Nur Global-Admin
Diese Seite ist nur als Global-Administrator sichtbar. Sie erscheint im Menü rechts unten.
:::

## Zugriff

Als Global-Admin finden Sie **Einstellungen** (Zahnrad-Symbol) im Menü rechts unten.

## Tabs

Die Einstellungen sind in 4 Bereiche gegliedert:
- **Container** - Docker Container Verwaltung
- **Globale Einstellungen** - Systemweite Einstellungen
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
