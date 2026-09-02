---
sidebar_custom_props:
  audience: admin
---

# Benutzerverwaltung

Die **Benutzerverwaltung** ist der Bereich der App **Schulserver**, in dem Sie die Benutzerkonten Ihres Linuxmuster-Servers anzeigen, importieren und pflegen. Grundlage sind die Sophomorix-Verwaltungslisten: Jeder Benutzertyp besitzt eine CSV-Liste (z.B. `students.csv`), die Sie in einer tabellarischen Ansicht direkt in der Oberfläche bearbeiten, als CSV-Datei importieren oder exportieren und anschließend über einen zweistufigen Prüf- und Übernahmeprozess in Linuxmuster einspielen.

:::warning[Voraussetzungen]
Die Benutzerverwaltung ist Teil der App **Schulserver** und steht nur zur Verfügung, wenn die **Zielplattform** auf **Linuxmuster** gesetzt ist und die Linuxmuster-API in einer ausreichenden Version vorliegt. Die allgemeinen Voraussetzungen und den Aufbau der App beschreibt die Seite [Linuxmuster / LINBO](./linuxmuster.md).
:::

## Aufbau

Die Benutzerverwaltung erreichen Sie über den Eintrag **Benutzerverwaltung** in der Seitenleiste der App **Schulserver** oder über die entsprechenden Kacheln der Übersicht. In der Seitenleiste wählen Sie zunächst den **Benutzertyp**:

| Benutzertyp | Verwaltungsliste |
|-------------|------------------|
| **Schüler** | ja |
| **Lehrer** | ja |
| **Extra-Schüler** | ja |
| **Eltern** | ja |
| **Mitarbeiter** | ja |
| **Schuladmins** | – (nur Anzeige) |
| **Globaladmins** | – (nur Anzeige) |

:::note[Schul- und Unternehmensumgebungen]
In Unternehmensumgebungen entfallen die schulspezifischen Benutzertypen; sichtbar bleiben dort im Wesentlichen **Mitarbeiter** und **Globaladmins**. Die Spalte **Klasse** heißt in diesen Umgebungen **Primärgruppe**.
:::

Für Benutzertypen mit Verwaltungsliste ist die Ansicht in zwei Registerkarten geteilt:

- **Benutzer** – die bestehenden Konten (Nur-Lese-Ansicht).
- **Import** – die bearbeitbare, CSV-gestützte Liste.

Für Benutzertypen ohne Verwaltungsliste (Schuladmins, Globaladmins) entfällt die Registerkarte **Import**; dort erscheint der Hinweis *„Für diesen Benutzertyp ist kein Import verfügbar."*

:::note[Schulauswahl]
In Umgebungen mit mehreren Schulen enthalten die Ansichten oben rechts eine **Schulauswahl**. Ein Wechsel der Schule verwirft die bereits geladenen Daten und lädt die Listen der gewählten Schule erneut. Die Schulauswahl steht **Globaladmins** zur Verfügung.

Als **Schuladmin** arbeiten Sie ausschließlich in Ihrer eigenen Schule: Benutzertabelle, Verwaltungslisten und die Übernahme nach Sophomorix beziehen sich immer auf diese Schule. Die Plattform prüft das auf dem Server und weist eine Anfrage für eine fremde Schule ab.
:::

## Registerkarte „Benutzer"

![Benutzerverwaltung](/img/benutzerverwaltung/benutzerverwaltung01.png)

Die Registerkarte **Benutzer** zeigt die vorhandenen Konten des gewählten Benutzertyps in einer Tabelle. Über das Suchfeld (*„Benutzer filtern…"*) grenzen Sie die Liste ein.

| Spalte | Inhalt |
|--------|--------|
| **Login** | der Anmeldename (`cn`) des Kontos |
| **Klasse** / **Primärgruppe** | die Primärgruppe des Kontos (nur bei Benutzertypen mit Klasse) |
| **Name** | der Anzeigename |
| **Status** | der Sophomorix-Status des Kontos |

Über die Aktionen einer Zeile öffnen Sie die **Passwort-Aktionen** oder die **Details** des Kontos.

![Benutzerverwaltung-Benutzer-ContextMenu](/img/benutzerverwaltung/benutzerverwaltung02-contextMenu.png)

### Sophomorix-Status

Die Spalte **Status** zeigt den Sophomorix-Status des Kontos:

| Kürzel | Bedeutung |
|--------|-----------|
| **U** | Verwendbar |
| **S** | Selbstaktiviert |
| **E** | Aktiviert |
| **P** | Permanent |
| **A** | Reaktiviert |
| **T** | Toleriert |
| **D** | Deaktiviert |
| **F** | Eingefroren |
| **L** | Gesperrt |
| **K** | Löschbar |
| **R** | Entfernbar |

### Benutzerdetails

Über **Details** öffnen Sie den Dialog **Benutzerdetails**, der die Angaben zum Konto in drei Abschnitten bündelt:

- **Eigenschaften** – u.a. Loginname, Mailadresse-Alias, Sophomorix-Status, Rolle, Schulname, Benutzer-ID, Geburtsdatum sowie Deaktivierungs-, Duldungs- und Erstellungsdatum.
- **Gruppenmitgliedschaft** – die regulären Gruppen sowie die Verwaltungsgruppen des Kontos.
- **Quota** – die Speicherkontingente des Kontos, sofern verfügbar.

![Benutzerverwaltung-Benutzer-Details-01](/img/benutzerverwaltung/benutzerverwaltung03-userDetails.png)

![Benutzerverwaltung-Benutzer-Details-02](/img/benutzerverwaltung/benutzerverwaltung04-userDetails.png)

### Passwörter

Über die **Passwort-Aktionen** eines Kontos verwalten Sie dessen Passwort:

| Aktion | Beschreibung |
|--------|--------------|
| **Erstpasswort anzeigen** | zeigt das ursprünglich vergebene Erstpasswort an |
| **Erstpasswort wiederherstellen** | setzt das Konto auf das Erstpasswort zurück |
| **Erstpasswort zufällig festlegen** | vergibt ein neues, zufälliges Erstpasswort |
| **Benutzerdefiniertes Passwort festlegen** | legt ein selbst gewähltes Passwort fest |
| **Aktuelles Benutzerpasswort festlegen** | setzt das aktuelle Passwort des Benutzers |

![Benutzerverwaltung-Benutzer-Passwort](/img/benutzerverwaltung/benutzerverwaltung05-userPasswort.png)

## Registerkarte „Import"

![Benutzerverwaltung-Import](/img/benutzerverwaltung/benutzerverwaltung06-import.png)

Die Registerkarte **Import** zeigt die Verwaltungsliste des Benutzertyps als bearbeitbare Tabelle. Sie entspricht der Datei `<Schule>/<Typ>.csv` auf dem Server (z.B. `/etc/linuxmuster/sophomorix/<Schule>/students.csv`). Neu hinzugefügte Zeilen, geänderte Zellen und zur Löschung markierte Zeilen werden farblich hervorgehoben, sodass Sie Ihre Änderungen vor dem Speichern nachvollziehen können.

Je nach Benutzertyp stehen unterschiedliche Spalten zur Verfügung:

| Benutzertyp | Spalten |
|-------------|---------|
| **Schüler** | Klasse, Nachname, Vorname, Geburtsdatum, ID |
| **Lehrer** | Nachname, Vorname, Geburtsdatum, Gewünschter Login |
| **Extra-Schüler** | Klasse, Nachname, Vorname, Geburtsdatum, Gewünschter Login |
| **Eltern** | Nachname, Vorname |
| **Mitarbeiter** | Kategorie, Nachname, Vorname |

:::info[Gewünschter Login]
Der Wert der Spalte **Gewünschter Login** wird unverändert aus der CSV-Datei gelesen und kann sich vom tatsächlichen Anmeldenamen des Benutzers unterscheiden, der in LDAP gespeichert ist.
:::

### Aktionen

Über die Schaltflächen der Registerkarte **Import** bearbeiten Sie die Liste:

| Aktion | Beschreibung |
|--------|--------------|
| **Benutzer hinzufügen** | fügt der Liste eine leere Zeile hinzu |
| **Zurücksetzen** | lädt die Liste neu vom Server und verwirft ungespeicherte Änderungen |
| **Speichern** | speichert die Liste auf dem Server |
| **Prüfen** | speichert die Liste und startet einen Prüflauf (Sophomorix-Check) |
| **CSV** | öffnet den Dialog zum Importieren und Exportieren der CSV-Datei |

:::note[Wer darf schreiben?]
Die schreibenden Aktionen **Speichern** und **Prüfen** – und damit das anschließende **Übernehmen** – stehen nur **Globaladmins** und **Schuladmins** zur Verfügung; für andere Rollen sind diese Schaltflächen ausgeblendet. Alle berechtigten Benutzer können die Listen weiterhin einsehen, lokal bearbeiten und als CSV exportieren – diese Änderungen werden dabei jedoch nicht auf den Server geschrieben.
:::

### Eingaben prüfen

Vor dem Speichern werden die Einträge geprüft. Solange eine Zelle ungültig ist, bleiben **Speichern** und **Prüfen** blockiert und es erscheint der Hinweis *„Bitte korrigieren Sie alle ungültigen Felder vor dem Speichern"*.

- **Geburtsdatum** muss dem Format `TT.MM.JJJJ` entsprechen und ein gültiges Datum sein.
- **Klasse**, **Kategorie** und **Gewünschter Login** dürfen nur Buchstaben (inklusive Umlaute und `ß`), Ziffern, Leerzeichen sowie die Zeichen `_` und `-` enthalten.
- **Vorname**, **Nachname** und **ID** unterliegen keiner Formatprüfung.

![Benutzerverwaltung-Import-Pruefen](/img/benutzerverwaltung/benutzerverwaltung08-import-pruefen.png)

## CSV importieren und exportieren

Über die Schaltfläche **CSV** öffnen Sie den CSV-Dialog. Sein Titel zeigt den vollständigen Pfad der Datei auf dem Server (z.B. `/etc/linuxmuster/sophomorix/<Schule>/<Liste>.csv`).

![Benutzerverwaltung-Import-CSV](/img/benutzerverwaltung/benutzerverwaltung07-import-csv.png)

- **Importieren** – Sie fügen den CSV-Inhalt direkt in das Textfeld ein und bearbeiten ihn dort, oder Sie ziehen eine Datei per **Drag & Drop** in den Auswahlbereich bzw. wählen sie über den Dateidialog aus. Zulässig sind Dateien mit der Endung `.csv` und `.txt`. Kommentarzeilen, die mit `#` beginnen, bleiben erhalten.
- **Exportieren** – über **CSV Herunterladen** laden Sie die aktuelle Liste als Datei `<Liste>.csv` herunter, etwa als Vorlage für die weitere Bearbeitung.

Ein über den Dialog importierter CSV-Inhalt ersetzt die Einträge der Tabelle. Damit die Änderungen tatsächlich wirksam werden, müssen Sie die Liste anschließend noch **speichern**, **prüfen** und **übernehmen**.

## Import in drei Schritten

Der Import ist bewusst mehrstufig aufgebaut, damit Sie die Auswirkungen sehen, bevor sie geschrieben werden:

1. **Speichern** – die bearbeitete Liste wird auf dem Server abgelegt. Die Bestätigungsmeldung weist ausdrücklich darauf hin, anschließend **Prüfen** zu verwenden; gespeichert allein bewirkt noch keine Änderung an den Konten.
2. **Prüfen** – bevor die Prüfung startet, muss die Liste gespeichert sein; ist das noch nicht geschehen, fragt der Dialog *„Die Liste muss vor der Prüfung gespeichert werden. Möchten Sie die Liste jetzt speichern und fortfahren?"*. Linuxmuster wertet die Liste anschließend als Testlauf aus und zeigt das Ergebnis im Dialog **Prüfergebnis** an.
3. **Übernehmen** – erst dieser Schritt schreibt die ausgewählten Änderungen tatsächlich in Linuxmuster.

### Prüfergebnis

Der Dialog **Prüfergebnis** gliedert das Ergebnis in mehrere Registerkarten:

| Registerkarte | Inhalt |
|---------------|--------|
| **Übersicht** | Zusammenfassung der erkannten Änderungen |
| **Hinzufügen** | Konten, die angelegt würden |
| **Aktualisieren** | Konten, die aktualisiert würden |
| **Entfernen** | Konten, die entfernt würden |

Über Auswahlkästchen legen Sie fest, welche dieser Änderungsarten übernommen werden sollen, und lösen sie über **Übernehmen** aus. Werden keine Unterschiede gefunden, erscheint der Hinweis *„Keine Änderungen erkannt. Die aktuellen Daten stimmen mit den vorhandenen Benutzerkonten überein."*

:::note[Übernahme im Hintergrund]
Nach dem Auslösen verarbeitet Sophomorix die Änderungen im Hintergrund (*„Anwendung gestartet — sophomorix verarbeitet die Änderungen im Hintergrund"*). Die Konten stehen daher unter Umständen erst kurze Zeit nach der Übernahme vollständig zur Verfügung.
:::

## Siehe auch

- [Linuxmuster / LINBO](./linuxmuster.md) – Aufbau der App Schulserver, Geräteverwaltung, Elternzuweisung und LINBO
- [Einstellungen](../edulution-plattform/konfiguration/einstellungen.md) – globale Konfiguration, u.a. der Zielplattform
- [Linuxmuster verbinden](./installation.md) – Verbindung zum Schulserver einrichten
