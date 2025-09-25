<script setup lang="ts">
import ProjectCard from '../components/cards/ProjectCard.vue'
import projects from '../data/projects.json'
</script>

<template>
  <section class="px-6 py-12 max-w-6xl mx-auto">
    <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
      <div>
        <h2 class="text-3xl md:text-4xl font-extrabold">Projetos <span class="text-violet-400">em destaque</span></h2>
        <p class="text-neutral-400 mt-2">Seleção de trabalhos com Laravel, Vue e integrações.</p>
      </div>
    </div>
    <div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <ProjectCard v-for="p in projects" :key="p.id" :project="p" />
    </div>
  </section>
</template>
