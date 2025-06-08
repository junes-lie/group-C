$(document).ready(function(){
  $("#con-detail #info .btn").click(function(){
    const hiddenBox = $("#con-detail #info .hidden");
    hiddenBox.toggleClass("active");

    if (hiddenBox.hasClass("active")) {
      $(this).text("접기");
    } else {
      $(this).text("펼쳐서 자세히 보기");
    }


  });
});
