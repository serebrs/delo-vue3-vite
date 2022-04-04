<script>
export default {
  methods: {
    add() {
      this.$router.push({ path: this.$route.path + '/add', query: this.$route.query })
    }
  }
}
</script>
<template>
  <button
    @click="add"
    class="flex p-2 items-center rounded-full text-gray-400 hover:text-green-700 bg-white shadow text-md active:translate-y-[1px]"
  >
    <PlusIcon class="w-5 h-5" />
  </button>
</template>