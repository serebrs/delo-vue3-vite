<script>
import { XIcon } from "@heroicons/vue/solid"

export default {
  emits: [
    "getAnswer"
  ],
  props: {
    question: String
  },
  data() {
    return {
      isDialogBoxActive: false
    }
  },
  inheritAttrs: false,
  components: { XIcon }
}
</script>

<template>
  <button @click="isDialogBoxActive = true" v-bind="$attrs">
    <slot />
  </button>

  <teleport to="body">
    <transition name="fade">
      <div
        v-if="isDialogBoxActive"
        @click.self="isDialogBoxActive = false"
        class="absolute z-40 inset-y-0 inset-x-0 flex justify-center items-center space-x-0 space-y-0 h-screen bg-slate-700 bg-opacity-50 overflow-hidden backdrop-blur-sm"
      >
        <div
          class="flex flex-col justify-center items-center w-96 rounded-md shadow-md bg-white border border-gray-100"
        >
          <button
            @click="isDialogBoxActive = false"
            class="p-1 m-1 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-md justify-self-start self-end"
          >
            <XIcon class="h-5 w-5" />
          </button>
          <div class="p-5">
            <p class="p-3">{{ question }}</p>
            <button
              @click="isDialogBoxActive = false; $emit('getAnswer')"
              class="p-2 m-2 w-32 text-gray-700 bg-gray-100 hover:bg-gray-200 shadow-sm rounded-md mt-4"
            >Да</button>
            <button
              @click="isDialogBoxActive = false"
              class="p-2 m-2 w-32 text-gray-700 bg-gray-100 hover:bg-gray-200 shadow-sm rounded-md mt-4"
            >Отмена</button>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
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