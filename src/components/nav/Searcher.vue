<script setup lang="ts">
import SearchSvg from '@/components/svg/SearchSvg.vue'
import { SECTION_IDS } from '@/composables/sections'
import { ref } from 'vue'
import { useTranslations } from '@/i18n/utils'
import type { ui } from '@/types'

const props = defineProps<{
  lang: keyof typeof ui
}>()

const t = useTranslations(props.lang)
const query = ref()

const handleSearch = () => {
  if (!query.value) return
  const href = window.location.origin
  window.location.href = `${href}/${props.lang}/${SECTION_IDS.SEARCH}?q=${query.value}`
}
</script>

<template>
  <div class="nav-searcher">
    <div class="nav-searcher__searcher">
      <button class="nav-searcher__svg" @click="handleSearch"><SearchSvg /></button>
      <input
        class="nav-searcher__input"
        type="text"
        v-model="query"
        :placeholder="t('nav.searcher.placeholder')"
        @keyup.enter="handleSearch"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav-searcher {
  height: 100%;
  @include flex();
  &__searcher {
    width: 13.5rem;
    position: relative;
  }
  &__svg {
    height: 1rem;
    position: absolute;
    top: 50%;
    left: 4.25%;
    transform: translateY(-50%);
  }
  &__input {
    background-color: map-get($map: $colors, $key: c-black-rgba);
    border-radius: 0.4rem;
    width: 100%;
    height: 2.25rem;
    padding: 0 0 0 2rem;
    @include responsive(42.5rem) {
      background-color: map-get($map: $colors, $key: c-black-sec);
    }
    &:focus {
      background-color: map-get($map: $colors, $key: c-black-sec);
    }
    &::placeholder {
      color: map-get($map: $colors, $key: c-dark-gray);
      font-size: map-get($map: $font-size, $key: fs-super-small);
      font-family: map-get($map: $fonts, $key: f-font-book);
    }
  }
}
</style>
