<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const specialPath = '/gepjarmu-biztositas'
const route = useRoute()

const isSpecialPage = computed(() => route.path === specialPath)

const links = [
  { name: 'Főoldal', path: '/' },
  { name: 'Partnerek', path: '/partnerek' },
  { name: 'Szolgáltatások', path: '/szolgaltatasok' },
  { name: 'Dokumentumok', path: '/dokumentumok' },
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

const sendEmail = () => console.log(form.value)
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
          class="footer-content__form__h5 text-transform-uppercase text-center"
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
                class="form-group__textarea"
                placeholder="Milyen segítségre volna szüksége?"
                id="message"
                v-model="form.message"
                required
              ></textarea>
            </div>
            <div class="contact-form__btn-box t-end">
              <button class="page-btn text-color-w" type="submit">
                Küldés
                <NuxtImg
                  class="page-btn__img position-relative"
                  src="/img/btn-arrow.svg"
                  alt="Biztos Alkuszom"
                />
              </button>
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
