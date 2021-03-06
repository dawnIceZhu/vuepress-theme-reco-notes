const headConf = require('./config/headConf')
const navConf = require('./config/navConf')
const friendLinkConf = require('./config/friendLinkConf')
const pluginsConf = require('./config/pluginsConf')
const blogConf = require('./config/blogConf')

module.exports = {
  "title": "dawnIceZhu's Notes",
  "description": "dawnIceZhu's Notes&Blog",
  "dest": "public",
  "head": headConf, // 配置head
  "theme": "reco",
  "plugins": pluginsConf,
  "themeConfig": {
    "mode": 'dark', // 主题默认黑色
    sidebar: "auto", // 自动配置侧边栏
    codeTheme: 'tomorrow', // 设置代码主题
    "nav": navConf,
    "type": "blog",
    "blogConfig": blogConf,
    "friendLink": friendLinkConf,
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "最后更新时间", // 设置最后更新时间
    "author": "dawnIceZhu", // 全局作者姓名
    "authorAvatar": "/avatar.png", // 头像
    "record": "粤ICP备2021110925号", // ICP 备案文案
    "recordLink": 'https://icp.chinaz.com/home/info?host=vueice.com', // ICP 备案指向链接
    "startYear": "2020", // 项目开始时间
    // "valineConfig": { // valine评论
    //   appId: 'CloOeB0vtRsMkqNiH4HddxFS-gzGzoHsz',// your appId
    //   appKey: '1UIGtdzrj4a5gMSfRSt07awo', // your appKey
    //   avatar: 'monsterid', // 头像配置
    //   visitor: true, // 文章访问量统计
    //   avatarForce: true, // 拉取评论最新头像
    //   recordIP: true, // 记录评论者IP
    // }
    // "vssueConfig": {
    //   platform: 'github',
    //   owner: 'dawnIceZhu',
    //   repo: 'vuepress-theme-reco-notes',
    //   clientId: '7cc010527a8ed60e2b8d',
    //   clientSecret: '9ed195cbaf8516f5ac08429373165b4aab8e541e',
    // }
  },
  "markdown": {
    "lineNumbers": true
  }
}
