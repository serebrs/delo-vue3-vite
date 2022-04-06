<script>
import DocsList from "@/components/docs/DocsList.vue";
import DocsFilters from "@/components/docs/DocsFilters.vue";

export default {
  methods: {
    updateDocumentsList(filters) {
      console.log(JSON.stringify(filters)); // TODO сериализовывать фильтры в query и router.push вместе c новым query | или в состояние pinia сохранить?

    }
  },
  components: { DocsList, DocsFilters }
}
</script>

<template>
  <main class="overflow-auto h-screen pb-24 px-6">
    <DocsFilters @filtersUpdate="updateDocumentsList" />
    <DocsList />

    <router-view v-slot="{ Component }">
      <teleport to="body">
        <transition name="fade-modal">
          <component :is="Component" />
        </transition>
      </teleport>
    </router-view>
  </main>
</template>

<style scoped>
.fade-modal-enter-active,
.fade-modal-leave-active {
  transition: opacity 0.3s ease;
}

.fade-modal-enter-from,
.fade-modal-leave-to {
  opacity: 0;
}
</style>