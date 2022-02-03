import firebase from "firebase/compat/app"
import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyAO7x2wlrFEtg3N3yMHrw64PRlR41h7ee4",
  authDomain: "test-30ed2.firebaseapp.com",
  databaseURL: "https://test-30ed2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "test-30ed2",
  storageBucket: "test-30ed2.appspot.com",
  messagingSenderId: "67712427200",
  appId: "1:67712427200:web:6f654ad25960c4b9f0f925"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebaseApp.auth(); 
export const firebaseDB = firebaseApp.database(); 