<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import projects from '../data/projects.json'

const route = useRoute()
const project = computed(() => projects.find(p => p.slug === route.params.slug))
</script>

<template>
    <section class="px-6 py-12 max-w-3xl mx-auto" v-if="project">
      <h1 class="text-3xl font-bold">{{ project.title }}</h1>
      <p class="text-neutral-400 mt-2">{{ project.summary }}</p>
  
      <div class="mt-8 space-y-6">
        <div>
          <h3 class="font-semibold">Problema</h3>
          <p class="text-neutral-300">{{ project.problem }}</p>
        </div>
        <div>
          <h3 class="font-semibold">Solução</h3>
          <p class="text-neutral-300">{{ project.solution }}</p>
        </div>
        <div v-if="project.outcomes?.length">
          <h3 class="font-semibold">Resultados</h3>
          <ul class="list-disc ml-6 text-neutral-300">
            <li v-for="(o, i) in project.outcomes" :key="i">{{ o }}</li>
          </ul>
        </div>
        <div>
          <h3 class="font-semibold">Stack</h3>
          <div class="flex flex-wrap gap-2 mt-2">
            <span v-for="t in project.tech" :key="t" class="px-3 py-1 rounded-full border border-neutral-700 text-sm">
              {{ t }}
            </span>
          </div>
        </div>
        <div class="flex gap-3">
          <a v-if="project.live_url" :href="project.live_url" target="_blank" class="px-4 py-2 rounded-xl border border-neutral-700 hover:bg-neutral-900">Live</a>
          <a v-if="project.repo_url" :href="project.repo_url" target="_blank" class="px-4 py-2 rounded-xl border border-neutral-700 hover:bg-neutral-900">Repo</a>
        </div>
      </div>
    </section>
  </template>