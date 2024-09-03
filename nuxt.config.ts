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
  modules: [
    '@pinia/nuxt',
    '@nuxt/image',
    '@nuxtjs/supabase',
    'vuetify-nuxt-module',
    'nuxt-mail'
  ],
  imports:{
    autoImport:true,
    dirs:['composables','schema']
  },
  app:{
    head:{
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1'
    }
  },
  runtimeConfig:{
    public:{
      BASE_URL:process.env.BASE_URL,
    }
  },
  supabase:{
    redirect:false,
    serviceKey: process.env.SUPABASE_KEY,
    url:process.env.SUPABASE_URL,
  },
  vuetify:{

  },
  mail:{
    message: {
      to: 'foo@bar.de',
    },
    smtp:{
      service:'gmail',
      auth:{
        user:process.env.SMTP_USER,
        pass:process.env.SMTP_PASS,
      }
    }
  }
})