<script>
import axios from "axios";
import { useDocsFiltersCurrentStore } from "../../stores/docs-filters-current";
import ModalBox from "../../components/utils/ModalBox.vue"; // TODO вынести ModalBox наружу. Как?
import DocsAddEditForm from "./DocsAddEditForm.vue";

export default {
  setup() {
    return {
      filtersCurrentStore: useDocsFiltersCurrentStore(),
    };
  },
  methods: {
    async updateDoc(formData) {
      const data = new FormData();
      for (const name in formData) {
        if (name === "person")
          formData.person.forEach((pers) => data.append("person[]", pers));
        else data.append(name, formData[name]);
      }

      try {
        const res = await axios.post("http://localhost:3030/api/docs", data, {
          headers: { "Content-Type": "multipart/form-data" },
          timeout: 1000,
        });
        console.log("Создан новый документ: " + JSON.stringify(res.data));
      } catch (e) {
        this.$showError("docs/add-fail");
        if (e.response?.data?.errors) {
          e.response.data.errors.forEach((err) =>
            console.error(err.param + ": " + err.msg)
          );
          return;
        } else throw e;
      }
      this.$showMessage("docs/added");
      this.filtersCurrentStore.timestamp = Date.now();
      this.$router.push({
        name: "docs",
        query: this.$route.query,
        replace: true,
      });
    },
    closeModal() {
      this.$showMessage("docs/add-canceled");
      this.$router.push({
        name: "docs",
        query: this.$route.query,
        replace: true,
      });
    },
  },
  components: { ModalBox, DocsAddEditForm }, // TODO вынести ModalBox наружу. Как?
};
</script>

<template>
  <ModalBox @canceled="closeModal">
    <h1 class="text-2xl text-slate-800 font-semibold">
      Редактирование документа
    </h1>

    <DocsAddEditForm @close="closeModal" @save="updateDoc" />
  </ModalBox>
</template>
