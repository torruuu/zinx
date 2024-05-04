<script setup lang="ts">
import { getTrendingMedia } from '@/services/trendingMediaApi'
import { $trendingMedia } from '@/stores/data'
import { useStore } from '@nanostores/vue'
import { onBeforeMount } from 'vue'

const props = defineProps<{
  lang: string
}>()

const trendingMedia = useStore($trendingMedia)
const imageApi = import.meta.env.PUBLIC_API_IMAGES

onBeforeMount(async () => {
  if (trendingMedia.value.length === 0) {
    await getTrendingMedia(props.lang)
  }
})
</script>

<template>
  <img
    :src="`${imageApi}original${trendingMedia[2]?.backdrop_path}`"
    alt="a"
    v-if="trendingMedia.length > 0"
  />
  <h1 v-if="trendingMedia.length > 0">{{ trendingMedia[0]?.overview }}</h1>
</template>
