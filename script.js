// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js';
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js';
import { getMessaging, getToken } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-messaging.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBTWul5sbfp8WnygooTyseOD6xYaMplkuo",
    authDomain: "first-projects-12011.firebaseapp.com",
    projectId: "first-projects-12011",
    storageBucket: "first-projects-12011.firebasestorage.app",
    messagingSenderId: "367322259148",
    appId: "1:367322259148:web:4e65dde3876bb91e55ec69",
    measurementId: "G-TFT68GXP2S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication
const auth = getAuth();
// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging();


const container = document.getElementById("container");
const register_btn = document.getElementById("register");
const login_btn = document.getElementById("login");
const sign_up_btn = document.getElementById("sign-up-btn");
const sign_in_btn = document.getElementById("sign-in-btn");

register_btn.addEventListener('click', () => {
    container.classList.add("active");
})

login_btn.addEventListener('click', () => {
    container.classList.remove("active");
})

sign_up_btn.addEventListener("click", (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("resistration-email").value;
    let password = document.getElementById("resistration-pass").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("Creating...");
            login_btn.click();
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(error);
            // ..
        });
})

sign_in_btn.addEventListener("click", (e) => {
    e.preventDefault();

    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-pass").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert("Login...");
            window.location.href = "login.html";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(error);
        });
})
