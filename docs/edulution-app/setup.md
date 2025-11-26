---
sidebar_position: 2
title: Einrichtung
---

# Einrichtung der edulution App
:::warning Wichtiger Hinweis für bestehende Nutzer
Wenn Sie eine App-Version **älter als 2.1.0** verwenden, empfehlen wir dringend, die App zu **deinstallieren und neu herunterzuladen**, um Fehler zu vermeiden.
:::

## App herunterladen

Wähle den QR-Code für dein Betriebssystem und scanne ihn, um die edulution App herunterzuladen

<div style={{display: 'flex', justifyContent: 'center', gap: '40px'}}>
  <div style={{textAlign: 'center'}}>
    <img src="/img/app/iosAppDownloadQrCode.png" alt="QR Code zum App Store" width="200" />
    <p>iOS</p>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src="/img/app/androidAppDownloadQrCode.png" alt="QR Code zum Play Store" width="200" />
    <p>Android</p>
  </div>
</div>


## Account hinzufügen

<img src="/img/app/setupAccount.png" alt="Account hinzufügen" width="50%" />

Wenn die App zum ersten Mal geöffnet wird, muss zunächst ein Account hinzugefügt werden, um den vollen Funktionsumfang der App nutzen zu können.

### Voraussetzungen

Stelle sicher, dass du folgende Informationen bereithältst:

- Deine Zugangsdaten (Benutzername und Passwort)
- Die Server-Adresse deiner Schule
- Optional: QR-Code für die schnelle Einrichtung

### Login-Methoden

Nach dem Klick auf "Account hinzufügen" erscheint ein Auswahlmenü mit zwei Möglichkeiten:

<img src="/img/app/selectLoginMethod.png" alt="Account hinzufügen Optionen" width="50%" />

**Option 1: Manuell eingeben**
- Schulserver-Adresse
- Benutzername
- Passwort

**Option 2: QR-Code scannen** (empfohlen)

Beim Scannen des QR-Codes werden alle benötigten Daten automatisch übernommen - nur noch das Passwort muss eingegeben werden.

So findest du den QR-Code:
1. Melde dich auf der edulution Plattform deiner Schule an
2. Navigiere zu **"Mein Profil"**
3. Wähle **"Mobiler Zugriff"**
4. Scanne den angezeigten QR-Code mit der App

---

## Account-Einstellungen öffnen

Um auf die Einstellungen eines Accounts zuzugreifen, wische die Account-Karte nach links und tippe auf das Einstellungen-Symbol.

<img src="/img/app/accountSwipe.png" alt="Account-Einstellungen öffnen" width="50%" />

Hier kannst du verschiedene Funktionen verwalten:
- **Profil aktivieren/deaktivieren** - Nutze diesen Account für alle Aktionen
- **Passwort ändern** - Aktualisiere dein Passwort
- **File System** - Verwalte Zugriff auf Dateien (siehe unten)

---

## QR-Login für Web-Interface

Schneller Login ohne Passwort-Eingabe:

1. Öffne das Web-Interface deiner Schule
2. Klicke auf **"Anmelden mit QR-Login"**
3. Scanne den angezeigten QR-Code mit der edulution App
4. Du wirst automatisch angemeldet

<img src="/img/app/qrLogin.png" alt="QR-Login im Web-Interface" width="50%" />

---

## Dateien in iOS Files-App integrieren [tags: ios]

Greife auf deine edulution-Dateien direkt über die iOS Files-App zu, indem du Freigaben (Shares) hinzufügst.

### Schritt 1: Einstellungen öffnen

1. Öffne die edulution App
2. Wische die Account-Karte nach links
3. Tippe auf das **Einstellungen-Symbol**

### Schritt 2: Share zur Files-App hinzufügen

In den Account-Einstellungen findest du den Bereich **"File System"**:

<img src="/img/app/fileSystemInactive.png" alt="File System Einstellungen" width="50%" />

1. Unter **"Choose which shares to display in the Files app"** siehst du alle verfügbaren Freigaben
2. Wähle den gewünschten Share (z.B. "netzint-teacher Home")
3. Tippe auf **"Add Share"**
4. Der Status wechselt von **"Inaktiv"** zu **"Aktiv"**

<img src="/img/app/fileSystemActive.png" alt="Aktiver Share" width="50%" />

### Schritt 3: Dateien nutzen

Öffne die iOS **Files-App** - deine edulution-Shares tauchen dort automatisch auf:
1. Du findest deine hinzugefügten Shares direkt in der Files-App
2. Tippe auf den Share-Namen
3. Du hast jetzt direkten Zugriff auf alle Dateien

### Share-Verwaltung

In den Account-Einstellungen stehen folgende Optionen zur Verfügung:

- **Synchronize** - Gleicht Dateien mit dem Server ab
- **Remove Share** - Entfernt die Freigabe aus der Files-App (Dateien auf dem Server bleiben erhalten)

---

## Datenschutzerklärung hinterlegen

:::warning Wichtig für Administratoren
Wenn Sie die edulution App für Ihre Schule oder Organisation bereitstellen, sollten Sie eine **eigene Datenschutzerklärung** in der edulution-Plattform hinterlegen.

**Warum?**
- Die Datenschutzerklärung von edulution.io bezieht sich **ausschließlich auf Push-Benachrichtigungen** über Apple Push Notification Service (APNs)
- Ihre Datenschutzerklärung sollte **alle von Ihrer Organisation genutzten Dienste und Funktionen** der Plattform abdecken
- Dies ist rechtlich wichtig für den Betrieb in Schulen und Bildungseinrichtungen

**Wie?**
Eine ausführliche Anleitung zum Erstellen und Hinterlegen von Impressum und Datenschutzerklärung finden Sie hier:

[→ Anleitung: Impressum und Datenschutzerklärung einrichten](/docs/edulution-ui/features/impressum-datenschutz)
:::