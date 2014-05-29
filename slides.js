$(document).ready(function(){
$(".a").hover(function() {
    $(this).addClass("hover");
    $(this).siblings().addClass("unhover");
  }, function() {
    $(this).removeClass("hover");
    $(this).siblings().removeClass("unhover");
  });

});
