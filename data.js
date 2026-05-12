
export const games = [
 {id:"1",slug:"bluckram",title:"Bluckram",img:"https://picsum.photos/seed/bluckram-card/512/512",banner:"https://picsum.photos/seed/bluckram-banner/1200/600",likes:"98%",desc:"Плоский мир, чат, скины, ники и живые игроки.",badges:["Первый вход","Открыл чат","Вернулся на спавн"]},
 {id:"2",slug:"parkour",title:"Parkour",img:"https://picsum.photos/seed/parkour-card/512/512",banner:"https://picsum.photos/seed/parkour-banner/1200/600",likes:"96%",desc:"Паркур-режим с прыжками, платформами и живыми игроками.",badges:["Первый прыжок","Прошёл уровень","Паркур мастер"]}
];

export function gameUrl(g){return "/game/"+g.id+"/"+g.slug}
export function getSession(){try{return JSON.parse(localStorage.getItem("rublox_session")||"null")}catch(e){return null}}
export function setSession(u){localStorage.setItem("rublox_session",JSON.stringify(u));localStorage.setItem("rublox_user",u.nick)}
export function clearSession(){localStorage.removeItem("rublox_session");localStorage.removeItem("rublox_user")}
export function getUser(){let s=getSession();return s?s.nick:""}
export function getUsername(){let s=getSession();return s?s.username:""}

export function renderHeaderUser(){
 const actions=document.querySelector(".top-actions"); if(!actions)return;
 const s=getSession(); if(!s)return;
 actions.innerHTML=`<div class="user-chip" id="userChip"><div class="avatar-head"></div><b>${s.nick}</b></div>
 <div class="dropdown" id="userDrop"><b>${s.nick}</b><br><small>@${s.username}</small><a href="/profile">Профиль</a><a href="/settings">Настройки</a><a href="/create">Создать</a><button id="logoutBtn">Выйти</button></div>`;
 document.getElementById("userChip").onclick=()=>document.getElementById("userDrop").classList.toggle("show");
 document.getElementById("logoutBtn").onclick=()=>{clearSession();location.href="/"};
}
