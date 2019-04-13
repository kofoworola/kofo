import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    transition: false,
  },
  mutations: {
    setLoading(state,loading){
      state.loading = loading;
    },
    setTransition(state,transitioning){
      state.transition = transitioning;
    }
  },
  actions: {

  }
})
