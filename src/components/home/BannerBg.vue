<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  imageApi: string
  movieBg: string
  moviePoster: string
}>()

const bgStyle = computed(() => ({
  '--bg-image': `url('${props.imageApi}original/${props.movieBg}')`,
}))
</script>

<template>
  <div class="movie-background" :style="bgStyle"></div>
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
  &::before {
    content: '';
    position: absolute;
    left: 0;
    width: 50%;
    height: 100%;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.9), transparent);
    z-index: -1;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 25rem;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
    z-index: -1;
  }
}
</style>
