import { createApp } from 'vue'
import App from './App.vue'
import BaseCard from './components/BaseCard.vue'

createApp(App)
  .component('BaseCard', BaseCard) 
  .mount('#app')
