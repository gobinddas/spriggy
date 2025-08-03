<template>
  <section class="feature-section section-padding">
    <div class="container">
      <div class="wrapper">
        <h2 class="section-heading">Signature Dishes</h2>
        <h3 class="section-title">Discover our most loved and <span class="highlight">flavorful creations</span></h3>

        <swiper
          :slides-per-view="3"
          :space-between="20"
          :loop="true"
          :autoplay="{ delay: 3000, disableOnInteraction: false }"
          :breakpoints="{
            0: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 }
          }"
          class="mySwiper"
        >
          <swiper-slide v-for="product in products" :key="product.id">
            <div class="product-card">
              <img :src="product.image" :alt="product.name" />
              <h3>{{ product.name }}</h3>
              <p>{{ product.description }}</p>
              
                <div class="price">${{ product.price.toFixed(2) }}</div>
                <button @click="addToCart(product)">Add to Cart</button>
              
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { foodItems } from '@/mock/foodItems';

SwiperCore.use([Autoplay, Navigation, Pagination]);

export default {
  name: "FeaturePage",
  components: {
    Swiper,
    SwiperSlide,
  },
  inject: ['cart'], 
  data() {
    return {
      products: []
    };
  },
  mounted() {
    this.products = foodItems.filter(item => item.featured);
  },
  methods: {
    addToCart(product) {
      const found = this.cart.items.find(i => i.id === product.id);
      if (found) {
        found.quantity++;
      } else {
        this.cart.items.push({ ...product, quantity: 1 });
      }
    },
  },
};
</script>

