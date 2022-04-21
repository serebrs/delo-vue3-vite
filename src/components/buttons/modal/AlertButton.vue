<script>
import BaseButton from "@/components/buttons/modal/BaseButton.vue";
export default {
  components: { BaseButton },
};
</script>
<template>
  <BaseButton class="bg-red-300"> <slot /> </BaseButton>
</template>
