// js/main.js

import { auth } from "../amplify_config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// Get login form (used in index.html)
const loginForm = document.getElementById("login-form");

// Get signup form (used in signup.html, optional)
const signupForm = document.getElementById("signup-form");

// --- 🔐 Login Logic ---
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const emailOrUsername = loginForm.email.value.trim();
    const password = loginForm.password.value.trim();

    try {
      // If using username, convert to email (custom logic)
      const email = emailOrUsername.includes("@")
        ? emailOrUsername
        : `${emailOrUsername}@codesync-open.firebaseapp.com`;

      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("✅ Login successful:", user.email);

      // Redirect after successful login
      window.location.href = "usernames.html";
    } catch (error) {
      console.error("❌ Login failed:", error.message);
      alert("Login failed: " + error.message);
    }
  });
}

// --- 📝 Signup Logic (optional) ---
if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const emailOrUsername = signupForm.email.value.trim();
    const password = signupForm.password.value.trim();

    try {
      const email = emailOrUsername.includes("@")
        ? emailOrUsername
        : `${emailOrUsername}@codesync-open.firebaseapp.com`;

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("✅ Signup successful:", user.email);

      // Redirect after signup
      window.location.href = "usernames.html";
    } catch (error) {
      console.error("❌ Signup failed:", error.message);
      alert("Signup failed: " + error.message);
    }
  });
}