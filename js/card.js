window.addEventListener('DOMContentLoaded', function () {
  showContent('post-list1');
});

function showContent(content) {
  var postList1 = document.getElementById("post-list1");
  var postList2 = document.getElementById("post-list2");
  var postList3 = document.getElementById("post-list3");

  // // 모든 리스트 숨김
  // postList1.style.display = "none";
  // postList2.style.display = "none";
  // postList3.style.display = "none";

  // // 선택한 리스트 보이기
  // if (content === "post-list1") {
  //   postList1.style.display = "block";
  // } else if (content === "post-list2") {
  //   postList2.style.display = "block";
  // } else if (content === "post-list3") {
  //   postList3.style.display = "block";
  // }
}

// window.addEventListener('DOMContentLoaded', function () {
//   showContent('post-list1');
// });

// function showContent(content) {
//   var allPostLists = document.querySelectorAll('[id^="post-list"]');
//   allPostLists.forEach(function(postList) {
//     postList.style.display = 'none';
//   });

//   var selectedPostList = document.getElementById(content);
//   if (selectedPostList) {
//     selectedPostList.style.display = 'flex';  /* Show the selected post list with flex layout */
//   }
// }

