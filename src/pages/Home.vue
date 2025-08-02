<template>
  <div>
   <Banner />
   <AboutUs/>
   <Feature />
   <Testimonial />
   <Contact />
   <AppPromotion/>
  </div>
</template>

<script>
import Banner from '@/components/home/Banner.vue';
import AboutUs from '@/components/home/About.vue';
import Feature from '@/components/home/Feature.vue';
import Testimonial from '@/components/home/Testimonial.vue';
import Contact from '@/components/home/Contact.vue';
import AppPromotion from '@/components/home/AppPromotion.vue';

export default {
  name: 'HomePage',
  components:{
    Banner,
    AboutUs,
    Feature,
    Testimonial,
    Contact,
    AppPromotion,
  }
  
};
</script>
