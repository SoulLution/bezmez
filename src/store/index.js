import Vue from 'vue'
import Vuex from 'vuex'
import languages from './modules/languages'
import show from './modules/show'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    languages,
    show
  },
  strict: true
})