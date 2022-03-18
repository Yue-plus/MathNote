---
title: 开始项目
---

# 开始项目

## 开始之前

**可参考 NetNote 的 [开始之前](https://note.yueplus.ink/start/start.html)**

- 拥有一个 [GitHub](https://github.com/) 账号，并 [配置好 SSH Key](https://note.yueplus.ink/start/start.html#github)
- 在本地 [安装并配置好 Git](https://note.yueplus.ink/start/start.html#%E6%9C%AC%E5%9C%B0%E5%AE%89%E8%A3%85-git)
- 在本地 [安装并配置好 Node.JS](https://note.yueplus.ink/start/start.html#%E6%9C%AC%E5%9C%B0%E5%AE%89%E8%A3%85-nodejs)
- 在本地 [安装并配置好 Yarn](https://note.yueplus.ink/start/start.html#%E6%9C%AC%E5%9C%B0%E5%AE%89%E8%A3%85-yarn)
- 推荐使用 [Visual Studio Code](https://note.yueplus.ink/start/use_VScode/#%E4%B8%8B%E8%BD%BD%E5%AE%89%E8%A3%85)
  代码编辑器
  + 推荐安装 [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
    插件

## 拉取项目

前往 [MathNote](https://github.com/Yue-plus/MathNote) Fork 本项目，然后找一个合适的路径，执行以下指令：

```bash
# GitHub 克隆仓库（注意替换为自己的用户名：<username>）
git clone git@github.com:<username>/MathNote.git

# 切换目录
cd MathNote

# 安装依赖
yarn
```

## 运行项目

在项目路径下执行：

```bash
yarn start
```

然后通过浏览器访问 <http://localhost:3000/>

## 参与项目

本项目使用了 [Docusaurus](https://docusaurus.io/zh-CN/) 构建，使用
[Markdown](https://note.yueplus.ink/start/markdown.html) 与
[KaTex](https://katex.org/docs/supported.html) 编写文档。