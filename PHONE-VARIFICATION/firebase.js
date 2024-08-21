// IMPORTS ALL FUNCTIONS FROM FIREBASE
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  
  import { getAuth, signInWithPhoneNumber, RecaptchaVerifier, GoogleAuthProvider, signInWithRedirect, onAuthStateChanged , signOut } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
  
// FIREBASE CONFIGURATION
  const firebaseConfig={
    apiKey: "AIzaSyBMDR4tozR3qKXSXwlDpAmv-FIJTr9HluQ",
    authDomain: "supreme-k9872140400.firebaseapp.com",
    databaseURL: "https://supreme-k9872140400-default-rtdb.firebaseio.com",
    projectId: "supreme-k9872140400",
    storageBucket: "supreme-k9872140400.appspot.com",
    messagingSenderId: "35230895858",
    appId: "1:35230895858:web:9e5fcede75c54300150a6b",
    measurementId: "G-H6796VF3WP"
  };

// INITIALIZE FIREBASE
  const app = initializeApp(firebaseConfig);
  
  const Auth = getAuth(app);
  Auth.useDeviceLanguage();
  const CurrentUser = Auth.currentUser;
  //console.log(CurrentUser);
  
  window.recaptchaVerifier = new RecaptchaVerifier(Auth,'recaptcha-container',{
    'size': 'normal',
    'callback': (response)=>{
      alert('RecaptchaVerifier Solved');
      VerifyPhoneNumber();
    },
    'expired-callback': ()=>{
      alert('RecaptchaVerifier Expired! Try Again');
    }
  });
  
  recaptchaVerifier.render().then((widgetId)=>{
    window.recaptchaWidgetId = widgetId;
    const recaptchaResponse = grecaptcha.getResponse(recaptchaWidgetId);
  });
  
  function VerifyPhoneNumber(){
    const phoneNumber = prompt('ENTER YOUR MOBILE NUMBER WITH COUNTRY CODE EX.+91,+1,+2');
    signInWithPhoneNumber(Auth,phoneNumber,window.recaptchaVerifier).then((confirmationResult)=>{
      window.confirmationResult = confirmationResult;
      const code = prompt('Enter Verification Code!');
      confirmationResult.confirm(code).then((result)=>{
        const user=result.user;
        alert('Phone Number Varification Complete ◉‿◉ '+user);
      }).catch((err) => {
        alert('Varification Failed '+err);
      });
    }).catch((error)=>{
      alert('Culd Not Able To Send SMS Because:- '+error);
      grecaptcha.reset(window.recaptchaWidgetId);
    });
  }