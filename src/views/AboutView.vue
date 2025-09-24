<script setup lang="ts">
</script>

<template>
  <section class="relative overflow-hidden">
    <div class="absolute inset-0 -z-10 bg-gradient-to-br from-purple-600/10 via-fuchsia-500/5 to-transparent blur-3xl"></div>

    <div class="px-6 py-16 md:py-24 max-w-6xl mx-auto">
      <p class="text-sm tracking-wider uppercase text-fuchsia-400/90">Sobre mim</p>
      <h1 class="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight">Quem sou eu</h1>
      <p class="mt-4 text-lg text-neutral-400 max-w-3xl">
        Sou apaixonado por tecnologia e por transformar ideias em produtos digitais. 
        Gosto de simplificar o complexo, organizar fluxos e entregar soluções 
        que gerem impacto real. Para mim, código é mais do que técnica: 
        é sobre resolver problemas de forma criativa e eficiente.
      </p>
    </div>
  </section>

  <section class="px-6 pb-12 max-w-6xl mx-auto">
    <div class="grid gap-6 md:grid-cols-2">
      <div class="p-6 rounded-2xl border border-neutral-800 bg-neutral-950/40">
        <h3 class="font-semibold">Minha forma de trabalhar</h3>
        <p class="text-neutral-400 mt-2">
          Acredito que tecnologia deve servir às pessoas. Procuro ser objetivo, 
          transparente e ágil. Meu foco está em entender a necessidade real, 
          propor uma solução prática e acompanhar de perto até a entrega.
        </p>
      </div>

      <div class="p-6 rounded-2xl border border-neutral-800 bg-neutral-950/40">
        <h3 class="font-semibold">Visão</h3>
        <p class="text-neutral-400 mt-2">
          Quero continuar crescendo como profissional, contribuindo em projetos 
          que tragam valor e aprendendo sempre. Minha visão é construir soluções 
          duradouras, acessíveis e que façam diferença no dia a dia.
        </p>
      </div>
    </div>

    <div class="mt-10">
      <RouterLink to="/contato" class="px-6 py-3 rounded-2xl bg-fuchsia-600 hover:bg-fuchsia-500 text-white">
        Entre em contato
      </RouterLink>
    </div>
  </section>
</template>
