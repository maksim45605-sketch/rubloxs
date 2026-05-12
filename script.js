
const overlay = document.getElementById('overlay');
const gameTitle = document.getElementById('gameTitle');

function openGame(title){
  gameTitle.innerText = title;
  overlay.style.display = 'flex';
}

overlay.addEventListener('click', (e)=>{
  if(e.target === overlay){
    overlay.style.display = 'none';
  }
});
