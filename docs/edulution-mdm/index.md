---
title: edulution MDM
description: Mobile Device Management mit Relution – Tablets, Smartphones und Computer zentral verwalten
---

# MDM – Mobile Device Management

Die App **MDM** verwaltet die mobilen Geräte Ihrer Einrichtung – Tablets, Smartphones und Computer. Die edulution Plattform ist dabei die Oberfläche für ein angebundenes **Relution**-MDM-Backend: Sie sehen und steuern Ihre Geräteflotte, ohne die Relution-Konsole separat öffnen zu müssen.

:::info[Relution als Backend]
Alle Daten stammen aus einer angebundenen **Relution**-Instanz und werden live über deren API geladen. Die edulution Plattform hält dafür keinen eigenen Zwischenspeicher. Der Name **Relution** taucht in der Oberfläche nur in Beschreibungen, der Benutzerverwaltung und in Fehlermeldungen auf – überall sonst heißt die App schlicht **MDM**.
:::

![MDM Übersicht](/img/features/mdm-overview.png)

## Aufbau der App

Über die Seitenleiste der App wählen Sie zwischen vier Bereichen:

| Eintrag | Inhalt | Seite |
|---------|--------|-------|
| **Übersicht** | Kennzahlen zur gesamten Geräteflotte | [Kennzahlen](#kennzahlen-der-übersicht) |
| **Geräte → Inventar** | Eingebuchte Geräte, Gerätedetails und Geräteaktionen | [Geräte](./geraete.md) |
| **Geräte → Einschreibungen** | Offene Einschreibungen und neue Geräte einbuchen | [Geräte einschreiben](./einschreibungen.md) |
| **Apps** | Zur Verteilung freigegebene Apps | [Apps](./apps.md) |
| **Benutzer** | Relution-Benutzer und API-Token (nur Administration) | [Benutzer](./benutzer.md) |

## Kennzahlen der Übersicht

Die Übersicht bündelt die wichtigsten Kennzahlen Ihrer Geräteflotte in Kacheln:

- **Geräte gesamt** – Anzahl aller eingebuchten Geräte
- **Nach Plattform** – Aufteilung nach iOS, Android usw.
- **Konform** – Anzahl der Geräte, die alle Richtlinien erfüllen
- **Freigegebene Apps** – Anzahl der zur Verteilung bereitstehenden Apps
- **Offline (24h+)** – Geräte ohne Kontakt seit mehr als 24 Stunden
- **Neue Einschreibungen (7 Tage)** – in der letzten Woche hinzugekommene Geräte
- **Sicherheitsauffällig** – Geräte mit Jailbreak oder verletzten Richtlinien
- **Benutzer in Relution** – Anzahl der angelegten Relution-Benutzer

:::tip
Die Kacheln **Offline**, **Neue Einschreibungen**, **Sicherheitsauffällig** und **Benutzer in Relution** sind anklickbar und führen direkt zur passend gefilterten Geräte- bzw. Benutzerliste.
:::

## Zugriff und Berechtigungen

Nach der Einrichtung erreichen Sie die App über die **MDM**-Kachel in der Seitenleiste. Der Funktionsumfang hängt von der Rolle ab:

| Bereich | Global-/Schuladmin | Reguläre Benutzer |
|---------|:---:|:---:|
| Übersicht, Geräte, Apps | ✅ | ✅ (eigener Geltungsbereich) |
| Geräteaktionen (Sperren, Neustart …) | ✅ | ✅ (eigene Geräte) |
| Einschreibungen anlegen und löschen | ✅ | – |
| Benutzer- und Token-Verwaltung, Sync | ✅ | – |

:::note[Geltungsbereich]
Administratoren greifen über den gemeinsamen Service-Zugang auf Relution zu und sehen daher **alle** Geräte, Apps und Benutzer der Organisation. Reguläre Benutzer verwenden ihren eigenen, automatisch angelegten Relution-Zugang und sehen nur die Geräte und Apps, für die ihr Relution-Konto berechtigt ist. Ist für einen Benutzer noch kein Relution-Zugang vorhanden, erscheint der Hinweis *„Für diesen Benutzer ist kein Relution-Zugang angelegt."*
:::

<Audience roles="user">

Die Anbindung an Relution richtet die Administration Ihrer Einrichtung einmalig ein. Erscheint **MDM** bei Ihnen nicht in der Seitenleiste, ist die App für Ihre Instanz noch nicht eingerichtet oder nicht für Sie freigegeben – wenden Sie sich an Ihre Administration.

</Audience>

<Audience roles="admin">

## Einrichtung

Die App erscheint erst, wenn ein **Global-Administrator** sie im App-Store hinzugefügt und mit einer Relution-Instanz verbunden hat. Der Bereich [Einrichtung](./einrichtung/index.md) führt durch die vier Schritte:

1. [Voraussetzungen](./einrichtung/voraussetzungen.md) – Relution-Instanz, Service-Account und API-Token
2. [App konfigurieren](./einrichtung/app-konfiguration.md) – URL, API-Schlüssel, Nutzergruppen und Sync-Gruppen
3. [Benutzer-Synchronisation](./einrichtung/benutzer-synchronisation.md) – wer einen Relution-Zugang bekommt und wann
4. [Fehlerbehebung](./einrichtung/fehlerbehebung.md) – wenn die App leer bleibt oder Aktionen fehlschlagen

</Audience>

## Siehe auch

- [Geräte](./geraete.md) – Inventar, Gerätedetails und Geräteaktionen
- [Geräte einschreiben](./einschreibungen.md) – BYOD-Einschreibung per Passcode und QR-Code
- [App-Store & Anwendungen](../edulution-plattform/apps/app-store.md) – Apps hinzufügen und verwalten
- [Relution](https://www.relution.io/) – Herstellerseite des MDM-Backends
