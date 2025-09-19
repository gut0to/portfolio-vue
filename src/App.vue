<script setup lang="ts">
import AppHeader from './components/common/AppHeader.vue'
import AppFooter from './components/common/AppFooter.vue'
function moveSpotlight(e: MouseEvent) {
  const r = document.documentElement
  r.style.setProperty('--mx', `${e.clientX}px`)
  r.style.setProperty('--my', `${e.clientY}px`)
}
</script>

<template>
  <div class="min-h-screen flex flex-col text-white bg-neutral-950 selection:bg-violet-500/30 selection:text-white" @mousemove="moveSpotlight">
    <div class="fixed inset-0 -z-50 overflow-hidden">
      <div class="absolute inset-0 opacity-[0.06]" style="background-image: linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px); background-size: 36px 36px;"></div>
      <div class="absolute -top-40 -left-24 w-[44rem] h-[44rem] rounded-full blur-3xl opacity-25 bg-gradient-to-br from-violet-700 via-purple-700 to-indigo-700"></div>
      <div class="absolute top-1/3 -right-32 w-[36rem] h-[36rem] rounded-full blur-3xl opacity-25 bg-gradient-to-br from-indigo-700 via-violet-700 to-purple-700"></div>
      <div class="absolute inset-0" style="background: radial-gradient(340px circle at var(--mx, 50%) var(--my, 50%), rgba(109, 40, 217, .20), transparent 60%);"></div>
      <div class="absolute inset-0 opacity-[0.07] mix-blend-overlay" style="background-image: url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 opacity=%220.6%22 viewBox=%220 0 100 100%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.7%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/></svg>');"></div>
    </div>
    <AppHeader />
    <main class="flex-1">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<style>
.g-border{position:relative}
.g-border::before{content:"";position:absolute;inset:0;border-radius:1.25rem;padding:1px;background:linear-gradient(120deg,rgba(167,139,250,.55),rgba(139,92,246,.3),rgba(99,102,241,.55));-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude;pointer-events:none}
.tilt{transform-style:preserve-3d;transition:transform .25s ease,box-shadow .25s ease,background-color .25s ease}
.tilt:hover{transform:translateY(-3px) scale(1.01);box-shadow:0 12px 40px rgba(139,92,246,.22)}
.shimmer{background:linear-gradient(110deg,rgba(255,255,255,.08) 8%,rgba(255,255,255,.16) 18%,rgba(255,255,255,.08) 33%);background-size:200% 100%;animation:shimmer 1.4s linear infinite}
@keyframes shimmer{to{background-position-x:-200%}}
.badge{display:inline-flex;align-items:center;gap:.4rem;padding:.25rem .6rem;border-radius:9999px;font-size:.7rem;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.05)}
</style>
