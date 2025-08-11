// import { defineStore } from "pinia";
// import { auth } from "~/plugins/firebase.client";
// import { 
//   createUserWithEmailAndPassword, 
//   signInWithEmailAndPassword,
//   signOut,
//   sendPasswordResetEmail,
//   onAuthStateChanged
// } from "firebase/auth";

// export const useAuthStore = defineStore("auth", {
//   state: () => ({
//     user: null as any,
//     loading: true
//   }),

//   actions: {
//     async signup(email: string, password: string) {
//       await createUserWithEmailAndPassword(auth, email, password);
//     },

//     async login(email: string, password: string) {
//       await signInWithEmailAndPassword(auth, email, password);
//     },

//     async logout() {
//       await signOut(auth);
//     },

//     async recoverPassword(email: string) {
//       await sendPasswordResetEmail(auth, email);
//     },

//     initAuthListener() {
//       onAuthStateChanged(auth, (firebaseUser) => {
//         this.user = firebaseUser;
//         this.loading = false;
//       });
//     }
//   }
// });


// stores/auth.ts
import { defineStore } from "pinia";
import { auth } from "../plugins/firebase.client";
import { 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  User 
} from "firebase/auth";

interface AuthState {
  user: User | null;
}

export const useAuthStore = defineStore("auth", {
  state: (): AuthState => ({
    user: null
  }),

  actions: {
    setUser(user: User | null) {
      this.user = user;
    },

    async signup(email: string, password: string) {
      await createUserWithEmailAndPassword(auth, email, password);
    },

    async login(email: string, password: string) {
      await signInWithEmailAndPassword(auth, email, password);
    },

    async logout() {
      await signOut(auth);
    },

    init() {
      onAuthStateChanged(auth, (user) => {
        this.setUser(user);
      });
    }
  }
});
