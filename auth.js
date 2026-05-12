
if(document.getElementById("regBtn")){
 regBtn.onclick=()=>{
  const n=nick.value.trim(), u=username.value.trim(), p=pass.value.trim();
  if(!n||!u||!p)return alert("Заполни ник, username и пароль");
  const acc=getAccounts();
  if(acc.some(a=>a.nick.toLowerCase()===n.toLowerCase()||a.username.toLowerCase()===u.toLowerCase()))return alert("Такой ник или username уже есть");
  const user={nick:n,username:u,pass:p,rubux:0};
  acc.push(user); saveAccounts(acc); setSession(user); location.href="/";
 };
}
if(document.getElementById("loginBtn")){
 loginBtn.onclick=()=>{
  const name=loginName.value.trim(), p=pass.value.trim();
  const user=getAccounts().find(a=>(a.nick===name||a.username===name)&&a.pass===p);
  if(!user)return alert("Аккаунт не найден или пароль неверный");
  setSession(user); location.href="/";
 };
}
