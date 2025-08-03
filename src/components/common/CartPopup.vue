<template>
  <div class="cart-popup">
    <div class="cart-content">
      <h2>Your Cart</h2>
      <ul>
        <li v-for="item in cart.items" :key="item.id" class="cart-item">
          <img :src="item.image" class="cart-thumb" />
          <div class="cart-details">
            <h4>{{ item.name }}</h4>
            <p>${{ (item.price * item.quantity).toFixed(2) }}</p>
            <div class="quantity">
              <button @click="decrease(item)">-</button>
              <span>{{ item.quantity }}</span>
              <button @click="increase(item)">+</button>
            </div>
            <button class="remove" @click="remove(item)">Remove</button>
          </div>
        </li>
      </ul>
      <div class="cart-footer">
        <h3>Total: ${{ totalPrice.toFixed(2) }}</h3>
        <button class="checkout-btn">Checkout</button>
        <button class="close-btn" @click="$emit('close')">Close</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, computed } from 'vue'
const cart = inject('cart')

const totalPrice = computed(() =>
  cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
)

function increase(item) {
  item.quantity++
}

function decrease(item) {
  if (item.quantity > 1) item.quantity--
}

function remove(item) {
  const index = cart.items.findIndex(i => i.id === item.id)
  if (index > -1) cart.items.splice(index, 1)
}
</script>


