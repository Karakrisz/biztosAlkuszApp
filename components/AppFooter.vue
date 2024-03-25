<!-- components/Footer.vue -->
<template>
    <footer>
        <div class="footer-content">
            <div class="footer-content__form bg-color-w">
                <h5 class="text-transform-uppercase text-center">VEGYÜK FEL A KAPCSOLATOT!</h5>
                <div class="contact-form">
                    <form @submit.prevent="sendEmail">
                        <div class="form-group">
                            <label for="name">Név</label>
                            <input type="text" id="name" v-model="form.name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email Cím</label>
                            <input type="email" id="email" v-model="form.email" required>
                        </div>
                        <div class="form-group">
                            <label for="message">Üzenet</label>
                            <textarea id="message" v-model="form.message" required></textarea>
                        </div>
                        <button type="submit">Küldés</button>
                    </form>
                </div>
            </div>
            <div class="footer-content__link-box text-center">
                <img src="/img/footer/logo.svg" alt="Biztos Alkuszom" class="footer-content__link-box__img">
                <div class="footer-content__link-box__links">
                    <NuxtLink v-for="link in footerLinks" :key="link.path" :to="link.path" class="footer-link">
                        {{ link.name }}
                    </NuxtLink>
                </div>
                <div class="footer-content__link-box__DigitalSeed bg-color-w">
                    <NuxtLink class="footer-content__link-box__DigitalSeed__Nuxtlink text-transform-uppercase" to="/">
                        DIGITAL SEED STUDIO - 2024</NuxtLink>
                </div>
            </div>
        </div>
    </footer>
</template>


<script>
import axios from 'axios';
import { Footerlinks } from '~/utils/js/links';

export default {
    data() {
        return {
            footerLinks: Footerlinks,
            form: {
                name: '',
                email: '',
                message: ''
            }
        };
    },
    methods: {
        async sendEmail() {
            try {
                await axios.post('/send-email', this.form);
                console.log('Email sikeresen elküldve');
            } catch (error) {
                console.error('Hiba történt az email küldésekor:', error);
            }
        }
    }
};
</script>
