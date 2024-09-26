// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devServer: {
    host: 'localhost',
    port: 3013,
  },
  runtimeConfig: {
    public: {
      apiBaseUrl:
        process.env.API_BASE_URL || 'https://alkuszom.info/api/public',
    },
  },
  devtools: { enabled: true },
  css: ['~/assets/css/app.css'],
  ssr: true,

  app: {
    head: {
      title: 'Biztos Alkuszom',
      htmlAttrs: {
        lang: 'hu',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Személyre szabott biztosítási megoldások mindenkinek. Megbízható alkusz a biztosítási piacon.',
        },
        { name: 'format-detection', content: 'telephone=no' },
        { hid: 'robots', name: 'robots', content: 'index, follow' },
        {
          'http-equiv': 'Content-Security-Policy',
          content: `
            default-src 'self' https: data:;
            img-src 'self' https: http: data:;
            font-src 'self' https: data:;
            style-src 'self' https: 'unsafe-inline';
            script-src 'self' https: 'unsafe-inline' 'unsafe-eval';
            connect-src 'self' https: http: https://alkuszom.info/api/public;
          `,
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://www.alkuszom.info' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap',
        },
      ],
    },
  },

  modules: [
    '@nuxt/image',
    '@nuxtjs/sitemap',
    [
      'nuxt-mail',
      {
        message: {
          to: 'web@alkuszom.info',
        },
        smtp: {
          host: 's56.tarhely.com',
          port: 587,
          auth: {
            user: 'web@alkuszom.info',
            pass: '#+SpM_HR~QCy',
          },
        },
      },
    ],
    '@vite-pwa/nuxt',
  ],

  site: {
    url: 'https://www.alkuszom.info',
    name: 'Biztos Alkuszom',
  },

  sitemap: {
    sources: ['/api/sitemap'],
  },

  pwa: {
    manifest: {
      name: 'Alkuszom',
      short_name: 'Alkuszom',
      description: 'Biztos Alkuszom',
      display: 'standalone',
      start_url: '/',
      background_color: '#ffffff',
      theme_color: '#000000',
      icons: [
        {
          src: 'icons/icon_64x64.png',
          sizes: '64x64',
          type: 'image/png',
        },
        {
          src: 'icons/icon_144x144.png',
          sizes: '144x144',
          type: 'image/png',
        },
        {
          src: 'icons/icon_192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'icons/icon_512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    // workbox: {
    //   navigateFallback: '/index.html',
    // },
    devOptions: {
      enabled: true,
      type: 'module',
    },
  },

  compatibilityDate: '2024-09-19',
})
