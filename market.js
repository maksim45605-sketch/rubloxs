
const items=["Анимация ходьбы","Синяя футболка","Кепка","Крылья","Маска","Ниндзя звезда","Очки","Котик","Красный костюм","Glow Motion","Рюкзак","Без лица"];
market.innerHTML=items.map((x,i)=>`<div class="market-card"><img src="https://picsum.photos/seed/item${i}/350/350"><b>${x}</b><span>◎ ${50+i*20}</span></div>`).join("");
