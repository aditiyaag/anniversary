/* =========================
   START WEBSITE BUTTON
========================= */

const startButton = document.getElementById("startButton");
const mainContent = document.getElementById("mainContent");
const music = document.getElementById("music");

startButton.addEventListener("click", function () {
    mainContent.scrollIntoView({
        behavior: "smooth"
    });

    music.play().catch(function () {
        console.log("Music awaiting user interaction");
    });
});


/* =========================
   MUSIC BUTTON
========================= */

const musicButton = document.getElementById("musicButton");

musicButton.addEventListener("click", function () {
    if (music.paused) {
        music.play();
        musicButton.innerHTML = "🎵";
    } else {
        music.pause();
        musicButton.innerHTML = "🔇";
    }
});


/* =========================
   RELATIONSHIP TIMER
========================= */

const relationshipDate = new Date("September 09, 2025 00:00:00");

function updateTimer() {
    const now = new Date();
    let difference = now - relationshipDate;

    const totalSeconds = Math.floor(difference / 1000);
    const seconds = totalSeconds % 60;

    const totalMinutes = Math.floor(totalSeconds / 60);
    const minutes = totalMinutes % 60;

    const totalHours = Math.floor(totalMinutes / 60);
    const hours = totalHours % 24;

    const totalDays = Math.floor(totalHours / 24);

    let years = now.getFullYear() - relationshipDate.getFullYear();
    let months = now.getMonth() - relationshipDate.getMonth();

    if (now.getDate() < relationshipDate.getDate()) {
        months--;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    const anniversaryThisMonth = new Date(
        now.getFullYear(),
        now.getMonth(),
        relationshipDate.getDate()
    );

    let days;

    if (now < anniversaryThisMonth) {
        const previousMonth = new Date(
            now.getFullYear(),
            now.getMonth(),
            relationshipDate.getDate()
        );

        previousMonth.setMonth(previousMonth.getMonth() - 1);

        days = Math.floor(
            (now - previousMonth) / (1000 * 60 * 60 * 24)
        );
    } else {
        days = Math.floor(
            (now - anniversaryThisMonth) / (1000 * 60 * 60 * 24)
        );
    }

    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

updateTimer();
setInterval(updateTimer, 1000);


/* =========================
   100 REASONS (FULL 100)
========================= */

const reasons = [
    // 1 - 10
    "Because you will always hold a special place in my heart.",
    "Because your smile instantly brightens up my whole day.",
    "Because with you, I can completely be myself.",
    "Because you always know how to make me laugh.",
    "Because your presence makes everything feel so much sweeter.",
    "Because I always feel comfortable whenever I talk to you.",
    "Because you are truly one of the best parts of my life.",
    "Because you have given me the most beautiful memories.",
    "Because time flies so fast whenever I am with you.",
    "Because you always make me miss you when you're away.",

    // 11 - 20
    "Because I love listening to all your random stories.",
    "Because seeing you happy brings me genuine joy.",
    "Because your smile is the most precious thing to me.",
    "Because you turn ordinary days into magical moments.",
    "Because I love the authentic way you carry yourself.",
    "Because being with you has taught me so many valuable things.",
    "Because every single memory with you is worth keeping forever.",
    "Because I feel so blessed and lucky to have met you.",
    "Because you constantly linger in my mind and heart.",
    "Because you are someone I could never forget.",

    // 21 - 30
    "Because I cherish every second spent by your side.",
    "Because you brought vibrant colors into my world.",
    "Because you are an essential chapter of my life story.",
    "Because I love the sound of us laughing together.",
    "Because I look forward to every single conversation we have.",
    "Because I adore how we create lovely memories together.",
    "Because you taught me what true companionship feels like.",
    "Because I am genuinely a happier person with you.",
    "Because you will always be someone uniquely special to me.",
    "Because I deeply appreciate the way you treat and care for me.",

    // 31 - 40
    "Because you inspire me to become a better version of myself.",
    "Because of all the little quirks about you that I adore.",
    "Because I always look forward to our next time together.",
    "Because you make gloomy days feel warm and colorful.",
    "Because your genuine smile melts my heart every time.",
    "Because you are an irreplaceable part of my journey.",
    "Because I cherish every quiet moment we share.",
    "Because looking back at our memories always brings warmth.",
    "Because I love making brand new memories with you.",
    "Because you made me believe in the beauty of love.",

    // 41 - 50
    "Because you mean the absolute world to me.",
    "Because I love seeing the world through your eyes.",
    "Because there are so many wonderful things that make you unique.",
    "Because I am honored to be a part of your life.",
    "Because I love those heart-to-heart talks late at night.",
    "Because you gave me memories I will treasure for a lifetime.",
    "Because I never get tired of learning more about you.",
    "Because you are simply and beautifully you.",
    "Because with you by my side, life's challenges feel lighter.",
    "Because I cherish every tiny, simple moment with you.",

    // 51 - 60
    "Because you always give me a reason to smile every morning.",
    "Because I love sharing my dreams and secrets with you.",
    "Because you make me feel like I never have to face the world alone.",
    "Because I appreciate your presence more than you know.",
    "Because you are undoubtedly my favorite human being.",
    "Because I love how effortlessly we spend time together.",
    "Because our shared stories are etched deeply in my memory.",
    "Because every sweet surprise from you means everything to me.",
    "Because you made my life journey so exciting and meaningful.",
    "Because I truly love writing our love story together.",

    // 61 - 70
    "Because you unlocked feelings in me I never knew existed.",
    "Because I admire watching you chase after your dreams.",
    "Because your happiness will always be my priority.",
    "Because you are always in my silent prayers and wishes.",
    "Because you occupy a place in my heart that no one else ever could.",
    "Because every minute with you feels like home.",
    "Because you give me something beautiful to look forward to tomorrow.",
    "Because I could talk to you about anything and everything.",
    "Because my world is richer and fuller with you in it.",
    "Because I want to keep creating endless memories with you.",

    // 71 - 80
    "Because of the unspoken understanding we share.",
    "Because seeing your eyes sparkle with joy is pure magic.",
    "Because I notice and appreciate every sweet effort you make.",
    "Because you are beyond precious to me.",
    "Because I am proud of every step we have taken together.",
    "Because we made it this far, stronger than ever.",
    "Because this past year with you has been an unforgettable blessing.",
    "Because I want to celebrate countless more anniversaries with you.",
    "Because there are still a million adventures waiting for us.",
    "Because I want our story to keep going, chapter after chapter.",

    // 81 - 90
    "Because you are my favorite thought before falling asleep.",
    "Because I love dreaming of a future with you in it.",
    "Because you taught me how precious real connection is.",
    "Because meeting you was the greatest coincidence of my life.",
    "Because getting to know you has been my sweetest privilege.",
    "Because I am so thankful for every chapter we wrote together.",
    "Because I love walking this path of life hand in hand with you.",
    "Because you made our first year together deeply unforgettable.",
    "Because there is still so much love I want to give to you.",
    "Because your patience with me never ceases to amaze me.",

    // 91 - 100 (Tambahan pelengkap 100)
    "Because you always know how to comfort me when things get tough.",
    "Because holding your hand still gives me butterflies.",
    "Because you make me feel valued, appreciated, and understood.",
    "Because your warmth turns any place into a peaceful sanctuary.",
    "Because I love the little inside jokes only the two of us understand.",
    "Because you believe in me even when I doubt myself.",
    "Because every day spent with you is a day well lived.",
    "Because you are not just my love, but my safest space and best friend.",
    "Because loving you is the easiest and most natural thing in the world.",
    "And for the 100th reason... I just want to stay by your side forever ❤️"
];


const reasonsGrid = document.getElementById("reasonsGrid");

reasons.forEach(function (reason, index) {
    const card = document.createElement("div");
    card.classList.add("reason-card");

    card.innerHTML = `
        <span class="reason-number">
            Reason ${index + 1}
        </span>
        <p>
            ${reason}
        </p>
    `;

    reasonsGrid.appendChild(card);
});


/* =========================
   HEARTS ANIMATION
========================= */

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animationDuration = Math.random() * 5 + 5 + "s";

    document.body.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 800);
