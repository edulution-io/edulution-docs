# Administration

Diese Seite beschreibt die grundlegende Administration der edulution Mail Lösung.

## Inhaltsverzeichnis

- [Mailcow Administrationsoberfläche](#mailcow-administrationsoberfläche)
- [Verwaltungsfunktionen](#verwaltungsfunktionen)

---

## Mailcow Administrationsoberfläche

Die Mailcow Administrationsoberfläche ist ein leistungsstarkes Tool zur
Verwaltung Ihrer E-Mail-Dienste. Sie ist standardmäßig über Port `8443`
erreichbar.

**Zugriff auf die Oberfläche:**

Sie erreichen die Mailcow UI über die IP-Adresse oder den Hostnamen
Ihres Servers, gefolgt vom Port `:8443`.

:::warning
Es wird dringend empfohlen, den Zugriff auf die Mailcow
Administrationsoberfläche auf interne Netzwerke zu beschränken, da sie
sensible Verwaltungsfunktionen bietet. Sollte der Port öffentlich
zugänglich sein, ist es unerlässlich, das Standardpasswort sofort zu
ändern.
:::

**Standard-Zugangsdaten (nach der Installation):**

- **Benutzername:** `admin`
- **Passwort:** `moohoo`

![Mailcow Admin Login](/_static/mailcow-admin-login.png)

## Verwaltungsfunktionen

Über die Mailcow UI können Sie eine Vielzahl von Aufgaben durchführen:

### E-Mail-Verwaltung
- **Mailboxen verwalten:** Erstellen, bearbeiten und löschen von E-Mail-Konten
- **Domain-Verwaltung:** Konfiguration von E-Mail-Domains
- **Sync-Job Logs:** Überprüfung der Protokolle von Synchronisierungs-Jobs

### Sicherheit
- **Spam- und Antivirus-Einstellungen:** Anpassung der Schutzmechanismen
- **Systemstatus:** Überwachung der Mailserver-Leistung und -Gesundheit

## Webmail (SOGo) {#webmail-sogo}

Das Webmail-Interface basiert auf SOGo und ist über `https://mail.ihre-domain.de/SOGo` erreichbar.

**Features:**
- Vollständige E-Mail-Funktionalität
- Kalender mit CalDAV
- Kontakte mit CardDAV
- Mobile-optimierte Ansicht

### Weitere Themen

Die folgenden Themen sind in separaten Dokumenten verfügbar:

- [Mail-Migration für Administratoren](admin_mail_migration) - E-Mail-Synchronisierung einrichten
- [Mail-Migration für Benutzer](user_mail_migration) - Eigene E-Mails migrieren
- [Verteilerlisten](verteilerlisten) - Projekt-basierte E-Mail-Verteiler
- [Benutzer-Mailformate anpassen](benutzer_mailformate) - E-Mail-Adressen-Schema konfigurieren
