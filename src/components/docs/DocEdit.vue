<script>
import { useDocsFiltersCurrentStore } from "@/stores/docs-filters-current";
import ModalBox from "@/components/utils/ModalBox.vue";
import ActionButton from "@/components/buttons/modal/ActionButton.vue";
import CancelButton from "@/components/buttons/modal/CancelButton.vue"; // TODO вынести ModalBox наружу. Как?

export default {
  setup() {
    return {
      filtersCurrentStore: useDocsFiltersCurrentStore(),
    };
  },
  props: ["id"], // $route.params.id
  data() {
    return {
      formData: {
        type: "in",
        num: "",
        date: new Date()
          .toLocaleDateString("ru-RU")
          .split(".")
          .reverse()
          .join("-"),
        title: "",
        person: [],
      },
    };
  },
  methods: {
    async saveDoc() {
      try {
        await console.log(
          `Сохранение отредактированного документа № ${
            this.id
          }: ${JSON.stringify(this.formData)}`
        ); // TODO делать Object.assing здесь и передавать в функцию копию объекта
        this.$showMessage("docs/edited");
        this.$router.push({
          name: "docs",
          query: this.$route.query,
          replace: true,
        });
        this.filtersCurrentStore.timestamp = Date.now();
      } catch (e) {
        this.$showError("docs/edit-fail");
      }
    },
    closeModal() {
      this.$showMessage("docs/edit-canceled");
      this.$router.push({
        name: "docs",
        query: this.$route.query,
        replace: true,
      });
    },
  },
  components: { ModalBox, ActionButton, CancelButton }, // TODO вынести ModalBox наружу. Как?
};
</script>

<template>
  <ModalBox @canceled="closeModal">
    <h1 class="text-2xl text-slate-800 font-semibold">
      Редактирование документа
    </h1>
    <p>Id: {{ id }}</p>

    <div>
      <ActionButton @click="saveDoc" class="mr-5 mt-5">Сохранить</ActionButton>
      <CancelButton @click="closeModal" class="mr-5 mt-5">Отмена</CancelButton>
    </div>
  </ModalBox>
</template>
