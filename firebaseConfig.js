import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

/* Kommentera in detta om du vill använda från datorn och kommentera ut auth på rad 23 */
// import { getAuth } from "firebase/auth";
// export const auth = getAuth(app);

// const firebaseConfig = {
//   apiKey: "AIzaSyD6SCHQ-4fUscJS8-UWMJdngtqFQtsJ0zI",
//   authDomain: "roots-cd39a.firebaseapp.com",
//   projectId: "roots-cd39a",
//   storageBucket: "roots-cd39a.firebasestorage.app",
//   messagingSenderId: "872631865213",
//   appId: "1:872631865213:web:f134fe9fb5cdf2fe4c0614",
//   measurementId: "G-YNGG0LDKX4",
// };
const firebaseConfig = {
  apiKey: "AIzaSyCJ61-oviOir-o-t8EBfX2kEeZbnTIA_HA",
  authDomain: "roots-540a3.firebaseapp.com",
  projectId: "roots-540a3",
  storageBucket: "roots-540a3.firebasestorage.app",
  messagingSenderId: "667934528346",
  appId: "1:667934528346:web:dc2aa6949c74f9409d1963",
  measurementId: "G-QYQH4H15C9",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
