import axios from 'axios'
const state = () => ({
  language: {}
})

const getters = {
  getLanguage: (state, getters, rootState) => {
    return state.language
  },
}

const actions = {
  setLanguage ({ state, commit }, language) {
    commit('setLanguage', language) 
  }
}

const mutations = {
  setLanguage(state, data) {
    state.language = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
