import { createRouter, createWebHistory } from 'vue-router'

import Home from './Home.vue'
import About from './About.vue'
import Movie from './Movie.vue'

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/movies/:id',
      component:  Movie
    },
    {
      path: '/:notFound(.*)*',
      redirect: '/',
    },
  ]
})


// .* (선행문자가 "."이므로 하나 이상의 문자를 포함하는 문자열, 공백 문자열은 안됨 //  .*은 길이에 상관없이 임의의 문자열)
