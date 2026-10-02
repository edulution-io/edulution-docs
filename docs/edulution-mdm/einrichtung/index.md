---
sidebar_position: 0
title: Einrichtung
description: MDM mit einer Relution-Instanz verbinden – Reihenfolge und Überblick
sidebar_custom_props:
  audience: admin
---

# Einrichtung

Die App **MDM** bringt kein eigenes Backend mit: Sie ist die Oberfläche zu einer **Relution**-Instanz, die Sie betreiben oder als Cloud-Dienst beziehen. Eingerichtet wird deshalb nicht Relution selbst, sondern die Verbindung dorthin.

Die Einrichtung führt ein **Global-Administrator** einmalig durch und besteht aus vier Schritten:

<Cards>
  <Card
    to="/docs/edulution-mdm/einrichtung/voraussetzungen"
    title="1 · Voraussetzungen"
    text="Relution-Instanz, Service-Account und API-Token"
  />
  <Card
    to="/docs/edulution-mdm/einrichtung/app-konfiguration"
    title="2 · App konfigurieren"
    text="URL, API-Schlüssel, Nutzergruppen und Sync-Gruppen"
  />
  <Card
    to="/docs/edulution-mdm/einrichtung/benutzer-synchronisation"
    title="3 · Benutzer-Synchronisation"
    text="Wer einen Relution-Zugang bekommt – und wann"
  />
  <Card
    to="/docs/edulution-mdm/einrichtung/fehlerbehebung"
    title="4 · Fehlerbehebung"
    text="Leere Listen, fehlende Zugänge, abgelehnte Aktionen"
  />
</Cards>

## Wie die Anbindung arbeitet

```mermaid
flowchart LR
    subgraph edu["edulution Plattform"]
        UI[MDM-App]
        API[edulution API]
        DB[(Token-Speicher)]
    end
    subgraph rel["Relution"]
        SVC[Service-Account]
        USR[Relution-Benutzer]
        DEV[Geräte & Apps]
    end
    KC[Keycloak-Gruppen] --> API
    UI --> API
    API -- "API-Schlüssel" --> SVC
    API -- "Benutzer-Token" --> USR
    API --> DB
    SVC --> DEV
    USR --> DEV
```

Zwei Zugangswege laufen parallel:

- **Administratoren** greifen über den **Service-Account** zu, dessen API-Schlüssel in der App-Konfiguration hinterlegt ist. Sie sehen alles, was dieses Konto in Relution sehen darf.
- **Reguläre Benutzer** greifen über einen **eigenen Relution-Zugang** zu, den die Synchronisation für sie anlegt. Deren API-Token erzeugt die edulution API selbst und legt sie verschlüsselt in der Datenbank ab.

:::info[Reihenfolge]
Erst URL und API-Schlüssel, dann die Gruppen. Ohne gültige Verbindung zu Relution kann die Synchronisation keine Benutzer anlegen – sie wird beim Speichern der Konfiguration aber automatisch angestoßen, sobald die Verbindung steht.
:::

## Siehe auch

- [Übersicht](../index.md) – was die App leistet und wer was sieht
- [Einstellungen](../../edulution-plattform/konfiguration/einstellungen.md) – App-Konfiguration durch den Global-Admin
- [Master-Key](../../edulution-plattform/konfiguration/master-key.md) – Verschlüsselung der gespeicherten Token
