<template>
  <div class="order-page">
    <div class="container">
      <div class="order-content">
        <h1 class="section-title">Order Your Favorite Food</h1>

        <!-- category filter  -->
        <div class="category-filter">
          <button
            v-for="cat in categories"
            :key="cat"
            @click="selectedCategory = cat"
            :class="{ active: selectedCategory === cat }"
          >
            {{ cat }}
          </button>
        </div>

        <!-- price filter  -->
        <div class="sort-filter">
          <label for="sort">Sort by Price:</label>
          <select id="sort" v-model="sortOrder">
            <option value="none">None</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>

       
        <div class="product-grid">
          <div
            v-for="(item) in visibleItems"
            :key="item.id"
            class="product-card"
          >
            <img :src="item.image" :alt="item.name" class="product-img" />
            <h3 class="name">{{ item.name }}</h3>
            <p class="des">{{ item.description }}</p>
            <p class="price">${{ item.price }}</p>
            <button class="add-btn" @click="addToCart(item)">Add to Cart</button>
          </div>
        </div>

        <!-- Load More Button -->
        <div v-if="filteredAndSortedItems.length > visibleCount" class="load-more-container">
          <button class="load-more-btn" @click="loadMore">Load More</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, inject } from 'vue';
import { foodItems } from '@/mock/foodItems';

const cart = inject('cart');
if (!cart) throw new Error('Missing cart injection');

const categories = ref(['All', ...new Set(foodItems.map(item => item.category))]);
const selectedCategory = ref('All');
const sortOrder = ref('none');
const visibleCount = ref(8);

// Filter and sort logic
const filteredAndSortedItems = computed(() => {
  let items = selectedCategory.value === 'All'
    ? [...foodItems]
    : foodItems.filter(item => item.category === selectedCategory.value);

  if (sortOrder.value === 'asc') {
    items.sort((a, b) => a.price - b.price);
  } else if (sortOrder.value === 'desc') {
    items.sort((a, b) => b.price - a.price);
  }

  return items;
});

// Items to show
const visibleItems = computed(() => {
  return filteredAndSortedItems.value.slice(0, visibleCount.value);
});

function loadMore() {
  visibleCount.value += 4;
}

function addToCart(item) {
  const existing = cart.items.find(i => i.id === item.id);
  if (existing) {
    existing.quantity++;
  } else {
    cart.items.push({ ...item, quantity: 1 });
  }
}
</script>


