/* top btn */
$(".top-box").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 200);
  return false;
});

/* 문의하기 */
$(document).scroll(function () {
  let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치
  let windowHeight = window.innerHeight; // 스크린 창
  let fullHeight = document.body.scrollHeight; //  margin 값은 포함 x

  if (scrollLocation + windowHeight >= fullHeight - 60) {
    $(".aside__menubar").css("marginBottom", "60px");
  } else {
    $(".aside__menubar").css("marginBottom", "0px");
  }
});
