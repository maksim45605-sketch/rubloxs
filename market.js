const items = [
["Анимационный пакет",250],["Нервный танец",50],["Без лица",70],["Ниндзя звезда",15],
["Пакет роботов",80],["Glow Motion",250],["Волшебник",250],["Котик",100],
["Красный костюм",500],["Наушники",150],["Маска",90],["Крылья",300]
];
document.getElementById("market").innerHTML = items.map((it,i)=>`
  <div class="market-card">
    <img src="https://picsum.photos/seed/item${i}/350/350">
    <b>${it[0]}</b>
    <span>◎${it[1]}</span>
  </div>
`).join("");
