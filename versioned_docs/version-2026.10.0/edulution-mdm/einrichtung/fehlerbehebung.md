---
sidebar_position: 4
title: Fehlerbehebung
description: Leere Listen, fehlende Relution-Zugänge und abgelehnte Geräteaktionen
sidebar_custom_props:
  audience: admin-operate
---

# Fehlerbehebung

Die Meldungen der App benennen den Bereich, in dem etwas fehlschlug; die Ursache steht im Log der edulution API. Die folgende Tabelle ordnet beides einander zu.

## Häufige Beobachtungen

| Beobachtung | Ursache und Abhilfe |
|---|---|
| Die App fehlt in der **Seitenleiste** | Die App ist nicht im App-Store hinzugefügt, hat keinen Anzeigeort, oder der Benutzer ist in keiner der unter **Nutzergruppen** hinterlegten Gruppen. Siehe [App konfigurieren](./app-konfiguration.md#schritt-3-sichtbarkeit-festlegen). |
| *„Relution-API ist nicht konfiguriert."* | URL oder API-Schlüssel fehlen, oder die URL ist syntaktisch ungültig. Prüfen Sie **Einstellungen → MDM**. |
| *„Für diesen Benutzer ist kein Relution-Zugang angelegt."* | Der Benutzer ist in keiner **Gruppe für Sync**, oder der Sync ist noch nicht gelaufen. Über **Jetzt syncen** anstoßen. |
| *„Geräte konnten nicht von Relution geladen werden."* | Relution antwortet nicht oder lehnt den Token ab. Erreichbarkeit vom edulution-Server aus prüfen, Token in Relution auf Gültigkeit und Scope **API** prüfen. |
| *„Relution lieferte ungültige oder unvollständige Daten."* | Die Antwort enthielt nicht die erwarteten Felder – meist eine abweichende Relution-Version oder ein Konto ohne Organisationszuordnung. |
| *„Aktion konnte nicht an Relution gesendet werden."* | Relution hat die Geräteaktion abgelehnt – häufig, weil die Plattform des Geräts sie nicht unterstützt oder das Konto sie nicht ausführen darf. |
| *„Synchronisation fehlgeschlagen."* | Ein Durchlauf läuft bereits, oder der Service-Account darf keine Benutzer verwalten. |
| *„Benutzer konnte nicht entfernt werden."* | Relution lehnte das Löschen ab. Der lokale Eintrag bleibt erhalten, damit nichts halb gelöscht zurückbleibt. |
| Übersicht zeigt **Nullen**, Listen sind leer | Die Verbindung steht, das Konto sieht in Relution aber nichts. Prüfen Sie Organisation und Rechte des Service-Accounts. |
| Ein Benutzer sieht **weniger** als erwartet | Reguläre Benutzer greifen mit ihrem eigenen Relution-Konto zu. Was dieses Konto in Relution nicht sehen darf, erscheint auch in edulution nicht. |

## Wo Sie nachsehen

Alle Fehler der Anbindung protokolliert die edulution API unter den Kontexten `MobileDevicesService` und `RelutionUserTokenService`, einschließlich der Antwort von Relution:

```bash
docker logs -f edulution-api | grep -E 'MobileDevicesService|RelutionUserTokenService'
```

Aussagekräftige Zeilen sind unter anderem:

| Logzeile | Bedeutung |
|---|---|
| `Relution admin client configured (…)` | URL und Token wurden übernommen, die Verbindung ist aufgebaut |
| `Invalid Relution URL: …` | Die hinterlegte URL ist keine gültige Adresse |
| `Relution sync done: created=… updated=… deleted=… failed=…` | Ergebnis eines Sync-Durchlaufs |
| `Relution sync: no groups configured, skipping` | Es sind keine **Gruppen für Sync** hinterlegt |
| `Relution sync: group '…' could not be resolved, skipping` | Eine Gruppe existiert nicht mehr oder ist nicht abrufbar |
| `ADOPTING existing Relution user '…'` | Ein bereits vorhandenes Relution-Konto wurde übernommen |
| `Refusing to delete service-account user '…'` | Das Löschen des eigenen Service-Kontos wurde verhindert |

## Anbindung zurücksetzen

Bleibt die Anbindung in einem unklaren Zustand:

1. Löschen Sie im Bereich [Benutzer](../benutzer.md) die betroffenen Zugänge über **Auswahl löschen**. Damit verschwinden der lokale Eintrag, der Relution-API-Token und das Relution-Konto.
2. Prüfen Sie unter **Einstellungen → MDM** URL und API-Schlüssel und speichern Sie erneut – das Speichern baut die Verbindung neu auf und startet einen Sync.
3. Kontrollieren Sie das Ergebnis über **Jetzt syncen**.

## Siehe auch

- [Voraussetzungen](./voraussetzungen.md) – was auf der Relution-Seite bereitstehen muss
- [Benutzer-Synchronisation](./benutzer-synchronisation.md) – Zeitplan und Sicherheitsnetze
- [Container-Verwaltung](../../edulution-plattform/konfiguration/container-verwaltung.md) – Logs und Neustarts der edulution-Dienste
