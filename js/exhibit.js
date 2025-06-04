// 현재전시 / 예정전시
$(".tab li").on("click", function () {
  // 탭 선택 처리
  $(this).addClass("active").siblings().removeClass("active");

  // 콘텐츠 보여주기
  const tabId = $(this).data("alt");
  $(".tab-contents > div").removeClass("active");
  $("#" + tabId).addClass("active");

  // 하이라이트 바 이동
  const tabIndex = $(this).index();
  const tabWidth = $(this).outerWidth();
  $(".tab-highlight").stop().animate({
    left: tabIndex * tabWidth + "px"
  }, 300);
});