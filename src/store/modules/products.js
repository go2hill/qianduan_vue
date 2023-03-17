import axios from 'axios'

const state = {
  products: []
}
const getters = {}
const mutations = {
  setProducts (state, payLoad) {
    state.products = payLoad
  }
}
const actions = {
  async getProducts ({ commit }) {
    const { data } = await axios({
      method: 'GET',
      url: 'http://localhost:8088/api/products'
    })
    commit('setProducts', data)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
