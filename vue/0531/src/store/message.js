export default {
  namespaced: true,//넣어야지만 제대로 쓸 수 있음.
  state(){
    return {
      message: ''
    }
  },
  getters: {
    
  },
  mutations: {
    setState(state, payload) {
      for (const key in payload) {
        state[key] = payload[key]
      }
    }
  },
  actions: {
    updateMessage({commit}, msg) {
      commit('setState', {
        message: msg
      })
    }
  }
}
