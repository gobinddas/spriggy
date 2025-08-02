<template>
  <div>
   <Banner />
   <AboutUs/>
   <Feature />
  </div>
</template>

<script>
import Banner from '@/components/home/Banner.vue';
import AboutUs from '@/components/home/About.vue';
import Feature from '@/components/home/Feature.vue';

export default {
  name: 'HomePage',
  components:{
    Banner,
    AboutUs,
    Feature,
  }
  
};
</script>
