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

**Theme anpassen:**
Das Design des SOGo Webmailers (hell/dunkel) kann in den Einstellungen angepasst werden.
[→ E-Mail-Einstellungen](/docs/edulution-ui/administration/einstellungen#e-mails)

## Synchronisation

### Wie funktioniert die Synchronisation?

Die Synchronisation zwischen Keycloak/Linuxmuster und Mailcow erfolgt automatisch in definierbaren Intervallen. Dabei werden:

- **Domains** automatisch erstellt und verwaltet
- **Benutzer-Mailboxen** basierend auf Keycloak-Gruppen synchronisiert
- **Aliase** für Benutzer eingerichtet
- **Verteilergruppen** aus Keycloak übernommen

Alle Änderungen in Keycloak werden beim nächsten Sync-Durchlauf erkannt und in Mailcow übertragen.

### Sync-Intervall

Das Standard-Sync-Intervall beträgt **300 Sekunden** (5 Minuten). Sie können das Intervall über die Umgebungsvariable `SYNC_INTERVAL` anpassen:

```bash
SYNC_INTERVAL=600  # Sync alle 10 Minuten
```

### Welche Gruppen werden synchronisiert?

Standardmäßig werden folgende Keycloak-Gruppen synchronisiert:
- `role-schooladministrator`
- `role-teacher`
- `role-student`

Sie können die zu synchronisierenden Gruppen über `GROUPS_TO_SYNC` anpassen (siehe [Konfiguration](#konfiguration)).

## Soft Delete Feature

Das Soft Delete Feature bietet einen Schutzmechanismus gegen versehentliches Löschen:

### Funktionsweise

1. **Deaktivierung statt Löschung**: Wenn Domains oder Mailboxen nicht mehr in Keycloak gefunden werden, werden sie zunächst nur deaktiviert
2. **Löschzeitpunkt**: Ein Löschzeitpunkt wird in der Beschreibung in Mailcow hinterlegt
   Format: `[DEACTIVATED - DELETE AT: 2024-02-01 15:30:00]`
3. **Kulanzfrist**: Nach einer konfigurierbaren Frist (Standard: 30 Tage) werden deaktivierte Elemente endgültig gelöscht
4. **Reaktivierung**: Tauchen Elemente während der Frist wieder in Keycloak auf, werden sie automatisch reaktiviert
5. **Ausnahmen**: Aliase und Filter werden sofort ohne Kulanzfrist gelöscht

### Konfiguration

```bash
# Soft Delete aktivieren/deaktivieren
SOFT_DELETE_ENABLED=1  # 1=aktiviert, 0=deaktiviert

# Kulanzfrist in Sekunden (Standard: 30 Tage = 2592000 Sekunden)
SOFT_DELETE_GRACE_PERIOD=2592000
```

:::tip Empfehlung
Lassen Sie das Soft Delete Feature aktiviert, um sich vor versehentlichem Datenverlust zu schützen. Die 30-tägige Kulanzfrist gibt genug Zeit, um Fehler zu korrigieren.
:::

## Konfiguration

### Umgebungsvariablen

Die wichtigsten Umgebungsvariablen für die Konfiguration:

| Variable | Standard | Beschreibung |
|----------|----------|--------------|
| `DEFAULT_USER_QUOTA` | 1000 | Mailbox-Kontingent pro Benutzer (MB) |
| `DOMAIN_QUOTA` | 10240 | Gesamt-Kontingent für die Domain (MB) |
| `GROUPS_TO_SYNC` | role-schooladministrator,role-teacher,role-student | Komma-getrennte Liste der zu synchronisierenden Keycloak-Gruppen |
| `ENABLE_GAL` | 1 | Globales Adressbuch aktivieren (1) oder deaktivieren (0) |
| `SYNC_INTERVAL` | 300 | Synchronisations-Intervall in Sekunden |
| `SOFT_DELETE_ENABLED` | 1 | Soft Delete aktivieren (1) oder deaktivieren (0) |
| `SOFT_DELETE_GRACE_PERIOD` | 2592000 | Kulanzfrist in Sekunden (30 Tage) |
| `MAILCOW_TZ` | Europe/Berlin | Zeitzone für Mailcow |

:::info Vollständige Liste
Eine vollständige Liste aller Umgebungsvariablen finden Sie im [edulution-mail Repository](https://github.com/edulution-io/edulution-mail#environment-variables).
:::

### Override-Konfiguration

Sie können Umgebungsvariablen über die Datei `mail.override.config` im Verzeichnis `MAILCOW_PATH` überschreiben.

**Speicherort:** `/srv/docker/edulution-mail/mail.override.config`

**Format:** JSON

#### Wann ist eine Override-Konfiguration sinnvoll?

Eine Override-Konfiguration ist besonders hilfreich für:

- **Anpassung des Sync-Intervalls** - Standard ist alle 5 Minuten (300 Sekunden). Bei vielen Benutzern kann ein längeres Intervall die Serverlast reduzieren.
- **Selektive Gruppen-Synchronisation** - Wenn Sie nur bestimmte Benutzergruppen synchronisieren möchten (z.B. nur Lehrer und Schüler, aber keine Administratoren).
- **Domain-Quota anpassen** - Falls die Gesamtgröße für die E-Mail-Domain erhöht werden muss.
- **Fallback-Quota für Benutzer** - Wenn in linuxmuster keine individuellen Mail-Quotas gesetzt sind, wird `DEFAULT_USER_QUOTA` als Fallback verwendet.

:::info Automatische Quota-Übernahme
Benutzer-Quotas werden automatisch aus linuxmuster (`sophomorixMailQuotaCalculated`) übernommen. `DEFAULT_USER_QUOTA` wird nur verwendet, wenn in linuxmuster kein Quota gesetzt ist.
:::

#### Beispiel-Konfiguration:

```json
{
  "DEFAULT_USER_QUOTA": 2000,
  "GROUPS_TO_SYNC": "role-teacher,role-student",
  "DOMAIN_QUOTA": 20480,
  "ENABLE_GAL": 1,
  "SYNC_INTERVAL": 600
}
```

**Hinweise zur Konfiguration:**

| Einstellung | Beschreibung | Empfehlung |
|-------------|--------------|------------|
| `SYNC_INTERVAL` | Wie oft synchronisiert wird (in Sekunden) | Standard: 300 (5 Min), bei vielen Benutzern: 600-900 (10-15 Min) |
| `DEFAULT_USER_QUOTA` | Fallback-Quota wenn linuxmuster kein Quota setzt (MB) | Standard: 1000 MB, Schulen: 2000-3000 MB |
| `DOMAIN_QUOTA` | Gesamt-Quota für die Domain (MB) | Standard: 10240 MB, sollte größer sein als Summe aller Benutzer-Quotas |
| `GROUPS_TO_SYNC` | Komma-getrennte Liste der zu synchronisierenden Gruppen | Mindestens: `role-teacher,role-student` |

Nach dem Erstellen oder Ändern der Override-Datei wird die Konfiguration beim nächsten Sync-Durchlauf automatisch übernommen (siehe `SYNC_INTERVAL`).

## Synchronisation temporär deaktivieren

Für Wartungsarbeiten (z.B. Backup oder Restore) können Sie die Synchronisation temporär deaktivieren:

```bash
# Sync deaktivieren
touch /srv/docker/edulution-mail/DISABLE_SYNC

# Ihre Wartungsarbeiten durchführen
# ...

# Sync wieder aktivieren
rm /srv/docker/edulution-mail/DISABLE_SYNC
```

Die Synchronisation prüft bei jedem Durchlauf (siehe `SYNC_INTERVAL`), ob die Datei `DISABLE_SYNC` existiert und überspringt den Sync in diesem Fall.

:::warning Wichtig
Vergessen Sie nicht, die Datei nach Abschluss der Wartungsarbeiten zu löschen, damit die Synchronisation wieder aufgenommen wird!
:::

## Login-Mechanismus

### IMAP, POP3 und SMTP Login

Der Login über IMAP, POP3 und SMTP erfolgt über ein LUA-Script (`edulution-sso.lua`) im Dovecot-Container. Das Script:

1. Leitet Login-Versuche an die edulution-mail API weiter
2. Die API authentifiziert gegen Keycloak oder LDAP
3. Bei erfolgreicher Authentifizierung wird der Zugriff gewährt

### SOGo Webmail Login

Ein direkter Login in SOGo ist nicht möglich. Der Login erfolgt über:

```
https://<MAILSERVER>/sogo-auth.php?token=<KEYCLOAK_TOKEN>
```

Der Token wird über die edulution-mail API mit Keycloak validiert. Bei erfolgreicher Validierung erfolgt eine Weiterleitung zum SOGo Webmail.

### Weitere Themen

Die folgenden Themen sind in separaten Dokumenten verfügbar:

- [Mail-Migration für Administratoren](admin_mail_migration) - E-Mail-Synchronisierung einrichten
- [Mail-Migration für Benutzer](user_mail_migration) - Eigene E-Mails migrieren
- [Verteilerlisten](verteilerlisten) - Projekt-basierte E-Mail-Verteiler
- [Benutzer-Mailformate anpassen](benutzer_mailformate) - E-Mail-Adressen-Schema konfigurieren
