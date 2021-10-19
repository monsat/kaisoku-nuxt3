import { defineNuxtPlugin, NuxtApp } from '#app'

export default defineNuxtPlugin((nuxtApp: NuxtApp) => {
  nuxtApp.provide('stripTags', (body = '', maxLen = 64) => {
    const div = document.createElement('div')
    div.innerHTML = body
    const result = div.innerText.slice(0, maxLen + 1)
    return result.length > maxLen ? `${result.slice(0, maxLen)}…` : result
  })
})

declare module '#app' {
  interface NuxtApp {
    $stripTags (body: string, maxLen: number): string
  }
}
