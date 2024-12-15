const cards = document.querySelector(".cards");
const dots = document.querySelectorAll(".dot");
let currentSlide = 0;

function changeSlide(index) {
    currentSlide = index;
    const offset = -index * 120; // Adjust slide position (50% width per card)
    cards.style.transform = `translateX(${offset}%)`;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

// Auto-transition every 5 seconds
setInterval(() => {
    const nextSlide = (currentSlide + 1) % dots.length;
    changeSlide(nextSlide);
}, 5000);
