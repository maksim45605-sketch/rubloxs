
const games = [
 {id:"1",slug:"bluckram",title:"Bluckram",img:"https://picsum.photos/seed/bluckram-card/512/512",banner:"https://picsum.photos/seed/bluckram-banner/1200/600",likes:"98%",desc:"Плоский мир, чат, скины, ники и живые игроки.",badges:["Первый вход","Открыл чат","Вернулся на спавн"]},
 {id:"2",slug:"parkour",title:"Parkour",img:"https://picsum.photos/seed/parkour-card/512/512",banner:"https://picsum.photos/seed/parkour-banner/1200/600",likes:"96%",desc:"Паркур-режим с прыжками, платформами и живыми игроками.",badges:["Первый прыжок","Прошёл уровень","Паркур мастер"]}
];

function gameUrl(g){return "/game/"+g.id+"/"+g.slug}
function getAccounts(){try{return JSON.parse(localStorage.getItem("rublox_accounts")||"[]")}catch(e){return[]}}
function saveAccounts(a){localStorage.setItem("rublox_accounts",JSON.stringify(a))}
function getSession(){try{return JSON.parse(localStorage.getItem("rublox_session")||"null")}catch(e){return null}}
function setSession(u){localStorage.setItem("rublox_session",JSON.stringify(u));localStorage.setItem("rublox_user",u.nick)}
function clearSession(){localStorage.removeItem("rublox_session");localStorage.removeItem("rublox_user")}
function getUser(){let s=getSession();return s?s.nick:""}
function getUsername(){let s=getSession();return s?s.username:""}
function renderHeaderUser(){
 const actions=document.querySelector(".top-actions"); if(!actions)return;
 const s=getSession(); if(!s)return;
 actions.innerHTML=`<div class="user-chip" id="userChip"><div class="avatar-head"></div><b>${s.nick}</b></div>
 <div class="dropdown" id="userDrop"><b>${s.nick}</b><br><small>@${s.username}</small><a href="/profile">Профиль</a><a href="/settings">Настройки</a><a href="/create">Создать</a><button id="logoutBtn">Выйти</button></div>`;
 userChip.onclick=()=>userDrop.classList.toggle("show");
 logoutBtn.onclick=()=>{clearSession();location.href="/"};
}
function getOnline(gameId){
 try{
  const raw=JSON.parse(localStorage.getItem("rublox_online_"+gameId)||"[]");
  const now=Date.now();
  const alive=raw.filter(p=>now-p.time<12000);
  localStorage.setItem("rublox_online_"+gameId,JSON.stringify(alive));
  return alive;
 }catch(e){return[]}
}
document.addEventListener("DOMContentLoaded",renderHeaderUser);
