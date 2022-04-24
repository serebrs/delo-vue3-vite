import { defineStore } from "pinia";

export const useDocsFiltersCurrentStore = defineStore({
  id: "docFiltersCurrent",
  state: () => ({
    currentFilters: {},
    timestamp: null,
  }),
  actions: {
    saveFilters(filters) {
      this.$patch({
        currentFilters: filters,
      });
    },
  },
});
