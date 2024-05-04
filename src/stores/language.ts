import { defaultLang } from '@/i18n/ui'
import { atom } from 'nanostores'

export const $language = atom<string>(defaultLang)
