import { defineStore } from "pinia";

export const useDocsFiltersOptionsStore = defineStore({
  id: "docFiltersOptions",
  state: () => ({
    typeFilter: [],
    personFilter: [],
  }),
  actions: {
    async fetchTypeFilter() {
      await new Promise((res) => setTimeout(res, 100));
      const res = [
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
      // this.typeFilter = [...res];
      this.typeFilter = res;
    },
    async fetchPersonFilter() {
      await new Promise((res) => setTimeout(res, 100));
      const res = [
        { id: 1, text: "Иванов И.И." },
        { id: 2, text: "Сидоров С.С." },
        { id: 3, text: "Александров А.А." },
        { id: 4, text: "Васильев В.В." },
        { id: 5, text: "Петров П.П." },
      ];
      // this.personFilter = [...res];
      this.personFilter = res;
    },
  },
});
