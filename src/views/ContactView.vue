<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const name = ref('')
const email = ref('')
const project = ref('')
const message = ref('')

const PHONE = '+5538998352469'
const EMAIL = 'gugusimbr@gmail.com'

function buildSummary() {
  return [
    `• Nome: ${name.value || '-'}`,
    `• E-mail: ${email.value || '-'}`,
    `• Projeto: ${project.value || '-'}`,
    `• Descrição:`,
    message.value || '-'
  ].join('\n')
}

function toMailto() {
  const subject = encodeURIComponent('Novo projeto – contato pelo site')
  const body = encodeURIComponent(`Oi Gustavo,\n\n${buildSummary()}\n\nObrigado!`)
  return `mailto:${EMAIL}?subject=${subject}&body=${body}`
}

function toWhatsApp() {
  const text = encodeURIComponent(`Oi Gustavo! Quero conversar sobre um projeto.\n\n${buildSummary()}`)
  return `https://wa.me/${PHONE.replace('+','')}/?text=${text}`
}

function send(kind: 'mail' | 'wa') {
  if (!name.value || !project.value || !message.value) {
    alert('Preencha: Nome, Projeto e Descrição.')
    return
  }
  const url = kind === 'mail' ? toMailto() : toWhatsApp()
  window.open(url, '_blank')
  router.push('/obrigado')
}
</script>

<template>
  <section class="relative overflow-hidden">
    <div class="absolute inset-0 -z-10 bg-gradient-to-br from-purple-600/10 via-fuchsia-500/5 to-transparent blur-3xl"></div>

    <div class="px-6 py-16 md:py-24 max-w-6xl mx-auto">
      <p class="text-sm tracking-wider uppercase text-fuchsia-400/90">Contato</p>
      <h1 class="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight">Conte sua ideia. Eu transformo em produto.</h1>
      <p class="mt-4 text-lg text-neutral-400 max-w-3xl">
        Sem burocracia: diga quem você é, o nome do projeto e uma breve descrição. 
        Eu retorno com uma proposta objetiva.
      </p>
    </div>
  </section>

  <section class="px-6 pb-12 max-w-6xl mx-auto">
    <div class="grid gap-6 md:grid-cols-3">
      <div class="md:col-span-2 p-6 rounded-2xl border border-neutral-800 bg-neutral-950/50">
        <form class="space-y-4" @submit.prevent>
          <div class="grid md:grid-cols-2 gap-4">
            <input v-model="name" type="text" placeholder="Seu nome" class="px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 w-full" />
            <input v-model="email" type="email" placeholder="Seu e-mail (opcional)" class="px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 w-full" />
          </div>

          <input v-model="project" type="text" placeholder="Nome do projeto" class="px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 w-full" />

          <textarea v-model="message" rows="6" placeholder="Descreva brevemente o projeto, objetivo e o que precisa ser entregue." class="px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 w-full"></textarea>

          <div class="flex flex-wrap gap-3">
            <button type="button" @click="send('mail')" class="px-5 py-3 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 text-white">
              Enviar por e-mail
            </button>
            <button type="button" @click="send('wa')" class="px-5 py-3 rounded-xl border border-neutral-700 hover:bg-neutral-900">
              Falar no WhatsApp
            </button>
          </div>
        </form>
      </div>

      <aside class="p-6 rounded-2xl border border-neutral-800 bg-neutral-950/40 space-y-4">
        <h3 class="font-semibold">Dica rápida</h3>
        <ul class="text-neutral-400 text-sm space-y-1">
          <li>• Dê um nome claro ao projeto.</li>
          <li>• Se tiver referência ou exemplo, cite na descrição.</li>
          <li>• Seja breve e objetivo, facilita minha análise.</li>
        </ul>
        <div class="pt-4 border-t border-neutral-800">
          <div class="text-sm text-neutral-400">E-mail</div>
          <a :href="`mailto:${EMAIL}`" class="underline underline-offset-4">{{ EMAIL }}</a>
        </div>
        <div>
          <div class="text-sm text-neutral-400">WhatsApp</div>
          <a :href="`https://wa.me/${PHONE.replace('+','')}`" target="_blank" class="underline underline-offset-4">{{ PHONE }}</a>
        </div>
      </aside>
    </div>
  </section>
</template>
