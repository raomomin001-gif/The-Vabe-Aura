function toggleMenu(){
  document.getElementById("menu").classList.toggle("active");
}

let index=0;
function showSlides(){
  const slides=document.querySelectorAll(".slides");
  slides.forEach(s=>s.style.display="none");
  index++;
  if(index>slides.length){index=1}
  slides[index-1].style.display="block";
  setTimeout(showSlides,3000);
}

function acceptAge(){
  document.getElementById("agePopup").classList.add("hide");
  localStorage.setItem("age","yes");
}

function openWhatsApp(){
  window.open(
    "https://wa.me/923042249321?text=Hello%20I%20want%20to%20order%20from%20The%20Vape%20Aura",
    "_blank"
  );
}

function callNow(){
  window.location.href="tel:03042249321";
}

document.addEventListener("DOMContentLoaded",()=>{
  if(localStorage.getItem("age")==="yes"){
    document.getElementById("agePopup").classList.add("hide");
  }
  showSlides();
});
