<script>
import { v4 as uuidv4 } from 'uuid';
import ModalBox from "@/components/utils/ModalBox.vue"; // TODO вынести ModalBox наружу. Как?

export default {
  data() {
    return {
      formData: {
        type: "in",
        num: "",
        date: (new Date()).toLocaleDateString('ru-RU').split('.').reverse().join('-'),
        title: "",
        person: []
      }
    }
  },
  methods: {
    async saveDoc() {
      try {
        await console.log('Создан новый документ: ' + JSON.stringify(this.formData));
        this.$route.query._ = uuidv4() + uuidv4();
        // this.$route.hash = '#' + uuidv4();
        // this.closeModal();
        this.$showMessage('added');        
        this.$router.push({ name: 'docs', query: this.$route.query, replace: true });
      }
      catch (e) {
        this.$showMessage('err-not-added');
      }
    },
    closeModal() {
      this.$showMessage('add-canceled');
      this.$router.push({ name: 'docs', query: this.$route.query, /*hash: this.$route.hash,*/ replace: true });
    }
  },
  components: { ModalBox } // TODO вынести ModalBox наружу. Как?
}
</script>

<template>
  <ModalBox @canceled="closeModal">
    <h1 class="text-2xl text-slate-800 font-semibold">Создание нового документа</h1>

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
          <input type="text" v-model.trim="formData.num" class="modal-input-style" />
        </label>

        <label class="w-full">
          <span class="modal-span-label">Дата</span>
          <input type="date" v-model="formData.date" class="modal-input-style" />
        </label>
      </div>

      <label class="w-full">
        <span class="modal-span-label">Название</span>
        <input type="text" v-model.trim="formData.title" class="modal-input-style" />
      </label>

      <label class="w-48">
        <span class="modal-span-label">Ответственные (можно выбрать несколько)</span>
        <select multiple v-model="formData.person" class="modal-input-style h-48">
          <option>Иванов И.И.</option>
          <option>Сидоров С.С.</option>
          <option>Васильев В.В.</option>
          <option>Александров А.А.</option>
        </select>
      </label>
    </div>

    <div>
      <button @click="saveDoc"
        class="p-2 mr-5 mt-5 w-32 text-gray-700 bg-gray-100 hover:bg-gray-200 shadow-sm rounded-md">Сохранить</button>
      <button @click="closeModal"
        class="p-2 mr-5 mt-5 w-32 text-gray-700 bg-gray-100 hover:bg-gray-200 shadow-sm rounded-md">Отмена</button>
    </div>

    </ModalBox>
</template>