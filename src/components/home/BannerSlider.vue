<script setup lang="ts">
import { ref } from 'vue'
import NextArrow from '@/components/svg/NextArrow.vue'
import PrevArrow from '@/components/svg/PrevArrow.vue'
import { useTranslations } from '@/i18n/utils'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, A11y, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import type { RegularMovie } from '@/types/RegularMovie'
import type { ui } from '@/i18n/ui'

const props = defineProps<{
  lang: keyof typeof ui
  imageApi: string
  movies: RegularMovie[]
}>()

const modules = ref([Navigation, A11y, Autoplay])
const t = useTranslations(props.lang)
const swiper = ref()

const breakpoints = {
  300: { slidesPerView: 2, spaceBetween: 20 },
  600: { slidesPerView: 3, spaceBetween: 30 },
  800: { slidesPerView: 4, spaceBetween: 30 },
  1024: { slidesPerView: 5, spaceBetween: 30 },
  1200: { slidesPerView: 6, spaceBetween: 30 },
  1500: { slidesPerView: 7, spaceBetween: 40 },
  1800: { slidesPerView: 8, spaceBetween: 40 },
}
</script>
<template>
  <section class="swiper-container">
    <div class="swiper-container__arrow-box swiper-container__arrow-box--prev">
      <button class="swiper-container__button" @click="() => swiper.slidePrev()">
        <PrevArrow />
      </button>
    </div>
    <Swiper
      class="swiper-container__swiper"
      @swiper="(it) => (swiper = it)"
      :a11y="{ prevSlideMessage: t('slider.prev'), nextSlideMessage: t('slider.next') }"
      :slidesPerView="2"
      :spaceBetween="30"
      :speed="200"
      :loop="true"
      :autoplay="{ delay: 5000 }"
      :modules="modules"
      :breakpoints="breakpoints"
    >
      <SwiperSlide v-for="movie in movies" class="swiper-container__slider">
        <a class="swiper-container__link" href="#">
          <img
            class="swiper-container__image"
            :src="`${imageApi}original${movie.poster_path}`"
            :alt="movie.title"
          />
        </a>
      </SwiperSlide>
    </Swiper>
    <div class="swiper-container__arrow-box">
      <button class="swiper-container__button" @click="() => swiper.slideNext()">
        <NextArrow />
      </button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  @include flex();
  &__swiper {
    width: 100%;
  }
  &__slider {
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
    width: map-get($map: $sizes, $key: s-width-arrows);
    padding: 0 0.5rem;
    @include flex($justify-content: flex-start);
    &--prev {
      @include flex($justify-content: flex-end);
    }
  }
  &__button {
    width: 2rem;
    height: 2rem;
    transition: all 50ms linear;
    &:hover {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
}
</style>
