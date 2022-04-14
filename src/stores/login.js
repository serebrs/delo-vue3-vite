import { defineStore } from 'pinia'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

export const useLoginStore = defineStore({
  id: 'login',
  state: () => ({
    isLoggedIn: false,
  }),
  // getters: {
  //   doubleCount: (state) => state.counter * 2
  // },
  actions: {
    async login({ email, password }) {
      try {
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, email, password);
        this.isLoggedIn = true;
      } catch (error) {
        this.isLoggedIn = false;
        console.log(error.code + '  ' + error.message)
        throw error;
      }
    }
  }
})
