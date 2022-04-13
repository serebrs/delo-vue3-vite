import { defineStore } from 'pinia'

export const useDocFiltersStore = defineStore({
  id: 'docFilters',
  state: () => ({
    filters: {
      type: null,
      dateFrom: null,
      dateTo: null,
      title: null,
      person: null,
    },
    touched: false
  }),
  // getters: {
  //   doubleCount: (state) => state.counter * 2
  // },
  actions: {
    saveFilters(filters) {
      Object.assign(this.filters, filters);
      this.touched = true;
    }
  }
})
