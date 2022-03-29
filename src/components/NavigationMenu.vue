<template>
  <nav id="nav-menu" class="mt-7 select-none">
    <router-link
      v-for="link in navLinks"
      :key="link.id"
      :to="link.url"
      active-class="nav-menu-active"
    >
      <button @click="$emit('navMenuClose')" class="flex flex-col justify-center items-center p-2 h-full w-full">
        <component :is="link.icon.name" class="h-4 w-4" />
        <span class="mx-2 text-xs font-normal">{{ link.title }}</span>
      </button>
    </router-link>
  </nav>
</template>

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
