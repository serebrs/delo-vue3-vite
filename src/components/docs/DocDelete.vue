<script>
import { useDocsFiltersCurrentStore } from "../../stores/docs-filters-current";
import ModalBox from "../../components/utils/ModalBox.vue"; // TODO вынести ModalBox наружу. Как?
import AlertButton from "../../components/buttons/modal/AlertButton.vue";
import CancelButton from "../../components/buttons/modal/CancelButton.vue";

export default {
  setup() {
    return {
      filtersCurrentStore: useDocsFiltersCurrentStore(),
    };
  },
  props: ["id"], // $route.params.id
  methods: {
    async deleteDoc() {
      try {
        const res = await fetch(`http://localhost:3030/api/docs/${this.id}`, {
          method: "DELETE",
        });
        const json = await res.json();
        if (res.status != 200) throw new Error(json.message);
        this.$showMessage("docs/deleted");
        this.$router.push({
          name: "docs",
          query: this.$route.query,
          replace: true,
        });
        this.filtersCurrentStore.timestamp = Date.now();
      } catch (e) {
        console.error(e.message);
        this.$showError("docs/delete-fail");
      }
    },
    closeModal() {
      this.$showMessage("docs/delete-canceled");
      this.$router.push({
        name: "docs",
        query: this.$route.query,
        replace: true,
      });
    },
  },
  components: { ModalBox, AlertButton, CancelButton }, // TODO вынести ModalBox наружу. Как?
};
</script>

<template>
  <ModalBox width="sm" @canceled="closeModal">
    <h1 class="text-2xl text-slate-800 font-semibold">Удаление документа</h1>
    <p>Вы действительно хотите удалить документ: {{ id }}?</p>

    <div>
      <AlertButton @click="deleteDoc" class="mr-5 mt-5">Удалить</AlertButton>
      <CancelButton @click="closeModal" class="mr-5 mt-5">Отмена</CancelButton>
    </div>
  </ModalBox>
</template>
