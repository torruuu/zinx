<script setup lang="ts">
import ArrowBack from '@/components/svg/ArrowBack.vue'
const goBack = () =>
  document.referrer ? window.history.back() : (window.location.href = '/')
</script>

<template>
  <div class="back-button">
    <button @click="goBack"><ArrowBack /></button>
  </div>
</template>

<style lang="scss" scoped>
.back-button {
  margin: map-get($map: $sizes, $key: s-general-padding-mobile);
  background-color: map-get($map: $colors, $key: c-black);
  position: fixed;
  top: 0;
  z-index: 15;
  height: map-get($map: $sizes, $key: s-nav-mobile);
  width: map-get($map: $sizes, $key: s-nav-logo);
  display: none;
  @include responsive(42.5rem) {
    @include flex();
  }
}
</style>
