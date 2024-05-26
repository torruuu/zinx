<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const scrolled = ref<boolean>(false)
const handleScroll = () => (scrolled.value = window.scrollY > 20)

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <div class="nav-background" :class="{ scrolled: scrolled }"></div>
</template>

<style lang="scss" scoped>
.nav-background {
  background-color: transparent;
  position: fixed;
  z-index: 9;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  max-width: map-get($map: $sizes, $key: s-body);
  width: 100%;
  height: map-get($map: $sizes, $key: s-nav);
  transition: all 300ms ease-in;
}

.scrolled {
  background-color: map-get($map: $colors, $key: c-black-sec);
}
</style>
