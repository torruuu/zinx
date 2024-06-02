<script setup lang="ts">
import type { RegularMedia, ui } from '@/types'
defineProps<{
  lang: keyof typeof ui
  media: RegularMedia
  type?: 'movie' | 'tv'
}>()
const imageApi = import.meta.env.PUBLIC_API_IMAGES
</script>

<template>
  <div class="media-card">
    <a
      class="media-card__link"
      :href="`/${lang}/media=${media.id}-${type || media.media_type}`"
    >
      <p class="media-card__title">{{ media.title || media.name }}</p>
      <img
        class="media-card__image"
        :src="`${imageApi}w500${media.backdrop_path}`"
        :alt="media.title || media.name"
      />
    </a>
  </div>
</template>

<style lang="scss" scoped>
.media-card {
  position: relative;
  aspect-ratio: 500 / 281;
  width: 100%;
  border: 0.1rem solid map-get($map: $colors, $key: c-black);
  border-radius: map-get($map: $sizes, $key: s-slide-radius);
  &:hover {
    border: 0.1rem solid map-get($map: $colors, $key: c-dark-gray);
  }
  &::after {
    content: '';
    border-radius: map-get($map: $sizes, $key: s-slide-radius);
    pointer-events: none;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
    z-index: 1;
  }
  &__link {
    @include flex();
  }
  &__title {
    pointer-events: none;
    position: absolute;
    bottom: 10%;
    left: 5%;
    z-index: 2;
  }
  &__image {
    width: 100%;
    border-radius: map-get($map: $sizes, $key: s-slide-radius);
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
  }
}
</style>
