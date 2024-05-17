<script setup lang="ts">
import MainBanner from '@/components/home/MainBanner.vue'
import type { ui } from '@/types/index'

defineProps<{
  lang: keyof typeof ui
}>()
</script>

<template>
  <MainBanner :lang="lang" />
</template>
