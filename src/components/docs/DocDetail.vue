<script>
import ModalBox from "@/components/utils/ModalBox.vue";
import CancelButton from "@/components/buttons/modal/CancelButton.vue"; // TODO вынести ModalBox наружу. Как?

export default {
  props: ["id"], // $route.params.id
  methods: {
    closeModal() {
      this.$router.push({
        name: "docs",
        query: this.$route.query,
        replace: true,
      });
    },
  },
  components: { ModalBox, CancelButton }, // TODO вынести ModalBox наружу. Как?
};
</script>

<template>
  <ModalBox @canceled="closeModal">
    <h1 class="text-2xl text-slate-800 font-semibold">Просмотр документа</h1>
    <p>Просмотр документа: {{ id }}</p>
    <div>
      <CancelButton @click="closeModal" class="mr-5 mt-5">Закрыть</CancelButton>
    </div>
  </ModalBox>
</template>
