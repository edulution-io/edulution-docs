1. Installation
===============

1.1 Voraussetzungen
*******************

* Eine Ubuntu 22.04 oder 24.04 Server-Installation (empfohlen wird die Installation in einer VM)
* Mindestens 2GB Arbeitsspeicher und 10GB freien Festplattenspeicher
* Bei einer Proxmox-VM auf den Prozessor-Typ "host" achten!
* Ein Linuxmuster-Server, der über folgende Ports erreichbar sein muss:
    * Port 443 (HTTPs) -> auch über ReverseProxy möglich
    * Port 8001 (Linuxmuster-API)
    * Port 389 (LDAP) oder 636 (LDAPs) -> LDAPs ist nur mit einem gültigen Zertifikat möglich!
* Eine Domain, unter der die edulutionUI erreichbar sein soll (bspw. ui.musterschule.de)
* Eine Verbindung zum Internet während der Installation
* Installation der Linuxmuster-API auf dem Linuxmuster-Server (siehe: :doc:`../configure_lmn-server/configure_lmn-server`)
* opt. Das Edulution-Setup-Token aus der Linuxmuster-WebUI (siehe: :doc:`../configure_lmn-server/configure_lmn-server`)

1.2 Installation
****************

1. Um das Installationsprogramm herunterzuladen wir das Programm ``curl`` benötigt. Dieses kann über folgenden Befehl installiert werden::

    apt-get update && apt-get -y install curl

2. Nun kann das Installationsprogramm gestartet werden. Der Link hierzu kann unter https://get.edulution.io abgerufen werden. ::

    bash <(curl -s https://get.edulution.io/installer)

3. Das Installationsprogramm startet und installiert alle benötigten Pakete. Sobald folgende Meldung erscheint, geht es weiter::

    [*] Starte den edulutionUI Web-Installer...

    ########################################################

        edulutionUI Web-Installer
        
        Sie erreichen die Oberfläche wie folgt:
        
        https://ui01:443
        https://10.0.0.5:443

    ########################################################

4. Der Web-Installer kann mit einem Browser über die IP-Adresse oder über die vorbereitete Domain aufgerufen werden.

.. image:: installation_1.png

5. Im ersten Schritt, kann das Edulution-Setup-Token oder über "Manuell eingeben" die Daten manuell eingegeben werden.

.. image:: installation_2.png

6. Ist der Edulution-Setup-Token gültig, wird der Button "Überprüfen" aktiviert und die Daten können auf der nächsten Seite überprüft werden.

.. image:: installation_3.png  

7. Hier sollten die Daten auf Richtigkeit und geprüft bzw. manuell eingegeben werden. 
    * Um LDAPs (Port 636) zu verwenden, wird ein gültiges LDAP-Zertifikat benötigt!
    * Unter "Externe Domain der edulutionUI" **muss** die Domain stehen, unter der die edulutionUI erreichbar ist. **Der Zugriff von einer anderen Domain aus ist nicht möglich!**

.. image:: installation_4.png

8. Anschließend wird der Zugriff auf die Linuxmuster-WebUI (Port 443), die Linuxmuster-API (Port 8001) und der Zugriff, sowie die Anmeldung am LDAP-Server getestet. Sind alle Tests bestanden, kann die Installation abgeschlossen werden.

.. image:: installation_5.png

9. Erscheint in der Konsole folgender Text, ist die Installation abgeschlossen und die edulutionUI kann verwendet werden! ::

    ########################################################

     ____ _ _   _      _                                   _     _ 
    / ___| (_) (_) ___| | ____      ___   _ _ __  ___  ___| |__ | |
    | |  _| | | | |/ __| |/ /\ \ /\ / / | | | '_ \/ __|/ __| '_ \| |
    | |_| | | |_| | (__|   <  \ V  V /| |_| | | | \__ \ (__| | | |_|
    \____|_|\__,_|\___|_|\_\  \_/\_/  \__,_|_| |_|___/\___|_| |_(_)
                                                                    
        Die Installation der edulutionUI ist abgeschlossen!

        Sie erreichen die Oberfläche wie folgt:
        
        https://ui01:443
        https://10.0.0.5:443                                                                 

    ########################################################

.. image:: installation_6.png   
