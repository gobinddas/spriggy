<template>
    <div class="section-padding contact-section">
        <div class="container">
            <div class="contact-content">
                <h2 class="section-heading">Get in Touch</h2>
                <h3 class="section-title">Send Us A Quick Message</h3>
                <p class="des">Your information is collected solely for business purposes. We prioritize your privacy
                    and ensure that your data is kept secure and confidential.</p>
            </div>
            <div class="contact-form">
                <form @submit.prevent="handleSubmit">
                    <div class="form-group">
                        <input type="text" v-model="form.name" placeholder="Full Name" required />
                        <span v-if="submitted && !form.name">Full Name is required</span>
                    </div>

                    <div class="form-group">
                        <input type="email" v-model="form.email" placeholder="Email" required />
                        <span v-if="submitted && !form.email">Email is required</span>
                    </div>

                    <div class="form-group">
                        <input type="text" v-model="form.phone" placeholder="Phone Number" required />
                        <span v-if="submitted && !isValidPhone">Enter valid 10-digit number starting with 9</span>
                    </div>

                    <div class="form-group">
                        <select v-model="form.subject" required>
                            <option disabled value="">Select Subject</option>
                            <option>General Inquiry</option>
                            <option>Business Talk</option>
                            <option>Complains</option>
                            <option>Other</option>
                        </select>
                        <span v-if="submitted && !form.subject">Subject is required</span>
                    </div>


                    <div class="form-group">
                        <textarea v-model="form.message" rows="4" placeholder="Your Message" required></textarea>
                        <span v-if="submitted && !form.message">Message is required</span>
                    </div>

                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: "ContactSection",
    data() {
        return {
            form: {
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            },
            submitted: false
        }
    },
    computed: {
        isValidPhone() {
            return /^9\d{9}$/.test(this.form.phone);
        }
    },
    methods: {
        handleSubmit() {
            this.submitted = true;
            const { name, email, phone, subject, message } = this.form;
            if (name && email && phone && subject && message && this.isValidPhone) {
                alert("Form submitted successfully!");
                // here you can send the form data to the server
                this.form = { name: '', email: '', phone: '', subject: '', message: '' };
                this.submitted = false;
            }
        }
    }
}
</script>
