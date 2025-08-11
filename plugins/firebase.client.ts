// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyBZvMzjjFEdxTj_IMoT5UCW19dbcstnlKg",
//   authDomain: "echoes-c92f6.firebaseapp.com",
//   projectId: "echoes-c92f6",
//   storageBucket: "echoes-c92f6.firebasestorage.app",
//   messagingSenderId: "531210947733",
//   appId: "1:531210947733:web:854e69ffb44f9b416b1f9c",
//   measurementId: "G-30X8DWK01Q"
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app);

// if (process.client) {
//   import("firebase/analytics").then(({ getAnalytics }) => {
//     getAnalytics(app);
//   });
// }


import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { defineNuxtPlugin } from "#app";

const firebaseConfig = {
  apiKey: "AIzaSyBZvMzjjFEdxTj_IMoT5UCW19dbcstnlKg",
  authDomain: "echoes-c92f6.firebaseapp.com",
  projectId: "echoes-c92f6",
  storageBucket: "echoes-c92f6.firebasestorage.app",
  messagingSenderId: "531210947733",
  appId: "1:531210947733:web:854e69ffb44f9b416b1f9c",
  measurementId: "G-30X8DWK01Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth so you can import it anywhere
export const auth = getAuth(app);

// Analytics only if supported (avoids SSR errors)
isSupported().then((yes) => {
  if (yes) {
    getAnalytics(app);
  }
});

export default defineNuxtPlugin(() => {
  return {
    provide: {
      auth
    }
  };
});
