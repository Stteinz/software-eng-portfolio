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
            {{ ui.contactMe }}
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

    <!-- #projects - timeline dinâmica -->
    <section id="works" class="max-w-6xl mx-auto px-4 md:px-6 py-16">
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <div>
          <h2 class="section-title">
            <span class="hash">#</span>{{ ui.projects }}
          </h2>
          <div class="section-title-underline" />
        </div>
      </div>
      <!-- Timeline vertical -->
      <div class="relative">
        <div class="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-[var(--portfolio-border)]" aria-hidden="true" />
        <ul class="space-y-0">
          <li
            v-for="(project, i) in portfolio.projects"
            :key="i"
            class="relative pl-12 md:pl-16 pb-12 last:pb-0"
          >
            <div class="absolute left-2 md:left-4 top-1 w-4 h-4 rounded-full bg-[var(--portfolio-accent)] border-2 border-[var(--portfolio-bg)]" aria-hidden="true" />
            <div class="portfolio-box flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div class="flex-1 min-w-0">
                <span class="text-xs font-mono text-[var(--portfolio-accent)]">{{ project.year }}</span>
                <h3 class="font-bold text-lg text-[var(--portfolio-text)] mt-1 mb-2">{{ project.name }}</h3>
                <p class="text-sm text-[var(--portfolio-text-muted)]">{{ project.description }}</p>
              </div>
              <a
                :href="project.repoUrl || project.liveUrl"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center gap-2 py-2 px-4 text-sm border border-[var(--portfolio-border)] text-[var(--portfolio-text-muted)] hover:text-[var(--portfolio-accent)] hover:border-[var(--portfolio-accent)] transition-colors shrink-0"
              >
                <UIcon name="i-simple-icons-github" class="w-4 h-4" />
                Repo
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <!-- #skills -->
    <section id="skills" class="max-w-6xl mx-auto px-4 md:px-6 py-16">
      <h2 class="section-title">
        <span class="hash">#</span>{{ ui.skills }}
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
        <span class="hash">#</span>{{ ui.aboutMe }}
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
            {{ ui.readMore }}
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

    <!-- #experiences -->
    <section id="experiences" class="max-w-6xl mx-auto px-4 md:px-6 py-16">
      <h2 class="section-title">
        <span class="hash">#</span>{{ ui.experiences }}
      </h2>
      <div class="section-title-underline" />

      <!-- Experiência profissional -->
      <h3 class="text-lg font-semibold text-[var(--portfolio-text)] mt-8 mb-4">{{ ui.professionalExperience }}</h3>
      <div class="space-y-6">
        <div
          v-for="(job, i) in portfolio.professionalExperience"
          :key="'job-' + i"
          class="portfolio-box"
        >
          <div class="flex flex-wrap items-baseline gap-2">
            <h4 class="font-semibold text-[var(--portfolio-text)]">{{ job.role }}</h4>
            <span v-if="job.seasonal" class="text-xs px-2 py-0.5 border border-[var(--portfolio-accent)] text-[var(--portfolio-accent)]">{{ ui.seasonal }}</span>
          </div>
          <p class="text-sm text-[var(--portfolio-accent)] mt-1">{{ job.company }} · {{ job.period }}</p>
          <ul class="mt-4 space-y-2 text-sm text-[var(--portfolio-text-muted)] list-disc list-inside">
            <li v-for="(bullet, j) in job.bullets" :key="j">{{ bullet }}</li>
          </ul>
        </div>
      </div>

      <!-- Formação e projetos -->
      <h3 class="text-lg font-semibold text-[var(--portfolio-text)] mt-10 mb-4">{{ ui.educationAndProjects }}</h3>
      <div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
        <div
          v-for="(exp, i) in portfolio.experiences"
          :key="'exp-' + i"
          class="portfolio-box"
        >
          <div class="flex items-start gap-3">
            <span
              class="shrink-0 w-10 h-10 rounded border border-[var(--portfolio-accent)] flex items-center justify-center text-[var(--portfolio-accent)]"
              aria-hidden="true"
            >
              <UIcon
                :name="exp.type === 'education' ? 'i-lucide-graduation-cap' : exp.type === 'project' ? 'i-lucide-folder-git-2' : 'i-lucide-book-open'"
                class="w-5 h-5"
              />
            </span>
            <div class="min-w-0">
              <h4 class="font-semibold text-[var(--portfolio-text)]">{{ exp.title }}</h4>
              <p class="text-sm text-[var(--portfolio-accent)]">{{ exp.subtitle }} · {{ exp.period }}</p>
              <p class="text-sm text-[var(--portfolio-text-muted)] mt-2">{{ exp.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Desenvolvimento complementar -->
      <h3 class="text-lg font-semibold text-[var(--portfolio-text)] mt-10 mb-4">{{ ui.complementaryDevelopment }}</h3>
      <div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
        <div
          v-for="(course, i) in portfolio.complementaryDevelopment"
          :key="'course-' + i"
          class="portfolio-box flex items-start gap-3"
        >
          <span class="shrink-0 text-xs font-mono text-[var(--portfolio-accent)] w-12">{{ course.hours }}h</span>
          <div class="min-w-0">
            <h4 class="font-semibold text-[var(--portfolio-text)]">{{ course.title }}</h4>
            <p class="text-sm text-[var(--portfolio-accent)]">{{ course.provider }}</p>
            <p class="text-sm text-[var(--portfolio-text-muted)] mt-1">{{ course.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- #contacts -->
    <section id="contacts" class="max-w-6xl mx-auto px-4 md:px-6 py-16">
      <h2 class="section-title">
        <span class="hash">#</span>{{ ui.contacts }}
      </h2>
      <div class="section-title-underline" />
      <div class="grid md:grid-cols-2 gap-12 items-start">
        <div class="space-y-6">
          <p class="text-[var(--portfolio-text-muted)]">
            {{ portfolio.contactsIntro }}
          </p>
          <div class="portfolio-box">
            <h3 class="font-semibold text-[var(--portfolio-text)] mb-4">{{ ui.messageMeHere }}</h3>
            <div class="space-y-3 text-sm">
              <a
                :href="portfolio.links.discord"
                target="_blank"
                rel="noopener"
                class="flex items-center gap-2 text-[var(--portfolio-text-muted)] hover:text-[var(--portfolio-accent)]"
              >
                <UIcon name="i-simple-icons-discord" class="w-4 h-4 shrink-0" />
                {{ portfolio.discord }}
              </a>
              <a
                :href="`mailto:${portfolio.email}`"
                class="flex items-center gap-2 text-[var(--portfolio-text-muted)] hover:text-[var(--portfolio-accent)]"
              >
                <UIcon name="i-lucide-mail" class="w-4 h-4 shrink-0" />
                {{ portfolio.email }}
              </a>
              <a
                :href="portfolio.links.linkedin"
                target="_blank"
                rel="noopener"
                class="flex items-center gap-2 text-[var(--portfolio-text-muted)] hover:text-[var(--portfolio-accent)]"
              >
                <UIcon name="i-simple-icons-linkedin" class="w-4 h-4 shrink-0" />
                LinkedIn
              </a>
              <a
                :href="portfolio.links.github"
                target="_blank"
                rel="noopener"
                class="flex items-center gap-2 text-[var(--portfolio-text-muted)] hover:text-[var(--portfolio-accent)]"
              >
                <UIcon name="i-simple-icons-github" class="w-4 h-4 shrink-0" />
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div class="portfolio-box">
          <h3 class="font-semibold text-[var(--portfolio-text)] mb-4">{{ ui.sendMessage }}</h3>
          <form
            ref="formRef"
            class="space-y-4"
            @submit.prevent="onSubmit"
          >
            <div>
              <label for="contact-name" class="block text-sm font-medium text-[var(--portfolio-text-muted)] mb-1">{{ ui.yourName }}</label>
              <input
                id="contact-name"
                v-model="form.name"
                type="text"
                name="name"
                required
                :placeholder="ui.yourName"
                class="w-full px-3 py-2 bg-[var(--portfolio-bg)] border border-[var(--portfolio-border)] text-[var(--portfolio-text)] placeholder-[var(--portfolio-text-muted)] focus:border-[var(--portfolio-accent)] focus:outline-none"
                :class="{ 'border-red-500': errors.name }"
              >
              <p v-if="errors.name" class="mt-1 text-xs text-red-400">{{ errors.name }}</p>
            </div>
            <div>
              <label for="contact-email" class="block text-sm font-medium text-[var(--portfolio-text-muted)] mb-1">{{ ui.yourEmail }}</label>
              <input
                id="contact-email"
                v-model="form.email"
                type="email"
                name="email"
                required
                :placeholder="ui.yourEmail"
                class="w-full px-3 py-2 bg-[var(--portfolio-bg)] border border-[var(--portfolio-border)] text-[var(--portfolio-text)] placeholder-[var(--portfolio-text-muted)] focus:border-[var(--portfolio-accent)] focus:outline-none"
                :class="{ 'border-red-500': errors.email }"
              >
              <p v-if="errors.email" class="mt-1 text-xs text-red-400">{{ errors.email }}</p>
            </div>
            <div>
              <label for="contact-message" class="block text-sm font-medium text-[var(--portfolio-text-muted)] mb-1">{{ ui.message }}</label>
              <textarea
                id="contact-message"
                v-model="form.message"
                name="message"
                required
                rows="4"
                :placeholder="ui.message"
                class="w-full px-3 py-2 bg-[var(--portfolio-bg)] border border-[var(--portfolio-border)] text-[var(--portfolio-text)] placeholder-[var(--portfolio-text-muted)] focus:border-[var(--portfolio-accent)] focus:outline-none resize-y"
                :class="{ 'border-red-500': errors.message }"
              />
              <p v-if="errors.message" class="mt-1 text-xs text-red-400">{{ errors.message }}</p>
            </div>
            <p v-if="formStatus" class="text-sm" :class="formSuccess ? 'text-green-400' : 'text-red-400'">
              {{ formStatus }}
            </p>
            <button
              type="submit"
              class="w-full py-3 border-2 border-[var(--portfolio-accent)] text-[var(--portfolio-accent)] font-semibold hover:bg-[var(--portfolio-accent)] hover:text-[var(--portfolio-bg)] transition-colors"
              :disabled="formSubmitting"
            >
              {{ formSubmitting ? '...' : ui.sendMessage }}
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- #my-fun-facts -->
    <section id="my-fun-facts" class="max-w-4xl mx-auto px-4 md:px-6 py-16">
      <h2 class="section-title">
        <span class="hash">#</span>{{ ui.myFunFacts }}
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
const { portfolio, ui } = usePortfolioLocale()

const config = useRuntimeConfig().public as {
  emailjsPublicKey?: string
  emailjsServiceId?: string
  emailjsTemplateId?: string
}
const emailjsConfig = {
  publicKey: config.emailjsPublicKey || '',
  serviceId: config.emailjsServiceId || '',
  templateId: config.emailjsTemplateId || ''
}

const formRef = ref<HTMLFormElement | null>(null)
const form = reactive({ name: '', email: '', message: '' })
const errors = reactive<Record<string, string>>({ name: '', email: '', message: '' })
const formStatus = ref('')
const formSuccess = ref(false)
const formSubmitting = ref(false)

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate (): boolean {
  errors.name = ''
  errors.email = ''
  errors.message = ''
  let valid = true
  if (!form.name.trim()) {
    errors.name = ui.value.required
    valid = false
  }
  if (!form.email.trim()) {
    errors.email = ui.value.required
    valid = false
  } else if (!emailRegex.test(form.email)) {
    errors.email = ui.value.invalidEmail
    valid = false
  }
  if (!form.message.trim()) {
    errors.message = ui.value.required
    valid = false
  }
  return valid
}

async function onSubmit () {
  formStatus.value = ''
  if (!validate()) return

  if (!emailjsConfig.publicKey || !emailjsConfig.serviceId || !emailjsConfig.templateId) {
    formStatus.value = ui.value.formError
    formSuccess.value = false
    return
  }

  formSubmitting.value = true
  try {
    const emailjs = await import('@emailjs/browser')
    emailjs.init({ publicKey: emailjsConfig.publicKey })

    // Variáveis para o template: use {{from_name}}, {{reply_to}} ou {{from_email}} e {{message}} no corpo.
    // No painel EmailJS, defina o campo "Reply To" do template como {{reply_to}} para o "Responder" ir para quem preencheu o formulário.
    await emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      {
        from_name: form.name,
        reply_to: form.email,
        from_email: form.email,
        message: form.message,
        sender_line: `${form.name} <${form.email}>`
      }
    )

    formStatus.value = ui.value.formSuccess
    formSuccess.value = true
    form.name = ''
    form.email = ''
    form.message = ''
  } catch {
    formStatus.value = ui.value.formError
    formSuccess.value = false
  }
  formSubmitting.value = false
}
</script>
