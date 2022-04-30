<script>
import BaseButton from "../../../components/buttons/modal/BaseButton.vue";
export default {
  components: { BaseButton },
};
</script>
<template>
  <BaseButton v-focus> <slot /> </BaseButton>
</template>
