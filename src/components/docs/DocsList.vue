<script>
import DocumentsListItem from "@/components/docs/DocsListItem.vue";

export default {
  data() {
    return {
      documents: [
        { id: "1", type: "in", num: "№ 154/5", date: "15.11.2021", title: "Regional Paradigm Technician Regional Paradigm Technician Regional Paradigm Technician", person: ["J. Cooper", "Васильев В.В."] },
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
      ]
    }
  },
  // TODO onMounted() асинхронно получать документы учитывая фильтры в query -> then обновить this.documents
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
        <DocumentsListItem v-for="item in documents" :item="item" :key="item.id" />
      </tbody>
    </table>


  </div>
</template>