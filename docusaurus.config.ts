import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import tagPlugin from './src/rehype/tagPlugin';

const config: Config = {
  title: 'edulution',
  tagline: 'Dokumentation',
  favicon: '_static/icon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.edulution.io',
  baseUrl: '/',

  organizationName: 'edulution-io',
  projectName: 'edulution-docs',

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',

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
        // Keeps URLs from earlier site layouts alive, mostly via prefix rules so a new page gets its redirects
        // automatically. A rule must never yield a path that is a real page again, or the build fails.
        createRedirects(existingPath: string) {
          const RENAMED: Record<string, string[]> = {
            '/docs/edulution-mail/': ['/docs/category/edulution-mail'],
            '/docs/edulution-mail/migration': ['/docs/edulution-mail/user_mail_migration'],
            '/docs/edulution-mail/konfiguration/migration-einrichten': ['/docs/edulution-mail/admin_mail_migration'],
            '/docs/edulution-mail/konfiguration/mailformate': ['/docs/edulution-mail/benutzer_mailformate'],

            '/docs/edulution-app/': ['/docs/category/edulution-app'],
            '/docs/edulution-app/mobile-ansicht': [
              '/docs/edulution-plattform/apps/native-apps/mobile-app',
              '/docs/edulution-plattform/features/mobile-app',
            ],

            '/docs/edulution-server/installation': [
              '/docs/edulution-plattform/installation/configure_lmn-server',
              '/docs/edulution-plattform/configure-lmn-server/configure_lmn-server',
            ],
            '/docs/edulution-server/linuxmuster': [
              '/docs/edulution-plattform/konfiguration/linuxmuster',
              '/docs/edulution-plattform/administration/linuxmuster',
            ],
            '/docs/edulution-server/benutzerverwaltung': [
              '/docs/edulution-plattform/konfiguration/benutzerverwaltung',
              '/docs/edulution-plattform/administration/benutzerverwaltung',
            ],

            '/docs/edulution-satellite/verwaltung': [
              '/docs/edulution-plattform/konfiguration/satelliten',
              '/docs/edulution-plattform/administration/satelliten',
            ],

            '/docs/edulution-mdm/': [
              '/docs/edulution-plattform/apps/mdm',
              '/docs/edulution-plattform/features/mdm',
            ],

            '/docs/edulution-fileproxy/dateien/konfiguration/dokumenten-editor': [
              '/docs/edulution-fileproxy/dateien/konfiguration/onlyoffice',
              '/docs/edulution-fileproxy/dateien/konfiguration/collabora',
              '/docs/edulution-fileproxy/dateien/konfiguration/eurooffice',
              '/docs/edulution-plattform/apps/dateien/konfiguration/onlyoffice',
              '/docs/edulution-plattform/apps/dateien/konfiguration/collabora',
              '/docs/edulution-plattform/apps/dateien/konfiguration/eurooffice',
              '/docs/edulution-onlyoffice/',
              '/docs/edulution-collabora/',
              '/docs/edulution-eurooffice/',
              '/docs/category/edulution-onlyoffice',
              '/docs/category/edulution-collabora',
              '/docs/category/edulution-eurooffice',
            ],
            '/docs/edulution-fileproxy/dateien/goodnotes': ['/docs/edulution-plattform/features/goodnotes'],
            // These pages moved into konfiguration/, which the /docs/edulution-fileproxy/ prefix rule does not
            // reflect, so both old paths are listed explicitly.
            '/docs/edulution-fileproxy/konfiguration/package-server': [
              '/docs/edulution-fileproxy/package-server',
              '/docs/edulution-plattform/apps/dateien/konfiguration/fileproxy/package-server',
            ],
            '/docs/edulution-fileproxy/konfiguration/installation': [
              '/docs/edulution-fileproxy/installation',
              '/docs/edulution-plattform/apps/dateien/konfiguration/fileproxy/installation',
            ],
            '/docs/edulution-fileproxy/konfiguration/traefik-config': [
              '/docs/edulution-fileproxy/traefik-config',
              '/docs/edulution-plattform/apps/dateien/konfiguration/fileproxy/traefik-config',
            ],
            '/docs/edulution-fileproxy/konfiguration/ui-config': [
              '/docs/edulution-fileproxy/ui-config',
              '/docs/edulution-plattform/apps/dateien/konfiguration/fileproxy/ui-config',
            ],
            '/docs/edulution-fileproxy/konfiguration/wiki-infrastruktur': [
              '/docs/edulution-fileproxy/wiki-infrastruktur',
              '/docs/edulution-plattform/apps/dateien/konfiguration/fileproxy/wiki-infrastruktur',
            ],
            // The old single page was split into subpages, so external anchor links land at the top of the
            // overview instead of at their section.
            '/docs/edulution-plattform/uebersicht/benutzereinstellungen/': [
              '/docs/edulution-plattform/erste-schritte/mein-profil',
              '/docs/edulution-plattform/features/mein-profil',
              '/docs/edulution-plattform/benutzer/mein-profil',
            ],
            '/docs/edulution-plattform/uebersicht/benutzereinstellungen/vpn-zugang': [
              '/docs/edulution-plattform/apps/vpn-zugang',
              '/docs/edulution-plattform/features/vpn-zugang',
              '/docs/edulution-plattform/uebersicht/benutzereinstellungen/vpn-zugang',
            ],
            '/docs/edulution-plattform/uebersicht/benutzereinstellungen/sicherheit': [
              '/docs/edulution-plattform/features/sicherheit',
              '/docs/edulution-plattform/apps/native-apps/sicherheit',
            ],
            '/docs/edulution-plattform/uebersicht/navigation': [
              '/docs/edulution-plattform/features/benachrichtigungen',
              '/docs/edulution-plattform/apps/native-apps/benachrichtigungen',
              '/docs/edulution-plattform/uebersicht/benutzereinstellungen/schnellzugriffe',
              '/docs/edulution-plattform/erste-schritte/benutzereinstellungen/schnellzugriffe',
            ],
            '/docs/edulution-plattform/uebersicht/benutzereinstellungen/meine-kinder-eltern': [
              '/docs/edulution-plattform/features/eltern-schueler-zuordnung',
              '/docs/edulution-plattform/apps/native-apps/eltern-schueler-zuordnung',
            ],
            '/docs/edulution-plattform/apps/native-apps/konferenzen': [
              '/docs/edulution-plattform/apps/konferenzen',
            ],
            '/docs/edulution-plattform/apps/app-store': [
              '/docs/edulution-plattform/apps/native-apps/app-store',
            ],
            '/docs/edulution-plattform/apps/eingebettete-app': [
              '/docs/edulution-plattform/apps/native-apps/eingebettete-app',
            ],
            '/docs/edulution-plattform/konfiguration/impressum-datenschutz': [
              '/docs/edulution-plattform/apps/native-apps/impressum-datenschutz',
              '/docs/edulution-plattform/features/impressum-datenschutz',
            ],
            '/docs/edulution-plattform/uebersicht/benutzereinstellungen/benutzeroberflaeche': [
              '/docs/edulution-plattform/apps/native-apps/weitere-features',
              '/docs/edulution-plattform/features/weitere-features',
            ],
            '/docs/edulution-plattform/konfiguration/passwort-aenderung': [
              '/docs/edulution-plattform/konfiguration/experten-tipps',
              '/docs/edulution-plattform/administration/experten-tipps',
            ],
          };

          const PREFIXES: [newPrefix: string, oldPrefix: string][] = [
            ['/docs/edulution-mail/konfiguration/', '/docs/edulution-plattform/apps/e-mail/konfiguration/'],
            ['/docs/edulution-mail/konfiguration/', '/docs/edulution-mail/'],
            ['/docs/edulution-mail/clients/', '/docs/edulution-plattform/apps/e-mail/clients/'],
            ['/docs/edulution-mail/', '/docs/edulution-plattform/apps/e-mail/'],

            ['/docs/edulution-lms/installation/', '/docs/edulution-plattform/apps/lernmanagement/installation/'],
            ['/docs/edulution-lms/installation/', '/docs/edulution-moodle/installation/'],
            [
              '/docs/edulution-lms/konfiguration/administration/',
              '/docs/edulution-plattform/apps/lernmanagement/konfiguration/administration/',
            ],
            ['/docs/edulution-lms/konfiguration/administration/', '/docs/edulution-moodle/administration/'],
            ['/docs/edulution-lms/konfiguration/', '/docs/edulution-plattform/apps/lernmanagement/konfiguration/'],
            ['/docs/edulution-lms/konfiguration/', '/docs/edulution-moodle/konfiguration/'],
            ['/docs/edulution-lms/', '/docs/edulution-plattform/apps/lernmanagement/'],
            ['/docs/edulution-lms/', '/docs/edulution-moodle/'],

            // FileProxy and Satellite had today's URLs before the single edulution-plattform root, so only
            // that root's paths need rules.
            ['/docs/edulution-fileproxy/dateien/', '/docs/edulution-plattform/apps/dateien/'],
            ['/docs/edulution-fileproxy/dateien/', '/docs/edulution-plattform/features/dateien/'],
            ['/docs/edulution-fileproxy/', '/docs/edulution-plattform/apps/dateien/konfiguration/fileproxy/'],
            ['/docs/edulution-satellite/', '/docs/edulution-plattform/apps/satellite/'],

            ['/docs/edulution-plattform/uebersicht/', '/docs/edulution-plattform/erste-schritte/'],
            ['/docs/edulution-plattform/uebersicht/', '/docs/edulution-plattform/features/'],
            ['/docs/edulution-plattform/konfiguration/anbindungen/', '/docs/anbindungen/'],
            ['/docs/edulution-plattform/konfiguration/upgrade/', '/docs/edulution-plattform/upgrade/'],
            ['/docs/edulution-plattform/konfiguration/', '/docs/edulution-plattform/administration/'],
            ['/docs/edulution-plattform/apps/native-apps/', '/docs/edulution-plattform/features/'],
            ['/docs/edulution-plattform/apps/', '/docs/edulution-plattform/features/'],
          ];

          // Only the most specific matching prefix reflects the actual move; a shorter one would invent an
          // old URL that never existed.
          const matching = PREFIXES.filter(([to]) => existingPath.startsWith(to));
          const longest = Math.max(0, ...matching.map(([to]) => to.length));

          const from = [
            ...(RENAMED[existingPath] ?? []),
            ...matching.filter(([to]) => to.length === longest).map(([to, old]) => old + existingPath.slice(to.length)),
          ];

          // Every old URL under /docs/edulution-plattform/ also existed under its former name /docs/edulution-ui/.
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
        // Deliberately no `ignoreCssSelectors`: a hit in a section hidden for the chosen role is revealed on
        // arrival (see HiddenContentSync in AudienceContext.tsx), so audience-specific content stays searchable.
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
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'edulution Logo',
        src: '_static/edulution_docs_navbar_light.png',
        srcDark: '_static/edulution_docs_navbar_dark.png',
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
              to: '/docs/edulution-plattform/uebersicht/navigation',
            },
            {
              label: 'edulution Mail',
              to: '/docs/edulution-mail/',
            },
            {
              label: 'edulution App',
              to: '/docs/edulution-app/',
            },
            {
              label: 'edulution Satellite',
              to: '/docs/edulution-satellite/',
            },
            {
              label: 'Dokumenten-Editor',
              to: '/docs/edulution-fileproxy/dateien/konfiguration/dokumenten-editor',
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
              to: '/docs/edulution-mail/konfiguration/installation',
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
