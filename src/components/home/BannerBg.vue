<script setup lang="ts">
import { $bannerBgMounted } from '@/stores/data'
import { computed, ref, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  imageApi: string
  movieBg: string
  moviePoster: string
}>()

const screenWidth = ref(window.innerWidth)

const updateScreenWidth = () => (screenWidth.value = window.innerWidth)

const bgImage = computed(() => {
  return screenWidth.value > 1024 ? props.movieBg : props.moviePoster
})

const bgStyle = computed(() => ({
  '--bg-image': `url('${props.imageApi}original/${bgImage.value}')`,
}))

onMounted(() => {
  window.addEventListener('resize', updateScreenWidth)
  $bannerBgMounted.set(true)
})
onUnmounted(() => window.removeEventListener('resize', updateScreenWidth))
</script>

<template>
  <Transition>
    <div class="movie-background" :style="bgStyle" :key="movieBg"></div>
  </Transition>
</template>

<style scoped lang="scss">
.movie-background {
  z-index: -2;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.75;
  background-image: var(--bg-image);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 75vh;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
    z-index: -1;
  }
  @media screen and (max-height: 28rem) {
    opacity: 0.6;
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 200ms ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
