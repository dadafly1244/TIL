import {createRouter, createWebHistory} from 'vue-router'
import Home from './Home.vue'
import About from './About.vue'
import AboutName from './AboutName.vue'
import Movie from './Movie.vue'
import NotFound from './NotFound.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'mainpage',
      path:'/',
      component: Home
    },
    {
      path:'/About',
      component: About,
      children: [
        {
          path: 'name',
          component: AboutName
        }
      ]
    },
    {
      path: '/movies/:heropy',
      component: Movie
    },
    {
      path: '/:notFound(.*)*',
      component: NotFound
    }
  ]
})
