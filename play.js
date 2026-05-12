
let user=getUser(); if(!user){user=guestName();setUser(user);}
document.getElementById("playerNick").textContent=user;
document.getElementById("playersTop").innerHTML=`<div class="player-mini">🟡 ${user}</div><div class="player-mini">🟢 Guest2048</div><div class="player-mini">🟢 Guest8911</div>`;
const esc=document.getElementById("escMenu");
function toggleEsc(){esc.classList.toggle("show")}
document.getElementById("escLogo").onclick=toggleEsc;
document.addEventListener("keydown",e=>{if(e.key==="Escape")toggleEsc();});
document.getElementById("restartBtn").onclick=()=>alert("Игрок появился снова на спавне");
document.getElementById("leaveBtn").onclick=()=>location.href="/";
document.getElementById("inventoryBtn").onclick=()=>{const p=document.getElementById("itemsPanel");p.style.display=p.style.display==="none"?"block":"none"};
document.getElementById("chatOpen").onclick=()=>document.getElementById("chatBox").classList.toggle("show");
const chat=document.getElementById("chatMessages");
document.getElementById("chatInput").addEventListener("keydown",e=>{if(e.key==="Enter"&&e.target.value.trim()){chat.innerHTML+=`<p><b>${user}:</b> ${e.target.value}</p>`;e.target.value="";chat.scrollTop=chat.scrollHeight;}});
