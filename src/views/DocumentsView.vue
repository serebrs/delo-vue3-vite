<template>
  <main class="overflow-auto h-screen pb-24 px-6">
    <DocumentsFilters @filtersUpdate="updateDocumentsList" />
    <div>{{ filtersContent }}</div>
    <DocumentsList />
  </main>
</template>

<script>
import DocumentsList from "@/components/documents/DocumentsList.vue";
import DocumentsFilters from "@/components/documents/DocumentsFilters.vue";

export default {
  data() {
    return {
      filtersContent: "before"
    }
  },
  methods: {
    updateDocumentsList(filters) {
      this.filtersContent = "after: " + JSON.stringify(filters);
    }
  },
  components: { DocumentsList, DocumentsFilters }
}
</script>