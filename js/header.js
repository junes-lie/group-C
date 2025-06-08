$(document).ready(function(){
  const BODY = $("body");
  const mobBtn = $("header .mob_btn");

  mobBtn.on("click", function (e) {
    // e.preventDefault();
    BODY.toggleClass("mOpen");
  });
  
  // 창 크기 변경 시 처리
  $(window).on("resize", function(){
    if($(window).width() >= 1400){
      BODY.removeClass("mOpen");
    }
  });
  // 페이지 로드시 바로 체크
  if($(window).width() >= 1400){
    BODY.removeClass("mOpen");
  }


  //헤더 변경
  const exceptionPages = ["login.html", "join.html", "mypage.html"];
  const currentPage = window.location.pathname.split("/").pop();

  if (exceptionPages.includes(currentPage)) {
    const urlParams = new URLSearchParams(window.location.search);
    const from = urlParams.get('from');
    let headerType;

    if (from === 'ver-exhibit' || from === 'ver-contest') {
      headerType = from;
      localStorage.setItem("headerType", headerType);
    } else {
      headerType = localStorage.getItem("headerType") || 'ver-exhibit';
    }

    if (headerType === "ver-exhibit") {
      $("#ver-exhibit").css("display", "block");
      $("#ver-contest").css("display", "none");
    } else {
      $("#ver-exhibit").css("display", "none");
      $("#ver-contest").css("display", "block");
    }

  } else {
    return;
  }



});