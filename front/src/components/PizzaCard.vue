<template>
  <div class="card">
    <img
      width="100%"
      height="240px"
      style="object-fit: cover"
      :src="product.image"/>
      <div style="padding: 10px">
        <h4>{{ product.name }}</h4>
        <span style="color: #666;"> {{ product.ingredients }}</span>
        <div style="margin-top: 30px;">
          <button
            v-if="!product.count"
            class="button price-button"
            @click="addProduct(product)"
          >
            {{ product.price }}р
          </button>

          <div
            style="width: 100%; margin: auto;"
            class="flex justify-between "
            v-else
          >
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
        </div>
      </div>
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

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
</style>
