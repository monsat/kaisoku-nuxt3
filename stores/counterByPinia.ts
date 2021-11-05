import { defineStore } from 'pinia'

export const useCounterByPinia = defineStore({
  id: 'counterByPinia',

  state: () => ({
    n: 10,
  }),

  getters: {
    doubled: (state) => state.n * 2,
  },

  actions: {
    async increment(amount = 1) {
      this.n += amount
    },
  },
})
