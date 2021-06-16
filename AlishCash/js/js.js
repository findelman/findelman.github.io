// $(".site-link").hover(function(){
//     $(".bgblur").css("filter", "unset");
// });
$('.site-link').on('mouseover', function(){
    $(".bgblur").css("filter", "unset");
  }).on('mouseout', function(){
    $(".bgblur").css("filter", "blur(3px)");
  })
var scene = document.querySelector('.scene');
var parallaxInstance = new Parallax(scene);

