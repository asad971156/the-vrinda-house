/*==================================
PRELOADER
==================================*/

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {

        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";

    }, 800);

});

/*==================================
HEADER + PROGRESS BAR
==================================*/

const header = document.getElementById("header");
const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

    const scrollTop = window.scrollY;

    const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / docHeight) * 100;

    progressBar.style.width = progress + "%";

});

/*==================================
HERO SLIDER
==================================*/

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function changeSlide() {

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");

}

setInterval(changeSlide, 3000);

/*==================================
SMOOTH MENU SCROLL
==================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/*==================================
MOBILE MENU
==================================*/

const menuBtn = document.querySelector(".mobile-menu");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("show");

});

/*==================================
SCROLL REVEAL
==================================*/

const revealElements = document.querySelectorAll(
".about,.why-card,.amenity-card,.gallery-item,.review-card,.attraction-card,.faq-item,.info-box,.stat-box"
);

function revealOnScroll() {

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            el.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/*==================================
ACTIVE MENU
==================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*==============================
MOBILE NAV
==============================*/

nav.show{

    display:block;

    position:absolute;

    top:80px;

    left:5%;

    width:90%;

    background:#fff;

    border-radius:15px;

    box-shadow:0 10px 30px rgba(0,0,0,.15);

    padding:20px;

}

nav.show ul{

    flex-direction:column;

    gap:20px;

}

nav.show ul li a{

    color:#111;

}

/*==============================
SCROLL ANIMATION
==============================*/

.about,
.why-card,
.amenity-card,
.gallery-item,
.review-card,
.attraction-card,
.faq-item,
.info-box,
.stat-box{

    opacity:0;

    transform:translateY(40px);

    transition:.8s ease;

}

.about.active,
.why-card.active,
.amenity-card.active,
.gallery-item.active,
.review-card.active,
.attraction-card.active,
.faq-item.active,
.info-box.active,
.stat-box.active{

    opacity:1;

    transform:translateY(0);

}

nav ul li a.active{

    color:var(--primary);

}
