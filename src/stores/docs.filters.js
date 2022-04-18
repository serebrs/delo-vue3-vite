import { defineStore } from "pinia";

export const useDocsFiltersStore = defineStore({
  id: "docFilters",
  state: () => ({
    filters: {
      type: null,
      dateFrom: null,
      dateTo: null,
      title: null,
      person: null,
    },
    touched: false,
    timestamp: null,
  }),
  // getters: {
  //   doubleCount: (state) => state.counter * 2
  // },
  actions: {
    async fetchTypeFilter() {
      await new Promise((res) => setTimeout(res, 100));
      return [
        { id: 1, text: "Входящий" },
        { id: 2, text: "Исходящий" },
        { id: 3, text: "Норм. акт" },
        { id: 4, text: "Договор" },
        { id: 5, text: "Конкурсная" },
        { id: 6, text: "Иной" },
      ];
    },
    async fetchPersonFilter() {
      await new Promise((res) => setTimeout(res, 100));
      return [
        { id: 1, text: "Иванов И.И." },
        { id: 2, text: "Сидоров С.С." },
        { id: 3, text: "Александров А.А." },
        { id: 4, text: "Васильев В.В." },
        { id: 5, text: "Петров П.П." },
      ];
    },
    async getFilters() {
      await new Promise((res) => setTimeout(res, 100));
      return {
        type: this.filters.type || "-1",
        dateFrom:
          this.filters.dateFrom ||
          new Date().toLocaleDateString("ru-RU").split(".").reverse().join("-"),
        dateTo:
          this.filters.dateTo ||
          new Date().toLocaleDateString("ru-RU").split(".").reverse().join("-"),
        title: this.filters.title || "",
        person: this.filters.person || "-1",
      };
    },
    saveFilters(filters) {
      Object.assign(this.filters, filters);
      this.touched = true;
    },
  },
});
