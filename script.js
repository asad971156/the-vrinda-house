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


/* Scroll Animation */

.hidden{
opacity:0;
transform:translateY(40px);
transition:all .8s ease;
}

.show{
opacity:1;
transform:translateY(0);
}

/* Sticky Header */

header.scrolled{
padding:0;
background:#fff;
box-shadow:0 8px 25px rgba(0,0,0,.08);
}

/* Back To Top */

.top-btn{
position:fixed;
right:20px;
bottom:95px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#b8860b;
color:#fff;
font-size:22px;
cursor:pointer;
display:none;
justify-content:center;
align-items:center;
z-index:999;
box-shadow:0 8px 20px rgba(0,0,0,.25);
transition:.3s;
}

.top-btn:hover{
transform:translateY(-5px);
background:#926d09;
}

body.loaded{
opacity:1;
transition:opacity .5s ease;
}
window.addEventListener("load", () => {

document.body.classList.add("loaded");

});
