import { createApp, reactive } from 'vue';
import App from './App.vue';
import router from './router';
import './scss/style.scss';

const app = createApp(App);

// Load from local storage
const storedCart = JSON.parse(localStorage.getItem('cartItems')) || [];

const cartState = reactive({
  items: storedCart
});

// save to local storage
watchCart(cartState);

function watchCart(cart) {
  // manual effect
  let stringify = JSON.stringify(cart.items);
  setInterval(() => {
    const newStringify = JSON.stringify(cart.items);
    if (newStringify !== stringify) {
      localStorage.setItem('cartItems', newStringify);
      stringify = newStringify;
    }
  }, 500);
}

app.provide('cart', cartState);
app.use(router).mount('#app');

