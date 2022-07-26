import {createRouter, createWebHistory} from 'vue-router'
import Home from './Home.vue'
import Todopage from './Todolist.vue'
import About from './About.vue'

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({top:0}),
  routes: [
    {
      path: '/',
      component: Home

    },
    {
      path: '/Todolist',
      component: Todopage
    },
    {
      path: '/About',
      component: About
    }
  ]
})
