import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAlJEngLvhV9BX0SQlqc5_H2xPsNMdcOh0",
    authDomain: "ladybeauty-grajales.firebaseapp.com",
    projectId: "ladybeauty-grajales",
    storageBucket: "ladybeauty-grajales.appspot.com",
    messagingSenderId: "357104379174",
    appId: "1:357104379174:web:dd0e21dea38abeba6dcde7"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

