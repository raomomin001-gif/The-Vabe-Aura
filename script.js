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
