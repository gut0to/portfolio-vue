<script setup lang="ts">
import TechStack from '../components/sections/TechStack.vue'
</script>

<template>
  <main class="relative overflow-hidden">
    <section class="px-6 py-20 md:py-28 max-w-6xl mx-auto">
      <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ring-1 ring-inset ring-white/10 bg-white/5 backdrop-blur">
        <span class="size-2 rounded-full bg-violet-400 animate-pulse"></span>
        Disponível para freelas e collabs
      </span>
      <h1 class="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
        Construo <span class="text-violet-400">APIs sólidas</span> e
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400">interfaces rápidas</span>
        com Laravel & Vue
      </h1>
      <p class="mt-5 text-lg text-neutral-400 max-w-2xl">
        Backend robusto, front performático e foco em DX. Projetos reais, testes e boas práticas.
      </p>
      <div class="mt-8 flex flex-wrap items-center gap-4">
        <RouterLink to="/projetos" class="group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold bg-violet-600 hover:bg-violet-500 active:bg-violet-700 transition shadow-lg shadow-violet-700/20">
          Ver projetos
          <svg class="size-4 group-hover:translate-x-0.5 transition" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
        </RouterLink>
        <RouterLink to="/contato" class="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold ring-1 ring-inset ring-white/15 hover:bg-white/5 transition">
          Entrar em contato
        </RouterLink>
      </div>
      <div class="mt-10 flex flex-wrap gap-3">
        <span class="badge">Laravel 10</span>
        <span class="badge">Vue 3 + Vite</span>
        <span class="badge">TypeScript</span>
        <span class="badge">Tailwind</span>
        <span class="badge">Docker</span>
      </div>
    </section>
    <section class="px-6 pb-16 max-w-6xl mx-auto">
      <div class="grid md:grid-cols-3 gap-6">
        <div class="g-border rounded-2xl p-6 bg-white/[0.04] tilt">
          <div class="size-10 rounded-xl bg-violet-600/20 flex items-center justify-center mb-4 font-bold">API</div>
          <h3 class="font-semibold">APIs seguras e escaláveis</h3>
          <p class="text-sm text-neutral-400 mt-2">JWT, RBAC, filas, cache, testes e documentação.</p>
          <div class="mt-4 h-1 rounded-full shimmer"></div>
        </div>
        <div class="g-border rounded-2xl p-6 bg-white/[0.04] tilt">
          <div class="size-10 rounded-xl bg-purple-600/20 flex items-center justify-center mb-4 font-bold">UI</div>
          <h3 class="font-semibold">Front rápido e acessível</h3>
          <p class="text-sm text-neutral-400 mt-2">SPA leve, componentes reutilizáveis e UX consistente.</p>
          <div class="mt-4 h-1 rounded-full shimmer"></div>
        </div>
        <div class="g-border rounded-2xl p-6 bg-white/[0.04] tilt">
          <div class="size-10 rounded-xl bg-indigo-600/20 flex items-center justify-center mb-4 font-bold">DX</div>
          <h3 class="font-semibold">Fluxo dev otimizado</h3>
          <p class="text-sm text-neutral-400 mt-2">Padronização, CI/CD, versionamento e convenções.</p>
          <div class="mt-4 h-1 rounded-full shimmer"></div>
        </div>
      </div>
      <TechStack />
    </section>
  </main>
</template>
