# Mobile App & Tablet-Nutzung

Die edulution Mobile App bietet vollständigen Zugriff auf alle Funktionen auch auf Smartphones und Tablets.

## Mobile Kopfleiste

Auf Smartphones und Tablets erscheint über dem Seiteninhalt eine Kopfleiste. Sie ersetzt die dauerhaft eingeblendete Seitenleiste der Desktop-Ansicht – App-Menü und Seitenleiste fahren stattdessen nur bei Bedarf ein. Öffnen Sie die Plattform über die [edulution.io App](/docs/edulution-app/), erscheint die Kopfleiste unabhängig von der Bildschirmgröße, also auch auf einem iPad im Querformat.

### Aufbau

| Position | Element | Sichtbar |
| --- | --- | --- |
| links | **Menü** (Hamburger-Symbol) | wenn Sie angemeldet sind und die geöffnete App eine eigene Menüleiste mitbringt |
| Mitte | **App-Funktionen** (Handy-Symbol) | nur in der edulution.io App ab Version 2.0 |
| Mitte | **Neu laden** (Kreispfeil) | in der edulution.io App immer, im mobilen Browser nur vor der Anmeldung und während des Starts |
| rechts | **Benachrichtigungen** (Glocke) mit Zähler ungelesener Meldungen | wenn Sie angemeldet sind |
| rechts | **Seitenleiste** (edulution-Logo) | wenn Sie angemeldet sind |

Menü- und Seitenleisten-Symbol wechseln zu einem **X**, solange das jeweilige Menü offen ist. Beim Öffnen des einen schließt sich das andere, sodass immer nur ein Menü sichtbar ist.

### Neu laden

In der App gibt es keine Adressleiste und damit keine Reload-Schaltfläche des Browsers. Diese Aufgabe übernimmt die Schaltfläche **Neu laden**:

- Sind Sie angemeldet und die Oberfläche ist vollständig geladen, wird nur die aktuelle Seite neu aufgebaut – Ihre Anmeldung bleibt erhalten.
- Andernfalls, etwa auf der Anmeldeseite oder wenn die Oberfläche beim Start hängt, wird die gesamte Oberfläche neu geladen.

Im mobilen Browser erscheint die Schaltfläche nur, solange die Oberfläche noch nicht vollständig geladen ist – etwa auf der Anmeldeseite. Danach entfällt sie, weil dort der Reload des Browsers zur Verfügung steht.

## App-Funktionen [tags: ios, android]

Wird die Plattform über die edulution.io App geöffnet, öffnet das **Handy-Symbol** in der Kopfleiste ein Auswahlfenster am unteren Bildschirmrand. Darin liegen die Funktionen, die nicht die Website, sondern die App selbst bereitstellt. Ein Tippen bringt Sie direkt in den passenden App-Bereich, statt dass Sie die App über das Betriebssystem in den Vordergrund holen und dort suchen müssen.

| Schnellaktion | Öffnet in der App | Voraussetzung |
| --- | --- | --- |
| **Konto wechseln** | die Konto-Übersicht, in der Sie zwischen Ihren Profilen umschalten | keine – auch auf der Anmeldeseite verfügbar |
| **QR-Scanner** | den Kamera-Scanner für QR-Codes | angemeldet |
| **Schülerausweis** bzw. **Mitarbeiterausweis** | den digitalen Ausweis Ihres Kontos | angemeldet |
| **OTP anzeigen** | das Einmalpasswort (TOTP) des aktiven Kontos | angemeldet, [Zwei-Faktor-Authentifizierung](./sicherheit.md#zwei-faktor-authentifizierung-2fa) aktiv, App ab Version 2.1.11 |

Wie der Ausweis heißt, richtet sich nach dem Organisationstyp der Installation: In Schulen ist es der **Schülerausweis**, in Unternehmen und in der öffentlichen Verwaltung der **Mitarbeiterausweis**. Was der Ausweis enthält, steht unter [Die edulution.io App](/docs/edulution-app/).

**OTP anzeigen** erscheint nur, wenn Sie die Zwei-Faktor-Authentifizierung für Ihr Konto eingerichtet haben. Ohne 2FA gibt es kein Einmalpasswort, das die App anzeigen könnte.

## Dateien in der App öffnen [tags: ios, android]

In der App bietet jede Zeile der [Dateiverwaltung](../dateien/index.md) zusätzlich die Aktion **In App öffnen**. Damit übergibt die Plattform die Datei an die App, die sie mit den Mitteln des Betriebssystems anzeigt – unter iOS über die Dateien-App. Im Browser entfällt die Aktion.

Dauerhaften Zugriff auf ganze Freigaben richten Sie stattdessen in den Konto-Einstellungen der App ein, siehe [Dateien in iOS Files-App integrieren](/docs/edulution-app/setup).

## App-Version und Funktionsumfang [tags: ios, android]

Die App meldet der Plattform ihre Version. Danach entscheidet sich, welche App-Funktionen die Oberfläche anbietet:

| App-Version | Verfügbar |
| --- | --- |
| unter 2.0 | nur **Neu laden** – Handy-Symbol, Schnellaktionen und **In App öffnen** fehlen |
| ab 2.0 | Handy-Symbol mit den Schnellaktionen sowie **In App öffnen** in der Dateiverwaltung |
| ab 2.1.11 | zusätzlich die Schnellaktion **OTP anzeigen** |

:::tip[Ältere App-Versionen]
Fehlt das Handy-Symbol, obwohl Sie die App verwenden, ist die App zu alt. Aktualisieren Sie sie im App Store beziehungsweise im Play Store. Bei Versionen älter als 2.1.0 empfehlen wir, die App zu deinstallieren und neu zu installieren – siehe [Einrichtung der edulution App](/docs/edulution-app/setup).
:::

## Weitere Unterschiede zur Browser-Ansicht [tags: ios, android]

In der App verhält sich die Oberfläche an einigen Stellen anders als im mobilen Browser:

- Auf der Anmeldeseite entfällt das Passwortfeld – die Anmeldung übernimmt die App mit dem gespeicherten Konto.
- Konferenzen laufen nicht eingebettet: Beim Beitreten erscheint der Dialog **Dieser Konferenz beitreten** mit der Schaltfläche **In neuem Tab öffnen**.
- Die Fußzeile entfällt, also auch die dort verlinkten Seiten [Impressum und Datenschutzerklärung](./impressum-datenschutz.md). Beide bleiben über ihre Adresse erreichbar.

## Dashboard auf Tablets

Das Dashboard wurde speziell für Touch-Bedienung optimiert und zeigt alle wichtigen Informationen übersichtlich an.

### Hauptbereiche

#### Konto-Informationen
- **Name**: Vollständiger Benutzername
- **E-Mail**: Ihre E-Mail-Adresse
- **Schule**: Zugeordnete Schule
- **Rolle**: Ihre Rolle im System (z.B. Lehrer)
- Schnellzugriff: Passwort ändern, Daten löschen

#### Klassen
- Übersicht aller Klassen (z.B. 11a, 11c, 12a)
- Direktauswahl "niclass" für schnellen Zugriff

#### Mobiler Zugriff
Verschiedene Zugriffsmöglichkeiten auf die Plattform:
- **QR-Code**: Scannen für App-Download
- **PWA**: Progressive Web App für Browser-Installation
- **Anleitung**: Schritt-für-Schritt-Anweisungen

#### Aktuelles
- **Infoboard**: Aktuelle Mitteilungen
- **Konferenzen**: Laufende oder geplante Konferenzen
- **Mail**: Ungelesene Mails
- **Umfragen**: Offene Umfragen mit Ablaufdatum

#### Quotas
Speichernutzung im Überblick:
- **Schul-Quota**: Verwendeter Speicher (z.B. 43.67 / 2506 MiB)
- **Cloudquota**: Cloud-Speicher (z.B. 2506 MiB bereitgestellt)
- **Mailquota**: E-Mail-Speicher (z.B. 306 MiB bereitgestellt)

## App-Download

![QR-Code App](/img/features/qr-code-app.jpeg)

### Installation

1. Öffnen Sie die edulution.io APP mit dem QR-Code
2. Scannen Sie den QR-Code mit Ihrer Kamera-App
3. Folgen Sie dem Download-Link
4. Installieren Sie die App auf Ihrem Gerät

### Alternative: PWA

Die Progressive Web App kann direkt im Browser verwendet werden:
1. Öffnen Sie edulution.io im Browser
2. Klicken Sie auf "Zur Startseite hinzufügen"
3. Die App wird wie eine native App installiert

## Whiteboard-Synchronisation

![Whiteboard Sync](/img/features/whiteboard-sync.png)

Zeichnungen und Notizen werden in Echtzeit zwischen Desktop und Mobile synchronisiert:

- **Echtzeit-Sync**: Änderungen erscheinen sofort auf allen Geräten
- **Handschrift-Unterstützung**: Schreiben mit Stift oder Finger
- **Zeichenwerkzeuge**: Verschiedene Stifte, Formen und Farben
- **Seiten-Navigation**: Mehrere Seiten in einem Dokument

### Verwendung

1. Öffnen Sie das Whiteboard auf einem Gerät
2. Erstellen Sie Zeichnungen oder Notizen
3. Die Inhalte erscheinen automatisch auf anderen angemeldeten Geräten
4. Arbeiten Sie kollaborativ an denselben Inhalten

## Touch-Optimierung

Die gesamte Oberfläche wurde für Touch-Bedienung optimiert:

- Große Schaltflächen und Touch-Targets
- Wischgesten für Navigation
- Responsive Design für alle Bildschirmgrößen
- Optimierte Performance auf mobilen Geräten

## Offline-Funktionalität

Einige Funktionen stehen auch offline zur Verfügung:
- Zugriff auf gespeicherte Dokumente
- Lokale Notizen
- Automatische Synchronisation bei Verbindung

## Systemanforderungen

### iOS
- iOS 14.0 oder höher
- iPhone 6s oder neuer
- iPad Air 2 oder neuer

### Android
- Android 8.0 oder höher
- Mindestens 2 GB RAM
- Chrome Browser empfohlen
