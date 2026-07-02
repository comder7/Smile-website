const noBtn = document.getElementById("noBtn");

const funnyTexts = [
  "Never 🙈",
  "Still Never 😝",
  "Nice Try 😂",
  "Too Slow 😏",
  "Almost 🤭",
  "Just Click 'I'm Curious' 💛"
];

let count = 0;

noBtn.addEventListener("mouseover", () => {

    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    if (count < funnyTexts.length - 1) {
        count++;
        noBtn.innerText = funnyTexts[count];
    }

});

// ---------- SCREEN 1 & 2 ----------

const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");

const yesBtn = document.getElementById("yesBtn");

const littleBtn = document.getElementById("littleBtn");
const notYetBtn = document.getElementById("notYetBtn");

const response = document.getElementById("response");

yesBtn.addEventListener("click", () => {

    screen1.style.display = "none";
    screen2.style.display = "block";

});

littleBtn.addEventListener("click", () => {

    document.querySelector("#screen2 .buttons").style.display = "none";

    response.innerHTML = "😊 Yay! That's progress.";
    response.classList.add("show");

    setTimeout(() => {

        screen2.style.display = "none";
        screen3.style.display = "block";

    }, 2500);

});

notYetBtn.addEventListener("click", () => {

    document.querySelector("#screen2 .buttons").style.display = "none";

    response.innerHTML = "😏 Give me one more screen.";
    response.classList.add("show");

    setTimeout(() => {

        screen2.style.display = "none";
        screen3.style.display = "block";

    }, 2500);

});

// ---------- SCREEN 3 ----------

const screen3 = document.getElementById("screen3");

const stayBtn = document.getElementById("stayBtn");

const response3 = document.getElementById("response3");

stayBtn.addEventListener("click", () => {

    document.querySelector("#screen3 .buttons").style.display = "none";

    response3.innerHTML = "😼 Nice choice.";

    response3.classList.add("show");

    setTimeout(() => {

        screen3.style.display = "none";
        screen4.style.display = "block";

    }, 2500);

});

// ---------- SCREEN 4 ----------

const screen4 = document.getElementById("screen4");

const maybeBtn = document.getElementById("maybeBtn");
const imaginedBtn = document.getElementById("imaginedBtn");

const response4 = document.getElementById("response4");

maybeBtn.addEventListener("click", () => {

    document.querySelector("#screen4 .buttons").style.display = "none";

    response4.innerHTML = "😎 Aha! I knew it.";

    response4.classList.add("show");

    setTimeout(() => {

        screen4.style.display = "none";
        screen5.style.display = "block";

    }, 2500);

});

imaginedBtn.addEventListener("click", () => {

    document.querySelector("#screen4 .buttons").style.display = "none";

    response4.innerHTML = "😼 I'll keep trying then.";

    response4.classList.add("show");

    setTimeout(() => {

        screen4.style.display = "none";
        screen5.style.display = "block";

    }, 2500);

});

// ---------- SCREEN 5 ----------

const screen5 = document.getElementById("screen5");

const maybe5Btn = document.getElementById("maybe5Btn");
const coincidenceBtn = document.getElementById("coincidenceBtn");

const response5 = document.getElementById("response5");

maybe5Btn.addEventListener("click", () => {

    document.querySelector("#screen5 .buttons").style.display = "none";

    response5.innerHTML = "😎 I'll take that as a win.";

    response5.classList.add("show");

    setTimeout(() => {

        screen5.style.display = "none";
        screen6.style.display = "block";

    }, 2500);

});

coincidenceBtn.addEventListener("click", () => {

    document.querySelector("#screen5 .buttons").style.display = "none";

    response5.innerHTML = "😼 Hmm... I'll let you believe that.";

    response5.classList.add("show");

    setTimeout(() => {

        screen5.style.display = "none";
        screen6.style.display = "block";

    }, 2500);

});

// ---------- SCREEN 6 ----------

const screen6 = document.getElementById("screen6");

const maybe6Btn = document.getElementById("maybe6Btn");
const never6Btn = document.getElementById("never6Btn");

const response6 = document.getElementById("response6");

maybe6Btn.addEventListener("click", () => {

    document.querySelector("#screen6 .buttons").style.display = "none";

    response6.innerHTML = "😏 I had a feeling you'd say that.";

    response6.classList.add("show");

    setTimeout(() => {

        screen6.style.display = "none";
        screen7.style.display = "block";

        setTimeout(() => {
            signature.classList.remove("hidden");
        }, 1000);

        setTimeout(() => {
            ps.classList.remove("hidden");
        }, 2000);

        setTimeout(() => {
            lastSmileBtn.classList.remove("hidden");
        }, 3000);

    }, 2500);

});

never6Btn.addEventListener("click", () => {

    document.querySelector("#screen6 .buttons").style.display = "none";

    response6.innerHTML = "😼 Hmm... I'm still not convinced.";

    response6.classList.add("show");

    setTimeout(() => {

        screen6.style.display = "none";
        screen7.style.display = "block";

        setTimeout(() => {
            signature.classList.remove("hidden");
        }, 1000);

        setTimeout(() => {
            ps.classList.remove("hidden");
        }, 2000);

        setTimeout(() => {
            lastSmileBtn.classList.remove("hidden");
        }, 3000);

    }, 2500);

});

// ---------- SCREEN 7 ----------

const screen7 = document.getElementById("screen7");

const signature = document.getElementById("signature");
const ps = document.getElementById("ps");

const lastSmileBtn = document.getElementById("lastSmileBtn");

lastSmileBtn.addEventListener("click", () => {

    document.body.innerHTML = `

    <div class="card">

        <h1>🎉 Mission Accomplished!</h1>

        <div style="font-size:90px;">😎🐱</div>

        <p>

            Smile Status

            <br><br>

            ██████████ 100%

            <br><br>

            Have an amazing day,

            <br>

            <strong>Aastha!</strong> 🌼

            <br><br>

            😊

        </p>

    </div>

    `;

});
