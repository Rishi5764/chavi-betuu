const message = `Dear Chavi,

I just want you to know that you never have to face anything alone.

Please don't take too much tension.

No matter what happens, I'll always be with you as your best friend.

I truly believe in you.

Work hard, keep smiling, and make a great career.

I know you can achieve everything you dream of.

Thank you for being such an amazing part of my life.

I love you as my best friend, and I hope our friendship stays forever. 🌸

Always with you,
Rishi ❤️`;

let i = 0;

window.onload = function () {

setTimeout(() => {
document.getElementById("loader").style.display = "none";
}, 2000);

document.getElementById("openBtn").onclick = function () {

document.querySelector(".hero").style.display = "none";

document.getElementById("letter").style.display = "flex";

typing();

};

document.getElementById("next").onclick = function () {

document.getElementById("letter").style.display = "none";

document.getElementById("final").style.display = "flex";

};

};

function typing(){

if(i < message.length){

document.getElementById("typing").innerHTML += message.charAt(i);

i++;

setTimeout(typing,35);

}

}

setInterval(() => {

let heart = document.createElement("div");

heart.innerHTML = "💖";

heart.style.position = "fixed";

heart.style.left = Math.random()*100 + "vw";

heart.style.top = "100vh";

heart.style.fontSize = (20 + Math.random()*25)+"px";

heart.style.animation = "float 5s linear";

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),5000);

},400);
