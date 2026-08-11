# MDM – Mobile Device Management (Relution)

Die App **MDM** (Mobile Device Management) verwaltet die mobilen Geräte Ihrer Schule – Tablets, Smartphones und Computer. edulution UI dient dabei als Oberfläche für das **Relution-MDM-Backend**: Sie sehen und steuern hier Ihre Geräteflotte, ohne die Relution-Konsole separat öffnen zu müssen.

:::info[Relution als Backend]
Alle Daten stammen aus einer angebundenen **Relution**-Instanz und werden live über deren API geladen. edulution UI hält dafür keinen eigenen Zwischenspeicher. Der Name **Relution** taucht in der Oberfläche nur in Beschreibungen, der Benutzerverwaltung und in Fehlermeldungen auf – überall sonst heißt die App schlicht **MDM**.
:::

## Voraussetzungen

Die App erscheint erst in der Seitenleiste, wenn ein **Global-Administrator** sie in den Einstellungen konfiguriert hat.

Die Konfiguration erfolgt unter **Einstellungen → App-Store** (bzw. App-Konfiguration) für die App **MDM**:

| Feld | Beschreibung |
|------|--------------|
| **URL** | Adresse Ihrer Relution-Instanz, z. B. `https://<host>/` |
| **API-Key** | API-Token eines Relution-Service-Accounts mit Administrationsrechten |
| **Proxy-Konfiguration** | Optionale Proxy-Einstellungen für die Verbindung zu Relution |
| **Gruppen für Sync** | Benutzergruppen, deren Mitglieder automatisch in Relution angelegt und gepflegt werden |

:::note[Automatische Benutzer-Synchronisation]
Mitglieder der unter **Gruppen für Sync** ausgewählten Gruppen werden automatisch als Benutzer in Relution angelegt und aktuell gehalten. Die Synchronisation läuft **einmal pro Stunde** und kann zusätzlich jederzeit manuell angestoßen werden (siehe [Benutzer](#benutzer)). Verlässt ein Benutzer alle Sync-Gruppen, wird sein Relution-Zugang wieder entfernt.
:::

## Zugriff und Berechtigungen

Nach der Konfiguration erreichen Sie die App über die **MDM**-Kachel in der Seitenleiste.

Der Funktionsumfang hängt von der Rolle ab:

| Bereich | Global-/Schuladmin | Reguläre Benutzer |
|---------|:---:|:---:|
| Übersicht, Geräte, Apps | ✅ | ✅ (eigener Geltungsbereich) |
| Geräteaktionen (Sperren, Neustart …) | ✅ | ✅ (eigene Geräte) |
| Einschreibungen anlegen/löschen | ✅ | – |
| Benutzer- und Token-Verwaltung, Sync | ✅ | – |

:::note[Geltungsbereich]
Administratoren sehen über den gemeinsamen Admin-Zugang **alle** Geräte, Apps und Benutzer der Organisation. Reguläre Benutzer verwenden ihren eigenen, automatisch angelegten Relution-Zugang und sehen daher nur die Geräte und Apps, für die ihr Relution-Konto berechtigt ist. Ist für einen Benutzer noch kein Relution-Zugang vorhanden, erscheint der Hinweis *„Für diesen Benutzer ist kein Relution-Zugang angelegt."*
:::

## Aufbau der App

Über die Seitenleiste der App wählen Sie zwischen folgenden Bereichen:

| Eintrag | Inhalt |
|---------|--------|
| **Übersicht** | Kennzahlen zur gesamten Geräteflotte |
| **Geräte** | Eingebuchte Geräte (Inventar) und offene Einschreibungen |
| **Apps** | Zur Verteilung freigegebene Apps |
| **Benutzer** | Relution-Benutzer und API-Token (nur Admins) |

## Übersicht

![MDM Übersicht](/img/features/mdm-overview.png)

Die Übersicht bündelt die wichtigsten Kennzahlen Ihrer Geräteflotte in Kacheln:

- **Geräte gesamt** – Anzahl aller eingebuchten Geräte
- **Nach Plattform** – Aufteilung nach iOS, Android usw.
- **Konform** – Anzahl der Geräte, die alle Richtlinien erfüllen
- **Freigegebene Apps** – Anzahl der zur Verteilung bereitstehenden Apps
- **Offline (24h+)** – Geräte ohne Kontakt seit mehr als 24 Stunden
- **Neue Einschreibungen (7 Tage)** – in der letzten Woche hinzugekommene Geräte
- **Sicherheitsauffällig** – Geräte mit Sicherheitshinweisen (z. B. Jailbreak)
- **Benutzer in Relution** – Anzahl der angelegten Relution-Benutzer

:::tip
Die Kacheln **Offline**, **Neue Einschreibungen**, **Sicherheitsauffällig** und **Benutzer in Relution** sind anklickbar und führen direkt zur passend gefilterten Geräte- bzw. Benutzerliste.
:::

## Geräte

Der Bereich **Geräte** ist in zwei Unterreiter gegliedert: **Inventar** und **Einschreibungen**.

### Inventar

![Geräte-Inventar](/img/features/mdm-devices.png)

Das Inventar listet alle aktuell in Relution eingebuchten Geräte:

| Spalte | Beschreibung |
|--------|--------------|
| **Name** | Bezeichnung des Geräts |
| **Plattform** | Betriebssystem (iOS, Android, macOS, Windows) |
| **Modell** | Gerätemodell |
| **Nutzer** | Zugeordneter Benutzer |
| **Status** | Konformitäts- bzw. Verbindungsstatus |
| **Letzter Kontakt** | Zeitpunkt der letzten Verbindung |

Über das Filterfeld suchen Sie nach dem Gerätenamen; ein zusätzlicher Filter blendet gezielt **Offline-**, **neu eingeschriebene** oder **sicherheitsauffällige** Geräte ein.

### Gerätedetails

{/* ![Gerätedetails](/img/features/mdm-device-details.png) */}

Ein Klick auf eine Zeile öffnet den Detaildialog des Geräts mit umfangreichen Informationen, gegliedert in die Abschnitte:

- **Allgemein** – Gerätename, Benutzer, Eigentümerschaft, Einschreibedatum
- **Details zum Gerät** – Modell, Seriennummer, Betriebssystem- und Build-Version, Batteriezustand, Speicher
- **Netzwerk** – IP-Adresse, WLAN- und Bluetooth-MAC, Netzwerktechnologie
- **Sicherheit** – Konformitätsstatus, Jailbreak, Aktivierungssperre, Passcode-Konformität, Verschlüsselung
- **Kommunikation** – Push-Status, letzte Anfrage des Relution-Agents
- **Position** – zuletzt bekannter Standort (sofern verfügbar)

### Geräteaktionen

Für einzelne Geräte (per Zeile) oder mehrere ausgewählte Geräte (Mehrfachauswahl) stehen folgende Aktionen bereit:

| Aktion | Wirkung |
|--------|---------|
| **Sperren** | Sperrt das Gerät |
| **Neustarten** | Startet das Gerät neu |
| **Herunterfahren** | Fährt das Gerät herunter |
| **Geräteinformationen aktualisieren** | Fordert aktuelle Gerätedaten von Relution an |

Nach dem Auslösen erscheint eine Bestätigung, z. B. *„Aktion an 3 Geräte gesendet."* Schlägt die Aktion für einzelne Geräte fehl, wird die Anzahl der betroffenen Geräte gemeldet.

### Gerät einschreiben (BYOD)

![Gerät einschreiben](/img/features/mdm-enroll.png)

Über die Schaltfläche **Gerät einschreiben** starten Sie die Einbuchung eines neuen Geräts. Im Dialog legen Sie fest:

| Feld | Beschreibung |
|------|--------------|
| **Plattform** | iOS, Android, Android Enterprise, macOS oder Windows |
| **Bezeichnung** | Freier Name, z. B. *„iPad Max Mustermann"* |
| **Benutzer** | Zuzuordnender Benutzer (Suchauswahl) |
| **BYOD (Bring Your Own Device)** | Privates Gerät statt Dienstgerät |
| **Einmalige Verwendung** | Einschreibung kann nur einmal genutzt werden |
| **Einschreibung per E-Mail senden** | Versendet die Einladung per E-Mail (nur bei gewähltem Benutzer) |

Nach **Einschreibung erzeugen** erhalten Sie einen **Passcode** und einen **Enrollment-Link** (als QR-Code). Der Nutzer öffnet den Link oder tippt den Passcode in der Relution-App ein, um das Gerät zu koppeln.

### Einschreibungen

![Einschreibungen](/img/features/mdm-enrollments.png)

Der Reiter **Einschreibungen** zeigt alle offenen Geräteeinschreibungen, die noch nicht gekoppelt wurden:

| Spalte | Beschreibung |
|--------|--------------|
| **Bezeichnung** | Name der Einschreibung |
| **Plattform** | Zielplattform |
| **Benutzer** | Zugeordneter Benutzer |
| **Status** | Erstellt, Einladung versendet, Eingeschrieben, Gelöscht oder Ungültig |
| **Eigentum** | BYOD, Dienstgerät oder Unbekannt |
| **Angelegt am** | Erstellungszeitpunkt |

Sie können nach dem Status filtern und ausgewählte Einschreibungen über **Auswahl löschen** entfernen.

## Apps

![MDM Apps](/img/features/mdm-apps.png)

Der Bereich **Apps** listet alle Anwendungen, die zur Verteilung über Relution freigegeben sind:

| Spalte | Beschreibung |
|--------|--------------|
| **Name** | Anzeigename der App |
| **Bezeichner** | Technischer App-Identifier (z. B. Bundle-ID) |
| **Plattform** | Zielplattform |
| **Version** | Aktuelle Version |
| **Typ** | App-Typ |
| **Entwickler** | Herausgeber der App |
| **Letzte Aktualisierung** | Zeitpunkt der letzten Änderung |

## Benutzer

![MDM Benutzer](/img/features/mdm-users.png)

:::caution[Nur für Administratoren]
Der Bereich **Benutzer** ist ausschließlich für Global-/Schuladministratoren zugänglich.
:::

Hier verwalten Sie die **Relution-Benutzer** und deren API-Token:

| Spalte | Beschreibung |
|--------|--------------|
| **Benutzername** | Anmeldename |
| **Name** | Vollständiger Name |
| **E-Mail** | E-Mail-Adresse |
| **In Relution** | Ob der Benutzer in Relution angelegt ist |
| **Token vorhanden** | Ob ein API-Token hinterlegt ist |
| **Angelegt am** | Erstellungszeitpunkt |

Zwei Aktionen stehen bereit:

- **Jetzt syncen** – stößt die Synchronisation der Sync-Gruppen mit Relution sofort an. Das Ergebnis wird gemeldet, z. B. *„Sync OK · neu: 4 · aktualisiert: 12 · entfernt: 1"*.
- **Auswahl löschen** – entfernt die Relution-Zugänge der ausgewählten Benutzer.

## Siehe auch

- [Einstellungen](../administration/einstellungen.md) – App-Konfiguration durch den Global-Admin
- [App-Store & Anwendungen](app-store.md) – Apps installieren und verwalten
- [Relution](https://www.relution.io/) – Herstellerseite des MDM-Backends
