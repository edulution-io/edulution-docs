import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Die Dokumentation hat einen einzigen Wurzelbereich: edulution Plattform.
 *
 * Darunter wiederholt sich überall dieselbe Gliederung – Installation,
 * Konfiguration, Übersicht, Nutzung. Das gilt für die Plattform selbst und
 * für jede App darin. Die administrativen Zweige tragen
 * `customProps: { audience: … }` und sind für Endnutzer ausgeblendet
 * (siehe src/theme/DocSidebarItem/index.tsx), deshalb stört die Installation
 * niemanden, der nur wissen will, wie er eine Mail schreibt.
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
          label: 'Installation',
          collapsed: true,
          // Nur für Administrations-Rollen (siehe src/components/audience/taxonomy.ts)
          customProps: { audience: 'admin-setup' },
          items: [
            'edulution-plattform/installation/voraussetzungen',
            'edulution-plattform/installation/einrichtung',
            'edulution-plattform/installation/installation',
            'edulution-plattform/installation/ssl_und_reverse_proxy',
            'edulution-plattform/installation/configure_lmn-server',
          ],
        },
        {
          type: 'category',
          label: 'Konfiguration',
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
            'edulution-plattform/konfiguration/benutzerverwaltung',
            'edulution-plattform/konfiguration/passwort-aenderung',
            'edulution-plattform/konfiguration/linuxmuster',
            'edulution-plattform/konfiguration/satelliten',
            'edulution-plattform/konfiguration/wiki-einstellungen',
            'edulution-plattform/konfiguration/webhooks',
            'edulution-plattform/konfiguration/experten-tipps',
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
          label: 'Erste Schritte',
          collapsed: false,
          items: [
            'edulution-plattform/erste-schritte/navigation',
            'edulution-plattform/erste-schritte/anmeldung',
            'edulution-plattform/erste-schritte/mein-profil',
            'edulution-plattform/erste-schritte/dashboard',
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
            {
              type: 'category',
              label: 'Dateien',
              collapsed: true,
              link: {
                type: 'doc',
                id: 'edulution-plattform/apps/dateien/index',
              },
              items: [
                'edulution-plattform/apps/dateien/ansicht-und-navigation',
                'edulution-plattform/apps/dateien/vorschau-und-drucken',
                'edulution-plattform/apps/dateien/teilen',
                'edulution-plattform/apps/dateien/speicherplatz-und-quota',
                'edulution-plattform/apps/dateien/upload-schutzmechanismen',
                'edulution-plattform/apps/dateien/browser-download-einstellungen',
                'edulution-plattform/apps/dateien/drawio',
                'edulution-plattform/apps/goodnotes',
                {
                  type: 'category',
                  label: 'WebDAV',
                  collapsed: true,
                  items: [
                    'edulution-plattform/apps/dateien/webdav-windows',
                    'edulution-plattform/apps/dateien/webdav-macos',
                    'edulution-plattform/apps/dateien/webdav-linux',
                  ],
                },
              ],
            },
            {
              type: 'category',
              label: 'E-Mail',
              collapsed: true,
              link: {
                type: 'doc',
                id: 'edulution-plattform/apps/e-mail/index',
              },
              items: [
                {
                  type: 'category',
                  label: 'Konfiguration',
                  collapsed: true,
                  // Mailserver aufsetzen und betreiben - fuer Endnutzer
                  // ausgeblendet (siehe src/components/audience/taxonomy.ts).
                  customProps: { audience: 'admin' },
                  items: [
                    {
                      type: 'doc',
                      id: 'edulution-plattform/apps/e-mail/konfiguration/installation',
                      label: 'Installation',
                      customProps: { audience: 'admin-setup' },
                    },
                    {
                      type: 'doc',
                      id: 'edulution-plattform/apps/e-mail/konfiguration/administration',
                      label: 'Administration',
                    },
                    {
                      type: 'doc',
                      id: 'edulution-plattform/apps/e-mail/konfiguration/mail-app-konfiguration',
                      label: 'Mail-App konfigurieren',
                    },
                    {
                      type: 'doc',
                      id: 'edulution-plattform/apps/e-mail/konfiguration/mailbox-verwaltung',
                      label: 'Mailboxen & geteilte Postfächer',
                    },
                    {
                      type: 'doc',
                      id: 'edulution-plattform/apps/e-mail/konfiguration/verteilerlisten',
                      label: 'Verteilerlisten',
                    },
                    {
                      type: 'doc',
                      id: 'edulution-plattform/apps/e-mail/konfiguration/gruppen-mail-sync',
                      label: 'Gruppen-Mail-Synchronisation',
                    },
                    {
                      type: 'doc',
                      id: 'edulution-plattform/apps/e-mail/konfiguration/migration-einrichten',
                      label: 'Migration einrichten',
                    },
                    {
                      type: 'category',
                      label: 'Erweiterte Konfiguration',
                      collapsed: true,
                      items: [
                        {
                          type: 'doc',
                          id: 'edulution-plattform/apps/e-mail/konfiguration/mailformate',
                          label: 'E-Mail-Adressen-Format',
                        },
                        {
                          type: 'doc',
                          id: 'edulution-plattform/apps/e-mail/konfiguration/admin-features',
                          label: 'Admin-Features & Tipps',
                        },
                        {
                          type: 'doc',
                          id: 'edulution-plattform/apps/e-mail/konfiguration/changelog-config-anpassungen',
                          label: 'Changelog & Config-Anpassungen',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'doc',
                  id: 'edulution-plattform/apps/e-mail/auto-reply',
                  label: 'Automatische Antwort',
                },
                {
                  type: 'doc',
                  id: 'edulution-plattform/apps/e-mail/migration',
                  label: 'E-Mails migrieren',
                },
                {
                  type: 'category',
                  label: 'Mail-Clients',
                  collapsed: true,
                  items: [
                    {
                      type: 'doc',
                      id: 'edulution-plattform/apps/e-mail/clients/compatibility-matrix',
                      label: 'Client-Kompatibilität',
                    },
                    {
                      type: 'doc',
                      id: 'edulution-plattform/apps/e-mail/clients/server-settings',
                      label: 'Server-Einstellungen',
                    },
                    {
                      type: 'doc',
                      id: 'edulution-plattform/apps/e-mail/clients/apple-mail',
                      label: 'Apple Mail',
                    },
                    {
                      type: 'doc',
                      id: 'edulution-plattform/apps/e-mail/clients/thunderbird',
                      label: 'Thunderbird',
                    },
                    {
                      type: 'doc',
                      id: 'edulution-plattform/apps/e-mail/clients/outlook',
                      label: 'Outlook',
                    },
                    {
                      type: 'doc',
                      id: 'edulution-plattform/apps/e-mail/clients/troubleshooting',
                      label: 'Troubleshooting',
                    },
                  ],
                },
              ],
            },
            'edulution-plattform/apps/chat',
            'edulution-plattform/apps/kontakte',
            'edulution-plattform/apps/kalender',
            'edulution-plattform/apps/eltern-schueler-zuordnung',
            'edulution-plattform/apps/klassenzimmer',
            'edulution-plattform/apps/konferenzen',
            'edulution-plattform/apps/whiteboard',
            'edulution-plattform/apps/wiki',
            'edulution-plattform/apps/wiki-editor',
            'edulution-plattform/apps/lernmanagement',
            'edulution-plattform/apps/mdm',
            'edulution-plattform/apps/geraeteverwaltung',
            'edulution-plattform/apps/mobile-app',
            'edulution-plattform/apps/vpn-zugang',
            'edulution-plattform/apps/infoboard',
            'edulution-plattform/apps/umfragen',
            'edulution-plattform/apps/app-store',
            'edulution-plattform/apps/benachrichtigungen',
            'edulution-plattform/apps/markdown-hilfe',
            'edulution-plattform/apps/eingebettete-app',
            'edulution-plattform/apps/sicherheit',
            'edulution-plattform/apps/impressum-datenschutz',
            'edulution-plattform/apps/weitere-features',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'edulution Satellite',
      // Reine Administrationsthemen – fuer Endnutzer ausgeblendet
      // (siehe src/components/audience/taxonomy.ts)
      customProps: { audience: 'admin' },
      collapsed: false,
      link: {
        type: 'doc',
        id: 'edulution-satellite/index',
      },
      items: [
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
        }
      ]
    },
    {
      type: 'category',
      label: 'edulution Moodle',
      // Reine Administrationsthemen – fuer Endnutzer ausgeblendet
      // (siehe src/components/audience/taxonomy.ts)
      customProps: { audience: 'admin' },
      collapsed: false,
      link: {
        type: 'doc',
        id: 'edulution-moodle/index',
      },
      items: [
        {
          type: 'category',
          label: 'Installation',
          collapsed: false,
          items: [
            {
              type: 'doc',
              id: 'edulution-moodle/installation/voraussetzungen',
              label: 'Voraussetzungen',
            },
            {
              type: 'doc',
              id: 'edulution-moodle/installation/schnellstart',
              label: 'Schnellstart',
            },
            {
              type: 'doc',
              id: 'edulution-moodle/installation/detailliert',
              label: 'Detaillierte Installation',
            },
            {
              type: 'doc',
              id: 'edulution-moodle/installation/migration',
              label: 'Migration',
            },
          ],
        },
        {
          type: 'category',
          label: 'Konfiguration',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'edulution-moodle/konfiguration/umgebungsvariablen',
              label: 'Umgebungsvariablen',
            },
            {
              type: 'doc',
              id: 'edulution-moodle/konfiguration/synchronisation',
              label: 'Synchronisation',
            },
            {
              type: 'doc',
              id: 'edulution-moodle/konfiguration/namensschemas',
              label: 'Gruppen-Namensschemas',
            },
            {
              type: 'doc',
              id: 'edulution-moodle/konfiguration/cookie-auth',
              label: 'Cookie Auth (SSO)',
            },
            {
              type: 'doc',
              id: 'edulution-moodle/konfiguration/plugins',
              label: 'Plugin-Verwaltung',
            },
          ],
        },
        {
          type: 'category',
          label: 'Administration',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'edulution-moodle/administration/admin-ui',
              label: 'Admin-Oberfläche',
            },
            {
              type: 'doc',
              id: 'edulution-moodle/administration/backup',
              label: 'Backup & Wiederherstellung',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'edulution FileProxy',
      // Reine Administrationsthemen – fuer Endnutzer ausgeblendet
      // (siehe src/components/audience/taxonomy.ts)
      customProps: { audience: 'admin' },
      collapsed: false,
      link: {
        type: 'doc',
        id: 'edulution-fileproxy/index',
      },
      items: [
        {
          type: 'doc',
          id: 'edulution-fileproxy/package-server',
          label: 'Package Server',
        },
        {
          type: 'doc',
          id: 'edulution-fileproxy/installation',
          label: 'Installation',
        },
        {
          type: 'doc',
          id: 'edulution-fileproxy/traefik-config',
          label: 'Traefik Konfiguration',
        },
        {
          type: 'doc',
          id: 'edulution-fileproxy/ui-config',
          label: 'UI Konfiguration',
        },
        {
          type: 'doc',
          id: 'edulution-fileproxy/wiki-infrastruktur',
          label: 'Wiki-Infrastruktur',
        },
      ],
    },
    {
      type: 'category',
      label: 'edulution App',
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'edulution App',
        description: 'Die mobile App für die edulution-Plattform.',
        slug: '/category/edulution-app',
      },
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
      ],
    },
    {
      type: 'category',
      label: 'edulution OnlyOffice',
      // Reine Administrationsthemen – fuer Endnutzer ausgeblendet
      // (siehe src/components/audience/taxonomy.ts)
      customProps: { audience: 'admin' },
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'edulution OnlyOffice',
        description: 'OnlyOffice-Integration für die Dateiverwaltung.',
        slug: '/category/edulution-onlyoffice',
      },
      items: [
        {
          type: 'doc',
          id: 'edulution-onlyoffice/index',
          label: '⚙️ Installation',
        },
      ],
    },
    {
      type: 'category',
      label: 'edulution EuroOffice',
      // Reine Administrationsthemen – fuer Endnutzer ausgeblendet
      // (siehe src/components/audience/taxonomy.ts)
      customProps: { audience: 'admin' },
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'edulution EuroOffice',
        description: 'EuroOffice-Integration für die Dateiverwaltung.',
        slug: '/category/edulution-eurooffice',
      },
      items: [
        {
          type: 'doc',
          id: 'edulution-eurooffice/index',
          label: '⚙️ Installation',
        },
      ],
    },
    {
      type: 'category',
      label: 'edulution Collabora',
      // Reine Administrationsthemen – fuer Endnutzer ausgeblendet
      // (siehe src/components/audience/taxonomy.ts)
      customProps: { audience: 'admin' },
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'edulution Collabora',
        description: 'Collabora-Online-Integration für die Dateiverwaltung.',
        slug: '/category/edulution-collabora',
      },
      items: [
        {
          type: 'doc',
          id: 'edulution-collabora/index',
          label: '⚙️ Installation',
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
