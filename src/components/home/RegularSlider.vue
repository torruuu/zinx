<script setup lang="ts">
import NextArrow from '@/components/svg/NextArrow.vue'
import PrevArrow from '@/components/svg/PrevArrow.vue'
import { ref } from 'vue'
import { register } from 'swiper/element/bundle'
import { useTranslations } from '@/i18n/utils'
import type { RegularMovie, ui } from '@/types/index'

register()

const props = defineProps<{
  lang: keyof typeof ui
  title: string
  media: RegularMovie[]
}>()

const isBegin = ref(false)
const isEnd = ref(false)

const imageApi = import.meta.env.PUBLIC_API_IMAGES
const t = useTranslations(props.lang)

const checkButtons = (swiper: CustomEvent) => {
  isBegin.value = swiper.detail[0].isBeginning
  isEnd.value = swiper.detail[0].isEnd
}
</script>

<template>
  <article class="regular-slider">
    <h2 class="regular-slider__title">{{ title }}</h2>
    <div class="regular-slider__slider">
      <div class="regular-slider__arrow-box regular-slider__arrow-box--prev">
        <button class="regular-slider__prev-button" :class="{ 'hide-button': isBegin }">
          <PrevArrow />
        </button>
      </div>
      <swiper-container
        class="regular-slider__swiper"
        navigation-next-el=".regular-slider__next-button"
        navigation-prev-el=".regular-slider__prev-button"
        @swiperbeforeinit="checkButtons"
        @swiperprogress="checkButtons"
        :spaceBetween="16"
        :slidesPerView="'auto'"
        :a11y="{
          prevSlideMessage: t('slider.prev'),
          nextSlideMessage: t('slider.next'),
        }"
      >
        <swiper-slide v-for="movie in media" class="regular-slider__slide">
          <a
            class="regular-slider__link"
            :href="`/${lang}/media=${movie.id}-${movie.media_type}`"
          >
            <p class="regular-slider__slide-title">{{ movie.title || movie.name }}</p>
            <img
              class="regular-slider__image"
              :src="`${imageApi}w500${movie.backdrop_path}`"
              :alt="movie.title || movie.name"
            />
          </a>
        </swiper-slide>
      </swiper-container>
      <div class="regular-slider__arrow-box">
        <button class="regular-slider__next-button" :class="{ 'hide-button': isEnd }">
          <NextArrow />
        </button>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.regular-slider {
  padding: 3rem 0;
  width: 100%;
  @include responsive() {
    padding: map-get($map: $sizes, $key: s-general-padding-mobile);
  }
  &__title {
    padding: map-get($map: $sizes, $key: s-general-padding);
    font-family: map-get($map: $fonts, $key: f-font-light);
    @include responsive() {
      font-family: map-get($map: $fonts, $key: f-font-extraLight);
      padding: 0;
    }
  }
  &__slider {
    width: 100%;
    margin: map-get($map: $sizes, $key: s-slider-margin);
    display: flex;
  }
  &__swiper {
    min-width: 0;
  }
  &__slide {
    position: relative;
    aspect-ratio: 500 / 281;
    width: 20rem;
    border: 0.1rem solid map-get($map: $colors, $key: c-black);
    border-radius: map-get($map: $sizes, $key: s-slide-radius);
    @include responsive(40rem) {
      width: 16.5rem;
    }
    &:hover {
      border: 0.1rem solid map-get($map: $colors, $key: c-dark-gray);
    }
    &::after {
      content: '';
      border-radius: map-get($map: $sizes, $key: s-slide-radius);
      pointer-events: none;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 50%;
      background-image: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
      z-index: 1;
    }
  }
  &__link {
    @include flex();
  }
  &__slide-title {
    pointer-events: none;
    position: absolute;
    bottom: 10%;
    left: 5%;
    z-index: 2;
  }
  &__image {
    width: 100%;
    border-radius: map-get($map: $sizes, $key: s-slide-radius);
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
  }
  &__arrow-box {
    min-width: map-get($map: $sizes, $key: s-width-arrows);
    max-width: map-get($map: $sizes, $key: s-width-arrows);
    padding: 0 0.5rem;
    @include flex($justify-content: flex-start);
    &--prev {
      @include flex($justify-content: flex-end);
    }
    @include responsive() {
      display: none;
    }
  }
  &__next-button,
  &__prev-button {
    width: 2rem;
    height: 2rem;
    transition: all 50ms linear;
    &:hover {
      width: 2.3rem;
      height: 2.3rem;
    }
  }
  .hide-button {
    display: none;
  }
}
</style>
