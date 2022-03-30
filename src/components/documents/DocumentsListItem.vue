<script>
import { InboxInIcon, ExternalLinkIcon, DocumentTextIcon, DocumentDuplicateIcon, DocumentIcon, PencilIcon, SwitchVerticalIcon, TrashIcon } from "@heroicons/vue/solid";
import HintBox from "@/components/utils/HintBox.vue";
import DialogBoxButton from "@/components/utils/DialogBoxButton.vue";

export default {
  props: {
    item: Object
  },
  data() {
    return {
      dialogAnswer: ''
    }
  },
  computed: {
    itemMeta() {
      switch (this.item.type) {
        case "in":
          return { hintText: "Входящий", icon: "InboxInIcon" };
        case "out":
          return { hintText: "Исходящий", icon: "ExternalLinkIcon" };
        case "norm":
          return { hintText: "Нормативный", icon: "DocumentTextIcon" };
        case "konkurs":
          return { hintText: "Конкурсная", icon: "DocumentDuplicateIcon" };
        case "dogovor":
          return { hintText: "Договор", icon: "DocumentDuplicateIcon" };
        default:
          return { hintText: "Иной", icon: "DocumentIcon" };
      }
    }
  },
  components: {
    InboxInIcon, ExternalLinkIcon, DocumentTextIcon, DocumentDuplicateIcon, DocumentIcon, PencilIcon, SwitchVerticalIcon, TrashIcon, HintBox, DialogBoxButton
  }
}
</script>

<template>
  <tr
    class="odd:bg-white even:bg-slate-50 hover:bg-sky-50 hover:ring-1 hover:ring-inset hover:ring-sky-100"
  >
    <td class="px-3 pl-6 py-2 whitespace-nowrap text-sm text-slate-600">
      <HintBox :hintText="itemMeta.hintText">
        <component :is="itemMeta.icon" class="h-5 w-5" />
      </HintBox>
    </td>
    <td class="px-3 py-2 whitespace-nowrap text-sm text-slate-600">{{ item.num }}</td>
    <td class="px-3 py-2 whitespace-nowrap text-sm text-slate-600">{{ item.date }}</td>
    <td class="px-3 py-2 whitespace-normal text-sm text-slate-600">{{ item.title }}</td>
    <td class="px-3 py-2 whitespace-nowrap text-xs text-slate-600">
      <div class="flex flex-col items-start justify-center">
        <span v-for="(pers, index) in item.person" :key="index">{{ pers }}</span>
      </div>
    </td>
    <td class="px-3 py-2 whitespace-nowrap text-sm text-slate-500">
      <div class="flex flex-row justify-between items-center">
        <a href="#" class="p-1 hover:text-blue-600 hover:bg-sky-200 rounded-md">
          <SwitchVerticalIcon class="h-5 w-5" />
        </a>
        <a href="#" class="p-1 hover:text-amber-600 hover:bg-sky-200 rounded-md">
          <PencilIcon class="h-5 w-5" />
        </a>

        <DialogBoxButton
          title="Запрос на удаление"
          question="Вы действительно хотите удалить элемент?"
          @getDialogAnswer ="dialogAnswer = 'X'"
          class="p-1 hover:text-red-600 hover:bg-sky-200 rounded-md"
        >
          <TrashIcon class="h-5 w-5" /> {{ dialogAnswer }}
        </DialogBoxButton>
      </div>
    </td>
  </tr>
</template>
