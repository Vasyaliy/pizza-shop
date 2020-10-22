import Vue from 'vue'

interface State {
  cartProducts: {
    count: number;
    [key: string]: string | number;
  }[];
}

export default {
  state: {
    cartProducts: []
  },
  getters: {
    cartProducts (state: State) {
      return state.cartProducts
    }
  },
  actions: {

  },
  mutations: {
    // @ts-ignore

    deleteProduct (state: State, targetProduct: State['cartProducts'][0]) {
      const productIndex = state.cartProducts.findIndex(product => product.id === targetProduct.id)
      Vue.set(state.cartProducts[productIndex], 'count', 0)
      state.cartProducts.splice(productIndex, 1)
    },

    changeCountOfProduct (state: State, payload: { product: State['cartProducts'][0]; delta: number }) {
      const foundedProduct = state.cartProducts.find(product => product.id === payload.product.id)
      if (!foundedProduct) return
      if (foundedProduct.count + payload.delta === 0) {
        // @ts-ignore
        this.commit('deleteProduct', payload.product)
        return
        // const productIndex = state.cartProducts.findIndex(product => product.id === payload.product.id)
        // state.cartProducts.splice(productIndex, 1)
      }
      Vue.set(foundedProduct, 'count', +foundedProduct.count + payload.delta)
    },

    addProduct (state: State, product: State['cartProducts'][0]) {
      Vue.set(product, 'count', 1)
      state.cartProducts.unshift(product)
    }
  }
}
