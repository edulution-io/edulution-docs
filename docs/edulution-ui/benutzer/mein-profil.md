# Mein Profil

Über das Profil-Menü (unten rechts im Dashboard) können Sie auf Ihre persönlichen Einstellungen und Kontoinformationen zugreifen.

![Dashboard Profil-Menü](/img/benutzer/dashboard-profil-menu.png)

## Zugriff auf Mein Profil

1. Klicken Sie auf Ihr Profilbild unten rechts
2. Wählen Sie **My Profile** aus dem Dropdown-Menü
3. Alternativ: **Logout** zum Abmelden

## Übersicht der Bereiche

Das Profil ist in fünf Hauptbereiche unterteilt:
- [Benutzerdetails](#benutzerdetails)
- [Sicherheit](#sicherheit)
- [E-Mail](#e-mail)
- [Sprache](#sprache)
- [App-Zugriff](#app-zugriff)

---

## Benutzerdetails

![Benutzerdetails](/img/benutzer/profil-benutzerdetails.png)

Hier können Sie Ihre persönlichen Informationen einsehen und teilweise bearbeiten.

### Profilbild

- Upload eines eigenen Profilbilds
- Klicken Sie auf **Choose File** um ein Bild hochzuladen
- Unterstützte Formate: JPG, PNG
- **Löschen**: Entfernt das aktuelle Profilbild
- **Speichern**: Übernimmt die Änderungen

### Benutzerbezogene Informationen

Die folgenden Felder werden angezeigt:

| Feld | Beschreibung | Bearbeitbar |
|------|--------------|-------------|
| **Benutzername** | Ihr Login-Name (z.B. "agy-netzint-teacher") | Nein (schreibgeschützt) |
| **Anzeigename** | Ihr vollständiger Name (z.B. "Testteacher agy-Netzint") | Ja |
| **Geburtsdatum** | Ihr Geburtsdatum (z.B. "02.02.1990") | Nein (schreibgeschützt) |
| **E-Mail** | Ihre E-Mail-Adresse | Nein (schreibgeschützt) |
| **Schulname** | Zugeordnete Schule (z.B. "agy") | Nein (schreibgeschützt) |
| **Rolle** | Ihre Systemrolle (z.B. "Lehrer") | Nein (schreibgeschützt) |
| **Klassen** | Liste Ihrer Klassen (z.B. "5a, 9a, 10a, 10b, niclass") | Nein (schreibgeschützt) |

### Änderungen speichern

- Klicken Sie auf **Speichern** (grün) um Änderungen zu übernehmen
- Klicken Sie auf **Löschen** (rot) um Änderungen zu verwerfen

---

## Sicherheit

![Sicherheit](/img/benutzer/profil-sicherheit.png)

Konfigurieren Sie hier die Sicherheitseinstellungen Ihres Accounts.

### Passwort ändern

So ändern Sie Ihr Passwort:

1. Geben Sie Ihr **Aktuelles Passwort** ein
2. Geben Sie Ihr **Neues Passwort** ein
3. Wiederholen Sie das neue Passwort unter **Passwort bestätigen**
4. Klicken Sie auf den grünen Button **Passwort ändern**

**Passwort-Anforderungen:**
- Mindestens 8 Zeichen
- Kombination aus Groß- und Kleinbuchstaben empfohlen
- Mindestens eine Zahl empfohlen
- Sonderzeichen erhöhen die Sicherheit

### Zwei-Faktor-Authentisierung

Zusätzliche Sicherheit für Ihr Konto:

- **Status**: "Aktuell ist die Zwei-Faktor-Authentisierung deaktiviert"
- **Aktivieren**: Schalten Sie den Toggle-Schalter um, um 2FA zu aktivieren
- Nach Aktivierung erhalten Sie einen QR-Code für Ihre Authenticator-App
- Unterstützte Apps: Google Authenticator, Microsoft Authenticator, Authy

**Vorteile der 2FA:**
- Erhöhter Schutz gegen unbefugten Zugriff
- Zweiter Faktor neben dem Passwort erforderlich
- Schutz auch bei kompromittiertem Passwort

### Passwort-Tresor

Sichere Verwaltung Ihrer Zugangsdaten für verschiedene Anwendungen.

**Beschreibung:**
"Hier kannst du deine Zugangsdaten für verschiedene Anwendungen speichern. Diese werden verschlüsselt und sind nur für dich sichtbar."

**Funktionen:**
- Zentrale Speicherung von Passwörtern
- Verschlüsselte Ablage
- Nur für Sie sichtbar
- **+** Symbol: Neue Zugangsdaten hinzufügen
- **-** Symbol: Einträge entfernen

**Tabellenspalten:**
- **Anwendung**: Name der Anwendung
- **Benutzername**: Login-Name
- **Passwort**: Verschlüsseltes Passwort (ausblendbar)

**Status:** "Keine Daten verfügbar" wenn noch keine Einträge vorhanden

Weitere Details unter [Sicherheit & Authentifizierung](../features/sicherheit.md#passwort-tresor).

---

## E-Mail

![E-Mail](/img/benutzer/profil-email.png)

Konfiguration der E-Mail-Synchronisation für mobile Geräte.

### E-Mail-Sync

Einrichtung der E-Mail-Synchronisation:
- **Dropdown-Menü**: "Laden..." zeigt verfügbare Sync-Optionen
- **E-Mail-Adresse**: Tragen Sie Ihre E-Mail-Adresse ein
- **Passwort**: Ihr E-Mail-Passwort für die Synchronisation

### Sync-Jobs

Übersicht über aktive E-Mail-Synchronisationen:

**Tabellenspalten:**
- **Hostname**: Mail-Server Adresse
- **Port**: Verwendeter Port
- **Verschlüsselung**: SSL/TLS Einstellungen
- **Benutzername**: Login-Name
- **Sync-Intervall**: Häufigkeit der Synchronisation
- **Aktiv**: Status der Synchronisation

**Status:** "Keine Daten verfügbar" wenn keine Sync-Jobs konfiguriert

**Aktionen:**
- **Neu laden**: Button zum Aktualisieren der Sync-Job Liste

:::tip Hinweis
Weitere Informationen zur E-Mail-Migration finden Sie unter [E-Mail Migration](../../edulution-mail/user_mail_migration.md).
:::

---

## Sprache

![Sprache](/img/benutzer/profil-sprache.png)

Wählen Sie die Sprache der Benutzeroberfläche.

### Systemsprache

Verfügbare Sprachen:
- 🇩🇪 **Deutsch** (Standard)
- 🇬🇧 **Englisch**
- 🇫🇷 **Französisch**

### Sprache ändern

1. Klicken Sie auf die gewünschte Flagge/Sprache
2. Die Oberfläche wird automatisch aktualisiert
3. Keine zusätzliche Bestätigung erforderlich

**Hinweis:** Die Sprachauswahl gilt für die gesamte Benutzeroberfläche.

---

## App-Zugriff

![App-Zugriff](/img/benutzer/profil-app-zugriff.png)

Einrichtung des mobilen Zugriffs auf Ihre Dateien über die edulution.io App.

:::info Nur für iOS
Aktuell ist die edulution.io App nur für Apple iOS verfügbar.
:::

### Lade hier die edulution.io App herunter

**Optionen zum Download:**
- **Einrichtung via QR-Code**: Scannen Sie den QR-Code mit Ihrem iPhone/iPad
- **Manuelles Einrichten**: Geben Sie die Daten manuell ein

### Einrichtung via QR-Code

1. Klicken Sie auf "Einrichtung via QR-Code"
2. Scannen Sie den angezeigten QR-Code mit Ihrer iPhone-Kamera
3. Folgen Sie den Anweisungen zum App-Download

### Manuelles Einrichten

Wenn Sie die Verbindung manuell einrichten möchten:

**Dialog: "Verbindung einrichten"**

Folgende Daten werden benötigt:

1. **Bitte gib die Anmeldedaten zum Schulserver an**
2. **QR Code scannen**: Alternative zum manuellen Eingeben

   **ODER**

3. **edulution.io**: App-Bezeichnung
4. **Server-URL**: z.B. "https://ui-73.dev.multi.schule/webdav"
5. **Benutzername**: Ihr Login (z.B. "agy-netzint-teacher")
6. **Passwort**: Ihr Passwort (Eingabefeld)
7. Klicken Sie auf **+ Hinzufügen**

**Wichtige Informationen:**
- Die Verbindung ermöglicht Zugriff auf Ihre Dateien
- WebDAV-Protokoll für Dateiübertragung
- Sichere verschlüsselte Verbindung (HTTPS)

### Nach der Einrichtung

- Zugriff auf Ihre Schuldateien von unterwegs
- Synchronisation Ihrer Dokumente
- Offline-Verfügbarkeit (je nach App-Einstellung)

Weitere Details unter [Mobile App & Tablet-Nutzung](../features/mobile-app.md).

---

## Schnellzugriffe

Vom Dashboard aus erreichen Sie das Profil-Menü über:
- Klick auf Ihr Profilbild (unten rechts)
- **My Profile** für Profileinstellungen
- **Logout** zum Abmelden

## Siehe auch

- [Dashboard](../features/dashboard.md) - Zurück zum Dashboard
- [Sicherheit & Authentifizierung](../features/sicherheit.md) - Detaillierte Sicherheitseinstellungen
- [Mobile App](../features/mobile-app.md) - Mobile Nutzung
- [E-Mail Migration](../../edulution-mail/user_mail_migration.md) - E-Mail einrichten
