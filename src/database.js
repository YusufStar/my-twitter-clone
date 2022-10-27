import { getDatabase } from "firebase/database";
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import "firebase/firestore"
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAz51L_YayRP-H3ypeqjFU307PF1q4Zi8s",
    authDomain: "twitter-clone-b2989.firebaseapp.com",
    projectId: "twitter-clone-b2989",
    storageBucket: "twitter-clone-b2989.appspot.com",
    messagingSenderId: "607102620164",
    appId: "1:607102620164:web:bf1c344400d5cda7c01b51",
    measurementId: "G-5310CD7LKV",
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const auth = getAuth(app);

export { database, auth, app}