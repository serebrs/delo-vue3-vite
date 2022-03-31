<script>
export default {

}
</script>

<template>
  <div class="flex flex-col space-y-6 w-full bg-gray-100 rounded-md p-5">
    <div class="flex flex-row space-x-3 sm:space-x-8">
      <label class="w-96 sm:w-full">
        <span class="modal-span-label">Тип</span>
        <select class="modal-input-style">
          <option>Иванов И.И.</option>
          <option>Сидоров С.С.</option>
          <option>Васильев В.В.</option>
          <option>Александров А.А.</option>
        </select>
      </label>

      <label class="w-56 sm:w-full">
        <span class="modal-span-label">Номер</span>
        <input type="text" class="modal-input-style" />
      </label>

      <label class="w-full">
        <span class="modal-span-label">Дата</span>
        <input type="date" class="modal-input-style" />
      </label>
    </div>

    <label class="w-full">
      <span class="modal-span-label">Название</span>
      <input type="text" class="modal-input-style" />
    </label>

    <label class="w-48">
      <span class="modal-span-label">Ответственные (можно выбрать несколько)</span>
      <select multiple class="modal-input-style h-48">
        <option>Иванов И.И.</option>
        <option>Сидоров С.С.</option>
        <option>Васильев В.В.</option>
        <option>Александров А.А.</option>
      </select>
    </label>
  </div>
</template>
