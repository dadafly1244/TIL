// import VueRouter from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import TheHeader from '~/components/TheHeader.vue'

import Home from './Home.vue'
import Movie from './Movie.vue'
import About from './About.vue'
import AboutName from './AboutName.vue'
import NotFound from './NotFound.vue'

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      name: 'mainpage',
      // path: '도메인이 생략되어 있음/',
      path: '/',
      components: {
        TheHeader,
        default: Home,
      },
    },
    {
      path: '/movies/:heropy',
      components: {
        TheHeader,
        default: Movie,
      },
    },
    {
      path: '/about',
      component: About,
      //meta: { auth: true },
      children: [
        {
          path: 'name',
          component: AboutName,
        },
      ],
    },
    //순서 중요!!! 맨 위에 있으면 안돼! 제일 뒤!
    {
      path: '/:notFound(.*)*',
      component: NotFound,
      // redirect: '/',
    },
  ],
})

//vue router 플러그인? 플러그인이란??
