/*global $ , alert, j query*/
$(document).ready(function (){
 
  "use strict"
$(".option-box .ooo").click(function ()
  {
    $(".color-option").fadeToggle(500);
  });
//change background tool//
var colorLi=$(".color-option ul li");
colorLi
.eq(0).css("background","#e37bab").end()
.eq(1).css("background","#93001b").end()
.eq(2).css("background","#201a7e").end()
.eq(3).css("background","#d6d300e0").end(); 

colorLi.click(function (){
  $("link[href*='theme']").attr("href", $(this).attr("data-value"));
});
});
$(window).load(function (){
  $("body").css("overflow","auto")
  $(".loading-overlay .spinner").fadeOut(2000,function (){
    $(".loading-overlay").fadeOut(2000)
  });

  var scrollButton =$(".scrool-top")
  $(window).scroll(function ()
  {
if($(this).scrollTop()>=500)
{
scrollButton.show ();
}
else
{
  scrollButton.hide();
}
  });
  scrollButton.click(function (){
    $("html,body").animate({screenTop:0},600);
  });
});
