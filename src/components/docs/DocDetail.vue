<script>
import ModalBox from "../../components/utils/ModalBox.vue";
import CancelButton from "../../components/buttons/modal/CancelButton.vue"; // TODO вынести ModalBox наружу. Как?

export default {
  props: ["id"], // $route.params.id
  data() {
    return {
      iframeActive: false,
    };
  },
  methods: {
    closeModal() {
      this.$router.push({
        name: "docs",
        query: this.$route.query,
        replace: true,
      });
    },
  },
  computed: {
    docPath() {
      return `http://localhost:3030/api/docs/${this.id}/download`;
    },
  },
  async mounted() {
    try {
      const res = await fetch(this.docPath);
      if (res.status != 200) {
        this.iframeActive = false;
        const json = await res.json();
        throw new Error(json.message);
      }
      this.iframeActive = true;
    } catch (e) {
      console.error(e.message);
      this.$showError("docs/download-fail");
    }
  },
  components: { ModalBox, CancelButton }, // TODO вынести ModalBox наружу. Как?
};
</script>

<template>
  <ModalBox @canceled="closeModal" width="lg" height="lg">
    <h1 class="text-2xl text-slate-800 font-semibold">Просмотр документа</h1>
    <iframe
      v-if="iframeActive"
      :src="docPath"
      class="w-full h-screen"
      frameborder="0"
    ></iframe>
    <div>
      <CancelButton @click="closeModal" class="mr-5 mt-5">Закрыть</CancelButton>
    </div>
  </ModalBox>
</template>
