<template>
  <footer class="mt-16 border-t border-white/10">
    <div class="max-w-6xl mx-auto px-6 py-10 grid gap-6 sm:grid-cols-3 text-sm">
      <div class="space-y-1">
        <p class="text-neutral-300 font-semibold">Gustavo Rocha</p>
        <p class="text-neutral-400">© {{ new Date().getFullYear() }} • Todos os direitos reservados</p>
      </div>
      <div class="space-y-2">
        <p class="text-neutral-300 font-semibold">Status</p>
        <div class="flex items-center gap-2 text-neutral-400">
          <span class="inline-block w-2 h-2 rounded-full bg-violet-400"></span>
          Aberto para freelas
        </div>
      </div>
      <div class="space-y-2">
        <p class="text-neutral-300 font-semibold">Redes</p>
        <div class="flex gap-4 text-neutral-400">
          <a class="hover:text-white transition" href="https://linkedin.com/in/gustavohenriqu3" target="_blank">LinkedIn</a>
          <a class="hover:text-white transition" href="https://instagram.com/gut0to" target="_blank">Instagram</a>
          <a class="hover:text-white transition" href="https://github.com/gut0to" target="_blank">GitHub</a>
        </div>
      </div>
    </div>
  </footer>
</template>
