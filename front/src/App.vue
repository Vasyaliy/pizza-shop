<template>
  <div id="app">
    <div class="flex justify-between">
      <router-link to="/">Пицца</router-link>
      <div class="flex">
        <button
          :disabled="$route.path.includes('/cart')"
          style="border: none;"
          class="material button cart"
          @click="$router.push('/cart')"
        >
          shopping_cart
        </button>
      </div>
    </div>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<style lang="scss">
.cart {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
}

.cart:hover {
  cursor: pointer;
}

.flex {
  display: flex;
}

.justify-center {
  justify-content: center;
}

.justify-between {
  justify-content: space-between;
}

.align-center {
  justify-content: center;
  align-items: center;
}

.vertical-center {
  align-items: center;
}

.material {
  font-family: 'Material Icons';
  content: "";
}

.button {
  outline: none;
  background: none;
  border-radius: 15px;
  border: solid 0.5px;
}

.button:hover {
  cursor: pointer;
}
</style>
