import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyB5JTpXGrgDDieF7dhbaC4sPm8t_6shpvc",
    authDomain: "blog-3857d.firebaseapp.com",
    projectId: "blog-3857d",
    storageBucket: "blog-3857d.appspot.com",
    messagingSenderId: "280517921802",
    appId: "1:280517921802:web:93185baf4d67fb6df463f3"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();