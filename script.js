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
  const phone = "923042249321";
  const message = `Hello! I want to order ${product} from The Vape Aura.`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

/* ===============================
   SLIDER AUTO PLAY
================================ */
let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll(".slides");
  if (!slides.length) return;

  slides.forEach(slide => (slide.style.display = "none"));

  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 3000);
}

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

/* ===============================
   SCROLL FADE ANIMATION
================================ */
function initFadeAnimation() {
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
}

/* ===============================
   ON PAGE LOAD
================================ */
document.addEventListener("DOMContentLoaded", () => {
  // slider
  showSlides();

  // age popup check
  if (localStorage.getItem("ageVerified") === "yes") {
    const popup = document.getElementById("agePopup");
    if (popup) popup.style.display = "none";
  }

  // fade animation
  initFadeAnimation();
});
