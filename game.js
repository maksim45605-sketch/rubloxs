const path = location.pathname.split("/").filter(Boolean);
const id = path[1] || "1";
const current = games.find(g => g.id === id) || games[0];

document.title = "Rublox — " + current.title;
document.getElementById("title").textContent = current.title;
document.getElementById("banner").src = current.banner;
document.getElementById("eventImg").src = current.img;
document.getElementById("desc").textContent = current.desc;
document.getElementById("likes").textContent = current.likes;
document.getElementById("online").textContent = current.online;
document.getElementById("activeStat").textContent = current.online;

document.getElementById("badges").innerHTML = current.badges.map((b, i)=>`
  <div class="badge-item">
    <img src="https://picsum.photos/seed/badge${i}${current.id}/120/120">
    <div><b>${b}</b><p>Получить достижение в игре.</p></div>
    <div><b>${(3.7-i).toFixed(1)}%</b><span>Rarity</span></div>
  </div>
`).join("");

renderGames("alsoGames", games.filter(g=>g.id!==current.id));

document.getElementById("playBtn").onclick = () => {
  let name = localStorage.getItem("rublox_user");
  if(!name){
    name = "Guest" + Math.floor(1000 + Math.random() * 8999);
    localStorage.setItem("rublox_user", name);
  }
  alert("Запуск игры: " + current.title + "\\nИгрок: " + name);
};

document.querySelectorAll(".tab").forEach(btn=>{
  btn.onclick = () => {
    document.querySelectorAll(".tab").forEach(b=>b.classList.remove("active"));
    document.querySelectorAll(".tab-body").forEach(b=>b.classList.remove("show"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("show");
  };
});
