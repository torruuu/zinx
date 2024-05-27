<script setup lang="ts">
import MainBanner from '@/components/home/MainBanner.vue'
import { $homeBlock, $homeMounted, $loadError, setHomeData } from '@/stores/data'
import { onMounted, ref } from 'vue'
import type { ui } from '@/types/index'

const props = defineProps<{
  lang: keyof typeof ui
}>()

if (
  Object.keys($homeBlock.get()).length === 0 ||
  $homeBlock.get().language !== props.lang
)
  await setHomeData(props.lang)
const trendingData = ref()

const MAX_WAIT_TIME = 5000

onMounted(() => {
  trendingData.value = $homeBlock.get().trending
  setTimeout(async () => {
    if (!$homeMounted.get()) $loadError.set(true)
  }, MAX_WAIT_TIME)
})
</script>

<template>
  <MainBanner v-if="trendingData" :lang="lang" :trending-media="trendingData" />
</template>
