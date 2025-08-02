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
    description: "Juicy grilled chicken with fiery sauce, layered in a soft bun.",
    price: 8.99,
    image: require("@/assets/images/burger.png"),
  },
  {
    id: 2,
    name: "Crispy Baken Roll",
    description: "Savory bacon wrapped in a crispy roll with smoky seasoning.",
    price: 7.25,
    image: require("@/assets/images/baken.png"),
  },
  {
    id: 3,
    name: "Creamy Pasta Bowl",
    description: "Rich and creamy pasta tossed with herbs and melted cheese.",
    price: 9.5,
    image: require("@/assets/images/pasta.png"),
  },
  {
    id: 4,
    name: "Beef Bacon Stack",
    description: "Tender beef slices with crispy bacon in a delicious layer.",
    price: 10.75,
    image: require("@/assets/images/beefbaken.png"),
  },
  {
    id: 5,
    name: "Fresh Green Salad",
    description: "A refreshing mix of leafy greens, tomatoes, and citrus zest.",
    price: 6.0,
    image: require("@/assets/images/salad.png"),
  },
  {
    id: 6,
    name: "Roasted Veggie Mix",
    description: "Oven-roasted vegetables seasoned with olive oil and herbs.",
    price: 8.0,
    image: require("@/assets/images/rostvegggies.png"),
  },
]

    };
  },
  methods: {
    addToCart(product) {
      alert(`Added "${product.name}" to cart!`);
    },
  },
};
</script>