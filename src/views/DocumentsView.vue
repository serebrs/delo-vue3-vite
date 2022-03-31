<script>
import DocumentsList from "@/components/documents/DocumentsList.vue";
import DocumentsFilters from "@/components/documents/DocumentsFilters.vue";

export default {
  data() {
    return {
    }
  },
  methods: {
    updateDocumentsList(filters) {
      console.log(JSON.stringify(filters));
    }
  },
  components: { DocumentsList, DocumentsFilters }
}
</script>

<template>
  <main class="overflow-auto h-screen pb-24 px-6">
    <DocumentsFilters @filtersUpdate="updateDocumentsList" />
    <DocumentsList />
  </main>
</template>
