<script setup lang="ts">
import { ref, onMounted } from 'vue'

import he from 'he'

interface Post {
  id: number
  title: string
  seo_title: string
  body: string
  image: string
}

const itemsPost = ref<Post[] | null>(null)
const error = ref<string | null>(null)
const loading = ref(false)

async function fetchPosts() {
  loading.value = true
  try {
    const response = await fetch('https://alkuszom.info/api/public/json-posts')
    if (!response.ok) throw new Error('Failed to fetch posts')
    const data = await response.json()
    itemsPost.value = data
  } catch (e) {
    error.value = (e as Error).message
    console.error('Error fetching posts:', (e as Error).message)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchPosts()
})

function getShortBody(body: string) {
  const decodedBody = he.decode(body)
  if (decodedBody.length > 100) {
    return decodedBody.substring(0, 100) + '...'
  }
  return decodedBody
}

const sliderElem = ref([
  {
    title: 'Biztosítás, ami Mozgásban Tart',
    description:
      'Biztosítási megoldásaink folyamatosan alkalmazkodnak az életed változásaihoz. Legyen szó karrierváltásról, családalapításról vagy akár új hobbik felfedezéséről, mi mindig ott vagyunk, hogy támogassunk és védelmezzünk.',
    button: 'Tovább',
  },
  {
    title: 'Biztosítás, ami Mozgásban Tart',
    description:
      'Biztosítási megoldásaink folyamatosan alkalmazkodnak az életed változásaihoz. Legyen szó karrierváltásról, családalapításról vagy akár új hobbik felfedezéséről, mi mindig ott vagyunk, hogy támogassunk és védelmezzünk.',
    button: 'Tovább',
  },
  {
    title: 'Biztosítás, ami Mozgásban Tart',
    description:
      'Biztosítási megoldásaink folyamatosan alkalmazkodnak az életed változásaihoz. Legyen szó karrierváltásról, családalapításról vagy akár új hobbik felfedezéséről, mi mindig ott vagyunk, hogy támogassunk és védelmezzünk.',
    button: 'Tovább',
  },
])

const currentSlide = ref(0)

const nextSlide = () => {
  if (currentSlide.value < sliderElem.value.length - 1) {
    currentSlide.value++
  } else {
    currentSlide.value = 0
  }
}

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  } else {
    currentSlide.value = sliderElem.value.length - 1
  }
}
</script>
<template>
  <div>
    <section>
      <!-- width="1920" height="808"
      sizes="100vw" -->
      <div class="slider-content position-relative">
        <NuxtImg
          class="slider-content__img"
          src="/img/slider/slider.webp"
          alt="Biztos Alkuszom"
          format="webp"
          height="100%"
        />
        <div class="slider-content__ab-box position-absolute">
          <div class="slider-content__carousel-content text-center">
            <div class="carousel position-relative">
              <div
                class="carousel-slide d-flex"
                :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
              >
                <div
                  class="carousel-item"
                  v-for="(item, index) in sliderElem"
                  :key="index"
                >
                  <div class="carousel-item__padding-box">
                    <h1
                      class="carousel-item__h1 text-transform-uppercase text-color f-700 t-left"
                    >
                      {{ item.title }}
                    </h1>
                    <p class="carousel-item__p text-color f-400">
                      {{ item.description }}
                    </p>
                  </div>
                  <NuxtLink
                    to="szolgaltatasok"
                    class="carousel-item__NuxtLink text-color bg-color-w f-600"
                    >{{ item.button }}
                    <NuxtImg
                      loading="lazy"
                      height="100%"
                      class="carousel-item__NuxtLink__img position-relative"
                      src="/img/slider/about-r.svg"
                      alt="Biztos Alkuszom"
                    />
                  </NuxtLink>
                  <div class="carousel__btn-content position-relative d-flex">
                    <button
                      class="carousel__btn-content__btn cursor"
                      @click="prevSlide"
                    >
                      <NuxtImg
                        loading="lazy"
                        height="100%"
                        class="carousel__btn-content__btn__img"
                        src="/img/slider/arrow-l.svg"
                        alt="Biztos Alkuszom"
                      />
                    </button>
                    <button
                      class="carousel__btn-content__btn cursor"
                      @click="nextSlide"
                    >
                      <NuxtImg
                        loading="lazy"
                        height="100%"
                        class="carousel__btn-content__btn__img"
                        src="/img/slider/arrow-r.svg"
                        alt="Biztos Alkuszom"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="partners-content">
        <div class="page__header">
          <h2 class="page__header__h2 text-color-w text-transform-uppercase">
            Partnerek
          </h2>
        </div>

        <div class="partners-content__img-box grid-7">
          <div class="partners-content__img-box__div text-center">
            <NuxtImg
              loading="lazy"
              height="100%"
              class="partners-content__img-box__div__img"
              src="/img/partners/partners.svg"
              alt="Biztos Alkuszom"
            />
          </div>

          <div class="partners-content__img-box__div text-center">
            <NuxtImg
              loading="lazy"
              height="100%"
              class="partners-content__img-box__div__img"
              src="/img/partners/partners2.svg"
              alt="Biztos Alkuszom"
            />
          </div>

          <div class="partners-content__img-box__div text-center">
            <NuxtImg
              loading="lazy"
              height="100%"
              class="partners-content__img-box__div__img"
              src="/img/partners/partners3.svg"
              alt="Biztos Alkuszom"
            />
          </div>

          <div class="partners-content__img-box__div text-center">
            <NuxtImg
              loading="lazy"
              height="100%"
              class="partners-content__img-box__div__img"
              src="/img/partners/partners4.svg"
              alt="Biztos Alkuszom"
            />
          </div>

          <div class="partners-content__img-box__div text-center">
            <NuxtImg
              loading="lazy"
              height="100%"
              class="partners-content__img-box__div__img"
              src="/img/partners/partners5.svg"
              alt="Biztos Alkuszom"
            />
          </div>

          <div class="partners-content__img-box__div text-center">
            <NuxtImg
              loading="lazy"
              height="100%"
              class="partners-content__img-box__div__img"
              src="/img/partners/partners6.svg"
              alt="Biztos Alkuszom"
            />
          </div>

          <div class="partners-content__img-box__div text-center">
            <NuxtImg
              loading="lazy"
              height="100%"
              class="partners-content__img-box__div__img"
              src="/img/partners/partners7.svg"
              alt="Biztos Alkuszom"
            />
          </div>
        </div>

        <div class="partners-content__img-box grid-7">
          <div class="partners-content__img-box__div text-center">
            <NuxtImg
              loading="lazy"
              height="100%"
              class="partners-content__img-box__div__img"
              src="/img/partners/partners8.svg"
              alt="Biztos Alkuszom"
            />
          </div>

          <div class="partners-content__img-box__div text-center">
            <NuxtImg
              loading="lazy"
              height="100%"
              class="partners-content__img-box__div__img"
              src="/img/partners/partners9.svg"
              alt="Biztos Alkuszom"
            />
          </div>

          <div class="partners-content__img-box__div text-center">
            <NuxtImg
              loading="lazy"
              height="100%"
              class="partners-content__img-box__div__img"
              src="/img/partners/partners10.svg"
              alt="Biztos Alkuszom"
            />
          </div>

          <div class="partners-content__img-box__div text-center">
            <NuxtImg
              loading="lazy"
              height="100%"
              class="partners-content__img-box__div__img"
              src="/img/partners/partners11.svg"
              alt="Biztos Alkuszom"
            />
          </div>

          <div class="partners-content__img-box__div text-center">
            <NuxtImg
              loading="lazy"
              height="100%"
              class="partners-content__img-box__div__img"
              src="/img/partners/partners12.svg"
              alt="Biztos Alkuszom"
            />
          </div>

          <div class="partners-content__img-box__div text-center">
            <NuxtImg
              loading="lazy"
              height="100%"
              class="partners-content__img-box__div__img"
              src="/img/partners/partners13.svg"
              alt="Biztos Alkuszom"
            />
          </div>

          <div class="partners-content__img-box__div text-center">
            <NuxtImg
              loading="lazy"
              height="100%"
              class="partners-content__img-box__div__img"
              src="/img/partners/partners14.svg"
              alt="Biztos Alkuszom"
            />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="services-content position-relative">
        <div class="page__header page__header--right">
          <h3 class="page__header__h3 text-color-w text-transform-uppercase">
            SZOLGÁLTATÁSOK
          </h3>
        </div>

        <div class="servive-grid servive-grid--margin-bottom grid-3">
          <div class="service-box bg-color-w position-relative">
            <NuxtImg
              loading="lazy"
              height="100%"
              class="service-box__img"
              src="/img/services/gepjarmubiztositas.svg"
              alt="Biztos Alkuszom"
            />
            <div class="service-box__text">
              <h3
                class="service-box__title text-transform-uppercase text-color text-center"
              >
                Gépjármű biztosítás
              </h3>
              <p class="service-box__description text-color">
                Nyugodt utazást és védelmet nyújt minden kilométeren,
                balesetektől kezdve a váratlan meghibásodásokig.
              </p>
            </div>
            <div class="service-box__link-box position-absolute">
              <NuxtLink
                to="gepjarmu-biztositas"
                class="page-link text-color-w f-600"
                >Tovább
                <NuxtImg
                  loading="lazy"
                  height="100%"
                  class="page-link__img position-relative"
                  src="/img/partners/right-arrow.svg"
                  alt="Biztos Alkuszom"
                />
              </NuxtLink>
            </div>
          </div>

          <div class="service-box bg-color-w position-relative">
            <NuxtImg
              loading="lazy"
              height="100%"
              class="service-box__img"
              src="/img/services/utazasbiztositas.svg"
              alt="Biztos Alkuszom"
            />
            <div class="service-box__text">
              <h3
                class="service-box__title text-transform-uppercase text-color text-center"
              >
                UTASbiztosítás
              </h3>
              <p class="service-box__description text-color">
                A gondtalan kalandok záloga, amely biztonságot nyújt a világ
                bármely pontján, legyen szó váratlan eseményekről vagy
                egészségügyi sürgősségekről.
              </p>
            </div>
            <div class="service-box__link-box position-absolute">
              <NuxtLink to="utasbiztositas" class="page-link text-color-w f-600"
                >Tovább
                <NuxtImg
                  loading="lazy"
                  height="100%"
                  class="page-link__img position-relative"
                  src="/img/partners/right-arrow.svg"
                  alt="Biztos Alkuszom"
                />
              </NuxtLink>
            </div>
          </div>

          <div class="service-box bg-color-w position-relative">
            <NuxtImg
              loading="lazy"
              height="100%"
              class="service-box__img"
              src="/img/services/tanulobiztositas.svg"
              alt="Biztos Alkuszom"
            />
            <div class="service-box__text">
              <h3
                class="service-box__title text-transform-uppercase text-color text-center"
              >
                TANULÓbiztosítás
              </h3>
              <p class="service-box__description text-color">
                A tanulóbiztosítás biztos háttér a diákok számára, hogy
                nyugodtan összpontosíthassanak tanulmányaikra, miközben
                védelemben részesülnek az élet váratlan eseményei ellen.
              </p>
            </div>
            <div class="service-box__link-box position-absolute">
              <NuxtLink
                to="tanulobiztositas"
                class="page-link text-color-w f-600"
                >Tovább
                <NuxtImg
                  loading="lazy"
                  height="100%"
                  class="page-link__img position-relative"
                  src="/img/partners/right-arrow.svg"
                  alt="Biztos Alkuszom"
                />
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="servive-grid grid-3">
          <div class="service-box bg-color-w position-relative">
            <NuxtImg
              loading="lazy"
              height="100%"
              class="service-box__img"
              src="/img/services/rendezveny_biztositas.svg"
              alt="Biztos Alkuszom"
            />
            <div class="service-box__text">
              <h3
                class="service-box__title text-transform-uppercase text-color text-center"
              >
                Rendezvény biztosítás
              </h3>
              <p class="service-box__description text-color">
                Biztosításaink magukban foglalják a felelősségbiztosítást, a
                rendezvény helyszínének védelmét, valamint az egyedi igényekhez
                igazodó kockázatkezelést, biztosítva ezzel a rendezvény
                zavartalan lebonyolítását..
              </p>
            </div>
            <div class="service-box__link-box position-absolute">
              <NuxtLink
                to="rendezvenyszolgalat"
                class="page-link text-color-w f-600"
                >Tovább
                <NuxtImg
                  loading="lazy"
                  height="100%"
                  class="page-link__img position-relative"
                  src="/img/partners/right-arrow.svg"
                  alt="Biztos Alkuszom"
                />
              </NuxtLink>
            </div>
          </div>

          <div class="service-box bg-color-w position-relative">
            <NuxtImg
              loading="lazy"
              height="100%"
              class="service-box__img"
              src="/img/services/karbejelentes.svg"
              alt="Biztos Alkuszom"
            />
            <div class="service-box__text">
              <h3
                class="service-box__title text-transform-uppercase text-color text-center"
              >
                Kárbejelentés
              </h3>
              <p class="service-box__description text-color">
                A kárbejelentési folyamatunk során a biztosítási alkusz
                szakértői segítséget és támogatást nyújtanak az ügyfeleknek,
                hogy a kárbejelentés gyorsan és zökkenőmentesen történjen.
              </p>
            </div>
            <div class="service-box__link-box position-absolute">
              <NuxtLink to="karbejentes" class="page-link text-color-w f-600"
                >Tovább
                <NuxtImg
                  loading="lazy"
                  height="100%"
                  class="page-link__img position-relative"
                  src="/img/partners/right-arrow.svg"
                  alt="Biztos Alkuszom"
                />
              </NuxtLink>
            </div>
          </div>

          <div class="service-box bg-color-w position-relative">
            <NuxtImg
              loading="lazy"
              height="100%"
              class="service-box__img"
              src="/img/services/szemelyes_tanacsadas.svg"
              alt="Biztos Alkuszom"
            />
            <div class="service-box__text">
              <h3
                class="service-box__title text-transform-uppercase text-color text-center"
              >
                Személyes tanácsadás
              </h3>
              <p class="service-box__description text-color">
                személyre szabott tanácsadásunkkal biztosítjuk, hogy minden
                ügyfél megkapja az egyéni igényeinek megfelelő biztosítási
                tanácsokat és megoldásokat, biztosítva ezzel az optimális
                védelmet és nyugalmat.
              </p>
            </div>
            <div class="service-box__link-box position-absolute">
              <NuxtLink
                to="szemelyes-tanacsadas"
                class="page-link text-color-w f-600"
                >Tovább
                <NuxtImg
                  loading="lazy"
                  height="100%"
                  class="page-link__img position-relative"
                  src="/img/partners/right-arrow.svg"
                  alt="Biztos Alkuszom"
                />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <div class="service-bottom position-relative">
        <NuxtImg
          loading="lazy"
          class="service-bottom__img"
          src="/img/partners/bottom.webp"
          alt="Biztos Alkuszom"
          height="100%"
        />
        <div class="service-bottom__box position-absolute bg-color-w">
          <h4 class="service-bottom__box__title linear-font">
            "Nálunk a biztosítás <br />
            találkozik a bizalommal."
          </h4>
        </div>
      </div>
    </section>
    <section>
      <div class="blog-content">
        <div class="page__header page__header--margin-top">
          <h2 class="page__header__h2 text-color-w text-transform-uppercase">
            Blog
          </h2>
        </div>
        <div class="blog-grid grid-3">
          <div v-for="post in itemsPost" :key="post.seo_title" class="blog-box">
            <NuxtImg
              loading="lazy"
              class="blog-box__img"
              height="100%"
              :src="`https://alkuszom.info/api/public/storage/${post.image}`"
              alt="{{ post.title }}"
            />
            <div class="blog-box__text position-relative">
              <h3 class="blog-box__text__h3 text-transform-uppercase">
                {{ post.title }}
              </h3>

              <p class="blog-box__text__p" v-html="getShortBody(post.body)" />

              <div class="blog-box__link-box position-absolute">
                <NuxtLink
                  class="blog-box__link-box__Nuxtlink"
                  :to="`/posts/${post.seo_title}`"
                  >Elolvasom a cikket</NuxtLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
