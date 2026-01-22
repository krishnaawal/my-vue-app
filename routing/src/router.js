import {createWebHistory, createRouter } from 'vue-router'

import About from "./component/About.vue"
import Contact from "./component/Contact.vue"
import Skills from "./component/Skills.vue"
import Experience from "./component/Experience.vue" 

//  giving path 
const routes = [
  { path: '/', component: About },
  { path: '/Contact', component: Contact },
  { path: '/Skills', component: Skills },
  { path: '/Experience', component: Experience },
]
export const router = createRouter({
  history: createWebHistory(),
  routes,
})