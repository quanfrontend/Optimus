$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar-container").addClass("sticky");
    } else {
      $(".navbar-container").removeClass("sticky");
    }
  });
});
