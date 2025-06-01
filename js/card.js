window.addEventListener('DOMContentLoaded', function() {
  showContent('recruit_box1');
});

function showContent(content) {
  var recruit_box1 = document.getElementById("recruit_box1");
  var recruit_box2 = document.getElementById("recruit_box2");
  var recruit_box3 = document.getElementById("recruit_box3");

  // 내용 숨김
  recruit_box1.style.display = "none";
  recruit_box2.style.display = "none";
  recruit_box3.style.display = "none";

  // 선택한 내용 보이기
  if (content === "recruit_box1") {
    recruit_box1.style.display = "block";
  } else if (content === "recruit_box2") {
    recruit_box2.style.display = "block";
  } else if (content === "recruit_box3") {
    recruit_box3.style.display = "block";
  }
}