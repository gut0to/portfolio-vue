<script setup lang="ts">
import ProjectCard from '../components/cards/ProjectCard.vue'
import projects from '../data/projects.json'
</script>

<template>
    <section class="px-6 py-12 max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold mb-6">Projetos</h2>
  
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard v-for="p in projects" :key="p.id" :project="p" />
      </div>
    </section>
  </template>