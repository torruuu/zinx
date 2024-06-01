<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

defineProps<{
  url: string
  ytTitle: string
}>()

onMounted(() => (document.documentElement.style.overflowY = 'hidden'))
onUnmounted(() => (document.documentElement.style.overflowY = 'scroll'))
</script>

<template>
  <div class="trailer-modal" @click="$emit('closeModal')">
    <div class="trailer-modal__trailer">
      <iframe
        class="trailer-modal__iframe"
        width="100%"
        height="100%"
        :src="url"
        :title="ytTitle"
        allow="autoplay;"
        allowfullscreen
      >
      </iframe>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.trailer-modal {
  padding: map-get($map: $sizes, $key: s-general-padding);
  background-color: map-get($map: $colors, $key: c-black-rgba);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  @include flex();
  @include responsive() {
    padding: map-get($map: $sizes, $key: s-general-padding-mobile);
  }
  &__trailer {
    aspect-ratio: 1920 / 1080;
    max-width: 50rem;
    width: 100%;
    height: auto;
  }
  &__iframe {
    border-radius: 1rem;
  }
}
</style>
