SSL-Zertifikate & Reverse-Proxy
*********************************

.. index:: SSL, Zertifikat, Zertifikat austauschen, Reverse-Proxy, Firewall, Web Server Protection

**Zertifikat-Speicherort**

Egal ob Sie ein eigenes Zertifikat hochgeladen oder ein selbstsigniertes Zertifikat während der Installation erstellt haben, die Dateien werden an folgendem Ort gespeichert:

*   **Pfad:** ``/srv/docker/edulution-ui/data/traefik/ssl/``
*   **Zertifikatsdatei:** ``cert.cert``
*   **Schlüsseldatei:** ``cert.key``

**Zertifikat austauschen**

Um ein bestehendes Zertifikat manuell auszutauschen, ersetzen Sie einfach die Dateien ``cert.cert`` und ``cert.key`` im oben genannten Verzeichnis und starten Sie die edulution UI neu.

.. note::
   Wenn Sie bei der Installation **Let's Encrypt** gewählt haben, werden die Zertifikate automatisch von Traefik verwaltet und erneuert. Ein manueller Eingriff ist hier in der Regel nicht notwendig. Der Speicherort dafür ist ``/srv/docker/edulution-ui/data/letsencrypt/``.

**Betrieb hinter einem Reverse-Proxy oder einer Firewall**

Häufig wird die edulution UI nicht direkt aus dem Internet erreichbar sein, sondern hinter einer Firewall mit "Web Server Protection" oder einem anderen Reverse-Proxy betrieben.

In diesem Szenario übernimmt die Firewall oder der Proxy die SSL-Terminierung (die Verschlüsselung). Die edulution UI selbst wird dann unverschlüsselt über HTTP betrieben.

Das System erkennt automatisch, wenn es hinter einem Reverse-Proxy betrieben wird (anhand von ``X-Forwarded-For`` Headern in der Anfrage) und passt sein Verhalten entsprechend an. Während der Installation wird in diesem Fall der Schritt zur SSL-Einrichtung übersprungen.
