<script>
export default {
  props: {
    title: String,
    width: String,
    backRouteName: {
      type: String,
      default: "home"
    }
  },
  methods: {
    closeModal() {
      this.$router.push({ name: this.backRouteName, query: this.$route.query, replace: true })
    },
    keydown(e) { // TODO отключить нажатия клавиш под модальным окном
      if (e.code === 'Escape') this.closeModal();
    }
  },
  computed: {
    widthClass() { // TODO добавить еще большой размер для просмотра документа
      return (this.width === 'sm') ? 'w-[32rem]' : 'w-[32rem] sm:w-full sm:max-w-3xl';
    }
  },
  mounted() {
    console.log('Modal addEscListener');
    window.addEventListener('keydown', this.keydown)
  },
  unmounted() {
    console.log('Modal removeEscListener');
    window.removeEventListener('keydown', this.keydown)
  }
}
</script>

<template>
  <div
    @click.self="closeModal"
    class="absolute overflow-y-auto z-40 inset-y-0 inset-x-0 flex flex-col justify-start items-center space-x-0 space-y-0 h-screen bg-slate-700 bg-opacity-50 overflow-hidden backdrop-blur-sm"
  >
    <div
      class="relative p-5 sm:p-10 rounded-md my-10 shadow-md bg-white border border-gray-100"
      :class="widthClass"
    >
      <button
        @click="closeModal"
        class="absolute right-0 top-0 p-1 m-1 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-md"
      >
        <XIcon class="h-5 w-5" />
      </button>

      <div class="flex flex-col justify-start items-start space-y-8">
        <h1 class="text-2xl text-slate-800 font-semibold">{{ title }}</h1>
        <slot />
      </div>
    </div>
  </div>
</template>
