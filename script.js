
function openWhatsApp(){
  window.open("https://wa.me/923042249321","_blank");
}
let slideIndex = 0;
showSlides();

function showSlides(){
  let slides = document.getElementsByClassName("slides");

  for(let i=0; i<slides.length; i++){
    slides[i].style.display = "none";
  }

  slideIndex++;
  if(slideIndex > slides.length){
    slideIndex = 1;
  }

  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // 3 seconds
}

function openWhatsApp(){
  window.open("https://wa.me/923042249321","_blank");
}
let slideIndex = 0;
showSlides();

function showSlides(){
  let slides = document.querySelectorAll(".slides");

  slides.forEach(slide => slide.style.display = "none");

  slideIndex++;
  if(slideIndex > slides.length){
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 3000); // 3 second
}
