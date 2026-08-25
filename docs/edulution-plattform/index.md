---
title: edulution Plattform
description: Übersicht über die edulution Plattform – Installation, Konfiguration, erste Schritte und die Apps
---

# edulution Plattform

Die **edulution Plattform** ist das Herzstück der Lösung. Statt einer reinen Oberfläche bündelt sie
alle Dienste – Dashboard, Klassenzimmer, Dateiablage, Konferenzen, Whiteboard, Mail und
Kommunikation – in einer nahtlos integrierten Umgebung für Schüler, Lehrkräfte und Administratoren.
Die Integration mit [linuxmuster.net](../edulution-server/index.md) erfolgt automatisch.

Diese Dokumentation ist überall gleich aufgebaut: erst **Installation**, dann **Konfiguration**,
dann die **Übersicht** und die **Nutzung**. Dasselbe gilt innerhalb jeder App. Was Sie davon sehen,
hängt von der Rolle ab, die Sie auf der [Startseite](..) gewählt haben.

<Audience roles="user">

## Wo Sie anfangen

- **[Erste Schritte](./uebersicht/navigation.md)** – wie die Oberfläche aufgebaut ist, wie Sie
  sich anmelden und was im Dashboard steht.
- **[Apps](./apps/index.md)** – die Anwendungen, die direkt zur Plattform gehören.

</Audience>

<Audience roles="admin">

## Wo Sie anfangen

- **[Installation](./installation/voraussetzungen.md)** – Voraussetzungen, Einrichtung, SSL und
  Reverse Proxy.
- **[Konfiguration](./konfiguration/administration.md)** – Einstellungen, Container, Updates und
  Upgrades der laufenden Instanz.
- **[Apps](./apps/index.md)** – die Anwendungen, die ohne eigenen Serverdienst auskommen.

</Audience>

## Die übrigen Komponenten

Was hier steht, betrifft die Plattform selbst. Alles, was einen eigenen Serverdienst mitbringt –
der Mailserver, Moodle, der FileProxy, der Schulserver, die Satellite-Appliance – hat einen eigenen
Bereich. Die Plattform bindet diese Dienste nur ein: Die App **Dateien** zeigt beispielsweise
Freigaben, die der [FileProxy](../edulution-fileproxy/index.md) bereitstellt, und die App
**E-Mail** greift auf die Postfächer von [edulution Mail](../edulution-mail/index.md) zu.

<AppCards />
