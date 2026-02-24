<template>
  <div>
    <!-- Hero #home -->
    <section id="home" class="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--portfolio-text)] mb-4">
            {{ portfolio.name }}
          </h1>
          <p class="text-lg text-[var(--portfolio-text-muted)] mb-8">
            {{ portfolio.role }}
          </p>
          <a
            href="#contacts"
            class="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--portfolio-accent)] text-[var(--portfolio-accent)] font-semibold hover:bg-[var(--portfolio-accent)] hover:text-[var(--portfolio-bg)] transition-colors"
          >
            Contact me !!
          </a>
        </div>
        <div class="relative">
          <!-- Profile image placeholder with purple geometric outline -->
          <div class="aspect-square max-w-md mx-auto relative">
            <div class="absolute inset-0 rounded-lg border-2 border-[var(--portfolio-accent)] transform rotate-[-2deg] scale-[0.95]" />
            <div class="absolute inset-0 rounded-lg border border-[var(--portfolio-border)] flex items-center justify-center bg-[var(--portfolio-bg-elevated)]">
              <UIcon name="i-lucide-user" class="w-24 h-24 text-[var(--portfolio-text-muted)]" />
            </div>
            <!-- Decorative dots -->
            <div class="absolute -top-2 -right-2 w-8 h-8 dot-pattern rounded" />
            <div class="absolute -bottom-2 -left-2 w-6 h-6 dot-pattern rounded" />
          </div>
          <!-- Currently working on -->
          <div class="mt-6 flex items-center gap-2 px-4 py-3 border border-[var(--portfolio-accent)] max-w-fit">
            <span class="w-2 h-2 bg-[var(--portfolio-accent)]" />
            <span class="text-sm text-[var(--portfolio-text)]">{{ portfolio.currentlyWorkingOn }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Quote -->
    <section class="max-w-4xl mx-auto px-4 md:px-6 py-12">
      <div class="portfolio-box border-[var(--portfolio-border)]">
        <p class="text-lg md:text-xl text-[var(--portfolio-text)] italic mb-2">
          "{{ portfolio.quote.text }}"
        </p>
        <p class="text-right text-sm text-[var(--portfolio-text-muted)]">
          — {{ portfolio.quote.author }}
        </p>
      </div>
    </section>

    <!-- #projects (#works) -->
    <section id="works" class="max-w-6xl mx-auto px-4 md:px-6 py-16">
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <div>
          <h2 class="section-title">
            <span class="hash">#</span>projects
          </h2>
          <div class="section-title-underline" />
        </div>
        <a href="#works" class="text-sm text-[var(--portfolio-text-muted)] hover:text-[var(--portfolio-accent)]">
          View all ->
        </a>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(project, i) in portfolio.projects"
          :key="i"
          class="portfolio-box flex flex-col"
        >
          <div class="aspect-video bg-[var(--portfolio-bg-elevated)] border border-[var(--portfolio-border)] rounded mb-4 flex items-center justify-center">
            <UIcon name="i-lucide-folder-git-2" class="w-12 h-12 text-[var(--portfolio-text-muted)]" />
          </div>
          <h3 class="font-bold text-lg text-[var(--portfolio-text)] mb-2">{{ project.name }}</h3>
          <p class="text-sm text-[var(--portfolio-text-muted)] mb-4 flex-1">{{ project.description }}</p>
          <div class="flex gap-2">
            <a
              :href="project.liveUrl"
              class="flex-1 py-2 text-center text-sm border border-[var(--portfolio-border)] text-[var(--portfolio-text-muted)] hover:text-[var(--portfolio-accent)] hover:border-[var(--portfolio-accent)] transition-colors"
            >
              Live &lt;-&gt;
            </a>
            <a
              :href="project.cachedUrl"
              class="flex-1 py-2 text-center text-sm border border-[var(--portfolio-border)] text-[var(--portfolio-text-muted)] hover:text-[var(--portfolio-accent)] hover:border-[var(--portfolio-accent)] transition-colors"
            >
              Cached &gt;
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- #skills -->
    <section id="skills" class="max-w-6xl mx-auto px-4 md:px-6 py-16">
      <h2 class="section-title">
        <span class="hash">#</span>skills
      </h2>
      <div class="section-title-underline" />
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        <div
          v-for="cat in portfolio.skills"
          :key="cat.name"
          class="portfolio-box"
        >
          <h3 class="font-semibold text-[var(--portfolio-text)] mb-3">{{ cat.name }}</h3>
          <ul class="space-y-1 text-sm text-[var(--portfolio-text-muted)]">
            <li v-for="(skill, j) in cat.items" :key="j">{{ skill }}</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- #about-me -->
    <section id="about-me" class="max-w-6xl mx-auto px-4 md:px-6 py-16">
      <h2 class="section-title">
        <span class="hash">#</span>about-me
      </h2>
      <div class="section-title-underline" />
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p class="text-[var(--portfolio-text-muted)] leading-relaxed whitespace-pre-line mb-6">
            {{ portfolio.about }}
          </p>
          <a
            href="#contacts"
            class="inline-flex items-center gap-2 text-[var(--portfolio-text-muted)] hover:text-[var(--portfolio-accent)] transition-colors"
          >
            Read more
            <span class="text-[var(--portfolio-accent)]">→</span>
          </a>
        </div>
        <div class="relative">
          <div class="aspect-[4/5] max-w-sm mx-auto border border-[var(--portfolio-border)] flex items-center justify-center bg-[var(--portfolio-bg-elevated)]">
            <UIcon name="i-lucide-user" class="w-32 h-32 text-[var(--portfolio-text-muted)]" />
          </div>
          <div class="absolute bottom-0 right-0 w-24 h-0.5 bg-[var(--portfolio-accent)]" />
        </div>
      </div>
    </section>

    <!-- #contacts -->
    <section id="contacts" class="max-w-6xl mx-auto px-4 md:px-6 py-16">
      <h2 class="section-title">
        <span class="hash">#</span>contacts
      </h2>
      <div class="section-title-underline" />
      <div class="grid md:grid-cols-2 gap-12 items-start">
        <p class="text-[var(--portfolio-text-muted)]">
          {{ portfolio.contactsIntro }}
        </p>
        <div class="portfolio-box">
          <h3 class="font-semibold text-[var(--portfolio-text)] mb-4">Message me here</h3>
          <div class="space-y-3 text-sm">
            <a
              :href="portfolio.links.discord"
              target="_blank"
              rel="noopener"
              class="flex items-center gap-2 text-[var(--portfolio-text-muted)] hover:text-[var(--portfolio-accent)]"
            >
              <UIcon name="i-simple-icons-discord" class="w-4 h-4" />
              {{ portfolio.discord }}
            </a>
            <a
              :href="`mailto:${portfolio.email}`"
              class="flex items-center gap-2 text-[var(--portfolio-text-muted)] hover:text-[var(--portfolio-accent)]"
            >
              <UIcon name="i-lucide-mail" class="w-4 h-4" />
              {{ portfolio.email }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- #my-fun-facts -->
    <section id="my-fun-facts" class="max-w-4xl mx-auto px-4 md:px-6 py-16">
      <h2 class="section-title">
        <span class="hash">#</span>my-fun-facts
      </h2>
      <div class="section-title-underline" />
      <div class="space-y-3">
        <div
          v-for="(fact, i) in portfolio.funFacts"
          :key="i"
          class="portfolio-box"
        >
          {{ fact }}
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { portfolio } from '~/data/portfolio'
</script>
