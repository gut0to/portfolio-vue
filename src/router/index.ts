import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/HomeView.vue')
const Projects = () => import('../views/ProjectsView.vue')
const Project = () => import('../views/ProjectView.vue')
const Services = () => import('../views/ServicesView.vue')
const About = () => import('../views/AboutView.vue')
const Contact = () => import('../views/ContactView.vue')
const ThankYou = () => import('../views/ThankYouView.vue')

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/projetos', name: 'projects', component: Projects },
    { path: '/projetos/:slug', name: 'project', component: Project },
    { path: '/servicos', name: 'services', component: Services },
    { path: '/sobre', name: 'about', component: About },
    { path: '/contato', name: 'contact', component: Contact },
    { path: '/obrigado', name: 'thankyou', component: ThankYou },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ],
  scrollBehavior: () => ({ top: 0 })
})
