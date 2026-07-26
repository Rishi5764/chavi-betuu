const text = `Dear Chavi,

I just want you to know that you never have to face anything alone.

Please don't take too much tension.

No matter what happens,
I'll always be with you as your best friend.

I truly believe in you.

Work hard,
keep smiling,
and make a great career.

I know you can achieve everything you dream of.

Thank you for being such an amazing part of my life.

I love you as my best friend,
and I hope our friendship stays forever. 🌸

Always with you,
❤️ Rishi`;

const startBtn = document.getElementById("start");
const nextBtn = document.getElementById("next");
const hero = document.querySelector(".hero");
const letter = document.getElementById("letter");
const finalPage = document.getElementById("final");
const typing = document.getElementById("typing");

let i = 0;

startBtn.onclick = () => {
    hero.style.display = "none";
    letter.style.display = "flex";
    typeWriter();
};

nextBtn.onclick = () => {
    letter.style.display = "none";
    finalPage.style.display = "flex";
};

function typeWriter(){
    if(i < text.length){
        typing.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter,30);
    }
}

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML=["💖","❤️","🌸","✨"][Math.floor(Math.random()*4)];

    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDuration=(4+Math.random()*4)+"s";

    heart.style.fontSize=(20+Math.random()*25)+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },8000);

}

setInterval(createHeart,300);
// Music

const music=document.getElementById("bgMusic");

const musicBtn=document.getElementById("musicBtn");

musicBtn.onclick=()=>{

if(music.paused){

music.play();

musicBtn.innerHTML="⏸ Pause";

}else{

music.pause();

musicBtn.innerHTML="🎵 Music";

}

};

// Sparkles

document.addEventListener("mousemove",(e)=>{

let s=document.createElement("div");

s.className="sparkle";

s.style.left=e.clientX+"px";

s.style.top=e.clientY+"px";

document.body.appendChild(s);

setTimeout(()=>{

s.remove();

},1000);

});

// Fireworks

function fireworks(){

for(let i=0;i<30;i++){

let f=document.createElement("div");

f.className="firework";

f.innerHTML=["🎆","✨","💖","❤️"][Math.floor(Math.random()*4)];

f.style.left=Math.random()*100+"vw";

f.style.top=Math.random()*100+"vh";

document.body.appendChild(f);

setTimeout(()=>{

f.remove();

},2000);

}

}

nextBtn.onclick=()=>{

letter.style.display="none";

finalPage.style.display="flex";

fireworks();

}
