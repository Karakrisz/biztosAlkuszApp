<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useNuxtApp } from '#app'

const specialPaths = [
  '/gepjarmu-biztositas',
  '/utasbiztositas',
  '/tanulobiztositas',
  '/rendezvenyszolgalat',
  '/karbejentes',
  '/szemelyes-tanacsadas',
]
const route = useRoute()
const nuxtApp = useNuxtApp()

const isSpecialPage = computed(() => specialPaths.includes(route.path))

const links = [
  { name: 'Főoldal', path: '/' },
  { name: 'Partnerek', path: '/partnerek' },
  { name: 'Szolgáltatások', path: '/szolgaltatasok' },
  { name: 'ÁSZF', path: '/adatvedelmi-tajekoztato' },
  { name: 'Ajánlatkérés', path: '/ajanlatkeres' },
  { name: 'Kapcsolat', path: '/kapcsolat' },
]

const form = ref({
  firstname: '',
  lastname: '',
  email: '',
  phonenumber: '',
  message: '',
})

const isSent = ref(false)

const sendEmail = async () => {
  try {
    await nuxtApp.$mail.send({
      to: 'mualimadnan8@gmail.com',
      subject: `Új üzenetet küldött - ${form.value.firstname} ${form.value.lastname}`,
      html: `
        <p><strong>Name:</strong> ${form.value.firstname} ${form.value.lastname}</p>
        <p><strong>Email:</strong> ${form.value.email}</p>
        <p><strong>Phone Number:</strong> ${form.value.phonenumber}</p>
        <p><strong>Message:</strong></p>
        <p>${form.value.message}</p>
      `,
    })
    isSent.value = true
  } catch (error) {
    console.error('Error sending email:', error)
    alert('Failed to send email.')
  }
}
</script>

<template>
  <footer>
    <div
      :class="['footer-content', { 'footer-bg-special': isSpecialPage }]"
      class="position-relative"
    >
      <div
        class="page__header page__header--right page__header page__header--right--format"
      >
        <h3 class="page__header__h3 text-color-w text-transform-uppercase">
          AJÁNLATKÉRÉS
        </h3>
      </div>
      <div class="footer-content__form bg-color-w">
        <h5
          class="footer-content__form__h5 text-transform-uppercase text-center text-color"
        >
          VEGYÜK FEL A KAPCSOLATOT!
        </h5>
        <div class="contact-form">
          <form @submit.prevent="sendEmail">
            <div class="contact-form__grid-box grid-2">
              <div class="form-group form-group--margin-right">
                <input
                  class="form-group__input"
                  placeholder="Vezetéknév *"
                  type="text"
                  id="firstname"
                  v-model="form.firstname"
                  required
                />
              </div>
              <div class="form-group form-group--margin-left">
                <input
                  class="form-group__input"
                  placeholder="Keresztnév *"
                  type="text"
                  id="lastname"
                  v-model="form.lastname"
                  required
                />
              </div>
            </div>
            <div class="contact-form__grid-box grid-2">
              <div class="form-group form-group--margin-right">
                <input
                  class="form-group__input"
                  placeholder="E-mail cím *"
                  type="email"
                  id="email"
                  v-model="form.email"
                  required
                />
              </div>
              <div class="form-group form-group--margin-left">
                <input
                  class="form-group__input"
                  placeholder="Telefonszám"
                  type="text"
                  id="phonenumber"
                  v-model="form.phonenumber"
                  required
                />
              </div>
            </div>
            <div class="form-group">
              <textarea
                rows="9"
                cols="300"
                class="form-group__textarea"
                placeholder="Milyen segítségre volna szüksége?"
                id="message"
                v-model="form.message"
                required
              ></textarea>
            </div>
            <div v-if="!isSent" class="contact-form__flex-box d-flex">
              <div class="contact-form__flex-box__text-box">
                <p class="contact-form__flex-box__text-box text-color">
                  A Küldés gombra való kattintással automatikusan elfogadja az
                  Adatvédelmi Szabályzatot.
                </p>
              </div>
              <div class="contact-form__btn-box t-end">
                <button
                  class="page-btn contact-form__btn-box__btn text-color-w"
                  type="submit"
                >
                  Küldés
                  <NuxtImg
                    class="page-btn__img position-relative"
                    src="/img/btn-arrow.svg"
                    alt="Biztos Alkuszom"
                  />
                </button>
              </div>
            </div>
            <div v-if="isSent" class="confirmation-message">
              <p class="confirmation-message__p text-color-w text-center">
                Köszönjük az üzenetét, hamarosan felvesszük Önnel a kapcsolatot.
              </p>
            </div>
          </form>
        </div>
      </div>
      <div
        :class="[
          'footer-content__link-box',
          { 'footer-content__link-box-bg-special': isSpecialPage },
        ]"
        class="text-center"
      >
        <NuxtImg
          src="/img/footer/logo.svg"
          alt="Biztos Alkuszom"
          class="footer-content__link-box__img"
        />
        <div class="footer-content__link-box__links d-flex">
          <NuxtLink
            v-for="link in links"
            :key="link.path"
            :to="link.path"
            :class="[
              'footer-link',
              { 'footer-link-color-special': isSpecialPage },
            ]"
          >
            {{ link.name }}
          </NuxtLink>
        </div>
        <div class="footer-content__link-box__DigitalSeed bg-color-w">
          <NuxtLink
            class="footer-content__link-box__DigitalSeed__Nuxtlink text-transform-uppercase"
            to="/"
          >
            DIGITAL SEED STUDIO - 2024</NuxtLink
          >
        </div>
      </div>
    </div>
  </footer>
</template>
