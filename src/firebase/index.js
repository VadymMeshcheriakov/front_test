import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB20Qy_VfdK9u4lJppIIgeoKQhIaFV3OA8",
    authDomain: "test-458a4.firebaseapp.com",
    projectId: "test-458a4",
    storageBucket: "test-458a4.appspot.com",
    messagingSenderId: "255213826602",
    appId: "1:255213826602:web:e6cfd0a466b0a1624d4953",
    measurementId: "G-QHYDRYCBVJ"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage};
export default db;
