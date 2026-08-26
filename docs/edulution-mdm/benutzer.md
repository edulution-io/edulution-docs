---
sidebar_position: 8
title: Benutzer
description: Relution-Benutzer und ihre API-Token verwalten
sidebar_custom_props:
  audience: admin
---

# Benutzer

:::caution[Nur für Administratoren]
Der Bereich **Benutzer** ist ausschließlich für Global- und Schuladministratoren zugänglich.
:::

Hier sehen Sie, welche edulution-Benutzer einen Relution-Zugang besitzen. Die Liste führt beides zusammen: die Benutzer, die Relution kennt, und die Zugänge, die edulution für sie verwaltet.

| Spalte | Beschreibung |
|--------|--------------|
| **Benutzername** | Anmeldename |
| **Name** | Vollständiger Name |
| **E-Mail** | E-Mail-Adresse |
| **In Relution** | Ob der Benutzer in Relution angelegt ist |
| **Token vorhanden** | Ob edulution für ihn einen API-Token hinterlegt hat |
| **Angelegt am** | Erstellungszeitpunkt |

Ein Benutzer bekommt seinen Token nicht beim Anlegen, sondern beim ersten eigenen Zugriff auf die App. **In Relution ✅ / Token vorhanden –** ist also der Normalzustand für jemanden, der die App noch nie geöffnet hat.

## Aktionen

| Aktion | Wirkung |
|---|---|
| **Jetzt syncen** | Stößt die [Synchronisation](./einrichtung/benutzer-synchronisation.md) der Sync-Gruppen sofort an. Das Ergebnis wird gemeldet, z. B. *„Sync OK · neu: 4 · aktualisiert: 12 · entfernt: 1"*. |
| **Auswahl löschen** | Entfernt für die ausgewählten Benutzer den API-Token, den lokalen Eintrag und das Relution-Konto. |

:::caution[Löschen wirkt auch in Relution]
**Auswahl löschen** entfernt das Konto in Relution, nicht nur die Verknüpfung in edulution. Ist der Benutzer weiterhin Mitglied einer Sync-Gruppe, legt der nächste Durchlauf ihn ohnehin neu an – als leeres Konto ohne die vorherigen Zuordnungen. Zum dauerhaften Entfernen nehmen Sie ihn zuerst aus den Sync-Gruppen.
:::

:::note[Der Service-Account bleibt verschont]
Das Relution-Konto, dessen API-Schlüssel die Anbindung trägt, wird nie gelöscht – auch dann nicht, wenn es in der Liste ausgewählt ist. Andernfalls würde die Verbindung zu Relution mit einem Klick verschwinden. Entfernt wird höchstens sein Eintrag in der edulution-Datenbank.
:::

## Siehe auch

- [Benutzer-Synchronisation](./einrichtung/benutzer-synchronisation.md) – Zeitplan, Sicherheitsnetze und Token
- [Fehlerbehebung](./einrichtung/fehlerbehebung.md) – wenn ein Zugang fehlt oder der Sync scheitert
