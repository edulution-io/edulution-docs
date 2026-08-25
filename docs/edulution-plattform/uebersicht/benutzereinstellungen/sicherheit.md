# Sicherheit

Unter **Sicherheit** verwalten Sie Passwort, Zwei-Faktor-Authentifizierung und Passwort-Tresor
Ihres Kontos.

![Der Bereich Sicherheit in den Benutzereinstellungen](/img/benutzer/profil-sicherheit.png)

Der Bereich besteht aus drei Karten, die Sie über den Pfeil rechts oben einzeln ein- und
ausklappen. In der linken Leiste der Benutzereinstellungen stehen sie zusätzlich als Sprungmarken:
**Passwort ändern**, **Zwei-Faktor-Authentifizierung** und **Passwort-Tresor**.

## Passwort ändern

1. Geben Sie Ihr **Aktuelles Passwort** ein.
2. Geben Sie Ihr **Neues Passwort** ein.
3. Wiederholen Sie es unter **Passwort bestätigen**.
4. Klicken Sie auf **Passwort ändern**.

Über das Auge-Symbol am rechten Rand jedes Feldes machen Sie die Eingabe sichtbar.

### Anforderungen an das Passwort

- **Mindestens 8 Zeichen** – diese Länge prüft das Formular direkt bei der Eingabe.
- Groß- und Kleinbuchstaben, Zahlen und Sonderzeichen erhöhen die Sicherheit.

Darüber hinausgehende Anforderungen legt Ihre Einrichtung zentral fest. Sie werden erst **beim
Speichern** geprüft – ein Passwort, das ihnen nicht genügt, wird mit einer Fehlermeldung
abgewiesen.

Das neue Passwort wird zentral in der Benutzerverwaltung hinterlegt und gilt für alle Dienste, die
Sie über edulution nutzen – Dateien, E-Mail und die Anmeldung an der Oberfläche selbst.

:::tip[Für Administratoren]
Wie die Passwortänderung eingerichtet wird, welche Voraussetzungen Keycloak dafür erfüllen muss und
welcher Rückfallweg auf Linuxmuster-Systemen greift, beschreibt
[Passwortänderung einrichten](../../konfiguration/passwort-aenderung.md).
:::

## Zwei-Faktor-Authentifizierung

Die Karte zeigt zunächst den aktuellen Zustand – im Auslieferungszustand *„Aktuell ist die
Zwei-Faktor-Authentisierung **deaktiviert**."* Rechts daneben steht der Schalter **Aktivieren**.

So richten Sie den zweiten Faktor ein:

1. Schalten Sie **Aktivieren** um.
2. Scannen Sie den erscheinenden QR-Code mit Ihrer Authenticator-App.
3. Bestätigen Sie die Aktivierung mit einem in der App erzeugten Code.

Ab dann verlangt die Anmeldung neben dem Passwort einen sechsstelligen Einmalcode. Ein gestohlenes
Passwort allein genügt damit nicht mehr für den Zugriff auf Ihr Konto.

### Unterstützte Authenticator-Apps

Jede App, die zeitbasierte Einmalpasswörter (TOTP) beherrscht – unter anderem:

- Google Authenticator
- Microsoft Authenticator
- Authy
- die [edulution.io App](../../../edulution-app/index.md), die den Code direkt in der Kopfleiste
  anzeigt (ab App-Version 2.1.11)

## Passwort-Tresor

> *„Hier kannst du deine Zugangsdaten für verschiedene Anwendungen speichern. Diese werden
> verschlüsselt und sind nur für dich sichtbar."*

Im Tresor hinterlegen Sie Zugangsdaten für Anwendungen, die eine eigene Anmeldung mitbringen – etwa
ein Ticketsystem. edulution setzt sie beim Öffnen der jeweiligen Anwendung ein, sodass Sie sie nicht
jedes Mal eintippen müssen.

Über der Tabelle stehen die Zahl der hinterlegten **Konten**, ein Suchfeld **Suche nach Anwendung**
und die Auswahl **Spalten**, mit der Sie einzelne Spalten aus- und einblenden.

| Spalte | Inhalt |
| --- | --- |
| **Anwendung** | Name der Anwendung, für die die Zugangsdaten gelten |
| **Benutzername** | der Anmeldename – über das Symbol daneben in die Zwischenablage kopierbar |
| **Passwort** | verdeckt dargestellt; über das Auge-Symbol sichtbar, über das Kopier-Symbol übernehmbar |

Solange nichts hinterlegt ist, steht in der Tabelle **Keine Daten verfügbar**. Unter der Tabelle
legen Sie mit **+** einen neuen Eintrag an; mit **–** entfernen Sie die zuvor angehakten Einträge.

### Tresor-PIN

![Abfrage der Tresor-PIN beim Entschlüsseln der Zugangsdaten](/img/features/security-tresor-pin.png)

Der Tresor ist zusätzlich durch eine **fünfstellige PIN** geschützt. Sie wird abgefragt, sobald
Zugangsdaten entschlüsselt werden sollen – also beim Anzeigen, Kopieren oder beim automatischen
Anmelden an einer Anwendung. Neben den Eingabefeldern blenden Sie über die Tastenfeld-Schaltfläche
ein Ziffernfeld ein.

### Verschlüsselung auf dem Server

Passwörter werden bereits im Browser verschlüsselt und auf dem Server zusätzlich mit einem
Master-Schlüssel geschützt. Wie das Verfahren funktioniert und was Administratoren beim Betrieb und
beim Backup beachten müssen, beschreibt
[Master-Key-Verschlüsselung](../../konfiguration/master-key.md).

## Empfehlungen

- Verwenden Sie für jeden Dienst ein eigenes Passwort.
- Aktivieren Sie die Zwei-Faktor-Authentifizierung.
- Geben Sie Ihre Zugangsdaten niemals weiter – auch nicht an die Administration.
- Nutzen Sie den Passwort-Tresor, statt Zugangsdaten anderswo zu notieren.

## Siehe auch

- [Anmeldung](../anmeldung.md) – wie sich der zweite Faktor bei der Anmeldung auswirkt
- [Passwortänderung einrichten](../../konfiguration/passwort-aenderung.md) – die Administrationsseite dazu
- [Master-Key-Verschlüsselung](../../konfiguration/master-key.md) – wie edulution hinterlegte Passwörter schützt
