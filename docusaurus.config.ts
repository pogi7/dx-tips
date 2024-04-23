import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'OML Vision Docs',
  tagline: 'A Visual Studio Code extension providing user interface viewpoints for Ontological Modeling Language (OML) models',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://opencaesar.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/dx-tips/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'opencaesar', // Usually your GitHub org/user name.
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
            'https://github.com/opencaesar/dx-tips/tree/master/',
        },
        blog: {
          // https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog
          path: 'changelog',
          routeBasePath: 'changelog',
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/opencaesar/dx-tips/tree/master/',
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
        alt: 'OML Vision Logo',
        src: 'img/vision480x96.png',
      },
      items: [
        {href: '/', label: 'Home', position: 'left'},
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {to: '/changelog', label: 'Changelog', position: 'left'},
        {
          type: 'docsVersionDropdown',
          position: 'right'
        },
        {href: 'https://www.opencaesar.io/', label: 'openCAESAR', position: 'right'},
        {
          href: 'https://github.com/opencaesar/dx-tips',
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
              label: 'Get Started',
              to: '/docs/intro',
            },
            {
              label: 'API Documentation',
              to: '/docs/category/api-documentation',
            },
            {
              label: 'Change Log',
              to: '/changelog',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/hashtag/openCAESAR?src=hashtag_click',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/search/results/all/?keywords=%23opencaesar',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/@melaasar/featured',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'openCAESAR',
              href: 'https://www.opencaesar.io/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/opencaesar/dx-tips',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} California Institute of Technology. Government sponsorship acknowledged. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
