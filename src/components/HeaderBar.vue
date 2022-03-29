<template>
  <header class="w-full mt-1 mb-4 h-16 z-40 flex items-center justify-between px-6">
    <div class="flex mr-6">
      <div class="block lg:hidden mr-6">
        <button
          @click="$emit('navMenuOpen')"
          class="p-2 rounded-full bg-white shadow text-gray-500 text-md active:translate-y-[1px]"
        >
          <MenuIcon class="w-5 h-5" />
        </button>
      </div>
      <h1 class="text-gray-600 text-2xl font-semibold">{{ title }}</h1>
    </div>

    <div class="mx-4 h-16 flex items-center justify-end space-x-4">
      <button
        @click="$emit('modalOpen')"
        class="flex p-2 items-center rounded-full text-gray-400 hover:text-green-700 bg-white shadow text-md active:translate-y-[1px]"
      >
        <PlusIcon class="w-5 h-5" />
      </button>

      <span class="w-1 h-8 rounded-lg bg-gray-200"></span>

      <img
        alt="Профиль"
        src="https://www.tailwind-kit.com/images/person/1.jpg"
        class="object-cover rounded-full h-9 w-9"
      />

      <DropdownMenu>
        <button
          class="text-gray-500 hover:text-black text-sm px-5 py-2 rounded-full bg-white shadow active:translate-y-[1px]"
        >
          Админ
          <ChevronDownIcon class="w-5 h-5 inline-block" />
        </button>
      </DropdownMenu>
    </div>
  </header>
</template>

<script>

import { MenuIcon, PlusIcon, ChevronDownIcon } from "@heroicons/vue/solid";
import DropdownMenu from "./utils/DropdownMenu.vue";

export default {
  emits: [
    "navMenuOpen",
    "modalOpen"
  ],
  props: {
    title: String
  },
  components: {
    MenuIcon,
    PlusIcon,
    ChevronDownIcon,
    DropdownMenu
  }
}
</script>