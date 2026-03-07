// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui'
  ],

  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
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
      emailjsTemplateId: process.env.NUXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_1d4e2hu',
      /** GLB 3D: modelo com computador. Coloque o .glb em public/models/ e defina o caminho. No nosso caso, o arquivo é computador-cenario.glb. */
      glbModelUrl: process.env.NUXT_PUBLIC_GLB_MODEL_URL || '/models/computador-cenario.glb',
      /** Nome do objeto da tela no GLB (no nosso caso, o nome é Screen). Ex: Screen, Monitor, Display */
      screenObjectName: process.env.NUXT_PUBLIC_SCREEN_OBJECT_NAME || 'screen',
      /** true = girar a tela 180° (se o portfólio aparecer de costas) */
      screenFlip: process.env.NUXT_PUBLIC_SCREEN_FLIP === 'true',
      /** Ajuste fino da posição: empurra a tela ao longo da normal. Positivo=para frente, negativo=para trás (em direção ao monitor) */
      screenNudge: Number(process.env.NUXT_PUBLIC_SCREEN_NUDGE ?? -0.02)
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
