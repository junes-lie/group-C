
// $(document).ready(function () {

//   let bannerWidth = $(".artist-ban ul li").width()+20; 

//   $(".artist-ban ul li:last").prependTo(".artist-ban ul");
//   $(".artist-ban ul").css({"left":-bannerWidth+"px"});


//   //자동으로 슬라이드 함수 생성
//   function bannerAuto(){
//     $(".artist-ban ul").stop().animate({left:"-="+bannerWidth+"px"},500,function(){
//       $(".artist-ban ul li:first-child").appendTo(".artist-ban ul");
//       $(this).css({left:-bannerWidth+"px"}); 
//     });
//   };
//   bannerTimer = setInterval(bannerAuto,2000);



//   //이전
//   $(".artist-ban_btn .bi-arrow-left-circle-fill").click(function(){
//     $(".artist-ban ul").stop().animate({left:"+="+bannerWidth+"px"},500,function(){
//       $(".artist-ban ul li:last-child").prependTo(".artist-ban ul");
//       $(this).css({left:-bannerWidth+"px"}); 
//     })
//   });

//   //다음
//   $(".artist-ban_btn .bi-arrow-right-circle-fill").click(function(){
//     $(".artist-ban ul").stop().animate({left:"-="+bannerWidth+"px"},500,function(){
//       $(".artist-ban ul li:first-child").appendTo(".artist-ban ul");
//       $(this).css({left:-bannerWidth+"px"});
//     })
//   });

//   //마우스오버시 멈춤(좌우버튼을 누를때는 자동함수가 실행되지 않게 함)
//   $(".artist-banner").hover(function(){ 
//     clearInterval(bannerTimer);
//   },function(){
//     bannerTimer = setInterval(bannerAuto,2000);
//   });

// });
