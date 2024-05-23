// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore'
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBdcQMeLQJYxC66EmfeIaRrgc8g0PtVfng",
    authDomain: "meditera-app-6302e.firebaseapp.com",
    projectId: "meditera-app-6302e",
    storageBucket: "meditera-app-6302e.appspot.com",
    messagingSenderId: "19674520398",
    appId: "1:19674520398:web:c1f309351eddded46fdc1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage(app);
const sparePartsCollection = collection(db, "spare-parts");
const currentCodesCollection = collection(db, "current-codes");
const auth = getAuth();
export { storage, db, auth, sparePartsCollection, currentCodesCollection }