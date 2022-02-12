import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyCqB7_9gSHp5K25xFrrp64IwYGUNmQdM-M",
    authDomain: "ontapb8.firebaseapp.com",
    projectId: "ontapb8",
    storageBucket: "ontapb8.appspot.com",
    messagingSenderId: "857763264739",
    appId: "1:857763264739:web:797954a9ec6e46dd8aedd6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";
const statusSignIn = JSON.parse(localStorage.getItem('statusSignIn'));
if (statusSignIn == false) {
    window.location.href = "./index.html";
} else {


    document.querySelector('button').onclick = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            window.location.href = "./index.html";
            localStorage.setItem('statusSignIn', 'false');
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }
}

