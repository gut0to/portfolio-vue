<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ProjectCard from '../components/cards/ProjectCard.vue'
import projects from '../data/projects.json'

const featured = projects.slice(0, 3)

type Tech = { name: string; href: string; icon: string }
const techs: Tech[] = [
  { name: 'HTML5', href: 'https://developer.mozilla.org/docs/Web/HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', href: 'https://developer.mozilla.org/docs/Web/CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', href: 'https://developer.mozilla.org/docs/Web/JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', href: 'https://www.typescriptlang.org/docs/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },

  { name: 'Vue', href: 'https://vuejs.org/guide/introduction.html', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'React', href: 'https://react.dev/learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Angular', href: 'https://angular.dev/overview', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg' },
  { name: 'Tailwind CSS', href: 'https://tailwindcss.com/docs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Bootstrap', href: 'https://getbootstrap.com/docs/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },

  { name: 'PHP', href: 'https://www.php.net/docs.php', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'Laravel', href: 'https://laravel.com/docs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
  { name: 'Node.js', href: 'https://nodejs.org/en/docs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', href: 'https://docs.python.org/3/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Django', href: 'https://docs.djangoproject.com/en/stable/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
  { name: 'Flask', href: 'https://flask.palletsprojects.com/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },

  { name: 'Docker', href: 'https://docs.docker.com/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Nginx', href: 'https://nginx.org/en/docs/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
  { name: 'Linux', href: 'https://www.kernel.org/doc/html/latest/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },

  { name: 'MySQL', href: 'https://dev.mysql.com/doc/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'MongoDB', href: 'https://www.mongodb.com/docs/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },

  { name: 'Git', href: 'https://git-scm.com/doc', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitLab', href: 'https://docs.gitlab.com/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' },
  { name: 'WordPress', href: 'https://developer.wordpress.org/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg' },
  { name: 'Firebase', href: 'https://firebase.google.com/docs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
]
</script>

<template>
  <section class="relative overflow-hidden">
    <div class="absolute inset-0 -z-10 bg-gradient-to-br from-purple-600/10 via-fuchsia-500/5 to-transparent blur-3xl"></div>

    <div class="px-6 py-16 md:py-24 max-w-6xl mx-auto">
      <h1 class="mt-2 text-4xl md:text-6xl font-extrabold tracking-tight">
        Eu construo <span class="text-fuchsia-400">sistemas web em Laravel</span> e <span class="text-sky-400">interfaces rápidas</span>.
      </h1>
      <p class="mt-4 text-lg text-neutral-400 max-w-2xl">
        Do backend ao front: <strong>Laravel</strong> (APIs e <em>sistemas web completos</em> com Blade/Inertia/Vue), autenticação JWT, RBAC, filas, testes e integração com aplicações móveis.
      </p>

      <div class="mt-8 flex flex-wrap gap-3">
        <RouterLink to="/projetos" class="px-6 py-3 rounded-2xl bg-fuchsia-600 hover:bg-fuchsia-500 text-white">Ver projetos</RouterLink>
        <RouterLink to="/contato" class="px-6 py-3 rounded-2xl border border-neutral-700 hover:bg-neutral-900">Orçar um projeto</RouterLink>
      </div>

      <div class="mt-10 rounded-2xl bg-neutral-950/70 border border-neutral-800 p-4">
        <div class="flex flex-wrap justify-center gap-5 sm:gap-6">
          <a
            v-for="t in techs"
            :key="t.name"
            :href="t.href"
            target="_blank"
            rel="noopener noreferrer"
            :title="t.name"
            class="group inline-flex items-center justify-center rounded-xl p-2 hover:-translate-y-0.5 transition will-change-transform"
            aria-label="Abrir documentação de {{ t.name }}"
          >
            <img :src="t.icon" :alt="t.name" class="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 object-contain drop-shadow" loading="lazy" decoding="async" />
          </a>
        </div>
      </div>
    </div>
  </section>

  <section class="px-6 py-12 max-w-6xl mx-auto">
    <h2 class="text-2xl font-bold mb-6">Projetos em destaque</h2>
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <ProjectCard v-for="p in featured" :key="p.id" :project="p" />
    </div>
    <div class="mt-6">
      <RouterLink to="/projetos" class="inline-block text-sm underline underline-offset-4 hover:no-underline">Ver todos os projetos →</RouterLink>
    </div>
  </section>

  <section class="px-6 py-12 max-w-6xl mx-auto">
    <h2 class="text-2xl font-bold">Serviços</h2>
    <div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div class="p-6 rounded-2xl border border-neutral-800 bg-neutral-950/40">
        <h3 class="font-semibold">Laravel — APIs e Sistemas Web</h3>
        <p class="text-neutral-400 mt-2">
          Desenvolvimento completo em Laravel (Blade/Inertia/Vue), autenticação/JWT, RBAC, filas/Redis, testes, documentação e deploy.
          <span class="block mt-2 text-neutral-300/90 text-sm">Exemplos: sistema de eventos, CRM simples, painel administrativo, portal interno.</span>
        </p>
      </div>

      <div class="p-6 rounded-2xl border border-neutral-800 bg-neutral-950/40">
        <h3 class="font-semibold">Aplicações Web</h3>
        <p class="text-neutral-400 mt-2">
          Front-end moderno com Vue 3 + Tailwind, SSR/SPA, acessibilidade e SEO básico, integração com APIs.
          <span class="block mt-2 text-neutral-300/90 text-sm">Exemplos: e-commerce básico, portal institucional, dashboard analítico, landing pages performáticas.</span>
        </p>
      </div>

      <div class="p-6 rounded-2xl border border-neutral-800 bg-neutral-950/40">
        <h3 class="font-semibold">Apps Flutter</h3>
        <p class="text-neutral-400 mt-2">
          iOS/Android conectados às APIs que eu construo, com navegação fluida e suporte a notificações/push.
          <span class="block mt-2 text-neutral-300/90 text-sm">Exemplos: app de eventos, feed social, catálogo de produtos.</span>
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.drop-shadow { filter: drop-shadow(0 8px 18px rgba(236, 72, 153, .18)); }
</style>
