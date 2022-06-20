import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './routes'
//통채로 가져오는 것고 같은 의미
import './routes/guards'
import App from './App.vue'

createApp(App).use(createPinia()).use(router).mount('#app')
