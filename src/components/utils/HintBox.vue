<script>
export default {
  props: {
    hintText: String,
  },
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<script setup>
// import { ref } from 'vue';
// defineProps({
//   hintText: String
// })
// const isActive = ref(false);
</script>

<template>
  <div
    class="relative"
    @mouseover="isActive = true"
    @mouseleave="isActive = false"
  >
    <slot />
    <transition name="fade-hint">
      <div
        v-show="isActive"
        class="absolute inset-x-0 bottom-[120%] z-30 w-fit py-1 px-2 text-[0.75rem] text-center whitespace-normal leading-3 text-white bg-gray-600 shadow-md rounded-md"
      >
        {{ hintText }}
      </div>
    </transition>
  </div>
</template>

<style scoped>
.fade-hint-enter-active,
.fade-hint-leave-active {
  transition: opacity 0.1s ease;
  transition: transform 0.1s;
}

.fade-hint-enter-from,
.fade-hint-leave-to {
  opacity: 0;
  transform: translateY(5px);
}
</style>
