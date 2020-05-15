new fullpage('#fullpage', {
	sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
	  anchors:['Main', 'SKILLS'],
	  navigationTooltips: ['Главная', 'SKILLS', 'PORTFOLIO', ],
	  slidesNavigation: true,
	navigation: true,
  });

//parallax 
let bg = document.querySelector('.mouse-parallax');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg.style.transform = 'translate(-' + x * 60 + 'px, -' + y * 60 + 'px)';
});
//end