<script>
import AuthLayout from "@/layouts/AuthLayout.vue";
import MainLayout from "@/layouts/MainLayout.vue";
import EmptyLayout from "@/layouts/EmptyLayout.vue";
//import { RouterLink, RouterView } from 'vue-router'

export default {
  name: "App",
  computed: {
    layout() {
      return (this.$route.meta.layout || "Empty") + "Layout"
    }
  },
  components: {
    AuthLayout, MainLayout, EmptyLayout
  }
}
</script>

<template>
  <component :is="layout" />
</template>
