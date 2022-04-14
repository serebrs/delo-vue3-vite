<script>
import debounce from 'lodash/debounce';
import { useDocsFiltersStore } from '@/stores/docs.filters'

export default {
  setup() {
    return {
      filtersStore: useDocsFiltersStore(),
    }
  },
  data() {
    return {
      filters: null
    }
  },
  methods: {
    clearFilters() {
      this.filters = {
        type: "all",
        dateFrom: (new Date()).toLocaleDateString('ru-RU').split('.').reverse().join('-'),
        dateTo: (new Date()).toLocaleDateString('ru-RU').split('.').reverse().join('-'),
        title: "",
        person: "all",
      }
    },
    loadFilters() {
      this.filters = {
        // type: this.$route.query.type || "all",
        // dateFrom: this.$route.query.dateFrom || (new Date()).toLocaleDateString('ru-RU').split('.').reverse().join('-'),
        // dateTo: this.$route.query.dateTo || (new Date()).toLocaleDateString('ru-RU').split('.').reverse().join('-'),
        // title: this.$route.query.title || "",
        // person: this.$route.query.person || "all",
        type: this.filtersStore.filters.type || "all",
        dateFrom: this.filtersStore.filters.dateFrom || (new Date()).toLocaleDateString('ru-RU').split('.').reverse().join('-'),
        dateTo: this.filtersStore.filters.dateTo || (new Date()).toLocaleDateString('ru-RU').split('.').reverse().join('-'),
        title: this.filtersStore.filters.title || "",
        person: this.filtersStore.filters.person || "all",
      }
    },
    saveFilters: debounce(function (filters) { // TODO делать Object.assing здесь и передавать в функцию копию объекта
      this.filtersStore.saveFilters(filters);
      // this.$router.push({ name: 'docs', query: this.filters })
    }, 500)
  },
  // watch: {
  //   filters: {
  //     handler() {
  //       // this.$emit("filtersUpdate", this.filters);
  //       this.sendFilters();
  //     },
  //     deep: true
  //   }
  // },
  created() {
    this.loadFilters();

    this.$watch(
      () => this.filters,
      (nv) => this.saveFilters(nv),
      { immediate: true, deep: true }
    );

    // this.$watch( // FIXME фильтры обновляются при изменении query, но начинаются проблемы с внешними ссылками
    //   () => JSON.stringify(this.$route.query),
    //   (nv) => this.clearFilters(),
    //   {  }
    // );
  }
}
</script>

<template>
  <div
    class="w-[54rem] flex flex-row justify-start items-center space-x-4 px-4 pt-2 pb-4 mb-6 overflow-hidden shadow-sm shadow-slate-300 bg-slate-200 rounded-lg">
    <label class="block">
      <span class="text-gray-600 text-xs font-semibold mb-1">Тип</span>
      <select
        class="text-xs leading-5 mt-1 px-3 py-1 pr-7 block w-full rounded-md bg-white border border-gray-300 shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
        v-model="filters.type">
        <option selected value="all">Все</option>
        <option value="in">Входящий</option>
        <option value="out">Исходящий</option>
        <option value="norm">Норм. акт</option>
        <option value="dogovor">Договор</option>
        <option value="konkurs">Конкурсная</option>
        <option value="other">Иной</option>
      </select>
    </label>

    <label class="block">
      <span class="text-gray-600 text-xs font-semibold mb-1">Дата c:</span>
      <input type="date" class="text-xs leading-5 mt-1 px-3 py-1 block w-full" v-model="filters.dateFrom" />
    </label>

    <label class="block">
      <span class="text-gray-600 text-xs font-semibold mb-1">Дата по:</span>
      <input type="date" class="text-xs leading-5 mt-1 px-3 py-1 block w-full" v-model="filters.dateTo" />
    </label>

    <label class="block">
      <span class="text-gray-600 text-xs font-semibold mb-1">Содержание</span>
      <input v-model.trim="filters.title" type="text" class="text-xs leading-5 mt-1 px-3 py-1 block w-full" />
    </label>

    <label class="block">
      <span class="text-gray-600 text-xs font-semibold mb-1">Ответственные</span>
      <select class="text-xs leading-5 w-full mt-1 px-3 py-1 pr-7 block " v-model="filters.person">
        <option selected value="all">Все</option>
        <option>Иванов И.И.</option>
        <option>Сидоров С.С.</option>
        <option>Васильев В.В.</option>
        <option>Александров А.А.</option>
      </select>
    </label>

    <label class="block self-end">
      <span class="text-xs mb-1 invisible">&nbsp;</span>
      <button class="text-xs ml-1 mb-2 border-b border-dashed border-gray-500 text-gray-500"
        @click="clearFilters">Очистить фильтры</button>
    </label>
  </div>
</template>
