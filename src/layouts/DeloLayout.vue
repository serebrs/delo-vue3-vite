<script>
import NavigationMenu from "@/components/NavigationMenu.vue";
import HeaderBar from "@/components/HeaderBar.vue";
import LogoImage from "@/components/LogoImage.vue";

export default {
  data() {
    return {
      navLinks: [
        {
          id: "1",
          title: "Документы",
          to: { name: "docs" },
          icon: { type: "solid", name: "DocumentTextIcon" },
        },
        {
          id: "2",
          title: "Задачи",
          to: { name: "tasks" },
          icon: { type: "solid", name: "ClipboardCheckIcon" },
        },
        {
          id: "3",
          title: "Статистика",
          to: { name: "stats" },
          icon: { type: "solid", name: "ChartSquareBarIcon" },
        },
      ],
      isNavigationActive: false,
    };
  },
  computed: {
    title() {
      return this.$route.meta.title || "";
    },
  },
  components: {
    NavigationMenu,
    HeaderBar,
    LogoImage,
  },
};
</script>

<template>
  <div
    class="bg-gray-100 dark:bg-gray-800 h-screen overflow-y-hidden overflow-x-auto relative flex items-start justify-start flex-nowrap"
  >
    <!-- Основной блок слева с навигационным меню -->
    <div
      class="flex-none h-screen hidden lg:block lg:w-28 shadow-lg bg-gray-700 shadow-gray-500 select-none"
    >
      <LogoImage />
      <NavigationMenu :navLinks="navLinks" />
    </div>

    <Transition name="navigation">
      <div
        v-show="isNavigationActive"
        @mouseleave="isNavigationActive = false"
        class="absolute z-30 left-0 top-0 h-screen w-28 flex flex-col shadow-lg bg-gray-700 shadow-gray-500 select-none"
      >
        <a
          href="#"
          @click.prevent="isNavigationActive = false"
          class="self-end m-2 text-gray-500 block rounded-md"
        >
          <XIcon class="h-5 w-5" />
        </a>
        <NavigationMenu
          :navLinks="navLinks"
          @navMenuClose="isNavigationActive = false"
        />
      </div>
    </Transition>

    <!-- Основной блок справа с заголовком и основным контентом -->
    <div class="flex-grow shrink-0 w-[58rem]">
      <HeaderBar :title="title" @navMenuOpen="isNavigationActive = true" />

      <router-view v-slot="{ Component }">
        <transition name="fade-delo">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style scoped>
.navigation-enter-active,
.navigation-leave-active {
  transition: opacity 0.3s ease;
  transition: transform 0.3s ease;
}

.navigation-enter-from,
.navigation-leave-to {
  opacity: 0;
  transform: translateX(-200px);
}

.fade-delo-enter-active,
.fade-delo-leave-active {
  transition: all 0.25s ease;
}

.fade-delo-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}
.fade-delo-leave-to {
  display: none;
  transform: translateY(20px);
}
</style>
