
let user=localStorage.getItem("rublox_user")||("Guest"+Math.floor(Math.random()*9999));
localStorage.setItem("rublox_user",user);

const bad=["бля","хуй","fuck","сука","еб","нах"];
function filterText(t){
 let low=t.toLowerCase();
 for(let b of bad){
   if(low.includes(b)) return "#".repeat(t.length);
 }
 return t;
}

let online=(+localStorage.getItem("rublox_online")||0)+1;
localStorage.setItem("rublox_online",online);

document.getElementById("playerNick").textContent=user;
document.getElementById("playersTop").innerHTML=`<div class="player-mini">🟢 Онлайн: ${online}</div>`;

const esc=document.getElementById("escMenu");
function toggleEsc(){esc.classList.toggle("show")}
document.getElementById("escLogo").onclick=toggleEsc;
document.addEventListener("keydown",e=>{if(e.key==="Escape")toggleEsc();});

document.getElementById("restartBtn").onclick=()=>{player.style.left="50%";player.style.top="48%";}
document.getElementById("leaveBtn").onclick=()=>location.href="/";

const player=document.querySelector(".player3d");

const bubble=document.createElement("div");
bubble.style.cssText="position:absolute;top:-45px;left:-30px;background:white;color:black;padding:6px 10px;border-radius:14px;font-weight:700;display:none;min-width:100px;text-align:center";
player.appendChild(bubble);

let x=50,y=48;
document.addEventListener("keydown",e=>{
 if(e.key==="w")y-=1;
 if(e.key==="s")y+=1;
 if(e.key==="a")x-=1;
 if(e.key==="d")x+=1;
 player.style.left=x+"%";
 player.style.top=y+"%";
});

document.getElementById("chatOpen").onclick=()=>document.getElementById("chatBox").classList.toggle("show");

const chat=document.getElementById("chatMessages");
document.getElementById("chatInput").addEventListener("keydown",e=>{
 if(e.key==="Enter"&&e.target.value.trim()){
   let txt=filterText(e.target.value);
   chat.innerHTML+=`<p><b>${user}:</b> ${txt}</p>`;
   bubble.innerText=txt;
   bubble.style.display="block";
   setTimeout(()=>bubble.style.display="none",4000);
   e.target.value="";
 }
});
