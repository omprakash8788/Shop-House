import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyA8Kvw-Z9En7v_9HY8pAtpY7gqjFsKBojM",
  authDomain: "myfiveapp-f8ff9.firebaseapp.com",
  projectId: "myfiveapp-f8ff9",
  storageBucket: "myfiveapp-f8ff9.appspot.com",
  messagingSenderId: "925175650652",
  appId: "1:925175650652:web:f2b02c02e31424176d0999"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app)
const auth = getAuth(app);



export {fireDB,auth}