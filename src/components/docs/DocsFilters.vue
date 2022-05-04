<script>
import debounce from "lodash/debounce";

import { useDocsFiltersCurrentStore } from "../../stores/docs-filters-current";
import { useDocsFiltersOptionsStore } from "../../stores/docs-filters-options";

import LoadingScreen from "../../components/utils/LoadingScreen.vue";

export default {
  setup() {
    return {
      filtersCurrentStore: useDocsFiltersCurrentStore(),
      filtersOptionsStore: useDocsFiltersOptionsStore(),
    };
  },
  data() {
    return {
      currentFilters: {},
      isFiltersLoading: true,
    };
  },
  methods: {
    clearFilters() {
      this.currentFilters = {
        doctypeId: "-1",
        dateFrom: this.$formatDateToIso(new Date()),
        dateTo: this.$formatDateToIso(new Date()),
        title: "",
        employees: "-1",
      };
    },
    saveFilters: debounce(async function (filters) {
      try {
        await this.filtersCurrentStore.saveFilters(filters);
      } catch (e) {
        this.$showError("");
      }
    }, 500),
  },
  async created() {
    try {
      if (Object.keys(this.filtersCurrentStore.currentFilters).length === 0) {
        await this.clearFilters();
      } else {
        this.currentFilters = Object.assign(
          {},
          this.filtersCurrentStore.currentFilters
        );
      }
      const { ...currentFilters } = this.currentFilters;
      this.saveFilters(currentFilters);
    } catch (e) {
      this.$showError("app/internal-error");
    }

    try {
      if (this.filtersOptionsStore.typeFilter.length === 0) {
        await this.filtersOptionsStore.fetchTypeFilter();
      }
      if (this.filtersOptionsStore.personFilter.length === 0) {
        await this.filtersOptionsStore.fetchPersonFilter();
      }
    } catch (e) {
      this.$showError("docs/filter-fail");
    }

    this.$watch(
      () => this.currentFilters,
      (nv) => {
        const { ...nvSend } = nv;
        this.saveFilters(nvSend);
      },
      { deep: true }
    );

    this.isFiltersLoading = false;
  },
  components: { LoadingScreen },
};
</script>

<template>
  <div
    class="w-[54rem] h-[5.2rem] mb-6 shadow-sm shadow-slate-300 bg-slate-200 rounded-lg overflow-hidden"
  >
    <Transition name="fade-loading" mode="out-in">
      <LoadingScreen
        v-if="isFiltersLoading"
        class="flex flex-col h-full justify-center items-center text-gray-500"
      />

      <div
        v-else
        class="flex flex-row justify-start items-center space-x-4 px-4 pt-2 pb-4 overflow-hidden"
      >
        <label class="block">
          <span class="text-gray-600 text-xs font-semibold mb-1">Тип</span>
          <select
            class="text-xs leading-5 mt-1 px-3 py-1 pr-7 block w-full rounded-md bg-white border border-gray-300 shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
            v-model="currentFilters.doctypeId"
          >
            <option value="-1">Все</option>
            <option
              v-for="option in this.filtersOptionsStore.typeFilter"
              :key="option.id"
              :value="option.id"
            >
              {{ option.text }}
            </option>
          </select>
        </label>

        <label class="block">
          <span class="text-gray-600 text-xs font-semibold mb-1">Дата c:</span>
          <input
            type="date"
            class="text-xs leading-5 mt-1 px-3 py-1 block w-full"
            v-model="currentFilters.dateFrom"
          />
        </label>

        <label class="block">
          <span class="text-gray-600 text-xs font-semibold mb-1">Дата по:</span>
          <input
            type="date"
            class="text-xs leading-5 mt-1 px-3 py-1 block w-full"
            v-model="currentFilters.dateTo"
          />
        </label>

        <label class="block">
          <span class="text-gray-600 text-xs font-semibold mb-1"
            >Содержание</span
          >
          <input
            v-model.trim="currentFilters.title"
            type="text"
            class="text-xs leading-5 mt-1 px-3 py-1 block w-full"
          />
        </label>

        <label class="block">
          <span class="text-gray-600 text-xs font-semibold mb-1"
            >Ответственные</span
          >
          <select
            class="text-xs leading-5 w-full mt-1 px-3 py-1 pr-7 block"
            v-model="currentFilters.employees"
          >
            <option value="-1">Все</option>
            <option
              v-for="option in this.filtersOptionsStore.personFilter"
              :key="option.id"
              :value="option.id"
            >
              {{ option.fio }}
            </option>
          </select>
        </label>

        <label class="block self-end">
          <span class="text-xs mb-1 invisible">&nbsp;</span>
          <button
            class="text-xs ml-1 mb-2 border-b border-dashed border-gray-500 text-gray-500"
            @click="clearFilters"
          >
            Очистить фильтры
          </button>
        </label>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.fade-loading-enter-active,
.fade-loading-leave-active {
  transition: all 0.15s ease;
}

.fade-loading-enter-from,
.fade-loading-leave-to {
  opacity: 0;
}
</style>
