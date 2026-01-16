// ✅ WhatsApp Button
function openWhatsApp(){
  window.open("https://wa.me/923042249321", "_blank");
}

// ✅ Slider Code (SAFE)
let slideIndex = 0;

document.addEventListener("DOMContentLoaded", function(){
  showSlides();
});

function showSlides(){
  let slides = document.getElementsByClassName("slides");

  if(slides.length === 0) return;

  for(let i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }

  slideIndex++;
  if(slideIndex > slides.length){
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 3000); // 3 seconds
}
function acceptAge() {
  document.getElementById("agePopup").style.display = "none";
  localStorage.setItem("ageVerified", "true");
}

function rejectAge() {
  window.location.href = "https://google.com";
}

window.onload = function () {
  if (localStorage.getItem("ageVerified")) {
    document.getElementById("agePopup").style.display = "none";
  }
};
const fadeSections = document.querySelectorAll(".fade-section");

function fadeOnScroll() {
  fadeSections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 100) {
      section.classList.add("show");
    }
  });
}

window.addEventListener("scroll", fadeOnScroll);
fadeOnScroll();
/* ===== MOBILE MENU ===== */
function toggleMenu() {
  document.querySelector("nav").classList.toggle("active");
}

/* ===== WHATSAPP ORDER ===== */
function openWhatsApp(product = "Vape Product") {
  const phone = "923136390937"; // WhatsApp number (92 ke sath)
  const message = `Hello! I want to order ${product} from The Vape Aura.`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

/* ===== SLIDER AUTO PLAY ===== */
let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.querySelectorAll(".slides");
  slides.forEach(slide => slide.style.display = "none");
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // 3 seconds
}

/* ===== AGE POPUP ===== */
function acceptAge() {
  localStorage.setItem("ageVerified", "yes");
  document.getElementById("agePopup").style.display = "none";
}

function rejectAge() {
  window.location.href = "https://www.google.com";
}

window.addEventListener("load", () => {
  if (localStorage.getItem("ageVerified") === "yes") {
    document.getElementById("agePopup").style.display = "none";
  }
});

/* ===== SCROLL FADE ANIMATION ===== */
const fadeSections = document.querySelectorAll(".fade-section");

const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

fadeSections.forEach(section => {
  fadeObserver.observe(section);
});
/* ===============================
   MOBILE MENU
================================ */
function toggleMenu() {
  const nav = document.querySelector("nav");
  if (nav) {
    nav.classList.toggle("active");
  }
}

/* ===============================
   WHATSAPP ORDER
================================ */
function openWhatsApp(product = "Vape Product") {
  const phone = "923136390937"; // 92 ke sath number
  const message = `Hello! I want to order ${product} from The Vape Aura.`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

/* ===============================
   AUTO SLIDER
================================ */
let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll(".slides");
  if (!slides.length) return;

  slides.forEach(slide => slide.style.display = "none");

  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 3000); // 3 seconds
}

document.addEventListener("DOMContentLoaded", showSlides);

/* ===============================
   AGE VERIFICATION POPUP
================================ */
function acceptAge() {
  localStorage.setItem("ageVerified", "yes");
  const popup = document.getElementById("agePopup");
  if (popup) popup.style.display = "none";
}

function rejectAge() {
  window.location.href = "https://www.google.com";
}

document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("agePopup");
  const verified = localStorage.getItem("ageVerified");

  if (verified === "yes" && popup) {
    popup.style.display = "none";
  }
});

/* ===============================
   SCROLL FADE ANIMATION
================================ */
document.addEventListener("DOMContentLoaded", () => {
  const fadeSections = document.querySelectorAll(".fade-section");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  fadeSections.forEach(section => observer.observe(section));
});
