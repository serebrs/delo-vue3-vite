<script>
export default {
  emits: ["formUpdate"],
  data() {
    return {
      formData: {
        type: "in",
        num: "",
        date: new Date()
          .toLocaleDateString("ru-RU")
          .split(".")
          .reverse()
          .join("-"),
        title: "",
        person: [],
      },
    };
  },
  watch: {
    formData: {
      handler() {
        this.$emit("formUpdate", this.formData);
      },
      deep: true,
    },
  },
};
</script>

<template>
  <div class="flex flex-col space-y-6 w-full bg-gray-100 rounded-md p-5">
    <div class="flex flex-row space-x-3 sm:space-x-8">
      <label class="w-96 sm:w-full">
        <span class="modal-span-label">Тип</span>
        <select v-model="formData.type" class="modal-input-style">
          <option value="in">Входящий</option>
          <option value="out">Исходящий</option>
          <option value="norm">Норм. акт</option>
          <option value="dogovor">Договор</option>
          <option value="konkurs">Конкурсная</option>
          <option value="other">Иной</option>
        </select>
      </label>

      <label class="w-56 sm:w-full">
        <span class="modal-span-label">Номер</span>
        <input
          type="text"
          v-model.trim="formData.num"
          class="modal-input-style"
        />
      </label>

      <label class="w-full">
        <span class="modal-span-label">Дата</span>
        <input type="date" v-model="formData.date" class="modal-input-style" />
      </label>
    </div>

    <label class="w-full">
      <span class="modal-span-label">Название</span>
      <input
        type="text"
        v-model.trim="formData.title"
        class="modal-input-style"
      />
    </label>

    <label class="w-48">
      <span class="modal-span-label"
        >Ответственные (можно выбрать несколько)</span
      >
      <select multiple v-model="formData.person" class="modal-input-style h-48">
        <option>Иванов И.И.</option>
        <option>Сидоров С.С.</option>
        <option>Васильев В.В.</option>
        <option>Александров А.А.</option>
      </select>
    </label>
  </div>
</template>
