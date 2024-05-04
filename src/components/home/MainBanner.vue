<script setup lang="ts">
import { getTrendingMedia } from '@/services/trendingMediaApi'
import { onMounted, ref } from 'vue'
import type { RegularMovie } from '@/types/RegularMovie'

const props = defineProps<{
  lang: string
}>()

const imageApi = import.meta.env.PUBLIC_API_IMAGES

const trendingMedia = ref<RegularMovie[] | null>(null)

onMounted(async () => {
  trendingMedia.value = await getTrendingMedia(props.lang)
})
</script>

<template>
  <img
    :src="`${imageApi}original${trendingMedia[3]?.backdrop_path}`"
    alt="a"
    v-if="trendingMedia"
  />
  <h1 v-if="trendingMedia">{{ trendingMedia[0]?.overview }}</h1>
</template>
