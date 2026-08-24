# Sicherheit & Authentifizierung

edulution bietet umfassende Sicherheitsfunktionen zum Schutz von Zugangsdaten und sensiblen Informationen.

## Passwort-Tresor

![Passwort-Manager](/img/features/security-password-manager.jpeg)

Der integrierte Passwort-Tresor speichert Zugangsdaten für verschiedene Anwendungen sicher und verschlüsselt.

### Funktionen

- **Zentrale Verwaltung**: Alle Passwörter an einem Ort
- **Anwendungsspezifisch**: Separate Einträge für verschiedene Apps (KI Chat, Ticketsystem, etc.)
- **Sichtbarkeit**: Passwörter können ein-/ausgeblendet werden
- **Bearbeitung**: Zugangsdaten können jederzeit aktualisiert werden

### Tresor-PIN

![Tresor-PIN](/img/features/security-tresor-pin.png)

Zusätzlicher Schutz durch PIN-Authentifizierung:

- **5-stellige PIN**: Numerische PIN zum Entsperren des Tresors
- **Zeitbasiert**: Automatische Sperre nach Inaktivität
- **Biometrische Unterstützung**: Optional mit Fingerabdruck oder Gesichtserkennung

## Zwei-Faktor-Authentifizierung (2FA)

Die Zwei-Faktor-Authentifizierung bietet eine zusätzliche Sicherheitsebene für Ihr Konto.

### Aktivierung

1. Navigieren Sie zu **Benutzereinstellungen** → **Sicherheit**
2. Klicken Sie auf **Zwei-Faktor-Authentisierung**
3. Aktivieren Sie den Toggle-Schalter
4. Scannen Sie den QR-Code mit Ihrer Authenticator-App
5. Bestätigen Sie die Aktivierung mit einem generierten Code

### Unterstützte Authenticator-Apps

- Google Authenticator
- Microsoft Authenticator
- Authy
- Andere TOTP-kompatible Apps

## Passwort ändern

![Passwort ändern](/img/features/security-password-manager.jpeg)

### Passwort-Anforderungen

- Mindestens 8 Zeichen – diese Länge prüft das Formular direkt bei der Eingabe
- Kombination aus Groß- und Kleinbuchstaben, Zahlen und Sonderzeichen erhöht die Sicherheit

Darüber hinausgehende Anforderungen legt Ihre Einrichtung zentral fest. Sie werden erst beim Speichern geprüft; ein Passwort, das ihnen nicht genügt, wird mit einer Fehlermeldung abgewiesen.

### Schritte zum Ändern

1. Gehen Sie zu **Benutzereinstellungen** → **Sicherheit**
2. Wählen Sie **Passwort ändern**
3. Geben Sie Ihr aktuelles Passwort ein
4. Geben Sie das neue Passwort zweimal ein
5. Klicken Sie auf **Passwort ändern**

Das neue Passwort wird zentral in der Benutzerverwaltung hinterlegt und gilt für alle Dienste, die Sie über edulution nutzen.

:::tip[Für Administratoren]
Die Einrichtung der Passwortänderung – Voraussetzungen in Keycloak, Rückfallweg über die Linuxmuster-API und mögliche Fehlermeldungen – beschreibt [Passwortänderung einrichten](../konfiguration/passwort-aenderung.md).
:::

## Best Practices

- Verwenden Sie für jeden Dienst ein einzigartiges Passwort
- Aktivieren Sie die Zwei-Faktor-Authentifizierung
- Ändern Sie Ihre Passwörter regelmäßig
- Teilen Sie niemals Ihre Zugangsdaten
- Nutzen Sie den Passwort-Tresor für sichere Verwaltung

## Verschlüsselung auf dem Server

Passwörter werden bereits im Browser verschlüsselt und auf dem Server zusätzlich
mit einem Master-Schlüssel geschützt. Wie das Verfahren funktioniert und was
Administratoren beim Betrieb und beim Backup beachten müssen, beschreibt
[Master-Key-Verschlüsselung](../konfiguration/master-key.md).
