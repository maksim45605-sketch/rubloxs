
import { db, doc, setDoc, getDoc, collection, query, where, getDocs, serverTimestamp } from "/firebase.js";
import { setSession } from "/data.js";

const regBtn=document.getElementById("regBtn");
if(regBtn){
 regBtn.onclick=async()=>{
  const n=nick.value.trim(), u=username.value.trim().toLowerCase(), p=pass.value.trim();
  if(!n||!u||!p)return alert("Заполни ник, username и пароль");
  const nickQ=await getDocs(query(collection(db,"users"),where("nickLower","==",n.toLowerCase())));
  if(!nickQ.empty)return alert("Такой ник уже есть");
  const ref=doc(db,"users",u);
  const old=await getDoc(ref);
  if(old.exists())return alert("Такой username уже есть");
  const user={nick:n,nickLower:n.toLowerCase(),username:u,pass:p,rubux:0,createdAt:Date.now()};
  await setDoc(ref,user);
  setSession({nick:n,username:u,rubux:0});
  location.href="/";
 };
}

const loginBtn=document.getElementById("loginBtn");
if(loginBtn){
 loginBtn.onclick=async()=>{
  const name=loginName.value.trim().toLowerCase(), p=pass.value.trim();
  if(!name||!p)return alert("Введи ник/username и пароль");
  let user=null;
  const byUser=await getDoc(doc(db,"users",name));
  if(byUser.exists()) user=byUser.data();
  if(!user){
   const q=await getDocs(query(collection(db,"users"),where("nickLower","==",name)));
   if(!q.empty) user=q.docs[0].data();
  }
  if(!user || user.pass!==p)return alert("Аккаунт не найден или пароль неверный");
  setSession({nick:user.nick,username:user.username,rubux:user.rubux||0});
  location.href="/";
 };
}
