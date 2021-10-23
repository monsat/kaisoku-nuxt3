import { Ref } from "vue"

const dbl = (state: Ref<number>) => () => state.value * 2
const increment = (state: Ref<number>) => () => state.value++

export const useCounter = () => {
  const state = ref(0)

  return {
    state: readonly(state),
    dbl: computed(dbl(state)),
    increment: increment(state),
  }
}
