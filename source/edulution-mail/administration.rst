Administration
==============

.. toctree::
   :maxdepth: 2

   admin_mail_migration
   user_mail_migration
   verteilerlisten
   benutzer_mailformate

Mailcow Administrationsoberfläche
*********************************

Die Mailcow Administrationsoberfläche ist ein leistungsstarkes Tool zur Verwaltung Ihrer E-Mail-Dienste. Sie ist standardmäßig über Port ``8443`` erreichbar.

**Zugriff auf die Oberfläche:**

Sie erreichen die Mailcow UI über die IP-Adresse oder den Hostnamen Ihres Servers, gefolgt vom Port ``:8443``.

.. warning::
   Es wird dringend empfohlen, den Zugriff auf die Mailcow Administrationsoberfläche auf interne Netzwerke zu beschränken, da sie sensible Verwaltungsfunktionen bietet. Sollte der Port öffentlich zugänglich sein, ist es unerlässlich, das Standardpasswort sofort zu ändern.

**Standard-Zugangsdaten (nach der Installation):**

*   **Benutzername:** ``admin``
*   **Passwort:** ``moohoo``

.. image:: /_static/mailcow-admin-login.png
   :alt: Mailcow Admin Login

**Funktionen der Mailcow Administrationsoberfläche:**

Über die Mailcow UI können Sie eine Vielzahl von Aufgaben durchführen, darunter:

*   **Mailboxen verwalten:** Erstellen, bearbeiten und löschen von E-Mail-Konten.
*   **Domain-Verwaltung:** Konfiguration von E-Mail-Domains.
*   **Sync-Job Logs:** Überprüfung der Protokolle von Synchronisierungs-Jobs.
*   **Spam- und Antivirus-Einstellungen:** Anpassung der Schutzmechanismen.
*   **Systemstatus:** Überwachung der Mailserver-Leistung und -Gesundheit.