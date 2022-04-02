<template>
  <div class="bg-white shadow py-5 px-6 rounded-lg text-center text-gray-700">
    <p>Вы вышли из системы</p>
    <router-link :to="{ name: 'login' }">
      <b>
        <u>Войти</u>
      </b>
    </router-link>
  </div>
</template>
