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
        // Drei Umbauten liegen hinter uns, und alle drei sollen alte Links
        // (Lesezeichen, Forenbeitraege, externe Verweise) am Leben lassen:
        //
        //   L1. Ein Bereich je Produkt (/docs/edulution-mail/,
        //       /docs/edulution-moodle/ …) neben /docs/edulution-ui/, das
        //       spaeter /docs/edulution-plattform/ hiess.
        //   L2. Ein einziger Wurzelbereich: alle Produkte wanderten nach
        //       edulution-plattform/apps/, aus administration/ wurde
        //       konfiguration/.
        //   L3. Zurueck zu einem Bereich je Komponente – denselben neun,
        //       die auf edulution.io als Produktkarten stehen.
        //
        // `createRedirects` bekommt den *neuen* Pfad und liefert die alten.
        // Weil die Umzuege im Wesentlichen Praefix-Ersetzungen waren,
        // genuegen Regeln statt einer Tabelle mit hundert Zeilen — eine neue
        // Seite in einer Komponente bekommt ihre Weiterleitungen damit
        // automatisch.
        //
        // Achtung bei L1: einige der damaligen Adressen sind heute wieder
        // echte Seiten (/docs/edulution-mail/, /docs/edulution-satellite/,
        // /docs/edulution-fileproxy/). Wo alt und neu zusammenfallen, filtert
        // die Funktion die Regel unten selbst heraus; wo sie sich nur
        // ueberschneiden — /docs/edulution-mail/installation gegen
        // /docs/edulution-mail/konfiguration/installation — muss die Regel
        // den Unterschied treffen, sonst entsteht eine Weiterleitung auf
        // eine existierende Seite und der Build bricht ab.
        createRedirects(existingPath: string) {
          // Einzelne Seiten, die beim Umzug auch den Namen gewechselt haben.
          const RENAMED: Record<string, string[]> = {
            // --- edulution Mail ---------------------------------------
            '/docs/edulution-mail/': ['/docs/category/edulution-mail'],
            '/docs/edulution-mail/migration': ['/docs/edulution-mail/user_mail_migration'],
            '/docs/edulution-mail/konfiguration/migration-einrichten': ['/docs/edulution-mail/admin_mail_migration'],
            '/docs/edulution-mail/konfiguration/mailformate': ['/docs/edulution-mail/benutzer_mailformate'],

            // --- edulution App ----------------------------------------
            '/docs/edulution-app/': ['/docs/category/edulution-app'],
            // Die mobile Ansicht lag als native App in der Plattform.
            '/docs/edulution-app/mobile-ansicht': [
              '/docs/edulution-plattform/apps/native-apps/mobile-app',
              '/docs/edulution-plattform/features/mobile-app',
            ],

            // --- edulution Server -------------------------------------
            // Drei Seiten aus der Plattform: die Server-Vorbereitung aus der
            // Installation, die Schulserver-App und die Benutzerverwaltung
            // aus der Konfiguration.
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

            // --- edulution Satellite ----------------------------------
            '/docs/edulution-satellite/verwaltung': [
              '/docs/edulution-plattform/konfiguration/satelliten',
              '/docs/edulution-plattform/administration/satelliten',
            ],

            // --- edulution MDM ----------------------------------------
            '/docs/edulution-mdm/': [
              '/docs/edulution-plattform/apps/mdm',
              '/docs/edulution-plattform/features/mdm',
            ],

            // --- in der Plattform verbliebene Seiten -------------------
            '/docs/edulution-fileproxy/dateien/konfiguration/onlyoffice': [
              '/docs/edulution-onlyoffice/',
              '/docs/category/edulution-onlyoffice',
            ],
            '/docs/edulution-fileproxy/dateien/konfiguration/collabora': [
              '/docs/edulution-collabora/',
              '/docs/category/edulution-collabora',
            ],
            '/docs/edulution-fileproxy/dateien/konfiguration/eurooffice': [
              '/docs/edulution-eurooffice/',
              '/docs/category/edulution-eurooffice',
            ],
            '/docs/edulution-fileproxy/dateien/goodnotes': ['/docs/edulution-plattform/features/goodnotes'],
            // Die Benutzereinstellungen sind in Unterseiten zerlegt; die
            // alte Sammelseite fuehrt auf die Uebersicht. Anker-Links von
            // aussen landen damit oben statt am Abschnitt - der einzige
            // Verlust, den der Umbau kostet.
            '/docs/edulution-plattform/erste-schritte/benutzereinstellungen/': [
              '/docs/edulution-plattform/erste-schritte/mein-profil',
              '/docs/edulution-plattform/benutzer/mein-profil',
            ],
            // Die beiden Sicherheits-Seiten sind zusammengefuehrt: der
            // Dialog und die Verfahren dahinter standen doppelt da. Beide
            // Alt-Pfade fuehren auf die Seite in den Benutzereinstellungen.
            '/docs/edulution-plattform/erste-schritte/benutzereinstellungen/sicherheit': [
              '/docs/edulution-plattform/features/sicherheit',
              '/docs/edulution-plattform/apps/native-apps/sicherheit',
            ],
            // App-Store raus aus der Liste der nativen Apps, darueber.
            '/docs/edulution-plattform/apps/app-store': [
              '/docs/edulution-plattform/apps/native-apps/app-store',
            ],
            // Impressum & Datenschutz ist eine Konfigurationsaufgabe.
            '/docs/edulution-plattform/konfiguration/impressum-datenschutz': [
              '/docs/edulution-plattform/apps/native-apps/impressum-datenschutz',
              '/docs/edulution-plattform/features/impressum-datenschutz',
            ],
            // "Weitere Features" ist aufgeloest: Sprache und KI-Chat stehen
            // laengst ausfuehrlicher in den Benutzereinstellungen und im Chat.
            '/docs/edulution-plattform/erste-schritte/benutzereinstellungen/benutzeroberflaeche': [
              '/docs/edulution-plattform/apps/native-apps/weitere-features',
              '/docs/edulution-plattform/features/weitere-features',
            ],
            '/docs/edulution-plattform/konfiguration/passwort-aenderung': [
              '/docs/edulution-plattform/konfiguration/experten-tipps',
              '/docs/edulution-plattform/administration/experten-tipps',
            ],
          };

          const PREFIXES: [string, string][] = [
            // neu                                        // alt
            // --- edulution Mail ---------------------------------------
            ['/docs/edulution-mail/konfiguration/', '/docs/edulution-plattform/apps/e-mail/konfiguration/'],
            ['/docs/edulution-mail/konfiguration/', '/docs/edulution-mail/'],
            ['/docs/edulution-mail/clients/', '/docs/edulution-plattform/apps/e-mail/clients/'],
            ['/docs/edulution-mail/', '/docs/edulution-plattform/apps/e-mail/'],

            // --- edulution LMS ----------------------------------------
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

            // --- edulution FileProxy und Satellite --------------------
            // L1 hiess wie L3, deshalb genuegt der Zwischenschritt.
            // Die Dateien-App ist in den FileProxy-Bereich gezogen: die App
            // und der Dienst, der ihre Netzlaufwerke bereitstellt, gehoeren
            // zusammen. L1 lag unter features/, L2 unter apps/.
            ['/docs/edulution-fileproxy/dateien/', '/docs/edulution-plattform/apps/dateien/'],
            ['/docs/edulution-fileproxy/dateien/', '/docs/edulution-plattform/features/dateien/'],
            ['/docs/edulution-fileproxy/', '/docs/edulution-plattform/apps/dateien/konfiguration/fileproxy/'],
            ['/docs/edulution-satellite/', '/docs/edulution-plattform/apps/satellite/'],

            // --- edulution Plattform ----------------------------------
            ['/docs/edulution-plattform/erste-schritte/', '/docs/edulution-plattform/features/'],
            ['/docs/edulution-plattform/konfiguration/anbindungen/', '/docs/anbindungen/'],
            ['/docs/edulution-plattform/konfiguration/upgrade/', '/docs/edulution-plattform/upgrade/'],
            ['/docs/edulution-plattform/konfiguration/', '/docs/edulution-plattform/administration/'],
            ['/docs/edulution-plattform/features/', '/docs/edulution-plattform/apps/native-apps/'],
            ['/docs/edulution-plattform/apps/native-apps/', '/docs/edulution-plattform/features/'],
            ['/docs/edulution-plattform/apps/', '/docs/edulution-plattform/features/'],
          ];

          // Mehrere Regeln koennen passen - etwa konfiguration/ und
          // konfiguration/anbindungen/. Nur die spezifischste beschreibt den
          // tatsaechlichen Umzug; die kuerzere wuerde eine Alt-URL erfinden,
          // die es nie gab.
          const matching = PREFIXES.filter(([to]) => existingPath.startsWith(to));
          const longest = Math.max(0, ...matching.map(([to]) => to.length));

          const from = [
            ...(RENAMED[existingPath] ?? []),
            ...matching.filter(([to]) => to.length === longest).map(([to, old]) => old + existingPath.slice(to.length)),
          ];

          // Jede Alt-URL, die selbst unter /docs/edulution-plattform/ lag,
          // hatte zusaetzlich einen /docs/edulution-ui/-Zwilling.
          const all = [existingPath, ...from].flatMap((path) =>
            path.startsWith('/docs/edulution-plattform/')
              ? [path, path.replace('/docs/edulution-plattform/', '/docs/edulution-ui/')]
              : [path],
          );

          // /docs/edulution-plattform/features/ ist seit dem Features-Bereich
          // eine echte Seite. Die apps/-Regel oben wuerde sie als Alt-URL der
          // Apps-Uebersicht erzeugen; eine Weiterleitung auf eine bestehende
          // Seite laesst der Build nicht zu.
          const NEVER_EXISTED = new Set([
            '/docs/edulution-plattform/features/',
            '/docs/edulution-ui/features/',
          ]);

          const redirects = [...new Set(all)].filter(
            (path) => path !== existingPath && !NEVER_EXISTED.has(path),
          );
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
              label: 'edulution OnlyOffice',
              to: '/docs/edulution-fileproxy/dateien/konfiguration/onlyoffice',
            },
            {
              label: 'edulution EuroOffice',
              to: '/docs/edulution-fileproxy/dateien/konfiguration/eurooffice',
            },
            {
              label: 'edulution Collabora',
              to: '/docs/edulution-fileproxy/dateien/konfiguration/collabora',
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
