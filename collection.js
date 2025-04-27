
const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card-filter');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');

    productCards.forEach(card => {
      if (category === 'all' || card.getAttribute('data-category') === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

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