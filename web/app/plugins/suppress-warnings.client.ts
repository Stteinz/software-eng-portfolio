/**
 * Suprime avisos conhecidos do Vue/Nuxt que poluem o console em desenvolvimento.
 */
export default defineNuxtPlugin((nuxtApp) => {
  const originalWarn = nuxtApp.vueApp.config.warnHandler
  nuxtApp.vueApp.config.warnHandler = (msg, instance, trace) => {
    if (typeof msg === 'string' && msg.includes('Suspense') && msg.includes('experimental')) return
    if (typeof msg === 'string' && msg.includes('Extraneous non-props attributes') && msg.includes('could not be automatically inherited')) return
    if (originalWarn) originalWarn(msg, instance, trace)
    else console.warn('[Vue warn]:', msg, trace)
  }
})
