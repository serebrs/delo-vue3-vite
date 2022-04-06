<script>
import ModalBox from "@/components/utils/ModalBox.vue"; // TODO вынести ModalBox наружу. Как?

export default {
  props: ['id'],  // $route.params.id
  methods: {
    closeModal() {
      this.$router.push({ name: 'docs', query: this.$route.query, replace: true })
    }
  },
  components: { ModalBox } // TODO вынести ModalBox наружу. Как?
}
</script>

<template>
  <ModalBox @canceled="closeModal">
    <h1 class="text-2xl text-slate-800 font-semibold">Просмотр документа</h1>
    <p>Id: {{ id }}</p>
    <div>
      <button
        @click="closeModal"
        class="p-2 mr-5 mt-5 w-32 text-gray-700 bg-gray-100 hover:bg-gray-200 shadow-sm rounded-md"
      >Закрыть</button>
    </div>
  </ModalBox>
</template>