module.exports = [
  ["link", { // 设置ico图标
    "rel": "icon",
    "href": "/favicon.ico"
  }
  ],
  ["meta", { // 设置视口
    "name": "viewport",
    "content": "width=device-width,initial-scale=1,user-scalable=no"
  }
  ],
  ['meta', { // 设置作者
    name: 'author',
    content: "dawnIceZhu"
  }], // 添加SEO
  ['meta', { // 设置关键字
    name: 'keywords',
    content: '朱晓冰, 朱晓冰的笔记, 文档, Vue Press'
  }],
  ['meta', {name: 'theme-color', content: '#3eaf7c'}],
  ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
  ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
  ['link', {rel: 'apple-touch-icons', href: 'https://hellozxb.coding.net/p/notes/files/all/22990139/preview/22990333'}],
  ['link', {rel: 'mask-icons', href: 'https://hellozxb.coding.net/p/notes/files/all/22990139/preview/22990332', color: '#3eaf7c'}],
  ['meta', {name: 'msapplication-TileImage', content: 'https://hellozxb.coding.net/p/notes/files/all/22990139/preview/22990330'}],
  ['meta', {name: 'msapplication-TileColor', content: '#000000'}],
]
