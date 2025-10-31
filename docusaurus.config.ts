import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import tagPlugin from "./src/rehype/tagPlugin";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'edulution',
  tagline: 'Dokumentation',
  favicon: '_static/icon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
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

  plugins: ['./src/plugins/tailwind-config.js'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/edulution-io/edulution-docs/tree/main/',
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
              label: 'edulution UI',
              to: '/docs/edulution-ui/installation/voraussetzungen',
            },
            {
              label: 'edulution Mail',
              to: '/docs/category/edulution-mail',
            },
            {
                label: 'edulution App',
                to: '/docs/category/edulution-app'
            },
          ],
        },
        {
          to: '/docs/changelog',
          label: 'Changelog',
          position: 'left',
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
              label: 'edulution UI Installation',
              to: '/docs/edulution-ui/installation/einrichtung',
            },
            {
              label: 'edulution UI Administration',
              to: '/docs/edulution-ui/administration/administration',
            },
            {
              label: 'edulution Mail',
              to: '/docs/edulution-mail/installation',
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
