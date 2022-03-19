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
      label: '21. 一元二次方程',
      items: [
        '初中/一元二次方程/一元二次方程',
        '初中/一元二次方程/解一元二次方程',
        '初中/一元二次方程/实际问题与一元二次方程'
      ]
    },
    {
      type: 'category',
      label: '22. 二次函数',
      items: [
        '初中/二次函数/二次函数的图象和性质',
        '初中/二次函数/二次函数与一元二次方程',
        '初中/二次函数/实际问题与二次函数'
      ]
    },
    {
      type: 'category',
      label: '23. 旋转',
      items: ['初中/旋转/图形的旋转', '初中/旋转/中心对称', '初中/旋转/图案设计']
    },
    {
      type: 'category',
      label: '24. 圆',
      items: [
        '初中/圆/圆的有关性质',
        '初中/圆/点和圆、直线和圆的位置关系',
        '初中/圆/正多边形和圆',
        '初中/圆/弧长和扇形面积'
      ]
    },
    {
      type: 'category',
      label: '25. 概率初步',
      items: ['初中/概率初步/随机事件与概率', '初中/概率初步/用列举法求概率', '初中/概率初步/用频率估计概率']
    },
    {
      type: 'category',
      label: '26. 反比例函数',
      items: ['初中/反比例函数/反比例函数', '初中/反比例函数/实际问题与反比例函数']
    },
    {
      type: 'category',
      label: '27. 相似',
      items: ['初中/相似/图形的相似', '初中/相似/相似三角形', '初中/相似/位似']
    },
    {
      type: 'category',
      label: '28. 锐角三角函数',
      items: ['初中/锐角三角函数/锐角三角函数', '初中/锐角三角函数/解直角三角形及其应用']
    },
    {
      type: 'category',
      label: '29. 投影与视图',
      items: ['初中/投影与视图/投影', '初中/投影与视图/三视图', '初中/投影与视图/制作立体模型']
    }
  ],
  '高中': [
    {
      type: 'category',
      label: '1. 集合',
      items: ['高中/集合/集合及其运算', '高中/集合/充要条件', {
        type: 'link',
        label: '集合论 - 维基百科',
        href: 'https://zh.wikipedia.org/wiki/%E9%9B%86%E5%90%88%E8%AE%BA'
      }]
    },
    {
      type: 'category',
      label: '2. 不等式',
      items: ['高中/不等式/不等式的基本性质', '高中/不等式/不等式的解法']
    },
    {
      type: 'category',
      label: '3. 函数',
      items: ['高中/函数/函数', '高中/函数/一次函数与二次函数']
    },
    {
      type: 'category',
      label: '6. 数列',
      items: ['高中/数列/数列的概念', '高中/数列/等差数列']
    }
  ]
};

module.exports = sidebars;
