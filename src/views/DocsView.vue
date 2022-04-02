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
    <RouterView />
  </main>
</template>
