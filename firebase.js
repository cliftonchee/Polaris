import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyBOWm04rFb11LP7ct4EZTvGFT7TZpoOYFU",
  authDomain: "polaris-7faa8.firebaseapp.com",
  projectId: "polaris-7faa8",
  storageBucket: "polaris-7faa8.appspot.com",
  messagingSenderId: "623742386593",
  appId: "1:623742386593:ios:fa34eef82e5ba519080be0",
  measurementId: "G-V22S62J66T",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
