// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBkuvO0WSy5_pORqDZPB972AmJ65nDfD2Q",
    authDomain: "stereo-3d-client.firebaseapp.com",
    projectId: "stereo-3d-client",
    storageBucket: "stereo-3d-client.appspot.com",
    messagingSenderId: "526782636403",
    appId: "1:526782636403:web:2dd044726e6e5002f7e506"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;