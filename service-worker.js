/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1.jpg",
    "revision": "5e4523e2a54a4f06c48079f9c8a413c9"
  },
  {
    "url": "404.html",
    "revision": "6a0748cac7626fd8c31352557e132aa3"
  },
  {
    "url": "assets/css/0.styles.299aceaa.css",
    "revision": "acd9cf1f45ed6caed4b69f6d470d0a89"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.99ab714e.js",
    "revision": "cbd422e761b712ccedfa8144cfae24f4"
  },
  {
    "url": "assets/js/10.b6b11c7a.js",
    "revision": "57e5b43dfdabb380e9151bd9bac5e246"
  },
  {
    "url": "assets/js/11.bc1f2ffd.js",
    "revision": "995192f2f6efb9d2bb0d80cf93fbfbe6"
  },
  {
    "url": "assets/js/12.0ec834e7.js",
    "revision": "9062651613c6d0e162e5b067cdbdcec4"
  },
  {
    "url": "assets/js/13.9508dfe2.js",
    "revision": "3357197e92b65682c919bc8307a6e46c"
  },
  {
    "url": "assets/js/14.a14d1c44.js",
    "revision": "176390cfaad11e56e3913ac7444b10b8"
  },
  {
    "url": "assets/js/15.f86b68ee.js",
    "revision": "d613e7e9e5ac13d1eae8ad0ceeb09e70"
  },
  {
    "url": "assets/js/16.9afcbb76.js",
    "revision": "dfbacb10b1ee9ca9943d6d8662ab257b"
  },
  {
    "url": "assets/js/17.43784f3c.js",
    "revision": "8a45adb740c43d2238a2dd0635d82d01"
  },
  {
    "url": "assets/js/18.df30c2a7.js",
    "revision": "e4c0838129bbfbaf40fdd7f33a6eaee1"
  },
  {
    "url": "assets/js/19.db27f1a8.js",
    "revision": "2b70bc01f751a65822b10398d7be7ab3"
  },
  {
    "url": "assets/js/20.26cdec2e.js",
    "revision": "95c845fad2b50f67c632b8c81a350c12"
  },
  {
    "url": "assets/js/21.996be776.js",
    "revision": "2e5f2cca60420898d97d4b6ebed2af3a"
  },
  {
    "url": "assets/js/22.8082da01.js",
    "revision": "4b55c949dec1a2ef27e1ade35f619ce5"
  },
  {
    "url": "assets/js/23.adcfd45e.js",
    "revision": "e0e536ef9f7b81872e2d840642f52e7b"
  },
  {
    "url": "assets/js/24.96d5f9ed.js",
    "revision": "05766b40da7b6e40bce32235f5c130ee"
  },
  {
    "url": "assets/js/25.3d9d4136.js",
    "revision": "42506560dd2589a8f56a5f1c3f8df203"
  },
  {
    "url": "assets/js/26.078bc7a8.js",
    "revision": "ae87bf7228423bda21529063aca4c0a9"
  },
  {
    "url": "assets/js/27.408e3b43.js",
    "revision": "c2e42c9d8cc345c545b353e55d436656"
  },
  {
    "url": "assets/js/28.cbf0c782.js",
    "revision": "2ad16e4b27b248eeacb02468fe0b79a4"
  },
  {
    "url": "assets/js/3.d09713dc.js",
    "revision": "445d4e5d2335e7be77437abb23bbd478"
  },
  {
    "url": "assets/js/4.c05f9f92.js",
    "revision": "c39c252a7e59b439d8cf654eee70e26e"
  },
  {
    "url": "assets/js/5.18fb8ac9.js",
    "revision": "0853a61d81c65a6ad8575579ccee7ad2"
  },
  {
    "url": "assets/js/6.056f09f4.js",
    "revision": "4fd1c98cc769af13291244c8b39c9cb3"
  },
  {
    "url": "assets/js/7.568f8a33.js",
    "revision": "b48dc7f8579f4cf9a7e8447353716704"
  },
  {
    "url": "assets/js/8.a6b46c03.js",
    "revision": "4541b3b66522841f35178cd9aaa4b294"
  },
  {
    "url": "assets/js/9.741fedd4.js",
    "revision": "bb1bf20bafe0635073a8d78ccf1c10c3"
  },
  {
    "url": "assets/js/app.feef319c.js",
    "revision": "07aea423d9f284ed04cc32fe74284749"
  },
  {
    "url": "avatar.png",
    "revision": "8ea994f89d173a079d4f92a54e9c9106"
  },
  {
    "url": "blogs/essay/20210131.html",
    "revision": "406f32b07943b86f158409a56cb43989"
  },
  {
    "url": "blogs/essay/20210210.html",
    "revision": "f73de9226e56956eebb5cf2641fa1128"
  },
  {
    "url": "blogs/essay/20210216.html",
    "revision": "e667034d9194fec34e70a16f4d4d4a74"
  },
  {
    "url": "blogs/essay/20210331.html",
    "revision": "113fc1db802581947212e7ec6476b63c"
  },
  {
    "url": "blogs/essay/20210513.html",
    "revision": "075340790f07a3070142bf82821baddd"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "2e39c37a4d194fa05b6fc007719c1760"
  },
  {
    "url": "blogs/recording/20210131.html",
    "revision": "6d50abdd0a7863513599500847be6d4a"
  },
  {
    "url": "blogs/test/test.html",
    "revision": "fe993f91e4929de2d674f7bef493fd75"
  },
  {
    "url": "blogs/tool/webstorm.html",
    "revision": "b90c4bc0acf0c3088ac994b30ec14a7c"
  },
  {
    "url": "blogs/tutorials/vuepress.html",
    "revision": "5058d8c1bcc81f3617628ca860d9f3e8"
  },
  {
    "url": "blogs/vpn/20210216.html",
    "revision": "9fffeeb37ab97415a983ec74fc88d733"
  },
  {
    "url": "blogs/vpn/20210217.html",
    "revision": "0962d83c72fbd585e257ca5313d7a1c8"
  },
  {
    "url": "blogs/web/20210209.html",
    "revision": "54e684bf382bce9a336d9b276962ca08"
  },
  {
    "url": "blogs/web/20210213.html",
    "revision": "451cb55ba44ef19c02a4295eee23f7d8"
  },
  {
    "url": "blogs/windows/20210408.html",
    "revision": "74ebeafe81fe5dfbaaf304ffe30fbfff"
  },
  {
    "url": "blogs/windows/20210730.html",
    "revision": "769776148a4a47487c092e3d6b446a9e"
  },
  {
    "url": "categories/index.html",
    "revision": "bccd2cae0d477c7a0ab04df73fd2e872"
  },
  {
    "url": "categories/VPN/index.html",
    "revision": "c24caa7b8baa3855de5aba083e03df88"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "269f38c888b00b8d62fe92d721aabf73"
  },
  {
    "url": "categories/Windows/index.html",
    "revision": "25837eb752ce62fd7343db6516951f53"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "a156faa3ef08ce579ffb30e4734b97d9"
  },
  {
    "url": "categories/教程/index.html",
    "revision": "5b425b29ae92d8509b9a33f505d86c2a"
  },
  {
    "url": "categories/测试/index.html",
    "revision": "5b1497a90c3976c0a1d2878bf48bddd4"
  },
  {
    "url": "categories/记录/index.html",
    "revision": "9a830e4848752bc1a5c13a80b6dad9c1"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "b742aef0f92a3382802b58fdcf17f0de"
  },
  {
    "url": "index.html",
    "revision": "01bb1e3b2fade97fb44c8cea36b281ae"
  },
  {
    "url": "logo.png",
    "revision": "2b60a60a474c2197c68a4c9c2aa0f349"
  },
  {
    "url": "sakura.png",
    "revision": "10f38f2124e11c3284e19b40f6e6a029"
  },
  {
    "url": "sakura1.png",
    "revision": "5e4a2cfbc3aae83420146d71ee06ba17"
  },
  {
    "url": "tag/bug/index.html",
    "revision": "b2ddc0900f6ee26fdb0db7c2673d88bb"
  },
  {
    "url": "tag/index.html",
    "revision": "11b856e00c45bade53cdba16250d4ac7"
  },
  {
    "url": "tag/VPN/index.html",
    "revision": "06b9a89ac79c784b92db7b65122f8f8b"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "c7236e86ff67c4c42186769665ee55c2"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "2056110cf4a44e653f7d82229482e1df"
  },
  {
    "url": "tag/webstorm/index.html",
    "revision": "873b1becb9a0404ce695a00dcef5ae7c"
  },
  {
    "url": "tag/Windows/index.html",
    "revision": "c77638b67667b375efdca5990572641d"
  },
  {
    "url": "tag/测试/index.html",
    "revision": "b038100509672bba2cddbb15fffd14c1"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "ccba31feb56a6d2335514da35a71b68a"
  },
  {
    "url": "timeline/index.html",
    "revision": "41ee34577f52e2f4ccb10778f8dd1ec6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
