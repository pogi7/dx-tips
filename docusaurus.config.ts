import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Developer Experience Tips',
  tagline: "A Hitchhiker's Guide to Pleasant and Effective DX",
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://pogi7.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/dx-tips/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'pogi7', // Usually your GitHub org/user name.
  projectName: 'dx-tips', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/pogi7/dx-tips/tree/main/',
        },
        blog: {
          // https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog
          path: 'changelog',
          routeBasePath: 'changelog',
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/pogi7/dx-tips/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      logo: {
        alt: 'DX Tips',
        src: './img/dx-icon.png',
      },
      items: [
        {href: '/', label: 'Home', position: 'left'},
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tips',
        },
        {to: '/changelog', label: 'Changelog', position: 'left'},
        {
          type: 'docsVersionDropdown',
          position: 'right'
        },
        {
          href: 'https://github.com/pogi7/dx-tips',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Basic Tips',
              to: '/docs/intro',
            },
            {
              label: 'Advanced Tips',
              to: '/docs/category/advanced-tips',
            },
            {
              label: 'Change Log',
              to: '/changelog',
            }
          ],
        },
        {
          title: 'Repo',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/pogi7/dx-tips',
            },
          ],
        },
      ],
      copyright: `DISCLAIMER: All information contained are the author's opinions.  Developer experience is extremely subjective so take all information with a grain of salt.  Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
