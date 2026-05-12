
import { games, getSession } from "/data.js";
import { db, doc, setDoc, deleteDoc, collection, query, where, onSnapshot, addDoc, serverTimestamp, orderBy, limit } from "/firebase.js";

const session=getSession(); if(!session) location.href="/login";
const gameId=new URLSearchParams(location.search).get("game")||"1";
const game=games.find(g=>g.id===gameId)||games[0];
gameName.textContent=game.title;
if(game.slug==="parkour"){world.classList.add("parkour"); for(let i=0;i<6;i++){const b=document.createElement("div");b.className="parkour-block";b.style.left=(20+i*12)+"%";b.style.top=(65-i*6)+"%";b.style.width="110px";b.style.height="28px";world.appendChild(b)}}

const bad=["бля","блять","хуй","сука","еб","пизд","fuck"];
function filterText(t){let low=t.toLowerCase();return bad.some(b=>low.includes(b))?"#".repeat(t.length):t}

let me={id:session.username,nick:session.nick,username:session.username,gameId,x:50,y:52,z:0,msg:"",updatedAt:Date.now()};
let vy=0,jumping=false;
const meRef=doc(db,"presence",gameId+"_"+session.username);

async function saveMe(){
 me.updatedAt=Date.now();
 await setDoc(meRef,me);
}

function makePlayer(p){
 return `<div class="player3d" style="left:${p.x}%;top:${p.y-p.z}%" data-id="${p.id}">
 <div class="pname">${p.nick}</div><div class="bubble" style="${p.msg?'display:block':''}">${p.msg||''}</div><div class="phead"></div><div class="pbody"></div><div class="pleg l"></div><div class="pleg r"></div></div>`;
}

onSnapshot(query(collection(db,"presence"),where("gameId","==",gameId)),(snap)=>{
 const list=snap.docs.map(d=>d.data()).filter(p=>Date.now()-(p.updatedAt||0)<15000);
 playersLayer.innerHTML=list.map(makePlayer).join("");
 playersTop.innerHTML=`<div class="player-mini">🟢 Онлайн: ${list.length}</div>`;
 tabPlayers.innerHTML=list.map(p=>`<div class="player-list-row"><b>${p.nick}</b><button onclick="alert('UserName: @${p.username}')">UserName</button></div>`).join("");
});

onSnapshot(query(collection(db,"chats_"+gameId),orderBy("time","desc"),limit(30)),(snap)=>{
 const rows=snap.docs.map(d=>d.data()).reverse();
 chatMessages.innerHTML=rows.map(m=>`<p><b>${m.nick}:</b> ${m.text}</p>`).join("");
});

function loop(){
 if(jumping){me.z+=vy;vy-=1.3;if(me.z<=0){me.z=0;jumping=false;vy=0}}
 saveMe(); requestAnimationFrame(loop);
}
loop();

playerNick.textContent=session.nick; playerUser.textContent="@"+session.username;

const keys={};
document.addEventListener("keydown",e=>{
 keys[e.key.toLowerCase()]=true;
 if(e.code==="Space"&&!jumping){jumping=true;vy=15}
 if(e.key==="Escape")escMenu.classList.toggle("show");
 if(e.key==="Tab"){e.preventDefault();tabList.classList.toggle("show")}
});
document.addEventListener("keyup",e=>keys[e.key.toLowerCase()]=false);
setInterval(()=>{
 let speed=1.2;
 if(keys["w"]||keys["ц"])me.y-=speed;
 if(keys["s"]||keys["ы"])me.y+=speed;
 if(keys["a"]||keys["ф"])me.x-=speed;
 if(keys["d"]||keys["в"])me.x+=speed;
 me.x=Math.max(3,Math.min(97,me.x)); me.y=Math.max(12,Math.min(92,me.y));
},40);

escLogo.onclick=()=>escMenu.classList.toggle("show");
restartBtn.onclick=()=>{me.x=50;me.y=52;me.z=0};
leaveBtn.onclick=async()=>{await deleteDoc(meRef);location.href="/"};
inventoryBtn.onclick=()=>itemsPanel.style.display=itemsPanel.style.display==="none"?"block":"none";
chatOpen.onclick=()=>chatBox.classList.toggle("show");
chatInput.addEventListener("keydown",async e=>{
 if(e.key==="Enter"&&chatInput.value.trim()){
  const txt=filterText(chatInput.value.trim());
  await addDoc(collection(db,"chats_"+gameId),{nick:session.nick,username:session.username,text:txt,time:Date.now()});
  me.msg=txt; chatInput.value="";
  setTimeout(()=>{me.msg=""},4000);
 }
});
window.addEventListener("beforeunload",()=>{deleteDoc(meRef)});
