import Vue from 'vue'
import Vuex from 'vuex'
import cart from '@/store/modules/cart'
import products from '@/store/modules/products'

Vue.use(Vuex)
const myPlugin = store => {
    store.subscribe((mutation, state) => {
        // mutation 的格式为 { type, payload }
        // type里面的格式是cart/cartProducts
        // state 的格式为 { cart, products }
        if (mutation.type.startsWith('cart/')) {
            // 本地存储cartProducts
            window.localStorage.setItem('cart-products', JSON.stringify(state.cart.cartProducts))
        }
    })
}
export default new Vuex.Store({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        products,
        cart
    },
    plugins: [myPlugin]
})
