<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useGenres } from '@/i18n/utils'
import BannerBg from '@/components/common/MediaBg.vue'
import { $bannerDescriptionMounted } from '@/stores/data'
import type { RegularMovie, ui } from '@/types/index'

const props = defineProps<{
  lang: keyof typeof ui
  currentMedia: RegularMovie
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

onMounted(() => $bannerDescriptionMounted.set(true))
</script>

<template>
  <section class="banner-description">
    <BannerBg
      :media-bg="currentMedia.backdrop_path || ''"
      :media-poster="currentMedia.poster_path || ''"
    />
    <span class="banner-description__title">
      {{ currentMedia.title || currentMedia.name }}
    </span>
    <div class="banner-description__genres">
      <span class="banner-description__genre" v-for="genre in genreNames">
        {{ genre }}
      </span>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.banner-description {
  padding: map-get($map: $sizes, $key: s-general-padding);
  padding-bottom: 9vh;
  @include flex(
    $direction: column,
    $justify-content: flex-start,
    $align-items: flex-start
  );
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
