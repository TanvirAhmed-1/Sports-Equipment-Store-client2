// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyBE1zRzbk3_17Vkuh4_oU5rdU11oif4-Y8",
  // authDomain: "sports-shop-954d7.firebaseapp.com",
  // projectId: "sports-shop-954d7",
  // storageBucket: "sports-shop-954d7.firebasestorage.app",
  // messagingSenderId: "507862199884",
  // appId: "1:507862199884:web:6e81e515b6314f1831cee9"

  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID


};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);