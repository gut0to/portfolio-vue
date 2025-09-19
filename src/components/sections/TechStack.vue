<script setup lang="ts">
type StackItem = { name: string; doc: string; icon: string }
const stacks: StackItem[] = [
  { name: 'Bootstrap', doc: 'https://getbootstrap.com/docs/', icon: 'bootstrap/bootstrap-original.svg' },
  { name: 'CSS3', doc: 'https://developer.mozilla.org/docs/Web/CSS', icon: 'css3/css3-original.svg' },
  { name: 'HTML5', doc: 'https://developer.mozilla.org/docs/Web/HTML', icon: 'html5/html5-original.svg' },
  { name: 'JavaScript', doc: 'https://developer.mozilla.org/docs/Web/JavaScript', icon: 'javascript/javascript-original.svg' },
  { name: 'Docker', doc: 'https://docs.docker.com/', icon: 'docker/docker-original.svg' },
  { name: 'TypeScript', doc: 'https://www.typescriptlang.org/docs/', icon: 'typescript/typescript-original.svg' },
  { name: 'PHP', doc: 'https://www.php.net/docs.php', icon: 'php/php-original.svg' },
  { name: 'MySQL', doc: 'https://dev.mysql.com/doc/', icon: 'mysql/mysql-original.svg' },
  { name: 'Python', doc: 'https://docs.python.org/3/', icon: 'python/python-original.svg' },
  { name: 'NGINX', doc: 'https://nginx.org/en/docs/', icon: 'nginx/nginx-original.svg' },
  { name: 'Bash', doc: 'https://www.gnu.org/software/bash/manual/bash.html', icon: 'bash/bash-original.svg' },
  { name: 'Flask', doc: 'https://flask.palletsprojects.com/', icon: 'flask/flask-original.svg' },
  { name: 'XAMPP', doc: 'https://www.apachefriends.org/faq.html', icon: 'xampp/xampp-plain.svg' },
  { name: 'Linux', doc: 'https://www.kernel.org/doc/html/latest/', icon: 'linux/linux-original.svg' },
  { name: 'Git', doc: 'https://git-scm.com/doc', icon: 'git/git-original.svg' },
  { name: 'WordPress', doc: 'https://developer.wordpress.org/', icon: 'wordpress/wordpress-plain.svg' },
  { name: 'Node.js', doc: 'https://nodejs.org/en/docs', icon: 'nodejs/nodejs-original.svg' },
  { name: 'Google Cloud', doc: 'https://cloud.google.com/docs', icon: 'googlecloud/googlecloud-original.svg' },
  { name: 'After Effects', doc: 'https://helpx.adobe.com/after-effects/user-guide.html', icon: 'aftereffects/aftereffects-plain.svg' },
  { name: 'GitLab', doc: 'https://docs.gitlab.com/', icon: 'gitlab/gitlab-original.svg' },
  { name: 'Tailwind CSS', doc: 'https://tailwindcss.com/docs', icon: 'tailwindcss/tailwindcss-plain.svg' },
  { name: 'MongoDB', doc: 'https://www.mongodb.com/docs/', icon: 'mongodb/mongodb-plain.svg' },
  { name: 'Angular', doc: 'https://angular.io/docs', icon: 'angularjs/angularjs-plain.svg' },
  { name: 'Django', doc: 'https://docs.djangoproject.com/', icon: 'django/django-plain.svg' },
  { name: 'CodeIgniter', doc: 'https://codeigniter.com/user_guide/intro/index.html', icon: 'codeigniter/codeigniter-plain.svg' },
  { name: 'Laravel', doc: 'https://laravel.com/docs', icon: 'laravel/laravel-original.svg' },
  { name: 'Firebase', doc: 'https://firebase.google.com/docs', icon: 'firebase/firebase-plain.svg' }
]
const ICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/'
</script>

<template>
  <section class="mt-10">
    <div class="flex items-center gap-3">
      <h3 class="text-lg font-semibold">Stack & Ferramentas</h3>
      <div class="flex-1 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent"></div>
    </div>
    <div class="mt-4 relative g-border rounded-2xl bg-white/[0.035] backdrop-blur overflow-x-auto">
      <ul class="min-w-max flex items-center gap-5 px-5 py-3">
        <li v-for="s in stacks" :key="s.name">
          <a :href="s.doc" target="_blank" rel="noopener" :title="`${s.name} — documentação`" class="group inline-flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/5 transition ring-1 ring-transparent hover:ring-white/10">
            <img :src="ICON_BASE + s.icon" :alt="s.name" class="h-7 w-7 object-contain opacity-90 group-hover:opacity-100 group-active:scale-[0.98] transition" loading="lazy"/>
            <span class="text-sm text-neutral-300 group-hover:text-white">{{ s.name }}</span>
          </a>
        </li>
      </ul>
    </div>
    <p class="mt-2 text-xs text-neutral-400">Clique para abrir a documentação oficial.</p>
  </section>
</template>

<style>
:root{--scroll-track:rgba(255,255,255,.06);--scroll-thumb:rgba(139,92,246,.45)}
.g-border::-webkit-scrollbar{height:10px}
.g-border::-webkit-scrollbar-track{background:var(--scroll-track);border-radius:9999px}
.g-border::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:9999px}
.g-border::-webkit-scrollbar-thumb:hover{background:rgba(139,92,246,.6)}
</style>
