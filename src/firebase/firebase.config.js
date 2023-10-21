// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDD5MrQnU9y33kWaKtUXUPbHCnPg1YO_ho",
  authDomain: "velocity-autos-website.firebaseapp.com",
  projectId: "velocity-autos-website",
  storageBucket: "velocity-autos-website.appspot.com",
  messagingSenderId: "751625193087",
  appId: "1:751625193087:web:060ad25287c8eae0c9a14a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;