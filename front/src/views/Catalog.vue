<template>
  <div class="home">
    <div
      class="filter-bar flex justify-between"
    >
      <v-select
        style="width: 200px;"
        v-model="priceSort.value"
        :options="priceSort.options"
      />
      <input
        style="width: 180px;"
        class="search"
        v-model="search"
        placeholder="Поиск"
      >
    </div>
    <div class="list">
      <pizza-card
        v-for="(product) in filteredList"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>

import PizzaCard from '@/components/PizzaCard.vue'
import VSelect from '@/components/VSelect.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'PizzaList',
  components: {
    PizzaCard,
    VSelect
  },

  data () {
    return {
      search: '',
      priceSort: {
        options: [{
          value: 'priceAscending',
          label: 'По возрастанию'
        }, {
          value: 'priceDescending',
          label: 'По убыванию'
        }],
        value: 'priceAscending',
        priceAscending: (a, b) => a.price - b.price,
        priceDescending: (a, b) => b.price - a.price
      }
    }
  },

  computed: {
    ...mapGetters(['allProducts', 'cartProducts']),
    filteredList () {
      const list = this.allProducts.slice()
      list.sort(this.priceSort[this.priceSort.value])
      return list.filter(product => {
        return product.name.trim().toUpperCase().includes(this.search.trim().toUpperCase())
      })
    }
  },

  methods: mapActions(['getProducts']),

  mounted () {
    this.getProducts()
  }
}
</script>

<style lang="scss" scoped>

.filter-bar {
  margin: auto;
  margin-top: 20px;
  margin-bottom: 40px;
  width: 25%;
  min-width: 420px;
}

.search {
  outline: none;
  border-radius: 6px;
  font-size: 16px;
  padding: 5px;
  border: solid black 1px;
}

.search:focus {
  border: solid 1px red;
}

.list {
  margin: auto;
  width: 80%;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))
}
</style>
