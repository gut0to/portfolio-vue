<script setup lang="ts">
import TechStack from '../components/sections/TechStack.vue'
</script>

<template>
  <section class="px-6 py-12 max-w-3xl mx-auto">
    <h2 class="text-3xl md:text-4xl font-extrabold">Sobre <span class="text-violet-400">mim</span></h2>
    <p class="text-neutral-300 mt-4">Full-stack developer do Brasil. Gosto de backends robustos e frontends rápidos. Foco em qualidade, performance e DX.</p>
    <TechStack />
    <div class="mt-10 grid md:grid-cols-2 gap-6">
      <div class="g-border rounded-2xl p-6 bg-white/[0.04]">
        <h4 class="font-semibold">Como trabalho</h4>
        <p class="text-neutral-300 mt-2">Padronização, testes, documentação e comunicação clara. Iterações curtas e entregas frequentes.</p>
      </div>
      <div class="g-border rounded-2xl p-6 bg-white/[0.04]">
        <h4 class="font-semibold">Interesses</h4>
        <p class="text-neutral-300 mt-2">Arquitetura de software, DX, acessibilidade e produtos que geram impacto real.</p>
      </div>
    </div>
  </section>
</template>
