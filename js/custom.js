$(".menu-con-con > ul li >a").hover(
  function () {
    $(".menu-con").css("background-color", " rgba( 255, 255, 255, 0.3 )");
    $(".logo-box").css(
      "background-image",
      "  url('/img/logo/0715_퀀텀-CI 1.png')"
    );
  },
  function () {
    $(".menu-con").css("background-color", " rgba( 255, 255, 255, 0 )");
    $(".logo-box").css("background-image", "  url('/img/logo/logo.png')");
  }
);
