import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyCB3qv1wK8WAuPisCzmoJr84IvdsBMiVjQ",
    authDomain: "cardhacks-e24c1.firebaseapp.com",
    projectId: "cardhacks-e24c1",
    storageBucket: "cardhacks-e24c1.appspot.com",
    messagingSenderId: "205154216594",
    appId: "1:205154216594:web:4229d6e68279b0a305544b",
    measurementId: "G-TT69KHGW43"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

//signup function
function signUp(){
    import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });;
}

//signIN function
function  signIn(){
  var email = document.getElementById("email");
  var password  = document.getElementById("password");
  const promise = auth.signInWithEmailAndPassword(email.value,password.value);
  promise.catch(e=>alert(e.message));
  
}

//signOut

function signOut(){
  auth.signOut();
  alert("SignOut Successfully from System");
}

//active user to homepage
firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    var email = user.email;
    alert("Active user "+email);

  }else{
    alert("No Active user Found")
  }
})