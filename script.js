function renderGames(targetId, list){
  const box = document.getElementById(targetId);
  if(!box) return;
  box.innerHTML = list.map(g => `
    <a class="game-card" href="${gameUrl(g)}">
      <img src="${g.img}">
      <b>${g.title}</b>
      <span>👍 ${g.likes} &nbsp; 👤 ${g.online}</span>
    </a>
  `).join("");
}
renderGames("topGames", games);
renderGames("newGames", [...games].reverse());
renderGames("playGames", games.slice(1).concat(games[0]));
