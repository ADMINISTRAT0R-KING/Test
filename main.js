var USERNAME=localStorage.getItem('KSSR_USER');
function f_info_check(){
  if(USERNAME){document.querySelector('.div_login_body').style.display='none';
document.querySelector('.div_main_body').style.display='block';
}else{document.querySelector('.div_login_body').style.display='block';};
}f_info_check();
let status=navigator.onLine;
if(status){document.querySelector('.div_offline_body').style.display='none';}else{
  document.querySelector('.div_main_body').style.display='none';
}document.body.addEventListener('click',()=>{
var status=navigator.onLine;
if(status){}else{
  document.querySelector('.div_main_body').style.display='none';
  document.querySelector('.div_offline_body').style.display='block';
};});document.getElementById('log_in_form').addEventListener('submit',()=>{
  USERNAME=document.querySelector('.inp_name').value;
  localStorage.setItem('KSSR_USER',USERNAME);
  f_info_check();
});let menu=document.querySelector('.top_menu').style,setting=document.querySelector('.div_setting_body').style,user_info=document.querySelector('.div_user_info_body').style;let chat_room=document.querySelector('.div_chat_room_body').style;function f_menu_opn_cls(){
setTimeout(()=>{
if(menu.display=='block'){
menu.display='none';
}else{menu.display='block';}});};
document.querySelector('.btn_menu').addEventListener('click',f_menu_opn_cls);
document.querySelector('.btn_user_info').addEventListener('click',()=>{
  setting.display='none';
  chat_room.display='none';
  f_menu_opn_cls();
  if(user_info.display=='block') {
    user_info.display='none';
    if(user_info.display=='none'&&setting.display == 'none'){
      chat_room.display='block';
    };
  }else{user_info.display='block';}
});
document.querySelector('.btn_setting').addEventListener('click',()=>{
  user_info.display='none';
  chat_room.display='none';
  f_menu_opn_cls();
  if(setting.display=='block'){
    setting.display='none';
    if(user_info.display=='none'&&setting.display=='none'){
      chat_room.display='block';
    };
  }else{setting.display='block'; }
});