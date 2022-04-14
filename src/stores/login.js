import { defineStore } from 'pinia'

export const useLoginStore = defineStore({
  id: 'login',
  state: () => ({
    isLoggedIn: false,
  }),
  // getters: {
  //   doubleCount: (state) => state.counter * 2
  // },
  actions: {
    login({email, password}) {
      try {
        //auth() // TODO 
        this.isLoggedIn = true;
      } catch (e) {
        this.isLoggedIn = false;
        throw e;
      }
    }
  }
})
