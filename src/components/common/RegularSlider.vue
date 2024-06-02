<script setup lang="ts">
import NextArrow from '@/components/svg/NextArrow.vue'
import PrevArrow from '@/components/svg/PrevArrow.vue'
import { getCurrentInstance, ref } from 'vue'
import { register } from 'swiper/element/bundle'
import { useTranslations } from '@/i18n/utils'
import type { RegularMedia, ui } from '@/types/index'
import MediaCard from './MediaCard.vue'

register()

const props = defineProps<{
  lang: keyof typeof ui
  title: string
  media: RegularMedia[]
  type?: 'movie' | 'tv'
}>()

const instance = getCurrentInstance()
const uuid = ref(instance?.uid)
const isBegin = ref(true)
const isEnd = ref(false)

const t = useTranslations(props.lang)

const checkButtons = (swiper: CustomEvent) => {
  if (window.innerWidth <= 1024) return
  isBegin.value = swiper.detail[0].isBeginning
  isEnd.value = swiper.detail[0].isEnd
}
</script>

<template>
  <article class="regular-slider">
    <h2 class="regular-slider__title">{{ title }}</h2>
    <div class="regular-slider__slider">
      <div class="regular-slider__arrow-box regular-slider__arrow-box--prev">
        <button
          class="regular-slider__prev-button"
          :class="{ 'hide-button': isBegin, [`p-button-${uuid}`]: true }"
        >
          <PrevArrow />
        </button>
      </div>
      <swiper-container
        class="regular-slider__swiper"
        :navigation-prev-el="`.p-button-${uuid}`"
        :navigation-next-el="`.n-button-${uuid}`"
        @swiperbeforeinit="checkButtons"
        @swipertoedge="checkButtons"
        @swiperfromedge="checkButtons"
        :spaceBetween="16"
        :slidesPerView="'auto'"
        :a11y="{
          prevSlideMessage: t('slider.prev'),
          nextSlideMessage: t('slider.next'),
        }"
      >
        <swiper-slide v-for="movie in media" class="regular-slider__slide">
          <MediaCard :lang="lang" :media="movie" :type="type || movie.media_type" />
        </swiper-slide>
      </swiper-container>
      <div class="regular-slider__arrow-box">
        <button
          class="regular-slider__next-button"
          :class="{ 'hide-button': isEnd, [`n-button-${uuid}`]: true }"
        >
          <NextArrow />
        </button>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.regular-slider {
  padding: 2rem 0;
  width: 100%;
  @include responsive() {
    padding: map-get($map: $sizes, $key: s-general-padding-mobile);
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
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
    width: 22.5rem;
    @include responsive(42.5rem) {
      width: 17.5rem;
    }
    @include responsive(22.5rem) {
      width: 12.5rem;
    }
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
