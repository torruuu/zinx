<script setup lang="ts">
import { $bannerBgMounted } from '@/stores/data'
import { computed, ref, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  mediaBg: string
  mediaPoster: string
}>()

const imageApi = import.meta.env.PUBLIC_API_IMAGES
const screenWidth = ref(window.innerWidth)

const updateScreenWidth = () => (screenWidth.value = window.innerWidth)

const bgImage = computed(() => {
  return screenWidth.value > 1024 ? props.mediaBg : props.mediaPoster
})

const bgStyle = computed(() => ({
  '--bg-image': `url('${imageApi}original/${bgImage.value}')`,
}))

onMounted(() => {
  window.addEventListener('resize', updateScreenWidth)
  $bannerBgMounted.set(true)
})
onUnmounted(() => window.removeEventListener('resize', updateScreenWidth))
</script>

<template>
  <Transition>
    <div class="movie-background" :style="bgStyle" :key="mediaBg"></div>
  </Transition>
</template>

<style scoped lang="scss">
.movie-background {
  z-index: -2;
  width: 100%;
  height: 100vh;
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
</style>
