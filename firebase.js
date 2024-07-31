// IMPORTS ALL FUNCTIONS FROM FIREBASE
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getDatabase, ref, set, get, child, update, remove, onChildAdded, onChildRemoved, onChildChanged, push } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";
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
  const Database = getDatabase(app);
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
      alert('RecaptchaVerifier Expired! Try Again')
    }
  });
  
  recaptchaVerifier.render().then((widgetId)=>{
    window.recaptchaWidgetId = widgetId;
    const recaptchaResponse = grecaptcha.getResponse(recaptchaWidgetId);
  });
  
  function VerifyPhoneNumber(){
    alert('Sending SMS To Phone Number!');
    const phoneNumber = '+918855806835';
    
    signInWithPhoneNumber(Auth,phoneNumber,window.recaptchaVerifier).then((confirmationResult)=>{
      window.confirmationResult = confirmationResult;
      alert('SMS Sended To Mobile Number:- '+phoneNumber);
      
    }).catch((error)=>{
      alert('Culd Not Able To Send SMS Because:- '+error);
      grecaptcha.reset(window.recaptchaWidgetId);
      
    });
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /*
  const phoneNumber ="+918855806835";
  signInWithPhoneNumber(Auth,phoneNumber,window.recaptchaVerifier).then((confirmationResult)=>{
    confirmationResult.confirm().then((result)=>{
      const user=result.user;
      console.warn('welcome!');
    }).catch((err)=>{
      console.error(err);
    });
  }).catch((err)=>{
    console.error(err);
  });
  */
  
  
  
  
  
  
  
  
  
  
  
/*
  
  set(ref(Database,Id),Value);
  get(ref(Database,Id)).then((Snapshot)=>{});
  remove(ref(Database,Id));
  update(ref(Database,Id),Value);
  
  Value=Snapshot.val();
  Key=Snapshot.key;
  if=Snapshot.exist();
  
  
  onChildAdded(ref(Database),(Snapshot)=>{
    console.log('Added',Snapshot.key+': '+Snapshot.val());
  })
  
  onChildRemoved(ref(Database),(Snapshot)=>{
    console.error('Removed',Snapshot.key+': '+Snapshot.val());
  })
  
  onChildChanged(ref(Database),(Snapshot)=>{
    console.warn('Updataed',Snapshot.key+': '+Snapshot.val());
  })
  
*/