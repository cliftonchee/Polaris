import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBOWm04rFb11LP7ct4EZTvGFT7TZpoOYFU",
  authDomain: "polaris-7faa8.firebaseapp.com",
  projectId: "polaris-7faa8",
  storageBucket: "polaris-7faa8.appspot.com",
  messagingSenderId: "623742386593",
  appId: "1:623742386593:web:197501e9888902f6080be0",
  measurementId: "G-V22S62J66T",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
