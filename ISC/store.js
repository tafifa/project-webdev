import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
Vue.use(Vuex)
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

const state = {
  isLogin : false,
  users : [],
}

const mutations = {
  setLogin (state, bool) {
    state.isLogin = bool;
  },
  setUsers (state, data) {
    state.users = data;
  },
  set (state, [variable, value]) {
    state[variable] = value
  }
}

export default new Vuex.Store({
  state,
  mutations,
  plugins: [vuexLocal.plugin]
})