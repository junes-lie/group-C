$(document).ready(function(){
  const BODY = $("body");
  const mobBtn = $("header .mob_btn");

  mobBtn.on("click", function (e) {
    e.preventDefault();
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
  const urlParams = new URLSearchParams(window.location.search);
  const from = urlParams.get('from');
  let headerType;

  // URL 파라미터 우선 적용 및 로컬스토리지에 저장
  if (from === 'ver-exhibit' || from === 'ver-contest') {
    headerType = from;
    localStorage.setItem("headerType", headerType);
  } else {
    // URL 파라미터가 없을 때 로컬스토리지 값 사용
    headerType = localStorage.getItem("headerType") || 'ver-exhibit';
  }

  // 헤더 표시 설정
  if (headerType === "ver-exhibit") {
    $("#ver-exhibit").show();
    $("#ver-contest").hide();
  } else if (headerType === "ver-contest") {
    $("#ver-contest").show();
    $("#ver-exhibit").hide();
  }

  // 클릭 이벤트로 헤더 변경 가능하도록 추가
  $("#ver-exhibit").click(function(){
    localStorage.setItem("headerType", "ver-exhibit");
    $("#ver-exhibit").show();
    $("#ver-contest").hide();
  });

  $("#ver-contest").click(function(){
    localStorage.setItem("headerType", "ver-contest");
    $("#ver-contest").show();
    $("#ver-exhibit").hide();
  });




});