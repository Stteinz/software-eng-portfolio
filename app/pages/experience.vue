<script setup lang="ts">
/**
 * Experiência 3D: modelo GLB com portfólio na tela do computador.
 * Coloque seu arquivo .glb em public/models/ e nomeie o mesh da tela como "Screen" no Blender.
 */
const config = useRuntimeConfig().public as { glbModelUrl?: string; screenObjectName?: string; screenFlip?: boolean; screenNudge?: number }

const modelUrl = computed(() => config.glbModelUrl || '/models/computador-cenario.glb')
const screenObjectName = computed(() => config.screenObjectName || 'Screen')
const screenFlip = computed(() => config.screenFlip ?? false)
const screenNudge = computed(() => config.screenNudge ?? -0.02)
</script>

<template>
  <div class="experience-page">
    <ClientOnly>
      <Portfolio3DScene
        :model-url="modelUrl"
        :screen-object-name="screenObjectName"
        :screen-flip="screenFlip"
        :screen-nudge="screenNudge"
      />
    </ClientOnly>
    <NuxtLink
      to="/"
      class="experience-link"
    >
      ← Ver portfólio tradicional
    </NuxtLink>
  </div>
</template>

<style scoped>
.experience-page {
  position: relative;
  width: 100%;
  min-height: 100vh;
}

.experience-link {
  position: fixed;
  bottom: 1.5rem;
  left: 1.5rem;
  z-index: 30;
  padding: 0.5rem 1rem;
  background: rgba(15, 15, 20, 0.9);
  border: 1px solid var(--portfolio-border);
  color: var(--portfolio-text-muted);
  font-size: 0.875rem;
  text-decoration: none;
  border-radius: 0.25rem;
  transition: color 0.2s, border-color 0.2s;
}

.experience-link:hover {
  color: var(--portfolio-accent);
  border-color: var(--portfolio-accent);
}
</style>
