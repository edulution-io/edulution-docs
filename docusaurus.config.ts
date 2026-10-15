import * as fs from 'node:fs';
import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import tagPlugin from './src/rehype/tagPlugin';
import { version } from './package.json';

/**
 * Wie viele ausgelieferte Versionen gebaut werden.
 *
 * Geschnitten wird bei jedem Release, das sind rund fuenfzehn im Jahr. Alle
 * zu bauen laesst Bauzeit und Suchindex unbegrenzt wachsen; die aelteren
 * Schnappschuesse bleiben aber im Git und koennen jederzeit wieder in den
 * Build genommen werden, indem diese Zahl steigt.
 */
const BUILT_VERSIONS = 8;

/** Alle bisher geschnittenen Versionen, neueste zuerst. Vor dem ersten Schnitt leer. */
const releasedVersions: string[] = fs.existsSync('./versions.json')
  ? (JSON.parse(fs.readFileSync('./versions.json', 'utf8')) as string[])
  : [];

/**
 * `npm start` zeigt nur die Dateien, an denen gerade gearbeitet wird – mit
 * allen Altversionen dauert der Start ein Vielfaches.
 * `DOCS_ALL_VERSIONS=true npm start`, um die Auswahl zu testen.
 *
 * Nur, wenn es ueberhaupt Versionen abzuschalten gibt: Docusaurus weist die
 * Einstellung auf einer noch unversionierten Seite zurueck.
 */
const disableVersioning =
  releasedVersions.length > 0 && process.env.NODE_ENV === 'development' && process.env.DOCS_ALL_VERSIONS !== 'true';

/**
 * Die Versionen, die dieser Lauf kennt.
 *
 * `disableVersioning` nimmt Docusaurus die geschnittenen Versionen wieder weg,
 * und jede Einstellung, die sie danach noch nennt, bricht ab – `docs:version`
 * und `npm start` laufen beide mit NODE_ENV=development, dort gibt es also nur
 * den Entwicklungsstand.
 */
const builtVersions = disableVersioning ? [] : releasedVersions;

/**
 * Der Stand aus `docs/` – also `edulution-ui:dev` – gehoert nicht ins
 * oeffentliche Portal.
 *
 * Er muss aber hinein, solange noch keine Version geschnitten ist – sonst
 * baut die Seite ohne eine einzige Version – und bei `npm start`, denn das
 * sind genau die Dateien, an denen gearbeitet wird.
 */
const includeCurrentVersion =
  process.env.DOCS_INCLUDE_NEXT === 'true' || process.env.NODE_ENV === 'development' || builtVersions.length === 0;

/**
 * `onlyIncludeVersions` darf erst gesetzt werden, wenn es ueberhaupt
 * Versionen gibt – und `current` muss mit hinein, sonst faellt die
 * Entwicklungsversion aus dem Build, auch wenn sie eingeschaltet ist.
 */
const onlyIncludeVersions = builtVersions.length
  ? [...(includeCurrentVersion ? ['current'] : []), ...builtVersions.slice(0, BUILT_VERSIONS)]
  : undefined;

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
        // The changelog is a timeline across all versions and therefore lives outside docs/; otherwise every
        // frozen version would carry its own copy, showing entries released after it.
        redirects: [{ from: '/docs/changelog', to: '/changelog' }],

        // Keeps URLs from earlier site layouts alive, mostly via prefix rules so a new page gets its redirects
        // automatically. A rule must never yield a path that is a real page again, or the build fails.
        createRedirects(existingPath: string) {
          // Only the served version at /docs/… ever had bookmarks; versioned paths (/docs/next/…, /docs/2.2.6/…)
          // are left alone. Safe because no product section starts with a digit.
          if (/^\/docs\/(next|\d)/.test(existingPath)) {
            return undefined;
          }

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

          // `docs/` ist der Stand von edulution-ui:dev und beschreibt damit
          // auch Funktionen, die noch bei niemandem angekommen sind. Im
          // oeffentlichen Portal steht deshalb nur Ausgeliefertes.
          //
          // Die CI baut zusaetzlich mit `DOCS_INCLUDE_NEXT=true`: sonst
          // pruefte `onBrokenLinks` ausgerechnet die 129 Dateien nicht mehr,
          // an denen tatsaechlich gearbeitet wird.
          includeCurrentVersion,
          // Nur, solange die Entwicklungsversion mitgebaut wird: ohne sie kennt
          // Docusaurus den Namen `current` nicht und weist jede Einstellung
          // dazu zurueck.
          versions: includeCurrentVersion
            ? {
                // Solange nichts geschnitten ist, ist der Entwicklungsstand die
                // einzige Version und liegt wie bisher unter /docs/ – sonst
                // liefen in der Zwischenzeit alle Verweise aus der Anwendung ins
                // Leere. Erst mit dem ersten Schnitt rueckt er nach /docs/next/.
                current: builtVersions.length
                  ? { label: 'Entwicklung (dev)', path: 'next', banner: 'unreleased', noIndex: true }
                  : { label: 'Entwicklung (dev)' },
              }
            : {},
          // Kein `lastVersion`: der erste Eintrag in `versions.json` ist
          // automatisch die ausgelieferte Version und liegt ohne Praefix
          // unter /docs/. Ein fest eingetragener Name waere eine Falle – er
          // laesst den Build scheitern, sobald diese Version aus dem Build
          // faellt.
          onlyIncludeVersions,

          disableVersioning,
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
        // Der Changelog und die Startseite liegen ausserhalb von docs/ und
        // waeren sonst nicht auffindbar.
        indexPages: true,
        // Eine Suche, die auf einer Seite ausserhalb von docs/ beginnt, kennt
        // keine aktive Version. Ohne diese Angabe landet sie immer in der
        // ausgelieferten Version, auch wenn der Leser eine andere gewaehlt hat.
        docsPluginIdForPreferredVersion: 'default',
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
            // `type: 'doc'` statt `to:` – der Eintrag bleibt damit in der
            // Version, die gerade gelesen wird, und faellt auf die naechste
            // Version zurueck, falls ein Schnappschuss die Seite nicht kennt.
            {
              type: 'doc',
              label: 'edulution Plattform',
              docId: 'edulution-plattform/uebersicht/navigation',
            },
            {
              type: 'doc',
              label: 'edulution Mail',
              docId: 'edulution-mail/index',
            },
            {
              type: 'doc',
              label: 'edulution App',
              docId: 'edulution-app/index',
            },
            {
              type: 'doc',
              label: 'edulution Satellite',
              docId: 'edulution-satellite/index',
            },
            {
              type: 'doc',
              label: 'Dokumenten-Editor',
              docId: 'edulution-fileproxy/dateien/konfiguration/dokumenten-editor',
            },
          ],
        },
        {
          to: '/changelog',
          label: 'Changelog',
          position: 'left',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownItemsAfter: [{ to: '/versionen', label: 'Welche Version sehe ich?' }],
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
      copyright: `Copyright © ${new Date().getFullYear()} edulution.io · v${version}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'yaml', 'json', 'docker'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
