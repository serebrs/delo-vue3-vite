<script>
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, helpers } from '@vuelidate/validators'
import { useLoginStore } from '@/stores/login'

export default {
  setup() {
    return {
      v$: useVuelidate(),
      loginStore: useLoginStore(),
    }
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  validations() {
    return {
      email: {
        required: helpers.withMessage('Это поле не может быть пустым.', required),
        email: helpers.withMessage('Это поле должно содержать адрес электронной почты.', email)
      },
      password: {
        required: helpers.withMessage('Это поле не может быть пустым.', required),
        minLength: helpers.withMessage(({ $params, $model }) =>
          `Это поле должно быть не короче ${$params.min} символов, а вы ввели ${$model.length}`,
          minLength(4))
      },
      $autoDirty: true
    }
  },
  methods: {
    async onSubmit() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) return;

      try {
        await this.loginStore.login({ email: this.email, password: this.password });
        this.$router.push('/');
      } catch (e) {
        this.$showMessage('err-no-auth');
      }
    }
  }
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div class="bg-white shadow py-5 px-6 rounded-lg">
      <div>
        <label for="email" class="block text-sm font-medium text-slate-700">Email пользователя</label>
        <div class="mt-1 relative">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <UserIcon class="h-5 w-5 fill-slate-300" />
          </span>
          <input v-model.trim="email" @blur="v$.email.$touch" type="text" name="email" id="email"
            class="sm:text-sm w-full pl-9 pr-3 py-2" :class="{ 'invalid': v$.email.$error }" />
        </div>
        <div v-if="v$.email.$error" class="text-pink-700 text-xs">
          <span v-for="error in v$.email.$errors" class="block">{{ error.$message }}</span>
        </div>
      </div>

      <div class="mt-4">
        <label for="password" class="block text-sm font-medium text-slate-700">Пароль</label>
        <div class="mt-1 relative">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <KeyIcon class="h-5 w-5 fill-slate-300" />
          </span>
          <input v-model="password" @blur="v$.password.$touch" type="password" name="password" id="password"
            class="sm:text-sm w-full pl-9 pr-3 py-2" :class="{ 'invalid': v$.password.$error }" />
        </div>
        <div v-if="v$.password.$error" class="text-pink-700 text-xs">
          <span v-for="error in v$.password.$errors" class="block">{{ error.$message }}</span>
        </div>
      </div>

      <div class="mt-7 mb-2">
        <button
          class="w-full flex items-center justify-center text-white transition duration-200 bg-sky-500 hover:bg-sky-600 hover:shadow-md active:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-300 px-5 py-2.5 text-sm leading-5 rounded-lg font-semibold"
          type="submit">
          Войти
          <LoginIcon class="h-4 w-4 ml-2 mt-[0.15rem]" />
        </button>
      </div>
    </div>
  </form>
</template>
