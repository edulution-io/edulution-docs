Experten-Tipps
==============

.. tip:: **Keycloak-Administrationsoberfläche aufrufen**

   Für erweiterte Benutzer- und Authentifizierungs-Einstellungen können Sie direkt auf die Keycloak-Administrationsoberfläche zugreifen.

   1.  **Adresse:** Rufen Sie die URL Ihrer edulutionUI gefolgt von ``/auth`` auf. 
       *Beispiel:* ``https://ui.musterschule.de/auth``

   2.  **Anmeldung:**
       *   **Benutzername:** ``admin``
       *   **Passwort:** Das Passwort finden Sie in der Konfigurationsdatei auf Ihrem Server.

   3.  **Passwort finden:**
       Verbinden Sie sich per SSH mit Ihrem Server und lassen Sie sich den Inhalt der Datei anzeigen:

       .. code-block:: bash

          cat /srv/docker/edulution-ui/edulution.env | grep KEYCLOAK_ADMIN_PASSWORD

       Der Befehl zeigt Ihnen die Zeile mit dem benötigten Passwort an.