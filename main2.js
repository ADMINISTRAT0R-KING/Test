import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import {getDatabase,ref,set,get,child ,update,remove, onChildAdded, onChildRemoved, push} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
  const firebaseConfig = {
    apiKey: "AIzaSyCi7vQDDPc1eAOHXh7zkHH7hDNmmEd9Dzk",
    authDomain: "krushna-kssr.firebaseapp.com",
    databaseURL: "https://krushna-kssr-default-rtdb.firebaseio.com",
    projectId: "krushna-kssr",
    storageBucket: "krushna-kssr.appspot.com",
    messagingSenderId: "482009019474",
    appId: "1:482009019474:web:dba755a4849d8d02599b8b"
  };const app = initializeApp(firebaseConfig),db=getDatabase(app),db_ref=ref(db);
let USER=localStorage.getItem('KSSR_USER'),MSG=document.querySelector('inp_msg'),ID,chat_area=document.querySelector('.chats'),HTML,TM;
document.getElementById('massage').addEventListener('submit',()=>{
  MSG=document.querySelector('.inp_msg').value;
  document.querySelector('.inp_msg').value='';
});
onChildAdded(ref(db,'KSSR'),(snapshot)=>{
  HTML="";
   if(snapshot.val().SENDER!==USER){
   HTML+='<div class="inc_msg">'+snapshot.val().SENDER+'|'+snapshot.val().INFO+'<br><hr>';
   HTML+=snapshot.val().MASSAGE;
   HTML+="</div>";
   chat_area.innerHTML+=HTML;
   }else{
   HTML+='<div class="out_msg"id="'+snapshot.key+'" onclick="module.delet(this)">'+snapshot.val().SENDER+'|'+snapshot.val().INFO+'<br><hr>';
     HTML+=snapshot.val().MASSAGE;
     HTML+="</div>";
     chat_area.innerHTML+=HTML;
 }});
document.getElementById('massage').addEventListener('submit',()=>{
ID=push(child(ref(db),'massage')).key;
TM=new Date().toLocaleString();
update(ref(db,'KSSR/'+ID),{
   MASSAGE: MSG,
   SENDER: USER,
   INFO: TM
 })});
 module.delet=function delet(self){
   var var_1=self.getAttribute('id');
   if(confirm('remove Massage')===true){
     remove(ref(db,"KSSR/"+var_1))
   }};
 onChildRemoved(ref(db,'KSSR'),(snapshot)=>{
   document.getElementById(snapshot.key).style.display='none';
 })
 
 
 
 /*(function(){var script=document.createElement('script');script.src="//cdn.jsdelivr.net/npm/eruda";document.body.appendChild(script);script.onload=function(){eruda.init()}})();*/