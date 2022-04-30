<script>
import BaseButton from "@/components/buttons/modal/BaseButton.vue";
export default {
  components: { BaseButton },
};
</script>
<template>
  <BaseButton class="!text-white bg-red-500 hover:bg-red-600">
    <slot />
  </BaseButton>
</template>
