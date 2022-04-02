<script>
import { XIcon } from "@heroicons/vue/solid"

export default { // TODO добавить входной параметр: "размер окна"
  methods: {
    closeModal() {
      this.$router.go(-1)
    },
    keydown(e) { // TODO отключить нажатия клавиш под модальным окном
      if (e.code === 'Escape') this.closeModal();
    }
  },
  mounted() {
    console.log('Modal addEscListener');
    window.addEventListener('keydown', this.keydown)
  },
  unmounted() {
    console.log('Modal removeEscListener');
    window.removeEventListener('keydown', this.keydown)
  },
  components: { XIcon }
}
</script>

<template>
  <teleport to="body">
    <transition name="fade">
      <div
        @click.self="closeModal"
        class="absolute overflow-y-auto z-40 inset-y-0 inset-x-0 flex flex-col justify-start items-center space-x-0 space-y-0 h-screen bg-slate-700 bg-opacity-50 overflow-hidden backdrop-blur-sm"
      >
        <div
          class="relative w-[32rem] sm:w-full sm:max-w-3xl p-5 sm:p-10 rounded-md my-10 shadow-md bg-white border border-gray-100"
        >
          <button
            @click="closeModal"
            class="absolute right-0 top-0 p-1 m-1 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-md"
          >
            <XIcon class="h-5 w-5" />
          </button>

          <div class="flex flex-col justify-start items-start space-y-8">
            <slot />
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