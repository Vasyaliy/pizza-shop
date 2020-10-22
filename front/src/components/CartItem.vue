<template>
  <div class="cart-item">
    <img
      height="100%"
      style="object-fit: cover"
      :src="product.image"
    />
    <h4 style="width: 10%; text-align: center">{{ product.name }}</h4>
    <div
      style="min-width: 190px; padding: 0px 20px"
      class="flex justify-between"
    >
      <button
        v-if="!product.count"
        class="button price-button"
        @click="addProduct(product)"
      >
        {{ product.price }}р
      </button>
      <button
        style="border-radius: 50%"
        class="button btn-circle-material material"
        @click="changeCountOfProduct({ product, delta: -1 })"
      >
        remove
      </button>
      <span>
        Количество: {{ product.count }}
      </span>
      <button
        style="border-radius: 50%"
        class="button btn-circle-material material"
        @click="changeCountOfProduct({ product, delta: 1 })"
      >
        add
      </button>
    </div>
    <button
      style="border: none; margin-right: 20px"
      class="material button cart"
      @click="deleteProduct(product)"
    >
      clear
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'

export default Vue.extend({
  name: 'PizzaCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  },

  methods: {
    ...mapMutations(['addProduct', 'changeCountOfProduct', 'deleteProduct']),
    incrementProduct () {
      this.changeCountOfProduct(this.product)
    }
  }
})
</script>

<style scoped lang="scss">

.price-button {
  color: red;
  font-size: 1.0em;
  border: solid 1px red;
  width: 100%;
}

.btn-circle-material {
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.cart-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
</style>
