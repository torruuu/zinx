<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import BannerSlider from '@/components/home/BannerSlider.vue'
import BannerDescription from '@/components/home/BannerDescription.vue'
import { $mainBannerMounted } from '@/stores/data'
import type { RegularMedia, ui } from '@/types/index'

defineProps<{
  lang: keyof typeof ui
  mainMedia: RegularMedia[]
}>()

const currentMedia = ref<RegularMedia | null>(null)

onMounted(() => $mainBannerMounted.set(true))
onUnmounted(() => $mainBannerMounted.set(false))
</script>

<template>
  <article class="main-banner">
    <BannerDescription v-if="currentMedia" :lang="lang" :currentMedia="currentMedia" />
    <BannerSlider
      @current-media="(media: RegularMedia) => (currentMedia = media)"
      :lang="lang"
      :media="mainMedia"
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
  @include height-responsive() {
    height: auto;
    min-height: 100vh;
  }
  @include responsive(15rem) {
    height: auto;
    min-height: 100vh;
  }
}
</style>
