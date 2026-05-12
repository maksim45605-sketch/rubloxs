
const games = [
  {
    id:"1",
    slug:"bluckram",
    title:"Bluckram",
    img:"https://picsum.photos/seed/bluckram-logo/400/400",
    banner:"https://picsum.photos/seed/bluckram-banner/1200/600",
    online:"1.2K",
    likes:"98%",
    desc:"Плоский мир, скины, чат, ники сверху и простой режим для игры с друзьями.",
    badges:["Первый вход","Открыл чат","Вернулся на спавн"]
  }
];
function gameUrl(g){ return "/game/" + g.id + "/" + g.slug + "/"; }
function getUser(){
  return localStorage.getItem("rublox_user") || "";
}
function setUser(name){
  localStorage.setItem("rublox_user", name);
}
function guestName(){
  return "Guest" + Math.floor(1000 + Math.random()*8999);
}
function renderHeaderUser(){
  const actions = document.querySelector(".top-actions");
  if(!actions) return;
  const user = getUser();
  if(!user) return;
  actions.innerHTML = `
    <div class="user-chip" id="userChip">
      <div class="avatar-head"></div>
      <b>${user}</b>
    </div>
    <div class="dropdown" id="userDrop">
      <a href="/profile">Профиль</a>
      <a href="/settings">Настройки</a>
      <a href="/create">Создать игру</a>
      <button id="logoutBtn">Выйти</button>
    </div>
  `;
  document.getElementById("userChip").onclick = () => document.getElementById("userDrop").classList.toggle("show");
  document.getElementById("logoutBtn").onclick = () => { localStorage.removeItem("rublox_user"); location.href="/"; };
}
document.addEventListener("DOMContentLoaded", renderHeaderUser);
