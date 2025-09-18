<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
const route = useRoute()
const isActive = (name: string) => route.name === name
</script>

<template>
  <header class="sticky top-0 z-50 backdrop-blur border-b border-neutral-900/60 bg-neutral-950/50">
    <div class="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
      <RouterLink to="/" class="font-mono font-bold">gustavo.dev</RouterLink>
      <nav class="flex gap-4 text-sm">
        <RouterLink :class="['hover:text-white', isActive('projects') && 'text-white']" to="/projetos">Projetos</RouterLink>
        <RouterLink :class="['hover:text-white', isActive('services') && 'text-white']" to="/servicos">Serviços</RouterLink>
        <RouterLink :class="['hover:text-white', isActive('about') && 'text-white']" to="/sobre">Sobre</RouterLink>
        <RouterLink :class="['hover:text-white', isActive('contact') && 'text-white']" to="/contato">Contato</RouterLink>
      </nav>
      <a href="https://github.com/gut0to" target="_blank" class="text-sm opacity-80 hover:opacity-100">GitHub</a>
    </div>
  </header>
</template>