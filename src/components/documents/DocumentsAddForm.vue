<script>
export default {

}
</script>

<template>
  <div class="flex flex-col justify-start items-start space-y-6 w-full bg-gray-100 rounded-md p-5">
    <div class="flex space-x-8">
      <label class="w-full">
        <span class="text-gray-600 text-xs font-semibold mb-1 block">Тип</span>
        <select class="text-sm leading-5 px-3 py-2 w-full">
          <option selected value="all">Все</option>
          <option>Иванов И.И.</option>
          <option>Сидоров С.С.</option>
          <option>Васильев В.В.</option>
          <option>Александров А.А.</option>
        </select>
      </label>

      <label class="w-full">
        <span class="text-gray-600 text-xs font-semibold mb-1 block">Номер</span>
        <input type="text" class="text-sm leading-5 px-3 py-2 w-full" />
      </label>

      <label class="w-full">
        <span class="text-gray-600 text-xs font-semibold mb-1 block">Дата</span>
        <input type="date" class="text-sm leading-5 px-3 py-2 w-full" />
      </label>
    </div>

    <label class="w-full">
      <span class="text-gray-600 text-xs font-semibold mb-1 block">Название</span>
      <input type="text" class="text-sm leading-5 px-3 py-2 w-full" />
    </label>

    <label class="w-full">
      <span class="text-gray-600 text-xs font-semibold mb-1 block">Ответственные (можно выбрать несколько)</span>
      <select multiple class="text-sm leading-5 px-3 py-2 h-48 w-full">
        <option>Иванов И.И.</option>
        <option>Сидоров С.С.</option>
        <option>Васильев В.В.</option>
        <option>Александров А.А.</option>
      </select>
    </label>
  </div>
</template>
