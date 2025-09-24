<script setup lang="ts">
type Project = {
  id: number
  title: string
  description: string
  stack: string[]
  repo_url?: string | null
  live_url?: string | null
  images?: string[]
  year?: string
}

const props = defineProps<{ project: Project }>()
</script>

<template>
  <article class="group h-full rounded-2xl border border-neutral-800 bg-neutral-950/40 overflow-hidden flex flex-col">
    <div v-if="project.images?.length" class="aspect-video overflow-hidden">
      <img
        :src="project.images[0]"
        :alt="project.title"
        class="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
        loading="lazy" decoding="async"
      />
    </div>

    <div class="p-5 flex-1 flex flex-col">
      <div class="flex items-center justify-between gap-3">
        <h3 class="text-lg font-semibold leading-tight">{{ project.title }}</h3>
        <span v-if="project.year" class="text-xs text-neutral-400">{{ project.year }}</span>
      </div>

      <p class="mt-2 text-neutral-400 text-sm flex-1">
        {{ project.description }}
      </p>

      <div class="mt-3 flex flex-wrap gap-2">
        <span v-for="t in project.stack" :key="t" class="px-2.5 py-1 rounded-full border border-neutral-800 bg-neutral-900/60 text-[12px]">
          {{ t }}
        </span>
      </div>

      <div class="mt-4 flex items-center gap-3">
        <a
          v-if="project.live_url"
          :href="project.live_url"
          target="_blank"
          rel="noopener noreferrer"
          class="px-3 py-2 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 text-white text-sm"
        >
          Ver projeto
        </a>
        <a
          v-if="project.repo_url"
          :href="project.repo_url"
          target="_blank"
          rel="noopener noreferrer"
          class="px-3 py-2 rounded-xl border border-neutral-700 hover:bg-neutral-900 text-sm"
        >
          Repositório
        </a>
      </div>
    </div>
  </article>
</template>
