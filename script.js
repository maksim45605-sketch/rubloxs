
import { games, gameUrl, renderHeaderUser } from "/data.js";
import { db, collection, query, where, onSnapshot } from "/firebase.js";
renderHeaderUser();

const box=document.getElementById("games");
let onlineMap={};
function draw(){
 box.innerHTML=games.map(g=>{
  const online=onlineMap[g.id]||0;
  return `<a class="game-card" href="${gameUrl(g)}"><img src="${g.img}"><b>${g.title}</b><span>👍 ${g.likes} &nbsp; 👤 ${online}</span></a>`;
 }).join("");
}
draw();
for(const g of games){
 const q=query(collection(db,"presence"),where("gameId","==",g.id));
 onSnapshot(q,(snap)=>{
  onlineMap[g.id]=snap.size;
  draw();
 });
}
