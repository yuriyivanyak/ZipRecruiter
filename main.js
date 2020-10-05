const btnLink = document.querySelector('.account-nav-link');
const btnLink1 = document.querySelector('.account-nav-link1');
const arrow = document.querySelector('.link-arrow')
const arrow1 = document.querySelector('.link-arrow1')

const burgerMenu = document.querySelector('.burger-menu');
const burgerIcon = document.querySelector('.burger-icon-close')
const burgerIconOpen = document.querySelector(".hideIcon");

function changeIcon() {
    burgerIcon.classList.toggle('hideIcon');
}


btnLink.addEventListener("click", myScript);

function myScript(){
    arrow.classList.toggle('rotateArrow')
}

btnLink1.addEventListener("click", myScript1);

function myScript1(){
    arrow1.classList.toggle('rotateArrow1')
};


$('.burger-menu').click(function() {
    //"this" is the click-spanish icon, since you are inside the click handler
    //for that element.  You just have to use it, not try to find it.
    $('.fas').toggleClass("fa-bars fa-times");
});

$('#heroSelect').click(function() {
    $('.distanceArrow').toggleClass("fa-chevron-down fa-chevron-up")
})



let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.querySelectorAll(".quotesId");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slideIndex++;

  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  
  
  setInterval(showSlides, 5000) // Change image every 2 seconds
}