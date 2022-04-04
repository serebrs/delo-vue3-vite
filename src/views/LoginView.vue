<template>
  <form>
    <div class="bg-white shadow py-5 px-6 rounded-lg">
      <div>
        <label for="username" class="block text-sm font-medium text-slate-700">Имя пользователя</label>
        <div class="mt-1 relative">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <UserIcon class="h-5 w-5 fill-slate-300" />
          </span>
          <input
            type="text"
            name="username"
            id="username"
            class="pl-9 pr-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            value
          />
        </div>
      </div>

      <div class="mt-4">
        <label for="password" class="block text-sm font-medium text-slate-700">Пароль</label>
        <div class="mt-1 relative">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <KeyIcon class="h-5 w-5 fill-slate-300" />
          </span>
          <input
            type="password"
            name="password"
            id="password"
            class="pl-9 pr-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            value
          />
        </div>
      </div>

      <div class="mt-7 mb-2">
        <button
          class="w-full flex items-center justify-center text-white transition duration-200 bg-sky-500 hover:bg-sky-600 hover:shadow-md active:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-300 px-5 py-2.5 text-sm leading-5 rounded-lg font-semibold"
        >
          Войти
          <LoginIcon class="h-4 w-4 ml-2 mt-[0.15rem]" />
        </button>
      </div>
    </div>
  </form>
</template>
