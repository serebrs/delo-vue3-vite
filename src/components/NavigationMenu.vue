<script>
import { ChartSquareBarIcon, ClipboardCheckIcon, DocumentTextIcon } from "@heroicons/vue/solid"; // TODO сделать импорт всех иконок глобально: Solid и Outline

export default {
  emits: [
    "navMenuClose"
  ],
  props: {
    navLinks: Array
  },
  components: {
    ChartSquareBarIcon, ClipboardCheckIcon, DocumentTextIcon
  }
}
</script>

<template>
  <nav id="nav-menu" class="mt-7 select-none">
    <RouterLink
      v-for="link in navLinks"
      :key="link.id"
      :to="{ name: link.to.name }"
      active-class="nav-menu-active"
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
