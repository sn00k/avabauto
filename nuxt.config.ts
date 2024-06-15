// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0',
        },
      ],
    },
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['ehtml'].includes(tag),
    },
  },
  runtimeConfig: {
    mailerSendApiKey: process.env.NUXT_MAILERSEND_API_KEY,
    turnstile: {
      secretKey: process.env.NUXT_TURNSTILE_SECRET_KEY,
    },
    public: {
      turnstile: {
        siteKey: process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY,
      },
    },
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@vue-email/nuxt', '@nuxtjs/turnstile'],
  turnstile: {
    siteKey: process.env.TURNSTILE_SITE_KEY,
    addValidateEndpoint: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
