<script>
export default {
  emits: ["filtersUpdate"],
  data() {
    return {
      filters: {
        type: "all",
        dateFrom: (new Date()).toLocaleDateString('ru-RU').split('.').reverse().join('-'),
        dateTo: (new Date()).toLocaleDateString('ru-RU').split('.').reverse().join('-'),
        title: "",
        person: "all",
      }
    }
  },
  methods: {
    send() {
      this.$emit("filtersUpdate", this.filters);
    }
  },
  watch: {
    filters: {
      handler() {
        this.$emit("filtersUpdate", this.filters);
      },
      deep: true
    }
  }
}
</script>

<template>
  <div
    class="w-[54rem] flex flex-row justify-start items-center space-x-4 px-4 pt-2 pb-4 mb-6 overflow-hidden shadow-sm shadow-slate-300 bg-slate-200 rounded-lg"
  >
    <label class="block">
      <span class="text-gray-600 text-xs font-semibold mb-1">Тип</span>
      <select
        class="text-xs leading-5 mt-1 px-3 py-1 pr-7 block w-full rounded-md bg-white border border-gray-300 shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
        v-model="filters.type"
      >
        <option selected value="all">Все</option>
        <option value="norm">Норм. акт</option>
        <option value="in">Входящий</option>
        <option value="out">Исходящий</option>
        <option value="dogovor">Договор</option>
        <option value="konkurs">Конкурсная</option>
        <option value="other">Иной</option>
      </select>
    </label>

    <label class="block">
      <span class="text-gray-600 text-xs font-semibold mb-1">Дата c:</span>
      <input
        type="date"
        class="text-xs leading-5 mt-1 px-3 py-1 block w-full rounded-md bg-white border border-gray-300 shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
        v-model="filters.dateFrom"
      />
    </label>

    <label class="block">
      <span class="text-gray-600 text-xs font-semibold mb-1">Дата по:</span>
      <input
        type="date"
        class="text-xs leading-5 mt-1 px-3 py-1 block w-full rounded-md bg-white border border-gray-300 shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
        v-model="filters.dateTo"
      />
    </label>

    <label class="block">
      <span class="text-gray-600 text-xs font-semibold mb-1">Содержание</span>
      <input
        v-model.trim="filters.title"
        type="text"
        class="text-xs leading-5 mt-1 px-3 py-1 block w-full rounded-md bg-white border border-gray-300 shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
      />
    </label>

    <label class="block">
      <span class="text-gray-600 text-xs font-semibold mb-1">Ответственные</span>
      <select
        class="text-xs leading-5 w-full mt-1 px-3 py-1 pr-7 block rounded-md bg-white border border-gray-300 shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
        v-model="filters.person"
      >
        <option selected value="all">Все</option>
        <option>Иванов И.И.</option>
        <option>Сидоров С.С.</option>
        <option>Васильев В.В.</option>
        <option>Александров А.А.</option>
      </select>
    </label>

    <label class="block">
      <span class="text-xs mb-1 invisible">&nbsp;</span>
      <button
        class="text-xs leading-5 mt-1 px-3 py-1 w-full rounded-md bg-sky-600 text-white font-semibold shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
        @click="send"
      >Найти</button>
    </label>
  </div>
</template>
