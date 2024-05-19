<script setup lang="ts">
import MainBanner from '@/components/home/MainBanner.vue'
import { $homeMounted, $loadError } from '@/stores/data'
import { onMounted } from 'vue'
import type { ui } from '@/types/index'

const MAX_WAIT_TIME = 5000

defineProps<{
  lang: keyof typeof ui
}>()

onMounted(() => {
  setTimeout(async () => {
    if (!$homeMounted.get()) $loadError.set(true)
  }, MAX_WAIT_TIME)
})
</script>

<template>
  <MainBanner :lang="lang" />
</template>
