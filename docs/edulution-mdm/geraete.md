---
sidebar_position: 5
title: Geräte
description: Geräteinventar, Gerätedetails und Geräteaktionen im MDM
---

# Geräte

Der Bereich **Geräte** ist in zwei Unterreiter gegliedert: **Inventar** und **Einschreibungen**. Diese Seite beschreibt das Inventar; die Einschreibungen sind unter [Geräte einschreiben](./einschreibungen.md) beschrieben.

## Inventar

![Geräte-Inventar](/img/features/mdm-devices.png)

Das Inventar listet alle aktuell in Relution eingebuchten Geräte:

| Spalte | Beschreibung |
|--------|--------------|
| **Name** | Bezeichnung des Geräts |
| **Plattform** | Betriebssystem (iOS, Android, macOS, Windows) |
| **Modell** | Gerätemodell |
| **Nutzer** | Zugeordneter Benutzer |
| **Status** | Konformitäts- bzw. Verbindungsstatus |
| **Letzter Kontakt** | Zeitpunkt der letzten Verbindung |

Über das Filterfeld suchen Sie nach dem Gerätenamen. Ein zusätzlicher Filter blendet gezielt bestimmte Geräte ein:

| Filter | Kriterium |
|---|---|
| **Offline** | Letzter Kontakt liegt mehr als **24 Stunden** zurück oder ist unbekannt |
| **Neu eingeschrieben** | Einschreibung liegt weniger als **7 Tage** zurück |
| **Sicherheitsauffällig** | Gerät meldet einen Jailbreak oder verletzt mindestens eine Richtlinie |

:::tip
Dieselben Filter erreichen Sie mit einem Klick auf die entsprechende Kachel der [Übersicht](./index.md#kennzahlen-der-übersicht).
:::

## Gerätedetails

Ein Klick auf eine Zeile öffnet den Detaildialog des Geräts, gegliedert in sechs Abschnitte:

| Abschnitt | Inhalt |
|---|---|
| **Allgemein** | Gerätename, Benutzer, Eigentümerschaft, Einschreibedatum, Batteriestand, verfügbarer Speicherplatz, Nicht-Stören-Modus, Cloud Backup, Push, Shared Device, DEP-Profil |
| **Details zum Gerät** | Letzte Aktualisierung der Gerätedetails, letzte Verbindung, letzte Anfrage des Relution-Agents, Modell, Plattform, Modell- und Seriennummer, Betriebssystem- und Build-Version, Überwachungsstatus, Batteriezustand |
| **Netzwerk** | Letzte IP-Adresse, WLAN-MAC, Bluetooth-MAC |
| **Sicherheit** | Konformitätsstatus, Lost Mode, Jailbreak, Aktivierungssperre, Passcode-Konformität, Verschlüsselung, Zertifikate |
| **Kommunikation** | Netzwerktechnologie, Data Roaming |
| **Position** | Ob der Ortungsdienst des Geräts (z. B. „Wo ist?") aktiviert ist |

Angaben, die ein Gerät nicht liefert, bleiben leer – nicht jede Plattform meldet jedes Feld.

:::note[Batteriestand]
Der Balken färbt sich ab **30 %** warnend und ab **15 %** kritisch. Der Wert stammt aus der letzten Meldung des Geräts, nicht aus einer Live-Abfrage; wie aktuell er ist, zeigt **Letzte Aktualisierung der Gerätedetails**.
:::

## Geräteaktionen

Für einzelne Geräte (über die Zeile) oder mehrere ausgewählte Geräte (über die Auswahlkästchen) stehen vier Aktionen bereit:

| Aktion | Wirkung |
|--------|---------|
| **Sperren** | Sperrt das Gerät |
| **Neustarten** | Startet das Gerät neu |
| **Herunterfahren** | Fährt das Gerät herunter |
| **Geräteinformationen aktualisieren** | Fordert aktuelle Gerätedaten von Relution an |

Nach dem Auslösen erscheint eine Bestätigung, z. B. *„Aktion an 3 Geräte gesendet."* Schlägt die Aktion für einzelne Geräte fehl, wird die Anzahl der betroffenen Geräte gemeldet – *„Aktion fehlgeschlagen für 1 von 3 Geräten."*

:::caution[Aktionen wirken sofort]
Es gibt keine Rückfrage und kein Rückgängig. Prüfen Sie bei einer Mehrfachauswahl die Anzahl in der Auswahlleiste, bevor Sie eine Aktion auslösen.
:::

:::note[Nicht jede Plattform kann alles]
Aktionen reicht edulution unverändert an Relution weiter. Unterstützt eine Plattform eine Aktion nicht oder darf das eigene Relution-Konto sie nicht ausführen, lehnt Relution sie ab und die App meldet *„Aktion konnte nicht an Relution gesendet werden."*
:::

## Siehe auch

- [Geräte einschreiben](./einschreibungen.md) – neue Geräte einbuchen
- [Übersicht](./index.md) – Kennzahlen und Geltungsbereich
