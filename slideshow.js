// Hero Slideshow Logic
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(n) {
  slides.forEach((slide) => slide.classList.remove("fade"));
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add("fade");
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

// Auto-advance every 5 seconds
setInterval(nextSlide, 5000);

// Initialize first slide
showSlide(0);
