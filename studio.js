
import { getSession } from "/data.js";
import { db, doc, setDoc } from "/firebase.js";
if(!getSession()) location.href="/login";

const start=startModal, scene=document.getElementById("scene");start.classList.add("show");
let selected=null,count=0,drag=null,dx=0,dy=0;

document.querySelectorAll("[data-template]").forEach(b=>b.onclick=()=>{
 start.classList.remove("show");scene.className="scene "+b.dataset.template;
 if(b.dataset.template==="long")makeObj("part long","Длинный Part");
 if(b.dataset.template==="square")makeObj("part square","Квадрат");
 if(b.dataset.template==="parkour"){for(let i=0;i<5;i++)makeObj("part long","Parkour")}
});

function select(el){if(selected)selected.classList.remove("selected");selected=el;selected.classList.add("selected");selectedName.textContent=selected.dataset.name;widthRange.value=parseInt(selected.style.width)||110;heightRange.value=parseInt(selected.style.height)||80;opacityRange.value=(parseFloat(selected.style.opacity||1)*100)}
function makeObj(cls,name,text=""){const el=document.createElement("div");el.className="obj "+cls;el.dataset.name=name+" "+(++count);el.textContent=text;el.style.left=(90+count*25)+"px";el.style.top=(90+count*18)+"px";el.onmousedown=e=>{drag=el;dx=e.offsetX;dy=e.offsetY;select(el)};el.onclick=e=>{e.stopPropagation();select(el)};scene.appendChild(el);select(el)}
document.onmousemove=e=>{if(!drag)return;const r=scene.getBoundingClientRect();drag.style.left=(e.clientX-r.left-dx)+"px";drag.style.top=(e.clientY-r.top-dy)+"px"};document.onmouseup=()=>drag=null;
addPart.onclick=()=>makeObj("part","Part");addLong.onclick=()=>makeObj("part long","Длинный Part");addSquare.onclick=()=>makeObj("part square","Квадрат");addFrame.onclick=()=>makeObj("frame","Frame");addText.onclick=()=>makeObj("textobj","Text",textValue.value||"Text");
toggleSelected.onclick=()=>{if(selected)selected.classList.toggle("off")};colorPicker.oninput=e=>{if(selected){if(selected.classList.contains("frame"))selected.style.borderColor=e.target.value;else selected.style.background=e.target.value;selected.style.color=e.target.value}};
widthRange.oninput=e=>{if(selected)selected.style.width=e.target.value+"px"};heightRange.oninput=e=>{if(selected)selected.style.height=e.target.value+"px"};opacityRange.oninput=e=>{if(selected)selected.style.opacity=e.target.value/100};
textValue.oninput=e=>{if(selected&&selected.classList.contains("textobj"))selected.textContent=e.target.value};
runScript.onclick=()=>{try{new Function(scriptBox.value)();alert("Скрипт выполнен")}catch(e){alert("Ошибка: "+e.message)}};
clearScene.onclick=()=>document.querySelectorAll(".obj").forEach(o=>o.remove());
function openSave(){saveModal.classList.add("show")}
saveProjectTop.onclick=openSave; saveProjectLeft.onclick=openSave;
closeSave.onclick=()=>saveModal.classList.remove("show");
finalSave.onclick=async()=>{
 const s=getSession();
 const id="game_"+Date.now();
 const objects=[...document.querySelectorAll(".obj")].map(o=>({name:o.dataset.name,cls:o.className,text:o.textContent,left:o.style.left,top:o.style.top,width:o.style.width,height:o.style.height,opacity:o.style.opacity,bg:o.style.background}));
 await setDoc(doc(db,"createdGames",id),{id,owner:s.username,name:gameName.value||"Моя игра",desc:gameDesc.value||"",objects,createdAt:Date.now()});
 alert("Игра сохранена");
 saveModal.classList.remove("show");
};
scene.onclick=()=>{if(selected)selected.classList.remove("selected");selected=null;selectedName.textContent="Ничего не выбрано"};
