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
    typeFilter: {},
    personFilter: {},
    touched: false,
    timestamp: null,
  }),
  actions: {
    async fetchTypeFilter() {
      await new Promise((res) => setTimeout(res, 100));
      // const res =
      return [
        { id: 1, text: "Входящий", hintText: "Входящий", icon: "InboxInIcon" },
        {
          id: 2,
          text: "Исходящий",
          hintText: "Исходящий",
          icon: "ExternalLinkIcon",
        },
        {
          id: 3,
          text: "Норм. акт",
          hintText: "Нормативный",
          icon: "DocumentTextIcon",
        },
        {
          id: 4,
          text: "Договор",
          hintText: "Договор",
          icon: "DocumentDuplicateIcon",
        },
        {
          id: 5,
          text: "Конкурсная",
          hintText: "Конкурсная",
          icon: "DocumentDuplicateIcon",
        },
        { id: 6, text: "Иной", hintText: "Иной", icon: "DocumentIcon" },
      ];
      // this.typeFilter = Object.assign({}, res);
      // this.typeFilter = { ...res };
    },
    async fetchPersonFilter() {
      await new Promise((res) => setTimeout(res, 100));
      // const res =
      return [
        { id: 1, text: "Иванов И.И." },
        { id: 2, text: "Сидоров С.С." },
        { id: 3, text: "Александров А.А." },
        { id: 4, text: "Васильев В.В." },
        { id: 5, text: "Петров П.П." },
      ];
      // this.personFilter = { ...res };
    },
    async getCurrentFilters() {
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
