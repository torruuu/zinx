<script setup lang="ts">
import LangIcon from '@/components/svg/LangIcon.vue'
import ArrowDown from '@/components/svg/ArrowDown.vue'
import { ref } from 'vue'
import { languages } from '@/i18n/ui'

const showLanguages = ref(false)

defineProps<{
  lang: string
}>()
</script>

<template>
  <div class="picker-container" @mouseleave="showLanguages = false">
    <button
      class="picker-container__languages-picker languages-picker"
      @mouseenter="showLanguages = true"
    >
      <span class="languages-picker__icon"><LangIcon /></span>
      <span class="languages-picker__title">{{
        languages[lang as keyof typeof languages]
      }}</span>
      <span class="languages-picker__arrow"><ArrowDown /></span>
    </button>
    <div class="picker-container__languages-list languages-list" v-if="showLanguages">
      <template v-for="(value, key) in languages" :key="key">
        <a class="languages-list__link" :href="`/${key}`">{{ value }}</a>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.picker-container {
  height: 100%;
  @include flex();
  .languages-picker {
    position: relative;
    height: 80%;
    @include flex();
    gap: 0.3rem;
    &__icon {
      @include flex();
      width: 1rem;
    }
    &__title {
      font-size: map-get($map: $font-size, $key: fs-small);
    }
    &__arrow {
      @include flex();
      width: 1rem;
    }
  }
  .languages-list {
    position: absolute;
    top: 90%;
    width: 6rem;
    padding: 0.8rem 1.3rem;
    border: solid 0.01rem map-get($map: $colors, $key: c-gray);
    border-radius: 0.8rem;
    @include flex($direction: column);
    gap: 0.8rem;
    &__link {
      &:hover {
        color: map-get($map: $colors, $key: c-gray);
      }
    }
  }
  &:hover {
    .languages-picker__title {
      color: map-get($map: $colors, $key: c-gray);
    }
  }
}
</style>

<style lang="scss">
.icon-svg {
  fill: map-get($map: $colors, $key: c-white);
}

.picker-container:hover .icon-svg {
  fill: map-get($map: $colors, $key: c-gray);
}
</style>
