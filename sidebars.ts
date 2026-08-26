import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Die Dokumentation folgt den Komponenten von edulution – denselben neun,
 * die auf edulution.io als Produktkarten stehen: Plattform, Server, Mail,
 * App, Satellite, LMS, VDI, MDM, FileProxy. Wer ein Produkt gekauft hat,
 * findet alles dazu an einer Stelle: Installation, Konfiguration, Nutzung.
 *
 * Unter `edulution Plattform` steht deshalb nur noch, was ohne eigenen
 * Serverdienst auskommt – die nativen Apps, Dateien, Konferenzen, VPN.
 * Alles mit eigener Installationsstrecke ist eine Komponente daneben.
 *
 * Innerhalb jeder Komponente wiederholt sich dieselbe Gliederung:
 * Installation, Konfiguration, Übersicht, Nutzung. Die administrativen
 * Zweige tragen `customProps: { audience: … }` und sind für Endnutzer
 * ausgeblendet (siehe src/theme/DocSidebarItem/index.tsx).
 *
 * Die Rollen-IDs stehen in src/components/audience/taxonomy.ts; ein Tippfehler
 * hält den Build an.
 */
const sidebars: SidebarsConfig = {
  mainSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Startseite',
    },
    {
      type: 'category',
      label: 'edulution Plattform',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'edulution-plattform/index',
      },
      items: [
        {
          type: 'category',
          label: '📖 Übersicht',
          collapsed: false,
          items: [
            'edulution-plattform/uebersicht/anmeldung',
            'edulution-plattform/uebersicht/navigation',
            {
              type: 'category',
              label: 'Benutzereinstellungen',
              collapsed: true,
              // Der laengste Block der Nutzerdokumentation. Jeder Bereich
              // des Dialogs ist eine Seite, damit sich einzelne Stellen
              // verlinken lassen - die Uebersicht bleibt der Einstieg.
              link: {
                type: 'doc',
                id: 'edulution-plattform/uebersicht/benutzereinstellungen/index',
              },
              items: [
                'edulution-plattform/uebersicht/benutzereinstellungen/benutzerdetails',
                'edulution-plattform/uebersicht/benutzereinstellungen/sicherheit',
                'edulution-plattform/uebersicht/benutzereinstellungen/e-mail',
                'edulution-plattform/uebersicht/benutzereinstellungen/benutzeroberflaeche',
                'edulution-plattform/uebersicht/benutzereinstellungen/app-zugriff',
                'edulution-plattform/uebersicht/benutzereinstellungen/vpn-zugang',
                'edulution-plattform/uebersicht/benutzereinstellungen/meine-kinder-eltern',
              ],
            },
            'edulution-plattform/uebersicht/dashboard',
          ],
        },
        {
          type: 'category',
          label: '⚙️ Installation',
          collapsed: true,
          // Nur für Administrations-Rollen (siehe src/components/audience/taxonomy.ts)
          customProps: { audience: 'admin-setup' },
          items: [
            'edulution-plattform/installation/voraussetzungen',
            'edulution-plattform/installation/einrichtung',
            'edulution-plattform/installation/installation',
            'edulution-plattform/installation/ssl_und_reverse_proxy',
          ],
        },
        {
          type: 'category',
          label: '⚙️ Konfiguration',
          collapsed: true,
          // Nur für Administrations-Rollen (siehe src/components/audience/taxonomy.ts)
          customProps: { audience: 'admin' },
          link: {
            type: 'doc',
            id: 'edulution-plattform/konfiguration/administration',
          },
          items: [
            'edulution-plattform/konfiguration/einstellungen',
            'edulution-plattform/konfiguration/master-key',
            'edulution-plattform/konfiguration/container-verwaltung',
            'edulution-plattform/konfiguration/passwort-aenderung',
            'edulution-plattform/konfiguration/impressum-datenschutz',
            'edulution-plattform/konfiguration/wiki-einstellungen',
            'edulution-plattform/konfiguration/webhooks',
            {
              type: 'category',
              label: 'Anbindungen',
              collapsed: true,
              link: {
                type: 'doc',
                id: 'edulution-plattform/konfiguration/anbindungen/index',
              },
              items: [
                {
                  type: 'category',
                  label: 'Nextcloud Cookie Auth',
                  collapsed: true,
                  link: {
                    type: 'doc',
                    id: 'edulution-plattform/konfiguration/anbindungen/nextcloud',
                  },
                  items: [
                    'edulution-plattform/konfiguration/anbindungen/voraussetzungen',
                    'edulution-plattform/konfiguration/anbindungen/installation',
                    'edulution-plattform/konfiguration/anbindungen/konfiguration',
                    'edulution-plattform/konfiguration/anbindungen/troubleshooting',
                  ],
                },
              ],
            },
            {
              type: 'category',
              label: 'Upgrade',
              collapsed: true,
              // Betrifft nur bereits laufende Instanzen.
              customProps: { audience: 'admin-operate' },
              items: [
                {
                  type: 'category',
                  label: 'Keycloak',
                  collapsed: true,
                  items: [
                    {
                      type: 'doc',
                      id: 'edulution-plattform/konfiguration/upgrade/keycloak/to-26',
                      label: '25 auf 26.4',
                    },
                  ],
                },
                {
                  type: 'category',
                  label: 'MongoDB',
                  collapsed: true,
                  items: [
                    {
                      type: 'doc',
                      id: 'edulution-plattform/konfiguration/upgrade/mongodb/replica-set',
                      label: 'Replica Set einrichten',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Apps',
          collapsed: false,
          link: {
            type: 'doc',
            id: 'edulution-plattform/apps/index',
          },
          items: [
            // Zuerst die beiden Seiten, mit denen Apps ueberhaupt entstehen:
            // im App-Store entscheidet sich, welche der Apps darunter in der
            // Seitenleiste erscheinen, und die Eingebettete App ist keine
            // einzelne Anwendung, sondern die Huelle fuer eigene Inhalte.
            'edulution-plattform/apps/app-store',
            'edulution-plattform/apps/eingebettete-app',
            {
              type: 'category',
              label: 'Native Apps',
              collapsed: true,
              // Teil der Plattform - hier ist nichts zu installieren,
              // hoechstens im App-Store zu aktivieren.
              items: [
                'edulution-plattform/apps/native-apps/chat',
                'edulution-plattform/apps/native-apps/kontakte',
                'edulution-plattform/apps/native-apps/kalender',
                'edulution-plattform/apps/native-apps/konferenzen',
                'edulution-plattform/apps/native-apps/klassenzimmer',
                'edulution-plattform/apps/native-apps/whiteboard',
                'edulution-plattform/apps/native-apps/wiki',
                'edulution-plattform/apps/native-apps/wiki-editor',
                'edulution-plattform/apps/native-apps/markdown-hilfe',
                'edulution-plattform/apps/native-apps/geraeteverwaltung',
                'edulution-plattform/apps/native-apps/infoboard',
                'edulution-plattform/apps/native-apps/umfragen',
              ],
            },
            // Das Gegenstueck zu den nativen Apps: eine Kachel in edulution
            // hat jede von ihnen auch, aber dahinter steht ein eigener
            // Dienst mit eigener Installationsstrecke. Dokumentiert sind
            // sie deshalb in ihrer Komponente, nicht hier.
            //
            // Jeder Eintrag ist nur ein Link: `href` bleibt ein Platzhalter,
            // das echte Ziel steht in `customProps.crossRef` und wird in
            // src/theme/DocSidebarItem eingesetzt. So gilt der Eintrag
            // nirgends als aktive Seite - sonst klappte beim Oeffnen der
            // Dateien-App dieser Ast hier mit auf.
            {
              type: 'category',
              label: 'Angebundene Apps',
              collapsed: true,
              items: [
                {
                  type: 'link',
                  label: 'Schulserver',
                  href: '#',
                  customProps: {
                    crossRef: '/docs/edulution-server/',
                    audience: 'admin',
                  },
                },
                {
                  type: 'link',
                  label: 'E-Mail',
                  href: '#',
                  customProps: { crossRef: '/docs/edulution-mail/' },
                },
                {
                  type: 'link',
                  label: 'Lernmanagement',
                  href: '#',
                  customProps: { crossRef: '/docs/edulution-lms/' },
                },
                {
                  type: 'link',
                  label: 'Desktop-Bereitstellung',
                  href: '#',
                  customProps: { crossRef: '/docs/edulution-vdi/' },
                },
                {
                  type: 'link',
                  label: 'MDM',
                  href: '#',
                  customProps: { crossRef: '/docs/edulution-mdm/' },
                },
                {
                  type: 'link',
                  label: 'Dateien',
                  href: '#',
                  customProps: { crossRef: '/docs/edulution-fileproxy/dateien/' },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'edulution Server',
      collapsed: true,
      // Der Schulserver wird aufgesetzt und betrieben, nicht bedient -
      // fuer Endnutzer ist der ganze Bereich ausgeblendet.
      customProps: { audience: 'admin' },
      items: [
        {
          type: 'doc',
          id: 'edulution-server/index',
          label: '📖 Übersicht',
        },
        {
          type: 'doc',
          id: 'edulution-server/installation',
          label: '⚙️ Installation',
          customProps: { audience: 'admin-setup' },
        },
        {
          type: 'doc',
          id: 'edulution-server/linuxmuster',
          label: 'Linuxmuster & LINBO',
        },
        {
          type: 'doc',
          id: 'edulution-server/benutzerverwaltung',
          label: 'Benutzerverwaltung',
        },
      ],
    },
    {
      type: 'category',
      label: 'edulution Mail',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'edulution-mail/index',
          label: '📖 Übersicht',
        },
        {
          type: 'category',
          label: '⚙️ Konfiguration',
          collapsed: true,
          // Mailserver aufsetzen und betreiben - fuer Endnutzer
          // ausgeblendet (siehe src/components/audience/taxonomy.ts).
          customProps: { audience: 'admin' },
          items: [
            {
              type: 'doc',
              id: 'edulution-mail/konfiguration/installation',
              label: 'Installation',
              customProps: { audience: 'admin-setup' },
            },
            {
              type: 'doc',
              id: 'edulution-mail/konfiguration/administration',
              label: 'Administration',
            },
            {
              type: 'doc',
              id: 'edulution-mail/konfiguration/mail-app-konfiguration',
              label: 'Mail-App konfigurieren',
            },
            {
              type: 'doc',
              id: 'edulution-mail/konfiguration/mailbox-verwaltung',
              label: 'Mailboxen & geteilte Postfächer',
            },
            {
              type: 'doc',
              id: 'edulution-mail/konfiguration/verteilerlisten',
              label: 'Verteilerlisten',
            },
            {
              type: 'doc',
              id: 'edulution-mail/konfiguration/gruppen-mail-sync',
              label: 'Gruppen-Mail-Synchronisation',
            },
            {
              type: 'doc',
              id: 'edulution-mail/konfiguration/migration-einrichten',
              label: 'Migration einrichten',
            },
            {
              type: 'category',
              label: 'Erweiterte Konfiguration',
              collapsed: true,
              items: [
                {
                  type: 'doc',
                  id: 'edulution-mail/konfiguration/mailformate',
                  label: 'E-Mail-Adressen-Format',
                },
                {
                  type: 'doc',
                  id: 'edulution-mail/konfiguration/admin-features',
                  label: 'Admin-Features & Tipps',
                },
                {
                  type: 'doc',
                  id: 'edulution-mail/konfiguration/changelog-config-anpassungen',
                  label: 'Changelog & Config-Anpassungen',
                },
              ],
            },
          ],
        },
        {
          type: 'doc',
          id: 'edulution-mail/auto-reply',
          label: 'Automatische Antwort',
        },
        {
          type: 'doc',
          id: 'edulution-mail/migration',
          label: 'E-Mails migrieren',
        },
        {
          type: 'category',
          label: 'Mail-Clients',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'edulution-mail/clients/compatibility-matrix',
              label: 'Client-Kompatibilität',
            },
            {
              type: 'doc',
              id: 'edulution-mail/clients/server-settings',
              label: 'Server-Einstellungen',
            },
            {
              type: 'doc',
              id: 'edulution-mail/clients/apple-mail',
              label: 'Apple Mail',
            },
            {
              type: 'doc',
              id: 'edulution-mail/clients/thunderbird',
              label: 'Thunderbird',
            },
            {
              type: 'doc',
              id: 'edulution-mail/clients/outlook',
              label: 'Outlook',
            },
            {
              type: 'doc',
              id: 'edulution-mail/clients/troubleshooting',
              label: 'Troubleshooting',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'edulution App',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'edulution-app/index',
          label: '📱 Übersicht',
        },
        {
          type: 'doc',
          id: 'edulution-app/setup',
          label: '⚙️ Einrichtung',
        },
        {
          type: 'doc',
          id: 'edulution-app/mobile-ansicht',
          label: 'Mobile Ansicht & Tablets',
        },
      ],
    },
    {
      type: 'category',
      label: 'edulution Satellite',
      collapsed: true,
      // Eine Appliance fuer entfernte Standorte - es gibt dazu nichts
      // fuer Endnutzer, deshalb ist der ganze Block ausgezeichnet.
      // Nicht mit dem VPN-Zugang der Plattform verwechseln: der ist der
      // WireGuard-Tunnel einzelner Benutzer, nicht die Kopplung von
      // Appliances.
      customProps: { audience: 'admin' },
      items: [
        {
          type: 'doc',
          id: 'edulution-satellite/index',
          label: '📖 Übersicht',
        },
        {
          type: 'doc',
          id: 'edulution-satellite/einrichtung-mit-edulution',
          label: 'Einrichtung mit edulution',
        },
        {
          type: 'doc',
          id: 'edulution-satellite/standalone',
          label: 'Standalone einrichten',
        },
        {
          type: 'doc',
          id: 'edulution-satellite/wireguard-traefik',
          label: 'WireGuard über Traefik',
        },
        {
          type: 'doc',
          id: 'edulution-satellite/verwaltung',
          label: 'Satelliten verwalten',
        },
      ],
    },
    {
      type: 'category',
      label: 'edulution LMS',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'edulution-lms/index',
          label: '📖 Übersicht',
        },
        {
          type: 'category',
          label: '⚙️ Installation',
          collapsed: true,
          // Moodle bereitstellen - nur fuer die Ersteinrichtung.
          customProps: { audience: 'admin-setup' },
          link: {
            type: 'doc',
            id: 'edulution-lms/installation/index',
          },
          items: [
            {
              type: 'doc',
              id: 'edulution-lms/installation/voraussetzungen',
              label: 'Voraussetzungen',
            },
            {
              type: 'doc',
              id: 'edulution-lms/installation/schnellstart',
              label: 'Schnellstart',
            },
            {
              type: 'doc',
              id: 'edulution-lms/installation/detailliert',
              label: 'Detaillierte Installation',
            },
            {
              type: 'doc',
              id: 'edulution-lms/installation/migration',
              label: 'Migration',
            },
          ],
        },
        {
          type: 'category',
          label: '⚙️ Konfiguration',
          collapsed: true,
          // Moodle-Anbindung betreiben - fuer Endnutzer ausgeblendet.
          customProps: { audience: 'admin' },
          link: {
            type: 'doc',
            id: 'edulution-lms/konfiguration/index',
          },
          items: [
            {
              type: 'doc',
              id: 'edulution-lms/konfiguration/umgebungsvariablen',
              label: 'Umgebungsvariablen',
            },
            {
              type: 'doc',
              id: 'edulution-lms/konfiguration/synchronisation',
              label: 'Synchronisation',
            },
            {
              type: 'doc',
              id: 'edulution-lms/konfiguration/namensschemas',
              label: 'Gruppen-Namensschemas',
            },
            {
              type: 'doc',
              id: 'edulution-lms/konfiguration/cookie-auth',
              label: 'Cookie Auth (SSO)',
            },
            {
              type: 'doc',
              id: 'edulution-lms/konfiguration/plugins',
              label: 'Plugin-Verwaltung',
            },
            {
              type: 'category',
              label: 'Administration',
              collapsed: true,
              items: [
                {
                  type: 'doc',
                  id: 'edulution-lms/konfiguration/administration/admin-ui',
                  label: 'Admin-Oberfläche',
                },
                {
                  type: 'doc',
                  id: 'edulution-lms/konfiguration/administration/backup',
                  label: 'Backup & Wiederherstellung',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'edulution VDI',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'edulution-vdi/index',
          label: '📖 Übersicht',
        },
        {
          type: 'category',
          label: '⚙️ Konfiguration',
          collapsed: true,
          // Die Anbindung an eine vorhandene VDI-Umgebung - fuer
          // Endnutzer ausgeblendet. Die Umgebung selbst entsteht auf dem
          // Schulserver, nicht hier.
          customProps: { audience: 'admin' },
          link: {
            type: 'doc',
            id: 'edulution-vdi/konfiguration/index',
          },
          items: [
            {
              type: 'doc',
              id: 'edulution-vdi/konfiguration/app-einrichten',
              label: 'App einrichten',
              customProps: { audience: 'admin-setup' },
            },
            {
              type: 'doc',
              id: 'edulution-vdi/konfiguration/virtuelle-maschinen',
              label: 'Virtuelle Maschinen',
            },
            {
              type: 'doc',
              id: 'edulution-vdi/konfiguration/rdp-verbindung',
              label: 'RDP-Verbindung',
            },
          ],
        },
      ],
    },
    {
      type: 'doc',
      id: 'edulution-mdm/index',
      label: 'edulution MDM',
    },
    {
      type: 'category',
      label: 'edulution FileProxy',
      collapsed: true,
      // Zwei Zweige, wie der Name sagt: die Dateien-App, die alle nutzen,
      // und der Proxy, der ihre Netzlaufwerke bereitstellt. Kein `audience`
      // auf der Kategorie - die App darin ist die meistgenutzte Anwendung
      // der Plattform. Administrationsthema ist nur, was in den beiden
      // Konfigurations-Ordnern steht.
      items: [
        {
          type: 'category',
          label: 'Dateien',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'edulution-fileproxy/dateien/index',
              label: '📖 Übersicht',
            },
            {
              type: 'category',
              label: '⚙️ Konfiguration',
              collapsed: true,
              // Office-Server aufsetzen - fuer Endnutzer ausgeblendet
              // (siehe src/components/audience/taxonomy.ts).
              customProps: { audience: 'admin' },
              items: [
                {
                  type: 'doc',
                  id: 'edulution-fileproxy/dateien/konfiguration/dokumenten-editor',
                  label: 'Dokumenten-Editor',
                },
              ],
            },
            'edulution-fileproxy/dateien/ansicht-und-navigation',
            'edulution-fileproxy/dateien/vorschau-und-drucken',
            'edulution-fileproxy/dateien/teilen',
            'edulution-fileproxy/dateien/speicherplatz-und-quota',
            'edulution-fileproxy/dateien/upload-schutzmechanismen',
            'edulution-fileproxy/dateien/browser-download-einstellungen',
            'edulution-fileproxy/dateien/drawio',
            'edulution-fileproxy/dateien/goodnotes',
            {
              type: 'category',
              label: 'WebDAV',
              collapsed: true,
              items: [
                'edulution-fileproxy/dateien/webdav-windows',
                'edulution-fileproxy/dateien/webdav-macos',
                'edulution-fileproxy/dateien/webdav-linux',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'FileProxy',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'edulution-fileproxy/index',
              label: '📖 Übersicht',
            },
            {
              type: 'category',
              label: '⚙️ Konfiguration',
              collapsed: true,
              // Der Dienst hinter der Dateien-App - Endnutzer merken von ihm
              // nichts und bekommen den Block nicht zu sehen.
              customProps: { audience: 'admin' },
              items: [
                {
                  type: 'doc',
                  id: 'edulution-fileproxy/konfiguration/package-server',
                  label: 'Package Server',
                },
                {
                  type: 'doc',
                  id: 'edulution-fileproxy/konfiguration/installation',
                  label: 'Installation',
                },
                {
                  type: 'doc',
                  id: 'edulution-fileproxy/konfiguration/traefik-config',
                  label: 'Traefik Konfiguration',
                },
                {
                  type: 'doc',
                  id: 'edulution-fileproxy/konfiguration/ui-config',
                  label: 'UI Konfiguration',
                },
                {
                  type: 'doc',
                  id: 'edulution-fileproxy/konfiguration/wiki-infrastruktur',
                  label: 'Wiki-Infrastruktur',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Ressourcen',
      collapsed: true,
      items: [
        {
          type: 'link',
          label: 'edulution.io Website',
          href: 'https://edulution.io',
        },
        {
          type: 'link',
          label: 'Demo ausprobieren',
          href: 'https://demo.edulution.io',
        },
        {
          type: 'link',
          label: 'Community Forum',
          href: 'https://ask.linuxmuster.net/c/edulution/63',
        },
        {
          type: 'link',
          label: 'GitHub Repository',
          href: 'https://github.com/edulution-io',
        },
      ],
    },
  ],
};

export default sidebars;
