Installation
============

.. note::
   Dieser Bereich befindet sich noch im Aufbau.


2.1.1 Setup Theme Switch (edulution UI >= v1.6.14)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Um aus der edulution Administrationsoberfläche heraus das Theme umzustellen, benötigen Sie folgen zusätzliche Schritte:

.. code-block:: bash
   :caption: SOGo Volume in edulution-api Container mounten

    # Volume mount in docker-compose.yml erstellen
    sed -i '/^\s*volumes:/a\      - /srv/docker/edulution-mail/mailcow/data/conf/sogo:/data/apps/mail/sogo/overrides:rw' /srv/docker/edulution-ui/docker-compose.yml


Anschließend kann in den Einstellungen zur Mail-App das Theme ausgewählt werden.

.. image:: assets/setupMailTheme.webp
   :alt: Auswahl des SOGo-Themes