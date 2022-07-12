import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDTT9o6s2Y-0SWeNqdtQ_Jeysc2m4UKc3U",
  authDomain: "reactproject31195.firebaseapp.com",
  projectId: "reactproject31195",
  storageBucket: "reactproject31195.appspot.com",
  messagingSenderId: "811777617556",
  appId: "1:811777617556:web:93685d562e06bd0ace8e81"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);