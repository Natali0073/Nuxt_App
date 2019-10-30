module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'my-project',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ],
    script: [
      {
        src: 'hcap.js'
      }
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {color: 'blue'},

  /*
   ** Customize the progress bar color
   */
  css: [
    '@/node_modules/bootstrap/dist/css/bootstrap.min.css'
  ],

  modules: [
    '@nuxtjs/font-awesome',
    '@nuxtjs/axios',
    '@nuxtjs/markdownit'
  ],

  markdownit: {
    injected: true,
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    vendor: ['hcap.js'],
    extend (config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  buildModules: ['@nuxt/typescript-build']

};
