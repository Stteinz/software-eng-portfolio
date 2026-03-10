<script setup lang="ts">
/**
 * Layout minimalista para a rota /embed.
 * Usado quando o portfólio é exibido dentro do iframe na tela do modelo 3D.
 * Sem Spline, sem sidebar - apenas o conteúdo do portfólio.
 */
</script>

<template>
  <div class="min-h-screen bg-[var(--portfolio-bg)] text-[var(--portfolio-text)] font-sans overflow-auto">
    <slot />
  </div>
</template>
