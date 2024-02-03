
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getAuth, GoogleAuthProvider,signInWithPopup} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyC8H-sBp5xWAxDgMrGhxy-9-iub9YqdQNw",
    authDomain: "ondc-43ca1.firebaseapp.com",
    projectId: "ondc-43ca1",
    storageBucket: "ondc-43ca1.appspot.com",
    messagingSenderId: "153596350798",
    appId: "1:153596350798:web:97297f3298b21a1437ce1f",
    measurementId: "G-V66KPEEVS9"
  };


  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  auth.LanguageCode ='en'
  const provider = new GoogleAuthProvider();

  const googleLogin = document.getElementById("social-icons2");
  googleLogin.addEventListener("click", function(){
  signInWithPopup(auth, provider)
  .then((result) => {
    
    const credential = GoogleAuthProvider.credentialFromResult(result);
    
    const user = result.user;
    console.log(user);
    window.location.href="../index.html" 
    
  }).catch((error) => {
    
    const errorCode = error.code;
    const errorMessage = error.message;    
  });
  })