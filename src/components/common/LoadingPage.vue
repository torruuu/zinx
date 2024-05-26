<script setup lang="ts">
import { useStore } from '@nanostores/vue'
import { $homeBlock, $homeMounted, $loadError } from '@/stores/data'
import { SECTION_IDS } from '@/composables/sections'
import { onMounted, ref, watch, type Ref } from 'vue'

const props = defineProps<{
  sectionId: string | undefined
}>()

const homeLoaded: Ref<boolean> = ref(false)
const isHome: Ref<boolean> = ref(props.sectionId === SECTION_IDS.HOME)
const homeStore = useStore($homeMounted)
const homeBlock = useStore($homeBlock)

const loadError: Ref<boolean> = ref(false)
const errorStore = useStore($loadError)

onMounted(() => {
  watch(
    [homeStore, errorStore, homeBlock],
    () => {
      if (homeStore.value && Object.keys(homeBlock.value).length !== 0)
        return (homeLoaded.value = true)
      if (errorStore.value) return (loadError.value = true)
    },
    { immediate: true },
  )
})
</script>

<template>
  <div v-if="!homeLoaded && isHome && !loadError" class="loader-container">
    <span class="loader-container__loader"></span>
  </div>
</template>

<style lang="scss" scoped>
.loader-container {
  position: absolute;
  z-index: 20;
  top: 0;
  left: 0;
  background-color: map-get($map: $colors, $key: c-black);
  width: 100%;
  height: 100vh;
  @include flex();
  &__loader {
    transform: rotateZ(45deg);
    perspective: 62.5rem;
    border-radius: 50%;
    width: 6rem;
    height: 6rem;
    color: #fff;
  }
  &__loader:before,
  &__loader:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    border-radius: 50%;
    transform: rotateX(70deg);
    animation: 1s spin linear infinite;
  }
  &__loader:after {
    transform: rotateY(70deg);
    animation-delay: 0.4s;
  }
}

@keyframes rotate {
  0% {
    transform: translate(-50%, -50%) rotateZ(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotateZ(360deg);
  }
}

@keyframes rotateccw {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}

@keyframes spin {
  0%,
  100% {
    box-shadow: 0.2em 0 0 0 currentcolor;
  }
  12% {
    box-shadow: 0.2em 0.2em 0 0 currentcolor;
  }
  25% {
    box-shadow: 0 0.2em 0 0 currentcolor;
  }
  37% {
    box-shadow: -0.2em 0.2em 0 0 currentcolor;
  }
  50% {
    box-shadow: -0.2em 0 0 0 currentcolor;
  }
  62% {
    box-shadow: -0.2em -0.2em 0 0 currentcolor;
  }
  75% {
    box-shadow: 0 -0.2em 0 0 currentcolor;
  }
  87% {
    box-shadow: 0.2em -0.2em 0 0 currentcolor;
  }
}
</style>
