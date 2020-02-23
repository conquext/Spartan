$(document).ready(function(event) {
  $(".nav-icon").click(function(event) {
    event.preventDefault();
    console.log("clicked");
    $(".full-nav").addClass("open");
  });
  $(".nav-close").click(function(event) {
    event.preventDefault();
    $(".full-nav").removeClass("open");
  });
  $(window).scroll(function() {
    let sc = $(window).scrollTop();
    if (sc > 100) {
      $(".nav").addClass("sticky");
    } else $(".nav").removeClass("sticky");
  });
  $(".bxslider").bxSlider({
    mode: "horizontal",
    moveSlides: 1,
    slideMargin: 40,
    infiniteLoop: true,
    minSlides: 1,
    maxSlides: 1,
    speed: 1200
  });

  $("#work").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true
    }
  });
});
