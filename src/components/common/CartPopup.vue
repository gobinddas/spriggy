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

<style scoped>
.cart-popup {
  position: fixed;
  top: 10%;
  right: 5%;
  width: 400px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.2);
  z-index: 1000;
  padding: 20px;
}
.cart-content h2 {
  margin-bottom: 20px;
}
.cart-item {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}
.cart-thumb {
  width: 60px;
  height: 60px;
  object-fit: cover;
}
.cart-details {
  flex: 1;
}
.quantity button {
  padding: 2px 8px;
}
.cart-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.checkout-btn {
  background: green;
  color: white;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
}
.remove {
  background: red;
  color: white;
  border: none;
  padding: 4px 8px;
  margin-top: 5px;
  cursor: pointer;
}
.close-btn {
  background: gray;
  color: white;
  border: none;
  padding: 8px 12px;
}
</style>
