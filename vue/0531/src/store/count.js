export default {
  namespaced: true,
  state(){
    return {
      count: 0
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
    increase({state, commit}) {
      commit('setState', {
        count: state.count + 1,
      })
    }
  }

}
