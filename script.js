/* ================= PASSWORD ================= */
const correctPassword = "Iloveabhranil";

/* ================= GLOBAL VARIABLES ================= */
let currentIndex = 0;
let items = [];
let track = null;

/* ================= START AFTER PAGE LOAD ================= */
document.addEventListener("DOMContentLoaded", () => {

  document.getElementById("enterBtn").addEventListener("click", checkPassword);

  // hearts
  setInterval(() => {
    document.querySelectorAll(".hearts").forEach(container => {
      let heart = document.createElement("div");
      heart.className = "heart";
      heart.innerText = "💖";
      heart.style.left = Math.random() * 100 + "vw";

      container.appendChild(heart);
      setTimeout(() => heart.remove(), 4000);
    });
  }, 300);

  // carousel
  items = document.querySelectorAll(".carousel-item");
  track = document.getElementById("carouselTrack");

  items.forEach(item => {
    item.addEventListener("click", () => openImage(item));
  });

});


/* ================= PASSWORD CHECK ================= */
function checkPassword() {
  let input = document.getElementById("password").value.trim();
  let msg = document.getElementById("message");

  if (input === correctPassword) {
    msg.innerText = "Welcome merii malkinn 🥰😍";
    msg.style.color = "green";

    let music = document.getElementById("bgMusic");

    if (!music.started) {
      music.volume = 0.6;
      music.play();
      music.started = true;
    }

    setTimeout(() => {
      document.querySelector(".login").style.display = "none";
      document.getElementById("home").style.display = "flex";
    }, 800);

  } else {
    msg.innerText = "Wrong password babbyy 😔";
    msg.style.color = "red";
  }
}


/* ================= NAVIGATION ================= */
function openLetter() {
  hideAll();
  document.getElementById("letterPage").style.display = "flex";
  startLetter();
}

function openLove() {
  hideAll();
  document.getElementById("lovePage").style.display = "flex";
  startLove();
}

function openCelebrate() {
  hideAll();
  document.getElementById("celebratePage").style.display = "flex";
  celebrate();
}

function openQuestion() {
  hideAll();
  document.getElementById("questionPage").style.display = "flex";
  resetQuestion(); // IMPORTANT FIX
}

function openFinal() {
  hideAll();
  document.getElementById("finalPage").style.display = "flex";
}

function goHome() {
  hideAll();
  document.getElementById("home").style.display = "flex";
}

/* 🔥 FIX: hide everything */
function hideAll() {
  document.getElementById("home").style.display = "none";
  document.getElementById("letterPage").style.display = "none";
  document.getElementById("lovePage").style.display = "none";
  document.getElementById("celebratePage").style.display = "none";
  document.getElementById("questionPage").style.display = "none";
  document.getElementById("finalPage").style.display = "none";
}


/* ================= LETTER ================= */
const letterMsg = `happy birthdayyy babyyy i reallyyy wishh i could be there with youuu todayyy more than anythinggg i wanted to sit beside youuu hold your handd see your smileee in front of meee and celebrate every little momentt togetherrr shonaaa it honestlyyy hurts that i cant be there with youuu in personnn but even thennn my hearttt is completelyyy with youuu every second of this dayyy i loveee youuu sooo muchhh my loveee and i trulyyy hope this dayyy brings youuu all the happinessss warmthh and smileess you deserveee you mean so muchhh to mee babbyy more than i can everrr explainnn i wishh i could make your dayyy specialll in personnn make you laughhh tease youuu and just be there with youuu but pleaseee knoww that i am alwayss thinkingg about youuu babyyy i just wantt youuu to feel lovedd valuedd and specialll not just todayyy but every single dayyy you deserveee all the goodd thingss in this worlddd and i hopee todayyy gives youuu even a small partt of that happinessss seeingg youuu happyyy means everythingg to mee shonaaa i promiseee youuu my loveee i will makee up for thiss i will celebratee with youuu properlyyy spend timee with youuu and makee beautifulll memories togetherrr because youuu deserveee nothingg lessss you are so importantt to mee babyyy and i neverrr wantt youuu to feel aloneee no matterr the distanceee i am alwayss here for youuu lovingg youuu caringg for youuu and wishingg the absolute bestt for youuu todayyy and alwayss happy birthdayyy once againn my princessss you mean everythingg to mee 💗`;
let i = 0;

function startLetter() {
  let box = document.getElementById("letterText");
  box.innerHTML = "";
  i = 0;
  typeLetter();
}

function typeLetter() {
  if (i < letterMsg.length) {
    document.getElementById("letterText").innerHTML += letterMsg.charAt(i);
    i++;
    setTimeout(typeLetter, 15);
  }
}


/* ================= LOVE ================= */
const loveMsg = `iff myy cutuuu wantss too knoww whyy i lovee herr thenn i loveee youuu for so many reasonsss that i cant even countt them properlyyy like i love the way you thinkkk the way you feell so deeplyyy and the way your heartt is so pureee and kindd you have this way of making everythingg feel softtt and calm without even tryingg and that is somethingg i trulyyy adoreee i loveee your little habitsss likee the way you talkkk speciallyy youu callingg meee "babyyyyy" anddd "bacchaaaa" and even the way you get mad sometimess it all feels so real and so youuu and i wouldnt changee a single thingg about youuu because every partt of youu is specialll to mee i loveee the way you careee the way you stayyy and the way you make me feel understooddd you make me feel like i matterr and that is somethingg i will neverrr take for granteddd you bring a kind of happinessss into my lifee that i didnt even knoww i neededd and most of all i loveee youuu because you are youuu completelyyy real raww and beautifull from the insidee and that is the reasonnn i will always keep lovingg youuu more and moreee every single dayyy 💗`;
let j = 0;

function startLove() {
  let box = document.getElementById("loveText");
  box.innerHTML = "";
  j = 0;
  typeLove();
}

function typeLove() {
  if (j < loveMsg.length) {
    document.getElementById("loveText").innerHTML += loveMsg.charAt(j);
    j++;
    setTimeout(typeLove, 15);
  }
}


/* ================= CONFETTI ================= */
function celebrate() {
  for (let i = 0; i < 80; i++) {
    let c = document.createElement("div");
    c.className = "confetti";

    let colors = ["#ff4d88", "#ffd166", "#06d6a0", "#118ab2", "#ff9bb3"];
    c.style.background = colors[Math.floor(Math.random() * colors.length)];

    c.style.left = "50%";
    c.style.top = "50%";

    let x = (Math.random() - 0.5) * 800 + "px";
    let y = (Math.random() - 0.5) * 800 + "px";

    c.style.setProperty("--x", x);
    c.style.setProperty("--y", y);

    document.body.appendChild(c);
    setTimeout(() => c.remove(), 2000);
  }
}


/* ================= CAROUSEL ================= */
function updateCarousel() {
  items.forEach((item, index) => {
    item.classList.remove("active");
    if (index === currentIndex) {
      item.classList.add("active");
    }
  });

  const offset = -currentIndex * 200;
  track.style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
  if (currentIndex < items.length - 1) {
    currentIndex++;
    updateCarousel();
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
}


/* ================= POPUP ================= */
function openImage(item) {
  let img = item.querySelector("img").src;
  let text = item.getAttribute("data-text");

  document.getElementById("popupImg").src = img;
  document.getElementById("popupText").innerText = text;

  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}


/* ================= QUESTION PAGE (FIXED) ================= */

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const responseBox = document.getElementById("responseBox");
const video = document.getElementById("questionVideo");
const retryBtn = document.getElementById("retryBtn");
const finalBtn = document.getElementById("finalBtn");

// videos
const defaultVideo = "assests/default.mp4";
const yesVideo = "assests/happy.mp4";
const noVideo = "assests/sad.mp4";

// reset
function resetQuestion() {
  video.src = defaultVideo;
  video.play();

  responseBox.innerHTML = "";

  retryBtn.style.display = "none";
  finalBtn.style.display = "none";
}

// YES
yesBtn.onclick = () => {
  // hide question text
  document.getElementById("questionText").style.display = "none";

  // hide YES / NO buttons
  document.getElementById("questionButtons").style.display = "none";

  // play happy video
  video.src = "assests/happy.mp4";
  video.play();

  // remove any text
  responseBox.innerHTML = "";

  // show only final button
  finalBtn.style.display = "inline-block";
  retryBtn.style.display = "none";
};
// NO
noBtn.onclick = () => {
  // hide question
  document.getElementById("questionText").style.display = "none";

  // hide YES/NO buttons
  document.getElementById("questionButtons").style.display = "none";

  // change video
  video.src = "assests/cry.mp4";
  video.play();

  // show sad message with proper style
  responseBox.innerHTML = `<p id="sadText">Why you dont love me babyy 😔</p>`;

  // show retry
  retryBtn.style.display = "inline-block";
  finalBtn.style.display = "none";
};

// retry
function resetQuestion() {
  video.src = "assests/ques.mp4";
  video.play();

  // show question again
  document.getElementById("questionText").style.display = "block";
  document.getElementById("questionButtons").style.display = "block";

  responseBox.innerHTML = "";

  retryBtn.style.display = "none";
  finalBtn.style.display = "none";
}