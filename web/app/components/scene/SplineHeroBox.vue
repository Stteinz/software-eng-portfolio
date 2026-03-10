<script setup lang="ts">
/**
 * Cena Spline no quadrado hero do portfólio.
 * Equivalente ao @splinetool/react-spline no React.
 * Usa spline-viewer com fundo 100% transparente.
 */
const config = useRuntimeConfig().public
const sceneUrl = (config as { splineSceneUrl?: string }).splineSceneUrl || 'https://prod.spline.design/ckdVsH19CN1mIRH4/scene.splinecode'
</script>

<template>
  <spline-viewer
    :url="sceneUrl"
    background="transparent"
    logo="no"
    class="spline-hero-viewer"
    loading="auto"
  />
</template>

<style scoped>
.spline-hero-viewer {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 280px;
}
</style>
