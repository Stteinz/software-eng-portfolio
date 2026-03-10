<script setup lang="ts">
const { locale, portfolio } = usePortfolioLocale()

const title = computed(() => `${portfolio.value.name} | ${portfolio.value.role}`)
const description = computed(() => `Portfolio de ${portfolio.value.name} - ${portfolio.value.role}.`)

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
    lang: computed(() => (locale.value === 'pt-BR' ? 'pt-BR' : 'en')),
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
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
