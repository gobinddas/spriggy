<template>
  <header class="header">
    <div class="container">
      <!-- Brand image as a link -->
      <div class="logo">
        <router-link to="/">
          <img src="../../assets/images/brand1.png" alt="Brand Logo" />
        </router-link>

      </div>

      <nav class="nav">
        <ul>
          <!-- Cart icon alone -->
        

          <!-- Order Now button -->
          <router-link to="/order" class="order-button">
            
            Order Now
          </router-link>
            <li>
            <a href="/cart" class="cart-icon" aria-label="Cart">
              <ShoppingCartIcon />

              <span class="counter">0</span>

            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { ShoppingCartIcon } from 'lucide-vue-next';

export default {
  name: "AppHeader",
  components: {
    ShoppingCartIcon,
  },
};
</script>


