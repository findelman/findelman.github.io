  //nav min минимизировал навигация
  !function(t,n,i,s){var e=function(s,e){this.elem=s,this.$elem=t(s),this.options=e,this.metadata=this.$elem.data("plugin-options"),this.$win=t(n),this.sections={},this.didScroll=!1,this.$doc=t(i),this.docHeight=this.$doc.height()};e.defaults=(e.prototype={defaults:{navItems:"a",currentClass:"current",changeHash:!1,easing:"swing",filter:"",scrollSpeed:750,scrollThreshold:.5,begin:!1,end:!1,scrollChange:!1},init:function(){return this.config=t.extend({},this.defaults,this.options,this.metadata),this.$nav=this.$elem.find(this.config.navItems),""!==this.config.filter&&(this.$nav=this.$nav.filter(this.config.filter)),this.$nav.on("click.onePageNav",t.proxy(this.handleClick,this)),this.getPositions(),this.bindInterval(),this.$win.on("resize.onePageNav",t.proxy(this.getPositions,this)),this},adjustNav:function(t,n){t.$elem.find("."+t.config.currentClass).removeClass(t.config.currentClass),n.addClass(t.config.currentClass)},bindInterval:function(){var t,n=this;n.$win.on("scroll.onePageNav",function(){n.didScroll=!0}),n.t=setInterval(function(){t=n.$doc.height(),n.didScroll&&(n.didScroll=!1,n.scrollChange()),t!==n.docHeight&&(n.docHeight=t,n.getPositions())},250)},getHash:function(t){return t.attr("href").split("#")[1]},getPositions:function(){var n,i,s,e=this;e.$nav.each(function(){n=e.getHash(t(this)),(s=t("#"+n)).length&&(i=s.offset().top,e.sections[n]=Math.round(i))})},getSection:function(t){var n=null,i=Math.round(this.$win.height()*this.config.scrollThreshold);for(var s in this.sections)this.sections[s]-i<t&&(n=s);return n},handleClick:function(i){var s=this,e=t(i.currentTarget),o=e.parent(),a="#"+s.getHash(e);o.hasClass(s.config.currentClass)||(s.config.begin&&s.config.begin(),s.adjustNav(s,o),s.unbindInterval(),s.scrollTo(a,function(){s.config.changeHash&&(n.location.hash=a),s.bindInterval(),s.config.end&&s.config.end()})),i.preventDefault()},scrollChange:function(){var t,n=this.$win.scrollTop(),i=this.getSection(n);null!==i&&((t=this.$elem.find('a[href$="#'+i+'"]').parent()).hasClass(this.config.currentClass)||(this.adjustNav(this,t),this.config.scrollChange&&this.config.scrollChange(t)))},scrollTo:function(n,i){var s=t(n).offset().top;t("html, body").animate({scrollTop:s},this.config.scrollSpeed,this.config.easing,i)},unbindInterval:function(){clearInterval(this.t),this.$win.unbind("scroll.onePageNav")}}).defaults,t.fn.onePageNav=function(t){return this.each(function(){new e(this,t).init()})}}(jQuery,window,document);

  $(document).ready(function() {
    $('#nav').onePageNav();
  });

//end 

//slider 

new Swiper(".mainSwiper", {
  slidesPerView: 1,
  simulateTouch: false,
  effect: 'fade', 
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination-main",
    type: "fraction",
  },
});
new Swiper(".swiper-container1", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 1.1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  coverflowEffect: {
    rotate: -2,
    stretch: "-80%",
    depth: 200,
    modifier: -1,
    slideShadows: false
  },
  breakpoints: {
    500: {
      slidesPerView: 1.5,
    }
  },

  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev2"
  }
});

new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    500: {
      slidesPerView: 2,
    }
  }
  
});
new Swiper(".trainerSwiper", {
  // direction: 'vertical',
  // allowTouchMove: false,
  slidesPerView: 1,
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination-trainer",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-trainer",
    prevEl: ".swiper-button-prev-trainer"
  },
  breakpoints: {
    500: {
      allowTouchMove: true,
      direction: 'horizontal',
      slidesPerView: 3,
    }
  }

});
// slider end

new Swiper(".specialsSwiper", {
  slidesPerView: 1,
  simulateTouch: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    clickable: false,
  },
  autoplay: {
    delay: 5000,
  },});

// hamburger
let hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function(){
  hamburger.classList.toggle('active'); 
})

let linkclose = document.querySelector('.hamburger-link');
    linkclose.onclick = function() {
  hamburger.classList.remove("active");
}


// hamburger end

// accordion 


var accItem = document.getElementsByClassName('programs-box');
var accHD = document.getElementsByClassName('prog-btn');
for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
    var itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'programs-box close';
    }
    if (itemClass == 'programs-box close') {
        this.parentNode.className = 'programs-box open';
    }
}

//accordion end

//video tabs 
var tabLinks = document.querySelectorAll(".tablinks");
var tabContent = document.querySelectorAll(".tabcontent");


tabLinks.forEach(function(el) {
   el.addEventListener("click", openTabs);
});


function openTabs(el) {
   var btnTarget = el.currentTarget;
   var index = btnTarget.dataset.index;

   tabContent.forEach(function(el) {
      el.classList.remove("active");
   });

   tabLinks.forEach(function(el) {
      el.classList.remove("active");
   });

   document.querySelector("#" + index).classList.add("active");
   
   btnTarget.classList.add("active");
}


//video tabs end

// trainer modal 


$(".trainer-box-btn-1").click(function () {
  $(".trainer-modal-1").addClass("show")
}),
$(".trainer-modal-close").click(function () {
  $(".trainer-modal, .trainer-modal-2, .trainer-modal-3, .trainer-modal-4").removeClass("show")
}),
$(".trainer-box-btn-2").click(function () {
  $(".trainer-modal-2").addClass("show")
}),
$(".trainer-box-btn-3").click(function () {
  $(".trainer-modal-3").addClass("show")
}),
$(".trainer-box-btn-4").click(function () {
  $(".trainer-modal-4").addClass("show")
}),
{};

// trainer modal end

// load more

$(function(){
  $('.photo-box').slice(0, 6).show(); 
  $("#load").click(function(e){ 
      e.preventDefault();
      $('.photo-box:hidden').slice(0, 6).show(); 
  });
});

// load more end