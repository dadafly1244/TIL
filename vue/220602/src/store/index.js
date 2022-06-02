import { createStore } from 'vuex'
import message from './message'
import count from './count'

export default createStore ({
  modules: {
    message,
    count
  }
})


