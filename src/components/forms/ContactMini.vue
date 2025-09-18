<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const name = ref(''), email = ref(''), service = ref('Site Vue'), budget = ref('2-5k'), deadline = ref('2-4 semanas'), message = ref('')
const PHONE = '+55XXXXXXXXXXX'

function toMailto() {
  const subject = encodeURIComponent('Orçamento de projeto')
  const body = encodeURIComponent(
    `Oi Gustavo,\n\n• Nome: ${name.value}\n• Email: ${email.value}\n• Tipo de projeto: ${service.value}\n• Orçamento estimado: ${budget.value}\n• Prazo: ${deadline.value}\n• Mensagem:\n${message.value}\n\nObrigado!`
  )
  return `mailto:gugusimbr@gmail.com?subject=${subject}&body=${body}`
}

function toWhatsApp() {
  const text = encodeURIComponent(
    `Oi Gustavo, quero um orçamento.\n• Nome: ${name.value}\n• Email: ${email.value}\n• Tipo: ${service.value}\n• Orçamento: ${budget.value}\n• Prazo: ${deadline.value}\n• Mensagem: ${message.value}`
  )
  const wa = `https://wa.me/${PHONE.replace('+','')}/?text=${text}`
  return wa
}

function send(kind: 'mail'|'wa') {
  const url = kind === 'mail' ? toMailto() : toWhatsApp()
  window.open(url, '_blank')
  router.push('/obrigado')
}
</script>

<template>
  <form class="space-y-4">
    <div class="grid md:grid-cols-2 gap-4">
      <input v-model="name" type="text" placeholder="Seu nome" class="px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 w-full" />
      <input v-model="email" type="email" placeholder="Seu e-mail" class="px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 w-full" />
    </div>

    <div class="grid md:grid-cols-3 gap-4">
      <select v-model="service" class="px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 w-full">
        <option>Site Vue</option>
        <option>API Laravel</option>
        <option>App Flutter</option>
        <option>Consultoria</option>
      </select>
      <select v-model="budget" class="px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 w-full">
        <option>Até 2k</option>
        <option>2-5k</option>
        <option>5-10k</option>
        <option>10k+</option>
      </select>
      <select v-model="deadline" class="px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 w-full">
        <option>Urgente</option>
        <option>2-4 semanas</option>
        <option>&gt;1 mês</option>
      </select>
    </div>

    <textarea v-model="message" rows="5" placeholder="Fale brevemente sobre o projeto..."
      class="px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 w-full"></textarea>

    <div class="flex flex-wrap gap-3">
      <button type="button" @click="send('mail')" class="px-5 py-3 rounded-2xl bg-fuchsia-600 hover:bg-fuchsia-500 text-white">Enviar por e-mail</button>
      <button type="button" @click="send('wa')" class="px-5 py-3 rounded-2xl border border-neutral-700 hover:bg-neutral-900">Falar no WhatsApp</button>
    </div>
  </form>
</template>
