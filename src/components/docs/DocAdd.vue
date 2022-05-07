<script>
import useVuelidate from "@vuelidate/core";
import { required, minLength, helpers } from "@vuelidate/validators";
import axios from "axios";
import { useDocsFiltersCurrentStore } from "../../stores/docs-filters-current";
import { useDocsFiltersOptionsStore } from "../../stores/docs-filters-options";
import ModalBox from "../../components/utils/ModalBox.vue"; // TODO вынести ModalBox наружу. Как?
import ActionButton from "../../components/buttons/modal/ActionButton.vue";
import CancelButton from "../../components/buttons/modal/CancelButton.vue";

export default {
  setup() {
    return {
      v$: useVuelidate(),
      filtersCurrentStore: useDocsFiltersCurrentStore(),
      filtersOptionsStore: useDocsFiltersOptionsStore(),
    };
  },
  data() {
    return {
      formData: {
        doctypeId: 1,
        num: "",
        date: this.$formatDateToIso(new Date()),
        title: "",
        employees: [],
        file: "",
      },
    };
  },
  validations() {
    return {
      formData: {
        doctypeId: {
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
          alphaNum: helpers.withMessage(
            "Это поле дожно быть буквенно-цифровым",
            helpers.regex(/[а-яА-ЯёЁa-zA-Z0-9№()/-]+$/)
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
            helpers.regex(/[а-яА-ЯёЁa-zA-Z0-9№!?@()"'.,/:;-]+$/)
          ),
        },
        employees: {},
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

      const data = new FormData();
      for (const name in this.formData) {
        if (name === "employees")
          this.formData.employees.forEach((employee) =>
            data.append("employees[]", employee)
          );
        else data.append(name, this.formData[name]);
      }

      try {
        const res = await axios.post("http://localhost:3030/api/docs", data, {
          headers: { "Content-Type": "multipart/form-data" },
          timeout: 1000,
        });
        console.log(res.data.message);
      } catch (e) {
        this.$showError("docs/add-fail");
        if (e.response?.data?.message) {
          console.error(e.response.data.message);
          return;
        } else throw e;
      }
      this.$showMessage("docs/added");
      this.filtersCurrentStore.timestamp = Date.now();
      this.$router.push({
        name: "docs",
        query: this.$route.query,
        replace: true,
      });
    },
    closeModal() {
      this.$showMessage("docs/add-canceled");
      this.$router.push({
        name: "docs",
        query: this.$route.query,
        replace: true,
      });
    },
  },
  components: { ModalBox, ActionButton, CancelButton }, // TODO вынести ModalBox наружу. Как?
};
</script>

<template>
  <ModalBox @canceled="closeModal">
    <h1 class="text-2xl text-slate-800 font-semibold">
      Создание нового документа
    </h1>

    <div class="flex flex-col space-y-6 w-full bg-gray-100 rounded-md p-5">
      <div class="flex flex-row space-x-3 sm:space-x-8">
        <label class="w-96 sm:w-full">
          <span class="modal-span-label">Тип</span>
          <select
            v-model="formData.doctypeId"
            @blur="v$.formData.doctypeId.$touch"
            class="modal-input-style"
            :class="{ invalid: v$.formData.doctypeId.$error }"
          >
            <option
              v-for="option in this.filtersOptionsStore.typeFilter"
              :key="option.id"
              :value="option.id"
            >
              {{ option.text }}
            </option>
          </select>
          <div
            v-if="v$.formData.doctypeId.$error"
            class="text-pink-700 text-xs"
          >
            <span
              v-for="error in v$.formData.doctypeId.$errors"
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
            v-model="formData.employees"
            @blur="v$.formData.employees.$touch"
            class="modal-input-style h-48"
            :class="{ invalid: v$.formData.employees.$error }"
          >
            <option
              v-for="option in this.filtersOptionsStore.personFilter"
              :key="option.id"
              :value="option.id"
            >
              {{ option.fio }}
            </option>
          </select>
          <div
            v-if="v$.formData.employees.$error"
            class="text-pink-700 text-xs"
          >
            <span
              v-for="error in v$.formData.employees.$errors"
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
  </ModalBox>
</template>
