import axios from 'axios'
import * as types from "../mutation-type"

export default {
  state: {
   WalletInfo: {
    },
    UserInfo: {
      authenticated: false,
      blockHeight: ''
    },
  },
  mutations: {
    [types.SET_BLOCK_HEIGHT](state, payload) {
      state.UserInfo.blockHeight = payload.info
    },
    [types.SET_WALLET_INFO](state, payload) {
      state.WalletInfo = payload.info
    }
  },
  actions: {
    getBlockHeight_inBC({dispatch, commit}) {
      let url = {
        action: 'block/height',
        params: '?auth_type=getblockheight'
      }
      return dispatch('axiosGet_inBC', url).then(response => {
        commit({
          type: types.SET_BLOCK_HEIGHT,
          info: response.Result
        })
      }).catch(error => {
        // do something
      })
    },
    axiosGet_inBC({dispatch}, $url) {
      let getUrl = process.env.BC_URL
      if($url.params === '') {
        getUrl = process.env.BC_URL + $url.action
      } else {
        getUrl = process.env.BC_URL + $url.action + $url.params
      }

      return axios.get(getUrl).then(response => {
        // debug
        console.log(response)
        return response.data
      }).catch(error => {
        // debug
        console.log(error)
      })
    },
    setWalletInfo({dispatch, commit},$walletInfo) {
      commit({
        type: types.SET_WALLET_INFO,
        info: $walletInfo
      })
    },
    emptyWalletInfo({dispatch, commit}) {
      commit({
        type: types.SET_WALLET_INFO,
        info: ''
      })
    },

    /**
     * Ret format
     *
     * { "Action": "xxx",
     *   "Desc": "SUCCESS",
     *   "Error": 0,
     *   "Result": { },
     *   "Version": "1.0.0" }
     *
     * { "Action": "xxx",
     *   "Desc": "XXXXX",
     *   "Error": 4200X,
     *   "Result": "",
     *   "Version": "1.0.0" }
     *
     * @param {dispatch}
     * @param $txRawData
     * @return {Promise<AxiosResponse>}
     */
    axiosPost_inBC({dispatch}, $txRawData) {
      let formData = {
        Action: "sendrawtransaction",
        Version: "1.0.0",
        Type: "",
        Data: $txRawData
      }

      return axios.post(process.env.BC_URL + 'transaction', formData).then(response => {
        return response.data
      }).catch(error => {
        console.log(error)
        return false
      })
    }
  }
}
