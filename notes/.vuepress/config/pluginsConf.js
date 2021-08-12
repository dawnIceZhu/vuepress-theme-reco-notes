const moment = require('moment'); // 导入moment依赖包

module.exports = {
  // "@vssue/vuepress-plugin-vssue": { // vssue评论
  //   platform: 'github-v4', // 设置 `platform` 而不是 `api`
  //   // 其他的 Vssue 配置
  //   owner: 'dawnIceZhu',
  //   repo: 'vuepress-theme-reco-notes',
  //   clientId: '7cc010527a8ed60e2b8d',
  //   clientSecret: '22ff2b0fb8fb7ae15d9988652b5e60113d3c6a3a',
  // },
  "vuepress-plugin-mygitalk": { // Gitalk评论
    enable: true, // 是否启用(关闭请设置为false)(default: true)
    home: false, // 是否开启首页评论(default: true)
    gitalk: { // Gitalk配置
      clientID: '42ba8f5945515800a194', // GitHub Application Client ID.
      clientSecret: 'ac1cbfecd9a284343924fd75b04d99240f137ca2', // GitHub Application Client Secret.
      repo: 'vuepress-theme-reco-notes', // GitHub repository. 存储评论的 repo
      owner: 'dawnIceZhu', // GitHub repository 所有者，可以是个人或者组织。
      admin: 'dawnIceZhu', // github仓库的所有者和合作者
      language: 'zh-CN', // 设置语言(default: zh-CN)
    }
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
  "@vuepress/pwa": { // pwa
    serviceWorker: true,
    updatePopup: {
      // message: "Found new content available",
      // buttonText: "Update"
      message: "发现新的可用内容",
      buttonText: "更新"
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
  "ribbon-animation": { // 彩带效果
    size: 90, // 默认数据
    opacity: 0.3, // 透明度
    zIndex: -1, // 层级
    opt: {
      colorSaturation: "80%", // 色带HSL饱和度
      colorBrightness: "60%", // 色带HSL亮度量
      colorAlpha: 0.65, // 带状颜色不透明度
      colorCycleSpeed: 6, // 在HSL颜色空间中循环显示颜色的速度有多快
      verticalPosition: "center", // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
      horizontalSpeed: 200, // 到达屏幕另一侧的速度有多快
      ribbonCount: 2, // 在任何给定时间，屏幕上会保留多少条带
      strokeSize: 0, // 添加笔划以及色带填充颜色
      parallaxAmount: -0.5, // 通过页面滚动上的因子垂直移动色带
      animateSections: true // 随着时间的推移，为每个功能区添加动画效果
    },
    ribbonShow: false, // 点击彩带  true显示  false为不显示
    ribbonAnimationShow: true // 滑动彩带
  },
  "cursor-effects": "auto", // 添加光标动画
  "dynamic-title": { // 添加动态标题
    showIcon: "/favicon.ico",
    showText: "Hey, that's good again!",
    hideIcon: "/favicon.ico",
    hideText: "Oh, it broke down!",
    recoverTime: 2000
  },
  "sitemap": { // 生成sitemap.xml
    hostname: 'https://notes.vueice.com/'
  },
  "sakura": { // 花瓣雨
    num: 20, // 默认数量
    show: true, // 是否显示
    zIndex: 2, // 层级
    img: {
      replace: false, // false 默认图 true 换图 需要填写httpUrl地址
      httpUrl: '/star.png' // 绝对路径
    }
  }
}
