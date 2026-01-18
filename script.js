function toggleMenu(){
document.getElementById("menu").classList.toggle("active");
}

function openWhatsApp(product){
window.open(
`https://wa.me/923042249321?text=Hi%20I%20want%20to%20order%20${product}`,
"_blank"
);
}

function callNow(){
window.location.href="tel:+923042249321";
}

function acceptAge(){
document.getElementById("agePopup").style.display="none";
}

function denyAge(){
window.location.href="https://google.com";
}

/* SLIDER */
let index=0;
const slides=document.querySelectorAll(".slide");
setInterval(()=>{
slides.forEach(s=>s.classList.remove("active"));
index=(index+1)%slides.length;
slides[index].classList.add("active");
},3000);
