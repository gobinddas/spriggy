<template>
  <section class="feature-section">
    <div class="container">
      <div class="wrapper">
        <h2 class="section-heading">Our Food Products</h2>
        <h3 class="section-title">Our most delighted <span class="highlight">products</span></h3>

        <swiper
          :slides-per-view="3"
          :space-between="30"
          :loop="true"
          :autoplay="{ delay: 3000, disableOnInteraction: false }"
          :breakpoints="{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }"
          class="mySwiper"
        >
          <swiper-slide v-for="product in products" :key="product.id">
            <div class="product-card">
              <img :src="product.image" :alt="product.name" />
              <h3>{{ product.name }}</h3>
              <p>{{ product.description }}</p>
              <div class="product-footer">
                <span>${{ product.price.toFixed(2) }}</span>
                <button @click="addToCart(product)">Add to Cart</button>
              </div>
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

// Install required modules
SwiperCore.use([Autoplay, Navigation, Pagination]);

export default {
  name: "FeaturePage",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Spicy Chicken Burger",
          description: "Juicy grilled chicken with spicy sauce and fresh lettuce.",
          price: 8.99,
          image: require("@/assets/images/banner3.webp"),
        },
        {
          id: 2,
          name: "Veggie Delight Salad",
          description: "Fresh mixed greens with cherry tomatoes, cucumbers, and vinaigrette.",
          price: 6.5,
          image: require("@/assets/images/banner2.webp"),
        },
        {
          id: 3,
          name: "Cheese Pizza",
          description: "Classic cheese pizza with a crispy crust and fresh mozzarella.",
          price: 11.0,
          image: require("@/assets/images/banner1.webp"),
        },
        {
          id: 4,
          name: "Cheese Pizza",
          description: "Classic cheese pizza with a crispy crust and fresh mozzarella.",
          price: 11.0,
          image: require("@/assets/images/banner2.webp"),
        },
      ],
    };
  },
  methods: {
    addToCart(product) {
      alert(`Added "${product.name}" to cart!`);
    },
  },
};
</script>