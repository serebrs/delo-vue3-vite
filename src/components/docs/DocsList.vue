<script>
import DocumentsListItem from "@/components/docs/DocsListItem.vue";

export default {
  data() {
    return {
      documents: null,
      dataReceived: false,
      errorMessage: null
    }
  },
  methods: {
    //   res = await fetch('https://yesno.wtf/api')
    //   answer = (await res.json()).answer
    async fetchData() {
      try {
        await (new Promise((res, rej) => setTimeout(res, 1000)));
        this.documents = [
          { id: "1", type: "in", num: Math.floor(Math.random() * 10000), date: "15.11.2021", title: "Regional Paradigm Technician Regional Paradigm Technician Regional Paradigm Technician", person: ["J. Cooper", "Васильев В.В."] },
          { id: "2", type: "out", num: "№ 1243/5к", date: "16.11.2021", title: "Using bind mounts is very common for local development setups", person: ["Иванов И.И."] },
          { id: "3", type: "norm", num: "№ 324р", date: "17.11.2021", title: "The advantage is that the dev machine does not need to have all of the build tools and environments installed", person: ["Александров А.А."] },
          { id: "4", type: "konkurs", num: "", date: "19.11.2021", title: "To run our container to support a development workflow, we will do the following", person: ["J. Cooper", "Сидоров С.С."] },
          { id: "5", type: "dogovor", num: "№ 154/5", date: "05.12.2021", title: "Install all dependencies, including the dev dependencies", person: ["J. Cooper"] },
          { id: "6", type: "in", num: "№ 154/5", date: "15.11.2021", title: "Regional Paradigm Technician Regional Paradigm Technician Regional Paradigm Technician", person: ["J. Cooper", "Васильев В.В."] },
          { id: "7", type: "out", num: "№ 1243/5к", date: "16.11.2021", title: "Using bind mounts is very common for local development setups", person: ["Иванов И.И."] },
          { id: "8", type: "norm", num: "№ 324р", date: "17.11.2021", title: "The advantage is that the dev machine does not need to have all of the build tools and environments installed", person: ["Александров А.А."] },
          { id: "9", type: "konkurs", num: "", date: "19.11.2021", title: "To run our container to support a development workflow, we will do the following", person: ["J. Cooper", "Сидоров С.С."] },
          { id: "10", type: "dogovor", num: "№ 154/5", date: "05.12.2021", title: "Install all dependencies, including the dev dependencies", person: ["J. Cooper"] },
          { id: "11", type: "in", num: "№ 154/5", date: "15.11.2021", title: "Regional Paradigm Technician Regional Paradigm Technician Regional Paradigm Technician", person: ["J. Cooper", "Васильев В.В."] },
          { id: "12", type: "out", num: "№ 1243/5к", date: "16.11.2021", title: "Using bind mounts is very common for local development setups", person: ["Иванов И.И."] },
          { id: "13", type: "norm", num: "№ 324р", date: "17.11.2021", title: "The advantage is that the dev machine does not need to have all of the build tools and environments installed", person: ["Александров А.А."] },
          { id: "14", type: "konkurs", num: "", date: "19.11.2021", title: "To run our container to support a development workflow, we will do the following", person: ["J. Cooper", "Сидоров С.С."] },
          { id: "15", type: "dogovor", num: "№ 154/5", date: "05.12.2021", title: "Install all dependencies, including the dev dependencies", person: ["J. Cooper"] },
        ];
        this.dataReceived = true;
      } catch (error) {
        this.errorMessage = 'Ошибка! Не могу загрузить данные. ' + error;
        this.dataReceived = false;
      }
    },
  },
  computed: {
    filtersQuery() {
      return JSON.stringify(this.$route.query);
    }
  },
  async created() {
    this.$watch(
      () => this.filtersQuery,
      (nv) => {
        console.log('query changed ' + nv);
        this.fetchData()
      },
      // { immediate: true }
    )
  },
  components: { DocumentsListItem }
}
</script>

<template>
  <div class="overflow-clip shadow-sm shadow-slate-200 rounded-lg">
    <table>
      <thead class="bg-slate-200 sticky top-0 z-20 shadow-sm shadow-slate-300">
        <tr>
          <th
            scope="col"
            class="px-3 pl-6 py-3 text-left text-xs font-medium text-slate-900 uppercase"
          >Тип</th>
          <th
            scope="col"
            class="px-3 py-3 text-left text-xs font-medium text-slate-900 uppercase"
          >Номер</th>
          <th
            scope="col"
            class="px-3 py-3 text-left text-xs font-medium text-slate-900 uppercase"
          >Дата</th>
          <th
            scope="col"
            class="px-3 py-3 text-left text-xs font-medium text-slate-900 uppercase w-full"
          >Содержание</th>
          <th
            scope="col"
            class="px-3 py-3 text-left text-xs font-medium text-slate-900 uppercase"
          >Ответственные</th>
          <th
            scope="col"
            class="px-3 py-3 text-center text-xs font-medium text-slate-900 uppercase"
          >Операция</th>
        </tr>
      </thead>
      <tbody>
        <TransitionGroup name="fade-table">
          <template v-if="dataReceived">
            <DocumentsListItem v-for="item in documents" :item="item" :key="item.id" />
          </template>
        </TransitionGroup>

        <tr v-if="errorMessage">
          <td colspan="6" class="p-3 text-left bg-white text-sm text-red-400">{{ errorMessage }}</td>
        </tr>

        <template v-if="!dataReceived">
          <tr v-for="index in 10" class="odd:bg-white even:bg-slate-50">
            <td class="w-1/12 px-3 pl-6 py-5">
              <div class="flex-1">
                <div
                  class="h-2 bg-slate-200 rounded animate-pulse"
                  :style="`width: ${Math.floor(Math.random() * 30) + 50}%;`"
                ></div>
              </div>
            </td>
            <td class="w-1/12 px-3 py-5">
              <div class="flex-1">
                <div
                  class="h-2 bg-slate-200 rounded animate-pulse"
                  :style="`width: ${Math.floor(Math.random() * 30) + 50}%;`"
                  style="animation-delay: .5s"
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
            <td class="w-6/12 px-3 py-5">
              <div class="flex-1">
                <div
                  class="h-2 bg-slate-200 rounded animate-pulse"
                  :style="`width: ${Math.floor(Math.random() * 30) + 50}%;`"
                  style="animation-delay: .5s"
                ></div>
              </div>
            </td>
            <td class="w-2/12 px-3 py-5">
              <div class="flex-1">
                <div
                  class="h-2 bg-slate-200 rounded animate-pulse"
                  :style="`width: ${Math.floor(Math.random() * 30) + 50}%;`"
                ></div>
              </div>
            </td>
            <td class="w-1/12 px-3 py-5">
              <div class="flex-1">
                <div
                  class="h-2 bg-slate-200 rounded animate-pulse"
                  :style="`width: ${Math.floor(Math.random() * 30) + 50}%;`"
                  style="animation-delay: .5s"
                ></div>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.fade-table-enter-active,
.fade-table-leave-active {
  transition: opacity 0.25s ease;
  transition: transform 0.25s;
}

.fade-table-enter-from,
.fade-table-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}
</style>
