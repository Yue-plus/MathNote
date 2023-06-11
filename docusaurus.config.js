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
          rehypePlugins: [katex, { strict: false }],
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
          {
            type: 'dropdown',
            label: '开始项目',
            position: 'left',
            items: [
              {type: 'doc', label: '开始项目', docId: 'start'},
              {label: 'GitHub 使用方法', href: 'https://note.yueplus.ink/start/use_GitHub/'},
              {label: 'VSCode 使用方法', href: 'https://note.yueplus.ink/start/use_VScode/'},
              {label: 'IDEA 使用方法', href: 'https://note.yueplus.ink/start/use_IDEA/'},
              {label: 'Markdown 语法', href: 'https://note.yueplus.ink/start/markdown.html'},
              {label: 'YAML 语法', href: 'https://note.yueplus.ink/start/yaml.html'},
              {label: 'KaTex 语法', href: 'https://katex.org/docs/supported.html'}
            ]
          },
          {
            type: 'dropdown',
            label: '初中',
            position: 'left',
            items: [
              {type: 'doc', label: '整式的乘法与因式分解', docId: '初中/整式的乘法与因式分解/整式的乘法'}
            ]
          },
          {
            type: 'dropdown',
            label: '高中',
            position: 'left',
            items: [
              {type: 'doc', label: '01. 集合', docId: '高中/集合/集合及其运算'},
              {type: 'doc', label: '02. 不等式', docId: '高中/不等式/不等式的基本性质'},
              {type: 'doc', label: '03. 函数', docId: '高中/函数/函数'},
              {type: 'doc', label: '04. 指数函数与对数函数', docId: '高中/指数函数与对数函数/指数与指数函数'},
              {type: 'doc', label: '05. 三角函数', docId: '高中/三角函数/角的概念的推广及其度量'},
              {type: 'doc', label: '06. 数列', docId: '高中/数列/数列的概念'},
              {type: 'doc', label: '07. 平面向量', docId: '高中/平面向量/向量的加减运算'},
              {type: 'doc', label: '08. 直线和圆的方程', docId: '高中/直线和圆的方程/坐标系中的基本公式'},
              {type: 'doc', label: '09. 立体几何', docId: '高中/立体几何/空间中平面的基本性质'},
              {type: 'doc', label: '10. 概率与统计初步', docId: '高中/概率与统计初步/计数原理'},
            ]
          },
          { type: 'doc', label: '高等数学', docId: '高等数学/导数与微分/函数的求导法则' },
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
