import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

/* Kommentera in detta om du vill använda från datorn och kommentera ut auth på rad 23 */
// ----- BROWSER ONLY -----
import { getAuth } from "firebase/auth";
// ----- BROWSER ONLY -----
// export const auth = getAuth(app);

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCJ61-oviOir-o-t8EBfX2kEeZbnTIA_HA",
//   authDomain: "roots-540a3.firebaseapp.com",
//   projectId: "roots-540a3",
//   storageBucket: "roots-540a3.firebasestorage.app",
//   messagingSenderId: "667934528346",
//   appId: "1:667934528346:web:dc2aa6949c74f9409d1963",
//   measurementId: "G-QYQH4H15C9",
// };

const app = initializeApp(firebaseConfig);

// ----- EXPO ONLY -----
// export const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(AsyncStorage),
// });
// ----- EXPO ONLY -----

// --- BROWSER ONLY ---
export const auth = getAuth(app);
// --- BROWSER ONLY ---

export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
