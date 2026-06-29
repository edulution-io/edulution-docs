# Kontakte

Die **Kontakte**-App zeigt und verwaltet Kontakte aus den CardDAV-Adressbüchern der Schule. Die Adressbücher werden über einen CardDAV-Server (z.B. SOGo) angebunden, sodass Ihre Kontakte zentral gepflegt und mit anderen Geräten synchronisiert werden können.

## Übersicht

Die Kontakte-App ist in drei Bereiche aufgeteilt:

- **Adressbuch-Leiste** (links): Liste der verfügbaren Adressbücher mit Anzahl der enthaltenen Kontakte.
- **Kontaktliste** (Mitte): alle Kontakte des ausgewählten Adressbuchs mit Suchfeld.
- **Detailansicht** (rechts): die vollständigen Informationen des ausgewählten Kontakts.

Auf Mobilgeräten werden diese Bereiche nacheinander angezeigt; über eine Zurück-Schaltfläche gelangen Sie von der Detailansicht wieder zur Liste.

:::info
Solange kein Kontakt ausgewählt ist, zeigt die Detailansicht den Hinweis *„Wähle einen Kontakt aus, um die Details anzuzeigen."*.
:::

## Adressbücher

In der linken Leiste finden Sie alle Adressbücher, auf die Sie Zugriff haben. Beim Öffnen der App wird automatisch das Standard-Adressbuch ausgewählt.

Adressbücher können **beschreibbar** (eigene Adressbücher) oder **schreibgeschützt** sein. Schreibgeschützte Adressbücher – etwa das globale Adressbuch (GAL) oder geteilte Verzeichnisse – können Sie ansehen, aber nicht bearbeiten. In diesem Fall sind die Aktionen zum Erstellen, Bearbeiten und Löschen von Kontakten ausgeblendet.

### Aktionen für Adressbücher

Über das Kontextmenü eines Adressbuchs stehen je nach Berechtigung folgende Aktionen zur Verfügung:

| Aktion | Verfügbar | Beschreibung |
|--------|-----------|--------------|
| **Adressbuch hinzufügen** | immer | Legt ein neues, eigenes Adressbuch an |
| **Eigenschaften** | nur beschreibbare | Bearbeitet den Namen des Adressbuchs |
| **Kontakte importieren** | nur beschreibbare | Importiert Kontakte aus einer vCard-Datei |
| **Kontakte exportieren** | alle | Lädt alle Kontakte des Adressbuchs als `.vcf`-Datei herunter |
| **Konfigurationsprofil herunterladen** | alle | Lädt ein Apple-Profil (`.mobileconfig`) zur Geräteeinrichtung herunter |
| **Adressbuch löschen** | nur beschreibbare, nicht Standard | Löscht das Adressbuch samt aller enthaltenen Kontakte |

:::warning[Adressbuch löschen]
Das Löschen eines Adressbuchs entfernt das Adressbuch und alle darin enthaltenen Kontakte unwiderruflich. Das Standard-Adressbuch kann nicht gelöscht werden.
:::

### Eigenschaften

Über **Eigenschaften** können Sie den **Namen** eines beschreibbaren Adressbuchs ändern. Ein Name ist erforderlich.

## Kontakte anzeigen

Wählen Sie einen Kontakt in der Liste aus, um seine Details anzuzeigen. Es werden nur die Felder angezeigt, die tatsächlich gepflegt sind:

- **Anrede / Titel**, **Vorname**, **Zweiter Vorname**, **Nachname** und **Namenssuffix**
- **E-Mail-Adressen** (als anklickbare Mail-Links, je mit Bezeichnung)
- **Telefonnummern** (als anklickbare Anruf-Links, je mit Bezeichnung)
- **Adressen** (mehrzeilig: Straße/Adresszusatz/Postfach, Postleitzahl und Stadt, Bundesland/Region und Land)
- **Webseiten** (als anklickbare Links; aus Sicherheitsgründen werden nur gültige `http`-/`https`-Adressen verlinkt)
- **Geburtstag** (im Format `TT.MM.JJJJ`)
- **Organisation** und **Position**
- **Kategorien** (Schlagworte zur Gruppierung)
- **Notizen** (mehrzeilig, Zeilenumbrüche bleiben erhalten)

In der Kontaktliste wird zu jedem Eintrag der **Anzeigename** sowie – sofern vorhanden – die **Organisation** oder die erste **E-Mail-Adresse** angezeigt. Am unteren Rand sehen Sie die Gesamtanzahl der Kontakte.

## Kontakt erstellen und bearbeiten

Einen neuen Kontakt legen Sie über **Neuer Kontakt** an; einen bestehenden bearbeiten Sie über **Kontakt bearbeiten**. Beide Aktionen öffnen denselben Dialog.

Folgende Felder stehen zur Verfügung:

- **Anzeigename** – erforderlich
- **Anrede / Titel** (z.B. „Herr", „Dr.", „Prof.") und **Namenssuffix** (z.B. „Jr.", „Sr.")
- **Vorname**, **Zweiter Vorname**, **Nachname**
- **Organisation**, **Position**
- **Geburtstag** – über einen Datumsauswähler
- **Kategorien** – Schlagworte zur Gruppierung, mehrere durch Komma getrennt (z.B. „Kollegen, Eltern")
- **E-Mail-Adressen**, **Telefonnummern**, **Adressen** und **Webseiten** – jeweils beliebig oft hinzufügbar. Zu jedem Eintrag können Sie eine **Bezeichnung** (z.B. „Privat" oder „Geschäftlich") vergeben. Über **Hinzufügen** und **Entfernen** verwalten Sie die einzelnen Zeilen.
- **Notizen** – mehrzeiliges Textfeld

Eine Adresse besteht aus den Teilfeldern Straße, Adresszusatz, Postfach, Postleitzahl, Stadt, Bundesland/Region und Land.

:::info[Prüfung der Eingaben]
Beim Speichern werden die Eingaben geprüft. Ein **Anzeigename** ist Pflicht. E-Mail-Adressen, Telefonnummern und Webadressen müssen ein gültiges Format haben, andernfalls erscheint ein entsprechender Hinweis.
:::

## Kontakt löschen

Über **Kontakt löschen** (in der Detailansicht oder im Kontextmenü) entfernen Sie einen Kontakt. Vor dem Löschen erscheint eine Sicherheitsabfrage mit dem Namen des Kontakts. Das Löschen erfolgt sofort und kann nicht rückgängig gemacht werden.

## Kontakte importieren

Über **Kontakte importieren** fügen Sie einem beschreibbaren Adressbuch Kontakte aus einer **vCard-Datei** (`.vcf`) hinzu. Wählen Sie die gewünschte Datei über den Dateidialog aus oder ziehen Sie sie per **Drag & Drop** in den Auswahlbereich; sie kann einen oder mehrere Kontakte enthalten.

Nach dem Import erhalten Sie eine Rückmeldung, wie viele Kontakte importiert wurden und wie viele fehlgeschlagen sind (z.B. *„12 Kontakte importiert, 1 fehlgeschlagen."*). Gültige Kontakte werden auch dann übernommen, wenn einzelne Einträge nicht verarbeitet werden konnten.

Der Import gleicht bestehende Kontakte ab: Enthält die Datei einen Kontakt, den es im Adressbuch bereits gibt, wird der vorhandene Eintrag aktualisiert, statt ein Duplikat anzulegen.

## Kontakte exportieren und Geräte einrichten

- **Kontakt exportieren** (in der Detailansicht eines Kontakts) lädt einen einzelnen Kontakt als `.vcf`-Datei herunter.
- **Kontakte exportieren** lädt alle Kontakte des aktuellen Adressbuchs als einzelne `.vcf`-Datei herunter.
- **Konfigurationsprofil herunterladen** erzeugt ein Apple-Konfigurationsprofil (`.mobileconfig`), mit dem Sie die Adressbücher auf einem Apple-Gerät einrichten können. Das Profil dient der einmaligen Einrichtung der Synchronisation; das Passwort ist aus Sicherheitsgründen nicht enthalten und wird auf dem Gerät abgefragt.

Während ein Export oder Download vorbereitet wird, erscheint ein kurzer Hinweis.

## Suche

Über das Suchfeld oberhalb der Kontaktliste filtern Sie die Kontakte des aktuell ausgewählten Adressbuchs. Die Suche berücksichtigt **alle Textfelder** eines Kontakts – Name, Organisation, Position, E-Mail-Adressen, Telefonnummern, Adressen, Webseiten, Kategorien und Notizen – und ist nicht von Groß- und Kleinschreibung abhängig.

:::note
Die Suche bezieht sich immer nur auf das aktuell ausgewählte Adressbuch, nicht auf alle Adressbücher gleichzeitig.
:::

## Einrichtung (für Administratoren)

Die Anbindung der Kontakte-App an den CardDAV-Server wird in den [Einstellungen](../administration/einstellungen.md#kontakte-carddav) als Global-Admin konfiguriert (CardDAV-URL, Authentifizierungsmodus und Zertifikatsprüfung).

## Aktuelle Einschränkungen

- Das **Teilen von Adressbüchern** kann derzeit nicht über die Oberfläche verwaltet werden. Geteilte und schreibgeschützte Adressbücher werden angezeigt, die Freigabe selbst erfolgt serverseitig.
- Als Authentifizierungsmodus ist aktuell ausschließlich **Basic Auth** verfügbar.
- Kontakte lassen sich über **Kategorien** verschlagworten; **Verteilerlisten** (SOGo-Listen) werden in der Oberfläche derzeit noch nicht angezeigt.
- Es gibt keine Sammelaktionen (z.B. Mehrfachauswahl oder Sammellöschung).
- Der Import unterstützt vCard-Dateien (`.vcf`), jeweils **eine** Datei pro Vorgang; ein CSV-Import ist nicht verfügbar.
