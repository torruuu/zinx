<script setup lang="ts">
import { computed } from 'vue'
import { useGenres } from '@/i18n/utils'
import BannerBg from '@/components/common/MediaBg.vue'
import type { RegularMedia, ui } from '@/types/index'

const props = defineProps<{
  lang: keyof typeof ui
  currentMedia: RegularMedia
}>()

const g = useGenres(props.lang)
const moviesGenre = g('movies.genres')
const seriesGenre = g('series.genres')

const genreNames = computed(() => {
  return props.currentMedia.genre_ids
    .map(
      (id) =>
        (
          moviesGenre.find((genre) => genre.id === id) ||
          seriesGenre.find((genre) => genre.id === id)
        )?.name,
    )
    .filter(Boolean)
})
</script>

<template>
  <section class="banner-description">
    <BannerBg
      :media-bg="currentMedia.backdrop_path || ''"
      :media-poster="currentMedia.poster_path || ''"
    />
    <p
      class="banner-description__title"
      :style="{ 'view-transition-name': `title-${currentMedia.id}` }"
    >
      {{ currentMedia.title || currentMedia.name }}
    </p>
    <div
      class="banner-description__genres"
      :style="{ 'view-transition-name': `description-${currentMedia.id}` }"
    >
      <span class="banner-description__genre" v-for="genre in genreNames">
        {{ genre }}
      </span>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.banner-description {
  height: 100%;
  padding: map-get($map: $sizes, $key: s-general-padding);
  padding-bottom: 9vh;
  @include flex(column, flex-end, flex-start);
  gap: 0.8rem;
  @include responsive() {
    padding: map-get($map: $sizes, $key: s-general-padding-mobile);
    padding-bottom: 2.5rem;
    gap: 0.4rem;
  }
  &__title {
    font-size: map-get($map: $font-size, $key: fs-big);
    font-family: map-get($map: $fonts, $key: f-font-medium);
    @include responsive() {
      font-size: map-get($map: $font-size, $key: fs-medium-big);
    }
  }
  &__genres {
    @include genres();
  }
  &__genre {
    @include responsive() {
      font-size: map-get($map: $font-size, $key: fs-super-small);
    }
  }
}
</style>
