---
sidebar_custom_props:
  audience: admin
---

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

## Proxy-Konfiguration (erweitert)

Auf der Wiki-Seite der **Einstellungen** finden Sie zusätzlich den Abschnitt **Proxy-Konfiguration**. Darüber pflegen Sie – ohne Zugriff auf den Host – die Traefik-Route, über die die edulution-API die **Wiki-Suche** und den **Wiki-Baum** des FileProxy erreicht.

Der Schalter **Expertenmodus** gibt den YAML-Editor zur Bearbeitung frei; ohne ihn ist die Konfiguration nur lesbar.

**Vorlage** füllt den Editor mit der korrekten Route: den beiden Wiki-API-Pfaden, dem Dienst `wiki-fileproxy` und dem Einstiegspunkt `websecure`. Ergänzen Sie darin nur noch die Adresse Ihres FileProxy als Ziel des Dienstes – die Vorlage lässt dieses Feld leer.

:::warning[Route nur auf die Wiki-API-Endpunkte einschränken]
Die Route darf **ausschließlich** die beiden Pfade `/wiki/search` und `/wiki/list` erfassen – niemals den gesamten `/wiki`-Präfix:

```yaml
rule: "Path(`/wiki/search`) || Path(`/wiki/list`)"
```

`/wiki` ist zugleich die client-seitige Route des Wikis selbst (`/wiki/<Freigabe>/<Seite>`). Eine `PathPrefix`-Regel auf `/wiki` hätte gegenüber der allgemeinen Weiterleitung an das Frontend Vorrang und würde den gesamten Bereich an den FileProxy leiten. Die Folge: Beim direkten Aufruf oder Neuladen einer Wiki-Seite erscheint ein 404, während die Navigation innerhalb der App noch funktioniert.
:::

Eine fehlerhafte Konfiguration kann dazu führen, dass die Wiki-Suche nicht mehr erreichbar ist. Die serverseitige Einrichtung von FileProxy und Suchindex ist in der [Wiki-Infrastruktur](../apps/dateien/konfiguration/fileproxy/wiki-infrastruktur.md) beschrieben.

### Die Wiki-Route wird nie von edulution gelöscht

Die Traefik-Route des Wikis wird bei der Installation auf dem Host bereitgestellt und ist deshalb nicht an die App-Konfiguration gebunden. edulution schreibt sie, entfernt sie aber nie:

- **Löschen** leert lediglich den Editor. Speichern Sie mit leerem Editor, bleibt die Konfigurationsdatei auf dem Host erhalten und die bisherige Route weiter aktiv.
- Auch das **Löschen der Wiki-App** in den Einstellungen lässt die Route unangetastet.

Ein leerer Editor bedeutet somit nicht, dass keine Route existiert, sondern nur, dass edulution derzeit keine verwaltet. Um die Route wirklich zu ändern, überschreiben Sie sie im Editor – um sie zu entfernen, löschen Sie die Datei auf dem Host.

### Automatische Übernahme bestehender Routen

Bei jedem Start der edulution-API wird die Wiki-Route abgeglichen:

- Ist in den Einstellungen noch keine Route gespeichert, auf dem Host aber bereits eine vorhanden, übernimmt edulution sie in den Editor. Die vom Installer eingerichtete Route erscheint damit unverändert in der UI.

Eine bereits in den Einstellungen gespeicherte Route wird dabei nie überschrieben – Ihre eigene Konfiguration hat immer Vorrang.

## Siehe auch

- [Wiki (Nutzerhandbuch)](../apps/native-apps/wiki.md) – Funktionen aus Sicht der Endbenutzer
- [Wiki-Infrastruktur](../apps/dateien/konfiguration/fileproxy/wiki-infrastruktur.md) – FileProxy- und Elasticsearch-Setup für die Wiki-Suche
- [Einstellungen](./einstellungen.md) – weitere globale Konfigurationsoptionen
- [Administration](./administration.md) – allgemeine Admin-Aufgaben
