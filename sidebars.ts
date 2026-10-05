import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * One top-level category per edulution component. Admin-only branches carry `customProps: { audience: … }` with role
 * IDs from src/components/audience/taxonomy.ts and are hidden for end users; an unknown ID fails the build.
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
              // Each section of the dialog is its own page so it can be linked directly; the overview stays the entry.
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
            // These two come first because they create apps rather than being one: the App Store decides which apps
            // appear in the sidebar, and the embedded app wraps custom content.
            'edulution-plattform/apps/app-store',
            'edulution-plattform/apps/eingebettete-app',
            {
              type: 'category',
              label: 'Native Apps',
              collapsed: true,
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
            // Cross-references to the components' own docs: `href: '#'` is a placeholder that keeps this branch from
            // expanding when the target is open (see CROSS_REF_PLACEHOLDER in src/theme/DocSidebarItem).
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
          // Only the connection to an existing VDI environment; the environment itself is built on the school server.
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
      type: 'category',
      label: 'edulution MDM',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'edulution-mdm/index',
          label: '📖 Übersicht',
        },
        {
          type: 'category',
          label: '⚙️ Einrichtung',
          collapsed: true,
          customProps: { audience: 'admin' },
          link: {
            type: 'doc',
            id: 'edulution-mdm/einrichtung/index',
          },
          items: [
            {
              type: 'doc',
              id: 'edulution-mdm/einrichtung/voraussetzungen',
              label: 'Voraussetzungen',
              customProps: { audience: 'admin-setup' },
            },
            {
              type: 'doc',
              id: 'edulution-mdm/einrichtung/app-konfiguration',
              label: 'App konfigurieren',
            },
            {
              type: 'doc',
              id: 'edulution-mdm/einrichtung/benutzer-synchronisation',
              label: 'Benutzer-Synchronisation',
            },
            {
              type: 'doc',
              id: 'edulution-mdm/einrichtung/fehlerbehebung',
              label: 'Fehlerbehebung',
              customProps: { audience: 'admin-operate' },
            },
          ],
        },
        {
          type: 'doc',
          id: 'edulution-mdm/geraete',
          label: 'Geräte',
        },
        {
          type: 'doc',
          id: 'edulution-mdm/einschreibungen',
          label: 'Geräte einschreiben',
          customProps: { audience: 'admin' },
        },
        {
          type: 'doc',
          id: 'edulution-mdm/apps',
          label: 'Apps',
        },
        {
          type: 'doc',
          id: 'edulution-mdm/benutzer',
          label: 'Benutzer',
          // Manages Relution accounts, so it is an admin topic although the MDM category is not.
          customProps: { audience: 'admin' },
        },
      ],
    },
    {
      type: 'category',
      label: 'edulution FileProxy',
      collapsed: true,
      // No `audience` here because the Dateien app inside is for everyone; only its configuration and the FileProxy
      // branch are admin topics.
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
          // Even the overview covers architecture and installation, so the whole branch is hidden for end users.
          customProps: { audience: 'admin' },
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
