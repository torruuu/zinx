<script setup lang="ts">
import LangIcon from '@/components/svg/LangIcon.vue'
import ArrowDown from '@/components/svg/ArrowDown.vue'
import { ref } from 'vue'
import { changeUrlLang } from '@/composables/changeUrlLang'
import { isTouchDevice } from '@/composables/checkTouchDevice'
import { languages, ui } from '@/i18n/ui'

const props = defineProps<{
  lang: string
  currentSection: string
}>()

const showLanguages = ref(false)

const mouseEnter = () => {
  if (isTouchDevice()) return
  showLanguages.value = true
}

const checkSameLang = async (e: Event, key: keyof typeof ui) => {
  if (props.lang === key) return e.preventDefault()
}
</script>

<template>
  <div
    class="picker-container"
    :class="{ 'picker-container__hover': showLanguages }"
    @mouseleave="showLanguages = false"
  >
    <button
      class="picker-container__languages-picker languages-picker"
      @mouseenter="mouseEnter"
      @click="showLanguages = !showLanguages"
    >
      <span class="languages-picker__icon"><LangIcon /></span>
      <span class="languages-picker__title">{{
        languages[lang as keyof typeof languages]
      }}</span>
      <span class="languages-picker__arrow"><ArrowDown /></span>
    </button>
    <Transition>
      <div class="picker-container__languages-list languages-list" v-if="showLanguages">
        <template v-for="(value, key) in languages" :key="key">
          <a
            data-astro-history="replace"
            class="languages-list__link"
            :href="changeUrlLang(currentSection, key)"
            @click="checkSameLang($event, key)"
          >
            {{ value }}
          </a>
        </template>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.picker-container {
  height: 100%;
  @include flex();
  @include responsive(42.5rem) {
    @include flex(
      $direction: column,
      $justify-content: flex-start,
      $align-items: flex-start
    );
    gap: 1rem;
  }
  .languages-picker {
    position: relative;
    @include flex();
    gap: 0.3rem;
    &__icon {
      @include flex();
      width: 1rem;
    }
    &__title {
      font-size: map-get($map: $font-size, $key: fs-small);
      @include responsive() {
        font-size: map-get($map: $font-size, $key: fs-extra-small);
      }
    }
    &__arrow {
      @include flex();
      width: 1rem;
    }
    @include responsive(42.5rem) {
      height: max-content;
    }
  }
  .languages-list {
    background-color: map-get($map: $colors, $key: c-black-rgba);
    position: absolute;
    top: 90%;
    width: 6rem;
    padding: 0.8rem 1.3rem;
    border: 0.01rem solid map-get($map: $colors, $key: c-gray);
    border-radius: map-get($map: $sizes, $key: s-button-radius);
    @include flex($direction: column);
    gap: 0.8rem;
    &__link {
      &:hover {
        color: map-get($map: $colors, $key: c-gray);
      }
    }
    @include responsive(42.5rem) {
      position: static;
    }
  }
  &__hover {
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

.picker-container__hover .icon-svg {
  fill: map-get($map: $colors, $key: c-gray);
}
</style>
