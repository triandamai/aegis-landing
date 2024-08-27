// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  future:{
    typescriptBundlerResolution:false
  },
  nitro:{
    preset:'vercel'
  },
  ssr:true,
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxt/image', '@nuxtjs/supabase'],
  imports:{
    autoImport:true,
    dirs:['composables']
  },
  app:{
    head:{
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1'
    }
  },
  supabase:{
    redirect:false,
    serviceKey: process.env.SUPABASE_KEY,
    url:process.env.SUPABASE_URL,
  }
})