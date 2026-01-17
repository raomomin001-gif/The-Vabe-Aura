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
/* ===== MOBILE MENU ===== */
function toggleMenu(){
  document.querySelector("nav").classList.toggle("active");
}

/* ===== WHATSAPP ===== */
function openWhatsApp(){
  window.open("https://wa.me/923042249321?text=Hi%20I%20want%20to%20order%20from%20The%20Vape%20Aura","_blank");
}

/* ===== SLIDER ===== */
let slideIndex = 0;
let manualIndex = 0;

function showSlides(){
  const slides = document.querySelectorAll(".slides");
  slides.forEach(s => s.style.display="none");
  slideIndex++;
  if(slideIndex > slides.length){ slideIndex = 1; }
  slides[slideIndex-1].style.display="block";
  setTimeout(showSlides, 3000);
}

function currentSlide(n){
  const slides = document.querySelectorAll(".slides");
  slides.forEach(s => s.style.display="none");
  slides[n-1].style.display="block";
}

/* ===== AGE POPUP ===== */
function acceptAge(){
  localStorage.setItem("ageVerified","yes");
  document.getElementById("agePopup").style.display="none";
}
function rejectAge(){
  window.location.href="https://google.com";
}

/* ===== LOAD PRODUCTS FROM JSON ===== */
fetch("vape_models.json")
.then(res => res.json())
.then(data => {
  const grid = document.getElementById("productGrid");

  data.brands.forEach(brand => {
    brand.models.forEach(model => {
      const div = document.createElement("div");
      div.className = "product-card";
      div.innerHTML = `
        <h3>${brand.name}</h3>
        <p>${model.model_name}</p>
        <div class="price">${model.price_in_local_currency || ""}</div>
        <button onclick="openWhatsApp()">Order</button>
      `;
      grid.appendChild(div);
    });
  });
});

/* ===== ON LOAD ===== */
document.addEventListener("DOMContentLoaded",()=>{
  if(localStorage.getItem("ageVerified")==="yes"){
    document.getElementById("agePopup").style.display="none";
  }
  showSlides();
});
