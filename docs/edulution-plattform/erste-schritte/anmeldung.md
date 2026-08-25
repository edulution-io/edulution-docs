# Anmeldung

Die **Anmeldeseite** ist die erste Seite, die Benutzer von edulution zu sehen bekommen. Sie wurde mit der edulution Plattform v2.0 neu gestaltet und zeigt neben dem Anmeldeformular die **Informationen Ihrer Organisation** – Logo, Name, ein frei gestaltbarer Begrüßungstext und ein großflächiges Hintergrundbild.

Alle angezeigten Organisationsinformationen stammen aus den [Globalen Einstellungen](../konfiguration/einstellungen.md) und werden bereits **vor der Anmeldung** geladen. Es ist also keine Anmeldung nötig, um Ihre Schule oder Behörde auf der Startseite wiederzuerkennen.

## Aufbau der Seite

![Die neu gestaltete Anmeldeseite: links das Anmeldeformular, rechts der Organisationsbereich mit Login-Bild, Logo, Organisationsname und Login-Text](/img/anmeldung/anmeldeseite-uebersicht.webp)

Die Seite ist zweigeteilt:

| Bereich | Inhalt |
| --- | --- |
| **Links: Anmeldeformular** | edulution-Logo, Überschrift **Anmelden** mit dem Hinweis *„Willkommen zurück! Bitte gib deine Zugangsdaten ein."*, die Felder **Benutzername** und **Passwort**, die Schaltflächen **Anmelden** und **Anmelden mit QR-Login** sowie die Fußzeile |
| **Rechts: Organisationsbereich** | Login-Bild als Hintergrund, darauf das Logo Ihrer Organisation sowie ein abgesetzter Kasten mit **Organisationsname** und **Login-Text** |

Die Fußzeile enthält die Versionsnummer der Oberfläche und – sofern eingerichtet – die Links zu **Impressum** und **Datenschutz** (siehe [Impressum und Datenschutz einrichten](../konfiguration/impressum-datenschutz.md)).

:::info[Organisationsbereich nur auf großen Bildschirmen]
Der rechte Organisationsbereich wird erst ab einer Fensterbreite von etwa 1024 Pixeln eingeblendet. Auf Smartphones, Tablets und in schmalen Browserfenstern nimmt das Anmeldeformular die gesamte Breite ein; Logo, Organisationsname und Login-Text werden dort nicht angezeigt.
:::

![Die Anmeldeseite in einem schmalen Fenster – das Formular nimmt die volle Breite ein, der Organisationsbereich entfällt](/img/anmeldung/anmeldeseite-schmal.webp)

## Organisationsinformationen

Welche Inhalte auf der Anmeldeseite erscheinen, legen Global-Admins unter **Einstellungen → Globale Einstellungen** fest:

| Element auf der Anmeldeseite | Einstellung |
| --- | --- |
| **Hintergrundbild** des rechten Bereichs | Bereich *Branding* → **Login-Bild** |
| **Logo** über dem Organisationsnamen | Bereich *Branding* → **Logo** (je ein Bild für den hellen und den dunklen Modus) |
| **Organisationsname** (fette Überschrift im Kasten) | Bereich *Organisationsinformationen* → **Organisation** |
| **Login-Text** (Text unter dem Namen) | Bereich *Organisationsinformationen* → **Login-Text** |

Hinweise zur Darstellung:

- Ist **kein Login-Bild** hinterlegt, erscheint an seiner Stelle ein Farbverlauf in den edulution-Farben. Die Seite bleibt also auch ohne eigenes Bild vollständig nutzbar.
- Sind **weder Organisationsname noch Login-Text** gepflegt, entfällt der Kasten ersatzlos – es bleibt beim Bild bzw. Farbverlauf.
- Der **Login-Text** ist ein mehrzeiliges Freitextfeld. Zeilenumbrüche bleiben erhalten. Ist der Text sehr lang, wird der Kasten nicht beliebig groß: Der Text lässt sich innerhalb des Kastens scrollen.
- Das **Logo** wird passend zum aktuellen Erscheinungsbild (heller oder dunkler Modus) geladen. Fehlt die Variante für das aktive Erscheinungsbild, wird automatisch die andere verwendet.

:::tip[Organisationstyp beeinflusst das edulution-Logo]
Über dem Anmeldeformular wird das **edulution-Logo** angezeigt, wenn unter **Einstellungen → Globale Einstellungen → Allgemein** als **Organisationstyp** *Schule* oder *Öffentliche Verwaltung* eingestellt ist. Beim Organisationstyp *Unternehmen* entfällt es, sodass ausschließlich Ihr eigenes Branding zu sehen ist.
:::

## Anmelden mit Benutzername und Passwort

1. Tragen Sie **Benutzername** und **Passwort** ein. Der Cursor steht beim Öffnen der Seite bereits im Feld *Benutzername*.
2. Über das Augensymbol im Passwortfeld können Sie die Eingabe sichtbar machen.
3. Klicken Sie auf **Anmelden**.

Die Schaltfläche **Anmelden** ist erst aktiv, wenn beide Felder ausgefüllt sind. Solange etwas fehlt, wird sie blass und ausgegraut dargestellt und nimmt mit jedem ausgefüllten Feld sichtbar mehr Farbe an.

Nach erfolgreicher Anmeldung werden Sie automatisch weitergeleitet – entweder auf die Seite, die Sie ursprünglich aufrufen wollten, oder auf Ihre Startseite.

## Anmelden mit QR-Login

![Die Anmeldeseite mit eingeblendetem QR-Code für die Anmeldung über die edulution.io App](/img/anmeldung/anmeldeseite-qr-login.webp)

Mit der Schaltfläche **Anmelden mit QR-Login** melden Sie sich ohne Eingabe von Zugangsdaten über die edulution.io App an:

1. Klicken Sie auf **Anmelden mit QR-Login**. Anstelle der Eingabefelder erscheint ein QR-Code mit dem Hinweis *„Öffne die edulution.io APP um dich einfach mit dem QR-Code anzumelden."*
2. Scannen Sie den QR-Code mit der [edulution.io App](../../edulution-app/mobile-ansicht.md).
3. Die Anmeldung wird daraufhin automatisch abgeschlossen – Sie müssen am Rechner nichts weiter eingeben.

Mit **Abbrechen** kehren Sie zum Anmeldeformular zurück.

:::caution[QR-Code läuft ab]
Ein QR-Code ist **3 Minuten** gültig. Danach erscheint der Hinweis *„Zeit für Login mit edulution.io APP abgelaufen."* und die Seite kehrt zum Anmeldeformular zurück. Klicken Sie einfach erneut auf **Anmelden mit QR-Login**, um einen neuen Code zu erzeugen.
:::

## Zwei-Faktor-Authentisierung

Ist für Ihr Konto die Zwei-Faktor-Authentisierung eingerichtet oder für Ihre Benutzergruppe verpflichtend, wechselt die Seite nach der Eingabe von Benutzername und Passwort zum Schritt **Zwei-Faktor-Authentisierung** mit dem Hinweis *„Gib den 6-stelligen Code aus deiner Authenticator-App ein."*.

Geben Sie den sechsstelligen Code aus Ihrer Authenticator-App ein; die Anmeldung wird abgeschickt, sobald die letzte Ziffer eingetragen ist. Über **Abbrechen** gelangen Sie zurück zum Anmeldeformular.

Einrichtung und unterstützte Apps sind unter [Sicherheit & Authentifizierung](../features/sicherheit.md#zwei-faktor-authentifizierung-2fa) beschrieben.

## Meldungen auf der Anmeldeseite

| Meldung | Bedeutung und Vorgehen |
| --- | --- |
| **Aktualisierung erforderlich** – *„Diese edulution.io-Oberfläche (Version …) stimmt nicht mit dem Server (Version …) überein."* | Nach einem Update wurde im Browser noch die alte Oberfläche geladen. Klicken Sie auf **Neu laden**. Mit **Trotzdem anmelden** können Sie die Meldung übergehen. |
| **Anmeldung dauert länger als erwartet** – *„Deine Anmeldung konnte nicht abgeschlossen werden."* | Die Anmeldung war erfolgreich, das Laden der Anwendung hat aber zu lange gedauert. Wählen Sie **Erneut versuchen** oder **Abmelden**. |
| *„Sitzung abgelaufen."* | Sie wurden nach längerer Inaktivität automatisch abgemeldet. Melden Sie sich einfach neu an. |
| *„Verbindung zum Schulserver fehlgeschlagen."* | Der Linuxmuster-Server ist nicht erreichbar. Wenden Sie sich an Ihre Administration. |

## Hinweise

- Die **Sprache** der Anmeldeseite richtet sich nach der Spracheinstellung Ihres Browsers (Deutsch, Englisch oder Französisch). Ist keine dieser Sprachen eingestellt, wird Deutsch verwendet.
- In der **edulution.io App** wird das Passwortfeld ausgeblendet; die Anmeldung erfolgt dort über die App selbst.
- Änderungen an Logo, Login-Bild, Organisationsname oder Login-Text werden nach dem Speichern in den Einstellungen und dem Neuladen der Anmeldeseite wirksam.

## Siehe auch

- [Einstellungen (Settings)](../konfiguration/einstellungen.md) – Branding und Organisationsinformationen pflegen
- [Impressum und Datenschutz einrichten](../konfiguration/impressum-datenschutz.md) – Links in der Fußzeile
- [Sicherheit & Authentifizierung](../features/sicherheit.md) – Zwei-Faktor-Authentisierung und Passwörter
- [Mobile App](../../edulution-app/mobile-ansicht.md) – edulution.io App für den QR-Login
