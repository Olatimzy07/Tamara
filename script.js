for(let i=0;i<25;i++){
let h=document.createElement("div");
h.innerHTML="❤️";
h.classList.add("heart");
h.style.left=Math.random()*100+"vw";
h.style.fontSize=(Math.random()*20+10)+"px";
h.style.animationDuration=(Math.random()*5+5)+"s";
document.body.appendChild(h);
}