
const guest=document.getElementById("guestBtn");if(guest)guest.onclick=()=>{const n=guestName();setUser(n);location.href="/"};
const reg=document.getElementById("regBtn");if(reg)reg.onclick=()=>{const n=nick.value.trim();if(!n)return alert("Введи ник");setUser(n);localStorage.setItem("rublox_last_nick_change",Date.now());location.href="/"};
const login=document.getElementById("loginBtn");if(login)login.onclick=()=>{const e=email.value.trim();if(!e)return alert("Введи email");setUser(e.split("@")[0]);location.href="/"};
