<script>
import { v4 as uuidv4 } from 'uuid';
import ModalBox from "@/components/utils/ModalBox.vue"; // TODO вынести ModalBox наружу. Как?

export default {
  props: ['id'],  // $route.params.id
  methods: {
    async deleteDoc() {
      try {
        await console.log(`Удаление документа № ${this.id}`);
        this.$route.query.message = 'deleted';      
      } catch (e) {
        this.$route.query.message = 'err-not-deleted';
      }
      this.$route.query.upd = uuidv4(); // TODO добавлять не в query, а в hash!!! См. DocList
      this.closeModal();
    },
    closeModal() {
      this.$router.push({ name: 'docs', query: this.$route.query, replace: true })
    }
  },
  mounted() {
    this.$route.query.message = 'delete-canceled';
  },
  components: { ModalBox } // TODO вынести ModalBox наружу. Как?
}
</script>

<template>
  <ModalBox width="sm" @canceled="closeModal">
    <h1 class="text-2xl text-slate-800 font-semibold">Удаление документа</h1>
    <p>Id: {{ id }}</p>

    <div>
      <button
        @click="deleteDoc"
        class="p-2 mr-5 mt-5 w-32 text-gray-700 bg-gray-100 hover:bg-gray-200 shadow-sm rounded-md"
      >Удалить</button>
      <button
        @click="closeModal"
        class="p-2 mr-5 mt-5 w-32 text-gray-700 bg-gray-100 hover:bg-gray-200 shadow-sm rounded-md"
      >Отмена</button>
    </div>
  </ModalBox>
</template>