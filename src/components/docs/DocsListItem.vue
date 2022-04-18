<script>
import HintBox from "@/components/utils/HintBox.vue";
import { useDocsFiltersOptionsStore } from "@/stores/docs-filters-options";

//import DialogBoxButton from "@/components/utils/DialogBoxButton.vue";

export default {
  setup() {
    return {
      filtersOptionsStore: useDocsFiltersOptionsStore(),
    };
  },
  props: {
    item: Object,
  },
  data() {
    return {
      //isDeleteDialogActive: false
    };
  },
  computed: {
    itemMeta() {
      if (this.filtersOptionsStore.typeFilter.length === 0) {
        return { hintText: "Документ", icon: "DocumentIcon" };
      }

      const res = this.filtersOptionsStore.typeFilter.find(
        (item) => item.id === this.item.type
      );
      return { hintText: res.hintText, icon: res.icon };
    },
  },
  methods: {
    openDocument() {
      this.$router.push({
        name: "docDetails",
        params: { id: this.item.id },
        query: this.$route.query,
      });
    },
    editDocument() {
      this.$router.push({
        name: "docEdit",
        params: { id: this.item.id },
        query: this.$route.query,
      });
    },
    deleteDocument() {
      this.$router.push({
        name: "docDelete",
        params: { id: this.item.id },
        query: this.$route.query,
      });
    },
    extraDocument() {
      console.log(`Extra document ${this.item.id} from popup`);
    },
  },
  components: {
    HintBox, //DialogBoxButton
  },
};
</script>

<template>
  <tr
    @click="openDocument"
    class="odd:bg-white even:bg-slate-50 hover:bg-sky-50 hover:ring-1 hover:ring-inset hover:ring-sky-100 cursor-pointer"
  >
    <td class="px-3 pl-6 py-2 whitespace-nowrap text-sm text-slate-600">
      <HintBox :hintText="itemMeta.hintText">
        <component :is="itemMeta.icon" class="h-5 w-5" />
      </HintBox>
    </td>
    <td class="px-3 py-2 whitespace-nowrap text-sm text-slate-600">
      {{ item.num }}
    </td>
    <td class="px-3 py-2 whitespace-nowrap text-sm text-slate-600">
      {{ item.date }}
    </td>
    <td class="px-3 py-2 whitespace-normal text-sm text-slate-600">
      {{ item.title }}
    </td>
    <td class="px-3 py-2 whitespace-nowrap text-xs text-slate-600">
      <div class="flex flex-col items-start justify-center">
        <span v-for="(pers, index) in item.person" :key="index">{{
          pers
        }}</span>
      </div>
    </td>
    <td class="px-3 py-2 whitespace-nowrap text-sm text-slate-500">
      <div class="flex flex-row justify-between items-center">
        <button
          @click.stop="extraDocument"
          class="p-1 hover:text-blue-600 hover:bg-sky-200 rounded-md"
        >
          <SwitchVerticalIcon class="h-5 w-5" />
        </button>

        <button
          @click.stop="editDocument"
          class="p-1 hover:text-amber-600 hover:bg-sky-200 rounded-md"
        >
          <PencilIcon class="h-5 w-5" />
        </button>

        <button
          @click.stop="deleteDocument"
          class="p-1 hover:text-red-600 hover:bg-sky-200 rounded-md"
        >
          <TrashIcon class="h-5 w-5" />
        </button>

        <!-- <button
          @click.stop="isDeleteDialogActive = true"
          class="p-1 hover:text-red-600 hover:bg-sky-200 rounded-md"
        >
          <TrashIcon class="h-5 w-5" />
        </button>
        <DialogBox
          v-if="isDeleteDialogActive"
          @dialogClosed="isDeleteDialogActive = false"
          @dialogAnswered="isDeleteDialogActive = false; deleteDocument()"
          title="Запрос на удаление"
          question="Вы действительно хотите удалить элемент?"
        />-->

        <!-- <DialogBoxButton
          title="Запрос на удаление"
          question="Вы действительно хотите удалить элемент?"
          @dialogAnswered="deleteDocument"
          class="p-1 hover:text-red-600 hover:bg-sky-200 rounded-md"
        >
          <TrashIcon class="h-5 w-5" />
        </DialogBoxButton> -->
      </div>
    </td>
  </tr>
</template>
