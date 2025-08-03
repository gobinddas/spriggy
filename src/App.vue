<template>
  <div id="app">
    <Header />
    <CartPopup v-if="showCart" @close="showCart = false" />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/common/Header.vue';
import Footer from './components/common/Footer.vue';
import CartPopup from './components/common/CartPopup.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    CartPopup
  },
  data() {
    return {
      showCart: false
    };
  },
  provide() {
    return {
      toggleCart: () => {
        this.showCart = !this.showCart;
      }
    };
  }
};
</script>
