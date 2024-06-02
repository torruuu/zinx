<script setup lang="ts">
import MainBanner from '@/components/home/MainBanner.vue'
import RegularSlider from '@/components/common/RegularSlider.vue'
import { $mainSectionMounted, $loadError } from '@/stores/data'
import { onMounted, onUnmounted, onBeforeUnmount, ref } from 'vue'
import type { RegularSliderMedia, ui } from '@/types/index'

const props = defineProps<{
  lang: keyof typeof ui
  sectionTitle: string
  mainSection: RegularSliderMedia
  regularSections: RegularSliderMedia[]
}>()

const mainSectionData = ref<RegularSliderMedia | null>(null)
const regularSectionsData = ref<RegularSliderMedia[] | null>(null)

const MAX_WAIT_TIME = 5000
let timeoutId: number
const scrollY = ref()
const handleScroll = () => (scrollY.value = window.scrollY)
const saveScrollPosition = () =>
  sessionStorage.setItem(`${props.sectionTitle}Scroll`, scrollY.value)

onMounted(() => {
  mainSectionData.value = props.mainSection
  regularSectionsData.value = props.regularSections

  timeoutId = window.setTimeout(() => {
    if (!$mainSectionMounted.get()) $loadError.set(true)
  }, MAX_WAIT_TIME)

  const sectionScroll = sessionStorage.getItem(`${props.sectionTitle}Scroll`)
  if (sectionScroll) setTimeout(() => window.scrollTo(0, parseInt(sectionScroll)), 0)
  sessionStorage.clear()
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('beforeunload', saveScrollPosition)
})
onBeforeUnmount(() => {
  saveScrollPosition()
  window.removeEventListener('beforeunload', saveScrollPosition)
})
onUnmounted(() => clearTimeout(timeoutId))
</script>

<template>
  <template v-if="mainSectionData && regularSectionsData">
    <MainBanner :lang="lang" :main-media="mainSectionData" />
    <RegularSlider
      v-for="regularSection in regularSectionsData"
      :lang="lang"
      :title="regularSection.title"
      :media="regularSection.media"
      :type="regularSection.type"
    />
  </template>
</template>
