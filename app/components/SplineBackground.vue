<script setup lang="ts">
/**
 * Spline 3D background com linhas decorativas.
 * Para usar sua própria cena: crie no Spline (spline.design), exporte como "Code" e defina NUXT_PUBLIC_SPLINE_SCENE_URL no .env
 */
const config = useRuntimeConfig().public
const sceneUrl = (config as { splineSceneUrl?: string }).splineSceneUrl || 'https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode'

const props = withDefaults(
  defineProps<{
    /** Opacidade do canvas (0-1) para não competir com o conteúdo */
    opacity?: number
  }>(),
  { opacity: 0.85 }
)

const canvasRef = ref<HTMLCanvasElement | null>(null)
const isLoaded = ref(false)

onMounted(async () => {
  const canvas = canvasRef.value
  if (!canvas) return

  try {
    const { Application } = await import('@splinetool/runtime')
    const app = new Application(canvas)
    await app.load(sceneUrl)
    isLoaded.value = true
  } catch (e) {
    console.warn('[SplineBackground] Could not load scene:', e)
  }
})
</script>

<template>
  <div
    class="spline-background"
    aria-hidden="true"
  >
    <canvas
      ref="canvasRef"
      class="spline-canvas"
      :style="{ opacity: isLoaded ? opacity : 0 }"
    />
  </div>
</template>

<style scoped>
.spline-background {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  overflow: hidden;
}

.spline-canvas {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.6s ease-out;
}
</style>
