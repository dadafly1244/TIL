import { createApp } from 'vue'
import store from './store' //index.js 생략가능!!
import App from './App.vue'

createApp(App)
  .use(store)
  .mount('#app')
