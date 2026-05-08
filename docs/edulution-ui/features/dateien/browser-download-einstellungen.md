---
sidebar_position: 1
---

# Browser Download-Einstellungen

Damit Dateien aus edulution korrekt heruntergeladen werden, muss in Ihrem Browser die Download-Berechtigung für die edulution-Seite erlaubt sein. Diese Anleitung zeigt Ihnen, wie Sie die Einstellungen in den gängigsten Browsern anpassen.

:::tip Wann ist das nötig?
Wenn der Browser Downloads von edulution blockiert oder Sie bei jedem Download um Erlaubnis gefragt werden, müssen die Download-Berechtigungen angepasst werden.
:::

## Microsoft Edge

### Schritt 1: Website-Berechtigungen öffnen

1. Öffnen Sie edulution in Edge
2. Klicken Sie auf das **Schloss-Symbol** (oder das Einstellungs-Symbol) links in der Adressleiste
3. Klicken Sie auf **Berechtigungen für diese Website**

{/* ![Edge Schloss-Symbol](/img/dateien/browser-downloads/edge-schritt1.png) */}

### Schritt 2: Download-Berechtigung erlauben

1. Suchen Sie den Eintrag **Automatische Downloads**
2. Ändern Sie die Einstellung auf **Zulassen**

{/* ![Edge Download-Berechtigung](/img/dateien/browser-downloads/edge-schritt2.png) */}

### Alternative: Über die Einstellungen

1. Gehen Sie zu `edge://settings/content/automaticDownloads`
2. Klicken Sie unter **Zulassen** auf **Hinzufügen**
3. Geben Sie die URL Ihrer edulution-Instanz ein (z.B. `https://ui.schule.de`)
4. Klicken Sie auf **Hinzufügen**

{/* ![Edge Einstellungen](/img/dateien/browser-downloads/edge-einstellungen.png) */}

---

## Google Chrome

### Schritt 1: Website-Berechtigungen öffnen

1. Öffnen Sie edulution in Chrome
2. Klicken Sie auf das **Schloss-Symbol** links in der Adressleiste
3. Klicken Sie auf **Website-Einstellungen**

{/* ![Chrome Schloss-Symbol](/img/dateien/browser-downloads/chrome-schritt1.png) */}

### Schritt 2: Download-Berechtigung erlauben

1. Scrollen Sie zum Eintrag **Automatische Downloads**
2. Ändern Sie die Einstellung auf **Zulassen**

{/* ![Chrome Download-Berechtigung](/img/dateien/browser-downloads/chrome-schritt2.png) */}

### Alternative: Über die Einstellungen

1. Gehen Sie zu `chrome://settings/content/automaticDownloads`
2. Klicken Sie unter **Dürfen automatisch mehrere Dateien herunterladen** auf **Hinzufügen**
3. Geben Sie die URL Ihrer edulution-Instanz ein (z.B. `https://ui.schule.de`)
4. Klicken Sie auf **Hinzufügen**

{/* ![Chrome Einstellungen](/img/dateien/browser-downloads/chrome-einstellungen.png) */}

---

## Mozilla Firefox

### Schritt 1: Download-Verhalten anpassen

In Firefox gibt es keine separate Berechtigung für automatische Downloads. Stattdessen können Sie das Download-Verhalten konfigurieren:

1. Klicken Sie auf das **Hamburger-Menü** (drei Striche, oben rechts)
2. Wählen Sie **Einstellungen**
3. Scrollen Sie zum Abschnitt **Dateien und Anwendungen**

{/* ![Firefox Einstellungen öffnen](/img/dateien/browser-downloads/firefox-schritt1.png) */}

### Schritt 2: Download-Ordner festlegen

1. Unter **Downloads** wählen Sie eine der Optionen:
   - **Dateien speichern unter**: Speichert automatisch im angegebenen Ordner
   - **Jedes Mal nachfragen, wo eine Datei gespeichert werden soll**: Zeigt bei jedem Download einen Dialog an

2. Empfehlung: Wählen Sie **Dateien speichern unter** und legen Sie einen Ordner fest, damit Downloads nicht blockiert werden

{/* ![Firefox Download-Einstellungen](/img/dateien/browser-downloads/firefox-schritt2.png) */}

### Schritt 3: Pop-up-Blocker anpassen

Wenn Downloads blockiert werden, kann es am Pop-up-Blocker liegen:

1. Gehen Sie zu **Einstellungen** > **Datenschutz & Sicherheit**
2. Scrollen Sie zu **Berechtigungen** > **Pop-up-Fenster blockieren**
3. Klicken Sie auf **Ausnahmen...**
4. Geben Sie die URL Ihrer edulution-Instanz ein (z.B. `https://ui.schule.de`)
5. Klicken Sie auf **Erlauben** und dann auf **Änderungen speichern**

{/* ![Firefox Pop-up Ausnahmen](/img/dateien/browser-downloads/firefox-schritt3.png) */}

---

## Apple Safari

### Schritt 1: Einstellungen öffnen

1. Öffnen Sie edulution in Safari
2. Klicken Sie in der Menüleiste auf **Safari** > **Einstellungen** (oder drücken Sie `⌘ + ,`)
3. Wechseln Sie zum Tab **Websites**

{/* ![Safari Einstellungen](/img/dateien/browser-downloads/safari-schritt1.png) */}

### Schritt 2: Download-Berechtigung erlauben

1. Wählen Sie in der linken Spalte **Downloads**
2. Suchen Sie Ihre edulution-Instanz in der Liste (z.B. `ui.schule.de`)
3. Ändern Sie die Einstellung auf **Erlauben**

Falls die Seite noch nicht in der Liste erscheint, öffnen Sie zuerst edulution in einem Tab, dann wird die Seite in der Liste angezeigt.

{/* ![Safari Download-Berechtigung](/img/dateien/browser-downloads/safari-schritt2.png) */}

### Alternative: Beim ersten Download

Wenn Safari einen Download blockiert, erscheint ein Hinweis in der Adressleiste:

1. Klicken Sie auf den Hinweis **Download erlauben**
2. Wählen Sie **Erlauben**, um den Download zuzulassen
3. Optional: Wählen Sie **Immer erlauben für diese Website**, damit zukünftige Downloads nicht mehr blockiert werden

{/* ![Safari Download-Hinweis](/img/dateien/browser-downloads/safari-schritt3.png) */}

---

## Zusammenfassung

| Browser | Einstellung | Pfad |
|---------|------------|------|
| **Edge** | Automatische Downloads | Schloss-Symbol > Berechtigungen > Automatische Downloads > Zulassen |
| **Chrome** | Automatische Downloads | Schloss-Symbol > Website-Einstellungen > Automatische Downloads > Zulassen |
| **Firefox** | Download-Ordner & Pop-ups | Einstellungen > Dateien und Anwendungen & Datenschutz > Pop-up-Ausnahmen |
| **Safari** | Downloads | Safari > Einstellungen > Websites > Downloads > Erlauben |

:::info Tipp
Wenn nach dem Anpassen der Einstellungen weiterhin Probleme auftreten, laden Sie die edulution-Seite einmal neu (F5 bzw. `⌘ + R`).
:::
