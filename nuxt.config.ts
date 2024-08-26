// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  devtools: { enabled: true },
  modules: [
    '@nuxt/icon',
    '@pinia/nuxt',
    '@hebilicious/form-actions-nuxt'
  ],
  imports:{
    autoImport:true,
    dirs:['composables']
  },
  icon:{
    serverBundle:{
      collections:['uil','mdi','material-symbols']
    }
  },
  app:{
    head:{
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1'
    }
  }
})