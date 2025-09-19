<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const name = ref(''), email = ref(''), service = ref('Site Vue'), budget = ref('2-5k'), deadline = ref('2-4 semanas'), message = ref('')
const PHONE = '+5538998352469'
function toMailto(){const s=encodeURIComponent('Orçamento de projeto');const b=encodeURIComponent(`Oi Gustavo,\n\n• Nome: ${name.value}\n• Email: ${email.value}\n• Serviço: ${service.value}\n• Orçamento: ${budget.value}\n• Prazo: ${deadline.value}\n• Mensagem:\n${message.value}\n\nObrigado!`);return `mailto:gugusimbr@gmail.com?subject=${s}&body=${b}`}
function toWhatsApp(){const t=encodeURIComponent(`Oi! Me chamo ${name.value}. Quero um ${service.value}. Orçamento: ${budget.value}. Prazo: ${deadline.value}. Detalhes: ${message.value}`);return `https://wa.me/${PHONE.replace(/\D/g,'')}?text=${t}`}
function send(k:'mail'|'wa'){if(k==='mail'){window.location.href=toMailto();router.push('/obrigado')}else{window.open(toWhatsApp(), '_blank')}}
</script>

<template>
  <form class="space-y-4">
    <div class="grid sm:grid-cols-2 gap-4">
      <div class="g-border rounded-xl">
        <input v-model="name" type="text" placeholder="Seu nome" class="px-4 py-3 rounded-xl bg-neutral-900 w-full outline-none focus:ring-2 ring-violet-500/40"/>
      </div>
      <div class="g-border rounded-xl">
        <input v-model="email" type="email" placeholder="Seu e-mail" class="px-4 py-3 rounded-xl bg-neutral-900 w-full outline-none focus:ring-2 ring-violet-500/40"/>
      </div>
    </div>
    <div class="grid sm:grid-cols-3 gap-4">
      <div class="g-border rounded-xl">
        <select v-model="service" class="px-4 py-3 rounded-xl bg-neutral-900 w-full">
          <option>Site Vue</option><option>API Laravel</option><option>App Flutter</option><option>Consultoria</option>
        </select>
      </div>
      <div class="g-border rounded-xl">
        <select v-model="budget" class="px-4 py-3 rounded-xl bg-neutral-900 w-full">
          <option>&lt;2k</option><option>2-5k</option><option>5-10k</option><option>&gt;10k</option>
        </select>
      </div>
      <div class="g-border rounded-xl">
        <select v-model="deadline" class="px-4 py-3 rounded-xl bg-neutral-900 w-full">
          <option>1-2 semanas</option><option>2-4 semanas</option><option>&gt;1 mês</option>
        </select>
      </div>
    </div>
    <div class="g-border rounded-xl">
      <textarea v-model="message" rows="5" placeholder="Fale brevemente sobre o projeto..." class="px-4 py-3 rounded-xl bg-neutral-900 w-full"></textarea>
    </div>
    <div class="flex flex-wrap gap-3">
      <button type="button" @click="send('mail')" class="px-5 py-3 rounded-xl text-sm font-semibold bg-violet-600 hover:bg-violet-500 active:bg-violet-700 transition shadow-lg shadow-violet-700/20">Enviar por e-mail</button>
      <button type="button" @click="send('wa')" class="px-5 py-3 rounded-xl text-sm font-semibold ring-1 ring-inset ring-white/15 hover:bg-white/5 transition">Falar no WhatsApp</button>
    </div>
  </form>
</template>
