// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const math = require('remark-math');
const katex = require('rehype-katex');

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
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Yue-plus/MathNote',
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {showReadingTime: true, editUrl: 'https://github.com/Yue-plus/MathNote'},
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'MathNote',
        logo: {alt: 'My Site Logo', src: 'img/logo.svg'},
        items: [
          {type: 'doc', docId: 'start', position: 'left', label: '开始项目'},
          {type: 'doc', docId: 'math/集合/集合及其运算', position: 'left', label: '数学'},
          // {to: '/blog', label: 'Blog', position: 'left'},
          {href: 'https://note.yueplus.ink/', label: 'NetNote', position: 'right'},
          {href: 'https://www.geogebra.org/', label: 'GeoGebra - 数学教学软件', position: 'right'},
          {href: 'https://github.com/Yue-plus/MathNote', label: 'GitHub', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: '笔记',
        //     items: [
        //       {label: 'NetNote', to: 'https://note.yueplus.ink/'},
        //     ],
        //   },
        // ],
        // TODO: 域名备案
        copyright: `<a target="_blank" rel="license" href="//creativecommons.org/licenses/by-nc-sa/4.0/deed.zh"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />本作品采用<a target="_blank" rel="license" href="//creativecommons.org/licenses/by-nc-sa/4.0/deed.zh">知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议</a>进行许可。`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [
    ['@docusaurus/plugin-pwa', {
      debug: true,
      offlineModeActivationStrategies: [
        'appInstalled',
        'standalone',
        'queryString',
      ],
      pwaHead: [
        {tagName: 'link', rel: 'icon', href: '/img/docusaurus.png'},
        {tagName: 'link', rel: 'manifest', href: '/manifest.json'},
        {tagName: 'meta', name: 'theme-color', content: 'rgb(37, 194, 160)',},
      ]
    }],
  ]
};

module.exports = config;
