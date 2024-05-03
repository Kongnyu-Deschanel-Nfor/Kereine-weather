import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAC4Vt8sdccAswntkotMzm2v0y5VWTiiVY",
  authDomain: "authentication-ab617.firebaseapp.com",
  projectId: "authentication-ab617",
  storageBucket: "authentication-ab617.appspot.com",
  messagingSenderId: "850419922952",
  appId: "1:850419922952:web:eb949838194229c8f479bd",
  measurementId: "G-FJKVS826MV"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();