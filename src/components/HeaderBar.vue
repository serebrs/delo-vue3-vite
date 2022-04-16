<script>
// import ModalBoxButton from "./utils/ModalBoxButton.vue";
import DropdownMenuButton from "./utils/DropdownMenuButton.vue";

export default {
  emits: ["navMenuOpen"],
  props: {
    title: String,
  },
  components: {
    DropdownMenuButton, //, ModalBoxButton
  },
};
</script>

<template>
  <header
    class="w-full mt-1 mb-4 h-16 z-40 flex items-center justify-between px-6"
  >
    <div class="flex mr-6">
      <div class="block lg:hidden mr-6">
        <button
          @click="$emit('navMenuOpen')"
          class="p-2 rounded-full bg-white shadow text-gray-500 text-md active:translate-y-[1px]"
        >
          <MenuIcon class="w-5 h-5" />
        </button>
      </div>

      <Transition name="fade-title">
        <h1
          class="inline-block text-gray-600 text-2xl font-semibold"
          :key="title"
        >
          {{ title }}
        </h1>
      </Transition>
    </div>

    <div class="mx-4 h-16 flex items-center justify-end space-x-4">
      <!--<ModalBoxButton
        title="Добавить новую запись"
        info="Дополнительная информация"
        componentPath="docs/DocAddModalForm"
        @modalResponse="modalAction"
        class="flex p-2 items-center rounded-full text-gray-400 hover:text-green-700 bg-white shadow text-md active:translate-y-[1px]"
      >
        <PlusIcon class="w-5 h-5" />
      </ModalBoxButton> -->

      <router-view name="createButton" />

      <span class="w-1 h-8 rounded-lg bg-gray-200"></span>

      <img
        alt="Профиль"
        src="https://www.tailwind-kit.com/images/person/1.jpg"
        class="object-cover rounded-full h-9 w-9"
      />

      <DropdownMenuButton
        class="text-gray-500 hover:text-black text-sm px-5 py-2 rounded-full bg-white shadow active:translate-y-[1px]"
      >
        Админ
        <ChevronDownIcon class="w-5 h-5 inline-block" />
      </DropdownMenuButton>
    </div>
  </header>
</template>

<style scoped>
.fade-title-enter-active,
.fade-title-leave-active {
  transition: all 0.25s ease;
}

.fade-title-enter-from {
  opacity: 0;
  transform: translateY(-20px); /* 30px */
}
.fade-title-leave-to {
  display: none;
  transform: translateY(20px); /* -30px */
}
</style>
