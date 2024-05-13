<script setup lang="ts">
import { ref, computed } from 'vue'

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
      <div class="slider-content position-relative">
        <NuxtImg
          class="slider-content__img"
          src="/img/slider/slider.webp"
          alt="Biztos Alkuszom"
          format="webp"
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
              class="partners-content__img-box__div__img"
              src="/img/partners/partners.svg"
              alt="Biztos Alkuszom"
            />
          </div>

          <div class="partners-content__img-box__div text-center">
            <NuxtImg
              class="partners-content__img-box__div__img"
              src="/img/partners/partners2.svg"
              alt="Biztos Alkuszom"
            />
          </div>

          <div class="partners-content__img-box__div text-center">
            <NuxtImg
              class="partners-content__img-box__div__img"
              src="/img/partners/partners3.svg"
              alt="Biztos Alkuszom"
            />
          </div>

          <div class="partners-content__img-box__div text-center">
            <NuxtImg
              class="partners-content__img-box__div__img"
              src="/img/partners/partners4.svg"
              alt="Biztos Alkuszom"
            />
          </div>

          <div class="partners-content__img-box__div text-center">
            <NuxtImg
              class="partners-content__img-box__div__img"
              src="/img/partners/partners5.svg"
              alt="Biztos Alkuszom"
            />
          </div>

          <div class="partners-content__img-box__div text-center">
            <NuxtImg
              class="partners-content__img-box__div__img"
              src="/img/partners/partners6.svg"
              alt="Biztos Alkuszom"
            />
          </div>

          <div class="partners-content__img-box__div text-center">
            <NuxtImg
              class="partners-content__img-box__div__img"
              src="/img/partners/partners7.svg"
              alt="Biztos Alkuszom"
            />
          </div>
        </div>

        <div class="partners-content__img-box grid-7">
          <div class="partners-content__img-box__div text-center">
            <NuxtImg
              class="partners-content__img-box__div__img"
              src="/img/partners/partners8.svg"
              alt="Biztos Alkuszom"
            />
          </div>

          <div class="partners-content__img-box__div text-center">
            <NuxtImg
              class="partners-content__img-box__div__img"
              src="/img/partners/partners9.svg"
              alt="Biztos Alkuszom"
            />
          </div>

          <div class="partners-content__img-box__div text-center">
            <NuxtImg
              class="partners-content__img-box__div__img"
              src="/img/partners/partners10.svg"
              alt="Biztos Alkuszom"
            />
          </div>

          <div class="partners-content__img-box__div text-center">
            <NuxtImg
              class="partners-content__img-box__div__img"
              src="/img/partners/partners11.svg"
              alt="Biztos Alkuszom"
            />
          </div>

          <div class="partners-content__img-box__div text-center">
            <NuxtImg
              class="partners-content__img-box__div__img"
              src="/img/partners/partners12.svg"
              alt="Biztos Alkuszom"
            />
          </div>

          <div class="partners-content__img-box__div text-center">
            <NuxtImg
              class="partners-content__img-box__div__img"
              src="/img/partners/partners13.svg"
              alt="Biztos Alkuszom"
            />
          </div>

          <div class="partners-content__img-box__div text-center">
            <NuxtImg
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
                  class="page-link__img position-relative"
                  src="/img/partners/right-arrow.svg"
                  alt="Biztos Alkuszom"
                />
              </NuxtLink>
            </div>
          </div>

          <div class="service-box bg-color-w position-relative">
            <NuxtImg
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
                  class="page-link__img position-relative"
                  src="/img/partners/right-arrow.svg"
                  alt="Biztos Alkuszom"
                />
              </NuxtLink>
            </div>
          </div>

          <div class="service-box bg-color-w position-relative">
            <NuxtImg
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
              class="service-box__img"
              src="/img/services/rendezveny_biztositas.svg"
              alt="Biztos Alkuszom"
            />
            <div class="service-box__text">
              <h3
                class="service-box__title text-transform-uppercase text-color text-center"
              >
                RENDEZVÉNYSZOLGÁLAT
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
                  class="page-link__img position-relative"
                  src="/img/partners/right-arrow.svg"
                  alt="Biztos Alkuszom"
                />
              </NuxtLink>
            </div>
          </div>

          <div class="service-box bg-color-w position-relative">
            <NuxtImg
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
                  class="page-link__img position-relative"
                  src="/img/partners/right-arrow.svg"
                  alt="Biztos Alkuszom"
                />
              </NuxtLink>
            </div>
          </div>

          <div class="service-box bg-color-w position-relative">
            <NuxtImg
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
          rel="preload"
          as="image"
          class="service-bottom__img"
          src="/img/partners/bottom.webp"
          alt="Biztos Alkuszom"
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
          <div class="blog-box">
            <NuxtImg
              class="blog-box__img"
              src="/img/blog/blog.jpg"
              alt="Biztos Alkuszom"
            />
            <div class="blog-box__text position-relative">
              <h3 class="blog-box__text__h3 text-transform-uppercase">
                Az Ön Teljes Útmutatója a Lakásbiztosítás Világában
              </h3>
              <p class="blog-box__text__p">
                Fedezze fel, hogyan válassza ki a legmegfelelőbb
                lakásbiztosítást életstílusához és igényeihez, miközben
                megismeri a fedezetek és kedvezmények titkait.
              </p>
              <div class="blog-box__link-box position-absolute">
                <NuxtLink class="blog-box__link-box__Nuxtlink" to="/"
                  >Elolvasom a cikket</NuxtLink
                >
              </div>
            </div>
          </div>
          <div class="blog-box">
            <NuxtImg
              class="blog-box__img"
              src="/img/blog/blog2.jpg"
              alt="Biztos Alkuszom"
            />
            <div class="blog-box__text position-relative">
              <h3 class="blog-box__text__h3 text-transform-uppercase">
                Vállalkozók Biztosítási Kalauza: Hogyan Védje Meg Cégét
              </h3>
              <p class="blog-box__text__p">
                Fedezze fel, hogyan válassza ki a legmegfelelőbb
                lakásbiztosítást életstílusához és igényeihez, miközben
                megismeri a fedezetek és kedvezmények titkait.
              </p>
              <div class="blog-box__link-box position-absolute">
                <NuxtLink class="blog-box__link-box__Nuxtlink" to="/"
                  >Elolvasom a cikket</NuxtLink
                >
              </div>
            </div>
          </div>
          <div class="blog-box">
            <NuxtImg
              class="blog-box__img"
              src="/img/blog/blog3.jpg"
              alt="Biztos Alkuszom"
            />
            <div class="blog-box__text position-relative">
              <h3 class="blog-box__text__h3 text-transform-uppercase">
                Utazási Biztosítás: Miért Nélkülözhetetlen Minden Külföldi Út
                Során
              </h3>
              <p class="blog-box__text__p">
                Ismerje meg az utazási biztosítás jelentőségét
              </p>
              <div class="blog-box__link-box position-absolute">
                <NuxtLink class="blog-box__link-box__Nuxtlink" to="/"
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
