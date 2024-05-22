<script setup lang="ts">
import { onMounted, ref } from 'vue'
import BannerSlider from '@/components/home/BannerSlider.vue'
import BannerDescription from '@/components/home/BannerDescription.vue'
import { $mainBannerMounted } from '@/stores/data'
import type { RegularMovie, ui } from '@/types/index'

defineProps<{
  lang: keyof typeof ui
  trendingMedia: RegularMovie[]
}>()

const currentMedia = ref<RegularMovie | null>(null)

onMounted(async () => {
  $mainBannerMounted.set(true)
})
</script>

<template>
  <article class="main-banner">
    <BannerDescription v-if="currentMedia" :lang="lang" :currentMedia="currentMedia" />
    <BannerSlider
      @current-media="(media) => (currentMedia = media)"
      :lang="lang"
      :media="trendingMedia"
    />
  </article>
</template>

<style lang="scss" scoped>
.main-banner {
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 5rem 0 3rem;
  @include flex($direction: column, $justify-content: flex-end, $align-items: flex-start);
  @media screen and (max-height: 33em) {
    height: auto;
    min-height: 100vh;
  }
  @include responsive(15em) {
    height: auto;
    min-height: 100vh;
  }
}
</style>
