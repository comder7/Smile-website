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

function dodgeButton() {

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
}

// Move away as soon as the cursor gets close, not just on direct hover
document.addEventListener("mousemove", (e) => {

    const rect = noBtn.getBoundingClientRect();

    const buttonCenterX = rect.left + rect.width / 2;
    const buttonCenterY = rect.top + rect.height / 2;

    const distance = Math.hypot(e.clientX - buttonCenterX, e.clientY - buttonCenterY);

    // If the cursor is within 80px of the button's center, dodge
    if (distance < 80) {
        dodgeButton();
    }

});

// Keep touch support for mobile (tap-to-dodge)
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    dodgeButton();
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

const finalOverlay = document.getElementById("finalOverlay");
const progressFill = document.getElementById("progressFill");
const progressLabel = document.getElementById("progressLabel");

lastSmileBtn.addEventListener("click", () => {

    // Show the popup over the existing background
    finalOverlay.classList.remove("hidden");

    // Trigger the fade/scale-in animation
    requestAnimationFrame(() => {
        finalOverlay.classList.add("show");
    });

    // Fire confetti 🎉
    if (typeof confetti === "function") {
        confetti({
            particleCount: 150,
            spread: 90,
            origin: { y: 0.6 }
        });

        setTimeout(() => {
            confetti({
                particleCount: 80,
                angle: 60,
                spread: 70,
                origin: { x: 0 }
            });
            confetti({
                particleCount: 80,
                angle: 120,
                spread: 70,
                origin: { x: 1 }
            });
        }, 400);
    }

    // Animate the progress bar filling up to 100%
    setTimeout(() => {
        progressFill.style.width = "100%";
    }, 300);

    // Animate the percentage counter
    let percent = 0;
    const counter = setInterval(() => {
        percent += 2;
        if (percent >= 100) {
            percent = 100;
            clearInterval(counter);
        }
        progressLabel.innerText = percent + "%";
    }, 36);

});
