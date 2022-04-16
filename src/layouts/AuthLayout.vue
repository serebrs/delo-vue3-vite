<template>
  <div class="flex flex-col items-center min-h-screen bg-slate-100 sm:py-10">
    <div class="w-72 sm:w-full sm:max-w-sm">
      <div class="flex items-center justify-center py-5">
        <div class="flex items-center justify-center pt-8 mb-5">
          <span class="relative">
            <span
              class="block absolute -inset-1 -skew-y-3 bg-slate-600 shadow-sm shadow-gray-400"
              aria-hidden="true"
            ></span>
            <span
              class="relative text-white font-semibold font-mono text-2xl px-1"
              >Дело</span
            >
          </span>
        </div>
      </div>

      <router-view />
    </div>
  </div>
</template>
