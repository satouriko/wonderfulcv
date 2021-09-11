import type { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '简历',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=794, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        innerHTML: `
(function () {
  function applyViewport () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
      const ww = window.screen.width
      const mw = 794 // min width of site
      const ratio = ww / mw // calculate ratio
      const viewportMetaTag = document.querySelector('meta[name=viewport]')
      if (ww < mw) { // smaller than minimum size
        viewportMetaTag.setAttribute('content', 'initial-scale=' + ratio + ', maximum-scale=' + ratio + ', minimum-scale=' + ratio + ', user-scalable=no, width=' + mw)
      } else { // regular size
        viewportMetaTag.setAttribute('content', 'initial-scale=1.0, maximum-scale=1, minimum-scale=1.0, user-scalable=yes, width=' + ww)
      }
      let styleTag = document.getElementById('mobileStyle')
      if (!styleTag) {
        styleTag = document.createElement('style')
        styleTag.id = 'mobileStyle'
        styleTag.innerHTML = \`
.page {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}
      \`
        document.head.appendChild(styleTag)
      }
    } else {
      const styleTag = document.getElementById('mobileStyle')
      if (styleTag) styleTag.remove()
    }
  }
  window.addEventListener('resize', function () {
    applyViewport()
  })
  applyViewport()
}())
        `
      }
    ],
    __dangerouslyDisableSanitizers: ['script']
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/wonderfulcv.config.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-fragment.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/composition-api/module',
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    'nuxt-vite'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['@nuxtjs/fontawesome', {
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        },
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['fab']
        }
      ]
    }]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  generate: {
    routes: ['/zh', '/en'],
    // choose to suit your project
    interval: 2000
  }
}

export default config
