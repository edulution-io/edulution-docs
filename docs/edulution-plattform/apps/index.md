---
title: Apps
description: Die Anwendungen der edulution Plattform im Überblick
---

# Apps

Hier stehen die Anwendungen, die **zur Plattform selbst gehören**. Sie brauchen keinen eigenen
Serverdienst – höchstens eine Freigabe im **App-Store** und ein paar Einstellungen. Alles, wofür
zusätzlich etwas zu installieren ist, hat einen eigenen Bereich in der Seitenleiste; die Tabelle
weiter unten sagt, welche App zu welcher Komponente gehört.

## Native Apps

Diese Apps sind Teil der Plattform und stehen in der Seitenleiste unter **Native Apps** zusammen.

- **[Chat](./native-apps/chat.md)**, **[Kontakte](./native-apps/kontakte.md)** und
  **[Kalender](./native-apps/kalender.md)** – Nachrichten, Adressbücher, Termine.
- **[Klassenzimmer](./native-apps/klassenzimmer.md)** – Gruppen betreuen, Dateien einsammeln,
  Bildschirme beaufsichtigen.
- **[Whiteboard](./native-apps/whiteboard.md)**, **[Wiki](./native-apps/wiki.md)** und
  **[Wiki-Editor](./native-apps/wiki-editor.md)** – gemeinsam skizzieren und dokumentieren.
- **[Infoboard](./native-apps/infoboard.md)**, **[Umfragen](./native-apps/umfragen.md)**
  und **[Benachrichtigungen](./native-apps/benachrichtigungen.md)** – informieren und nachfragen.
- **[Eltern-Schüler-Zuordnung](./native-apps/eltern-schueler-zuordnung.md)** und
  **[Geräteverwaltung](./native-apps/geraeteverwaltung.md)**.
- **[App-Store](./native-apps/app-store.md)**,
  **[Eingebettete App](./native-apps/eingebettete-app.md)**,
  **[Impressum & Datenschutz](./native-apps/impressum-datenschutz.md)**,
  **[Markdown-Hilfe](./native-apps/markdown-hilfe.md)**,
  **[Sicherheit](./native-apps/sicherheit.md)** und
  **[Weitere Features](./native-apps/weitere-features.md)**.

## Apps mit eigenem Bereich

Diese Apps haben zwar eine Kachel in der Seitenleiste, brauchen aber einen Dienst dahinter. Sie
erscheinen in edulution gar nicht oder bleiben leer, solange der nicht steht – deshalb ist jede
eine eigene Komponente mit eigener Installations- und Konfigurations-Strecke.

| App in der Plattform | Dienst dahinter | Dokumentation |
| --- | --- | --- |
| **Dateien** | FileProxy für Windows-Freigaben | **[edulution FileProxy](../../edulution-fileproxy/index.md)** |
| **E-Mail** | Mailserver auf Mailcow-Basis | **[edulution Mail](../../edulution-mail/index.md)** |
| **Lernmanagement** | Moodle | **[edulution LMS](../../edulution-lms/index.md)** |
| **Schulserver**, **Benutzerverwaltung** | linuxmuster.net | **[edulution Server](../../edulution-server/index.md)** |
| **MDM** | Relution | **[edulution MDM](../../edulution-mdm/index.md)** |
| **Desktop-Bereitstellung** | VDI-Umgebung | **[edulution VDI](../../edulution-vdi/index.md)** |
| – (Appliance vor Ort) | Satellite | **[edulution Satellite](../../edulution-satellite/index.md)** |

## Weitere Apps in der Plattform

Zwei Apps brauchen zwar einen Dienst, aber keine eigene Strecke – sie werden in den Einstellungen
konfiguriert und sind hier vollständig beschrieben:

- **[Dateien](./dateien/index.md)** – Ablage, Freigaben und WebDAV. Zum Bearbeiten von Dokumenten
  kommt ein Office-Server dazu (OnlyOffice, Collabora oder EuroOffice).
- **[Konferenzen](./konferenzen.md)** – Videokonferenzen über BigBlueButton.
- **[VPN-Zugang](./vpn-zugang.md)** – WireGuard-Tunnel ins Schulnetz für einzelne Benutzer.
