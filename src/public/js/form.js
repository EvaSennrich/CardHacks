    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-analytics.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  

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
  const analytics = getAnalytics(app);

//signup function
function signUp(){
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
  //
  promise.catch(e=>alert(e.message));
  alert("SignUp Successfully");
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