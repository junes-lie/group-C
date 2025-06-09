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

$(document).ready(function () {
  $(".tab li:first-child").trigger("click");
});




// 스크롤 애니메이션
document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.fade-up');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove("active");
        }
      });
    }, {
      threshold: 0.18
      
    });

    elements.forEach(el => observer.observe(el));
  });