$(document).ready(function(){
$(".a").hover(function() {
    $(this).addClass("hover");
    $(this).siblings().addClass("unhover");
  }, function() {
    $(this).removeClass("hover");
    $(this).siblings().removeClass("unhover");
  }
);

$(".a").click(function(){
  $(this).toggleClass("click");
  $(this).siblings().toggleClass("unclick");
  $(this).children("p").fadeToggle(150);
}).children().click(function(e) {
  return false;
});

setTimeout(function(){
  $('.a').not('.a:nth-child(3)').addClass('unclick');
  $('.a:nth-child(3)').addClass('click');
  $('.a:nth-child(3)').children("p").fadeToggle(150);
},700);
setTimeout(function(){
  $('.a').not('.a:nth-child(3)').removeClass('unclick');
  $('.a:nth-child(3)').removeClass('click');
  $('.a:nth-child(3)').children("p").fadeToggle(150);
},1700);
});
