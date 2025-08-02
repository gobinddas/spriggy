<template>
  <div id="app">
    <Header />
    <router-view />  <!-- This renders the current page -->
  </div>
</template>

<script>
import Header from '@/components/common/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>
