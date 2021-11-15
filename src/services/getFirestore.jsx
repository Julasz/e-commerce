import firebase from "firebase"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCmMG4VRITfK0V2v7nJzS8zTsvvpuVMbMg",
    authDomain: "e-commerce-primero.firebaseapp.com",
    projectId: "e-commerce-primero",
    storageBucket: "e-commerce-primero.appspot.com",
    messagingSenderId: "532464529390",
    appId: "1:532464529390:web:496ea8335c09041161e8ff"
};

const productos = firebase.initializeApp(firebaseConfig);

export function getFirestore(){
    return firebase.firestore(productos)
}