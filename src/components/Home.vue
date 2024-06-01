<script setup lang="ts">
import MainBanner from '@/components/home/MainBanner.vue'
import RegularSlider from '@/components/common/RegularSlider.vue'
import { useTranslations } from '@/i18n/utils'
import { $homeBlock, $homeMounted, $loadError, setHomeData } from '@/stores/data'
import { onMounted, onUnmounted, ref } from 'vue'
import type { ui } from '@/types/index'

const props = defineProps<{
  lang: keyof typeof ui
}>()

const t = useTranslations(props.lang)

if (
  Object.keys($homeBlock.get()).length === 0 ||
  $homeBlock.get().language !== props.lang
)
  await setHomeData(props.lang)
const trendingData = ref()
const popularMovies = ref()

const MAX_WAIT_TIME = 5000
let timeoutId: number

onMounted(() => {
  trendingData.value = $homeBlock.get().trending
  popularMovies.value = $homeBlock.get().popularMovies
  timeoutId = window.setTimeout(() => {
    if (!$homeMounted.get()) $loadError.set(true)
  }, MAX_WAIT_TIME)
})
onUnmounted(() => {
  clearTimeout(timeoutId)
})
</script>

<template>
  <MainBanner v-if="trendingData" :lang="lang" :trending-media="trendingData" />
  <RegularSlider
    v-if="popularMovies"
    :lang="lang"
    :title="t('movies.popular')"
    :media="popularMovies"
    type="movie"
  />
</template>
