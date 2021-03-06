new fullpage('#fullpage', {
	  anchors:['Main', 'SKILLS', 'PORTFOLIO', 'SERVICE', 'CONTACT' ],
	  navigationTooltips: ['Главная', 'SKILLS', 'PORTFOLIO','SERVICE', 'CONTACT' ],
  navigation: true,
  // fitToSection: true,
  scrollOverflow:true,
  slidesNavigation: false,
  responsiveSlides: true,
  // verticalCentered: false,
  // autoScrolling: false, 
  scrollBar: true,
  responsiveWidth: 900,
  scrollingSpeed: 900,
  // normalScrollElements: '.portfolio-content',  
  
  });


// cards parallax
VanillaTilt.init(document.querySelectorAll(".sk-left-box"), {
  max: 12,
  reverse:true,
  perspective:    500, 
});
//end
//  label function 
$('input').on('focusin', function() {
  $(this).parent().find('label').addClass('focused');
});

$('input').on('focusout', function() {
  if (!this.value) { 
    $(this).parent().find('label').removeClass('focused');
  }
});
//  label function end
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



//tabs 
$(".tab_btn").click(function(){$(".tabs-container, .tabs-center").addClass("show")}),$(".tabs-container").click(function(){$(".tabs-container, .tabs-center").removeClass("show")}),$(".tab_btn1").click(function(){$(".tabs1, .tabs-panel:nth-child(1)").addClass("active")}),$(".tab_btn1").click(function(){$(".tabs2, .tabs3, .tabs-panel:nth-child(2), .tabs-panel:nth-child(3)").removeClass("active")}),$(".tab_btn2").click(function(){$(".tabs1, .tabs3, .tabs-panel:nth-child(1), .tabs-panel:nth-child(3)").removeClass("active")}),$(".tab_btn2").click(function(){$(".tabs2, .tabs-panel:nth-child(2)").addClass("active")}),$(".tab_btn3").click(function(){$(".tabs3, .tabs-panel:nth-child(3)").addClass("active")}),$(".tab_btn3").click(function(){$(".tabs2, .tabs1, .tabs-panel:nth-child(1), .tabs-panel:nth-child(2)").removeClass("active")});

const tabLinks = document.querySelectorAll(".tabs a");
const tabPanels = document.querySelectorAll(".tabs-panel");

for (let el of tabLinks) {
  el.addEventListener("click", e => {
    e.preventDefault();

    document.querySelector(".tabs li.active").classList.remove("active");
    document.querySelector(".tabs-panel.active").classList.remove("active");

    const parentListItem = el.parentElement;
    parentListItem.classList.add("active");
    const index = [...parentListItem.parentElement.children].indexOf(parentListItem);

    const panel = [...tabPanels].filter(el => el.getAttribute("data-index") == index);
    panel[0].classList.add("active");
    });
  }
//tabs end

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

// lax parallax + preloader
window.onload = function() {
  lax.setup(    ) // init
  

  const updateLax = () => {
    lax.update(window.scrollY)
    window.requestAnimationFrame(updateLax)
  }

  window.requestAnimationFrame(updateLax)

  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
}
// end 

// parallax object 
var scene = document.querySelector('.scene');
var parallaxInstance = new Parallax(scene);
// end


// preloader
// window.onload = function () {
//   document.body.classList.add('loaded_hiding');
//   window.setTimeout(function () {
//     document.body.classList.add('loaded');
//     document.body.classList.remove('loaded_hiding');
//   }, 500);
// }
// end


