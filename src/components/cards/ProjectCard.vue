<script setup lang="ts">
type Project = { id:string; title:string; slug:string; tags:string[]; tech:string[]; summary:string; cover?:string }
defineProps<{ project: Project }>()
</script>

<template>
  <router-link :to="`/projetos/${project.slug}`" class="block rounded-2xl g-border bg-white/[0.04] hover:bg-white/[0.06] transition group tilt overflow-hidden">
    <div v-if="project.cover" class="h-40 overflow-hidden">
      <img :src="project.cover" :alt="project.title" class="w-full h-full object-cover group-hover:scale-[1.03] transition duration-300" />
    </div>
    <div class="p-5">
      <h3 class="font-semibold tracking-tight group-hover:text-white">{{ project.title }}</h3>
      <p class="text-neutral-400 text-sm mt-1 line-clamp-2">{{ project.summary }}</p>
      <div class="flex flex-wrap gap-2 mt-3">
        <span v-for="t in project.tags" :key="t" class="badge">{{ t }}</span>
      </div>
    </div>
  </router-link>
</template>
