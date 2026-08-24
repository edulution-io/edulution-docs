import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Haupt-Dokumentation
  mainSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Startseite',
    },
    {
      type: 'category',
      label: 'Schnellstart',
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Schnellstart-Anleitungen',
        description: 'Starten Sie hier mit der Installation und Einrichtung von edulution.',
        slug: '/category/schnellstart',
      },
      items: [
        {
          type: 'doc',
          id: 'edulution-plattform/installation/voraussetzungen',
          label: 'Voraussetzungen',
        },
        {
          type: 'doc',
          id: 'edulution-plattform/installation/einrichtung',
          label: 'Installation in 10 Minuten',
        },
        {
          type: 'doc',
          id: 'edulution-plattform/configure-lmn-server/configure_lmn-server',
          label: 'Linuxmuster verbinden',
        },
      ],
    },
    {
      type: 'category',
      label: 'edulution Plattform',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Installation',
          collapsed: true,
          items: [
            'edulution-plattform/installation/voraussetzungen',
            'edulution-plattform/installation/einrichtung',
            'edulution-plattform/installation/installation',
            'edulution-plattform/installation/ssl_und_reverse_proxy',
            'edulution-plattform/configure-lmn-server/configure_lmn-server',
          ],
        },
        {
          type: 'category',
          label: 'Upgrade',
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Keycloak',
              collapsed: true,
              items: [
                {
                  type: 'doc',
                  id: 'edulution-plattform/upgrade/keycloak/to-26',
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
                  id: 'edulution-plattform/upgrade/mongodb/replica-set',
                  label: 'Replica Set einrichten',
                },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Nutzerhandbuch',
          collapsed: false,
          items: [
            'edulution-plattform/features/navigation',
            'edulution-plattform/features/anmeldung',
            'edulution-plattform/benutzer/mein-profil',
            'edulution-plattform/features/dashboard',
            {
              type: 'category',
              label: 'Dateien',
              collapsed: true,
              link: {
                type: 'doc',
                id: 'edulution-plattform/features/dateien/index',
              },
              items: [
                'edulution-plattform/features/dateien/webdav-windows',
                'edulution-plattform/features/dateien/webdav-macos',
                'edulution-plattform/features/dateien/webdav-linux',
                'edulution-plattform/features/dateien/ansicht-und-navigation',
                'edulution-plattform/features/dateien/vorschau-und-drucken',
                'edulution-plattform/features/dateien/drawio',
                'edulution-plattform/features/dateien/teilen',
                'edulution-plattform/features/dateien/speicherplatz-und-quota',
                'edulution-plattform/features/dateien/upload-schutzmechanismen',
                'edulution-plattform/features/dateien/browser-download-einstellungen',
                'edulution-plattform/features/goodnotes',
              ],
            },
            'edulution-plattform/features/e-mail',
            'edulution-plattform/features/chat',
            'edulution-plattform/features/kontakte',
            'edulution-plattform/features/eltern-schueler-zuordnung',
            'edulution-plattform/features/kalender',
            'edulution-plattform/features/klassenzimmer',
            'edulution-plattform/features/mdm',
            'edulution-plattform/features/geraeteverwaltung',
            'edulution-plattform/features/konferenzen',
            'edulution-plattform/features/whiteboard',
            'edulution-plattform/features/wiki',
            'edulution-plattform/features/wiki-editor',
            'edulution-plattform/features/lernmanagement',
            'edulution-plattform/features/markdown-hilfe',
            'edulution-plattform/features/app-store',
            'edulution-plattform/features/impressum-datenschutz',
            'edulution-plattform/features/eingebettete-app',
            'edulution-plattform/features/mobile-app',
            'edulution-plattform/features/sicherheit',
            'edulution-plattform/features/weitere-features',
            'edulution-plattform/features/infoboard',
            'edulution-plattform/features/umfragen',
            'edulution-plattform/features/benachrichtigungen',
            'edulution-plattform/features/vpn-zugang',
          ],
        },
        {
          type: 'category',
          label: 'Administration',
          collapsed: true,
          items: [
            'edulution-plattform/administration/administration',
            'edulution-plattform/administration/einstellungen',
            'edulution-plattform/administration/master-key',
            'edulution-plattform/administration/container-verwaltung',
            'edulution-plattform/administration/satelliten',
            'edulution-plattform/administration/passwort-aenderung',
            'edulution-plattform/administration/linuxmuster',
            'edulution-plattform/administration/benutzerverwaltung',
            'edulution-plattform/administration/wiki-einstellungen',
            'edulution-plattform/administration/webhooks',
            'edulution-plattform/administration/experten-tipps',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'edulution Mail',
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'edulution Mail Dokumentation',
        description: 'E-Mail-Lösung basierend auf Mailcow - vollständig integriert mit edulution Plattform und Linuxmuster.',
        slug: '/category/edulution-mail',
      },
      items: [
        {
          type: 'category',
          label: 'Erste Schritte',
          collapsed: false,
          items: [
            {
              type: 'doc',
              id: 'edulution-mail/installation',
              label: 'Installation',
            },
            {
              type: 'doc',
              id: 'edulution-mail/administration',
              label: 'Administration',
            },
            {
              type: 'doc',
              id: 'edulution-mail/mail-app-konfiguration',
              label: 'Mail-App konfigurieren',
            },
          ],
        },
        {
          type: 'category',
          label: 'Mail-Clients',
          collapsed: true,
          link: {
            type: 'generated-index',
            title: 'Mail-Clients einrichten',
            description: 'Anleitungen zur Einrichtung verschiedener E-Mail-Clients.',
            slug: '/category/mail-clients',
          },
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
            // Vorbereitet für zukünftige Inhalte
            // 'edulution-mail/clients/webmail',
            // 'edulution-mail/clients/mobile',
          ],
        },
        {
          type: 'category',
          label: 'Migration',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'edulution-mail/admin_mail_migration',
              label: 'Admin: Migration einrichten',
            },
            {
              type: 'doc',
              id: 'edulution-mail/user_mail_migration',
              label: 'Benutzer: E-Mails migrieren',
            },
          ],
        },
        {
          type: 'category',
          label: 'Verwaltung',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'edulution-mail/mailbox-verwaltung',
              label: 'Mailboxen & geteilte Postfächer',
            },
            {
              type: 'doc',
              id: 'edulution-mail/verteilerlisten',
              label: 'Verteilerlisten',
            },
            {
              type: 'doc',
              id: 'edulution-mail/auto-reply',
              label: 'Automatische Antwort',
            },
          ],
        },
        {
          type: 'category',
          label: 'Erweiterte Konfiguration',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'edulution-mail/benutzer_mailformate',
              label: 'E-Mail-Adressen-Format',
            },
            {
              type: 'doc',
              id: 'edulution-mail/admin-features',
              label: 'Admin-Features & Tipps',
            },
            {
              type: 'doc',
              id: 'edulution-mail/changelog-config-anpassungen',
              label: 'Changelog & Config-Anpassungen',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'edulution Satellite',
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
      label: 'Anbindungen',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'anbindungen/index',
      },
      items: [
        {
          type: 'category',
          label: 'Nextcloud Cookie Auth',
          collapsed: true,
          link: {
            type: 'doc',
            id: 'anbindungen/nextcloud',
          },
          items: [
            {
              type: 'doc',
              id: 'anbindungen/voraussetzungen',
              label: 'Voraussetzungen',
            },
            {
              type: 'doc',
              id: 'anbindungen/installation',
              label: 'Installation',
            },
            {
              type: 'doc',
              id: 'anbindungen/konfiguration',
              label: 'Konfiguration',
            },
            {
              type: 'doc',
              id: 'anbindungen/troubleshooting',
              label: 'Troubleshooting',
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
