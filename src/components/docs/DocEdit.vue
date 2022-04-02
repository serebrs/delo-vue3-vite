<script>
import ModalBox from "@/components/utils/ModalBox.vue"; // TODO вынести ModalBox наружу. Как?

export default {
  methods: {
    saveDoc() {
      // save Promise.then(goBack);
      console.log(`Сохранение отредактированного документа № ${this.$route.params.id}`); // TODO Сохранять промисом -> then закрывать окно
      this.$router.push({ name: 'docs', query: this.$route.query, replace: true })
    },
    goBack() {
      this.$router.go(-1)
    }
  },
  components: { ModalBox } // TODO вынести ModalBox наружу. Как?
}
</script>

<template>
  <ModalBox title="Редактирование документа">
    <p>Id: {{ $route.params.id }}</p>

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