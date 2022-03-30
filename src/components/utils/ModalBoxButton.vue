<script>
import { XIcon } from "@heroicons/vue/solid"

export default {
  emits: [
    'getModalAnswer'
  ],
  props: {
    title: String,
    content: String
  },
  data() {
    return {
      isModalBoxActive: false
    }
  },
  inheritAttrs: false,
  components: { XIcon }
}
</script>

<template>
  <button @click="isModalBoxActive = true" v-bind="$attrs">
    <slot />
  </button>

  <teleport to="body">
    <transition name="fade">
      <div
        v-if="isModalBoxActive"
        @click.self="isModalBoxActive = false"
        class="absolute z-40 inset-y-0 inset-x-0 flex justify-center items-center space-x-0 space-y-0 h-screen bg-slate-700 bg-opacity-50 overflow-hidden backdrop-blur-sm"
      >
        <div class="relative w-5/6 p-10 rounded-md shadow-md bg-white border border-gray-100">
          <button
            @click="isModalBoxActive = false"
            class="absolute right-0 top-0 p-1 m-1 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-md"
          >
            <XIcon class="h-5 w-5" />
          </button>

          <div
            class="flex flex-col justify-start items-start space-y-8"
          >
            <h1 class="text-2xl text-slate-800 font-semibold">{{ title }}</h1>
            <div>{{ content }}</div>
            <div>
              <button
                @click="isModalBoxActive = false; $emit('getModalAnswer')"
                class="p-2 mr-5 mt-5 w-32 text-gray-700 bg-gray-100 hover:bg-gray-200 shadow-sm rounded-md"
              >Сохранить</button>
              <button
                @click="isModalBoxActive = false"
                class="p-2 mr-5 mt-5 w-32 text-gray-700 bg-gray-100 hover:bg-gray-200 shadow-sm rounded-md"
              >Отмена</button>
            </div>
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