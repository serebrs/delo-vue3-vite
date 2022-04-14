<script>
import DocsList from "@/components/docs/DocsList.vue";
import DocsFilters from "@/components/docs/DocsFilters.vue";

export default {
  // beforeRouteEnter(to, from, next) {
  //   next(vm => {
  //     if (from.name === 'login') vm.$showMessage('auth/login');
  //   })
  // },
  components: { DocsList, DocsFilters }
}
</script>

<template>
  <main class="overflow-auto h-screen pb-24 px-6">
    <DocsFilters />
    <DocsList />

    <router-view v-slot="{ Component }">
      <teleport to="body">
        <transition name="fade-modal">
          <component :is="Component" />
        </transition>
      </teleport>
    </router-view>
  </main>
</template>

<style scoped>
.fade-modal-enter-active,
.fade-modal-leave-active {
  transition: opacity 0.3s ease;
}

.fade-modal-enter-from,
.fade-modal-leave-to {
  opacity: 0;
}
</style>