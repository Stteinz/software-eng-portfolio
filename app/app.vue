<script setup>
import { portfolio } from '~/data/portfolio'

const navItems = [
  { id: 'home', label: '#home' },
  { id: 'works', label: '#works' },
  { id: 'about-me', label: '#about-me' },
  { id: 'contacts', label: '#contacts' }
]

const title = `${portfolio.name} | ${portfolio.role}`
const description = `Portfolio de ${portfolio.name} - ${portfolio.role}.`

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap' }
  ],
  htmlAttrs: {
    lang: 'pt-BR',
    class: 'dark'
  }
})

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div class="min-h-screen bg-[var(--portfolio-bg)] text-[var(--portfolio-text)] font-sans">
    <!-- Left sidebar: fixed icons -->
    <aside class="fixed left-0 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4 pl-3 md:pl-4">
      <a
        :href="portfolio.links.github"
        target="_blank"
        rel="noopener"
        class="w-10 h-10 rounded-full border border-[var(--portfolio-border)] flex items-center justify-center text-[var(--portfolio-text-muted)] hover:text-[var(--portfolio-accent)] hover:border-[var(--portfolio-accent)] transition-colors"
        aria-label="GitHub"
      >
        <UIcon name="i-simple-icons-github" class="w-5 h-5" />
      </a>
      <a
        :href="portfolio.links.linkedin"
        target="_blank"
        rel="noopener"
        class="w-10 h-10 rounded-full border border-[var(--portfolio-border)] flex items-center justify-center text-[var(--portfolio-text-muted)] hover:text-[var(--portfolio-accent)] hover:border-[var(--portfolio-accent)] transition-colors"
        aria-label="LinkedIn"
      >
        <UIcon name="i-simple-icons-linkedin" class="w-5 h-5" />
      </a>
      <button
        type="button"
        class="w-10 h-10 rounded-full border border-[var(--portfolio-border)] flex items-center justify-center text-[var(--portfolio-text-muted)] hover:text-[var(--portfolio-accent)] hover:border-[var(--portfolio-accent)] transition-colors"
        aria-label="Settings"
      >
        <UIcon name="i-lucide-settings" class="w-5 h-5" />
      </button>
      <a
        href="#contacts"
        class="w-10 h-10 rounded-full border border-[var(--portfolio-border)] flex items-center justify-center text-[var(--portfolio-text-muted)] hover:text-[var(--portfolio-accent)] hover:border-[var(--portfolio-accent)] transition-colors"
        aria-label="Contact"
      >
        <UIcon name="i-lucide-mail" class="w-5 h-5" />
      </a>
    </aside>

    <!-- Main content: with left margin for sidebar -->
    <div class="md:ml-16">
      <!-- Header -->
      <header class="border-b border-[var(--portfolio-border)] sticky top-0 z-10 bg-[var(--portfolio-bg)]/95 backdrop-blur">
        <div class="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <NuxtLink to="/" class="text-lg font-bold text-[var(--portfolio-text)] hover:text-[var(--portfolio-accent)] transition-colors">
            {{ portfolio.name.split(' ')[0] }}
          </NuxtLink>
          <nav class="flex items-center gap-6">
            <a
              v-for="item in navItems"
              :key="item.id"
              :href="`#${item.id}`"
              class="text-sm text-[var(--portfolio-text-muted)] hover:text-[var(--portfolio-accent)] transition-colors"
            >
              {{ item.label }}
            </a>
            <span class="text-sm text-[var(--portfolio-text-muted)] border-l border-[var(--portfolio-border)] pl-4">EN</span>
          </nav>
        </div>
      </header>

      <main>
        <NuxtPage />
      </main>

      <!-- Footer -->
      <footer class="border-t border-[var(--portfolio-border)] mt-16">
        <div class="max-w-6xl mx-auto px-4 md:px-6 py-8">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
            <div class="flex flex-col gap-1">
              <span class="font-semibold">{{ portfolio.name }}</span>
              <a :href="`mailto:${portfolio.email}`" class="text-sm text-[var(--portfolio-text-muted)] hover:text-[var(--portfolio-accent)] flex items-center gap-2">
                <UIcon name="i-lucide-mail" class="w-4 h-4" />
                {{ portfolio.email }}
              </a>
              <span class="text-sm text-[var(--portfolio-text-muted)]">{{ portfolio.role }}</span>
            </div>
            <div>
              <p class="text-sm font-semibold text-[var(--portfolio-text-muted)] mb-2">Media</p>
              <div class="flex gap-3">
                <a :href="portfolio.links.github" target="_blank" rel="noopener" class="text-[var(--portfolio-text-muted)] hover:text-[var(--portfolio-accent)]" aria-label="GitHub">
                  <UIcon name="i-simple-icons-github" class="w-5 h-5" />
                </a>
                <a :href="portfolio.links.linkedin" target="_blank" rel="noopener" class="text-[var(--portfolio-text-muted)] hover:text-[var(--portfolio-accent)]" aria-label="LinkedIn">
                  <UIcon name="i-simple-icons-linkedin" class="w-5 h-5" />
                </a>
                <a :href="portfolio.links.spotify" class="text-[var(--portfolio-text-muted)] hover:text-[var(--portfolio-accent)]" aria-label="Spotify">
                  <UIcon name="i-simple-icons-spotify" class="w-5 h-5" />
                </a>
                <a :href="portfolio.links.discord" target="_blank" rel="noopener" class="text-[var(--portfolio-text-muted)] hover:text-[var(--portfolio-accent)]" aria-label="Discord">
                  <UIcon name="i-simple-icons-discord" class="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <p class="text-center text-sm text-[var(--portfolio-text-muted)]">
            © Copyright {{ new Date().getFullYear() }}. Made by {{ portfolio.name.split(' ')[0] }}
          </p>
        </div>
      </footer>
    </div>
  </div>
</template>
