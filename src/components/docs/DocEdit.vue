<script>
import ModalBox from "@/components/utils/ModalBox.vue"; // TODO вынести ModalBox наружу. Как?

export default {
  methods: {
    save() {
      // saveDataPromise.then(close); // TODO Сохранить данные через промис, потом закрыть
      this.close();
    },
    close() {
      this.$router.push({ name: 'docs', query: this.$route.query })
    }
  },
  components: { ModalBox } // TODO вынести ModalBox наружу. Как?
}
</script>

<template>
  <ModalBox>
    <p>Редактирование документа с Id: {{ $route.params.id }}</p>
    <button @click="save">Сохранить</button>
    <button @click="close">Х Закрыть</button>
  </ModalBox>
</template>