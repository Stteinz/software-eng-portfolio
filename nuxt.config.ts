// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    public: {
      /** URL da cena Spline (.splinecode). Crie em spline.design, exporte como Code e defina NUXT_PUBLIC_SPLINE_SCENE_URL no .env */
      splineSceneUrl: process.env.NUXT_PUBLIC_SPLINE_SCENE_URL || 'https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode',
      /** EmailJS: recebimento de e-mails do formulário de contato. Defina no .env ou use os valores abaixo. */
      emailjsPublicKey: process.env.NUXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'O7kfWKKPEZ_X9SAq4',
      emailjsServiceId: process.env.NUXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_n89edyz',
      emailjsTemplateId: process.env.NUXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_1d4e2hu'
    }
  },

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
