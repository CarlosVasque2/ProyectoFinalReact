import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBeVwrY9dSrElwLT3-7rKmAE1mNBBIaJc",
  authDomain: "tienda-ptfl.firebaseapp.com",
  projectId: "tienda-ptfl",
  storageBucket: "tienda-ptfl.appspot.com",
  messagingSenderId: "705052145952",
  appId: "1:705052145952:web:526735ff1a91ab13fc7f45"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);