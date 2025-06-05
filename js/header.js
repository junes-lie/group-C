$(document).ready(function(){
  const header = $("header");
  const mobBtn = $("header .mob_btn");

  mobBtn.on("click", function (e) {
    e.preventDefault();
    header.toggleClass("mOpen");
  });
  
  


});