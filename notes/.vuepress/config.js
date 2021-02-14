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
    sidebar: "auto", // 自动配置侧边栏
    codeTheme: 'tomorrow', // 设置代码主题
    "nav": navConf,
    "type": "blog",
    "blogConfig": blogConf,
    "friendLink": friendLinkConf,
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated", // 设置最后更新时间
    "author": "dawnIceZhu", // 全局作者姓名
    "authorAvatar": "/avatar.png", // 头像
    "record": "鲁ICP备20017435号", // ICP 备案文案
    "recordLink": 'https://icp.chinaz.com/home/info?host=hellozxb.com', // ICP 备案指向链接
    "startYear": "2021", // 项目开始时间
    "vssueConfig": {
      platform: 'github',
      owner: 'dawnIceZhu',
      repo: 'note',
      clientId: 'be80fbd3a5c32a78eb99',
      clientSecret: 'f9b0fc5527b4fc60beb0e4fc7c641d7d6897facf',
    }
  },
  "markdown": {
    "lineNumbers": true
  }
}
