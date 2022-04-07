<script>
import { v4 as uuidv4 } from 'uuid';
import ModalBox from "@/components/utils/ModalBox.vue"; // TODO вынести ModalBox наружу. Как?

export default {
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
      await console.log(`Сохранение отредактированного документа № ${this.id}: ${JSON.stringify(this.formData)}`); // TODO Сохранять промисом -> then закрывать окно
      this.$route.query.upd = uuidv4();
      this.closeModal();
    },
    closeModal() {
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
      <button
        @click="saveDoc"
        class="p-2 mr-5 mt-5 w-32 text-gray-700 bg-gray-100 hover:bg-gray-200 shadow-sm rounded-md"
      >Сохранить</button>
      <button
        @click="closeModal"
        class="p-2 mr-5 mt-5 w-32 text-gray-700 bg-gray-100 hover:bg-gray-200 shadow-sm rounded-md"
      >Отмена</button>
    </div>
  </ModalBox>
</template>