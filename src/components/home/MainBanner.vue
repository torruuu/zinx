<script setup lang="ts">
import { httpClient } from '@/services/useFetch.js'

const props = defineProps<{
  langCode: string
}>()

const data = await httpClient.get('3/movie/popular', [], props.langCode)
</script>

<template>
  <div>{{ data.results[0].overview }}</div>
</template>
