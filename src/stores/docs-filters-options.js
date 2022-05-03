import { defineStore } from "pinia";

export const useDocsFiltersOptionsStore = defineStore({
  id: "docFiltersOptions",
  state: () => ({
    typeFilter: [],
    personFilter: [],
  }),
  actions: {
    async fetchTypeFilter() {
      // await new Promise((res) => setTimeout(res, 100));
      try {
        const res = await fetch("http://localhost:3030/api/doctypes");
        this.typeFilter = await res.json();
        console.log("Тип:" + JSON.stringify(this.typeFilter));
      } catch (e) {
        console.error("Ошибка при загрузке типов документов");
        throw e;
      }
    },
    async fetchPersonFilter() {
      // await new Promise((res) => setTimeout(res, 100));
      try {
        const res = await fetch("http://localhost:3030/api/employees");
        this.personFilter = await res.json();
        console.log("Персонал:" + JSON.stringify(this.personFilter));
      } catch (e) {
        console.error("Ошибка при загрузке персонала");
        throw e;
      }
    },
  },
});
