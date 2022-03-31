<script>
export default {

}
</script>

<template>
  <div class="flex flex-col space-y-6 w-full bg-gray-100 rounded-md p-5">
    <div class="flex flex-row space-x-3 sm:space-x-8">
      <label class="w-96 sm:w-full">
        <span class="span-label">Тип</span>
        <select class="input-style">
          <option>Иванов И.И.</option>
          <option>Сидоров С.С.</option>
          <option>Васильев В.В.</option>
          <option>Александров А.А.</option>
        </select>
      </label>

      <label class="w-56 sm:w-full">
        <span class="span-label">Номер</span>
        <input type="text" class="input-style" />
      </label>

      <label class="w-full">
        <span class="span-label">Дата</span>
        <input type="date" class="input-style" />
      </label>
    </div>

    <label class="w-full">
      <span class="span-label">Название</span>
      <input type="text" class="input-style" />
    </label>

    <label class="w-48">
      <span class="span-label">Ответственные (можно выбрать несколько)</span>
      <select multiple class="input-style h-48">
        <option>Иванов И.И.</option>
        <option>Сидоров С.С.</option>
        <option>Васильев В.В.</option>
        <option>Александров А.А.</option>
      </select>
    </label>
  </div>
</template>

<style scoped>
  .span-label {
    @apply text-gray-600 text-xs font-semibold mb-1 block;
  }

  .input-style {
    @apply text-sm leading-5 px-3 py-2 w-full;
  }
</style>
