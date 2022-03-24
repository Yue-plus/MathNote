# 开始项目

## 开始之前

**可参考 NetNote 的 [开始之前](https://note.yueplus.ink/start/start.html)**

- 拥有一个 [GitHub](https://github.com/) 账号，并 [配置好 SSH Key](https://note.yueplus.ink/start/start.html#github)
- 在本地 [安装并配置好 Git](https://note.yueplus.ink/start/start.html#%E6%9C%AC%E5%9C%B0%E5%AE%89%E8%A3%85-git)
- 在本地 [安装并配置好 Node.JS](https://note.yueplus.ink/start/start.html#%E6%9C%AC%E5%9C%B0%E5%AE%89%E8%A3%85-nodejs)
  + 在本地 [安装并配置好 Yarn](https://note.yueplus.ink/start/start.html#%E6%9C%AC%E5%9C%B0%E5%AE%89%E8%A3%85-yarn)
- 推荐使用 [Visual Studio Code](https://note.yueplus.ink/start/use_VScode/#%E4%B8%8B%E8%BD%BD%E5%AE%89%E8%A3%85)
  代码编辑器
  + 推荐安装 [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
    插件

## 拉取项目

前往 [MathNote](https://github.com/Yue-plus/MathNote) **Fork** 本项目，然后找一个合适的路径，执行以下指令：

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

新增内容请每章节推送一次，git commit 需规范填写例如（[参考历史提交](https://github.com/Yue-plus/MathNote/commits/main)）：

```text
add/update 初中/高中 章节编号 章节标题
add 高中 7.1 平面向量
```

目前主要参考 **人教版** 教材，如果有其他版本可以取并集更新上来，目录结构都可按需灵活调整。

## 附：项目结构

```text
MathNote\docs
|   start.md
|   tree.text
|   
+---2-初中
|   +---14-整式的乘法与因式分解
|   |       01-整式的乘法.md
|   |       02-乘法公式.md
|   |       03-因式分解.md
|   |       04-交叉（十字）相乘法.md
|   |       
|   +---21-一元二次方程
|   |       01-一元二次方程.md
|   |       02-解一元二次方程.md
|   |       03-实际问题与一元二次方程.md
|   |       
|   +---22-二次函数
|   |       01-二次函数的图象和性质.md
|   |       02-二次函数与一元二次方程.md
|   |       03-实际问题与二次函数.md
|   |       
|   +---23-旋转
|   |       01-图形的旋转.md
|   |       02-中心对称.md
|   |       03-图案设计.md
|   |       
|   +---24-圆
|   |       01-圆的有关性质.md
|   |       02-点和圆、直线和圆的位置关系.md
|   |       03-正多边形和圆.md
|   |       04-弧长和扇形面积.md
|   |       
|   +---25-概率初步
|   |       01-随机事件与概率.md
|   |       02-用列举法求概率.md
|   |       03-用频率估计概率.md
|   |       
|   +---26-反比例函数
|   |       01-反比例函数.md
|   |       02-实际问题与反比例函数.md
|   |       
|   +---27-相似
|   |       01-图形的相似.md
|   |       02-相似三角形.md
|   |       03-位似.md
|   |       
|   +---28-锐角三角函数
|   |       01-锐角三角函数.md
|   |       02-解直角三角形及其应用.md
|   |       
|   +---29-投影与视图
|           01-投影.md
|           02-三视图.md
|           03-制作立体模型.md
|           
+---3-高中
    +---01-集合
    |   |   01-集合及其运算.md
    |   |   02-充要条件.md
    |   |   
    |   +---img
    |           维恩图.jpg
    |           
    +---02-不等式
    |   |   01-不等式的基本性质.md
    |   |   02-不等式的解法.md
    |   |   
    |   +---img
    |           数轴.jpg
    |           数轴上的实数关系.jpg
    |           
    +---03-函数
    |   |   01-函数.md
    |   |   02-一次函数与二次函数.md
    |   |   
    |   +---img
    |           增函数与减函数.jpg
    |           
    +---06-数列
    |       01-数列的概念.md
    |       02-等差数列.md
    |       03-等比数列.md
    |       
    +---07-平面向量
            01-向量的加减运算.md
```
<!-- PS MathNote\docs> tree /f /A -->