new fullpage('#fullpage', {
	sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
	  anchors:['Main', 'SKILLS', 'PORTFOLIO', 'SERVICE', 'CONTACT' ],
	  navigationTooltips: ['Главная', 'SKILLS', 'PORTFOLIO','SERVICE', 'CONTACT' ],
	  slidesNavigation: true,
  navigation: true,
  // fitToSection: true,
  scrollOverflow:true,
  slidesNavigation: false,
  responsiveSlides: true,
  // verticalCentered: false,
  // autoScrolling: false, 
  scrollBar: true,
  responsiveWidth: 900,
  // dragAndMove: false,
  // normalScrollElements: '.portfolio-content',  
  
  });

//parallax 
let bg = document.querySelector('.mouse-parallax');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg.style.transform = 'translate(-' + x * 60 + 'px, -' + y * 60 + 'px)';
});
//end

// cards parallax
VanillaTilt.init(document.querySelectorAll(".sk-left-box"), {
  max: 12,
  reverse:true,
  perspective:    500, 
});
//end
new WOW().init();
// hamburger 
let hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function(){
  hamburger.classList.toggle('active'); 
})

// let btns = document.querySelector('.hamburger-menu');
// btns.onclick = function() {
//   hamburger.classList.remove("active");
// } работает при нажатий на бэкрагунд

let linkclose = document.querySelector('.hamburger-link');
    linkclose.onclick = function() {
  hamburger.classList.remove("active");
}
//end

//preloader
window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
}
//end

//scroll addClass

// 1) имеет повторную анимацию при скролле сверху-вниз
// $(window).scroll(function(){
//   $('.progress-bar').toggleClass('progress-width', $(this).scrollTop() > 500);
// });

//2) не имеет повторной анимации 
$(window).scroll(function() {    
  let scroll = $(window).scrollTop();
  if (scroll >= 500) { $(".progress-bar").addClass("progress-width"); }}); 
  
//end