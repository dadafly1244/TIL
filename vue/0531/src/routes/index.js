import {createRouter, createWebHistory} from 'vue-router'
import Home from './Home.vue'
import About from './About.vue'
export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path:'/',
      component: Home
    },
    {
      path:'/about',
      component: About
    }
  ]
})
