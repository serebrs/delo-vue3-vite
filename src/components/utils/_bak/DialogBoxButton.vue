<script>
export default {
  emits: ["dialogAnswered"],
  props: {
    title: String,
    question: String,
  },
  data() {
    return {
      isDialogBoxActive: false,
    };
  },
  methods: {
    keydown(e) {
      // TODO отключить нажатия клавиш под модальным окном
      if (e.code === "Escape") this.isDialogBoxActive = false;
    },
  },
  watch: {
    isDialogBoxActive(newVal) {
      if (newVal) {
        console.log("show");
        window.addEventListener("keydown", this.keydown);
      } else {
        console.log("hide");
        window.removeEventListener("keydown", this.keydown);
      }
    },
  },
  inheritAttrs: false,
};
</script>

<template>
  <button @click.stop="isDialogBoxActive = true" v-bind="$attrs">
    <slot />
  </button>

  <teleport to="body">
    <transition name="fade">
      <div
        v-if="isDialogBoxActive"
        @click.self="isDialogBoxActive = false"
        class="absolute z-40 inset-y-0 inset-x-0 flex flex-col justify-start items-center space-x-0 space-y-0 h-screen bg-slate-700 bg-opacity-50 overflow-hidden backdrop-blur-sm"
      >
        <div
          class="relative w-96 p-6 translate-y-1/2 rounded-md shadow-md bg-white border border-gray-100"
        >
          <button
            @click="isDialogBoxActive = false"
            class="absolute right-0 top-0 p-1 m-1 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-md justify-self-start self-end"
          >
            <XIcon class="h-5 w-5" />
          </button>

          <div class="flex flex-col justify-start items-start space-y-5">
            <h1 class="text-2xl text-slate-800 font-semibold">{{ title }}</h1>
            <div>{{ question }}</div>
            <div class="self-center">
              <button
                @click="
                  isDialogBoxActive = false;
                  $emit('dialogAnswered');
                "
                class="p-2 mr-5 mt-5 w-32 text-gray-700 bg-gray-100 hover:bg-gray-200 shadow-sm rounded-md"
              >
                Да
              </button>
              <button
                @click="isDialogBoxActive = false"
                class="p-2 mt-5 w-32 text-gray-700 bg-gray-100 hover:bg-gray-200 shadow-sm rounded-md"
              >
                Отмена
              </button>
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
