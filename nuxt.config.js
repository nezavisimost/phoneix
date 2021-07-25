export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/phoneix/'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'phoneix',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/phoneix/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      'nuxt-i18n',
      {
        vueI18nLoader: true,
        strategy: 'no_prefix',
        defaultLocale: 'ru',
        locales: [
          {
            code: 'en',
            name: 'English'
          },
          {
            code: 'ru',
            name: 'Русский'
          }
        ]
      }
    ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/'
      : '/phoneix/',
    outputDir: process.env.NODE_ENV === 'production'
      ? __dirname+'/lib'
      : __dirname+'/ghp',
  },

}
