new fullpage('#fullpage', {
	sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
	  anchors:['Main', 'SKILLS'],
	  navigationTooltips: ['Главная', 'SKILLS', 'PORTFOLIO','PRICE', 'CONTACT' ],
	  slidesNavigation: true,
  navigation: true,
  // fitToSection: true,
  scrollOverflow:true,
  slidesNavigation: false,
  responsiveSlides: true,
  // new 
  // verticalCentered: false,
  // autoScrolling: false,
  scrollBar: true,
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
const cards = Array.from(document.querySelectorAll('.hover-card'));
const props = {
  perspective: '500px',
  delta: 30, 
  cardWidth: cards[0].clientWidth,
  cardHeight: cards[0].clientHeight,
}

const midWidth = props.cardWidth / 4;
const midHeight = props.cardHeight / 4;

for (const card of cards) {
  card.addEventListener('mousemove', mouseOverCard);
  card.addEventListener('mouseleave', mouseLeftCard);
}

function mouseOverCard(e) {
  const cursorX = e.pageX - this.offsetLeft; 
  const cursorY = e.pageY - this.offsetTop;
  const cursCenterX = midWidth - cursorX;
  const cursCenterY = midHeight - cursorY;


  Object.assign(this.style, {
    transform: `perspective(${props.perspective}) rotateX(${cursCenterY / props.delta}deg) rotateY(${-cursCenterX / props.delta}deg)`
  });
  this.classList.remove('mouse-out');
}
function mouseLeftCard() {
  this.classList.add('mouse-out');
}
//end
new WOW().init();