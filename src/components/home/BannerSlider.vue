<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import NextArrow from '@/components/svg/NextArrow.vue'
import PrevArrow from '@/components/svg/PrevArrow.vue'
import { useTranslations } from '@/i18n/utils'
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { breakpointsBig, breakpointsSmall } from '@/data/sliderBreakpoints'
import type { RegularMedia, ui } from '@/types/index'

register()
const imageApi = import.meta.env.PUBLIC_API_IMAGES

const props = defineProps<{
  lang: keyof typeof ui
  media: RegularMedia[]
}>()

const emit = defineEmits<{
  currentMedia: [movie: RegularMedia]
}>()

const t = useTranslations(props.lang)
const screenHeight = ref(window.innerHeight)
const breakpoints = ref()

const updateScreenHeight = () => (screenHeight.value = window.innerHeight)

watch(
  screenHeight,
  (newValue) => {
    breakpoints.value = newValue < 660 ? breakpointsSmall : breakpointsBig
  },
  { immediate: true },
)

const checkButtons = (swiper: CustomEvent) => {
  const eventDetail = swiper.detail[0]
  const currentIndex = eventDetail.realIndex
  emit('currentMedia', props.media[currentIndex])
}

onMounted(() => {
  window.addEventListener('resize', updateScreenHeight)
})
onUnmounted(() => window.removeEventListener('resize', updateScreenHeight))
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
        :key="breakpoints"
        :speed="200"
        :breakpoints="breakpoints"
        :loop="true"
        :a11y="{
          prevSlideMessage: t('slider.prev'),
          nextSlideMessage: t('slider.next'),
        }"
      >
        <swiper-slide v-for="movie in media" class="swiper-container__slide">
          <a
            class="swiper-container__link"
            :href="`/${lang}/media=${movie.id}-${movie.media_type}`"
          >
            <img
              class="swiper-container__image"
              :src="`${imageApi}original${movie.poster_path}`"
              :alt="movie.title || movie.name"
              :style="{ 'view-transition-name': `poster-${movie.id}` }"
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
    display: grid;
    grid-template-columns: max-content auto max-content;
    @include responsive() {
      grid-template-columns: 1fr;
    }
  }
  &__swiper {
    min-width: 0;
  }
  &__slide {
    width: max-content;
    object-fit: cover;
  }
  &__link {
    aspect-ratio: 2 / 3;
  }
  &__image {
    aspect-ratio: 2 / 3;
    border-radius: map-get($map: $sizes, $key: s-slide-radius);
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
