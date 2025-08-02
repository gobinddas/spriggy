<template>
    <section class="hero-section">
        <!-- Carousel background -->
        <div class="carousel-container">
            <div v-for="(image, index) in images" :key="index" class="carousel-slide"
                :class="{ active: index === currentIndex }" :style="{ backgroundImage: `url(${image})` }">
                <div class="overlay"></div>
            </div>
        </div>

        <!-- Content -->
        <div class="container">
            <div class="text-content">
                <p class="subtitle">Art of Fine Dining</p>
                <h1 class="main-title">
                    Eat fresh meals 
                     <span class="highlight">share joy</span>
                </h1>
                <p class="description">
                    Crafted with care and bursting with flavor, our food brings people together for unforgettable moments—dine in or take away.
                </p>
                <div class="button-group">
                    <button class="btn-primary" @click="bookTable">
                        Book A Table
                    </button>
                    <button class="btn-secondary" @click="downloadApp">
                        Download App
                    </button>
                </div>
            </div>

            <!-- Circular images on right -->
            <div class="side-images">
                <div class="main-img">
                    <img src="../../assets/images/main-img.webp" alt="Brand Logo" />
                </div>
                <img class="circular-image " src="../../assets/images/main2.webp" alt="Brand Logo" />
                <img class="circular-image right-img" src="../../assets/images/main1.webp" alt="Brand Logo" />

            </div>
        </div>

        <!-- Carousel controls -->
        <button class="nav-btn prev-btn" @click="prevImage" aria-label="Previous Slide">
            ‹
        </button>
        <button class="nav-btn next-btn" @click="nextImage" aria-label="Next Slide">
            ›
        </button>

        <!-- Carousel indicators -->
        <div class="indicators">
            <button v-for="(_, index) in images" :key="index" class="indicator"
                :class="{ active: index === currentIndex }" @click="goToSlide(index)"
                :aria-label="`Go to slide ${index + 1}`"></button>
        </div>
    </section>
</template>

<script>
import banner1 from '@/assets/images/banner1.webp';
import banner2 from '@/assets/images/banner2.webp';
import banner3 from '@/assets/images/banner3.webp';


export default {
    name: 'RestaurantHero',
    data() {
        return {
            currentIndex: 0,
            images: [banner1, banner2, banner3],

            autoSlideInterval: null,
        };
    },
    methods: {
        nextImage() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        },
        prevImage() {
            this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        },
        goToSlide(index) {
            this.currentIndex = index;
        },
        bookTable() {
            alert('Book a table clicked!');
        },
        downloadApp() {
            alert('Download app clicked!');
        },
        startAutoSlide() {
            this.autoSlideInterval = setInterval(this.nextImage, 5000);
        },
        stopAutoSlide() {
            if (this.autoSlideInterval) {
                clearInterval(this.autoSlideInterval);
                this.autoSlideInterval = null;
            }
        },
    },
    mounted() {
        this.startAutoSlide();
    },
    beforeUnmount() {
        this.stopAutoSlide();
    },
};
</script>

<style scoped></style>