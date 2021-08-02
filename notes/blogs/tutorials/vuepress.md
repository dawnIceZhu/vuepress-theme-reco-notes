---
title: Vue Press使用教程
date: 2021-01-30
tags:
 - vuepress
categories: 
 - 教程
sticky:
 - type: 1
---

::: tip
快速搭建VuePress, 一切以 [官方文档](https://vuepress.vuejs.org/zh/) 为准
:::

<!-- more -->

## [Vue Press](https://www.vuepress.cn/) 使用教程

### 准备事项

1. 安装 [node.js](https://nodejs.org/zh-cn/download/) | [git](https://git-scm.com/downloads) |  [yarn](https://classic.yarnpkg.com/en/docs/install#windows-stable) | [WebStorm](https://www.jetbrains.com/webstorm/download/#section=windows) 或 [vsCode](https://code.visualstudio.com/download)
2. 去 [github](https://github.com/) 创建一个项目, 并克隆到本地

### [快速上手](https://www.vuepress.cn/guide/getting-started.html)

1. 之后进入项目并对项目进行项目初始化

````sh
yarn init -y
````

2. 将 VuePress 安装为本地依赖

```sh
yarn add -D vuepress
```

3. 创建你的第一篇文档

```sh
mkdir docs && echo '# Hello VuePress' > docs/README.md
```

4. 在 `package.json` 中添加一些 [scripts](https://classic.yarnpkg.com/zh-Hans/docs/package-json#toc-scripts)

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

5. 在本地启动服务器

```sh
yarn docs:dev
```

### [默认主题配置](https://www.vuepress.cn/theme/default-theme-config.html)

默认的主题提供了一个首页（Homepage）的布局 (用于 [这个网站的主页](https://www.vuepress.cn/))。想要使用它，需要在你的根级 `README.md` 的 [YAML front matter](https://www.vuepress.cn/guide/markdown.html#front-matter) 指定 `home: true`。以下是一个如何使用的例子：

```yaml
---
home: true
# heroImage: /hero.png?raw=true
heroText: Hero 标题
tagline: Hero 副标题
actionText: 快速上手 →
actionLink: /zh/guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
  footer: MIT Licensed | Copyright © 2018-present Evan You
--- 
```

#### 设置导航栏logo

在 docs 文件夹下新建 `` .vuepress/config.js``

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    logo: '/assets/img/logo.png?raw=true', // 配置导航栏LOGO
  }
}
```

#### 设置导航栏链接

你可以通过 `themeConfig.nav` 增加一些导航栏链接:

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
      { // 设置下拉菜单
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      }
    ]
  }
}
```

#### 自动生成侧边栏

如果你希望自动生成一个仅仅包含了当前页面标题（headers）链接的侧边栏，你可以通过 `YAML front matter` 来实现：

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: 'auto'
  }
}
```

#### 最后更新时间

你可以通过 `themeConfig.lastUpdated` 选项来获取每个文件最后一次 `git` 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部：

使用命令: `` yarn add moment`` 下载 [javascript日期处理类库](http://momentjs.cn/)

```js
// .vuepress/config.js
const moment = require('moment'); // 导入moment依赖包

module.exports = {
  themeConfig: {
    lastUpdated: 'Last Updated', // string | boolean
  },
  plugins: {
    {
      '@vuepress/last-updated',
      {
        transformer: (timestamp) => moment(timestamp).format("YYYY年MM月DD日HH时MM分SS秒") // 格式: 2021年01月28日18时45分42秒
        }
      }
    }
  } 
}
```

### [SEO](https://www.vuepress.cn/config/#title)

```js
module.exports = {
  title: "dawnIceZhu's Notes", // 设置logo标题
  description: "dawnIceZhu's notes, mainly used to write some technical articles", // 设置meta描述
  head: [ // 配置head
    ['link', {rel: 'icon', href: '/assets/img/favicon.ico'}], // 设置ico图标
    ['meta', { // 设置作者
      name: 'author',
      content: "dawnIceZhu"
    }], // 添加SEO
    ['meta', { // 设置关键字
      name: 'keywords',
      content: 'dawnIceZhu的笔记, 前端面试题'
    }]
  ],
}
```

### 发布到github.io

#### 使用命令

查看文件是否指向了github

```sh
git config -l
```

![image-20210128185506793](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210128185506793.png?raw=true)

#### [修改base](https://www.vuepress.cn/config/#base)

```js
module.exports = {
  base: "/docs/", // 修改base
}
```

#### [GitHub Pages](https://www.vuepress.cn/guide/deploy.html#github-pages)

1. 在你的项目中，创建一个如下的 `deploy.sh` 文件（请自行判断去掉高亮行的注释）:

```bash
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/HelloZXB/xxx.git master:gh-pages

cd -
```

2. 在package.json中添加deploy

```json
"scripts": {
    "deploy": "bash deploy.sh"
  },
```

::: danger
windows系统下, 使用这个命令可能会导致这样一个错误 " 'bash' 不是内部或外部命令，也不是可运行的程序 "
解决方案:
.vuepress 中打开 Git Bash 输入 ./deploy.sh
:::

3. 验证 gh-pages

// 代码推送成功之后就可以在分支里面看到一个 main 分支, 还有一个 gh-pages 点击进去就可以看到上传打包好的静态文	件(图1)

![image-20210129091550792](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129091550792.png?raw=true)

点击右上角的 Settings 找到 GitHub Pages (图2), 点击Your site is published at 后面的链接, 验证是否可以成功打开, 否则重新推送

![image-20210129091848643](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129091848643.png?raw=true)

4. 设置 website, 便于他人访问

![image-20210129092233422](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129092233422.png?raw=true)

### 自定义域名

这一步建立花钱买了域名, 并且备案成功

#### 增加 CNAME

把一下注释的  echo 'www.example.com' > CNAME 打开, 修改成自己的域名

```sh
# 如果是发布到自定义域名
echo 'notes.hellozxb.com' > CNAME
```

#### DNS解析

1. 打开购买域名的官网, 之后进入控制台, 找到域名选项

![image-20210129093315004](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129093315004.png?raw=true)

2. 点击添加记录, 记录类型为CNAME, 主机记录和自定义的CNAME保持一致, 记录值是仓库指向的ip地址

![image-20210129093734739](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129093734739.png?raw=true)

确认之后, 打开 Git Bash 重新打包推送, 之后再进入 Settings 找到 GitHub Pages 然后你的域名就变为``  Your site is published at http://notes.hellozxb.com/``, 勾选 ``Enforce HTTPS``

![image-20210129100033331](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129100033331.png?raw=true)

#### 改回 base

重新进入到http://notes.hellozxb.com/, 不出意外的话, 会导致样式丢失, 需要重新修改base路径, 然后重新执行`` ./deploy.sh``

```js
// .vuepress/config.js
module.exports = {
  // base: "/docs/", 直接删除
}
```

### [PWA](https://www.vuepress.cn/plugin/official/plugin-pwa.html)

#### 更新提示, 离线访问, 更多

安装:

```bash
yarn add -D @vuepress/plugin-pwa
```

使用:

```javascript
module.exports = {
 plugins: 
   {
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "更新"
        }
      }
	}
  }
}
```

#### 配置 manifest 和 icons [进入 SimiCart 官网](https://www.simicart.com/manifest-generator.html/)

![image-20210129104346966](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129104346966.png?raw=true)

解压之后把 manifest.json文件放到 .vuepress 文件中, 新建 icons 文件夹, 把对应的图片放到里面, 并且修改 manifest.json 图片的路径, 如果对这些不是很了解, 请参看: [ [MDN docs about the Web App Manifest (opens new window)](https://developer.mozilla.org/en-US/docs/Web/Manifest)]

![image-20210129105153442](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129105153442.png?raw=true)

#### 配置 head links

```js
// 简单修改下路径
head: [
    ['link', {rel: 'manifest', href: '/manifest.json'}],
    ['meta', {name: 'theme-color', content: '#3eaf7c'}],
    ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
    ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
    ['link', {rel: 'apple-touch-icons', href: '/icons/icons-512x512.png?raw=true'}],
    ['link', {rel: 'mask-icons', href: '/icons/icons-384x384.png?raw=true', color: '#3eaf7c'}],
    ['meta', {name: 'msapplication-TileImage', content: '/icons/icons-192x192.png?raw=true'}],
    ['meta', {name: 'msapplication-TileColor', content: '#000000'}]
]
```

#### 开发者工具 Application 验证

部署到站点查看效果使用 `` 	./deploy.sh``

![image-20210129112635715](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129112635715.png?raw=true)

### [vssue评论](https://vssue.js.org/)

选择你要使用的代码托管平台

Vssue 支持通过 Github, Gitlab, Bitbucket, Gitee 或者 Gitea 的 Issue 系统来为你的静态页面提供评论功能，你可以选择其中之一来使用。

前往 [支持的代码托管平台 - 创建 OAuth App](https://vssue.js.org/zh/guide/supported-platforms.html) 查看详细指引。

1. 点击创建一个新的 OAuth App下的前往 [Settings - Developer Settings - OAuth Apps](https://github.com/settings/developers)

![image-20210129113731530](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129113731530.png?raw=true)

2. 点击 Register a new application

![](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129114257742.png?raw=true)

#### valine 切换到 vssue

1. 安装插件

```sh
yarn add @vssue/vuepress-plugin-vssue
```



2. 安装 [`` Github GraphQL API V4``](https://www.npmjs.com/package/@vssue/api-github-v4)

```sh
yarn add @vssue/api-github-v4
```

#### vssue单页面使用

使用方法:

```js
// .vuepress/config.js

module.exports = {
  plugins: {
    '@vssue/vuepress-plugin-vssue': {
      // 设置 `platform` 而不是 `api`
      platform: 'github-v4',

      // 其他的 Vssue 配置
      owner: 'HelloZXB', // github用户名
      repo: 'docs', // 仓库名称
      clientId: 'be80fbd3ab9xxxxxxxxxxx', // 见下图
      clientSecret: 'b6d93de0e193855d785db8a4xxxxxxxxxxxxx', // 见下图
    },
  },
};
```

![image-20210129120842507](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129120842507.png?raw=true)

使用评论功能

```sh
// README.md 文件底部

<Vssue />
```

如图:

![image-20210129121410517](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129121410517.png?raw=true)

登录过后在 github 就可以看到登录情况

![image-20210129121810551](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129121810551.png?raw=true)

#### [自动创建评论](https://vssue.js.org/zh/options/#autocreateissue)

如果 `autoCreateIssue` 设置为 `true`，在对应的 Issue 不存在时，Vssue 会自动尝试为你创建 Issue。注意，若你当前没有登录，则 Vssue 会自动跳转到平台的认证页面。

如果 `autoCreateIssue` 设置为 `false`，你必须手动创建 Issue。

```js
// .vuepress/config.js
module.exports = {
  plugins: {
    '@vssue/vuepress-plugin-vssue': {
      autoCreateIssue: true // 自动创建评论
    },
  },
};
```

#### [vssue全局使用](https://www.vuepress.cn/theme/writing-a-theme.html#%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84)

在 .vuepress 目录下新建 theme文件夹

```
theme
├── layouts
│   ├── Layout.vue
├── util
│   ├── index.js
└── index.js
```

使用: 假设你想创建一个继承自 VuePress 默认主题的派生主题，你只需要在你的主题配置中配置 [extend](https://www.vuepress.cn/theme/option-api.html#extend) 选项：

```js
// .vuepress/theme/index.js
module.exports = {
  extend: '@vuepress/theme-default'
}
```

```js
// .vuepress/theme/util/index.js
export const hashRE = /#.*$/
export const extRE = /\.(md|html)$/
export const endingSlashRE = /\/$/
export const outboundRE = /^[a-z]+:/i

export function normalize (path) {
  return decodeURI(path)
    .replace(hashRE, '')
    .replace(extRE, '')
}

export function getHash (path) {
  const match = path.match(hashRE)
  if (match) {
    return match[0]
  }
}

export function isExternal (path) {
  return outboundRE.test(path)
}

export function isMailto (path) {
  return /^mailto:/.test(path)
}

export function isTel (path) {
  return /^tel:/.test(path)
}

export function ensureExt (path) {
  if (isExternal(path)) {
    return path
  }
  const hashMatch = path.match(hashRE)
  const hash = hashMatch ? hashMatch[0] : ''
  const normalized = normalize(path)

  if (endingSlashRE.test(normalized)) {
    return path
  }
  return normalized + '.html' + hash
}

export function isActive (route, path) {
  const routeHash = decodeURIComponent(route.hash)
  const linkHash = getHash(path)
  if (linkHash && routeHash !== linkHash) {
    return false
  }
  const routePath = normalize(route.path)
  const pagePath = normalize(path)
  return routePath === pagePath
}

export function resolvePage (pages, rawPath, base) {
  if (isExternal(rawPath)) {
    return {
      type: 'external',
      path: rawPath
    }
  }
  if (base) {
    rawPath = resolvePath(rawPath, base)
  }
  const path = normalize(rawPath)
  for (let i = 0; i < pages.length; i++) {
    if (normalize(pages[i].regularPath) === path) {
      return Object.assign({}, pages[i], {
        type: 'page',
        path: ensureExt(pages[i].path)
      })
    }
  }
  console.error(`[vuepress] No matching page found for sidebar item "${rawPath}"`)
  return {}
}

function resolvePath (relative, base, append) {
  const firstChar = relative.charAt(0)
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  const stack = base.split('/')

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop()
  }

  // resolve relative path
  const segments = relative.replace(/^\//, '').split('/')
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i]
    if (segment === '..') {
      stack.pop()
    } else if (segment !== '.') {
      stack.push(segment)
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('')
  }

  return stack.join('/')
}

/**
 * @param { Page } page
 * @param { string } regularPath
 * @param { SiteData } site
 * @param { string } localePath
 * @returns { SidebarGroup }
 */
export function resolveSidebarItems (page, regularPath, site, localePath) {
  const { pages, themeConfig } = site

  const localeConfig = localePath && themeConfig.locales
    ? themeConfig.locales[localePath] || themeConfig
    : themeConfig

  const pageSidebarConfig = page.frontmatter.sidebar || localeConfig.sidebar || themeConfig.sidebar
  if (pageSidebarConfig === 'auto') {
    return resolveHeaders(page)
  }

  const sidebarConfig = localeConfig.sidebar || themeConfig.sidebar
  if (!sidebarConfig) {
    return []
  } else {
    const { base, config } = resolveMatchingConfig(regularPath, sidebarConfig)
    if (config === 'auto') {
      return resolveHeaders(page)
    }
    return config
      ? config.map(item => resolveItem(item, pages, base))
      : []
  }
}

/**
 * @param { Page } page
 * @returns { SidebarGroup }
 */
function resolveHeaders (page) {
  const headers = groupHeaders(page.headers || [])
  return [{
    type: 'group',
    collapsable: false,
    title: page.title,
    path: null,
    children: headers.map(h => ({
      type: 'auto',
      title: h.title,
      basePath: page.path,
      path: page.path + '#' + h.slug,
      children: h.children || []
    }))
  }]
}

export function groupHeaders (headers) {
  // group h3s under h2
  headers = headers.map(h => Object.assign({}, h))
  let lastH2
  headers.forEach(h => {
    if (h.level === 2) {
      lastH2 = h
    } else if (lastH2) {
      (lastH2.children || (lastH2.children = [])).push(h)
    }
  })
  return headers.filter(h => h.level === 2)
}

export function resolveNavLinkItem (linkItem) {
  return Object.assign(linkItem, {
    type: linkItem.items && linkItem.items.length ? 'links' : 'link'
  })
}

/**
 * @param { Route } route
 * @param { Array<string|string[]> | Array<SidebarGroup> | [link: string]: SidebarConfig } config
 * @returns { base: string, config: SidebarConfig }
 */
export function resolveMatchingConfig (regularPath, config) {
  if (Array.isArray(config)) {
    return {
      base: '/',
      config: config
    }
  }
  for (const base in config) {
    if (ensureEndingSlash(regularPath).indexOf(encodeURI(base)) === 0) {
      return {
        base,
        config: config[base]
      }
    }
  }
  return {}
}

function ensureEndingSlash (path) {
  return /(\.html|\/)$/.test(path)
    ? path
    : path + '/'
}

function resolveItem (item, pages, base, groupDepth = 1) {
  if (typeof item === 'string') {
    return resolvePage(pages, item, base)
  } else if (Array.isArray(item)) {
    return Object.assign(resolvePage(pages, item[0], base), {
      title: item[1]
    })
  } else {
    const children = item.children || []
    if (children.length === 0 && item.path) {
      return Object.assign(resolvePage(pages, item.path, base), {
        title: item.title
      })
    }
    return {
      type: 'group',
      path: item.path,
      title: item.title,
      sidebarDepth: item.sidebarDepth,
      initialOpenGroupIndex: item.initialOpenGroupIndex,
      children: children.map(child => resolveItem(child, pages, base, groupDepth + 1)),
      collapsable: item.collapsable !== false
    }
  }
}
```

```vue
// .vuepress/theme/layouts/Layout.vue
<template>
  <div class="theme-container" :class="pageClasses" @touchstart="onTouchStart" @touchend="onTouchEnd">
    <Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar"/>

    <div class="sidebar-mask" @click="toggleSidebar(false)"/>

    <Sidebar :items="sidebarItems" @toggle-sidebar="toggleSidebar">
      <template #top>
        <slot name="sidebar-top"/>
      </template>
      <template #bottom>
        <slot name="sidebar-bottom"/>
      </template>
    </Sidebar>

    <Home v-if="$page.frontmatter.home"/>

    <Page v-else :sidebar-items="sidebarItems">
      <template #top>
        <slot name="page-top"/>
      </template>
      <template #bottom>
        <slot name="page-bottom"/>
        <Vssue class="theme-default-content content__default" :options="{ locale: 'zh' }" />
      </template>
    </Page>
  </div>
</template>

<script>
import Home from '@theme/components/Home.vue'
import Navbar from '@theme/components/Navbar.vue'
import Page from '@theme/components/Page.vue'
import Sidebar from '@theme/components/Sidebar.vue'
import {resolveSidebarItems} from '../util'

export default {
  name: 'Layout',
  components: {
    Home,
    Page,
    Sidebar,
    Navbar
  },
  data() {
    return {
      isSidebarOpen: false
    }
  },
  computed: {
    shouldShowNavbar() {
      const {themeConfig} = this.$site
      const {frontmatter} = this.$page
      if (frontmatter.navbar === false || themeConfig.navbar === false) {
        return false
      }
      return (this.$title || themeConfig.logo || themeConfig.repo || themeConfig.nav || this.$themeLocaleConfig.nav)
    },
    shouldShowSidebar() {
      const {frontmatter} = this.$page
      return (!frontmatter.home && frontmatter.sidebar !== false && this.sidebarItems.length)
    },
    sidebarItems() {
      return resolveSidebarItems(this.$page, this.$page.regularPath, this.$site, this.$localePath)
    },
    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar
        },
        userPageClass
      ]
    }
  },
  mounted() {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false
    })
  },
  methods: {
    toggleSidebar(to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
      this.$emit('toggle-sidebar', this.isSidebarOpen)
    },
    // side swipe
    onTouchStart(e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },
    onTouchEnd(e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    }
  }
}
</script>
```

#### 更改站点

在 [开发人员设定](https://github.com/settings/applications/) 中的 `` Homepage URL`` 和 `` Authorization callback URL`` 修改为你的ip站点

![image-20210129131826561](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129131826561.png?raw=true)

推送到 github

```sh
git add .
git commit -m "vssue"
```

重新部署

```sh
./deploy.sh
```

### [back to top](https://www.vuepress.cn/plugin/official/plugin-back-to-top.html)

> back-to-top 插件.( 返回顶部 )

#### 安装

```bash
yarn add -D @vuepress/plugin-back-to-top
```

#### 使用

```js
module.exports = {
  plugins: {
      '@vuepress/back-to-top': true
  }
}
```

### [google analytics (谷歌分析)](https://analytics.google.com/analytics/web/provision/)

一切建立在你具备访问他的能力之上

#### 账号注册, 登录

到这一步的, 应该对账号注册和登录没什么问题

#### 创建媒体资源

1. 点击管理, 创建资源

![image-20210129134410897](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129134410897.png?raw=true)

2. 点击创建媒体资源

![image-20210129134501052](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129134501052.png?raw=true)

3. 点击 ``数据流`` , 选择 `` 网站``

![image-20210129135538068](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129135538068.png?raw=true)

3. 输入 ``站点ip`` , 输入 ``站点名称`` , 点击创建数据流

![image-20210129135751438](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129135751438.png?raw=true)

#### [安装插件](https://www.vuepress.cn/plugin/official/plugin-google-analytics.html#%E5%AE%89%E8%A3%85)

```bash
yarn add -D @vuepress/plugin-google-analytics
```

使用

```javascript
module.exports = {
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-18841xxxx-3' // 跟踪ID
      }
    ]
  ]
}
```

查看是否启用成功

![image-20210129140640775](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129140640775.png?raw=true)

谷歌分析启用成功

![image-20210129142956755](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129142956755.png?raw=true)

### 分割 config 文件

分割结构

```
.vuepress
├── config
│   ├── headConf.js
│   ├── navConf.js
│   ├── pluginsConf.js
└── config.js
```

```js
// .vuepress/config.js
const headConf = require('./config/headConf')
const pluginsConf = require('./config/pluginsConf')
const navConf = require('./config/navConf')

module.exports = {
  title: "dawnIceZhu's Notes", // 设置logo标题
  description: "dawnIceZhu's notes, mainly used to write some technical articles", // 设置meta描述
  head: headConf, // head
  plugins: pluginsConf, // plugins
  themeConfig: {
    logo: '/assets/img/logo.png?raw=true', // 设置LOGO
    displayAllHeaders: true, // 默认值：false
    sidebar: 'auto', // 自动设置侧边栏
    lastUpdated: '更新时间', // 最后更新时间
    nav: navConf // 顶部导航栏
  }
}
```

```js
// .vuepress/config/headConf.js
module.exports = [ // 配置head
  ['link', {rel: 'icon', href: '/assets/img/favicon.ico'}], // 设置ico图标
  ['meta', { // 设置作者
    name: 'author',
    content: "dawnIceZhu"
  }], // 添加SEO
  ['meta', { // 设置关键字
    name: 'keywords',
    content: '笔记, 文档, Vue Press'
  }],
  ['link', {rel: 'manifest', href: '/manifest.json'}],
  ['meta', {name: 'theme-color', content: '#3eaf7c'}],
  ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
  ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
  ['link', {rel: 'apple-touch-icons', href: '/icons/icons-512x512.png?raw=true'}],
  ['link', {rel: 'mask-icons', href: '/icons/icons-384x384.png?raw=true', color: '#3eaf7c'}],
  ['meta', {name: 'msapplication-TileImage', content: '/icons/icons-192x192.png?raw=true'}],
  ['meta', {name: 'msapplication-TileColor', content: '#000000'}]
]
```

```js
// .vuepress/config/navConf.js
module.exports = [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
      { // 设置下拉菜单
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      }
    ]
  }
]
```

```js
// .vuepress/config/pluginsConf.js
const moment = require('moment');

module.exports = {
  '@vuepress/last-updated':
    {
      transformer: (timestamp) => moment(timestamp).format("YYYY年MM月DD日HH时MM分SS秒")
    },
  '@vuepress/pwa': {
    serviceWorker: true,
    updatePopup: {
      message: "发现新内容可用",
      buttonText: "更新"
    }
  },
  '@vssue/vuepress-plugin-vssue': { // 配置vssue
    // 设置 `platform` 而不是 `api`
    platform: 'github-v4',

    // 其他的 Vssue 配置
    owner: 'HelloZXB',
    repo: 'docs',
    clientId: 'be80fbd3a5c3xxxxxxxx',
    clientSecret: 'b6d93de0e193855d785db8xxxxxxxxxxxxxx',
    autoCreateIssue: true // 自动创建评论
  },
  '@vuepress/back-to-top': true, // 返回顶部
  '@vuepress/google-analytics': // 添加谷歌分析
    {
      'ga': 'UA-18841xxxx-x' // UA-00000000-0
    }
}
```

### 保护个人隐私

``pluginsConf.js`` 中的 clientID 和 clientSecret 和 谷歌分析中追踪id是不希望被人看到的所以, 需要把它隐藏

在 ``config`` 文件夹下新建 secret.js 文件

```js
// config/secret.js
module.exports = {
  clientId: 'be80fbd3a5c32xxxxxx',
  clientSecret: 'b6d93de0e193855d785db8a492a0xxxxxxxxxx',
  'ga': 'UA-18841xxxx-x' // 追踪ID
}
```

```js
// config/pluginsConf.js
const secret = require('./secret')
const moment = require('moment');

module.exports = {
  '@vssue/vuepress-plugin-vssue': { // 配置vssue
    // 设置 `platform` 而不是 `api`
    platform: 'github-v4',

    // 其他的 Vssue 配置
    owner: 'HelloZXB',
    repo: 'docs',
    clientId: secret.clientId,
    clientSecret: secret.clientSecret,
    autoCreateIssue: true // 自动创建评论
  },
  '@vuepress/back-to-top': true, // 返回顶部
  '@vuepress/google-analytics': // 添加谷歌分析
    {
      'ga': secret.ga
    }
}
```

隐藏文件

在 ``.gitignore`` 中添加

```sh
# 隐藏私密信息
secret.js
```

### Markdown 用法进阶

#### 封装 [countUp.js](https://inorganik.github.io/countUp.js/) 为 Vue 组件 => [浏览器的 API 访问限制](https://www.vuepress.cn/guide/using-vue.html)

1. 安装依赖包

```sh
yarn add countup.js
```

2. 在 .vuepress 文件夹下新增 components 文件夹和 CountUp.vue文件

```
.vuepress
├── components
│   ├── CountUp.vue
└── config.js
```

#### 代码引入

1.

```vue
<!-- .vuepress/components/CountUp.vue -->
<template>
  <div>
    <ClientOnly>
      <slot name="before"/>
      <span ref="countUp"></span>
    </ClientOnly>
  </div>
</template>

<script>
export default {
  name: "CountUp.vue",
  props: {
    startVal: {
      type: Number,
      default: 0
    },
    endVal: {
      type: Number,
      required: true
    },
    decimalPlaces: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 2
    },
    delay: {
      type: Number,
      default: 0
    }
  },
  mounted() {
    this.init()
  },
  data() {
    return {
      counter: null
    }
  },
  methods: {
    init() {
      import('countup.js').then(module => {
        this.$nextTick(() => {
          this.counter = new module.CountUp(this.$refs.countUp, this.endVal, {
            startVal: this.startVal,
            decimalPlaces: this.decimalPlaces,
            duration: this.duration
          })
          setTimeout(() => {
            this.counter.start()
          }, this.delay)
        })
      })
    }
  },
  beforeDestroy() {
    this.counter.reset()
    this.counter = null
  }
}
</script>
```

在docs目录下新增 ``countup.md`` 文件

```sh
---
title: CountUp第三方组件
--- 

<CountUp :endVal="2020" />
<<< @/docs/.vuepress/components/CountUp.vue
```

### [自动部署 Travis-CI](https://www.vuepress.cn/guide/deploy.html#github-pages-and-travis-ci)

#### 新增 `` .travis.yml`` 文件

在根目录下新增 ``.travis.yml`` 文件

![image-20210129155441598](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129155441598.png?raw=true)

```yaml
language: node_js
node_js:
  - lts/*
install:
  - yarn install # npm ci
script:
  - yarn docs:build # npm run docs:build
  - yarn cname
deploy:
  provider: pages
  skip_cleanup: true
  local_dir: docs/.vuepress/dist
  github_token: $GITHUB_TOKEN # 在 GitHub 中生成，用于允许 Travis 向你的仓库推送代码。在 Travis 的项目设置页面进行配置，设置为 secure variable
  keep_history: true
  on:
    branch: master
```

#### 补充 cname 脚本

在根目录下新增 ``cname.sh`` 脚本, ``第三行写入ip地址``

```sh
#!/usr/bin/env sh

set -e

echo 'notes.hellozxb.com' > docs/.vuepress/dist/CNAME
```

在package.json写入运行脚本

```json
"scripts": {
    "cname": "bash cname.sh"
  },
```

#### [启用 Trevis-CI](https://travis-ci.com/)

1. 使用GITHUB登录
2. 点击 ``ACTIVATE ALL REPOSITORIES USING GITHUB APPS``  激活所有存储库
3. 点击``Dashboard``进入仪表盘

![image-20210129161702286](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129161702286.png?raw=true)

4. 找到自己的项目, 然后点击 ``Trigger a build``(触发构建)

![image-20210129162024832](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129162024832.png?raw=true)

5. 点击

![image-20210129162321495](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129162321495.png?raw=true)

6. 点击设置

![image-20210129162405185](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129162405185.png?raw=true)

7. 找到 ``Environment Variables`` 把 ``.travis.yml`` 文件中的 ===GITHUB_TOKEN=== 复制的到里面

![image-20210129162539162](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129162539162.png?raw=true)

#### 获取 GITHUB_TOKEN

1. 打开 ``github`` 生成 token, 点击Settings

![image-20210129162826266](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129162826266.png?raw=true)

2. 找到 ``Developer settings``(开发人员设定)

![image-20210129162922223](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129162922223.png?raw=true)

3. 点击 ``Personal access tokens`` (个人访问令牌), 再点击 ``Generate new token`` (生成新令牌)

![image-20210129163211931](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129163211931.png?raw=true)

4. 输入 `` Note`` (注意), 勾选 ``Select scopes`` (选择范围)下的 **repo**, 点击最下方的 ``Generate token`` (生成令牌)

![image-20210129163437040](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129163437040.png?raw=true)

5. 把令牌粘贴到 ``VALUE`` 中, 点击 ``Add``

![image-20210129163849074](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129163849074.png?raw=true)

![image-20210129164114910](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129164114910.png?raw=true)

在 ``.gitignore`` 中把隐藏掉的私密信息注释掉, 否则会导致构建失败, 然后推送到仓库

```sh
git add .
git commit -m "Travis CI"
git push
```

6. 点击 ``Current`` 查看是否部署成功

![image-20210129165038355](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129165038355.png?raw=true)

### 逼格徽章

#### Trevis-CI

1.

![image-20210129170344857](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129170344857.png?raw=true)

2. 在根目录中的 ``README.md`` 文件中添加

```sh
# Hello Press

[![Build Status](https://travis-ci.com/HelloZXB/docs.svg?branch=main)](https://travis-ci.com/HelloZXB/docs)
```



#### [shields.io](https://shields.io/)

![image-20210129171048434](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129171048434.png?raw=true)

![image-20210129171254341](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129171254341.png?raw=true)

最后效果

![image-20210129171700329](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129171700329.png?raw=true)

### [图片缩放](https://www.vuepress.cn/guide/assets.html#%E7%9B%B8%E5%AF%B9%E8%B7%AF%E5%BE%84)

所有的 Markdown 文件都会被 webpack 编译成 Vue 组件，因此你可以，并且**应该更倾向于**使用相对路径（Relative URLs）来引用所有的静态资源：

#### 图片引入的两种方式

相对路径:

```md
![An image](./img/image.png?raw=true)
```

基础路径

```vue
<img :src="$withBase('/foo.png?raw=true')" alt="foo">
```

#### [所有图片缩放](https://www.vuepress.cn/plugin/official/plugin-medium-zoom.html)

安装

```bash
yarn add -D @vuepress/plugin-medium-zoom
```

使用:

```javascript
module.exports = {
  plugins: {
      '@vuepress/medium-zoom': { // 图片缩放
    	selector: 'img',
 	 }
  }
}
```

#### 指定类缩放

可能有些不想让它缩放, 那么:

```js
module.exports = {
  plugins: {
      '@vuepress/medium-zoom': { // 图片缩放
    	selector: 'img.custom',
 	 }
  }
}
```

```sh
#README.md

#当前带有custom类的img图片可以缩放
<img class="custom" :src="$withBase('/foo.png?raw=true')" alt="foo">
```

### 自动生成侧边栏

当写大量笔记, 博客是需要, 支持第一次生成导航栏, 精准排序

::: danger
如果要设置自动生成侧边栏, 那么需要:
sidebar: true 和 const navConf = require('./config/navConf')删除掉
改为 const nav = require('./nav.js') 和 nav: nav
:::

安装

```sh
yarn add vuepress-plugin-auto-sidebar
```

使用

```js
module.exports = {
  plugins: {
    "vuepress-plugin-auto-sidebar": {
        nav: true
    }
  }
}
```

::: danger
写完 nav: true, 必须执行一下文件, 便于生成 nav.js
:::

### [algolia 搜索](https://docsearch.algolia.com/)

::: danger
搭建失败
:::

::: danger
vuepress 自带的搜索
申请 algolia, 等待邮件即可, 也有可能收到一封拒绝信, 则自行构建
algolia 的缺陷: 手动, 记录上限, 单页内容过多会导致失败
:::



### [algolia 自建步骤](https://docsearch.algolia.com/docs/run-your-own)

#### 创建账号, 项目获取 APPLICATION_ID, API_KEY

1. 创建账号

![image-20210129184224647](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129184224647.png?raw=true)

2. 登录成功之后, 完后入门

![image-20210129184927274](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129184927274.png?raw=true)

3. 上传记录

![image-20210129185440810](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129185440810.png?raw=true)

4. 添加可搜索的属性

![image-20210129190037314](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129190037314.png?raw=true)

5. 添加排名和排序

![image-20210129190146333](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129190146333.png?raw=true)

6. 创建一个新的索引

![image-20210129190522929](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129190522929.png?raw=true)

7. 点击 ``API Keys`` 再点击 ``All API Keys``

![image-20210129190708446](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129190708446.png?raw=true)

8. 点击 ``New API Key`` 创建新的api密匙, 然后添加描述/选择指标/选择访问控制列表, 最后点击 `` create``

![image-20210129191344074](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129191344074.png?raw=true)

#### 配置 ACL

新建 ``config`` 目录, 创建 ``.env`` 文件

![image-20210129191929502](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129191929502.png?raw=true)

```sh
APPLICATION_ID=YOUR_APP_ID
API_KEY=YOUR_API_KEY
```

在刚刚创建的索引找到: API Key, 把ID填写到 ``API_KEY=0c585f86016c125833ce7050exxxxxxx``

![image-20210129192226404](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129192226404.png?raw=true)

找到 Your API Keys, 在 ``APPLICATION_ID=8452ab7c0bdbef7d60b0fxxxxxxxxxx``填入

![image-20210129201630129](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129201630129.png?raw=true)

最后是这样的

```sh
APPLICATION_ID=SK9BYxxxxx
API_KEY=8452ab7c0bdbef7d60b0fxxxxxxxxxx
```

#### [安装jq](https://github.com/stedolan/jq/wiki/Installation)

windows 下安装 ``jq``

首先以管理员身份运行 ``Windows PowerShell`` 安装[ **chocolatey **](https://chocolatey.org/install)

```sh
Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

![image-20210129194038136](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129194038136.png?raw=true)

安装jq

```sh
chocolatey install jq
```

![image-20210129194517457](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129194517457.png?raw=true)

#### 配置 config.json 根据当前 DOM

创建 ``config.json`` 文件

![image-20210129195455359](https://github.com/dawnIceZhu/notes-static-resources/blob/master/img/image-20210129195455359.png?raw=true)

修改为:

```json
{
  "index_name": "docs",
  "start_urls": ["https://notes.hellozxb.com/"],
  "selectors": {
    "lvl0": ".theme-default-content h1",
    "lvl1": ".theme-default-content h1",
    "lvl2": ".theme-default-content h3",
    "lvl3": ".theme-default-content h4",
    "lvl4": ".theme-default-content h5",
    "lvl5": ".theme-default-content h6",
    "text": ".theme-default-content p,.theme-default-content ul,.theme-default-content ol"
  }
}
```

安装 ``Docker``

```sh
docker run -it --env-file=config/.env -e "CONFIG=$(cat /config/config.json | jq -r tostring)" algolia/docsearch-scraper
```

```sh
docker run -it --env-file=config/.env -e "CONFIG=$(cat docs/config/config.json | jq -r tostring)" algolia/docsearch-scraper
Users/12568/Desktop/docs/config
```



#### 配置 themeConfig

官网为 algolia 提供服务时的配置, 而自建需要提供 appld

搜索不到内容时考虑是否是 lang 引起的?

<Vssue :title="$title" />
