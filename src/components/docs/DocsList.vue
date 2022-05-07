<script>
import { useDocsFiltersCurrentStore } from "../../stores/docs-filters-current";
import DocumentsListItem from "../../components/docs/DocsListItem.vue";
import LoadingScreen from "../../components/utils/LoadingScreen.vue";

export default {
  setup() {
    return {
      filtersCurrentStore: useDocsFiltersCurrentStore(),
    };
  },
  data() {
    return {
      documents: null,
      dataReceived: false,
      isBlurred: true,
      isLoadingFirstTime: true,
    };
  },
  methods: {
    async fetchData(filters) {
      try {
        this.isBlurred = true;
        await new Promise((res) => setTimeout(res, 200));
        const res = await fetch(
          `http://localhost:3030/api/docs?${new URLSearchParams(filters)}`
        );
        const json = await res.json();
        this.documents = json.data;
        if (res.status != 200) throw new Error(json.message);
        // console.log("Data fetched with filters: " + JSON.stringify(filters));
        // console.log("Data fetched: " + JSON.stringify(this.documents));
        this.dataReceived = true;
        this.isBlurred = false;
        this.isLoadingFirstTime = false;
      } catch (e) {
        console.error(e.message);
        this.$showError("docs/fetch-failed");
        this.dataReceived = false;
      }
    },
  },
  created() {
    this.filtersCurrentStore.$subscribe((mutation, state) => {
      this.fetchData(state.currentFilters);
    });
  },
  components: { DocumentsListItem, LoadingScreen },
};
</script>

<template>
  <div class="relative overflow-clip shadow-sm shadow-slate-200 rounded-lg">
    <div
      v-if="isBlurred"
      class="absolute flex flex-col justify-center items-center top-[-25rem] inset-x-0 bottom-0"
    >
      <LoadingScreen class="fixed z-50 text-gray-500" />
    </div>

    <table class="w-full">
      <thead class="bg-slate-200 sticky top-0 z-20 shadow-sm shadow-slate-300">
        <tr>
          <th
            scope="col"
            class="px-3 pl-6 py-3 text-left text-xs font-medium w-16 text-slate-900 uppercase"
          >
            Тип
          </th>
          <th
            scope="col"
            class="px-3 py-3 text-left text-xs font-medium w-24 text-slate-900 uppercase"
          >
            Номер
          </th>
          <th
            scope="col"
            class="px-3 py-3 text-left text-xs font-medium w-24 text-slate-900 uppercase"
          >
            Дата
          </th>
          <th
            scope="col"
            class="px-3 py-3 text-left text-xs font-medium w-auto text-slate-900 uppercase"
          >
            Содержание
          </th>
          <th
            scope="col"
            class="px-3 py-3 text-left text-xs font-medium w-32 text-slate-900 uppercase"
          >
            Ответственные
          </th>
          <th
            scope="col"
            class="px-3 py-3 text-center text-xs font-medium w-28 text-slate-900 uppercase"
          >
            Операция
          </th>
        </tr>
      </thead>
      <tbody
        :class="{ 'blur-sm': isBlurred }"
        class="transition-all delay-[5ms]"
      >
        <template v-if="dataReceived">
          <DocumentsListItem
            v-for="item in documents"
            :item="item"
            :key="item.id"
          />
        </template>

        <template v-if="isLoadingFirstTime">
          <tr
            v-for="index in 15"
            :key="index"
            class="odd:bg-white even:bg-slate-50"
          >
            <td class="px-3 pl-6 py-5">
              <div class="flex-1">
                <div
                  class="h-2 bg-slate-200 rounded animate-pulse"
                  :style="`width: ${Math.floor(Math.random() * 30) + 50}%;`"
                ></div>
              </div>
            </td>
            <td class="px-3 py-5">
              <div class="flex-1">
                <div
                  class="h-2 bg-slate-200 rounded animate-pulse"
                  :style="`width: ${Math.floor(Math.random() * 30) + 50}%;`"
                  style="animation-delay: 0.5s"
                ></div>
              </div>
            </td>
            <td class="px-3 py-5">
              <div class="flex-1">
                <div
                  class="h-2 bg-slate-200 rounded animate-pulse"
                  :style="`width: ${Math.floor(Math.random() * 30) + 50}%;`"
                ></div>
              </div>
            </td>
            <td class="px-3 py-5">
              <div class="flex-1">
                <div
                  class="h-2 bg-slate-200 rounded animate-pulse"
                  :style="`width: ${Math.floor(Math.random() * 30) + 50}%;`"
                  style="animation-delay: 0.5s"
                ></div>
              </div>
            </td>
            <td class="px-3 py-5">
              <div class="flex-1">
                <div
                  class="h-2 bg-slate-200 rounded animate-pulse"
                  :style="`width: ${Math.floor(Math.random() * 30) + 50}%;`"
                ></div>
              </div>
            </td>
            <td class="px-3 py-5">
              <div class="flex-1">
                <div
                  class="w-20 h-2 bg-slate-200 rounded animate-pulse"
                  style="animation-delay: 0.5s"
                ></div>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>
