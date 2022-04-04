<script>
import { defineAsyncComponent } from 'vue'

export default {
  emits: [
    'modalResponse'
  ],
  props: {
    title: String,
    info: String,
    componentPath: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isModalBoxActive: false,
      formData: {}
    }
  },
  methods: {
    keydown(e) { // TODO отключить нажатия клавиш под модальным окном
      if (e.code === 'Escape') this.isModalBoxActive = false;
    },
    updateFormData(data) {
      this.formData = data;
    },
    sendModalData() {
      this.isModalBoxActive = false; 
      this.$emit('modalResponse', this.formData);
    }
  },
  computed: {
    innerComponent() {
      return defineAsyncComponent(() => import(`../${this.componentPath}.vue`))
    }
  },
  watch: {
    isModalBoxActive(newVal, oldVal) {
      if (newVal) {
        console.log('show');
        window.addEventListener('keydown', this.keydown)
      }
      else {
        console.log('hide');
        window.removeEventListener('keydown', this.keydown)
      }
    }
  },
  inheritAttrs: false,
  components: {
    //DocumentsAddForm: defineAsyncComponent(() => import('@/components/documents/DocumentsAddForm.vue')), // можно так, но тогда <component :is="innerComponentName">
  }
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
        class="absolute overflow-y-auto z-40 inset-y-0 inset-x-0 flex flex-col justify-start items-center space-x-0 space-y-0 h-screen bg-slate-700 bg-opacity-50 overflow-hidden backdrop-blur-sm"
      >
        <div
          class="relative w-[32rem] sm:w-full sm:max-w-3xl p-5 sm:p-10 rounded-md my-10 shadow-md bg-white border border-gray-100"
        >
          <button
            @click="isModalBoxActive = false"
            class="absolute right-0 top-0 p-1 m-1 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-md"
          >
            <XIcon class="h-5 w-5" />
          </button>

          <div class="flex flex-col justify-start items-start space-y-8">
            <h1 class="text-2xl text-slate-800 font-semibold">{{ title }}</h1>
            <div>{{ info }}</div>

            <component :is="innerComponent" @formUpdate="updateFormData" />

            <div>
              <button
                @click="sendModalData"
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