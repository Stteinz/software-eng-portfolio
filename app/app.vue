<template>
  <div id="app" class="bg-slate-950 text-white">
    <Navigation />
    <Hero />
    <Projects />
    <Skills />
    <About />
    <Contacts />
    <Footer />
  </div>
</template>

<script setup>
useHead({
  title: 'Portfolio',
  meta: [
    { name: 'description', content: 'Software Engineering Portfolio' }
  ]
})
</script>
