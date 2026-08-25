---
title: Apps
description: Die Anwendungen der edulution Plattform im Überblick
---

# Apps

Hier stehen die Anwendungen, die **zur Plattform selbst gehören**. Sie brauchen keinen eigenen
Serverdienst – höchstens eine Freigabe im **App-Store** und ein paar Einstellungen.

Apps mit einem eigenen Dienst dahinter sind bei ihrer Komponente dokumentiert. In der Seitenleiste
stehen sie hier trotzdem: Ein Klick springt in den Bereich der Komponente, statt den Baum zu
verdoppeln. Welche App wohin gehört, sagt die Tabelle weiter unten.

## Native Apps

Diese Apps sind Teil der Plattform und stehen in der Seitenleiste unter **Native Apps** zusammen.
Jede bringt eine eigene Kachel mit; freigeschaltet werden sie im
[App-Store](./app-store.md).

- **[Chat](./native-apps/chat.md)**, **[Kontakte](./native-apps/kontakte.md)** und
  **[Kalender](./native-apps/kalender.md)** – Nachrichten, Adressbücher, Termine.
- **[Klassenzimmer](./native-apps/klassenzimmer.md)** – Gruppen betreuen, Dateien einsammeln,
  Bildschirme beaufsichtigen.
- **[Whiteboard](./native-apps/whiteboard.md)**, **[Wiki](./native-apps/wiki.md)** und
  **[Wiki-Editor](./native-apps/wiki-editor.md)** – gemeinsam skizzieren und dokumentieren.
- **[Infoboard](./native-apps/infoboard.md)** und **[Umfragen](./native-apps/umfragen.md)** –
  informieren und nachfragen.
- **[Geräteverwaltung](./native-apps/geraeteverwaltung.md)** – die eigenen Geräte im Blick.
- **[Eingebettete App](./native-apps/eingebettete-app.md)** – eine fremde Weboberfläche als
  eigene Kachel einbinden.

Dazu kommt die **[Markdown-Hilfe](./native-apps/markdown-hilfe.md)** – die Syntax, die im
Wiki-Editor gilt.

## Apps mit eigenem Bereich

Diese Apps haben zwar eine Kachel in der Seitenleiste, brauchen aber einen Dienst dahinter. Sie
erscheinen in edulution gar nicht oder bleiben leer, solange der nicht steht – deshalb ist jede
eine eigene Komponente mit eigener Installations- und Konfigurations-Strecke.

| App in der Plattform | Dienst dahinter | Dokumentation |
| --- | --- | --- |
| **Schulserver**, **Benutzerverwaltung** | linuxmuster.net | **[edulution Server](../../edulution-server/index.md)** |
| **E-Mail** | Mailserver auf Mailcow-Basis | **[edulution Mail](../../edulution-mail/index.md)** |
| – (Appliance vor Ort) | Satellite | **[edulution Satellite](../../edulution-satellite/index.md)** |
| **Lernmanagement** | Moodle | **[edulution LMS](../../edulution-lms/index.md)** |
| **Desktop-Bereitstellung** | VDI-Umgebung | **[edulution VDI](../../edulution-vdi/index.md)** |
| **MDM** | Relution | **[edulution MDM](../../edulution-mdm/index.md)** |
| **Dateien** | FileProxy für Windows-Freigaben | **[Dateien](../../edulution-fileproxy/dateien/index.md)** in [edulution FileProxy](../../edulution-fileproxy/index.md) |

## Ohne eigenen Bereich

Zwei Apps setzen einen Dienst voraus, brauchen aber keine eigene Strecke – sie werden in den
Einstellungen konfiguriert und sind hier vollständig beschrieben:

- **[Konferenzen](./konferenzen.md)** – Videokonferenzen über BigBlueButton.
- **[VPN-Zugang](../uebersicht/benutzereinstellungen/vpn-zugang.md)** – WireGuard-Tunnel ins Schulnetz für einzelne Benutzer.
