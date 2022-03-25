$(".mobile-menu-con-con > ul > li > a").click(function () {
  $(this).parent().find(" > ul").slideToggle();
});

var clickcount = 0;

document.getElementById("menu-btn-click").onclick = function () {
  if (clickcount == 0) {
    $(".menu-icon").css("filter", " none");
    $("div.mobile-menu-con-con").css("right", "0");

    clickcount = 1;
  } else {
    $(".menu-icon").css("filter", " brightness(0) invert(1)");
    $("div.mobile-menu-con-con").css("right", " -240px");
    clickcount = 0;
  }

  return false;
};
