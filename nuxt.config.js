export default {
  loading: "~/components/loading.vue",
  router: {
    extendRoutes(routes) {
      routes.push({
        path: "/",
        component: "~/pages/auth/login.vue",
      });
    }
  },
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/flavicon_SP.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ["~/assets/scss/app.scss", 'quill/dist/quill.core.css', 'quill/dist/quill.snow.css', 'quill/dist/quill.bubble.css'],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    "~/plugins/fireauth.js",
    "~/plugins/fakeauth.js",
    "~/plugins/simplebar.js",
    "~/plugins/vue-click-outside.js",
    "~/plugins/vuelidate.js",
    "~/plugins/draggable.js",
    "~/plugins/vue-slidebar.js",
    "~/plugins/tour.js",
    "~/plugins/vue-lightbox.js",
    "~/plugins/mask.js",
    "~/plugins/quill-editor.js",
    "~/plugins/chartist.js",
    "~/plugins/vue-googlemap.js",
    "~/plugins/string-filter"
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'bootstrap-vue/nuxt',
    'nuxt-i18n',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
        },
        user: {
          property: false,
        },
        endpoints: {
          login: { url: '/rest/auth/authenticate', method: 'post' },
          // logout: { url: '/rest/logout', method: 'post' },
          user: { url: '/rest/user/info', method: 'get' },
          role: { url: '/rest/user/role', method: 'get' },
        }
      },
    },
    redirect: {
      login: '/auth/login',
      home: '/'
    },
    middleware: [
      { src: '~/middleware/authenticator.js' }
    ],
    localStorage: false,
  },
  axios: {
    prefix: process.env.APP_URL || 'https://b2b.bueno.money',
    proxy: true,
    credentials: true,
    https: process.env.HTTPS || true,

  },
  proxy: {
    '/rest': {
      target: process.env.API_URL || 'https://apib2b.bueno.money',
      pathRewrite: { '^/rest': '/' }
    }
  },

  i18n: {
    locales: ['en', 'fr', 'es', 'ar'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: require('./locales/en.json'),
        fr: require('./locales/fr.json'),
        es: require('./locales/es.json'),
        ar: require('./locales/ar.json'),
        zh: require('./locales/zh.json')
      }
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  env: {
    auth: process.env.VUE_APP_DEFAULT_AUTH,
    apikey: process.env.VUE_APP_APIKEY,
    authdomain: process.env.VUE_APP_AUTHDOMAIN,
    databaseurl: process.env.VUE_APP_DATABASEURL,
    projectid: process.env.VUE_APP_PROJECTId,
    storgebucket: process.env.VUE_APP_STORAGEBUCKET,
    message: process.env.VUE_APP_MESSAGINGSENDERID,
    appid: process.env.VUE_APP_APPId,
    measurement: process.env.VUE_APP_MEASUREMENTID,
    apiUrl: process.env.API_URL || 'https://apisg.bueno.money',
    appUrl: process.env.APP_URL || 'https://sg.bueno.money',
    scoreUrl: process.env.SCORE_URL || 'https://scoring-sg.bueno.money',
    localeDefault: process.env.LOCALE_DEFAULT || "en-US",
    currencyDefault: process.env.CURRENCY_DEFAULT || "SGD",
  },
  publicRuntimeConfig: {
    apiUrl: process.env.API_URL,
    lkUrl: process.env.APP_URL,
    wssUrl: process.env.WSS_URL,
    notifications: process.env.NOTIFICATIONS
  },
}
