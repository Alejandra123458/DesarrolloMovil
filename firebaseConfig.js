import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCMZX-tMWL5R3jt2dAY4Ml5dnB9ifoaOp0",
  authDomain: "gestiondefinanzas-343ce.firebaseapp.com",
  projectId: "gestiondefinanzas-343ce",
  storageBucket: "gestiondefinanzas-343ce.appspot.com",
  messagingSenderId: "432202847512",
  appId: "1:432202847512:web:b82b47f71cce14c60c3a6d",
  measurementId: "G-T9PYN33P7P"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);