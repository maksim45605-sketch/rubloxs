const scene = document.getElementById("scene");
let selected = null;
let count = 0;

function select(el){
  if(selected) selected.classList.remove("selected");
  selected = el;
  selected.classList.add("selected");
  document.getElementById("selectedName").textContent = selected.dataset.name || "Object";
}

function makeObj(cls, name, text=""){
  const el = document.createElement("div");
  el.className = "obj " + cls;
  el.dataset.name = name + " " + (++count);
  el.textContent = text;
  el.style.left = (80 + count*28) + "px";
  el.style.top = (80 + count*18) + "px";
  el.onclick = e => { e.stopPropagation(); select(el); };
  scene.appendChild(el);
  select(el);
}

document.getElementById("addPart").onclick = ()=>makeObj("part", "Part");
document.getElementById("addFrame").onclick = ()=>makeObj("frame", "Frame");
document.getElementById("addText").onclick = ()=>makeObj("textobj", "Text", document.getElementById("textValue").value || "Text");

document.getElementById("toggleSelected").onclick = ()=>{
  if(selected) selected.classList.toggle("off");
};
document.getElementById("colorPicker").oninput = e=>{
  if(selected) selected.style.background = e.target.value;
};
document.getElementById("textValue").oninput = e=>{
  if(selected && selected.classList.contains("textobj")) selected.textContent = e.target.value;
};
document.getElementById("runScript").onclick = ()=>{
  try{ new Function(document.getElementById("scriptBox").value)(); alert("Скрипт выполнен"); }
  catch(e){ alert("Ошибка скрипта: " + e.message); }
};
document.getElementById("clearScene").onclick = ()=>{
  document.querySelectorAll(".obj").forEach(o=>o.remove());
  selected = null;
  document.getElementById("selectedName").textContent = "Ничего не выбрано";
};
document.getElementById("saveProject").onclick = ()=>{
  const data = [...document.querySelectorAll(".obj")].map(o=>({name:o.dataset.name, cls:o.className, text:o.textContent, bg:o.style.background, left:o.style.left, top:o.style.top}));
  localStorage.setItem("rublox_studio_project", JSON.stringify(data));
  alert("Проект сохранён");
};
document.getElementById("fontUpload").onchange = e=>{
  const file = e.target.files[0];
  if(!file) return;
  const url = URL.createObjectURL(file);
  const style = document.createElement("style");
  style.textContent = `@font-face{font-family:CustomRubloxFont;src:url(${url})} .scene,.scene *{font-family:CustomRubloxFont,Arial!important}`;
  document.head.appendChild(style);
};
scene.onclick = ()=>{ if(selected) selected.classList.remove("selected"); selected=null; document.getElementById("selectedName").textContent="Ничего не выбрано"; };
