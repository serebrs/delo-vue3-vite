<script>
import useVuelidate from "@vuelidate/core";
import { required, minLength, helpers } from "@vuelidate/validators";
import { useDocsFiltersOptionsStore } from "../../stores/docs-filters-options";
import ActionButton from "../../components/buttons/modal/ActionButton.vue";
import CancelButton from "../../components/buttons/modal/CancelButton.vue";

export default {
  emits: ["save", "close"],
  setup() {
    return {
      v$: useVuelidate(),
      filtersOptionsStore: useDocsFiltersOptionsStore(),
    };
  },
  data() {
    return {
      formData: {
        type: 1,
        num: "",
        date: this.$formatDateToIso(new Date()),
        title: "",
        person: [],
        file: "",
      },
    };
  },
  validations() {
    return {
      formData: {
        type: {
          required: helpers.withMessage(
            "Это поле не может быть пустым",
            required
          ),
        },
        num: {
          required: helpers.withMessage(
            "Это поле не может быть пустым",
            required
          ),
        },
        date: {
          required: helpers.withMessage(
            "Это поле не может быть пустым",
            required
          ),
        },
        title: {
          required: helpers.withMessage(
            "Это поле не может быть пустым",
            required
          ),
          minLength: helpers.withMessage(
            "Это поле должно содержать не менее 5 символов",
            minLength(5)
          ),
          alphaNum: helpers.withMessage(
            "Это поле дожно быть буквенно-цифровым",
            helpers.regex(/[а-яА-ЯёЁa-zA-Z0-9!@()"".,\-?:;]+$/)
          ),
        },
        person: {},
        file: {
          required: helpers.withMessage(
            "Это поле не может быть пустым",
            required
          ),
        },
      },
      $autoDirty: true,
    };
  },
  methods: {
    handleFileUpload() {
      this.formData.file = this.$refs.file.files[0];
    },
    async saveDoc() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) return;

      this.$emit("save", { ...this.formData });
    },
    closeModal() {
      this.$emit("close");
    },
  },
  components: { ActionButton, CancelButton },
};
</script>

<template>
  <div class="flex flex-col space-y-6 w-full bg-gray-100 rounded-md p-5">
    <div class="flex flex-row space-x-3 sm:space-x-8">
      <label class="w-96 sm:w-full">
        <span class="modal-span-label">Тип</span>
        <select
          v-model="formData.type"
          @blur="v$.formData.type.$touch"
          class="modal-input-style"
          :class="{ invalid: v$.formData.type.$error }"
        >
          <option
            v-for="option in this.filtersOptionsStore.typeFilter"
            :key="option.id"
            :value="option.id"
          >
            {{ option.text }}
          </option>
        </select>
        <div v-if="v$.formData.type.$error" class="text-pink-700 text-xs">
          <span
            v-for="error in v$.formData.type.$errors"
            :key="error.$uid"
            class="block"
            >{{ error.$message }}</span
          >
        </div>
      </label>

      <label class="w-56 sm:w-full">
        <span class="modal-span-label">Номер</span>
        <input
          type="text"
          v-model.trim="formData.num"
          @blur="v$.formData.num.$touch"
          class="modal-input-style"
          :class="{ invalid: v$.formData.num.$error }"
        />
        <div v-if="v$.formData.num.$error" class="text-pink-700 text-xs">
          <span
            v-for="error in v$.formData.num.$errors"
            :key="error.$uid"
            class="block"
            >{{ error.$message }}</span
          >
        </div>
      </label>

      <label class="w-full">
        <span class="modal-span-label">Дата</span>
        <input
          type="date"
          @blur="v$.formData.date.$touch"
          v-model="formData.date"
          class="modal-input-style"
          :class="{ invalid: v$.formData.date.$error }"
        />
        <div v-if="v$.formData.date.$error" class="text-pink-700 text-xs">
          <span
            v-for="error in v$.formData.date.$errors"
            :key="error.$uid"
            class="block"
            >{{ error.$message }}</span
          >
        </div>
      </label>
    </div>

    <label class="w-full">
      <span class="modal-span-label">Название</span>
      <input
        type="text"
        v-model.trim="formData.title"
        @blur="v$.formData.title.$touch"
        class="modal-input-style"
        :class="{ invalid: v$.formData.title.$error }"
      />
      <div v-if="v$.formData.title.$error" class="text-pink-700 text-xs">
        <span
          v-for="error in v$.formData.title.$errors"
          :key="error.$uid"
          class="block"
          >{{ error.$message }}</span
        >
      </div>
    </label>

    <div class="flex justify-start space-x-7 w-full bg-gray-100 rounded-md">
      <label class="w-1/3">
        <span class="modal-span-label">Ответственные (несколько)</span>
        <select
          multiple
          v-model="formData.person"
          @blur="v$.formData.person.$touch"
          class="modal-input-style h-48"
          :class="{ invalid: v$.formData.person.$error }"
        >
          <option>Иванов И.И.</option>
          <option>Сидоров С.С.</option>
          <option>Васильев В.В.</option>
          <option>Александров А.А.</option>
        </select>
        <div v-if="v$.formData.person.$error" class="text-pink-700 text-xs">
          <span
            v-for="error in v$.formData.person.$errors"
            :key="error.$uid"
            class="block"
            >{{ error.$message }}</span
          >
        </div>
      </label>

      <label class="w-2/3">
        <span class="modal-span-label">Загрузите документ</span>
        <input
          type="file"
          ref="file"
          @change="handleFileUpload"
          @blur="v$.formData.file.$touch"
          class="modal-input-style"
          :class="{ invalid: v$.formData.file.$error }"
        />
        <div v-if="v$.formData.file.$error" class="text-pink-700 text-xs">
          <span
            v-for="error in v$.formData.file.$errors"
            :key="error.$uid"
            class="block"
            >{{ error.$message }}</span
          >
        </div>
      </label>
    </div>
  </div>
  <div>
    <ActionButton @click="saveDoc" class="mr-5 mt-5">Сохранить</ActionButton>
    <CancelButton @click="closeModal" class="mr-5 mt-5">Отмена</CancelButton>
  </div>
</template>
