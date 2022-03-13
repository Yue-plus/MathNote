// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MathNote',
  tagline: '只要学不死，就往死里学！',
  url: 'https://Math.Note.Yue.Zone',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Yue-plus',
  projectName: 'MathNote',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {sidebarPath: require.resolve('./sidebars.js'), editUrl: 'https://github.com/Yue-plus/MathNote'},
        blog: {showReadingTime: true, editUrl: 'https://github.com/Yue-plus/MathNote'},
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'MathNote',
        logo: {alt: 'My Site Logo', src: 'img/logo.svg'},
        items: [
          {type: 'doc', docId: 'start', position: 'left', label: '开始项目'},
          // {to: '/blog', label: 'Blog', position: 'left'},
          {href: 'https://www.geogebra.org/', label: 'GeoGebra - 数学教学软件', position: 'right'},
          {href: 'https://github.com/Yue-plus/MathNote', label: 'GitHub', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '笔记',
            items: [
              {label: 'NetNote', to: 'https://note.yueplus.ink/'},
            ],
          },
        ],
        // TODO: 域名备案
        // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
