# Automatische Antwort (Abwesenheitsnotiz)

Mit der **automatischen Antwort** richten Benutzer eine Abwesenheitsnotiz
für ihr Postfach ein – zum Beispiel während des Urlaubs. edulution
verwaltet dafür ein Sieve-`vacation`-Skript (RFC 5230) über das
ManageSieve-Protokoll (RFC 5804). Die Verwaltung erfolgt direkt in
edulution, die Sieve-Verwaltung von SOGo ist deaktiviert (edulution
besitzt das aktive Skript).

Die Einstellungen finden sich unter **Benutzereinstellungen ▸ E-Mail ▸
Automatische Antwort**.

## Eigenes Postfach

Ein Benutzer kann mehrere **Vorlagen** (Presets) anlegen, von denen immer
nur **eine aktiv** ist. Folgende Felder stehen zur Verfügung:

- **Name** – Bezeichnung der Vorlage.
- **Betreff** – Betreff der automatischen Antwort. Mit dem Platzhalter
  `${subject}` lässt sich der ursprüngliche Betreff der eingehenden
  Nachricht einfügen.
- **Nachricht** – der Text der automatischen Antwort.
- **Antwortintervall** – Mindestanzahl an Tagen zwischen zwei Antworten an
  denselben Absender.
- **Adressen** – die eigenen Adressen (primär + Aliasse), für die die
  Antwort gilt. Über _Standardadressen hinzufügen_ werden alle eigenen
  Adressen übernommen.
- **Eingehende Nachrichten verwerfen** – optionales Verwerfen der
  eingehenden Nachricht.
- **Zeitraum, Wochentage und Tageszeit** – optionale zeitliche
  Einschränkung der automatischen Antwort.

Über **Aktivieren** / **Deaktivieren** wird die gewählte Vorlage scharf
geschaltet bzw. abgeschaltet. Beim Aktivieren wird das Sieve-Skript auf dem
Mailserver erzeugt; beim Deaktivieren wird es wieder entfernt.

:::tip
Eine bereits in SOGo eingerichtete Abwesenheitsnotiz wird beim ersten
Öffnen automatisch als Vorlage importiert.
:::

## Freigegebene Postfächer

Berechtigte Benutzer können zusätzlich die automatische Antwort eines
**freigegebenen Postfachs** (z. B. `verwaltung@…`) verwalten. Der Abschnitt
**Automatische Antwort für freigegebene Postfächer** erscheint nur, wenn
der angemeldete Benutzer mindestens ein freigegebenes Postfach verwalten
darf.

- **Wer darf verwalten?** Jeder Benutzer, der als **Delegierter** des
  freigegebenen Postfachs eingetragen ist (dieselbe Berechtigung wie für
  das Senden im Namen des Postfachs).
- **Auswahl** – über die Auswahlliste wird das gewünschte freigegebene
  Postfach gewählt; darunter erscheint dieselbe Vorlagen-Verwaltung wie für
  das eigene Postfach.
- **Eine aktive Antwort pro Postfach** – die automatische Antwort gehört
  dem Postfach und ist für alle Delegierten sichtbar; es ist immer nur eine
  Vorlage aktiv.

## Voraussetzung für Administratoren: ManageSieve-Master-Benutzer

Damit edulution die automatische Antwort eines **freigegebenen** Postfachs
setzen kann, meldet sich der Server über ManageSieve als **Dovecot-Master-
Benutzer** im Namen des Zielpostfachs an (SASL `PLAIN` mit
Autorisierungs-Identität). Für das **eigene** Postfach ist das nicht
erforderlich.

Der edulution-Installer erzeugt dieses Master-Geheimnis automatisch und
hinterlegt es auf beiden Seiten (analog zum `MAILCOW_API_TOKEN`):

- `DOVECOT_MASTER_USER` / `DOVECOT_MASTER_PASS` für den
  edulution-mail-Container (werden beim Start in die `mailcow.conf`
  übernommen),
- `MAIL_MANAGESIEVE_MASTER_USER` / `MAIL_MANAGESIEVE_MASTER_PASS` für
  edulution-api.

Die Werte lassen sich nachträglich in der edulution-Oberfläche unter
**Einstellungen ▸ E-Mail** ändern:

- **ManageSieve-Master-Benutzer** (z. B. `edulution-sieve@mailcow.local`)
- **ManageSieve-Master-Passwort** (maskiertes Feld)

Bleiben die Felder leer, werden die Werte aus den oben genannten
Umgebungsvariablen verwendet.

:::caution
Ist kein Master-Benutzer konfiguriert, bleibt die automatische Antwort für
**freigegebene Postfächer** deaktiviert und meldet einen entsprechenden
Hinweis. Die automatische Antwort für das **eigene** Postfach ist davon
nicht betroffen.
:::

:::tip
Der ManageSieve-Server (Host/Port) wird ebenfalls unter **Einstellungen ▸
E-Mail** konfiguriert. Ohne eigene Angabe wird der IMAP-Host verwendet; der
Standard-Port ist `4190`.
:::
