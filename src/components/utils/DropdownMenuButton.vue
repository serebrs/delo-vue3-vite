<script>
import { UserIcon } from "@heroicons/vue/solid";
import { LogoutIcon } from "@heroicons/vue/outline";

export default {
  data() {
    return {
      isDropdownMenuActive: false
    }
  },
  inheritAttrs: false,
  components: {
    UserIcon, LogoutIcon
  }
}
</script>

<template>
  <div class="relative py-1" @mouseleave="isDropdownMenuActive = false">
    <button @click="isDropdownMenuActive = true" v-bind="$attrs">
      <slot />
    </button>
    <transition name="drop">
      <div
        v-show="isDropdownMenuActive"
        class="absolute z-50 origin-top-right right-0 py-1 mt-1 w-32 rounded-md shadow-md bg-white ring-1 ring-black ring-opacity-5"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <RouterLink
          to="/login"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem"
        >
          <div class="flex flex-row justify-start items-center">
            <div class="flex-none w-6">
              <UserIcon class="w-4 h-4" />
            </div>
            <div class="grow">Профиль</div>
          </div>
        </RouterLink>

        <RouterLink
          to="/logout"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem"
        >
          <div class="flex flex-row justify-start items-center">
            <div class="flex-none w-6 justify-center items-center">
              <LogoutIcon class="w-4 h-4" />
            </div>
            <div class="grow">Выйти</div>
          </div>
        </RouterLink>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.drop-enter-active,
.drop-leave-active {
  transition: opacity 0.3s ease;
  transition: transform 0.3s ease;
}

.drop-enter-from,
.drop-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}
</style>
