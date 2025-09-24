<script setup lang="ts">
const services = [
  {
    title: 'Laravel — Sistemas Web & APIs',
    desc: 'Backoffice, portais e APIs REST em Laravel 10 com Blade/Inertia/Vue. Auth (JWT/Session), RBAC, filas/Redis, testes, docs (OpenAPI).',
    bullets: ['Painéis administrativos', 'Portais internos', 'Integrações externas', 'Relatórios & métricas']
  },
  {
    title: 'Aplicações Web (Vue 3 + Tailwind)',
    desc: 'Interfaces rápidas e responsivas. SSR/SPA, acessibilidade e SEO básico, consumo de APIs, charts e dashboards.',
    bullets: ['Landing pages', 'Dashboards analíticos', 'E-commerce básico', 'Sites institucionais']
  },
  {
    title: 'Apps Mobile (Flutter)',
    desc: 'Apps iOS/Android conectados às APIs que eu construo. Push notifications, login, listas/feeds, upload de mídia.',
    bullets: ['App de eventos', 'Catálogo de produtos', 'Feed social', 'Formulários e checklists']
  }
]
</script>

<template>
  <section class="relative overflow-hidden">
    <div class="absolute inset-0 -z-10 bg-gradient-to-br from-fuchsia-600/10 via-purple-500/5 to-transparent blur-3xl"></div>

    <div class="px-6 py-16 md:py-24 max-w-6xl mx-auto">
      <p class="text-sm tracking-wider uppercase text-fuchsia-400/90">Serviços</p>
      <h1 class="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight">Do backend ao front, projeto completo.</h1>
      <p class="mt-4 text-lg text-neutral-400 max-w-3xl">
        Eu desenho, implemento e entrego soluções ponta-a-ponta: <span class="text-neutral-200">sistemas web e </span>
        <span class="text-neutral-200">aplicações modernas.</span>
      </p>
    </div>
  </section>

  <section class="px-6 pb-12 max-w-6xl mx-auto">
    <div class="grid gap-6 md:grid-cols-3">
      <div v-for="s in services" :key="s.title" class="p-6 rounded-2xl border border-neutral-800 bg-neutral-950/50">
        <h3 class="text-lg font-semibold">{{ s.title }}</h3>
        <p class="text-neutral-400 mt-2">{{ s.desc }}</p>
        <ul class="mt-4 space-y-2 text-sm text-neutral-300">
          <li v-for="b in s.bullets" :key="b" class="flex items-start gap-2">
            <span class="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-500"></span>
            <span>{{ b }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="mt-10 flex flex-wrap gap-3">
      <RouterLink to="/contato" class="px-6 py-3 rounded-2xl bg-fuchsia-600 hover:bg-fuchsia-500 text-white">Solicitar orçamento</RouterLink>
      <RouterLink to="/projetos" class="px-6 py-3 rounded-2xl border border-neutral-700 hover:bg-neutral-900">Ver projetos</RouterLink>
    </div>
  </section>
</template>
