import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('stripTags', (body = '', maxLen = 64) => {
    const result = body.replace(/(<([^>]+)>)/ig, '').slice(0, maxLen + 1)
    return result.length > maxLen ? `${result.slice(0, maxLen)}…` : result
  })
})

declare module '#app' {
  interface NuxtApp {
    $stripTags (body: string, maxLen: number): string
  }
}
