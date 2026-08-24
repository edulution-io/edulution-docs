---
sidebar_custom_props:
  audience: admin
---

# Einstellungen (Settings)

Die Einstellungen sind nur für Global-Admins zugänglich und ermöglichen die zentrale Konfiguration von edulution.io.

:::caution[Nur Global-Admin]
Diese Seite ist nur als Global-Administrator sichtbar. Sie erscheint im Menü rechts unten.
:::

## Zugriff

Als Global-Admin finden Sie **Einstellungen** (Zahnrad-Symbol) im Menü rechts unten.

## Tabs

Die Einstellungen sind in 5 Bereiche gegliedert:
- **Container** - Docker Container Verwaltung
- **Globale Einstellungen** - Systemweite Einstellungen
- **E-Mails** - E-Mail und SOGo Webmailer Konfiguration
- **Benutzerverwaltung** - Verwaltung von Benutzerkonten
- **Info** - Lizenz und Systeminformationen

---

## Globale Einstellungen

![Globale Einstellungen](/img/einstellungen/global-settings.webp)

### Allgemein

**Plattform**
- Auswahl: **Linuxmuster** oder **Generisch**
- Bestimmt, an welchen Server edulution angebunden wird
- Bei **Linuxmuster** steht die [Serververwaltung](./linuxmuster.md) zur Verfügung

**Organisationstyp**
- Auswahl: **Schule**, **Unternehmen** oder **Öffentliche Verwaltung**
- Legt fest, als welche Art von Einrichtung edulution auftritt
- Steuert Beschriftungen, den Funktionsumfang der Serververwaltung und das Logo auf der Login-Seite
- Ausführlich: [Organisationstyp](#organisationstyp)

**Standard-Anwendung nach Login**
- Wählen Sie welche App nach Login angezeigt wird
- Optionen: Dashboard, Info Board, Dateien, etc.

### Organisationstyp

Der Organisationstyp gilt systemweit für alle Nutzer. Er ist unabhängig von der **Plattform**: Die Plattform bestimmt, an welchen Server edulution angebunden wird, der Organisationstyp bestimmt, mit welchen Begriffen und in welchem Umfang sich edulution den Nutzern zeigt.

| Auswahl | Gedacht für |
|---------|-------------|
| **Schule** | Schulen und Bildungseinrichtungen (Voreinstellung) |
| **Unternehmen** | Firmen und andere nicht-schulische Organisationen |
| **Öffentliche Verwaltung** | Behörden und kommunale Einrichtungen |

#### Auswirkungen

| Bereich | Schule | Öffentliche Verwaltung | Unternehmen |
|---------|--------|------------------------|-------------|
| edulution-Logo auf der Login-Seite | sichtbar | sichtbar | ausgeblendet |
| Bezeichnung der Server-App in Seitenleiste und App-Leiste | Schulserver | Schulserver | Server |
| Ausweis in der mobilen Ansicht | Schülerausweis | Mitarbeiterausweis | Mitarbeiterausweis |
| Elternzuweisung in der Serververwaltung | vorhanden | vorhanden | entfällt |
| Spaltenbeschriftungen der Benutzerverwaltung | Klasse, Schulname | Klasse, Schulname | Primärgruppe, Organisationskürzel |
| Geräterollen in der Geräteverwaltung | vollständig | vollständig | ohne Klassenraum- und Fachraum-Rollen, **Lehrer-PC** heißt **Computer** |
| Hinweistexte zu Logo und Organisationsinformationen | mit Schulbezug | mit Schulbezug | neutral formuliert |

:::info[Öffentliche Verwaltung folgt der Schule]
**Öffentliche Verwaltung** verhält sich bis auf die Beschriftung des Ausweises genau wie **Schule**. Nur **Unternehmen** blendet das edulution-Logo aus und reduziert die schulspezifischen Funktionen.
:::

Änderungen wirken sofort nach dem Speichern. Bereits geöffnete Browser-Fenster übernehmen sie erst nach einem Neuladen.

#### Voreinstellung bei der Installation

Bei einer Neuinstallation und beim Update einer bestehenden Installation wird der Organisationstyp aus der Umgebungsvariablen `EDUI_ORGANIZATION_TYPE` übernommen:

```dotenv title=".edulution.env"
EDUI_ORGANIZATION_TYPE=business
```

Gültige Werte sind `school`, `business` und `public-administration`. Ist die Variable nicht gesetzt oder enthält sie einen unbekannten Wert, gilt **Schule**.

:::info
Die Variable setzt nur den Ausgangswert. Danach ändern Sie den Organisationstyp in den globalen Einstellungen; der dort gespeicherte Wert hat Vorrang und wird durch die Variable nicht mehr überschrieben.
:::

### Zwei-Faktor-Authentisierung

**Benutzergruppen**
- Legen Sie fest, für welche Benutzergruppen 2FA verpflichtend ist
- Suchfeld: "Tippen um zu suchen"
- MFA-Einrichtung wird für ausgewählte Gruppen erzwungen

### LDAP

**Distinguished Name (DN)**
- LDAP-Zugangsdaten für Gruppensynchronisation
- Beispiel: `CN=edulutionui-binduser,OU=Management,OU=GLOBAL,DC=linuxmuster,DC=lan`

**Passwort**
- LDAP Bind-Passwort (verschlüsselt)

### Branding

![Branding](/img/einstellungen/branding.webp)

**Logo**
- Laden Sie Ihr Schul-Logo hoch
- Wird auf Login-Seite und in der App angezeigt
- Button: **Datei auswählen**

**Organisationsinformationen**
- **Organisationsname**: Name der Schule (z.B. "Albert-Schweitzer-Schule")
- **Straße**: Straße (z.B. "Lindenweg 12")
- **Postleitzahl**: PLZ (z.B. "74235")
- **Stadt**: Stadt (z.B. "Heilbronn")
- **Organisations-Webseite**: Webseite (z.B. "http://albert-schule-hn.de")

Diese Informationen erscheinen in der edulution App.

**Speichern** - Button zum Speichern unten

---

## E-Mails

![E-Mail Einstellungen](/img/einstellungen/email-settings.webp)

Die E-Mail-Einstellungen ermöglichen die Konfiguration der Mail-App und des SOGo Webmailers.

### Sortierung

**Position in der App-Liste**
- Numerischer Wert (z.B. "10")
- Bestimmt an welcher Stelle die E-Mail-App in der App-Liste und in den Einstellungen angezeigt wird
- Niedrigere Zahlen = weiter oben in der Liste

### Nutzergruppen

**Zugriff auf die Mail-App**
- Wählen Sie die Nutzergruppen aus, die Zugriff auf die Mail-App bekommen sollen
- Beispiel-Gruppen: `all-teachers`, `all-parents`, `all-staff`, `all-admins`, `all-students`
- Mehrfachauswahl möglich
- Nur ausgewählte Gruppen sehen die Mail-App in ihrer Anwendungsübersicht

### Allgemein

**Theme**
- Wählen Sie das Theme für den SOGo Webmailer
- Optionen:
  - **Dunkel** - Dunkles Design für den Webmailer
  - **Hell** - Helles Design für den Webmailer
- Das Ändern des Themes startet die nuspezifischen Container neu

:::info
Das Theme beeinflusst nur die Darstellung des SOGo Webmailers (`https://mail.ihre-domain.de/SOGo`). Die edulution Plattform verwendet weiterhin das systemweite Dark/Light Mode Setting.
:::

**Standard-Signatur**

Diese Signatur wird beim Verfassen einer neuen E-Mail automatisch angefügt. Sie gilt für alle Benutzer, die keine eigene Signatur hinterlegt haben (siehe [Mein Profil → Signatur](../erste-schritte/mein-profil.md#signatur)).

- Bearbeiten Sie die Signatur im Editor mit den gewohnten Formatierungsfunktionen
- Über die Editor-/Quelltext-Umschaltung oben rechts im Editor wechseln Sie zwischen der formatierten Ansicht und der direkten HTML-Bearbeitung. HTML, Links und Bilder werden unverändert übernommen
- Enthält der Quelltext Elemente oder Formatierungen, die der formatierte Editor nicht unterstützt (etwa Tabellen, Textausrichtung oder Schriftgrößen), fragt ein Bestätigungsdialog vor dem Zurückschalten nach und listet auf, was dabei entfernt würde
- Bilder können direkt eingefügt werden; sehr große Bilder werden mit einem Hinweis quittiert

:::tip[Bildgröße]
Ein Logo in der Standard-Signatur wird jeder gesendeten E-Mail beigefügt. Verwenden Sie deshalb ein möglichst kleines Bild (unter 100 KB), um das Mailaufkommen nicht unnötig zu vergrößern.
:::

### IMAP Integration

Die IMAP-Integration ermöglicht den Zugriff auf externe oder interne IMAP-Server.

**URL**
- Geben Sie den FQDN (Fully Qualified Domain Name) des IMAP-Servers an
- Beispiel: `imap.example.com` oder `ui.73.dev.multi.schule`
- Wird für die Anbindung an den Mail-Server verwendet

**Port**
- Port-Nummer des IMAP-Servers
- Standard: **993** (IMAP über SSL/TLS)
- Alternative: **143** (IMAP mit STARTTLS)

**Sichere Verbindung**
- Toggle-Schalter zum Aktivieren/Deaktivieren
- Aktiviert: Verbindung über TLS oder STARTTLS
- Sollte für Produktivumgebungen immer aktiviert sein

**Nicht zertifizierte Verbindungen ablehnen**
- Toggle-Schalter für Zertifikatsprüfung
- Aktiviert: SSL/TLS-Zertifikat wird validiert
- Deaktiviert: Selbstsignierte Zertifikate werden akzeptiert

:::warning[Sicherheitshinweis]
In Produktivumgebungen sollten Sie immer "Sichere Verbindung" aktivieren und "Nicht zertifizierte Verbindungen ablehnen" einschalten, um die Sicherheit der E-Mail-Kommunikation zu gewährleisten.
:::

### DAV-Verbindung

Neben IMAP und SMTP spricht edulution den Mailserver für einige Funktionen über dessen DAV-Schnittstelle an – für Postfach-Freigaben und dafür, die im Profil gewählte Sprache in den SOGo-Webmailer zu übernehmen.

**DAV-URL**
- Basis-URL des DAV-Servers inklusive Pfad
- Beispiel: `https://mail.example.com/SOGo/dav/`
- Der Pfad muss auf `/dav` enden. Die Adresse, unter der Sie den Webmailer im Browser aufrufen (`.../SOGo`), funktioniert hier nicht
- Bleibt das Feld leer, wird die unter [Kalender (CalDAV)](#kalender-caldav) hinterlegte Verbindung verwendet. Haben Sie die Kalender-App nicht eingerichtet, tragen Sie die Adresse hier ein
- Ist die Adresse fehlerhaft, wird die DAV-Verbindung der E-Mail-App deaktiviert und der Grund im Protokoll der API vermerkt. Die Kalender- und die Kontakte-App bleiben davon unberührt

:::tip[edulution-mail als DAV-Server]
Setzen Sie **edulution-mail** (mailcow) ein, erreichen Sie den Server direkt über seinen Container-Namen im Docker-Netzwerk, statt den Umweg über die öffentliche Adresse zu nehmen:

```
https://mailcowdockerized-nginx-mailcow-1/SOGo/dav/
```

Der Pfad `/SOGo/dav/` gehört zwingend dazu. Er unterscheidet diesen Wert von der **Mailcow-API-URL** im Bereich *Mailserver* derselben App, die denselben Container-Namen **ohne** Pfad verwendet.

Das SSL-Zertifikat ist nicht auf diesen internen Namen ausgestellt. Schalten Sie deshalb **DAV: Nicht zertifizierte Verbindungen ablehnen** aus, sonst schlägt die Verbindung fehl.
:::

**DAV: Nicht zertifizierte Verbindungen ablehnen**
- Toggle-Schalter für die Zertifikatsprüfung
- Aktiviert: Das SSL/TLS-Zertifikat des DAV-Servers wird validiert
- Deaktiviert: Selbstsignierte Zertifikate werden akzeptiert
- Betrifft ausschließlich die DAV-Verbindung, nicht IMAP oder SMTP

**Speichern / Löschen**
- **Speichern** (grün) - Speichert die E-Mail-Einstellungen
- **Löschen** (rot) - Löscht die aktuellen Konfigurationen

---

## Kalender (CalDAV)

![Einstellungen der Kalender-App mit CalDAV-Konfiguration](/img/einstellungen/kalender-caldav.webp)

Die Kalender-App bindet die Kalender der Schule über einen CalDAV-Server (z.B. SoGo) an. In den Einstellungen der App legen Sie die Verbindung zum CalDAV-Server fest.

### Sortierung

**Position in der App-Liste**
- Numerischer Wert
- Bestimmt, an welcher Stelle die Kalender-App in der App-Liste und in den Einstellungen angezeigt wird
- Niedrigere Zahlen = weiter oben in der Liste

### An App-Leiste anpinnen

**Dauerhaft in der App-Leiste anzeigen**
- Toggle-Schalter
- Aktiviert: Die Kalender-App erscheint dauerhaft in der App-Leiste
- Deaktiviert: Die App wird dort nur angezeigt, solange sie geöffnet ist

### Nutzergruppen

**Zugriff auf die Kalender-App**
- Wählen Sie die Nutzergruppen aus, die Zugriff auf die Kalender-App bekommen sollen
- Mehrfachauswahl möglich
- Nur ausgewählte Gruppen sehen die Kalender-App in ihrer Anwendungsübersicht

### CalDAV-Verbindung

**CalDAV-URL**
- Basis-URL des CalDAV-Servers inklusive Pfad
- Beispiel: `https://mail.example.com/SOGo/dav/`
- Wird für die Anbindung der Kalender verwendet

:::tip[edulution-mail als CalDAV-Server]
Setzen Sie **edulution-mail** (mailcow) ein, erreichen Sie den Server direkt über seinen Container-Namen im Docker-Netzwerk, statt den Umweg über die öffentliche Adresse zu nehmen:

```
https://mailcowdockerized-nginx-mailcow-1/SOGo/dav/
```

Der Pfad `/SOGo/dav/` gehört zwingend dazu. Er unterscheidet diesen Wert von der **Mailcow-API-URL** unter *Einstellungen → E-Mails → Mailserver*, die denselben Container-Namen **ohne** Pfad verwendet.

Das SSL-Zertifikat ist nicht auf diesen internen Namen ausgestellt. Schalten Sie deshalb **Nicht zertifizierte Verbindungen ablehnen** aus, sonst schlägt die Verbindung fehl.
:::

:::info[Backend-Voraussetzung]
Die reine Terminsynchronisierung funktioniert mit jedem standardkonformen CalDAV-Server. Das [Freigeben und Abonnieren von Kalendern](../apps/kalender.md#kalender-freigeben) nutzt dagegen die proprietären ACL-Funktionen von **SoGo** und steht nur zur Verfügung, wenn hier ein SoGo-Server hinterlegt ist.
:::

:::warning[CalDAV-URL ohne /dav bricht die Freigabe]
Endet die CalDAV-URL nicht auf `/dav`, funktionieren Kalender und Termine trotzdem — die Freigabe- und Abonnement-Funktionen jedoch nicht. edulution leitet die SoGo-Schnittstelle aus dem `/dav`-Pfad ab; fehlt er, meldet die Freigabe **"Kalender-Backend ist nicht konfiguriert"**, obwohl der Kalender sichtbar ist und Termine synchronisiert werden. Ergänzen Sie in diesem Fall den Pfad und speichern Sie erneut.
:::

**Authentifizierungsmodus**
- HTTP-Authentifizierungsverfahren für die CalDAV-Verbindung
- Optionen: **Basic**, **Digest**, **OAuth**

:::info
Aktuell ist nur **Basic Auth** implementiert. Das Feld ist daher fest auf Basic eingestellt; weitere Modi sind in Vorbereitung.
:::

**Nicht zertifizierte Verbindungen ablehnen**
- Toggle-Schalter für die Zertifikatsprüfung
- Aktiviert: Das SSL/TLS-Zertifikat des CalDAV-Servers wird validiert
- Deaktiviert: Selbstsignierte Zertifikate werden akzeptiert

:::warning[Sicherheitshinweis]
In Produktivumgebungen sollten Sie "Nicht zertifizierte Verbindungen ablehnen" aktiviert lassen, um die Sicherheit der CalDAV-Verbindung zu gewährleisten. Ausgenommen ist die oben beschriebene interne Container-Adresse von edulution-mail: Sie bleibt innerhalb des Docker-Netzwerks und verlässt den Host nicht.
:::

---

## Kontakte (CardDAV)

![Einstellungen der Kontakte-App mit CardDAV-Konfiguration](/img/einstellungen/kontakte-carddav.webp)

Die Kontakte-App bindet die Adressbücher der Schule über einen CardDAV-Server (z.B. SOGo) an. In den Einstellungen der App legen Sie die Verbindung zum CardDAV-Server fest.

### Sortierung

**Position in der App-Liste**
- Numerischer Wert
- Bestimmt, an welcher Stelle die Kontakte-App in der App-Liste und in den Einstellungen angezeigt wird
- Niedrigere Zahlen = weiter oben in der Liste

### An App-Leiste anpinnen

**Dauerhaft in der App-Leiste anzeigen**
- Toggle-Schalter
- Aktiviert: Die Kontakte-App erscheint dauerhaft in der App-Leiste
- Deaktiviert: Die App wird dort nur angezeigt, solange sie geöffnet ist

### Nutzergruppen

**Zugriff auf die Kontakte-App**
- Wählen Sie die Nutzergruppen aus, die Zugriff auf die Kontakte-App bekommen sollen
- Mehrfachauswahl möglich
- Nur ausgewählte Gruppen sehen die Kontakte-App in ihrer Anwendungsübersicht

### CardDAV-Verbindung

**CardDAV-URL**
- Basis-URL des CardDAV-Servers inklusive Pfad
- Beispiel: `https://mail.example.com/SOGo/dav/`
- Wird für die Anbindung der Adressbücher verwendet

:::tip[edulution-mail als CardDAV-Server]
Setzen Sie **edulution-mail** (mailcow) ein, erreichen Sie den Server direkt über seinen Container-Namen im Docker-Netzwerk, statt den Umweg über die öffentliche Adresse zu nehmen:

```
https://mailcowdockerized-nginx-mailcow-1/SOGo/dav/
```

Der Pfad `/SOGo/dav/` gehört zwingend dazu. Er unterscheidet diesen Wert von der **Mailcow-API-URL** unter *Einstellungen → E-Mails → Mailserver*, die denselben Container-Namen **ohne** Pfad verwendet.

Das SSL-Zertifikat ist nicht auf diesen internen Namen ausgestellt. Schalten Sie deshalb **Nicht zertifizierte Verbindungen ablehnen** aus, sonst schlägt die Verbindung fehl.
:::

**Authentifizierungsmodus**
- HTTP-Authentifizierungsverfahren für die CardDAV-Verbindung
- Optionen: **Basic**, **Digest**, **OAuth**

:::info
Aktuell ist nur **Basic Auth** implementiert. Das Feld ist daher fest auf Basic eingestellt; weitere Modi sind in Vorbereitung.
:::

**Nicht zertifizierte Verbindungen ablehnen**
- Toggle-Schalter für die Zertifikatsprüfung
- Aktiviert: Das SSL/TLS-Zertifikat des CardDAV-Servers wird validiert
- Deaktiviert: Selbstsignierte Zertifikate werden akzeptiert

:::warning[Sicherheitshinweis]
In Produktivumgebungen sollten Sie "Nicht zertifizierte Verbindungen ablehnen" aktiviert lassen, um die Sicherheit der CardDAV-Verbindung zu gewährleisten. Ausgenommen ist die oben beschriebene interne Container-Adresse von edulution-mail: Sie bleibt innerhalb des Docker-Netzwerks und verlässt den Host nicht.
:::

---

## Chat (KI-Chat)

Die Chat-App umfasst einen **KI-Chat**. In den Einstellungen der Chat-App steuern Sie über Nutzergruppen, wer den KI-Chat verwenden darf.

Die Verbindung zu einem KI-Dienst richten Sie unter
[Administration → KI-Chat konfigurieren](./administration#27-ki-chat-konfigurieren)
ein.

### KI-Chat-Zugriff

**Gruppen, die den KI-Chat nutzen dürfen**
- Wählen Sie die Nutzergruppen aus, die den KI-Chat verwenden dürfen
- Mehrfachauswahl möglich
- Bleibt die Liste leer, hat niemand Zugriff auf den KI-Chat

:::info
Global-Admins haben unabhängig von dieser Auswahl immer Zugriff auf den KI-Chat.
:::

---

## Klassenraum (Veyon-Proxy)

Der Klassenraum bindet die Bildschirmüberwachung der Schüler-Geräte über einen Veyon-WebAPI-Proxy an. In den Einstellungen der Klassenraum-App legen Sie unter **Veyon Proxy** fest, über welche Adresse edulution die Veyon-WebAPI erreicht.

### Proxy-Tabelle

Die Proxys werden als Tabelle gepflegt. Über den Hinzufügen-Button oben rechts in der Tabelle öffnen Sie den Dialog **Konfiguration erstellen**; ein Klick auf eine bestehende Zeile öffnet **Konfiguration bearbeiten** und bietet dort auch das Löschen an.

| Feld | Bedeutung |
|------|-----------|
| **Subnet** | Subnetz der Schüler-Geräte in CIDR-Notation, z.B. `10.0.0.0/24` |
| **Proxy Adresse** | URL des Veyon-WebAPI-Proxy, z.B. `https://veyon.ihre-domain.de:11080` |

:::warning[Die Proxy-Adresse muss `https` verwenden]
Für die Anmeldung an der Veyon-WebAPI sendet edulution das **Passwort der Lehrkraft** an diese Adresse. Über `http` ginge es im Klartext durch das Netz. Adressen ohne `https` werden deshalb bereits im Dialog abgelehnt, und auch das Speichern der App-Konfiguration schlägt mit einer Fehlermeldung fehl.

Bestehende Konfigurationen mit einer `http`-Adresse bleiben zwar gespeichert, lassen sich aber nicht mehr speichern, ohne die Adresse auf `https` umzustellen. Stellen Sie den Veyon-WebAPI-Proxy daher auf TLS um, bevor Sie die Klassenraum-Einstellungen das nächste Mal bearbeiten.
:::

:::info[Aktuell wird nur der erste Eintrag verwendet]
Sie können mehrere Zeilen anlegen, edulution verbindet sich derzeit jedoch immer über die **Proxy Adresse der ersten Zeile**. Das Feld **Subnet** wird noch nicht zur Auswahl des passenden Proxys ausgewertet. Für Schulen mit mehreren Subnetzen bedeutet das: alle Schüler-Geräte müssen über denselben Proxy erreichbar sein.
:::

### Wenn kein Proxy konfiguriert ist

Ohne konfigurierten Proxy zeigen die Schülerkarten im Unterricht keine Bildschirmvorschau und die Veyon-Aktionen bleiben deaktiviert — die Karte sieht dabei genauso aus wie bei einem ausgeschalteten Gerät. Fehlt die Vorschau für alle Schüler, prüfen Sie zuerst diese Einstellung.

---

## Frame- und Eingebettete Apps

Apps, die Inhalte in einem iframe anzeigen, bringen zwei zusätzliche Bereiche in ihren Einstellungen mit:

- **Skripte** (nur Frame-Apps) — JavaScript, das beim Laden des iframes und beim Abmelden ausgeführt wird, mit Syntaxprüfung und Formatierung im Editor
- **URL-Verarbeitung** (Frame-Apps sowie Eingebettete Apps im Modus *Separates Layout*) — Adresszeile des Browsers der Navigation im eingebetteten Inhalt folgen lassen und Deep-Links unterstützen

[→ Details: Eingebettete App – Skripte und URL-Verarbeitung](../apps/eingebettete-app.md#url-verarbeitung-und-deep-links)

---

## Container

![Container Übersicht](/img/einstellungen/container.webp)

Übersicht aller Docker Container des Systems mit Name, Image, Betriebszustand, Status, Port und Erstellungszeitpunkt. Über die Aktionsleiste am unteren Rand installieren Sie die Container zusätzlicher Dienste, aktualisieren sie und steuern ihren Lebenszyklus.

Die vollständige Beschreibung – Aktionen, geschützte Container, Plugin-Installation, Edulution-Manager-Agent und Fehlerbehebung – finden Sie unter [Container-Verwaltung](./container-verwaltung.md).

:::info[Fortgeschrittene Verwaltung]
Die Container-Übersicht ist für fortgeschrittene Administratoren. Änderungen sollten nur mit entsprechendem Docker-Know-how vorgenommen werden.
:::

---

## Benutzerverwaltung

![Benutzerverwaltung](/img/einstellungen/user-admin.webp)

### Zwei-Faktor-Authentisierung zurücksetzen

**Benutzer auswählen**
- Suchfeld: "Tippen um zu suchen"
- Wählen Sie Benutzer aus, deren 2FA zurückgesetzt werden soll
- Button: **Zurücksetzen** (grün)

Nützlich wenn Benutzer:
- Ihr Authenticator-Gerät verloren haben
- Probleme mit 2FA haben
- Neues Gerät einrichten müssen

---

## Info

![Info / Lizenz](/img/einstellungen/info-license.webp)

### Lizenz-Übersicht

**Status:** "Keine Lizenz registriert"

**Lizenz registrieren**
- Dialog zum Registrieren einer Lizenz
- **Lizenzschlüssel** Eingabefeld
- "Geben Sie den Lizenzschlüssel ein, den Sie mit Ihrem Kauf erhalten haben"
- Buttons: **Abbrechen** / **Registrieren**

---

## Siehe auch

- [Administration](./administration.md) - Allgemeine Admin-Aufgaben
- [Container-Verwaltung](./container-verwaltung.md) - Container installieren, aktualisieren und steuern
- [Experten-Tipps](./experten-tipps.md) - Fortgeschrittene Konfiguration
- [Linuxmuster verbinden](../installation/configure_lmn-server.md) - Server-Integration
