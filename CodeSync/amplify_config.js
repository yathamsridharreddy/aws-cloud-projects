// Firebase v9 Modular SDK

// Import Firebase modules from CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// ✅ Your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyCDGxsS1CNVRF3wpg1eqkHfb6YVMibXOzk",
  authDomain: "codesync-open.firebaseapp.com",
  projectId: "codesync-open",
  storageBucket: "codesync-open.firebasestorage.app",
  messagingSenderId: "664480055141",
  appId: "1:664480055141:web:383015f7bf31a43e2d2b8c",
  measurementId: "G-H7DD5ZK91D"
};

// ✅ Initialize Firebase App
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// ✅ Login handler function (optional export)
export async function loginUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return {
      success: true,
      user: userCredential.user
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
}

// ✅ Observe login/logout state
export function onAuth(callback) {
  onAuthStateChanged(auth, callback);
}

// ✅ Logout function
export async function logoutUser() {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}