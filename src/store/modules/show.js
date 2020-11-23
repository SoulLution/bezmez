import axios from 'axios'
import router from 'vue-router'

const state = () => ({
  burger: false,
  registrate: false
})

const getters = {
  getBurger: (state, getters, rootState) => {
    return state.burger
  },
  getRegistrate: (state, getters, rootState) => {
    return state.registrate
  },
}

const actions = {
  setBurger ({ state, commit }, burger) {
    commit('setBurger', burger) 
  },
  setRegistrate ({ state, commit }, registrate) {
    commit('setRegistrate', registrate) 
  }
}

const mutations = {
  setBurger(state, bool) {
    state.burger = bool
    // console.log(router)
  },
  setRegistrate(state, bool) {
    state.registrate = bool
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
