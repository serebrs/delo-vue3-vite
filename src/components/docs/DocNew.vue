<script>
import ModalBox from "@/components/utils/ModalBox.vue"; // TODO вынести ModalBox наружу. Как?

export default {
  methods: {
    saveDoc() {
      // save Promise.then(goBack); // TODO Сохранить через промис, потом закрыть
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
  <ModalBox>
    <p>Создание документа</p>
    <button @click="saveDoc">Сохранить</button>
    <button @click="goBack">Х Закрыть</button>
  </ModalBox>
</template>