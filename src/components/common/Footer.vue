<template>
  <footer class="section-padding footer">
    <div class="container">
      <div class="footer-content">
        <!-- Column 1 -->
        <div class="footer-col">
          <img src="@/assets/images/brand1.png" alt="Logo" class="footer-logo" />
          <p class="footer-desc">Follow us on our social handles to stay updated with the latest deals, special offers, and exclusive discounts tailored just for you. Don't miss out—join our community today!</p>
          <div class="social-icons">
            <LucideFacebook @click="navigateTo('facebook')" />
            <LucideInstagram @click="navigateTo('instagram')" />
            <LucideTwitter @click="navigateTo('twitter')" />
          </div>
        </div>

       

        <!-- Column 3 -->
        <div class="footer-col contact-col">
          <h3 class="footer-heading">Contact</h3>
          <ul class="footer-contact">
            <li><LucidePhone class="icon" /> +977-9812345678</li>
            <li><LucideMail class="icon" /> contact@yourapp.com</li>
            <li><LucideMapPin class="icon" /> Kathmandu, Nepal</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom Footer -->
    <div class="bottom-footer">
      <p>&copy; {{ new Date().getFullYear() }} . All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
import { LucideFacebook, LucideInstagram, LucideTwitter, LucidePhone, LucideMail, LucideMapPin } from 'lucide-vue-next';

export default {
  name: "FooterSection",
  components: {
    LucideFacebook,
    LucideInstagram,
    LucideTwitter,
    LucidePhone,
    LucideMail,
    LucideMapPin,
  },
  methods: {
    navigateTo(page) {
      console.log("Navigate to:", page);
      // Implement your router logic if needed
    }
  }
};
</script>
