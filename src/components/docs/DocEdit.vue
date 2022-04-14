<script>
import { useDocsFiltersStore } from '@/stores/docs.filters'
import ModalBox from "@/components/utils/ModalBox.vue"; // TODO вынести ModalBox наружу. Как?

export default {
  setup() {
    return {
      filtersStore: useDocsFiltersStore(),
    }
  },
  props: ['id'],  // $route.params.id
  data() {
    return {
      formData: {
        type: "in",
        num: "",
        date: (new Date()).toLocaleDateString('ru-RU').split('.').reverse().join('-'),
        title: "",
        person: []
      }
    }
  },
  methods: {
    async saveDoc() {
      try {
        await console.log(`Сохранение отредактированного документа № ${this.id}: ${JSON.stringify(this.formData)}`); // TODO делать Object.assing здесь и передавать в функцию копию объекта
        this.$showMessage('docs/edited');
        this.$router.push({ name: 'docs', query: this.$route.query, replace: true })
        this.filtersStore.timestamp = Date.now();
      }
      catch (e) {
        this.$showError('docs/edit-fail');
      }
    },
    closeModal() {
      this.$showMessage('docs/edit-canceled');
      this.$router.push({ name: 'docs', query: this.$route.query, replace: true })
    }
  },
  components: { ModalBox } // TODO вынести ModalBox наружу. Как?
}
</script>

<template>
  <ModalBox @canceled="closeModal">
    <h1 class="text-2xl text-slate-800 font-semibold">Редактирование документа</h1>
    <p>Id: {{ id }}</p>

    <div>
      <button @click="saveDoc"
        class="p-2 mr-5 mt-5 w-32 text-gray-700 bg-gray-100 hover:bg-gray-200 shadow-sm rounded-md">Сохранить</button>
      <button @click="closeModal"
        class="p-2 mr-5 mt-5 w-32 text-gray-700 bg-gray-100 hover:bg-gray-200 shadow-sm rounded-md">Отмена</button>
    </div>
  </ModalBox>
</template>