// ===============================
// Project Akshara ❤️
// Part 3 - JavaScript
// ===============================

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const lovePage = document.getElementById("lovePage");
const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("bgMusic");
const restart = document.getElementById("restart");

const messages = [
    "No 🙈",
    "Really? 🥺",
    "Think Again 😭",
    "Wrong Answer 😤",
    "Please? ❤️",
    "Nope 😂",
    "Try Again 🤭",
    "Press Yes 💖",
    "Mission Failed 🤣"
];

let index = 0;

// -------------------------------
// YES Button
// -------------------------------

yesBtn.addEventListener("click", () => {

    lovePage.style.display = "flex";

    createHearts();

});

// -------------------------------
// BACK Button
// -------------------------------

restart.addEventListener("click", () => {

    lovePage.style.display = "none";

});

// -------------------------------
// Music Button
// -------------------------------

let playing = false;

musicBtn.addEventListener("click", () => {

    if(!playing){

        music.play();
        musicBtn.innerHTML = "⏸️";
        playing = true;

    }

    else{

        music.pause();
        musicBtn.innerHTML = "🎵";
        playing = false;

    }

});

// -------------------------------
// Moving NO Button
// -------------------------------

function moveButton(){

    const padding = 20;

    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    index++;

    if(index >= messages.length){

        index = 0;

    }

    noBtn.innerHTML = messages[index];

}

noBtn.addEventListener("mouseover", moveButton);

noBtn.addEventListener("touchstart", function(e){

    e.preventDefault();

    moveButton();

});

// -------------------------------
// Floating Hearts
// -------------------------------

function createHearts(){

    setInterval(()=>{

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random()*100+"vw";
        heart.style.top = "100vh";
        heart.style.fontSize = (20+Math.random()*25)+"px";
        heart.style.pointerEvents = "none";
        heart.style.animation = "floatHeart 5s linear forwards";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },5000);

    },250);

}

// -------------------------------
// Floating Heart Animation
// -------------------------------

const style = document.createElement("style");

style.innerHTML = `

@keyframes floatHeart{

0%{

transform:translateY(0);
opacity:1;

}

100%{

transform:translateY(-110vh);
opacity:0;

}

}

`;

document.head.appendChild(style);