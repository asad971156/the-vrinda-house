// ==============================
// HERO SLIDER (3 Seconds)
// ==============================

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index){

slides.forEach(slide=>{
slide.classList.remove("active");
});

slides[index].classList.add("active");

}

setInterval(()=>{

currentSlide++;

if(currentSlide >= slides.length){
currentSlide = 0;
}

showSlide(currentSlide);

},3000);


// ==============================
// TRANSPARENT HEADER
// ==============================

const header = document.getElementById("header");

window.addEventListener("scroll",()=>{

if(window.scrollY > 80){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});


// ==============================
// GOLDEN PROGRESS BAR
// ==============================

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll",()=>{

const scrollTop = document.documentElement.scrollTop;

const height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const progress = (scrollTop / height) * 100;

progressBar.style.width = progress + "%";

});


// ==============================
// SMOOTH FADE UP
// ==============================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:0.15
});

document.querySelectorAll(".section").forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(60px)";

section.style.transition="all .8s ease";

observer.observe(section);

});


// ==============================
// NAVBAR ACTIVE LINK
// ==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current = "";

sections.forEach(section=>{

const sectionTop = section.offsetTop - 120;

if(pageYOffset >= sectionTop){

current = section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){

link.classList.add("active");

}

});

});
