
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let index = 0;

function showSlide(i) {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  slides[i].classList.add('active');
}

next.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});

prev.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

// Auto-slide
setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 5000); // Change slide every 5 seconds



var sidenav = document.getElementById('sidenav')
var menuicon = document.getElementById('menuicon')
var closenav = document.getElementById('closenav')

menuicon.addEventListener('click', function()
{
  sidenav.style.left = 0
})

closenav.addEventListener('click',function(){
    sidenav.style.left="-50%"
})