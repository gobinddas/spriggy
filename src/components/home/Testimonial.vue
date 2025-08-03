<template>
    <div class="section-padding testiomial-section">
        <div class="container">
            <div class="testimonial-content">
                <h3 class="section-heading">Our testimonials</h3>
                <h2 class="section-title">
                      <span class="highlight">Meals and experiences</span> </h2>


                <swiper :loop="true" :slides-per-view="1" :autoplay="{ delay: 7000, disableOnInteraction: false }"
                    navigation class="testimonial-swiper">

                    <swiper-slide v-for="(testimonial, index) in testimonials" :key="index">
                        <div class="testimonial-card">
                            <Quote class="quote-icon" />
                            <p class="testimonial-text">{{ testimonial.text }}</p>
                            <div class="client-info">
                                <img :src="testimonial.image" :alt="testimonial.name" />
                                <h4>{{ testimonial.name }}</h4>
                            </div>
                        </div>
                    </swiper-slide>


                </swiper>


            </div>
        </div>
    </div>

</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation, Autoplay } from 'swiper'; 
import { Quote } from 'lucide-vue-next';

SwiperCore.use([Navigation, Autoplay]); 

export default {
    name: "TestimonialSection",
    components: {
        Swiper,
        SwiperSlide,
        Quote,
    },
    data() {
        return {
            testimonials: [
                {
                    name: "Emily Carter",
                    text: "The food was simply divine, with each dish perfectly balanced in flavor and presentation. From the first bite to the last, I was genuinely impressed. A truly unforgettable dining experience I’d recommend to anyone visiting Sydney.",
                    image: require('@/assets/images/dummy.png'),
                },
                {
                    name: "Liam Johnson",
                    text: "Incredible flavors, wonderful service, and a cozy, welcoming vibe made my dinner at Spriggy one to remember. Every course was thoughtfully prepared and full of character. I’ve already made plans to come back with friends and family!",
                    image: require('@/assets/images/dummy.png'),
                },
                {
                    name: "Sophie Turner",
                    text: "Spriggy’s meals never disappoint. From dine-in to takeaway, it’s consistently fresh, flavorful, and satisfying. I’ve tried several dishes over time, and each one felt like a comforting hug. It’s become my go-to spot for any food craving.",
                    image: require('@/assets/images/dummy.png'),
                },
            ],
        };
    },
};
</script>
