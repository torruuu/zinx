<script setup lang="ts">
import PlayIcon from '@/components/svg/PlayIcon.vue'
import TrailerModal from '@/components/common/TrailerModal.vue'
import { onMounted, ref } from 'vue'

defineProps<{
  title: string
  url: string
  ytTitle: string
}>()

const showModal = ref(false)
const handleClick = ref()

onMounted(() => {
  handleClick.value = () => (showModal.value = true)
})
</script>

<template>
  <button v-bind="$attrs" class="play-button" @click="handleClick">
    <div class="play-button__content">
      <div class="play-button__icon"><PlayIcon /></div>
      <span class="play-button__title">{{ title }}</span>
    </div>
  </button>
  <TrailerModal
    v-if="showModal"
    :url="url"
    :ytTitle="ytTitle"
    @close-modal="showModal = !showModal"
  />
</template>

<style lang="scss" scoped>
.play-button {
  position: relative;
  background-color: map-get($map: $colors, $key: c-gray);
  border: 0.1rem solid map-get($map: $colors, $key: c-gray);
  border-radius: map-get($map: $sizes, $key: s-button-radius);
  max-width: 12.5rem;
  width: 100%;
  height: 3rem;
  @include play-button-transition();
  &:hover {
    background-color: map-get($map: $colors, $key: c-white);
    border: 0.1rem solid map-get($map: $colors, $key: c-white);
  }
  &:active {
    background-color: transparent;
  }
  &__content {
    color: map-get($map: $colors, $key: c-black);
    @include flex();
    gap: 0.4rem;
    @include play-button-transition();
  }
  &:active > &__content {
    color: inherit;
  }
  &__icon {
    width: 1rem;
  }
  @include responsive(40rem) {
    background-color: map-get($map: $colors, $key: c-white);
    border: 0.1rem solid map-get($map: $colors, $key: c-white);
  }
  &__title {
    color: inherit;
  }
}
</style>

<style lang="scss">
.play-button:active .play-icon {
  fill: currentColor;
}
</style>
