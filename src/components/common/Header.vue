<template>
  <header class="header">
    <div class="container">
      <!-- Brand Logo -->
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/images/brand1.png" alt="Brand Logo" />
        </router-link>
      </div>

      <nav class="nav">
        <ul>
          <!-- Order Now -->
          <router-link to="/order" class="order-button">
            Order Now
          </router-link>

          <!-- Cart Icon with dynamic counter -->
          <li>
            <button class="cart-icon" aria-label="Cart" @click="toggleCart">
              <ShoppingCartIcon />
              <span class="counter">{{ cart.items.length }}</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { inject } from 'vue';
import { ShoppingCartIcon } from 'lucide-vue-next';

export default {
  name: "AppHeader",
  components: {
    ShoppingCartIcon,
  },
  setup() {
    const cart = inject('cart');
    const toggleCart = inject('toggleCart');

    return {
      cart,
      toggleCart,
    };
  }
};
</script>
