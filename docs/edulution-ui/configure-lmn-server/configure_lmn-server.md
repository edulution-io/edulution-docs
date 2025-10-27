# Anpassung am Linuxmuster-Server

## Linuxmuster-API

1\. Um die edulution UI zu verwenden, ist die Installation der
Linuxmuster-API auf dem Schulserver notwendig. Hierzu wird ein Zugriff
auf die Konsole des Linuxmuster-Servers über den Hypervisor oder per SSH
benötigt. Sollten Sie keinen direkten Zugriff auf den Server haben,
fragen Sie Ihren IT-Administrator oder Dienstleister! :

    sudo apt-get update && sudo apt-get install linuxmuster-api7

## Edulution-Setup-Token

1\. Um das Edulution-Setup-Token zu generieren, melden Sie sich als
\"global-admin\" an der Linuxmuster-WebUI an und gehen Sie zu \"Globale
Einstellungen\" -\> \"edulution UI\"

2\. Es werden einige Checks durchgeführt, ob die Linuxmuster-API
installiert ist und läuft und ob ein BindUser vorhanden ist. Sollte kein
BindUser vorhanden sein, kann dieser über den Button "Erstelle
BindUser" erstellt werden.

{/* ![image](lmn_server_1.png) */}

3\. Unter "Externe Domain" sollte die Adresse stehen, unter der die
edulution UI den Linuxmuster-Server erreichen kann. Im Standard wird
hier die Adresse eingetragen unter der Sie die Linuxmuster-WebUI gerade
aufrufen. Diese kann an dieser stelle aber noch angepasst werden.

{/* ![image](lmn_server_2.png) */}

4.  Sind alle "Checks" erfolgreich durchgelaufen, kann über
    "Edulution-Setup-Token generieren" der Token erstellt werden:

{/* ![image](lmn_server_3.png) */}

5.  Das Edulution-Setup-Token kann anschließend über den Button
    "Kopieren" in die Zwischenablage des Computers kopiert werden.

{/* ![image](lmn_server_4.png) */}
