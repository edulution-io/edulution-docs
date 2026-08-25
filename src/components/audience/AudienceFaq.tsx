import React from 'react';
import Link from '@docusaurus/Link';
import { audienceClassNames, resolveOrgs, resolveRoles } from './taxonomy';

interface Entry {
  /** Die Frage, so wie sie jemand stellen wuerde. */
  q: string;
  /** Eine Zeile Antwort – genug, um zu erkennen, ob der Link der richtige ist. */
  a: string;
  to: string;
  /** Nur fuer diese Organisationstypen. Leer = alle. */
  orgs?: string;
}

/**
 * Häufige Fragen je Rolle.
 *
 * `default` erscheint, solange keine Rolle gewählt ist, und sortiert grob
 * vor. Die übrigen Blöcke lösen ab, was vorher die Kategorie *Schnellstart*
 * in der Seitenleiste war: ein kurzer, geführter Weg in die Dokumentation –
 * nur eben als Frage formuliert statt als Kapitelname, und für jede Rolle
 * statt nur für die Ersteinrichtung.
 */
const FAQ: Record<string, Entry[]> = {
  default: [
    {
      q: 'Ich will edulution zum ersten Mal installieren.',
      a: 'Beginnen Sie bei den Voraussetzungen – Hardware, Netz und DNS.',
      to: '/docs/edulution-plattform/installation/voraussetzungen',
    },
    {
      q: 'Ich betreue eine laufende Instanz.',
      a: 'Die Administration bündelt Einstellungen, Benutzer und Container.',
      to: '/docs/edulution-plattform/konfiguration/administration',
    },
    {
      q: 'Ich nutze edulution und suche eine Funktion.',
      a: 'Die Navigation zeigt, wo in der Oberfläche was liegt.',
      to: '/docs/edulution-plattform/erste-schritte/navigation',
    },
    {
      q: 'Ich will es erst einmal ausprobieren.',
      a: 'Unter demo.edulution.io steht eine Demo bereit – Zugangsdaten auf Anfrage.',
      to: '/docs/#kann-ich-edulution-testen',
    },
  ],

  'admin-setup': [
    {
      q: 'Was brauche ich, bevor ich loslege?',
      a: 'Hardware, Betriebssystem, DNS-Einträge und offene Ports auf einen Blick.',
      to: '/docs/edulution-plattform/installation/voraussetzungen',
    },
    {
      q: 'Wie komme ich am schnellsten zu einer laufenden Instanz?',
      a: 'Die geführte Installation braucht rund zehn Minuten.',
      to: '/docs/edulution-plattform/installation/einrichtung',
    },
    {
      q: 'Wie binde ich meinen Linuxmuster-Server an?',
      a: 'Danach stammen Konten, Klassen und Projekte aus dem Verzeichnisdienst.',
      to: '/docs/edulution-server/installation',
    },
    {
      q: 'Wie bekomme ich HTTPS und einen Reverse Proxy davor?',
      a: 'Traefik, Zertifikate und der Betrieb hinter einem vorhandenen Proxy.',
      to: '/docs/edulution-plattform/installation/ssl_und_reverse_proxy',
    },
    {
      q: 'Wie kommt der Mailserver dazu?',
      a: 'edulution Mail wird getrennt installiert und dann eingebunden.',
      to: '/docs/edulution-mail/konfiguration/installation',
    },
    {
      q: 'Wir sind keine Schule – was muss ich umstellen?',
      a: 'Der Organisationstyp ändert Begriffe und Funktionsumfang systemweit.',
      to: '/docs/edulution-plattform/konfiguration/einstellungen#organisationstyp',
    },
  ],

  'admin-operate': [
    {
      q: 'Wie lege ich Benutzer an oder importiere sie?',
      a: 'Benutzertypen, CSV-Import und der Sophomorix-Status der Konten.',
      to: '/docs/edulution-server/benutzerverwaltung',
    },
    {
      q: 'Jemand hat sein Passwort vergessen.',
      a: 'Passwörter einzeln oder für eine ganze Gruppe zurücksetzen.',
      to: '/docs/edulution-plattform/konfiguration/passwort-aenderung',
    },
    {
      q: 'Wie aktualisiere ich edulution?',
      a: 'Container einzeln oder gesammelt neu ziehen und neu starten.',
      to: '/docs/edulution-plattform/konfiguration/container-verwaltung',
    },
    {
      q: 'Ich brauche Zugriff auf Daten eines gesperrten Kontos.',
      a: 'Der Master Key entschlüsselt Dateien, ohne das Passwort zu kennen.',
      to: '/docs/edulution-plattform/konfiguration/master-key',
    },
    {
      q: 'Wie hänge ich einen weiteren Standort an?',
      a: 'Satelliten binden entfernte Netze über einen verschlüsselten Tunnel an.',
      to: '/docs/edulution-satellite/verwaltung',
    },
    {
      q: 'Welche Apps sehen meine Nutzer überhaupt?',
      a: 'Sichtbarkeit und Zugriffsgruppen je App in den Einstellungen.',
      to: '/docs/edulution-plattform/konfiguration/einstellungen',
    },
  ],

  teacher: [
    {
      q: 'Wie sammle ich Dateien von meiner Gruppe ein?',
      a: 'Im Klassenzimmer austeilen, einsammeln und Bildschirme beaufsichtigen.',
      to: '/docs/edulution-plattform/apps/native-apps/klassenzimmer',
    },
    {
      q: 'Wie starte ich eine Videokonferenz?',
      a: 'Konferenzen anlegen, Teilnehmende einladen und moderieren.',
      to: '/docs/edulution-plattform/apps/konferenzen',
    },
    {
      q: 'Wie teile ich eine Datei mit anderen?',
      a: 'Freigaben innerhalb von edulution und Links nach außen.',
      to: '/docs/edulution-fileproxy/dateien/teilen',
    },
    {
      q: 'Wo finde ich meine Moodle-Kurse?',
      a: 'Lernmanagement öffnet Moodle ohne zweiten Login; Kurse entstehen aus Ihren Gruppen.',
      to: '/docs/edulution-lms/',
    },
    {
      q: 'Wie ordne ich Eltern ihren Kindern zu?',
      a: 'Die Zuordnung schaltet die Elternfunktionen für ein Konto frei.',
      to: '/docs/edulution-plattform/features/eltern-schueler-zuordnung',
      // Die Elternzuweisung entfaellt beim Organisationstyp Unternehmen.
      orgs: 'school public-administration',
    },
    {
      q: 'Wie frage ich schnell etwas in der Gruppe ab?',
      a: 'Umfragen erstellen, verteilen und auswerten.',
      to: '/docs/edulution-plattform/apps/native-apps/umfragen',
    },
  ],

  student: [
    {
      q: 'Wie melde ich mich an?',
      a: 'Anmeldung, Zwei-Faktor-Authentisierung und was bei Problemen hilft.',
      to: '/docs/edulution-plattform/erste-schritte/anmeldung',
    },
    {
      q: 'Wo finde ich meine Dateien?',
      a: 'Eigene Ablage, Tauschverzeichnisse und die Verzeichnisse Ihrer Gruppen.',
      to: '/docs/edulution-fileproxy/dateien/',
    },
    {
      q: 'Wie nehme ich an einer Konferenz teil?',
      a: 'Einer Konferenz beitreten, Kamera und Mikrofon einrichten.',
      to: '/docs/edulution-plattform/apps/konferenzen',
    },
    {
      q: 'Kann ich edulution auf dem Handy nutzen?',
      a: 'Die mobile Ansicht, die App und der digitale Ausweis.',
      to: '/docs/edulution-app/mobile-ansicht',
    },
    {
      q: 'Wie ändere ich mein Passwort?',
      a: 'Passwort, Profilbild und persönliche Einstellungen im eigenen Profil.',
      to: '/docs/edulution-plattform/erste-schritte/benutzereinstellungen/',
    },
  ],

  parent: [
    {
      q: 'Wie komme ich an einen Zugang für mein Kind?',
      a: 'Die Eltern-Schüler-Zuordnung legt die Verbindung an – eingerichtet von der Schule.',
      to: '/docs/edulution-plattform/features/eltern-schueler-zuordnung',
    },
    {
      q: 'Wie melde ich mich an?',
      a: 'Anmeldung, Zwei-Faktor-Authentisierung und was bei Problemen hilft.',
      to: '/docs/edulution-plattform/erste-schritte/anmeldung',
    },
    {
      q: 'Wo sehe ich Mitteilungen der Schule?',
      a: 'Benachrichtigungen sammeln, was Sie betrifft.',
      to: '/docs/edulution-plattform/features/benachrichtigungen',
    },
    {
      q: 'Wo finde ich das Schwarze Brett?',
      a: 'Das Infoboard zeigt Aushänge und aktuelle Hinweise.',
      to: '/docs/edulution-plattform/apps/native-apps/infoboard',
    },
  ],

  staff: [
    {
      q: 'Wie melde ich mich an?',
      a: 'Anmeldung, Zwei-Faktor-Authentisierung und was bei Problemen hilft.',
      to: '/docs/edulution-plattform/erste-schritte/anmeldung',
    },
    {
      q: 'Wo finde ich meine Dateien?',
      a: 'Eigene Ablage, Tauschverzeichnisse und die Verzeichnisse Ihrer Gruppen.',
      to: '/docs/edulution-fileproxy/dateien/',
    },
    {
      q: 'Wie richte ich mein Mailprogramm ein?',
      a: 'Server, Ports und Verschlüsselung für Outlook, Thunderbird und Apple Mail.',
      to: '/docs/edulution-mail/clients/server-settings',
    },
    {
      q: 'Wie lege ich eine Abwesenheitsnotiz an?',
      a: 'Automatische Antwort mit Zeitraum und eigenem Text.',
      to: '/docs/edulution-mail/auto-reply',
    },
    {
      q: 'Wie komme ich von unterwegs ins Netz?',
      a: 'VPN-Zugang über WireGuard einrichten.',
      to: '/docs/edulution-plattform/apps/vpn-zugang',
    },
  ],
};

/**
 * Die Fragen, mit denen Leute tatsächlich ankommen – je Rolle eine andere
 * Auswahl.
 *
 * Alle Blöcke stehen im HTML und werden per CSS umgeschaltet, damit beim
 * Laden nichts umspringt. Sichtbar ist immer genau einer: der zur gewählten
 * Rolle, ohne Auswahl der Block `default`.
 */
export default function AudienceFaq(): React.JSX.Element {
  return (
    <>
      {Object.entries(FAQ).map(([role, entries]) => (
        <div
          key={role}
          className={
            role === 'default'
              ? 'faq faq--default'
              : `faq ${audienceClassNames(resolveRoles(role), [], { plain: true })}`
          }
        >
          {entries.map((entry) => (
            <Link
              key={entry.q}
              to={entry.to}
              className={`faq__item ${audienceClassNames([], resolveOrgs(entry.orgs), {
                plain: true,
              })}`}
            >
              <span className="faq__q">{entry.q}</span>
              <span className="faq__a">{entry.a}</span>
            </Link>
          ))}
        </div>
      ))}
    </>
  );
}
