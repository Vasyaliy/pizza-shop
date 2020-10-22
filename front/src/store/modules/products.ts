// import { mockProducts } from '@/mockData'
import axios from 'axios'

interface State {
  products: { [key: string]: string | number }[];
}

export default {
  state: {
    products: []
  },
  getters: {
    allProducts (state: State) {
      return state.products
    }
  },
  actions: {
    async getProducts (ctx: any) {
      const { data } = await axios.get('http://localhost:3000/getProducts')
      ctx.commit('setProducts', data)
    }
  },
  mutations: {
    setProducts (state: State, products: State['products']) {
      state.products = products
    }
  }
}
