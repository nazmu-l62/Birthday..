
const sparkleContainer = document.querySelector(".sparkles");

if (sparkleContainer) {
    for (let i = 0; i < 45; i++) {
        const sparkle = document.createElement("span");

        sparkle.innerHTML = "✦";

        sparkle.style.position = "absolute";
        sparkle.style.left = Math.random() * 100 + "%";
        sparkle.style.top = Math.random() * 100 + "%";
        sparkle.style.color = "#e8c66a";
        sparkle.style.fontSize = (Math.random() * 12 + 5) + "px";
        sparkle.style.opacity = Math.random() * 0.8 + 0.2;
        sparkle.style.animation = `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite alternate`;

        sparkleContainer.appendChild(sparkle);
    }
}

const giftPage = document.querySelector(".gift-page");

if (giftPage) {
    for (let i = 0; i < 18; i++) {
        const heart = document.createElement("span");

        heart.innerHTML = "♥";
        heart.className = "floating-heart";

        heart.style.left = Math.random() * 100 + "%";
        heart.style.animationDuration = (6 + Math.random() * 8) + "s";
        heart.style.animationDelay = (Math.random() * 8) + "s";

        giftPage.appendChild(heart);
    }
}

/* ===== Floating Romantic Hearts ===== */

if (document.body.classList.contains("gift-page")) {
    const heartContainer = document.querySelector(".floating-hearts");

    if (heartContainer) {
        const hearts = ["❤️", "💗", "💕", "💖", "💘"];

        function createHeart() {
            const heart = document.createElement("span");

            heart.innerHTML =
                hearts[Math.floor(Math.random() * hearts.length)];

            heart.style.position = "absolute";
            heart.style.left = Math.random() * 100 + "%";
            heart.style.bottom = "-40px";
            heart.style.fontSize = (16 + Math.random() * 22) + "px";
            heart.style.opacity = "0.8";
            heart.style.animation = "heartFloat 7s linear forwards";

            heartContainer.appendChild(heart);

            setTimeout(() => heart.remove(), 7000);
        }

        setInterval(createHeart, 500);
    }
}
