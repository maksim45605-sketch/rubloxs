
const parts=location.pathname.split("/").filter(Boolean);
const id=parts[1]||"1";
const current=games.find(g=>g.id===id)||games[0];
title.textContent=current.title; banner.src=current.banner; desc.textContent=current.desc; likes.textContent=current.likes; genre.textContent=current.slug==="parkour"?"Parkour":"Sandbox";
function updOnline(){const o=getOnline(current.id).length; online.textContent=o; activeStat.textContent=o}
updOnline(); setInterval(updOnline,3000);
badges.innerHTML=current.badges.map((b,i)=>`<div class="badge-item"><img src="https://picsum.photos/seed/badge${current.id}${i}/120/120"><div><b>${b}</b><p>Бейдж режима.</p></div><div><b>${(4.2-i).toFixed(1)}%</b><span>Редкость</span></div></div>`).join("");
playBtn.onclick=()=>{if(!getSession())return location.href="/login"; location.href="/play?game="+current.id};
document.querySelectorAll(".tab").forEach(btn=>btn.onclick=()=>{document.querySelectorAll(".tab").forEach(b=>b.classList.remove("active"));document.querySelectorAll(".tab-body").forEach(b=>b.classList.remove("show"));btn.classList.add("active");document.getElementById(btn.dataset.tab).classList.add("show")});
