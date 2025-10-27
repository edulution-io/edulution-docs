# edulution Changelog

---


## v2.1.0 | 2025-10-29 | edulution-app

### Die edulution.io App ist da!

Wir freuen uns, die erste Version der edulution.io Mobile App vorzustellen! Mit der App hast du jederzeit und überall Zugriff auf deine Schulplattform – egal ob du Schüler/in, Lehrer/in oder Administrator/in bist.

#### Was ist die edulution App?

Die edulution App bringt die volle Power der edulution.io-Plattform auf dein Smartphone oder Tablet. Sie verbindet sich nahtlos mit deinem Schulserver und bietet dir alle wichtigen Funktionen direkt in deiner Tasche – sicher, schnell und benutzerfreundlich.

Die App ist für iOS und Android verfügbar und wurde speziell für den Schulalltag entwickelt.

#### Verbesserungen & Features

- **QR-Code Login**: Scanne einfach den QR-Code auf der edulution.io Website und melde dich sofort an – keine komplizierte Einrichtung nötig
- **Digitaler Ausweis**: Dein Schüler/innen- oder Lehrer/innenausweis immer dabei – dreisprachig (Deutsch, Englisch, Französisch) mit allen wichtigen Infos
- **Account-Verwaltung**: Mehrere Accounts? Kein Problem! Wechsle mit einem Fingertipp zwischen deinen Profilen (z.B. Lehrer/in und Admin)
- **Push-Benachrichtigungen**: Verpasse keine wichtigen Termine mehr – die App erinnert dich rechtzeitig an bevorstehende Konferenzen
- **Vollständiger Plattform-Zugriff**: Zugriff auf alle edulution.io Funktionen direkt aus der App: Dateien, Konferenzen, Whiteboard, Dashboard und mehr
- **Biometrische Authentifizierung**: Sicherer Login mit Face ID, Touch ID oder Fingerabdruck
- **Offline-Modus**: Wichtige Informationen bleiben auch ohne Internetverbindung verfügbar
- **Dark Mode**: Automatische Anpassung an deine Systemeinstellungen für angenehmes Arbeiten bei Tag und Nacht

#### Verfügbarkeit

Die edulution App ist ab sofort verfügbar:
- **iOS**: Im Apple App Store für iPhone und iPad
- **Android**: Im Google Play Store für alle Android-Geräte

#### Technische Details

- Native Performance durch React Native
- End-to-End verschlüsselte Kommunikation
- Automatische Updates über die App Stores
- Minimale Systemanforderungen: iOS 14+ / Android 8+
- Unterstützung für Tablets und Smartphones
- Datenschutzkonform nach DSGVO

#### Ausblick auf kommende Versionen

- Offline-Datei-Synchronisation für Arbeiten ohne Internet
- Integrierte Chat-Funktion für direkte Kommunikation
- Erweitertes Benachrichtigungssystem mit individuellen Einstellungen
- Widget-Support für iOS und Android Home-Screens
- Apple Watch und Android Wear Integration
- Teilen von Dateien zwischen edulution App und anderen Apps

## v1.5.0 | 2025-08-11 | edulution-ui

### Kompatibilität & Infrastruktur-Verbesserungen

Kompatibilitäts- und Infrastruktur-Verbesserungen, Vorbereitung für Push-Benachrichtigungen und LDAP-Sync zu Keycloak.

#### Verbesserungen

- Support für Linuxmuster 7.3
- edulution-file-proxy Support
- LDAP-Sync zu Keycloak (Gruppen → Keycloak)
- Grundlagen für Push-Benachrichtigungen (edulution-App)

[GitHub Release](https://github.com/edulution-io/edulution-ui/releases/tag/v1.5.0)

---

## v1.4.0 | 2025-08-01 | edulution-ui

### Feature-Update

Weitere Verbesserungen und neue Features: sichtbares TOTP-Secret, MFA-Reset durch Admins, Dateifreigabe-Optionen.

#### Verbesserungen

- SSO-Verbesserungen für Keycloak-Anbindungen
- TOTP-Secret als Text sichtbar (für Geräte ohne Kamera)
- Admin-MFA-Reset Funktion
- Datei-Sharing öffentlich/privat
- Verbesserte Benutzerverwaltung

---

## v1.3.0 | 2025-06-30 | edulution-ui

### Umfragen, Sidebar und Launcher verbessert

Fokus auf Stabilität, Usability und Detailverbesserungen der Oberfläche.

#### Verbesserungen

- Erweiterungen in Umfragen (Vorlagen, bessere Auswertung, Tracking)
- Neuer App-Launcher (STRG+K)
- Verbesserte Sidebar-Navigation
- Optimierte Darstellung für Bulletin Board
- Ordner-Uploads im Dateimanager
- Performance-Optimierungen

---

## v1.2.0 | 2025-05-19 | edulution-ui

### Mehr Kontrolle & Sicherheit

Verbesserungen für App- und Mobile-Experience, neue Passwort-Manager-Features, TLDraw statt Excalidraw, Force-MFA, iOS-App-Überarbeitung.

#### Verbesserungen

- Vollständiges Redesign der iOS-App
- QR-Code Anmeldung
- Veyon-Steuerung in App + neues Klassenzimmer-UI
- Wiederverwendbare Umfrage-/Formular-Vorlagen
- TLDraw mit Collaboration & Medien-Upload
- Integrierter Passwort-Manager mit PIN/2FA
- Force-MFA für erhöhte Sicherheit

[GitHub Release](https://github.com/edulution-io/edulution-ui/releases/tag/v1.2.0)

---

## v1.1.0 | 2025-03-05 | edulution-mail

### Mail-Modul & Container-Integration

Version 1.1 bringt Container-Integration, App-Store, Veyon-/Traefik-Integration sowie das Mail-Modul (Mailcow) mit automatischer SSO-Integration.

#### Verbesserungen

- App Store & Container-Management (Mailcow, OnlyOffice, Guacamole, Veyon-WebAPI)
- Traefik Integration
- Veyon API-Integration für Klassenmanagement
- Mail-Integration: Mailcow + IMAP-Importer
- Automatisches Token-Handling für SOGo
- Verbesserungen: Filesharing, Konferenzen, UI/UX-Anpassungen

[GitHub Releases](https://github.com/edulution-io/edulution-ui/releases)

---

## v1.0.0 | 2024-10-25 | edulution-ui

### Erste Version der edulution.io-UI veröffentlicht

Wir freuen uns, euch mitteilen zu können, dass die erste Version der edulution.io-UI ab sofort verfügbar ist! Das User Interface von edulution.io ist eine Open-Source-Plattform, die linuxmuster.net zu einer noch modernen und umfangreichen Schulserverlösung erweitert.

Die edulution.io-UI ist eine vielseitige Open-Source-Plattform, speziell entwickelt, um Bildungseinrichtungen eine leistungsstarke und flexible Lösung bereitzustellen. Das Backend vereint alle Module und Dienste über einen integrierten Proxy, sodass nur diese Weboberfläche für den Anwender nach außen sichtbar ist.

#### Verbesserungen

- Integrierte SSO-Software Keycloak mit angepasster Version
- 2-Faktor-Authentifizierung für hohe Sicherheit
- Passwort-Tresor und Passwort-Injektor für nicht SSO-fähige Anwendungen
- Identity-Cache für Verfügbarkeit bei temporären AD-Ausfällen
- Einheitliche Oberfläche für alle schulischen Anwendungen
- Flexible Rechteverwaltung für Benutzer, Gruppen und Schulen
- On-Premise und Cloud-Betrieb möglich

#### Enthaltene Module

- **Whiteboard**: Interaktives Whiteboard mit verschiedenen Zeichenwerkzeugen
- **Konferenzen**: BigBlueButton Integration für Videokonferenzen
- **Umfragen**: SurveyJS mit serverseitigen Aktionen und Buchungsfunktionen
- **Filesharing**: Dateiverwaltung direkt auf dem Schulserver mit Browser-Editor
- **Klassenzimmer**: Unterrichtsmodul zur Verwaltung von Arbeitsstationen und Klassenarbeiten
- **Desktop**: Windows/Linux-Desktops direkt im Browser via linuxmuster-linbo-vdi
- **Mail**: Mailcow Integration mit automatischer Migration bestehender Konten
- **Lernmanagement**: Moodle mit vollständiger SSO-Integration
- **linuxmuster.net**: Direkter Zugriff auf die administrative Weboberfläche

[Dokumentation](https://docs.edulution.io)
[Forum](https://ask.linuxmuster.net)
[Website](https://edulution.io)

---
