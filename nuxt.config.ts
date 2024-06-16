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
  // Turnstile configuration
  turnstile: {
    addValidateEndpoint: true,
  },
  runtimeConfig: {
    mailerSendApiKey: process.env.NUXT_MAILERSEND_API_KEY,
    // Used by the generated /_turnstiles/validate endpoint
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
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
