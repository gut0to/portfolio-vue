<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
const route = useRoute()
const isActive = (name: string) => route.name === name
</script>

<template>
  <header class="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-neutral-950/60">
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <RouterLink to="/" class="font-mono font-bold tracking-tight text-xl">
        <span class="text-violet-400">gustavo</span><span class="text-neutral-300">.dev</span>
      </RouterLink>
      <nav class="hidden sm:flex items-center gap-1 text-sm">
        <RouterLink to="/projetos" :class="['px-3 py-2 rounded-lg transition', isActive('projects') ? 'text-white bg-white/5 ring-1 ring-white/10' : 'text-neutral-300 hover:text-white']">Projetos</RouterLink>
        <RouterLink to="/servicos" :class="['px-3 py-2 rounded-lg transition', isActive('services') ? 'text-white bg-white/5 ring-1 ring-white/10' : 'text-neutral-300 hover:text-white']">Serviços</RouterLink>
        <RouterLink to="/sobre" :class="['px-3 py-2 rounded-lg transition', isActive('about') ? 'text-white bg-white/5 ring-1 ring-white/10' : 'text-neutral-300 hover:text-white']">Sobre</RouterLink>
        <RouterLink to="/contato" :class="['px-3 py-2 rounded-lg transition', isActive('contact') ? 'text-white bg-white/5 ring-1 ring-white/10' : 'text-neutral-300 hover:text-white']">Contato</RouterLink>
      </nav>
      <a href="https://github.com/gut0to" target="_blank" class="text-sm px-3 py-2 rounded-lg ring-1 ring-inset ring-white/10 hover:bg-white/5 transition">GitHub</a>
    </div>
  </header>
</template>
