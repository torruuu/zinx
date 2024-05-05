<script setup lang="ts">
import { ref } from 'vue'
import NextArrow from '@/components/svg/NextArrow.vue'
import PrevArrow from '@/components/svg/PrevArrow.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import type { RegularMovie } from '@/types/RegularMovie'

const modules = ref([Pagination, Navigation, A11y])
const swiper = ref()

defineProps<{
  imageApi: string
  movies: RegularMovie[]
}>()
</script>
<template>
  <section class="swiper-container">
    <div class="swiper-container__arrow">
      <button class="swiper-container__button-next" @click="() => swiper.slidePrev()">
        <PrevArrow />
      </button>
    </div>
    <Swiper
      class="swiper-container__swiper"
      @swiper="(it) => (swiper = it)"
      :a11y="{ prevSlideMessage: 'Previous slide', nextSlideMessage: 'Next slide' }"
      :slidesPerView="'auto'"
      :spaceBetween="30"
      :speed="500"
      :pagination="{ clickable: true }"
      :loop="true"
      :modules="modules"
    >
      <SwiperSlide v-for="movie in movies" class="swiper-container__slider">
        <img
          class="swiper-container__image"
          :src="`${imageApi}original${movie.poster_path}`"
          :alt="movie.title"
        />
      </SwiperSlide>
    </Swiper>
    <div class="swiper-container__arrow">
      <button class="swiper-container__button-next" @click="() => swiper.slideNext()">
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
    height: 22rem;
    width: 100%;
    padding: 0 0 2rem;
  }
  &__slider {
    width: max-content;
  }
  &__image {
    height: 100%;
    width: 12rem;
  }
  &__arrow {
    width: map-get($map: $sizes, $key: s-width-arrows);
  }
  &__button-next {
    width: 2rem;
    height: 2rem;
    background-color: red;
  }
}
</style>
