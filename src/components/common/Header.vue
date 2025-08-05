<template>
  <header class="header">
    <div class="container">
      <!-- Brand Logo -->
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/images/brand1.png" alt="Brand Logo" />
        </router-link>
      </div>

      <!-- Desktop Navigation -->
      <nav class="nav desktop-nav">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/product">Product</router-link></li>
          <li><router-link to="/faq">FAQ</router-link></li>
          <li><router-link to="/gallery">Gallery</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
         
        </ul>
      </nav>

      <ul class="side-items">
        
         
           <li>
            <router-link to="/order" class="order-button">
              Order Now
            </router-link>
          </li>
           <li>
            <button class="cart-icon" aria-label="Cart" @click="toggleCart">
              <ShoppingCartIcon />
              <span class="counter">{{ cart.items.length }}</span>
            </button>
          </li>
      </ul>

      <!-- Hamburger Button -->
      <button class="hamburger" @click="toggleMobileMenu" aria-label="Menu">
        <MenuIcon />
      </button>

      <!-- Mobile Navigation Dropdown -->
      <transition name="slide-fade">
        <nav v-if="mobileMenuOpen" class="nav mobile-nav">
          <ul>
            <li>
              <router-link @click="closeMobileMenu" to="/">Home</router-link>
            </li>
            <li>
              <router-link @click="closeMobileMenu" to="/about">About</router-link>
            </li>
            <li>
              <router-link @click="closeMobileMenu" to="/product">Product</router-link>
            </li>
            <li>
              <router-link @click="closeMobileMenu" to="/faq">FAQ</router-link>
            </li>
            <li>
              <router-link @click="closeMobileMenu" to="/gallery">Gallery</router-link>
            </li>
            <li>
              <router-link @click="closeMobileMenu" to="/contact">Contact</router-link>
            </li>
          
          </ul>
        </nav>
      </transition>
    </div>
  </header>
</template>

<script>
import { ref, inject } from "vue";
import { ShoppingCartIcon, MenuIcon } from "lucide-vue-next";

export default {
  name: "AppHeader",
  components: {
    ShoppingCartIcon,
    MenuIcon,
  },
  setup() {
    const cart = inject("cart");
    const toggleCart = inject("toggleCart");
    const mobileMenuOpen = ref(false);

    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value;
    };

    const closeMobileMenu = () => {
      mobileMenuOpen.value = false;
    };

    return {
      cart,
      toggleCart,
      mobileMenuOpen,
      toggleMobileMenu,
      closeMobileMenu,
    };
  },
};
</script>
