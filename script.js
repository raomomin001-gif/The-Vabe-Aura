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
