<template>
    <header class="header">
        <div class="header-content d-flex">
            <div class="logo-box header-content__logo-box">
                <a href="/" class="header-content__logo-box__link">
                    <img src="/img/header/logo.svg" alt="Biztos Alkuszom" class="header-content__logo-box__link__img">
                </a>
            </div>
            <div class="nav-box header-content__nav-box">
                <nav class="menu">
                    <ul id="menu__list" class="menu__list d-flex">
                        <li v-for="link in links" :key="link.path" class="menu__list__li">
                            <NuxtLink :to="link.path"
                                :class="['menu__item text-color text-transform-uppercase', { 'menu__item--border-left': link.path === '/' }]">
                                <template v-if="link.imagePath">
                                    <img :src="link.imagePath" :alt="link.name">
                                </template>
                                <template v-else>
                                    {{ link.name }}
                                </template>
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="header-bottom d-flex">
            <div class="header-bottom__div">
                <h1 class="header-bottom__div__h1 text-color-w text-transform-uppercase">
                    ÁGOSTON GÁBOR -
                    <span class="header-bottom__div__span">Az Ön alkusza</span>
                </h1>
            </div>
            <div class="header-bottom__div header-bottom__div-linkbox">
                <a href="tel:+36302345866" class="header-bottom__div-linkbox__link text-color-w">
                    <img src="/img/header/mobile.svg" alt="Biztos Alkuszom"
                        class="header-bottom__div-linkbox__link__img position-relative">
                    06 30 234 5866
                </a>
                <a href="mailto:biztos@alkuszom.info" class="header-bottom__div-linkbox__link text-color-w">
                    <img src="/img/header/mail.svg" alt="Biztos Alkuszom"
                        class="header-bottom__div-linkbox__link__img header-bottom__div-linkbox__link__img--margin-left position-relative">
                    biztos@alkuszom.info
                </a>
            </div>
        </div>
    </header>
</template>

<script>
import { links } from '~/utils/js/links';


export default {
    data() {
        return {
            links,
        };
    },
};
</script>
