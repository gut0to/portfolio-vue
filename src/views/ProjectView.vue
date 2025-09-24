<script setup lang="ts">
import ProjectCard from '../components/cards/ProjectCard.vue'
import projects from '../data/projects.json'

const list = projects
</script>

<template>
  <section class="relative overflow-hidden">
    <div class="absolute inset-0 -z-10 bg-gradient-to-br from-purple-600/10 via-fuchsia-500/5 to-transparent blur-3xl"></div>

    <div class="px-6 py-16 md:py-24 max-w-6xl mx-auto">
      <p class="text-sm tracking-wider uppercase text-fuchsia-400/90">Projetos</p>
      <h1 class="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight">Alguns trabalhos e experimentos.</h1>
      <p class="mt-4 text-lg text-neutral-400 max-w-3xl">
        Sistemas web em Laravel, aplicações modernas em Vue e integrações mobile. Abaixo um recorte do que já entreguei ou explorei.
      </p>
    </div>
  </section>

  <section class="px-6 pb-12 max-w-6xl mx-auto">
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <ProjectCard v-for="p in list" :key="p.id" :project="p" />
    </div>
  </section>
</template>
