/* ================= PASSWORD ================= */
const correctPassword = "Iloveabhranil";

/* ================= GLOBAL ================= */
let currentIndex = 0;
let loveStep = 0;

/* ================= LOAD ================= */
document.addEventListener("DOMContentLoaded", () => {
const enterBtn = document.getElementById("enterBtn");
if (enterBtn) {
  enterBtn.onclick = checkPassword;
}

  const loveBtn = document.getElementById("loveBtn");
  const responseBox = document.getElementById("responseBox");
  const finalBtn = document.getElementById("finalBtn");

  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const retryBtn = document.getElementById("retryBtn");
  const video = document.getElementById("questionVideo");

  const music = document.getElementById("bgMusic");
  if (music) {
  music.addEventListener("ended", () => {
    music.currentTime = 0;
    music.play();
  });
}

 

  /* ================= FLOATING HEARTS ================= */
 function createHeart() {
  const activePage = document.querySelector("section:not([style*='display: none'])");
  if (!activePage) return;

  const container = activePage.querySelector(".hearts");
  if (!container) return;

  // LIMIT hearts (important)
  if (container.children.length > 15) return;

  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "💖";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (15 + Math.random() * 20) + "px";

  container.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}

  setInterval(createHeart, 300);

  /* ================= YES ================= */
  if (yesBtn) {
    yesBtn.onclick = () => {

      document.getElementById("questionText").style.display = "none";
      document.getElementById("questionButtons").style.display = "none";

      video.src = "assests/happy.mp4";
      video.load();
      video.play();

      responseBox.innerHTML = "";

      loveStep = 0;
      loveBtn.style.display = "inline-block";
    };
  }

  /* ================= NO ================= */
if (noBtn) {
  noBtn.onclick = () => {

    document.getElementById("questionButtons").style.display = "none";

    video.src = "assests/cry.mp4";
    video.load();
    video.play();

    responseBox.innerHTML = "";

    retryBtn.style.display = "inline-block";
  };
}

  /* ================= LOVE FLOW ================= */
  if (loveBtn) {
    loveBtn.onclick = () => {

      loveStep++;

      if (loveStep === 1) {
        responseBox.innerHTML = "1. yourr cutenessss 💖";
        loveBtn.innerText = "Next ➡️";
      }

      else if (loveStep === 2) {
        responseBox.innerHTML = "2. yourr beautyyy 😍";
      }

      else if (loveStep === 3) {

  // ❌ hide old question video
  document.getElementById("questionVideo").style.display = "none";

  responseBox.innerHTML = `
  <div class="final-layout">

    <!-- LEFT -->
    <div class="side">
      1. your cutenessss  <br>
      2. your beautyyy  <br>
      3. your smileee <br>
      4. your eyesss <br>
      5. your laughhh <br>
      6. your voiceee <br>
      7. your vibeee <br>
      8. your kindnessss <br>
      9. your honestyyy <br>
      10. your cutenessss <br>
      11. your attitudeee <br>
      12. your confidenceee <br>
      13. your shynessss <br>
      14. your careee <br>
      15. your energyyy <br>
      16. your styleee <br>
      17. your presenceee <br>
      18. your warmthhh <br>
      19. your mood swingsss <br>
      20. your expressionsss <br>
      21. your loyaltyyy <br>
      22. your softnessss <br>
      23. your strengthhh <br>
      24. your patienceee <br>
      25. your reactionsss <br>
      26. your habitsss <br>
      27. your focusss <br>
      28. your efforttt <br>
      29. your loveee <br>
      30. your trusttt <br>
      31. your supporttt <br>
      32. your charm <br>
      33. your glowww <br>
      34. your uniquenessss <br>
      35. your innocenceee <br>
      36. your humorrr <br>
      37. your curiosityyy <br>
      38. your intelligenceee <br>
      39. your creativityyy <br>
      40. your passionnn <br>
      41. your sparkkk <br>
      42. your textsss <br>
      43. your callsss <br>
      44. your words <br>
      45. your presence in my lifeee <br>
      46. your little talksss <br>
      47. your big hearttt <br>
      48. your random thoughtsss <br>
      49. your late-night energyyy <br>
      50. your sleepy voiceee
    </div>

    <!-- CENTER -->
    <div class="center-box no-bg">
      <video autoplay muted loop>
        <source src="assests/happy.mp4" type="video/mp4">
      </video>

      <button onclick="openFinal()" class="final-btn">
        Last Message For You 💌
      </button>
    </div>

    <!-- RIGHT -->
    <div class="side">
      51. your smile in picturesss <br>
      52. your natural beautyyy <br>
      53. your effort for meee <br>
      54. your understandinggg <br>
      55. your loyalty to usss <br>
      56. your way of lovinggg <br>
      57. your comforttt <br>
      58. your reassuranceee <br>
      59. your positivityyy <br>
      60. your calmnessss <br>
      61. your chaosss <br>
      62. your vibe with meee <br>
      63. your attentionnn <br>
      64. your respecttt <br>
      65. your honesty with meee <br>
      66. your way of caringgg <br>
      67. your reactions to meee <br>
      68. your way of talkinggg <br>
      69. your presence in tough timesss <br>
      70. your belief in meee <br>
      71. your sweetnessss <br>
      72. your realnessss <br>
      73. your flawsss <br>
      74. your perfection in my eyesss <br>
      75. your everythinggg <br>
      76. your existenceee <br>
      77. your impact on meee <br>
      78. your memories with meee <br>
      79. your future with meee <br>
      80. your love for meee <br>
      81. your place in my hearttt <br>
      82. your importanceee <br>
      83. your valueee <br>
      84. your meaning to meee <br>
      85. your smile againnn <br>
      86. your eyes againnn <br>
      87. your laugh againnn <br>
      88. your everything againnn <br>
      89. just youuu <br>
      90. always youuu <br>
      91. only youuu <br>
      92. you being mineee <br>
      93. me being yoursss <br>
      94. usss <br>
      95. our bonddd <br>
      96. our momentsss <br>
      97. our storyyy <br>
      98. our loveee <br>
      99. everything about youuu <br>
      100. you, endlesslyyy 💖
    </div>

  </div>
  `;

  loveBtn.style.display = "none";
}

      else if (loveStep === 4) {
  loveBtn.style.display = "none";
  finalBtn.style.display = "inline-block";
  finalBtn.innerText = "Last Message For You 💌";
}
    };
  }

  /* ================= POPUP ================= */
  document.querySelectorAll(".carousel-item").forEach(item => {
    item.onclick = () => {
      document.getElementById("popup").style.display = "flex";
      document.getElementById("popupImg").src = item.querySelector("img").src;
      document.getElementById("popupText").innerText = item.dataset.text;
    };
  });

  // ✅ ADD THIS HERE
const backBtn = document.getElementById("backHomeBtn");
if (backBtn) backBtn.style.display = "none";

});


/* ================= PASSWORD ================= */
function checkPassword() {
  let input = document.getElementById("password").value.trim();
  let msg = document.getElementById("message");

  

  if (input === correctPassword) {
    msg.innerText = "Welcome merii malkinn 🥰😍";
    msg.style.color = "green";

      // 🎵 ADD THIS
  const music = document.getElementById("bgMusic");
  if (music) {
    music.currentTime = 0;
    music.play().catch(() => {});
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
function hideAll() {
  document.querySelectorAll("section").forEach(sec => {
    sec.style.display = "none";
  });

  // 🔴 ALWAYS HIDE BUTTON FIRST
  const btn = document.getElementById("backHomeBtn");
  if (btn) btn.style.display = "none";
}

function openLetter() { hideAll(); document.getElementById("letterPage").style.display = "flex"; }
function openLove() { hideAll(); document.getElementById("lovePage").style.display = "flex"; }
function openCelebrate() {
  hideAll();
  document.getElementById("celebratePage").style.display = "flex";

  // ✅ SHOW BUTTON HERE
  document.getElementById("backHomeBtn").style.display = "block";
}
function openQuestion() {
  hideAll();
  document.getElementById("questionPage").style.display = "flex";

  // ✅ SHOW BUTTON HERE
  document.getElementById("backHomeBtn").style.display = "block";
}
function openFinal() { hideAll(); document.getElementById("finalPage").style.display = "flex"; }
function goHome() {
  hideAll();
  document.getElementById("home").style.display = "flex";
}

/* ================= CAROUSEL ================= */
function nextSlide() {
  const track = document.getElementById("carouselTrack");
  const items = document.querySelectorAll(".carousel-item");

  currentIndex++;
  if (currentIndex >= items.length) currentIndex = 0;

  track.style.transform = `translateX(-${currentIndex * 200}px)`;
}

function prevSlide() {
  const track = document.getElementById("carouselTrack");
  const items = document.querySelectorAll(".carousel-item");

  currentIndex--;
  if (currentIndex < 0) currentIndex = items.length - 1;

  track.style.transform = `translateX(-${currentIndex * 200}px)`;
}

/* ================= POPUP CLOSE ================= */
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function resetQuestion() {
  const video = document.getElementById("questionVideo");

  document.getElementById("questionText").style.display = "block";
  document.getElementById("questionButtons").style.display = "block";

  document.getElementById("responseBox").innerHTML = "";

  document.getElementById("retryBtn").style.display = "none";
  document.getElementById("loveBtn").style.display = "none";

  video.src = "assests/ques.mp4";
  video.load();
  video.play();
}