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
  mathSidebar: [
    {
      type: 'category',
      label: '集合',
      items: ['math/集合/集合及其运算']
    },
    {
      type: 'category',
      label: '函数',
      items: ['math/函数/函数']
    }
  ]
};

module.exports = sidebars;
