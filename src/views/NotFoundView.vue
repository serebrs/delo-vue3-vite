<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen w-full bg-slate-100"
  >
    <div class="flex flex-col items-center space-y-3 text-gray-500">
      <p>Запрошенная страница не существует</p>
      <router-link to="/">
        <button
          class="flex items-center px-5 py-3 bg-gray-200 rounded shadow-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
            />
          </svg>
          <span class="ml-2">Главная страница</span>
        </button>
      </router-link>
    </div>
  </div>
</template>
