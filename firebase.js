
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getFirestore, doc, setDoc, getDoc, collection, query, where, getDocs,
  serverTimestamp, onSnapshot, deleteDoc, addDoc, orderBy, limit
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCnzTl49Fj3SAF-ksft7IqsSPpFxzr0U-E",
  authDomain: "rubloxs.firebaseapp.com",
  projectId: "rubloxs",
  storageBucket: "rubloxs.firebasestorage.app",
  messagingSenderId: "990873971794",
  appId: "1:990873971794:web:0aeb8742a01091696dc38b",
  measurementId: "G-SESSR7ZP5G"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export { doc, setDoc, getDoc, collection, query, where, getDocs, serverTimestamp, onSnapshot, deleteDoc, addDoc, orderBy, limit };
