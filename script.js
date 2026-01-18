/* ===============================
   MOBILE MENU
================================ */
function toggleMenu(){
  const nav = document.querySelector("nav");
  if(nav){
    nav.classList.toggle("active");
  }
}

/* ===============================
   WHATSAPP ORDER
================================ */
function openWhatsApp(product = "Vape Product"){
  const phone = "923042249321";
  const message = `Hello! I want to order ${product} from The Vape Aura.`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

/* ===============================
   SLIDER AUTO PLAY
================================ */
let slideIndex = 0;

function showSlides(){
  const slides = document.querySelectorAll(".slides");
  if(!slides.length) return;

  slides.forEach(slide => slide.style.display = "none");

  slideIndex++;
  if(slideIndex > slides.length){
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}

/* ===============================
   AGE VERIFICATION POPUP (FINAL FIX)
================================ */
function acceptAge(){
  localStorage.setItem("ageVerified", "yes");
  const popup = document.getElementById("agePopup");
  if(popup){
    popup.classList.add("hide");
  }
  document.body.style.overflow = "auto";
}

function rejectAge(){
  window.location.href = "https://www.google.com";
}

/* ===============================
   SCROLL FADE ANIMATION
================================ */
function initFadeAnimation(){
  const sections = document.querySelectorAll(".fade-section");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => observer.observe(section));
}

/* ===============================
   LOAD PRODUCTS FROM JSON
================================ */
function loadProducts(){
  const grid = document.getElementById("productGrid");
  if(!grid) return;

  fetch("vape_models.json")
    .then(res => res.json())
    .then(data => {
      data.brands.forEach(brand => {
        brand.models.forEach(model => {
          const div = document.createElement("div");
          div.className = "product-card";
          div.innerHTML = `
            <h3>${brand.name}</h3>
            <p>${model.model_name}</p>
            <div class="price">${model.price_in_local_currency || ""}</div>
            <button onclick="openWhatsApp('${model.model_name}')">Order</button>
          `;
          grid.appendChild(div);
        });
      });
    });
}

/* ===============================
   ON PAGE LOAD
================================ */
document.addEventListener("DOMContentLoaded", () => {

  /* age popup check */
  const popup = document.getElementById("agePopup");
  if(localStorage.getItem("ageVerified") === "yes"){
    if(popup) popup.classList.add("hide");
    document.body.style.overflow = "auto";
  } else {
    document.body.style.overflow = "hidden";
  }

  /* start slider */
  showSlides();

  /* fade animation */
  initFadeAnimation();

  /* load products */
  loadProducts();
});
