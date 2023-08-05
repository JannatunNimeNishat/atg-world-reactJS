// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration Abc!@#1996
console.log(import.meta.env.VITE_apiKey)
const firebaseConfig = {
apiKey:import.meta.env.VITE_apiKey,
authDomain:import.meta.env.VITE_authDomain,
projectId:import.meta.env.VITE_projectId,
storageBucket:import.meta.env.VITE_storageBucket,
messagingSenderId:import.meta.env.VITE_messagingSenderId,
appId:import.meta.env.VITE_appId

  /* apiKey: "AIzaSyAn0d7ydf_HFIzWTZ4BXjPnujVAxTtGY0U",
  authDomain: "atg-word.firebaseapp.com",
  projectId: "atg-word",
  storageBucket: "atg-word.appspot.com",
  messagingSenderId: "399839887941",
  appId: "1:399839887941:web:bdceb44988369f4ce8192c" */
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
