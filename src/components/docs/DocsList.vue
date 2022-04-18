<script>
import { useDocsFiltersStore } from "@/stores/docs.filters";
import DocumentsListItem from "@/components/docs/DocsListItem.vue";
import LoadingScreen from "@/components/utils/LoadingScreen.vue";

export default {
  setup() {
    return {
      filtersStore: useDocsFiltersStore(),
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
  computed: {
    // filtersQuery() {
    //   return JSON.stringify(this.$route.query);
    // }
  },
  methods: {
    async fetchData(filters) {
      try {
        //   res = await fetch('https://yesno.wtf/api')
        //   answer = (await res.json()).answer
        this.isBlurred = true;
        await new Promise((res) => setTimeout(res, 500));
        this.documents = [
          {
            id: "1",
            type: "in",
            num: Math.floor(Math.random() * 10000),
            date: "15.11.2021",
            title:
              "Regional Paradigm Technician Regional Paradigm Technician Regional Paradigm Technician",
            person: ["J. Cooper", "Васильев В.В."],
          },
          {
            id: "2",
            type: "out",
            num: Math.floor(Math.random() * 10000),
            date: "16.11.2021",
            title:
              "Using bind mounts is very common for local development setups",
            person: ["Иванов И.И."],
          },
          {
            id: "3",
            type: "norm",
            num: Math.floor(Math.random() * 10000),
            date: "17.11.2021",
            title:
              "The advantage is that the dev machine does not need to have all of the build tools and environments installed",
            person: ["Александров А.А."],
          },
          {
            id: "4",
            type: "konkurs",
            num: Math.floor(Math.random() * 10000),
            date: "19.11.2021",
            title:
              "To run our container to support a development workflow, we will do the following",
            person: ["J. Cooper", "Сидоров С.С."],
          },
          {
            id: "5",
            type: "dogovor",
            num: Math.floor(Math.random() * 10000),
            date: "05.12.2021",
            title: "Install all dependencies, including the dev dependencies",
            person: ["J. Cooper"],
          },
          {
            id: "6",
            type: "in",
            num: Math.floor(Math.random() * 10000),
            date: "15.11.2021",
            title:
              "Regional Paradigm Technician Regional Paradigm Technician Regional Paradigm Technician",
            person: ["J. Cooper", "Васильев В.В."],
          },
          {
            id: "7",
            type: "out",
            num: Math.floor(Math.random() * 10000),
            date: "16.11.2021",
            title:
              "Using bind mounts is very common for local development setups",
            person: ["Иванов И.И."],
          },
          {
            id: "8",
            type: "norm",
            num: Math.floor(Math.random() * 10000),
            date: "17.11.2021",
            title:
              "The advantage is that the dev machine does not need to have all of the build tools and environments installed",
            person: ["Александров А.А."],
          },
          {
            id: "9",
            type: "konkurs",
            num: Math.floor(Math.random() * 10000),
            date: "19.11.2021",
            title:
              "To run our container to support a development workflow, we will do the following",
            person: ["J. Cooper", "Сидоров С.С."],
          },
          {
            id: "10",
            type: "dogovor",
            num: Math.floor(Math.random() * 10000),
            date: "05.12.2021",
            title: "Install all dependencies, including the dev dependencies",
            person: ["J. Cooper"],
          },
          {
            id: "11",
            type: "in",
            num: Math.floor(Math.random() * 10000),
            date: "15.11.2021",
            title:
              "Regional Paradigm Technician Regional Paradigm Technician Regional Paradigm Technician",
            person: ["J. Cooper", "Васильев В.В."],
          },
          {
            id: "12",
            type: "out",
            num: Math.floor(Math.random() * 10000),
            date: "16.11.2021",
            title:
              "Using bind mounts is very common for local development setups",
            person: ["Иванов И.И."],
          },
          {
            id: "13",
            type: "norm",
            num: Math.floor(Math.random() * 10000),
            date: "17.11.2021",
            title:
              "The advantage is that the dev machine does not need to have all of the build tools and environments installed",
            person: ["Александров А.А."],
          },
          {
            id: "14",
            type: "konkurs",
            num: Math.floor(Math.random() * 10000),
            date: "19.11.2021",
            title:
              "To run our container to support a development workflow, we will do the following",
            person: ["J. Cooper", "Сидоров С.С."],
          },
          {
            id: "15",
            type: "dogovor",
            num: Math.floor(Math.random() * 10000),
            date: "05.12.2021",
            title: "Install all dependencies, including the dev dependencies",
            person: ["J. Cooper"],
          },
        ];
        console.log("Data fetched: " + JSON.stringify(filters));
        this.dataReceived = true;
        this.isBlurred = false;
        this.isLoadingFirstTime = false;
      } catch (error) {
        this.$showError("docs/fetch-failed");
        this.dataReceived = false;
      }
    },
  },
  created() {
    if (this.filtersStore.touched) {
      this.fetchData(this.filtersStore.filters);
    }
    this.filtersStore.$subscribe((mutation, state) => {
      this.fetchData(state.filters);
    });
  },
  // async created() {
  //   this.$watch(
  //     () => this.filtersQuery,
  //     (nv) => {
  //       console.log('query changed ' + nv);
  //       // if (this.$route.query.message) {
  //       //   this.$showMessage(this.$route.query.message);
  //       //   delete this.$route.query.message;
  //       // }
  //       this.fetchData();
  //     },
  //     { immediate: true }   // загружаются два раза при первой загрузке, см. DocsFilters. Если убрать immediate, то по F5 не будет загрузки, т.к. query не менялся
  //   )
  // },
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

    <table>
      <thead class="bg-slate-200 sticky top-0 z-20 shadow-sm shadow-slate-300">
        <tr>
          <th
            scope="col"
            class="px-3 pl-6 py-3 text-left text-xs font-medium text-slate-900 uppercase"
          >
            Тип
          </th>
          <th
            scope="col"
            class="px-3 py-3 text-left text-xs font-medium text-slate-900 uppercase"
          >
            Номер
          </th>
          <th
            scope="col"
            class="px-3 py-3 text-left text-xs font-medium text-slate-900 uppercase"
          >
            Дата
          </th>
          <th
            scope="col"
            class="px-3 py-3 text-left text-xs font-medium text-slate-900 uppercase w-full"
          >
            Содержание
          </th>
          <th
            scope="col"
            class="px-3 py-3 text-left text-xs font-medium text-slate-900 uppercase"
          >
            Ответственные
          </th>
          <th
            scope="col"
            class="px-3 py-3 text-center text-xs font-medium text-slate-900 uppercase"
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
            <td class="w-1/12 px-3 py-5">
              <div class="flex-1">
                <div
                  class="h-2 bg-slate-200 rounded animate-pulse"
                  :style="`width: ${Math.floor(Math.random() * 30) + 50}%;`"
                ></div>
              </div>
            </td>
            <td class="w-9/12 px-3 py-5">
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
            <td class="w-2/12 px-3 py-5">
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
