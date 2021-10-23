import { unref } from 'vue'
import { defineNuxtPlugin } from '#app'
import { MaybeRef } from '@/types'
import format from 'date-fns/format'
import { ja } from 'date-fns/locale'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('format', (d: MaybeRef<Date | string | number | null | undefined>, fmt: string) => {
    d = unref(d)
    const dt = (typeof d === 'string') ? (new Date(d)) : d
    if (dt == null) {
      return ''
    }
    return format(dt, fmt, { locale: ja })
  })
})

declare module '#app' {
  interface NuxtApp {
    $format (d: MaybeRef<Date | string | number | null | undefined>, fmt: string): string
  }
}
