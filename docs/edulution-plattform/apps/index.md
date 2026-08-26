---
title: Apps
description: Die Anwendungen der edulution Plattform im Überblick
---

# Apps

Ganz oben stehen die beiden Seiten, mit denen Apps überhaupt entstehen: Der
**[App-Store](./app-store.md)** entscheidet, welche Apps in der Seitenleiste erscheinen, und die
**[Eingebettete App](./eingebettete-app.md)** ist keine einzelne Anwendung, sondern die Hülle für
eigene Inhalte – eine hochgeladene Webseite oder eine fremde Oberfläche als eigene Kachel.

Darunter liegen die Anwendungen in zwei Ordnern: **Native Apps** sind hier vollständig
beschrieben, **Angebundene Apps** verweisen auf die Komponente, die den Dienst dahinter
dokumentiert.

## Native Apps

Diese Apps gehören zur Plattform selbst – zu installieren ist nichts, höchstens im
App-Store freizuschalten. Jede bringt eine eigene Kachel mit.

- **[Chat](./native-apps/chat.md)**, **[Kontakte](./native-apps/kontakte.md)** und
  **[Kalender](./native-apps/kalender.md)** – Nachrichten, Adressbücher, Termine.
- **[Konferenzen](./native-apps/konferenzen.md)** – Videokonferenzen über BigBlueButton. Der
  Server dahinter wird in den Einstellungen hinterlegt; eine eigene Komponente braucht die App
  nicht.
- **[Klassenzimmer](./native-apps/klassenzimmer.md)** – Gruppen betreuen, Dateien einsammeln,
  Bildschirme beaufsichtigen.
- **[Whiteboard](./native-apps/whiteboard.md)**, **[Wiki](./native-apps/wiki.md)** und
  **[Wiki-Editor](./native-apps/wiki-editor.md)** – gemeinsam skizzieren und dokumentieren.
- **[Infoboard](./native-apps/infoboard.md)** und **[Umfragen](./native-apps/umfragen.md)** –
  informieren und nachfragen.
- **[Geräteverwaltung](./native-apps/geraeteverwaltung.md)** – die eigenen Geräte im Blick.

Dazu kommt die **[Markdown-Hilfe](./native-apps/markdown-hilfe.md)** – die Syntax, die im
Wiki-Editor gilt.

## Angebundene Apps

Diese Apps haben zwar eine Kachel in der Seitenleiste, brauchen aber einen Dienst dahinter. Sie
erscheinen in edulution gar nicht oder bleiben leer, solange der nicht steht – deshalb ist jede
eine eigene Komponente mit eigener Installations- und Konfigurations-Strecke. Der Eintrag im
Ordner **Angebundene Apps** springt direkt dorthin, statt den Baum zu verdoppeln.

| App in der Plattform | Dienst dahinter | Dokumentation |
| --- | --- | --- |
| **Schulserver**, **Benutzerverwaltung** | linuxmuster.net | **[edulution Server](../../edulution-server/index.md)** |
| **E-Mail** | Mailserver auf Mailcow-Basis | **[edulution Mail](../../edulution-mail/index.md)** |
| – (Appliance vor Ort) | Satellite | **[edulution Satellite](../../edulution-satellite/index.md)** |
| **Lernmanagement** | Moodle | **[edulution LMS](../../edulution-lms/index.md)** |
| **Desktop-Bereitstellung** | VDI-Umgebung | **[edulution VDI](../../edulution-vdi/index.md)** |
| **MDM** | Relution | **[edulution MDM](../../edulution-mdm/index.md)** |
| **Dateien** | FileProxy für Windows-Freigaben | **[Dateien](../../edulution-fileproxy/dateien/index.md)** in [edulution FileProxy](../../edulution-fileproxy/index.md) |

## Nicht in dieser Liste

Der **[VPN-Zugang](../uebersicht/benutzereinstellungen/vpn-zugang.md)** – der WireGuard-Tunnel ins
Schulnetz – ist keine App mit eigener Kachel: Er steht dort, wo man ihn abruft, in den
Benutzereinstellungen.
