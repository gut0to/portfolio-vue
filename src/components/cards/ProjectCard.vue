<script setup lang="ts">
type Project = { id:string; title:string; slug:string; tags:string[]; tech:string[]; summary:string }
defineProps<{ project: Project }>()
</script>

<template>
  <router-link :to="`/projetos/${project.slug}`" class="block p-4 rounded-2xl border border-neutral-800 hover:border-neutral-600">
    <h3 class="font-semibold">{{ project.title }}</h3>
    <p class="text-neutral-400 text-sm mt-1 line-clamp-2">{{ project.summary }}</p>
    <div class="flex flex-wrap gap-2 mt-3">
      <span v-for="t in project.tags" :key="t" class="px-2 py-0.5 rounded-full border border-neutral-700 text-xs">{{ t }}</span>
    </div>
  </router-link>
</template>