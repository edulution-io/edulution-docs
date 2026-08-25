# Sicherheit


![Sicherheit](/img/benutzer/profil-sicherheit.png)

Konfigurieren Sie hier die Sicherheitseinstellungen Ihres Accounts.

:::tip[Die Verfahren dahinter]
Diese Seite beschreibt den Dialog. Wie Passwort-Tresor und Zwei-Faktor-Authentifizierung
funktionieren, welche Authenticator-Apps unterstützt werden und wie edulution Passwörter auf dem
Server verschlüsselt, steht unter
[Sicherheit & Authentifizierung](../../features/sicherheit.md).
:::

## Passwort ändern

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

Das geänderte Passwort gilt für alle Dienste, die Sie über edulution nutzen – etwa Dateien, E-Mail und die Anmeldung an der Oberfläche selbst. Ihre Einrichtung kann darüber hinaus strengere Anforderungen festlegen; diese werden erst beim Speichern geprüft.

:::tip[Für Administratoren]
Wie die Passwortänderung eingerichtet wird und welche Voraussetzungen Keycloak und der Linuxmuster-Server dafür erfüllen müssen, beschreibt [Passwortänderung einrichten](../../konfiguration/passwort-aenderung.md).
:::

## Zwei-Faktor-Authentifizierung

Zusätzliche Sicherheit für Ihr Konto:

- **Status**: "Aktuell ist die Zwei-Faktor-Authentifizierung deaktiviert"
- **Aktivieren**: Schalten Sie den Toggle-Schalter um, um 2FA zu aktivieren
- Nach Aktivierung erhalten Sie einen QR-Code für Ihre Authenticator-App
- Unterstützte Apps: Google Authenticator, Microsoft Authenticator, Authy

**Vorteile der 2FA:**
- Erhöhter Schutz gegen unbefugten Zugriff
- Zweiter Faktor neben dem Passwort erforderlich
- Schutz auch bei kompromittiertem Passwort

## Passwort-Tresor

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

**Status:** "Keine Daten verfügbar", wenn noch keine Einträge vorhanden sind

Weitere Details unter [Sicherheit & Authentifizierung](../../features/sicherheit.md#passwort-tresor).

---
