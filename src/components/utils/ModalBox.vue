<script>
import { XIcon } from "@heroicons/vue/solid"

export default {
  emits: [
    'modalClose'
  ],
  components: { XIcon }
}
</script>

<template>
  <transition name="fade">
    <div
      @click.self="$emit('modalClose')"
      class="absolute z-40 inset-y-0 inset-x-0 flex justify-center items-center space-x-0 space-y-0 h-screen bg-slate-700 bg-opacity-50 overflow-hidden backdrop-blur-sm"
    >
      <div
        class="flex flex-col justify-center items-center w-96 rounded-md shadow-md bg-white border border-gray-100"
      >
        <button
          @click="$emit('modalClose')"
          class="p-1 m-1 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-md justify-self-start self-end"
        >
          <XIcon class="h-5 w-5" />
        </button>
        <div class="p-5">
          <p>Контент</p>
          <p>Контент</p>
          <p>Контент</p>
          <p>Контент</p>
          <p>Контент</p>
          <button
            class="p-2 w-32 text-gray-700 bg-gray-100 hover:bg-gray-200 shadow-sm rounded-md mt-4"
          >Да</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>