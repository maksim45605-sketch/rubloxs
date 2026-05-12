
function renderGames(){
 const box=document.getElementById("games"); if(!box)return;
 box.innerHTML=games.map(g=>{
  const online=getOnline(g.id).length;
  return `<a class="game-card" href="${gameUrl(g)}"><img src="${g.img}"><b>${g.title}</b><span>👍 ${g.likes} &nbsp; 👤 ${online}</span></a>`;
 }).join("");
}
renderGames(); setInterval(renderGames,3000);
