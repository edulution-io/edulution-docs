Mail-Migration für Administratoren
==================================

Damit Benutzer ihre E-Mails von einem externen IMAP-Server in die edulution Mail-App migrieren können, muss ein Administrator zunächst den externen Mailserver als Sync-Ziel definieren.

**Sync-Ziel für externen Mailserver anlegen**

1.  **Navigieren Sie zu den E-Mail-Einstellungen:**
    Öffnen Sie in der edulution UI den Pfad ``/settings/mail``.

2.  **Email Sync Konfiguration:**
    Scrollen Sie zum Abschnitt "Email Sync".

3.  **Sync-Job anlegen:**
    Tragen Sie die folgenden Daten des externen Mailservers ein:

    *   **Name:** Ein frei wählbarer Name für dieses Sync-Profil (z.B. "Altes Postfach BelWue"). Dieser Name wird den Benutzern angezeigt.
    *   **Hostname:** Der IMAP-Server, von dem die Mails geholt werden (z.B. ``mbox1.belwue.de``).
    *   **Port:** Der IMAP-Port, in der Regel ``993`` für eine sichere Verbindung (IMAPS).

4.  **Speichern:**
    Klicken Sie auf "Speichern", um das Sync-Profil für die Benutzer verfügbar zu machen.

.. image:: /_static/edulution-mail_sync-einstellungen.png
   :alt: Einstellungen für den E-Mail Sync
