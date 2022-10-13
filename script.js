var startimage = 1; //choose the image for startup
var sliderduration = 2000;
var animationEffects = "fadeIn";
var get_allimageLength = $(".sliderHolder ul li").length;
$getallImages = $(".sliderHolder ul li");
var slideradd = 0;
$(".sliderHolder ul li").css({
  opacity: 0,
  display: "none"
});
$(".sliderHolder ul li:nth-child(" + startimage + ")")
  .css({
    opacity: 1,
    display: "block"
  })
  .addClass("active animated " + animationEffects + "");
var thumbcreate = $(".sliderHolder ul")
  .clone()
  .appendTo(".slidethumb");
$(".slidethumb ul li")
  .attr("style", "")
  .removeClass("animated " + animationEffects + "");
var a = [];

$.each($getallImages, function(i, val) {
  if (a.length <= a.length) {
    a.push(i + 1);
  }
});

$(".smh_rightarrw").click(function() {
  $.each($getallImages, function(i, val) {
    var indexvalue = $(".sliderHolder ul li.active").index() + 1;

    if ($(this).hasClass("active") == true) {
      if (a.length > a[i]) {
        $(this)
          .removeClass("active animated " + animationEffects + "")
          .css({
            opacity: 0,
            display: "none"
          })
          .next()
          .addClass("active animated " + animationEffects + "")
          .css({
            opacity: 1,
            display: "block"
          });

        $(".slidethumb > ul > li").removeClass("active");
        $(".slidethumb ul li:nth-child(" + (a[i] + 1) + ")").addClass("active");
        return false;
      } else if (indexvalue >= a.length) {
        // this else if will loop the slider
        //console.log('peace');
        $(".sliderHolder ul li")
          .removeClass("active animated " + animationEffects + "")
          .css({
            opacity: 0,
            display: "none"
          });
        $(".sliderHolder ul li:nth-child(1)")
          .addClass("active animated " + animationEffects + "")
          .css({
            opacity: 1,
            display: "block"
          });
        $(".slidethumb > ul > li").removeClass("active");
        $(".slidethumb ul li:nth-child(1)").addClass("active");
        return false;
      }
    }
  });
});
$(".smh_leftarrw").click(function() {
  $.each($getallImages, function(i, val) {
    var indexvalue = $(".sliderHolder ul li.active").index();
    if ($(this).hasClass("active") == true) {
      if (indexvalue >= 1) {
        $(this)
          .removeClass("active animated " + animationEffects + "")
          .css({
            opacity: 0,
            display: "none"
          })
          .prev()
          .addClass("active animated " + animationEffects + "")
          .css({
            opacity: 1,
            display: "block"
          });
        $(".slidethumb > ul > li").removeClass("active");
        $(".slidethumb ul li:nth-child(" + indexvalue + ")").addClass("active");
        return false;
      } else if (indexvalue <= 0) {
        // this else if will loop the slider
        $(".sliderHolder ul li")
          .removeClass("active animated " + animationEffects + "")
          .css({
            opacity: 0,
            display: "none"
          });
        $(".sliderHolder ul li:nth-child(" + a.length + ")")
          .addClass("active animated " + animationEffects + "")
          .css({
            opacity: 1,
            display: "block"
          });
        $(".slidethumb > ul > li").removeClass("active");
        $(".slidethumb ul li:nth-child(" + a.length + ")").addClass("active");
        return false;
      }
    }
  });
});

$(".slidethumb > ul > li").click(function() {
  var imgIndexval = $(this).index() + 1;
  $(".slidethumb > ul > li").removeClass("active");
  $(this).addClass("active");
  $(".sliderHolder ul li")
    .css({
      opacity: 0,
      display: "none"
    })
    .removeClass("active");
  $(".sliderHolder ul li:nth-child(" + imgIndexval + ")")
    .css({
      opacity: 1,
      display: "block"
    })
    .addClass("active animated " + animationEffects + "");
});

$(".slider_play").click(function() {
  console.log("you clicked play");
  autoslider();
});
$(".slider_pause").click(function() {
  console.log("you clicked pause");
  clearTimeout(timer);
});

var timer = null;
function autoslider() {
  timer = setTimeout(function() {
    $(".smh_rightarrw").trigger("click");
    autoslider();
  }, sliderduration);
}

/* random
var textArray = [
    'fadeIn',
    'fadeInRight',
    'bounce',
    'fadeInLeft'
];
var randomNumber = Math.floor(Math.random()*textArray.length);
var randomElement = textArray[randomNumber];
var animationEffects = randomElement;
*/
