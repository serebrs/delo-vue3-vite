<script>
import ModalBox from "@/components/utils/ModalBox.vue"; // TODO вынести ModalBox наружу. Как?

export default {
  methods: {
    close() {
      this.$router.push({ name: 'docs', query: this.$route.query })
    }
  },
  components: { ModalBox } // TODO вынести ModalBox наружу. Как?
}
</script>

<template>
  <ModalBox>
    <p>Просмотр документа с Id: {{ $route.params.id }}</p>
    <button @click="close">Х Закрыть</button>
  </ModalBox>
</template>