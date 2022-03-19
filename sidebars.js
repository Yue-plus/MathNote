/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  startSidebar: [
    {type: 'doc', id: 'start', label: '开始项目'},
    {type: 'link', label: 'GitHub 使用方法', href: 'https://note.yueplus.ink/start/use_GitHub/'},
    {type: 'link', label: 'VSCode 使用方法', href: 'https://note.yueplus.ink/start/use_VScode/'},
    {type: 'link', label: 'IDEA 使用方法', href: 'https://note.yueplus.ink/start/use_IDEA/'},
    {type: 'link', label: 'Markdown 语法', href: 'https://note.yueplus.ink/start/markdown.html'},
    {type: 'link', label: 'YAML 语法', href: 'https://note.yueplus.ink/start/yaml.html'},
    {type: 'link', label: 'KaTex 语法', href: 'https://katex.org/docs/supported.html'}
  ],
  '初中': [
    {
      type: 'category',
      label: '反比例函数',
      items: ['初中/反比例函数/反比例函数', '初中/反比例函数/实际问题与反比例函数']
    },
    {
      type: 'category',
      label: '相似',
      items: ['初中/相似/图形的相似', '初中/相似/相似三角形', '初中/相似/位似']
    },
    {
      type: 'category',
      label: '锐角三角函数',
      items: ['初中/锐角三角函数/锐角三角函数', '初中/锐角三角函数/解直角三角形及其应用']
    },
    {
      type: 'category',
      label: '投影与视图',
      items: ['初中/投影与视图/投影', '初中/投影与视图/三视图', '初中/投影与视图/制作立体模型']
    }
  ],
  '高中': [
    {
      type: 'category',
      label: '集合',
      items: ['高中/集合/集合及其运算', '高中/集合/充要条件', {
        type: 'link',
        label: '集合论 - 维基百科',
        href: 'https://zh.wikipedia.org/wiki/%E9%9B%86%E5%90%88%E8%AE%BA'
      }]
    },
    {
      type: 'category',
      label: '不等式',
      items: ['高中/不等式/不等式的基本性质', '高中/不等式/不等式的解法']
    },
    {
      type: 'category',
      label: '函数',
      items: ['高中/函数/函数', '高中/函数/一次函数与二次函数']
    },
    {
      type: 'category',
      label: '数列',
      items: ['高中/数列/数列的概念', '高中/数列/等差数列']
    }
  ]
};

module.exports = sidebars;
