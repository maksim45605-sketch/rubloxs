
function renderGames(){
 const box=document.getElementById("games");
 if(!box)return;
 box.innerHTML=games.map(g=>`<a class="game-card" href="${gameUrl(g)}"><img src="${g.img}"><b>${g.title}</b><span>👍 ${g.likes} &nbsp; 👤 ${g.online}</span></a>`).join("");
}
renderGames();
