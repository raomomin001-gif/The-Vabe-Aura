/* MENU */
function toggleMenu(){
  document.getElementById("navMenu").classList.toggle("active");
}

/* WHATSAPP */
function openWhatsApp(){
  window.open("https://wa.me/923042249321","_blank");
}

/* SLIDER */
let slideIndex = 0;
function showSlides(){
  const slides = document.querySelectorAll(".slides");
  slides.forEach(s=>s.style.display="none");
  slideIndex++;
  if(slideIndex>slides.length){slideIndex=1}
  slides[slideIndex-1].style.display="block";
  setTimeout(showSlides,3000);
}
function currentSlide(n){
  slideIndex=n-1;
  showSlides();
}

/* AGE POPUP */
function acceptAge(){
  localStorage.setItem("ageVerified","yes");
  document.getElementById("agePopup").classList.add("hide");
}
function rejectAge(){
  window.location.href="https://google.com";
}

/* ON LOAD */
document.addEventListener("DOMContentLoaded",()=>{
  if(localStorage.getItem("ageVerified")==="yes"){
    document.getElementById("agePopup").classList.add("hide");
  }
  showSlides();
});
