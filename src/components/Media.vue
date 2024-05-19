<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { DetailedMovie, DetailedTv } from '@/types/index'

const props = defineProps<{
  mediaData: DetailedMovie & DetailedTv
}>()

const media = ref<(DetailedMovie & DetailedTv) | null>(null)

onMounted(() => {
  media.value = props.mediaData
})
</script>

<template>
  <div>
    <h1>Media</h1>
    <h2 v-if="media">{{ media.overview }}</h2>
  </div>
</template>
