<script>
import { useDocsFiltersCurrentStore } from "@/stores/docs-filters-current";
import { useDocsFiltersOptionsStore } from "@/stores/docs-filters-options";
import ModalBox from "@/components/utils/ModalBox.vue"; // TODO вынести ModalBox наружу. Как?
import ActionButton from "@/components/buttons/modal/ActionButton.vue";
import CancelButton from "@/components/buttons/modal/CancelButton.vue";

export default {
  setup() {
    return {
      filtersCurrentStore: useDocsFiltersCurrentStore(),
      filtersOptionsStore: useDocsFiltersOptionsStore(),
    };
  },
  data() {
    return {
      formData: {
        type: 1,
        num: "",
        date: this.$formatDate(new Date()),
        title: "",
        person: [],
      },
    };
  },
  methods: {
    async saveDoc() {
      try {
        // await new Promise((res) => setTimeout(res, 500)); // TODO убрать эту задержку
        const data = Object.assign({}, this.formData);
        const res = await fetch("http://localhost:3030/api/docs/add", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const json = await res.json();
        console.log("Создан новый документ: " + JSON.stringify(json));
        this.$showMessage("docs/added");
        this.$router.push({
          name: "docs",
          query: this.$route.query,
          replace: true,
        });
        this.filtersCurrentStore.timestamp = Date.now();
      } catch (e) {
        this.$showError("docs/add-fail");
      }
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
  components: { ModalBox, ActionButton, CancelButton }, // TODO вынести ModalBox наружу. Как?
};
</script>

<template>
  <ModalBox @canceled="closeModal">
    <h1 class="text-2xl text-slate-800 font-semibold">
      Создание нового документа
    </h1>

    <div class="flex flex-col space-y-6 w-full bg-gray-100 rounded-md p-5">
      <div class="flex flex-row space-x-3 sm:space-x-8">
        <label class="w-96 sm:w-full">
          <span class="modal-span-label">Тип</span>
          <select v-model="formData.type" class="modal-input-style">
            <option
              v-for="option in this.filtersOptionsStore.typeFilter"
              :key="option.id"
              :value="option.id"
            >
              {{ option.text }}
            </option>
          </select>
        </label>

        <label class="w-56 sm:w-full">
          <span class="modal-span-label">Номер</span>
          <input
            type="text"
            v-model.trim="formData.num"
            class="modal-input-style"
          />
        </label>

        <label class="w-full">
          <span class="modal-span-label">Дата</span>
          <input
            type="date"
            v-model="formData.date"
            class="modal-input-style"
          />
        </label>
      </div>

      <label class="w-full">
        <span class="modal-span-label">Название</span>
        <input
          type="text"
          v-model.trim="formData.title"
          class="modal-input-style"
        />
      </label>

      <label class="w-48">
        <span class="modal-span-label"
          >Ответственные (можно выбрать несколько)</span
        >
        <select
          multiple
          v-model="formData.person"
          class="modal-input-style h-48"
        >
          <option>Иванов И.И.</option>
          <option>Сидоров С.С.</option>
          <option>Васильев В.В.</option>
          <option>Александров А.А.</option>
        </select>
      </label>
    </div>

    <div>
      <ActionButton @click="saveDoc" class="mr-5 mt-5">Сохранить</ActionButton>
      <CancelButton @click="closeModal" class="mr-5 mt-5">Отмена</CancelButton>
    </div>
  </ModalBox>
</template>
