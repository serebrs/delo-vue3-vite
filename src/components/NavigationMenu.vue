<script>
export default {
  emits: [
    "navMenuClose"
  ],
  props: {
    navLinks: Array
  },
}
</script>

<template>
  <nav id="nav-menu" class="mt-7 select-none">
    <RouterLink
      v-for="link in navLinks"
      :key="link.id"
      :to="{ name: link.to.name }"
      class="text-gray-400 flex flex-col rounded-md items-center justify-center m-3 transition-colors duration-200 hover:text-gray-300 hover:bg-gray-600"
      active-class="text-gray-300 bg-gray-600"
    >
      <button
        @click="$emit('navMenuClose')"
        class="flex flex-col justify-center items-center p-2 h-full w-full"
      >
        <component :is="link.icon.name" class="h-4 w-4" />
        <span class="mx-2 text-xs font-normal">{{ link.title }}</span>
      </button>
    </RouterLink>
  </nav>
</template>
