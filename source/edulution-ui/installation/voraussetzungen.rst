Voraussetzungen
===============

Herzlich willkommen! Bevor Sie mit der Installation der edulution UI beginnen, stellen Sie bitte sicher, dass Ihr System die folgenden Voraussetzungen erfüllt. Eine sorgfältige Vorbereitung gewährleistet einen reibungslosen Installationsprozess.

System-Anforderungen
--------------------

.. |min-ram| replace:: 4 GB
.. |min-disk| replace:: 10 GB

.. list-table::
   :widths: 30 70
   :header-rows: 1

   * - Komponente
     - Anforderung
   * - Betriebssystem
     - Ubuntu 22.04 oder 24.04 Server (VM empfohlen)
   * - Arbeitsspeicher
     - Mindestens |min-ram| RAM
   * - Festplattenspeicher
     - Mindestens |min-disk| frei
   * - Virtualisierung
     - Bei Proxmox: Prozessor-Typ "host" verwenden
   * - Internet
     - Erforderlich während der Installation
   * - Domain
     - Öffentliche Domain (z.B. ui.musterschule.de)

Empfohlenes Speicherlayout
--------------------------

.. list-table::
   :widths: 40 60
   :header-rows: 1

   * - Partition
     - Größe
   * - ``/`` (Root)
     - 50 GB
   * - ``/srv/docker/edulution-ui``
     - 50 GB
   * - ``/srv/docker/edulution-mail``
     - 250 GB (je nach Bedarf)

Benötigte Ports
---------------

Die edulutionUI und die zugehörigen Dienste benötigen die Freigabe bestimmter Ports. Beachten Sie, dass einige Ports nur intern zugänglich sein sollten.

.. note::
   Die Ports für E-Mail-Dienste (SMTP, IMAP, IMAPS) und die Mailcow Administrationsoberfläche (8443) werden nur benötigt, wenn die E-Mail-Funktionalität der edulutionUI genutzt wird.

.. list-table::
   :widths: 15 85
   :header-rows: 1

   * - Port
     - Beschreibung
   * - 80
     - HTTP (für automatische Weiterleitung zu HTTPS, Let's Encrypt Validierung)
   * - 443
     - HTTPS (edulutionUI Web-Interface, extern zugänglich)
   * - 389
     - LDAP (unverschlüsselte LDAP-Verbindung, primär intern)
   * - 636
     - LDAPS (verschlüsselte LDAP-Verbindung, extern zugänglich, gültiges Zertifikat nötig)
   * - 8443
     - Mailcow Administrationsoberfläche (intern empfohlen)
   * - 25
     - SMTP (Standard-Port für E-Mail-Versand)
   * - 465
     - SMTPS (SMTP über SSL/TLS, veraltet, aber noch genutzt)
   * - 587
     - Submission (SMTP mit STARTTLS, empfohlen für E-Mail-Clients)
   * - 143
     - IMAP (unverschlüsselt, primär intern)
   * - 993
     - IMAPS (IMAP über SSL/TLS, verschlüsselt, extern zugänglich)

Linuxmuster-Server Voraussetzungen
----------------------------------

.. list-table::
   :widths: 30 70
   :header-rows: 1

   * - Port
     - Verwendung
   * - 443 (HTTPS)
     - Linuxmuster-WebUI (auch über Reverse-Proxy möglich)
   * - 8001 (TCP)
     - Linuxmuster-API
   * - 389 (LDAP)
     - Unverschlüsselte LDAP-Verbindung
   * - 636 (LDAPS)
     - Verschlüsselte LDAP-Verbindung (gültiges Zertifikat nötig!)

Vorbereitung
------------

.. note::

   **Erforderlicher Vorbereitungsschritt:**

   Bevor Sie fortfahren, muss die **Linuxmuster-API** auf dem Linuxmuster-Server installiert sein. Eine Anleitung dazu finden Sie hier: :doc:`../../edulution-ui/configure_lmn-server/configure_lmn-server`

   **Optional:** Für eine schnellere Einrichtung können Sie vorab ein **Edulution-Setup-Token** in der Linuxmuster-WebUI generieren.