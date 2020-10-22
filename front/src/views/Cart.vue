<template>
  <div>
    <h1 style="margin: auto"> Корзина </h1>
    <div class="cart-items">
      <p v-if="!cartProducts.length"> В корзине ничего нет( </p>
      <cart-item
        style="margin: 10px 0px"
        v-for="(product) in cartProducts"
        :key="product.id"
        :product="product"
      />
      <div
        style="width: 300px; margin: auto; margin-top: 30px"
        class="flex justify-between vertical-center"
        v-if="cartProducts.length"
      >
        <div>
          Цена: {{ fullPrice }}р
        </div>
        <button
          class="button order-btn"
          @click="makeOrder"
        >
          <span>Заказать</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import CartItem from '@/components/CartItem.vue'
import axios from 'axios'

export default Vue.extend({
  components: {
    CartItem
  },

  computed: {
    ...mapGetters(['cartProducts']),
    fullPrice () {
      return this.cartProducts
        .reduce((sum: number, product: {[key: string]: number}) => sum + product.count * product.price, 0)
    }
  },

  methods: {
    makeOrder () {
      // @ts-ignore
      const order = this.cartProducts.map((id, count) => {
        return { id, count }
      })
      axios({
        url: 'http://localhost:3000/order',
        data: order,
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        }
      })
        .then(({ data }) => {
          console.log(data)
        })
        .catch(console.error)
    }
  }
})
</script>

<style lang="scss" scoped>

.cart-items {
  width: 50%;
  min-width: 500px;
  min-width: 600px;
  margin: auto;
}

.order-btn {
  height: 40px;
  width: 200px;
  font-size: 20px;
}
</style>
