let hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', function(){
  hamburger.classList.toggle('active'); 
})
let linkclose = document.querySelector('.hamburger-link');
    linkclose.onclick = function() {
  hamburger.classList.remove("active");
}