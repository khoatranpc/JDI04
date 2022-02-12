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

import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";




document.querySelector('button').onclick = () => {
    console.log(`click ne`);
    // -------
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            window.location.href = "./home.html";
            localStorage.setItem('statusSignIn','true');
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });

}