<script setup lang="ts">
import { onMounted, ref } from 'vue'
import BannerSlider from '@/components/home/BannerSlider.vue'
import { getTrendingMedia } from '@/services/trendingMediaApi'
import type { RegularMovie, ui } from '@/types/index'

const props = defineProps<{
  lang: keyof typeof ui
}>()

const imageApi = import.meta.env.PUBLIC_API_IMAGES
const trendingMedia = ref<RegularMovie[] | null>(null)

onMounted(async () => {
  trendingMedia.value = await getTrendingMedia(props.lang)
})
</script>

<template>
  <!-- <img
    :src="`${imageApi}original${trendingMedia[4]?.backdrop_path}`"
    alt="a"
    v-if="trendingMedia"
  />
  <h1 v-if="trendingMedia">{{ trendingMedia[0]?.overview }}</h1> -->
  <article class="main-banner">
    <BannerSlider
      :lang="lang"
      :movies="trendingMedia"
      :image-api="imageApi"
      v-if="trendingMedia"
    />
  </article>
</template>

<style lang="scss" scoped>
.main-banner {
  width: 100%;
  height: 100vh;
  padding: 0 0 3rem;
  @include flex($align-items: flex-end);
}
</style>
