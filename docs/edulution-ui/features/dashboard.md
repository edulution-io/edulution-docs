# Dashboard

Das Dashboard ist Ihre zentrale Startseite nach dem Login in edulution.io. Hier finden Sie alle wichtigen Informationen und Schnellzugriffe für den digitalen Unterricht.

![Dashboard Desktop](/img/features/dashboard-desktop.png)

:::tip Anpassbar
Das Dashboard kann individuell angepasst werden. Weitere Informationen finden Sie unter [Dashboard anpassen](#dashboard-anpassen) (Dokumentation folgt).
:::

:::info Rollenbasierte Ansicht
Das Dashboard passt sich automatisch an Ihre Benutzerrolle an:
- **Lehrer**: Zugriff auf Klassenverwaltung und Unterrichtstools
- **Schüler**: Fokus auf Lernmaterialien und eigene Aufgaben
- **Global-Admin**: Zusätzlich **Settings-Button** (Zahnrad) rechts unten sichtbar

Nicht alle Bereiche und Funktionen sind für jede Rolle sichtbar.

![Dashboard Global-Admin](/img/features/dashboard-admin.png)
*Dashboard als Global-Admin mit Settings-Button (rot markiert)*
:::

## Übersicht

Das Dashboard bietet einen schnellen Überblick über:
- Ihre Kontoinformationen
- Ihre Klassen (abhängig von der Rolle)
- Verfügbare mobile Zugangsmöglichkeiten
- Speichernutzung (Quotas)
- Aktuelle Mitteilungen und Aktivitäten

## Bereiche des Dashboards

### Account Information

Zeigt Ihre persönlichen Informationen:

- **Name**: Ihr vollständiger Name (z.B. "Testteacher agy-Netzint")
- **E-Mail**: Ihre E-Mail-Adresse (z.B. "agy-netzint-teacher@linuxmuster.lan")
- **School**: Ihre zugeordnete Schule
- **Role**: Ihre Rolle im System (z.B. "Teacher")

#### Schnellaktionen
- **Change Password**: [Passwort ändern](../benutzer/mein-profil.md#passwort-ändern)
- **Change my data**: [Persönliche Daten aktualisieren](../benutzer/mein-profil.md#benutzerdetails)

### Classes

:::note Abhängig von der Rolle
Dieser Bereich ist hauptsächlich für **Lehrer** und **Global-Admins** sichtbar. Schüler sehen hier ihre eigenen Klassen ohne Verwaltungsfunktionen.
:::

Übersicht über alle Klassen, in denen Sie tätig sind:
- Anzeige aller zugewiesenen Klassen (z.B. 5a, 9a, 10a, 10b, niclass)
- Schnelle Navigation zu Klassenfunktionen
- Direktauswahl für Klassenzimmer-Management (nur Lehrer/Admin)

### Mobile Access

Zugriff auf die Plattform von mobilen Geräten:

**Setup-Optionen:**
- **Manual**: Manuelle Einrichtung mit Serveradresse
- **QR-Code**: Schneller Zugriff über QR-Code-Scan
- **PWA**: Progressive Web App für mobile Nutzung

Erfahren Sie mehr unter [Mobile App & Tablet-Nutzung](mobile-app.md).

### Quotas

Übersicht über Ihre Speichernutzung:

**Anzeige der Speicherkontingente:**
- **Schul-Quota**: Verwendeter vs. verfügbarer Speicher (z.B. "--/-- MiB")
- **Cloud quota calculated**: Berechnetes Cloud-Speicherkontingent
- **E-Mail quota calculated**: E-Mail-Speicherlimit (z.B. "306 MiB")

Die visuelle Fortschrittsanzeige zeigt den aktuellen Verbrauch an.

### Current Affairs

Aktuelle Aktivitäten und Benachrichtigungen:

#### Info Board
- Anzeige von Ankündigungen und wichtigen Mitteilungen
- Status: "No new bulletins" wenn keine neuen Mitteilungen vorliegen
- Zugriff auf das [Schwarze Brett](weitere-features.md#schwarzes-brett)

#### Conferences
- Übersicht laufender oder geplanter Konferenzen
- Status: "No running conference" wenn keine aktiven Meetings
- Direktzugriff zu Video-Konferenzen

#### E-Mails
- Anzahl ungelesener E-Mails
- Schnellzugriff zum Mail-Client
- Benachrichtigung bei neuen Nachrichten

#### Surveys
- Offene Umfragen
- Status: "No open survey" wenn keine aktiven Umfragen
- Direktlink zu [Umfragen](weitere-features.md#umfragen)

## Rollenspezifische Unterschiede

Das Dashboard passt sich automatisch an Ihre Benutzerrolle an:

### Lehrer
- Vollständiger Zugriff auf Klassenverwaltung
- Klassenzimmer-Monitoring verfügbar
- Umfragen erstellen und verwalten
- Zugriff auf Ressourcen-Bibliothek
- Konferenzen starten und verwalten

### Schüler
- Übersicht eigener Klassen (ohne Verwaltungsfunktionen)
- Zugriff auf zugewiesene Materialien
- Teilnahme an Umfragen
- Teilnahme an Konferenzen
- Eigene Dateien und Aufgaben

### Global-Admin
- Alle Funktionen von Lehrern
- Zusätzliche Systemeinstellungen
- Benutzerverwaltung
- Container-Verwaltung (erweitert)
- Einstellungen für die gesamte Schule/Organisation
- Zugriff auf administrative Tools und Logs

:::tip Hinweis
Manche Funktionen und Menüpunkte sind nur für bestimmte Rollen sichtbar. Wenn Sie eine Funktion nicht finden, liegt das möglicherweise an Ihren Berechtigungen.
:::

## Dashboard anpassen

:::info Dokumentation folgt
Die detaillierte Anleitung zur Dashboard-Anpassung wird in Kürze ergänzt. Sie können das Dashboard-Layout und die angezeigten Widgets über die Einstellungen personalisieren.
:::

Das Dashboard kann in den Einstellungen angepasst werden:
- Widget-Anordnung ändern
- Bereiche ein-/ausblenden
- Startseite festlegen
- Anzeigeoptionen konfigurieren

:::note Berechtigungen
Die Anpassungsmöglichkeiten können je nach Benutzerrolle variieren. Global-Admins haben erweiterte Optionen.
:::

<!-- TODO: Link zu Einstellungen/Dashboard-Konfiguration einfügen -->

## Tipps für die Nutzung

### Effiziente Navigation
- Nutzen Sie die Schnellaktionen für häufige Aufgaben
- Klicken Sie auf Klassennamen für direkten Zugriff
- Verwenden Sie die Mobile Access-Optionen für Tablets und Smartphones

### Übersicht behalten
- Überprüfen Sie regelmäßig "Current Affairs" für neue Mitteilungen
- Behalten Sie Ihre Quotas im Auge, um Speicherprobleme zu vermeiden
- Nutzen Sie die Konferenz-Übersicht für anstehende Meetings

### Personalisierung
- Passen Sie das Dashboard an Ihre Bedürfnisse an
- Blenden Sie nicht benötigte Bereiche aus
- Organisieren Sie Widgets nach Wichtigkeit

## Verschiedene Ansichten

Das Dashboard passt sich automatisch an verschiedene Bildschirmgrößen an:

### Desktop-Ansicht
- Alle Bereiche nebeneinander angeordnet
- Maximale Informationsdichte
- Optimiert für große Bildschirme

### Tablet-Ansicht
![Dashboard Tablet](/img/features/dashboard-tablet.jpeg)

- Angepasstes Layout für Touch-Bedienung
- Größere Touch-Targets
- Optimierte Darstellung für mittlere Bildschirme

Mehr dazu unter [Mobile App & Tablet-Nutzung](mobile-app.md).

### Mobile Ansicht
- Gestapeltes Layout für kleine Bildschirme
- Vereinfachte Navigation
- Touch-optimierte Bedienung

## Weitere Informationen

- [Mein Profil](../benutzer/mein-profil.md) - Profileinstellungen verwalten
- [Sicherheitseinstellungen](sicherheit.md) - Passwort ändern und Sicherheit konfigurieren
- [Mobile App](mobile-app.md) - Mobile Nutzung einrichten
- [Schwarzes Brett](weitere-features.md#schwarzes-brett) - Mitteilungen verwalten
- [Umfragen](weitere-features.md#umfragen) - Umfragen erstellen und bearbeiten
