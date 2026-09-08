---
sidebar_custom_props:
  audience: admin-setup
---

# Anpassung am Linuxmuster-Server

Damit die edulution Plattform mit dem Schulserver arbeiten kann, sind zwei Schritte
auf dem Linuxmuster-Server nötig: die **Linuxmuster-API** installieren und ein
**Edulution-Setup-Token** erzeugen.

## Linuxmuster-API

Um die edulution Plattform zu verwenden, ist die Installation der Linuxmuster-API auf
dem Schulserver notwendig. Hierzu wird ein Zugriff auf die Konsole des
Linuxmuster-Servers über den Hypervisor oder per SSH benötigt.

```bash
sudo apt-get update && sudo apt-get install linuxmuster-api7
```

:::note[Kein Zugriff auf den Server?]
Sollten Sie keinen direkten Zugriff auf den Linuxmuster-Server haben, fragen Sie Ihren
IT-Administrator oder Dienstleister.
:::

## Edulution-Setup-Token

1. Melden Sie sich als **global-admin** an der Linuxmuster-WebUI an und gehen Sie zu
   **Globale Einstellungen** → **edulution Plattform**.

2. Es werden einige Checks durchgeführt, ob die Linuxmuster-API installiert ist und
   läuft und ob ein BindUser vorhanden ist. Sollte kein BindUser vorhanden sein, kann
   dieser über den Button **Erstelle BindUser** erstellt werden.

   {/* ![image](lmn_server_1.png) */}

3. Unter **Externe Domain** sollte die Adresse stehen, unter der die edulution
   Plattform den Linuxmuster-Server erreichen kann. Im Standard wird hier die Adresse
   eingetragen, unter der Sie die Linuxmuster-WebUI gerade aufrufen. Diese kann an
   dieser Stelle aber noch angepasst werden.

   {/* ![image](lmn_server_2.png) */}

4. Sind alle Checks erfolgreich durchgelaufen, kann über **Edulution-Setup-Token
   generieren** der Token erstellt werden.

   {/* ![image](lmn_server_3.png) */}

5. Das Edulution-Setup-Token kann anschließend über den Button **Kopieren** in die
   Zwischenablage des Computers kopiert werden.

   {/* ![image](lmn_server_4.png) */}

## Siehe auch

- [Einrichtung → Setup-Token](../edulution-plattform/installation/einrichtung.md#4-setup-token) – wo das kopierte Token eingegeben wird
- [Linuxmuster & LINBO](./linuxmuster.md) – die App nach der Anbindung
