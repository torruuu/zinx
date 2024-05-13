<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import NextArrow from '@/components/svg/NextArrow.vue'
import PrevArrow from '@/components/svg/PrevArrow.vue'
import { useTranslations } from '@/i18n/utils'
import type { RegularMovie, ui } from '@/types/index'

register()

const props = defineProps<{
  lang: keyof typeof ui
  imageApi: string
  movies: RegularMovie[]
}>()

const emit = defineEmits<{
  currentMovie: [movie: RegularMovie]
}>()

const t = useTranslations(props.lang)

const breakpoints = {
  300: { slidesPerView: 2, spaceBetween: 20 },
  600: { slidesPerView: 3, spaceBetween: 30 },
  800: { slidesPerView: 4, spaceBetween: 30 },
  1024: { slidesPerView: 5, spaceBetween: 30 },
  1200: { slidesPerView: 6, spaceBetween: 30 },
  1500: { slidesPerView: 7, spaceBetween: 40 },
  1800: { slidesPerView: 8, spaceBetween: 40 },
}

const checkButtons = (swiper: CustomEvent) => {
  const eventDetail = swiper.detail[0]
  const currentIndex = eventDetail.realIndex
  emit('currentMovie', props.movies[currentIndex])
}
</script>
<template>
  <section class="swiper-container">
    <h2 class="swiper-container__title">{{ t('trend.title') }}</h2>
    <div class="swiper-container__slider">
      <div class="swiper-container__arrow-box swiper-container__arrow-box--prev">
        <button class="swiper-container__prev-button">
          <PrevArrow />
        </button>
      </div>
      <swiper-container
        class="swiper-container__swiper"
        navigation-next-el=".swiper-container__next-button"
        navigation-prev-el=".swiper-container__prev-button"
        @swiperbeforeinit="checkButtons"
        @swiperslidechange="checkButtons"
        :space-between="30"
        :speed="200"
        :breakpoints="breakpoints"
        :loop="true"
        :a11y="{
          prevSlideMessage: t('slider.prev'),
          nextSlideMessage: t('slider.next'),
        }"
      >
        <swiper-slide v-for="movie in movies" class="swiper-container__slide">
          <a class="swiper-container__link" href="#">
            <img
              class="swiper-container__image"
              :src="`${imageApi}original${movie.poster_path}`"
              :alt="movie.title || movie.name"
            />
          </a>
        </swiper-slide>
      </swiper-container>
      <div class="swiper-container__arrow-box">
        <button class="swiper-container__next-button">
          <NextArrow />
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.swiper-container {
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
    @include flex();
  }
  &__swiper {
    min-width: 0;
  }
  &__slide {
    width: max-content;
    object-fit: cover;
  }
  &__link {
    aspect-ratio: 9 / 14;
  }
  &__image {
    aspect-ratio: 9 / 14;
    border-radius: 0.25rem;
    height: 100%;
    width: 100%;
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
}
</style>
