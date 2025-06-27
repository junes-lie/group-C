window.addEventListener('DOMContentLoaded', function () {
  showContent('post-list');
});

function showContent(content) {
  var postList1 = document.getElementById("post-list");
  var postList2 = document.getElementById("post-list");
  var postList3 = document.getElementById("post-list");

  // 모든 리스트 숨김
  postList.style.display = "none";
  postList.style.display = "none";
  postList.style.display = "none";

  // 선택한 리스트 보이기
  if (content === "post-list") {
    postList.style.display = "block";
  } else if (content === "post-list") {
    postList.style.display = "block";
  } else if (content === "post-list") {
    postList.style.display = "block";
  }
}

window.addEventListener('DOMContentLoaded', function () {
  showContent('post-list');
});

function showContent(content) {
  var allPostLists = document.querySelectorAll('[id^="post-list"]');
  allPostLists.forEach(function(postList) {
    postList.style.display = 'none';
  });

  var selectedPostList = document.getElementById(content);
  if (selectedPostList) {
    selectedPostList.style.display = 'flex';  /* Show the selected post list with flex layout */
  }
}