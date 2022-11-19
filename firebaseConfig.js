// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZMGSipQA1ui8rVyujyR4C9quvGBctPaA",
  authDomain: "grocery-cart-a5142.firebaseapp.com",
  projectId: "grocery-cart-a5142",
  storageBucket: "grocery-cart-a5142.appspot.com",
  messagingSenderId: "118294541237",
  appId: "1:118294541237:web:cab5245595b3596c139ffc",
  measurementId: "G-9GHV73EGN5"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth = getAuth(app)

export { db, auth }

