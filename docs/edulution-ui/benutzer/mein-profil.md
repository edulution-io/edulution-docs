# Benutzereinstellungen

Über das Profil-Menü (unten rechts in der App-Leiste) können Sie auf Ihre persönlichen Einstellungen und Kontoinformationen zugreifen.

![Dashboard Profil-Menü](/img/benutzer/dashboard-profil-menu.png)

## Zugriff auf die Benutzereinstellungen

1. Klicken Sie auf Ihr Profilbild unten rechts
2. Wählen Sie **Benutzereinstellungen** aus dem Dropdown-Menü

## Übersicht der Bereiche

Die Benutzereinstellungen sind unterteilt in:
- [Benutzerdetails](#benutzerdetails)
  - [Profilbild](#profilbild)
  - [Benutzerbezogene Informationen](#benutzerbezogene-informationen)
  - [Benutzerdetails (sub)](#benutzerdetails-(sub))
  - [Quotas](#quotas)
- [Sicherheit](#sicherheit)
  - [Passwort ändern](#passwort-ändern)
  - [Zwei-Faktor-Authentifizierung](#zwei-faktor-authentifizierung)
  - [Passwort-Tresor](#passwort-tresor)
- [E-Mail](#e-mail)
  - [E-Mail-Sync](#e-mail-sync)
  - [Signatur](#signatur)
  - [Automatische Antwort](#automatische-antwort)
  - [Weiterleitung](#weiterleitung)
  - [Filter](#filter)
- [Benutzeroberfläche](#benutzeroberfläche)
  - [Sprache auswählen](#sprache-auswählen)
  - [Erscheinungsbild](#erscheinungsbild)
- [App-Zugriff](#app-zugriff)
  - [Einrichtung via QR-Code](#einrichtung-via-qr-code)
  - [Manuelles Einrichten](#manuelles-einrichten)
- [VPN-Zugang](#vpn-zugang)
- [Kinder](#meine-kinder)
  - [Mein Zuweisungs-Code](#mein-zuweisungs-code)
  - [Code eingeben](#code-eingeben)
  - [Zuweisungen](#zuweisungen)

---

## Benutzerdetails

![Benutzerdetails](/img/benutzer/profil-benutzerdetails.png)

Hier können Sie Ihre persönlichen Informationen einsehen und teilweise bearbeiten.

### Profilbild

- Upload eines eigenen Profilbilds
- Klicken Sie auf **Choose File**, um ein Bild hochzuladen
- Unterstützte Formate: JPG, PNG
- **Löschen**: Entfernt das aktuelle Profilbild
- **Speichern**: Übernimmt die Änderungen

### Benutzerbezogene Informationen

Die folgenden Felder werden angezeigt:

| Feld | Beschreibung | 
|------|--------------|
| **Benutzername** | Ihr Login-Name (z.B. "agy-netzint-teacher") |
| **Anzeigename** | Ihr vollständiger Name (z.B. "Testteacher agy-Netzint") |
| **Geburtsdatum** | Ihr Geburtsdatum (z.B. "02.02.1990") |
| **E-Mail** | Ihre E-Mail-Adresse |
| **Schulname** | Zugeordnete Schule (z.B. "agy") |
| **Rolle** | Ihre Systemrolle (z.B. "Lehrer") |
| **Klassen** | Liste Ihrer Klassen (z.B. "5a, 9a, 10a, 10b, niclass") |


### Quotas

Quotas sind die Speicherkapazitäten, die Ihnen zur Verfügung stehen. Hier sehen Sie außerdem, wie viel des verfügbaren Speichers bereits belegt ist. 

| Feld | Beschreibung | Größe (standardmäßig) |
|------|--------------|-------------|
| **Cloudquota** | Dateispeicher | ca. 10 GB |
| **E-Mailquota** | Mail-Speicher | ca. 1 GB |

---

## Sicherheit

![Sicherheit](/img/benutzer/profil-sicherheit.png)

Konfigurieren Sie hier die Sicherheitseinstellungen Ihres Accounts.

### Passwort ändern

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

### Zwei-Faktor-Authentifizierung

Zusätzliche Sicherheit für Ihr Konto:

- **Status**: "Aktuell ist die Zwei-Faktor-Authentifizierung deaktiviert"
- **Aktivieren**: Schalten Sie den Toggle-Schalter um, um 2FA zu aktivieren
- Nach Aktivierung erhalten Sie einen QR-Code für Ihre Authenticator-App
- Unterstützte Apps: Google Authenticator, Microsoft Authenticator, Authy

**Vorteile der 2FA:**
- Erhöhter Schutz gegen unbefugten Zugriff
- Zweiter Faktor neben dem Passwort erforderlich
- Schutz auch bei kompromittiertem Passwort

### Passwort-Tresor

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

Weitere Details unter [Sicherheit & Authentifizierung](../features/sicherheit.md#passwort-tresor).

---

## E-Mail

![E-Mail](/img/benutzer/profil-email.png)

Konfiguration der E-Mail-Synchronisation für mobile Geräte.

### E-Mail-Sync

Einrichtung der E-Mail-Synchronisation:
- **Dropdown-Menü**: "Laden..." zeigt verfügbare Sync-Optionen
- **E-Mail-Adresse**: Tragen Sie Ihre E-Mail-Adresse ein
- **Passwort**: Ihr E-Mail-Passwort für die Synchronisation

### Sync-Jobs

Übersicht über aktive E-Mail-Synchronisationen:

**Tabellenspalten:**
- **Hostname**: Mail-Server Adresse
- **Port**: Verwendeter Port
- **Verschlüsselung**: SSL/TLS Einstellungen
- **Benutzername**: Login-Name
- **Sync-Intervall**: Häufigkeit der Synchronisation
- **Aktiv**: Status der Synchronisation

**Status:** "Keine Daten verfügbar", wenn keine Sync-Jobs konfiguriert sind

**Aktionen:**
- **Neu laden**: Button zum Aktualisieren der Sync-Job Liste

:::tip[Hinweis]
Weitere Informationen zur E-Mail-Migration finden Sie unter [E-Mail Migration](../../edulution-mail/user_mail_migration.md).
:::

### Signatur

Hier legen Sie die Signatur fest, die beim Verfassen neuer E-Mails verwendet wird.

- **Eigene Signatur verwenden**: Ist diese Option aktiv, wird beim Verfassen neuer E-Mails Ihre individuelle Signatur anstelle der global vorgegebenen verwendet. Ist sie deaktiviert, gilt weiterhin die globale Signatur.
- Bei aktivierter Option bearbeiten Sie die Signatur im Editor:
  - **Globale Signatur importieren**: Übernimmt die global vorgegebene Signatur als Ausgangspunkt
  - Über die Editor-/Quelltext-Umschaltung oben rechts im Editor wechseln Sie zwischen der formatierten Ansicht und der direkten HTML-Bearbeitung
  - Bilder können direkt in die Signatur eingefügt werden; sehr große Bilder werden mit einem Hinweis quittiert
- **Speichern** übernimmt die Änderungen, **Zurücksetzen** verwirft noch nicht gespeicherte Anpassungen.

:::warning[Wechsel zurück in die formatierte Ansicht]
Der formatierte Editor unterstützt nicht alle HTML-Formatierungen. Enthält Ihr Quelltext Bestandteile, die er nicht darstellen kann – ganze Elemente wie Tabellen oder eigene Formatvorlagen, aber auch einzelne Formatierungen wie Textausrichtung oder Schriftgröße –, gehen diese beim Zurückschalten in die **Editor**-Ansicht verloren. Vor dem Wechsel erscheint ein Bestätigungsdialog, der die betroffenen Elemente und Formatierungen auflistet: Mit **Abbrechen** bleibt Ihr Quelltext unverändert erhalten, mit **Trotzdem wechseln** übernehmen Sie den Verlust.
:::

Dieselbe Umschaltung steht Ihnen auch beim [Verfassen einer E-Mail](../features/e-mail.md#html-quelltext-bearbeiten) zur Verfügung.

### Automatische Antwort

Mit der automatischen Antwort (Abwesenheitsnotiz) beantworten Sie eingehende Nachrichten automatisch, z. B. während einer Abwesenheit. Sie können mehrere **Vorlagen** anlegen, aber es ist immer nur eine gleichzeitig aktiv.

#### Vorlagen verwalten

- Über die Auswahl **Vorlage auswählen** wechseln Sie zwischen vorhandenen Vorlagen; **Neue Vorlage** legt eine weitere an.
- Oberhalb des Formulars sehen Sie, ob aktuell eine Vorlage aktiv ist oder keine automatische Antwort läuft.

#### Vorlage bearbeiten

| Feld | Beschreibung |
|------|--------------|
| **Name der Vorlage** | Interne Bezeichnung der Vorlage |
| **Betreff** | Betreff der automatischen Antwort. Mit `${subject}` fügen Sie den ursprünglichen Betreff der eingehenden Nachricht ein |
| **Nachricht** | Text der automatischen Antwort |
| **E-Mail-Adressen** | Antworten werden nur für Nachrichten an diese Adressen gesendet (Hauptadresse und Aliase). Über **Standardadressen hinzufügen** ergänzen Sie Ihre eigenen Adressen |
| **Mindestabstand zwischen Antworten (Tage)** | Verhindert, dass derselbe Absender innerhalb dieses Zeitraums mehrfach automatisch beantwortet wird |
| **Eingehende Nachrichten während der Abwesenheit verwerfen** | Verwirft eingehende Nachrichten im Aktivierungszeitraum |

Zusätzlich können Sie unter **Aktivierungsbedingungen** den Geltungsbereich optional einschränken (siehe [Aktivierungsbedingungen](#aktivierungsbedingungen)).

#### Absender einschränken (intern / extern)

Über die Option **Antworten an Absender außerhalb der Organisation senden** legen Sie fest, ob auch externe Absender eine automatische Antwort erhalten:

- **Deaktiviert**: Die automatische Antwort geht ausschließlich an Absender innerhalb der Domänen Ihrer Organisation (interne Absender).
- **Aktiviert**: Auch externe Absender werden berücksichtigt. Zusätzlich wählen Sie aus, welche Absender genau beantwortet werden:
  - **Interne und alle externen Absender** – alle Absender erhalten eine Antwort.
  - **Nur externe Absender (nicht intern)** – ausschließlich Absender außerhalb der Organisation erhalten eine Antwort; interne Absender werden nicht automatisch beantwortet.
  - **Nur meine Kontakte** – reserviert für eine künftige Kontakte-App und derzeit nicht auswählbar.

Die zur Unterscheidung herangezogenen **internen Domänen** Ihrer Organisation werden unterhalb der Option angezeigt.

#### Aktivieren und Löschen

- **Speichern** sichert die Vorlage. Änderungen müssen gespeichert sein, bevor eine Vorlage aktiviert werden kann.
- **Aktivieren** schaltet die Vorlage scharf; eine zuvor aktive Vorlage wird dabei automatisch deaktiviert.
- **Deaktivieren** schaltet die automatische Antwort wieder ab.
- **Löschen** entfernt die ausgewählte Vorlage nach einer Sicherheitsabfrage.

#### Automatische Antwort für freigegebene Postfächer

Sind Sie als Berechtigter für ein oder mehrere **freigegebene Postfächer** (z. B. `verwaltung@…`) eingetragen, können Sie auch deren automatische Antwort verwalten. Der Abschnitt **Automatische Antwort für freigegebene Postfächer** erscheint nur dann, wenn Ihnen mindestens ein freigegebenes Postfach zugewiesen ist – andernfalls bleibt er ausgeblendet.

- Über die Auswahl **Freigegebenes Postfach auswählen** wählen Sie das Postfach, dessen automatische Antwort Sie bearbeiten möchten.
- Darunter erscheint dasselbe Formular wie für Ihr eigenes Postfach: Sie legen **Vorlagen** an, bearbeiten Betreff, Nachricht und Adressen, schränken den Geltungsbereich ein und **aktivieren** bzw. **deaktivieren** die automatische Antwort.
- Jedes freigegebene Postfach besitzt eigene Vorlagen und eine eigene aktive Antwort, unabhängig von Ihrem persönlichen Postfach. Beim Wechsel des Postfachs werden dessen Vorlagen geladen.

### Weiterleitung

Leiten Sie eingehende E-Mails automatisch an andere Adressen weiter.

- **Weiterleitung aktivieren**: Schaltet die Weiterleitung ein. Erst danach werden die weiteren Optionen angezeigt.
- **Weiterleiten an**: Die Zieladressen, an die eingehende E-Mails weitergeleitet werden (maximal vier). Eine Weiterleitung an Ihre eigenen Adressen ist nicht möglich.
- **Kopie in diesem Postfach behalten**: Ist diese Option aktiv, verbleibt zusätzlich eine Kopie jeder Nachricht in Ihrem Postfach.
- Unter **Aktivierungsbedingungen** lässt sich die Weiterleitung optional zeitlich einschränken (siehe [Aktivierungsbedingungen](#aktivierungsbedingungen)).
- **Speichern** übernimmt die Konfiguration, **Löschen** entfernt sie nach einer Sicherheitsabfrage.

#### Aktivierungsbedingungen

Automatische Antwort und Weiterleitung lassen sich optional nach Zeitraum, Tageszeit und Wochentagen einschränken. Ohne Angabe gelten sie durchgehend.

| Feld | Beschreibung |
|------|--------------|
| **Startdatum** / **Enddatum** | Zeitraum, in dem die Funktion aktiv ist |
| **Täglich ab** / **Täglich bis** | Tägliche Uhrzeitspanne, in der die Funktion greift |
| **Aktive Wochentage** | Wochentage (Mo–So), an denen die Funktion angewendet wird |

### Filter

Mit Filtern legen Sie Regeln fest, die automatisch auf eingehende E-Mails angewendet werden. So können Sie Nachrichten beispielsweise in einen bestimmten Ordner einsortieren, weiterleiten, markieren oder verwerfen lassen.

:::info[Auswertungsreihenfolge]
Die Regeln werden von oben nach unten ausgewertet. Über **Nach oben** und **Nach unten** können Sie die Reihenfolge einer Regel anpassen.
:::

#### Filterregel erstellen

1. Klicken Sie auf **Filter erstellen**, um eine neue Regel anzulegen
2. Vergeben Sie einen **Filternamen**
3. Über den Schalter neben der Regel können Sie diese aktivieren oder deaktivieren – deaktivierte Regeln bleiben erhalten, werden aber nicht angewendet
4. Klicken Sie auf **Fertig**, um die Bearbeitung der Regel abzuschließen
5. Klicken Sie abschließend auf **Speichern**, damit die Filter wirksam werden

#### Bedingungen

Legen Sie unter **Für eingehende Nachrichten, die** fest, wann eine Regel greift:

- **allen folgenden Regeln entsprechen** – die Regel greift nur, wenn *alle* Bedingungen zutreffen
- **einer der folgenden Regeln entsprechen** – die Regel greift, sobald *eine* der Bedingungen zutrifft

Über **Bedingung hinzufügen** fügen Sie weitere Bedingungen hinzu. Jede Bedingung besteht aus einem Feld, einem Vergleich und einem Wert.

| Feld | Beschreibung |
|------|--------------|
| **Von** | Absender der Nachricht |
| **An** | Empfänger der Nachricht |
| **Cc** | Kopieempfänger der Nachricht |
| **Betreff** | Betreffzeile der Nachricht |
| **Größe** | Größe der Nachricht (z. B. `1M`) |

| Vergleich | Beschreibung |
|-----------|--------------|
| **enthält** | Der Wert kommt im Feld vor |
| **ist** | Das Feld stimmt exakt mit dem Wert überein |
| **entspricht** | Das Feld passt auf ein Muster (mit Platzhaltern) |
| **ist größer als** | Nur bei **Größe**: Nachricht ist größer als der Wert |
| **ist kleiner als** | Nur bei **Größe**: Nachricht ist kleiner als der Wert |

#### Aktionen

Bestimmen Sie unter **Diese Aktionen ausführen**, was mit zutreffenden Nachrichten geschehen soll. Über **Aktion hinzufügen** können Sie mehrere Aktionen kombinieren.

| Aktion | Beschreibung |
|--------|--------------|
| **Nachricht ablegen in** | Verschiebt die Nachricht in den ausgewählten Ordner |
| **Umleiten an** | Leitet die Nachricht an eine andere E-Mail-Adresse weiter |
| **Kopie senden an** | Sendet eine Kopie an eine andere E-Mail-Adresse, behält das Original |
| **Nachricht verwerfen** | Löscht die Nachricht ohne Zustellung |
| **Markierung hinzufügen** | Versieht die Nachricht zusätzlich mit einer Markierung |
| **Markierung setzen** | Setzt die Markierung der Nachricht (ersetzt vorhandene) |

Als Markierungen stehen **Gelesen**, **Beantwortet**, **Markiert**, **Gelöscht** und **Entwurf** zur Verfügung.

#### Weitere Regeln stoppen

Mit der Option **Weitere Regeln nicht mehr verarbeiten** beenden Sie die Auswertung, sobald diese Regel zutrifft.

:::warning[Hinweis]
Wenn diese Regel zutrifft, werden keine darunterliegenden Regeln mehr ausgewertet – auch nicht Weiterleitung und automatische Antwort.
:::

#### Filter löschen

Über **Alle löschen** entfernen Sie sämtliche Filterregeln dauerhaft. Sie werden vor dem endgültigen Löschen um Bestätigung gebeten.

---

## Benutzeroberfläche

![Benutzeroberfläche](/img/benutzer/profil-user-interface.png)

### Sprache

Wählen Sie die Sprache der Benutzeroberfläche.

#### Systemsprache

Verfügbare Sprachen:
- 🇩🇪 **Deutsch** (Standard)
- 🇬🇧 **Englisch**
- 🇫🇷 **Französisch**

#### Sprache ändern

1. Klicken Sie auf die gewünschte Flagge/Sprache
2. Die Oberfläche wird automatisch aktualisiert
3. Keine zusätzliche Bestätigung erforderlich

:::tip[Hinweis]
Die Sprachauswahl gilt für die gesamte Benutzeroberfläche.
:::

### Erscheinungsbild

Wählen Sie das helle oder dunkle Farbschema der Benutzeroberfläche aus.

#### Verfügbare Farben
- **System** (Standard)
- **Dunkel**
- **Hell**

:::info[Systemfarbe]
Die Option **System** liest die Einstellungen des Betriebssystems aus und legt dementsprechend fest, ob das **dunkle** oder das **helle** Farbschema bevorzugt wird.
:::

#### Farbe ändern

1. Klicken Sie auf die gewünschte Farbe
2. Die Oberfläche wird automatisch aktualisiert
3. Keine zusätzliche Bestätigung erforderlich

:::tip[Hinweis]
Die Farbauswahl gilt für die gesamte Benutzeroberfläche.
:::

---

## App-Zugriff

![App-Zugriff](/img/benutzer/profil-app-zugriff.png)

Einrichtung des mobilen Zugriffs auf Ihre Dateien über die edulution.io App.

:::info[Nur für iOS]
Aktuell ist die edulution.io App nur für Apple iOS verfügbar.
:::

### Laden Sie hier die edulution.io App herunter

**Optionen zum Download:**
- **Einrichtung via QR-Code**: Scannen Sie den QR-Code mit Ihrem iPhone/iPad
- **Manuelles Einrichten**: Geben Sie die Daten manuell ein

### Einrichtung via QR-Code

1. Klicken Sie auf "Einrichtung via QR-Code"
2. Scannen Sie den angezeigten QR-Code mit Ihrer iPhone-Kamera
3. Folgen Sie den Anweisungen zum App-Download

### Manuelles Einrichten

Wenn Sie die Verbindung manuell einrichten möchten:

**Dialog: "Verbindung einrichten"**

Folgende Daten werden benötigt:

1. **Bitte gib die Anmeldedaten zum Schulserver an**
2. **QR Code scannen**: Alternative zum manuellen Eingeben

   **ODER**

3. **edulution.io**: App-Bezeichnung
4. **Server-URL**: z.B. "https://ui-73.dev.multi.schule/webdav"
5. **Benutzername**: Ihr Login (z.B. "agy-netzint-teacher")
6. **Passwort**: Ihr Passwort (Eingabefeld)
7. Klicken Sie auf **+ Hinzufügen**

**Wichtige Informationen:**
- Die Verbindung ermöglicht Zugriff auf Ihre Dateien
- WebDAV-Protokoll für Dateiübertragung
- Sichere verschlüsselte Verbindung (HTTPS)

### Nach der Einrichtung

- Zugriff auf Ihre Schuldateien von unterwegs
- Synchronisation Ihrer Dokumente
- Offline-Verfügbarkeit (je nach App-Einstellung)

Weitere Details unter [Mobile App & Tablet-Nutzung](../features/mobile-app.md).

---

## VPN-Zugang

_(Sichtbar als Administrator)_

Als Administrator können Sie hier einen VPN-Zugang über WireGuard einrichten.

---

## Meine Kinder/Eltern

_(Sichtbar als Elternteil/Schüler)_

![Meine Kinder](/img/benutzer/profil-children.png)

Hier wird das Verhältnis zwischen einem Elternteil (einer erziehungsberechtigten Person) und dem Kind bzw. den Kindern abgebildet.

### Mein Zuweisungs-Code

Ihnen wird ein QR-Code/Schlüssel zugewiesen, mit dem Sie Ihr Konto mit dem Konto einer anderen Person verlinken können.

:::info[Haltbarkeit]
Der Schlüssel ist nur für 5 Minuten gültig, dann wird ein neuer erstellt.
:::

### Code eingeben

Hier kann dann der Schlüssel eines anderen Nutzers eingefügt werden, um diesen Nutzer als Kind/Elternteil im eigenen Konto zu verlinken.

:::info[QR-Code]
Da zum Auslesen des QR-Codes eine Kamera erforderlich ist, ist der QR-Code nur innerhalb der App nutzbar.
:::

### Zuweisungen

Hier werden dann die verknüpften Konten der Kinder/Elternteile in einer Tabelle aufgelistet.

:::info[QR-Code]
Die Eltern-Kind Beziehung muss im Anschluss von einem Administrator freigegeben werden.
:::

---

## Schnellzugriffe

Vom Dashboard aus erreichen Sie das Profil-Menü über:
- Klick auf Ihr Profilbild (unten rechts)
- **Benutzereinstellungen** für Profileinstellungen
- **Logout** zum Abmelden

## Siehe auch

- [Dashboard](../features/dashboard.md) - Zurück zum Dashboard
- [Sicherheit & Authentifizierung](../features/sicherheit.md) - Detaillierte Sicherheitseinstellungen
- [Mobile App](../features/mobile-app.md) - Mobile Nutzung
- [E-Mail Migration](../../edulution-mail/user_mail_migration.md) - E-Mail einrichten
