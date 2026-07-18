// ===========================
// HERO SLIDER (Optional)
// ===========================

const slides = document.querySelectorAll(".slide");

if (slides.length > 0) {

let current = 0;

setInterval(() => {

slides[current].classList.remove("active");

current = (current + 1) % slides.length;

slides[current].classList.add("active");

}, 5000);

}

// ===========================
// STICKY HEADER
// ===========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

if (window.scrollY > 50) {

header.classList.add("scrolled");

} else {

header.classList.remove("scrolled");

}

});

// ===========================
// SMOOTH SCROLL
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function (e) {

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

if (target) {

target.scrollIntoView({

behavior: "smooth"

});

}

});

});

// ===========================
// SCROLL ANIMATION
// ===========================

const observer = new IntersectionObserver(

(entries) => {

entries.forEach((entry) => {

if (entry.isIntersecting) {

entry.target.classList.add("show");

}

});

},

{

threshold: 0.15

}

);

document
.querySelectorAll(
".box, .card, .gallery-item, .why-card, .near-card, .review-card, .faq-item, .contact-box"
)
.forEach((el) => {

el.classList.add("hidden");

observer.observe(el);

});

// ===========================
// BACK TO TOP BUTTON
// ===========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className = "top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

if (window.scrollY > 500) {

topBtn.style.display = "flex";

} else {

topBtn.style.display = "none";

}

});

topBtn.addEventListener("click", () => {

window.scrollTo({

top: 0,

behavior: "smooth"

});

});

// ===========================
// LOADER
// ===========================

window.addEventListener("load", () => {

document.body.classList.add("loaded");

});
