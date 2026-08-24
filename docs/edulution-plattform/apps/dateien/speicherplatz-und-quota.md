---
sidebar_position: 9
---

# Speicherplatz und Quota

Wie viel Speicherplatz Ihnen zur Verfügung steht und wie viel davon bereits belegt ist, sehen Sie in der Dateien-App direkt in der Menüleiste. Wird der Platz knapp, weist edulution darauf hin und schränkt die Aktionen ein, die zusätzlichen Speicher belegen würden.

## Anzeige in der Menüleiste

Am unteren Rand der Menüleiste – unterhalb des Eintrags **WebDAV-Zugang** – steht Ihre Speichernutzung:

- Der Name Ihrer **Schule**
- Ein **Fortschrittsbalken** für den belegten Anteil
- Die Angabe **belegt / verfügbar** in GB, zum Beispiel `12,4 / 20,0 GB belegt`

Der Balken wechselt mit der Auslastung die Farbe:

| Belegt | Farbe des Balkens |
|---|---|
| bis 75 % | grün |
| über 75 % bis 95 % | gelb |
| über 95 % | rot |

Zwei Fälle sind zu beachten:

- In der Ansicht **Geteilte Dateien** wird die Anzeige ausgeblendet – dort greifen die Quotas der jeweiligen Besitzer, nicht Ihre eigene.
- Lässt sich keine Quota ermitteln, steht dort `-- / -- GB belegt` und der Balken bleibt leer. Die Dateiverwaltung funktioniert dann uneingeschränkt weiter.

Dieselben Werte finden Sie zusammen mit der berechneten Cloud- und E-Mail-Quota im [Dashboard](../../erste-schritte/dashboard.md#quotas).

## Warnung bei knappem Speicherplatz

Wird der Speicherplatz knapp, erscheint unter der Überschrift **Dateien** eine Warnung mit Warndreieck. Der Prozentwert in der Meldung gibt an, wie viel Speicher **noch frei** ist:

| Zustand | Bedingung | Anzeige |
|---|---|---|
| Unauffällig | weniger als 75 % belegt **oder** mehr als 5 GB frei | keine Warnung |
| Quota gering | mindestens 75 % belegt **und** weniger als 5 GB frei | gelbes Warndreieck, **Verbleibendes Quota gering – 12 %** |
| Quota sehr gering | mindestens 95 % belegt **und** weniger als 5 GB frei | rotes, pulsierendes Warndreieck, **Verbleibendes Quota sehr gering – 3 %** |

:::note[Beide Bedingungen müssen zutreffen]
Eine Warnung erscheint nur, wenn zusätzlich zur prozentualen Auslastung weniger als 5 GB frei sind. Auf Instanzen ohne Benutzer-Quotas – etwa in Unternehmensumgebungen – meldet der Speicher dauerhaft sehr viel freien Platz, sodass dort keine Warnungen erscheinen.
:::

## Eingeschränkte Aktionen bei sehr geringer Quota

Ist die Quota **sehr gering** (mindestens 95 % belegt und weniger als 5 GB frei), verhindert edulution Aktionen, die weiteren Speicher belegen würden.

### Hochladen und Erstellen

Die Schaltflächen **Hochladen**, **Ordner erstellen** und **Datei erstellen** am unteren Rand werden ausgeblendet. Alle Aktionen an vorhandenen Dateien bleiben verfügbar: Löschen, Verschieben, Umbenennen, Herunterladen, Kopieren und Teilen. Sobald Sie Speicher freigegeben haben, erscheinen die Schaltflächen wieder.

### Ordnerfreigaben und Schreibrechte

Beim Erstellen oder Bearbeiten einer Freigabe für einen **Ordner** lassen sich die Rechte **Hochladen** und **Ordner erstellen** nicht mehr vergeben – ebenso wenig die Rollen **Bearbeiten** und **Vollzugriff**, die diese Rechte enthalten. Die betroffenen Einträge sind ausgegraut und mit einem Hinweis versehen.

Enthält eine bestehende Freigabe bereits solche Rechte, erscheint derselbe Hinweis unter den Bereichen und die Schaltfläche **Speichern** bleibt deaktiviert.

## Wenn der Speicherplatz nicht ausreicht

Reicht der Platz während eines Uploads nicht mehr aus, bricht edulution den Prozess ab und gibt eine Fehlermeldung.
**Bereits übertragene Dateien bleiben erhalten**; die restlichen werden nicht angelegt.

## Speicherplatz freigeben

- Nicht mehr benötigte Dateien löschen – vor allem große Videos, Archive und Backups
- Große Dateien lokal oder auf einem Netzlaufwerk ablegen und aus dem Benutzerverzeichnis entfernen
- Bei dauerhaft zu knappem Platz die Administration ansprechen: Die Quota wird serverseitig pro Benutzer bzw. Schule vergeben

:::tip
Über den [WebDAV-Zugang](./webdav-windows.md) lässt sich das Benutzerverzeichnis im Datei-Explorer des Betriebssystems öffnen. Dort sind große Ordner mit den Bordmitteln des Systems oft schneller gefunden als in der Weboberfläche.
:::

## Siehe auch

- [Dateien](./index.md) – Übersicht über die Dateiverwaltung
- [Dashboard](../../erste-schritte/dashboard.md#quotas) – Speichernutzung inklusive Cloud- und E-Mail-Quota
