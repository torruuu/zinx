<script setup lang="ts">
import PlayIcon from '@/components/svg/PlayIcon.vue'
</script>

<template>
  <button class="play-button">
    <div class="play-button__content">
      <div class="play-button__icon"><PlayIcon /></div>
      <slot></slot>
    </div>
  </button>
</template>

<style lang="scss" scoped>
.play-button {
  position: relative;
  background-color: map-get($map: $colors, $key: c-gray);
  border: 0.1rem solid map-get($map: $colors, $key: c-gray);
  border-radius: map-get($map: $sizes, $key: s-button-radius);
  width: 12.5rem;
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
  @include responsive(14.5rem) {
    width: 100%;
  }
}
</style>

<style lang="scss">
.play-button:active .play-icon {
  fill: currentColor;
}
</style>
