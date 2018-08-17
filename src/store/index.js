import Vue from 'vue'
import Vuex from 'vuex'

import BlockChain from './modules/block-chain'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    BlockChain
  }
})
