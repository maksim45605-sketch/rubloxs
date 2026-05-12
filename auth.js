const guest = document.getElementById("guestBtn");
if(guest){
  guest.onclick = () => {
    const nick = "Guest" + Math.floor(1000 + Math.random() * 8999);
    localStorage.setItem("rublox_user", nick);
    alert("Вы вошли как " + nick);
    location.href = "/";
  };
}
const reg = document.getElementById("regBtn");
if(reg){
  reg.onclick = () => {
    const nick = document.getElementById("nick").value.trim();
    if(!nick) return alert("Введи ник");
    localStorage.setItem("rublox_user", nick);
    alert("Аккаунт создан: " + nick);
    location.href = "/";
  };
}
const login = document.getElementById("loginBtn");
if(login){
  login.onclick = () => {
    const email = document.getElementById("email").value.trim();
    if(!email) return alert("Введи email");
    localStorage.setItem("rublox_user", email.split("@")[0]);
    alert("Вход выполнен");
    location.href = "/";
  };
}
