<script setup lang="ts">
import { useStore } from '@nanostores/vue'
import { $loadError } from '@/stores/data.ts'
import { useTranslations } from '@/i18n/utils'
import { onMounted, watch, ref, type Ref } from 'vue'
import NoInternet from '@/components/svg/NoInternet.vue'
import type { ui } from '@/types/index'

const props = defineProps<{
  lang: keyof typeof ui
}>()

const reloadPage = () => window.location.reload()
const t = useTranslations(props.lang)
const loadError: Ref<boolean> = ref(false)
const store = useStore($loadError)

onMounted(() => {
  watch(
    store,
    () => {
      if (store.value) return (loadError.value = true)
    },
    { immediate: true },
  )
})
</script>

<template>
  <div v-if="loadError" class="error-container">
    <div class="error-container__svg"><NoInternet /></div>
    <span class="error-container__title">{{ t('loaderror.title') }}</span>
    <span class="error-container__description">{{ t('loaderror.description') }}</span>
    <button class="error-container__button" @click="reloadPage">
      {{ t('button.retry') }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
.error-container {
  padding: map-get($map: $sizes, $key: s-general-padding);
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;
  background-color: map-get($map: $colors, $key: c-black);
  width: 100%;
  height: 100vh;
  @include flex($direction: column);
  gap: 1rem;
  &__svg {
    width: 12.5rem;
  }
  &__title {
    text-align: center;
    font-size: map-get($map: $font-size, $key: fs-big);
    @include responsive() {
      font-size: map-get($map: $font-size, $key: fs-medium-big);
    }
  }
  &__description {
    text-align: center;
    font-size: map-get($map: $font-size, $key: fs-small);
    @include responsive() {
      font-size: map-get($map: $font-size, $key: fs-extra-small);
    }
  }
  &__button {
    padding: 0.6rem 0.9rem;
    border: 0.01rem solid map-get($map: $colors, $key: c-gray);
    border-radius: map-get($map: $sizes, $key: s-button-radius);
    &:hover {
      color: map-get($map: $colors, $key: c-black);
      background-color: map-get($map: $colors, $key: c-gray);
    }
  }
  @include responsive() {
    padding: map-get($map: $sizes, $key: s-general-padding-mobile);
  }
}
</style>
