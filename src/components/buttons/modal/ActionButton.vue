<script>
import BaseButton from "@/components/buttons/modal/BaseButton.vue";
export default {
  components: { BaseButton },
};
</script>
<template>
  <BaseButton class="!text-white bg-green-500 hover:bg-green-600">
    <slot />
  </BaseButton>
</template>
