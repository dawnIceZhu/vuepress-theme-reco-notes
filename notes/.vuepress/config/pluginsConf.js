const moment = require('moment'); // 导入moment依赖包

module.exports = {
  "@vssue/vuepress-plugin-vssue": {
    // 设置 `platform` 而不是 `api`
    platform: 'github-v4',

    // 其他的 Vssue 配置
    owner: 'dawnIceZhu',
    repo: 'vuepress-theme-reco-notes',
    clientId: '7cc010527a8ed60e2b8d',
    clientSecret: '9ed195cbaf8516f5ac08429373165b4aab8e541e',
    $lang: 'zh-CN'
  },
  "last-updated": {
    transformer: (timestamp) => moment(timestamp).format("YYYY年MM月DD日HH时MM分SS秒")
  },
  "@vuepress-reco/vuepress-plugin-pagation": { // 添加分页
    perPage: 10
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
