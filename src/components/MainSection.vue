<script setup lang="ts">
import MainBanner from '@/components/home/MainBanner.vue'
import RegularSlider from '@/components/common/RegularSlider.vue'
import { $homeMounted, $loadError } from '@/stores/data'
import { onMounted, onUnmounted, onBeforeUnmount, ref } from 'vue'
import type { RegularMovie, RegularSections, ui } from '@/types/index'

const props = defineProps<{
  lang: keyof typeof ui
  sectionTitle: string
  mainSection: RegularMovie[]
  regularSections: RegularSections
}>()

const mainSectionData = ref<RegularMovie[] | null>(null)
const regularSectionsData = ref<RegularSections | null>(null)

const MAX_WAIT_TIME = 5000
let timeoutId: number
const scrollY = ref()
const handleScroll = () => (scrollY.value = window.scrollY)
const savehomeScrollition = () =>
  sessionStorage.setItem(`${props.sectionTitle}Scroll`, scrollY.value)

onMounted(() => {
  mainSectionData.value = props.mainSection
  regularSectionsData.value = props.regularSections

  timeoutId = window.setTimeout(() => {
    if (!$homeMounted.get()) $loadError.set(true)
  }, MAX_WAIT_TIME)

  const homeScroll = sessionStorage.getItem(`${props.sectionTitle}Scroll`)
  if (homeScroll) {
    setTimeout(() => window.scrollTo(0, parseInt(homeScroll)), 0)
    sessionStorage.removeItem(`${props.sectionTitle}Scroll`)
  }
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('beforeunload', savehomeScrollition)
})
onBeforeUnmount(() => {
  savehomeScrollition()
  window.removeEventListener('beforeunload', savehomeScrollition)
})
onUnmounted(() => clearTimeout(timeoutId))
</script>

<template>
  <template v-if="mainSectionData && regularSectionsData">
    <MainBanner :lang="lang" :trending-media="mainSectionData" />
    <RegularSlider
      v-for="regularSection in regularSectionsData"
      :lang="lang"
      :title="regularSection.title"
      :media="regularSection.media"
      :type="regularSection.type"
    />
  </template>
</template>
