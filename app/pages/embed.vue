<script setup lang="ts">
/**
 * Portfólio exibido dentro do iframe na tela do modelo 3D.
 * Layout embed: minimalista (sem Spline, sem sidebar).
 */
definePageMeta({ layout: 'embed' })

const { portfolio } = usePortfolioLocale()
</script>

<template>
  <div class="md:ml-0">
    <!-- Header mínimo para navegação dentro do iframe -->
    <header class="border-b border-[var(--portfolio-border)] sticky top-0 z-10 bg-[var(--portfolio-bg)]/95 backdrop-blur">
      <div class="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        <span class="text-lg font-bold text-[var(--portfolio-text)]">{{ portfolio.name.split(' ')[0] }}</span>
        <nav class="flex items-center gap-4">
          <a href="#home" class="text-sm text-[var(--portfolio-text-muted)] hover:text-[var(--portfolio-accent)]">Home</a>
          <a href="#works" class="text-sm text-[var(--portfolio-text-muted)] hover:text-[var(--portfolio-accent)]">Works</a>
          <a href="#about-me" class="text-sm text-[var(--portfolio-text-muted)] hover:text-[var(--portfolio-accent)]">About</a>
          <a href="#contacts" class="text-sm text-[var(--portfolio-text-muted)] hover:text-[var(--portfolio-accent)]">Contact</a>
        </nav>
      </div>
    </header>
    <PortfolioContent />
  </div>
</template>
