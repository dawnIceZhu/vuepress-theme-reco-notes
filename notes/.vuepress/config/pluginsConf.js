const moment = require('moment'); // 导入moment依赖包

module.exports = {
  "last-updated": {
    transformer: (timestamp) => moment(timestamp).format("YYYY年MM月DD日HH时MM分SS秒")
  },
  "@vuepress-reco/vuepress-plugin-pagation": { // 添加分页
    perPage: 10
  },
  '@vssue/vuepress-plugin-vssue': {
    // 设置 `platform` 而不是 `api`
    platform: 'github-v4',

    // 其他的 Vssue 配置
    owner: 'dawnIceZhu', // github用户名
    repo: 'vuepress-theme-reco-notes', // 仓库名称
    clientId: 'be80fbd3a5c32a78eb99',
    clientSecret: 'f9b0fc5527b4fc60beb0e4fc7c641d7d6897facf',
  },
  "meting": { // 设置meting播放器
    // metingApi: 'https://autumnfish.cn/song/url',
    meting: { // 不配置该项的话不会出现全局播放器
      server: 'netease', // 音乐平台
      type: 'playlist', // 播放清单
      mid: '5278558272' // 资源ID
    },
    aplayer: {
      fixed: true, // 开启吸底模式
      mini: true, // 开启迷你模式
      theme: '#67cc86', // 设置播放器默认主题颜色
      lrcType: 3, // 设置lrc歌词解析模式
      listFolded: true, // 是否折叠播放列表
    }
  },
  "@vuepress-reco/vuepress-plugin-loading-page": 'auto', // 载入页面
  "social-share": { // 分享插件
    networks: ["qq", "weibo", "email"], // 分享类型
    email: "Hello16369@163.com", // email
  },
  "@vuepress/pwa": {
    serviceWorker: true,
    updatePopup: {
      message: "Found new content available",
      buttonText: "Update"
    }
  },
  "@vuepress/google-analytics": { // 谷歌分析
    'ga': 'UA-189687842-1' // 跟踪ID
  },
  "vuepress-plugin-code-copy": { // 设置一键复制代码
    color: '#3eaf7c', // 设置颜色
    backgroundColor: '#3eaf7c', // 设置背景色
  },
  "reading-progress": true, // 设置阅读进度条
  "ribbon": {
    size: 90, // width of the ribbon, default: 90
    opacity: 0.8, // opacity of the ribbon, default: 0.3
    zIndex: -1 // z-index property of the background, default: -1
  },
  "cursor-effects": "auto", // 添加光标动画
  "dynamic-title": { // 添加动态标题
    showIcon: "/favicon.ico",
    showText: "Hey, that's good again!",
    hideIcon: "/favicon.ico",
    hideText: "Oh, it broke down!",
    recoverTime: 2000
  }
}
