import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDTwNIC2GwRtA_2NEBvPjkaYG_E6ciEzsU",
  authDomain: "pots-smart.firebaseapp.com",
  databaseURL: "https://pots-smart-default-rtdb.firebaseio.com",
  projectId: "pots-smart",
  storageBucket: "pots-smart.appspot.com",
  messagingSenderId: "332257281506",
  appId: "1:332257281506:web:0303a15ce152b54807a5bb",
  measurementId: "G-9J8H48DBLJ"
};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const dbt = getFirestore(app);


export {db,dbt}