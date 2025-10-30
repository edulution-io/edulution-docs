import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

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
          id: 'edulution-ui/installation/voraussetzungen',
          label: 'Voraussetzungen',
        },
        {
          type: 'doc',
          id: 'edulution-ui/installation/einrichtung',
          label: 'Installation in 10 Minuten',
        },
        {
          type: 'doc',
          id: 'edulution-ui/configure-lmn-server/configure_lmn-server',
          label: 'Linuxmuster verbinden',
        },
      ],
    },
    {
      type: 'category',
      label: 'edulution UI',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Installation',
          collapsed: true,
          items: [
            'edulution-ui/installation/voraussetzungen',
            'edulution-ui/installation/einrichtung',
            'edulution-ui/installation/installation',
            'edulution-ui/installation/ssl_und_reverse_proxy',
            'edulution-ui/configure-lmn-server/configure_lmn-server',
          ],
        },
        {
          type: 'category',
          label: 'Nutzerhandbuch',
          collapsed: false,
          items: [
            'edulution-ui/benutzer/mein-profil',
            'edulution-ui/features/dashboard',
            'edulution-ui/features/dateien',
            'edulution-ui/features/klassenzimmer',
            'edulution-ui/features/konferenzen',
            'edulution-ui/features/whiteboard',
            'edulution-ui/features/app-store',
            'edulution-ui/features/impressum-datenschutz',
            'edulution-ui/features/ressourcen-bibliothek',
            'edulution-ui/features/mobile-app',
            'edulution-ui/features/sicherheit',
            'edulution-ui/features/weitere-features',
          ],
        },
        {
          type: 'category',
          label: 'Administration',
          collapsed: true,
          items: [
            'edulution-ui/administration/administration',
            'edulution-ui/administration/einstellungen',
            'edulution-ui/administration/experten-tipps',
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
        description: 'E-Mail-Lösung basierend auf Mailcow - vollständig integriert mit edulution UI und Linuxmuster.',
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
              id: 'edulution-mail/verteilerlisten',
              label: 'Verteilerlisten',
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
