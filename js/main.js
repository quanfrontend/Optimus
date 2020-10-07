$(document).ready(function () {
  //    Scroll Top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $("#topBtn").fadeIn();
    } else {
      $("#topBtn").fadeOut();
    }
  });

  $("#topBtn").click(function () {
    $("html ,body").animate({ scrollTop: 0 }, 800);
  });

  //   Menu Toggler
  $(".menu-toggler").click(function () {
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
    $(".hide").toggleClass("active");
    $("body").toggleClass("active");
  });

  $(".popup").show();
  $("body").toggleClass("active");
  $("html ,body").animate({ scrollTop: 0 }, 800);

  $("#close").click(function () {
    $(".popup").hide();
    $("body").toggleClass("active");
  });
});
