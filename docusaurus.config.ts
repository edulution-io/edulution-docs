import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import tagPlugin from './src/rehype/tagPlugin';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'edulution',
  tagline: 'Dokumentation',
  favicon: '_static/icon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true,
  },

  // Set the production url of your site here
  url: 'https://docs.edulution.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For custom domain deployment, this should be '/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'edulution-io', // Usually your GitHub org/user name.
  projectName: 'edulution-docs', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  plugins: [
    './src/plugins/tailwind-config.js',
    './src/plugins/audience.js',
    [
      '@docusaurus/plugin-client-redirects',
      {
        // Zwei Umbauten liegen hinter uns, und beide sollen alte Links
        // (Lesezeichen, Forenbeitraege, externe Verweise) am Leben lassen:
        //
        //   1. Die Umbenennung von /docs/edulution-ui/ nach
        //      /docs/edulution-plattform/.
        //   2. Der Umbau auf einen einzigen Wurzelbereich, bei dem die
        //      Produktbereiche in edulution-plattform/apps/ gewandert sind
        //      und aus administration/ die konfiguration/ wurde.
        //
        // `createRedirects` bekommt den *neuen* Pfad und liefert die alten.
        // Weil alle Umzuege reine Praefix-Ersetzungen waren, genuegen Regeln
        // statt einer Tabelle mit 60 Zeilen — eine neue Seite unter apps/
        // bekommt ihre Weiterleitung damit automatisch.
        createRedirects(existingPath: string) {
          // Einzelne Seiten, die beim Umzug auch den Namen gewechselt haben.
          const RENAMED: Record<string, string[]> = {
            '/docs/edulution-plattform/apps/e-mail/': [
              '/docs/edulution-mail',
              '/docs/category/edulution-mail',
            ],
            '/docs/edulution-plattform/apps/e-mail/migration': [
              '/docs/edulution-mail/user_mail_migration',
            ],
            '/docs/edulution-plattform/apps/e-mail/konfiguration/migration-einrichten': [
              '/docs/edulution-mail/admin_mail_migration',
            ],
            '/docs/edulution-plattform/apps/e-mail/konfiguration/mailformate': [
              '/docs/edulution-mail/benutzer_mailformate',
            ],
          };

          const PREFIXES: [string, string][] = [
            // neu                                        // alt
            ['/docs/edulution-plattform/apps/e-mail/clients/', '/docs/edulution-mail/clients/'],
            ['/docs/edulution-plattform/apps/e-mail/konfiguration/', '/docs/edulution-mail/'],
            ['/docs/edulution-plattform/apps/e-mail/auto-reply', '/docs/edulution-mail/auto-reply'],
            ['/docs/edulution-plattform/erste-schritte/mein-profil', '/docs/edulution-plattform/benutzer/mein-profil'],
            ['/docs/edulution-plattform/erste-schritte/', '/docs/edulution-plattform/features/'],
            ['/docs/edulution-plattform/installation/configure_lmn-server', '/docs/edulution-plattform/configure-lmn-server/configure_lmn-server'],
            ['/docs/edulution-plattform/konfiguration/anbindungen/', '/docs/anbindungen/'],
            ['/docs/edulution-plattform/konfiguration/upgrade/', '/docs/edulution-plattform/upgrade/'],
            ['/docs/edulution-plattform/konfiguration/', '/docs/edulution-plattform/administration/'],
            ['/docs/edulution-plattform/apps/', '/docs/edulution-plattform/features/'],
          ];

          const from = [
            ...(RENAMED[existingPath] ?? []),
            ...PREFIXES.filter(([to]) => existingPath.startsWith(to)).map(
              ([to, old]) => old + existingPath.slice(to.length),
            ),
          ];

          // Jede Alt-URL, die selbst unter /docs/edulution-plattform/ lag,
          // hatte zusaetzlich einen /docs/edulution-ui/-Zwilling.
          const all = [existingPath, ...from].flatMap((path) =>
            path.startsWith('/docs/edulution-plattform/')
              ? [path, path.replace('/docs/edulution-plattform/', '/docs/edulution-ui/')]
              : [path],
          );

          const redirects = [...new Set(all)].filter((path) => path !== existingPath);
          return redirects.length ? redirects : undefined;
        },
      },
    ],
  ],

  markdown: {
    mermaid: true,
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          breadcrumbs: true,
          rehypePlugins: [tagPlugin],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    '@docusaurus/theme-mermaid',
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['de', 'en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        docsRouteBasePath: '/docs',
        indexBlog: false,
        searchBarShortcutHint: false,
        // Bewusst kein `ignoreCssSelectors`: Ohne Rollenauswahl ist alles
        // sichtbar, ein Treffer geht also nie ins Leere. Wer eine Rolle
        // gewählt hat und über die Suche auf einen Abschnitt einer anderen
        // Zielgruppe kommt, bekommt genau diesen Abschnitt aufgedeckt
        // (siehe HiddenContentSync in AudienceContext.tsx).
      },
    ],
  ],

  themeConfig: {
    image: '_static/edulution_docs.png',
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'edulution Logo',
        src: '_static/edulution_docs.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Dokumentation',
        },
        {
          type: 'dropdown',
          label: 'Produkte',
          position: 'left',
          items: [
            {
              label: 'edulution Plattform',
              to: '/docs/edulution-plattform/erste-schritte/navigation',
            },
            {
              label: 'edulution Mail',
              to: '/docs/edulution-plattform/apps/e-mail/',
            },
            {
              label: 'edulution App',
              to: '/docs/category/edulution-app',
            },
            {
              label: 'edulution Satellite',
              to: '/docs/edulution-satellite/',
            },
            {
              label: 'edulution OnlyOffice',
              to: '/docs/category/edulution-onlyoffice',
            },
            {
              label: 'edulution EuroOffice',
              to: '/docs/category/edulution-eurooffice',
            },
            {
              label: 'edulution Collabora',
              to: '/docs/category/edulution-collabora',
            },
          ],
        },
        {
          to: '/docs/changelog',
          label: 'Changelog',
          position: 'left',
        },
        {
          type: 'custom-audienceBadge',
          position: 'right',
        },
        {
          href: 'https://edulution.io',
          label: 'Website',
          position: 'right',
        },
        {
          href: 'https://github.com/edulution-io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Dokumentation',
          items: [
            {
              label: 'edulution Plattform Installation',
              to: '/docs/edulution-plattform/installation/einrichtung',
            },
            {
              label: 'edulution Plattform Administration',
              to: '/docs/edulution-plattform/konfiguration/administration',
            },
            {
              label: 'edulution Mail',
              to: '/docs/edulution-plattform/apps/e-mail/konfiguration/installation',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Forum',
              href: 'https://ask.linuxmuster.net/c/edulution/63',
            },
            {
              label: 'Demo',
              href: 'https://demo.edulution.io',
            },
          ],
        },
        {
          title: 'Mehr',
          items: [
            {
              label: 'Website',
              href: 'https://edulution.io',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/edulution-io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} edulution.io`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'yaml', 'json', 'docker'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
