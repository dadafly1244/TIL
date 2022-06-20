import { defineStore } from 'pinia'

export const useMessageStore = defineStore('message', {
  //vuex 에서는 namespaced 가 필수
  state: () => ({
    message: 'hello World',
  }),
  getters: {
    reversedMessage(state) {
      return state.message.split('').reverse().join('')
    },
  },
  actions: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('')
    },
  },
})
