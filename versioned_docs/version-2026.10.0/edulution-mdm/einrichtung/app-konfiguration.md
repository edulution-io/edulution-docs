---
sidebar_position: 2
title: App konfigurieren
description: URL, API-Schlüssel, Nutzergruppen und Sync-Gruppen der MDM-App hinterlegen
sidebar_custom_props:
  audience: admin
---

# App konfigurieren

Die Konfiguration erfolgt als **Global-Administrator** unter **Einstellungen → MDM**. Erscheint der Eintrag dort nicht, fügen Sie die App zuerst im [App-Store](../../edulution-plattform/apps/app-store.md) hinzu.

## Schritt 1: App hinzufügen

1. Melden Sie sich als Global-Administrator an.
2. Öffnen Sie **Einstellungen → App-Store**.
3. Wählen Sie die Kachel **MDM** und fügen Sie die App über das **+** hinzu.

Die App erscheint danach als eigener Eintrag unter **Einstellungen**.

## Schritt 2: Verbindung zu Relution herstellen

| Feld | Beschreibung |
|------|--------------|
| **URL** | Adresse Ihrer Relution-Instanz, z. B. `https://<host>/`. Verwendet wird davon nur der Ursprung (Schema, Host und Port) – ein Pfad in der URL wird ignoriert. |
| **API-Schlüssel** | Der API-Token des [Service-Accounts](./voraussetzungen.md#3-api-token-des-service-accounts) |
| **Proxy-Konfiguration** | Optional. Nur nötig, wenn Relution über den Traefik der edulution-Instanz erreichbar gemacht werden soll. |

Sobald **URL** und **API-Schlüssel** gespeichert sind, baut die edulution API die Verbindung zu Relution auf und stößt einmalig eine [Benutzer-Synchronisation](./benutzer-synchronisation.md) an.

:::note[Ungültige Werte bleiben ohne Fehlermeldung]
Ist die URL syntaktisch unbrauchbar oder der Token falsch, wird die Verbindung schlicht nicht aufgebaut – die App öffnet sich, meldet aber *„Relution-API ist nicht konfiguriert."* oder liefert leere Listen. Was tatsächlich schiefging, steht im Log der edulution API, siehe [Fehlerbehebung](./fehlerbehebung.md).
:::

## Schritt 3: Sichtbarkeit festlegen

Unter **Einstellungen → MDM** legen Sie – wie bei jeder App – fest, wo die App erscheint (Seitenleiste, Menüleiste, App-Launcher) und wer sie sehen darf:

| Abschnitt | Wirkung |
|---|---|
| **Nutzergruppen** | Nur Mitglieder dieser Gruppen bekommen die App überhaupt zu sehen. Bleibt die Liste leer, ist die App für reguläre Benutzer unsichtbar. |
| **Sortierung**, **An App-Leiste anpinnen**, **Anzeigeorte** | Position und Erscheinungsbild, siehe [Einstellungen](../../edulution-plattform/konfiguration/einstellungen.md) |

## Schritt 4: Gruppen für die Synchronisation wählen

Im Abschnitt **Gruppen für Sync** wählen Sie die Benutzergruppen, deren Mitglieder automatisch als Benutzer in Relution angelegt und gepflegt werden.

:::tip[Nutzergruppen und Sync-Gruppen zusammen denken]
Beide Listen wirken unabhängig voneinander: Die **Nutzergruppen** entscheiden, wer die App in edulution öffnen darf, die **Gruppen für Sync** entscheiden, wer einen eigenen Relution-Zugang erhält. Damit reguläre Benutzer tatsächlich Geräte sehen, müssen sie in **beiden** Listen enthalten sein – sonst öffnen sie die App zwar, erhalten aber nur den Hinweis auf den fehlenden Relution-Zugang.
:::

## Prüfen, ob die Anbindung steht

1. Öffnen Sie die App **MDM** über die Seitenleiste.
2. Die **Übersicht** sollte Kennzahlen anzeigen statt Nullen.
3. Unter **Benutzer** stehen nach dem ersten Sync die Mitglieder der Sync-Gruppen.
4. Ein Klick auf **Jetzt syncen** meldet das Ergebnis, z. B. *„Sync OK · neu: 4 · aktualisiert: 12 · entfernt: 1"*.

## Nächster Schritt

[Benutzer-Synchronisation →](./benutzer-synchronisation.md)
