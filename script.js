window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    if (preloader) {
        preloader.style.display = "none";
    }
});

const header = document.getElementById("header");
const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    if (header) {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }

    if (progressBar) {
        const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        progressBar.style.width = (winScroll / height) * 100 + "%";
    }

});

const slides = document.querySelectorAll(".slide");

if (slides.length > 0) {

    let current = 0;

    setInterval(() => {

        slides[current].classList.remove("active");

        current++;

        if (current >= slides.length) current = 0;

        slides[current].classList.add("active");

    }, 3000);

}

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

const menuBtn = document.querySelector(".mobile-menu");
const nav = document.querySelector("nav");

if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("show");
    });

}

const revealElements = document.querySelectorAll(
".about,.why-card,.amenity-card,.gallery-item,.review-card,.attraction-card,.faq-item,.info-box,.stat-box"
);

function reveal() {

    revealElements.forEach(el => {

        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("active");
        }

    });

}

window.addEventListener("scroll", reveal);
reveal();
