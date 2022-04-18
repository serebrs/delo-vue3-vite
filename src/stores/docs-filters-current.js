import { defineStore } from "pinia";

export const useDocsFiltersCurrentStore = defineStore({
  id: "docFiltersCurrent",
  state: () => ({
    currentFilters: {
      type: null,
      dateFrom: null,
      dateTo: null,
      title: null,
      person: null,
    },
    touched: false,
    timestamp: null,
  }),
  actions: {
    async getCurrentFilters() {
      // await new Promise((res) => setTimeout(res, 100));
      return {
        type: this.currentFilters.type || "-1",
        dateFrom:
          this.currentFilters.dateFrom ||
          new Date().toLocaleDateString("ru-RU").split(".").reverse().join("-"),
        dateTo:
          this.currentFilters.dateTo ||
          new Date().toLocaleDateString("ru-RU").split(".").reverse().join("-"),
        title: this.currentFilters.title || "",
        person: this.currentFilters.person || "-1",
      };
    },
    saveFilters(filters) {
      Object.assign(this.currentFilters, filters);
      this.touched = true;
    },
  },
});
