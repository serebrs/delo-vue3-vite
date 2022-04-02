<script>
import ModalBox from "@/components/utils/ModalBox.vue"; // TODO вынести ModalBox наружу. Как?

export default {
  methods: {
    deleteDoc() {
      // delete Promise.then(goBack);
      console.log(`Удаление документа № ${this.$route.params.id}`); // TODO Удалять промисом -> then закрывать окно
      this.goBack();
    },
    goBack() {
      this.$router.push({ name: 'docs', query: this.$route.query })
    }
  },
  components: { ModalBox } // TODO вынести ModalBox наружу. Как?
}
</script>

<template>
  <ModalBox width="sm">
    <p>Удаление документа с Id: {{ $route.params.id }}</p>
    <button @click="deleteDoc">Удалить</button>
    <button @click="goBack">Х Закрыть</button>
  </ModalBox>
</template>