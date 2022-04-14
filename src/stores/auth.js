import { defineStore } from 'pinia'
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth"

export const useAuthStore = defineStore({
  id: 'auth',
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
    },
    async logout() {
      try {
        const auth = getAuth();
        await signOut(auth);
        this.isLoggedIn = false;
      } catch (error) {
        console.log(error.code + '  ' + error.message)
        throw error;
      }
    }
  }
})
