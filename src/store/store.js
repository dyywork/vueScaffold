import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  tabsHide: true,
}

const mutations = {
  increment (state) {
    state.tabsHide = true
  },
  incrementOn (state) {
    state.tabsHide = false
  },
}

const store = new Vuex.Store({
  state,
  mutations,
})

export default store
