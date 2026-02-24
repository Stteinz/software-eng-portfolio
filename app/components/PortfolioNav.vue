<template>
  <nav class="flex items-center gap-6">
    <a
      v-for="item in navItems"
      :key="item.id"
      :href="`#${item.id}`"
      class="text-sm font-medium text-muted hover:text-foreground transition-colors"
    >
      {{ item.label }}
    </a>
  </nav>
</template>

<script setup lang="ts">
const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' }
]
</script>
