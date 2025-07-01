Mail-Migration für Benutzer
===========================

Nachdem der Administrator das Sync-Profil angelegt hat, kann jeder Benutzer die Synchronisierung für sein eigenes Postfach individuell starten.

1.  **Zum eigenen Profil navigieren:**
    Klicken Sie in der edulutionUI unten links auf **"Mein Profil"** und wählen Sie den Reiter **"Mail"**.

2.  **Zugangsdaten eintragen:**
    Der Benutzer muss hier die Zugangsdaten für sein **altes** Postfach eintragen (Benutzername und Passwort).

    .. image:: /_static/edulution-mail_benutzer-profil-sync.png
       :alt: E-Mail-Synchronisierung im Benutzerprofil

3.  **Synchronisierung starten:**
    Nach dem Speichern der Zugangsdaten startet der Synchronisierungs-Prozess automatisch.

.. note::
   Die E-Mails werden alle 15 Minuten abgerufen, bis der Benutzer die Synchronisierung in seinem Profil wieder beendet oder löscht. Die migrierten E-Mails erscheinen in einem neuen Unterordner im Posteingang, der nach dem Sync-Profil benannt ist (z.B. "Altes Postfach BelWue").

**Status der Migration prüfen**

Nach dem Start der Synchronisierung erscheint der Sync-Job in einer Liste in Ihrem Profil. Hier können Sie den Status der Migration überprüfen:

*   **Grüner Status:** Zeigt an, dass die Synchronisierung erfolgreich läuft oder abgeschlossen ist. Dies bedeutet, dass die Mails grundsätzlich ankommen.
*   **Roter Status:** Zeigt an, dass ein Problem bei der Synchronisierung aufgetreten ist. In diesem Fall sollten Sie Folgendes prüfen:
    *   **Benutzerdaten:** Überprüfen Sie, ob Benutzername und Passwort für Ihr altes Postfach korrekt eingegeben wurden.
    *   **Netzwerk/Server:** Stellen Sie sicher, dass der externe Mailserver erreichbar ist und keine allgemeinen Netzwerkprobleme vorliegen. Wenn andere Benutzer erfolgreich synchronisieren können, liegt das Problem wahrscheinlich an den Zugangsdaten.

.. tip::
   Wenn die Synchronisierung grundsätzlich funktioniert (grüner Status), aber einzelne Mails fehlen, ist das meist kein kritisches Problem. Sollten jedoch gar keine Mails ankommen (roter Status), überprüfen Sie unbedingt Ihre Zugangsdaten.
