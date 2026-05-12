
const current=games[0];
document.getElementById("title").textContent=current.title;
document.getElementById("banner").src=current.banner;
document.getElementById("desc").textContent=current.desc;
document.getElementById("likes").textContent=current.likes;
document.getElementById("online").textContent=current.online;
document.getElementById("activeStat").textContent=current.online;
document.getElementById("badges").innerHTML=current.badges.map((b,i)=>`<div class="badge-item"><img src="https://picsum.photos/seed/bluckbadge${i}/120/120"><div><b>${b}</b><p>Бейдж режима Bluckram.</p></div><div><b>${(4.2-i).toFixed(1)}%</b><span>Редкость</span></div></div>`).join("");
document.getElementById("playBtn").onclick=()=>{
 let u=getUser();
 if(!u){u=guestName();setUser(u);}
 location.href="/play.html";
};
document.querySelectorAll(".tab").forEach(btn=>btn.onclick=()=>{document.querySelectorAll(".tab").forEach(b=>b.classList.remove("active"));document.querySelectorAll(".tab-body").forEach(b=>b.classList.remove("show"));btn.classList.add("active");document.getElementById(btn.dataset.tab).classList.add("show");});
