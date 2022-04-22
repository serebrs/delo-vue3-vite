<script>
export default {
  emits: ["canceled"],
  props: {
    width: String,
  },
  methods: {
    pressedEsc(e) {
      if (e.code === "Escape") this.$emit("canceled");
    },
    trapFocus(e) {
      if (e.code === "Tab") {
        const focusable = document
          .querySelector("#modal")
          .querySelectorAll("input,button,select,textarea");
        if (focusable.length) {
          let first = focusable[0];
          let last = focusable[focusable.length - 1];
          if (e.shiftKey) {
            if (e.target === first) {
              last.focus();
              e.preventDefault();
            }
          } else if (e.target === last) {
            first.focus();
            e.preventDefault();
          }
        }
      }
    },
  },
  computed: {
    widthClass() {
      // TODO добавить еще большой размер для просмотра документа
      return this.width === "sm"
        ? "w-[32rem]"
        : "w-[32rem] sm:w-full sm:max-w-3xl";
    },
  },
  mounted() {
    console.log("Modal addEscListener");
    window.addEventListener("keydown", this.pressedEsc);
    window.addEventListener("keydown", this.trapFocus);
  },
  unmounted() {
    console.log("Modal removeEscListener");
    window.removeEventListener("keydown", this.pressedEsc);
    window.removeEventListener("keydown", this.trapFocus);
  },
};
</script>

<template>
  <div
    @click.self="$emit('canceled')"
    class="absolute overflow-hidden overflow-y-auto z-40 inset-y-0 inset-x-0 flex flex-col justify-start items-center space-x-0 space-y-0 h-screen bg-slate-700 bg-opacity-50 backdrop-blur-sm"
  >
    <div
      id="modal"
      role="dialog"
      class="relative p-5 sm:p-10 rounded-md my-10 shadow-md bg-white border border-gray-100"
      :class="widthClass"
    >
      <button
        @click="$emit('canceled')"
        class="absolute right-0 top-0 p-1 m-1 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-md"
      >
        <XIcon class="h-5 w-5" />
      </button>

      <div class="flex flex-col justify-start items-start space-y-8">
        <slot />
      </div>
    </div>
  </div>
</template>
