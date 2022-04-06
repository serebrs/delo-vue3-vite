<script>
import ModalBox from "@/components/utils/ModalBox.vue"; // TODO вынести ModalBox наружу. Как?

export default {
  props: ['id'],  // $route.params.id
  methods: {
    saveDoc() {
      // save Promise.then(goBack);
      console.log(`Сохранение отредактированного документа № ${this.id}`); // TODO Сохранять промисом -> then закрывать окно
      this.goBack();
    },
    goBack() {
      // this.$router.go(-1)
      this.$router.push({ name: 'docs', query: this.$route.query, replace: true })
    }
  },
  components: { ModalBox } // TODO вынести ModalBox наружу. Как?
}
</script>

<template>
  <ModalBox backRouteName="docs">
    <h1 class="text-2xl text-slate-800 font-semibold">Редактирование документа</h1>
    <p>Id: {{ id }}</p>

    <div>
      <button
        @click="saveDoc"
        class="p-2 mr-5 mt-5 w-32 text-gray-700 bg-gray-100 hover:bg-gray-200 shadow-sm rounded-md"
      >Сохранить</button>
      <button
        @click="goBack"
        class="p-2 mr-5 mt-5 w-32 text-gray-700 bg-gray-100 hover:bg-gray-200 shadow-sm rounded-md"
      >Отмена</button>
    </div>
  </ModalBox>
</template>