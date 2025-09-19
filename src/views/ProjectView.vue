<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import projects from '../data/projects.json'
const route = useRoute()
const project = computed(() => projects.find(p => p.slug === route.params.slug))
</script>

<template>
  <section class="px-6 py-12 max-w-5xl mx-auto" v-if="project">
    <RouterLink to="/projetos" class="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white">
      <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
      Voltar
    </RouterLink>
    <div class="mt-6 flex flex-col gap-4">
      <h1 class="text-3xl md:text-4xl font-extrabold">{{ project.title }}</h1>
      <p class="text-neutral-400 max-w-3xl">{{ project.summary }}</p>
      <div class="flex flex-wrap gap-2">
        <span v-for="t in project.tags" :key="t" class="badge">{{ t }}</span>
      </div>
      <div class="flex flex-wrap gap-3">
        <a v-if="project.demo" :href="project.demo" target="_blank" class="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold bg-violet-600 hover:bg-violet-500 active:bg-violet-700 transition">Demo
          <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M7 7h10v10"/></svg>
        </a>
        <a v-if="project.github" :href="project.github" target="_blank" class="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-white/15 hover:bg-white/5 transition">Código</a>
      </div>
    </div>
    <div class="mt-10 grid md:grid-cols-5 gap-8">
      <div class="md:col-span-3 space-y-8">
        <div class="g-border rounded-2xl p-6 bg-white/[0.04]">
          <h3 class="font-semibold">Problema</h3>
          <p class="text-neutral-300 mt-2">{{ project.problem }}</p>
        </div>
        <div class="g-border rounded-2xl p-6 bg-white/[0.04]">
          <h3 class="font-semibold">Solução</h3>
          <p class="text-neutral-300 mt-2">{{ project.solution }}</p>
        </div>
      </div>
      <aside class="md:col-span-2 space-y-6">
        <div class="g-border rounded-2xl p-6 bg-white/[0.04]">
          <h4 class="font-semibold">Stack</h4>
          <ul class="mt-3 text-sm text-neutral-300 list-disc list-inside">
            <li v-for="s in project.tech" :key="s">{{ s }}</li>
          </ul>
        </div>
        <div v-if="project.outcomes?.length" class="g-border rounded-2xl p-6 bg-white/[0.04]">
          <h4 class="font-semibold">Resultados</h4>
          <ul class="mt-3 text-sm text-neutral-300 list-disc list-inside">
            <li v-for="(o,i) in project.outcomes" :key="i">{{ o }}</li>
          </ul>
        </div>
      </aside>
    </div>
  </section>
</template>
