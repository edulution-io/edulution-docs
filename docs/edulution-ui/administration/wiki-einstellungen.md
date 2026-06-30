# Wiki-Einstellungen

Die Sichtbarkeit von Wikis lässt sich pro WebDAV-Freigabe steuern – unabhängig vom Datei-Zugriff. So können einzelne Wikis komplett deaktiviert oder auf bestimmte Benutzergruppen eingeschränkt werden.

:::warning[Nur Global-Admin]
Diese Einstellungen sind ausschließlich für Global-Admins zugänglich.
:::

## Zugriff

Öffnen Sie als Global-Admin die **Einstellungen** (Zahnrad-Symbol unten im Menü) und wählen Sie in der Seitenleiste **Wiki**. Scrollen Sie im Hauptbereich zum ausklappbaren Abschnitt **Wiki-Sichtbarkeit**.

![Wiki Sichtbarkeit](/img/wiki/sichtbarkeit-tabelle.png)

## Tabelle der Freigaben

Die Tabelle listet alle WebDAV-Freigaben des Systems mit ihren Wiki-relevanten Eigenschaften:

| Spalte | Beschreibung |
|--------|--------------|
| **Anzeigename** | Name der Freigabe (sortierbar) |
| **Server** | URL bzw. IP des Backend-Servers, auf dem die Freigabe liegt |
| **Aktiv** | Auge / durchgestrichenes Auge – zeigt, ob das Wiki aktiviert ist |
| **Wiki-Zugriffsgruppen** | Liste der eingeschränkten Gruppen (`-` = keine Einschränkung) |
| **Aktionen** | Stift-Symbol zum Öffnen des Bearbeitungsdialogs |

Über das Stift-Symbol in der Spalte **Aktionen** öffnen Sie den Bearbeitungsdialog für eine einzelne Freigabe.

## Wiki einer Freigabe konfigurieren

![Wiki bearbeiten](/img/wiki/sichtbarkeit-dialog.png)

### Wiki aktivieren

**Wiki aktivieren**
- Schalter zum Ein- und Ausschalten des Wikis für diese Freigabe
- **Aus:** Das Wiki ist für **alle** Benutzer unsichtbar – auch für Global-Admins
- **Ein:** Das Wiki ist sichtbar gemäß den Wiki-Zugriffsgruppen (siehe unten)

### Wiki-Zugriffsgruppen

**Wiki-Zugriffsgruppen**
- Mehrfachauswahl-Feld mit Sucheingabe (`Tippen um zu suchen`) für Benutzergruppen (z.B. `all-teachers`, `agy-staff`, projektspezifische Gruppen)
- **Leer:** Das Wiki ist für jeden Benutzer sichtbar, der auch Datei-Zugriff auf die Freigabe hat
- **Befüllt:** Nur Benutzer in mindestens einer der gewählten Gruppen sehen das Wiki

Über **Speichern** werden die Wiki-Einstellungen übernommen, **Abbrechen** verwirft die Änderungen. Die übrigen Felder der Datei-Freigabe (URL, Authentifizierung, Status) bleiben unverändert.

## Sichtbarkeitsregeln im Überblick

Die effektive Sichtbarkeit eines Wikis ergibt sich aus drei Bedingungen:

| Wiki aktivieren | Wiki-Zugriffsgruppen | Sichtbar für |
|---|---|---|
| Aus | – | niemanden (auch nicht Global-Admin) |
| Ein | leer | alle Benutzer mit Datei-Zugriff auf die Freigabe |
| Ein | befüllt | nur Mitglieder der gewählten Gruppen (zusätzlich zum Datei-Zugriff für Nicht-Admins) |

:::note[Datei-Zugriff bleibt eigenständig]
Die Wiki-Einstellungen wirken **zusätzlich** zur Datei-Berechtigung. Hat ein Benutzer keinen Zugriff auf die zugrundeliegende WebDAV-Freigabe, sieht er das Wiki auch dann nicht, wenn er Mitglied einer Wiki-Zugriffsgruppe ist – außer er ist Global-Admin.
:::

:::warning[Sich selbst nicht aussperren]
Beim Setzen von Wiki-Zugriffsgruppen prüfen Sie, ob Sie selbst (bzw. die Admin-Gruppe) enthalten sind. Andernfalls verlieren Sie als Global-Admin zwar nicht den Datei-Zugriff, sehen das Wiki aber nicht mehr in der UI.
:::

## Anwendungsbeispiele

**Lehrer-Wiki**
- Eine Freigabe `lehrer-intern` enthält ein internes Handbuch
- **Wiki aktivieren:** Ein
- **Wiki-Zugriffsgruppen:** `all-teachers`, `all-staff`
- Schüler sehen die Datei-Freigabe (sofern berechtigt), aber nicht das Wiki

**Wiki vorübergehend deaktivieren**
- Während einer inhaltlichen Überarbeitung soll niemand das Wiki sehen
- **Wiki aktivieren:** Aus – die Einstellung wird gespeichert, Inhalte bleiben auf der Freigabe erhalten
- Nach Abschluss zurück auf **Ein** – die Inhalte erscheinen unverändert

**Klassen-Wiki**
- Eine Freigabe `klasse-10b` ist nur Mitgliedern der Klasse zugänglich
- **Wiki aktivieren:** Ein
- **Wiki-Zugriffsgruppen:** leer (Datei-Zugriff genügt zur Steuerung)

## Auswirkungen für Endbenutzer

Änderungen an der Wiki-Sichtbarkeit greifen beim nächsten Aufruf des Wiki-Bereichs durch den Endbenutzer; ein Neuladen der Anwendung ist nicht erforderlich.

Bereits geöffnete Bearbeitungs-Sessions auf einem deaktivierten Wiki werden beim nächsten Speicherversuch mit einer Fehlermeldung abgebrochen.

## Siehe auch

- [Wiki (Nutzerhandbuch)](../features/wiki.md) – Funktionen aus Sicht der Endbenutzer
- [Wiki-Infrastruktur](../../edulution-fileproxy/wiki-infrastruktur.md) – FileProxy- und Elasticsearch-Setup für die Wiki-Suche
- [Einstellungen](einstellungen.md) – weitere globale Konfigurationsoptionen
- [Administration](administration.md) – allgemeine Admin-Aufgaben
