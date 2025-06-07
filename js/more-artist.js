
/* 더보기 버튼 ---------------------------- */

document.addEventListener("DOMContentLoaded", function () {
    const posterGrid = document.querySelector("#artist .card-wrap");
    const posters = Array.from(posterGrid.children).filter(child => child.classList.contains('card'));
    const moreBtn = document.querySelector("#artist .more button");

    let currentIndex = 0;       // 현재까지 보여준 포스터의 개수 (다음 보여줄 시작점)
    const rowsPerClick = 1;     // "더보기" 클릭 시 추가로 보여줄 줄 수 (한 줄씩)

    // 현재 화면 너비에 따라 한 줄에 보여줄 포스터 수를 반환하는 함수
    function getPostersPerRow() {
      const width = window.innerWidth;
      if (width <= 768) { // 모바일
        return 1;
      } else if (width <= 1400) { // 태블릿
        return 2;
      } else { // PC
        return 3;
      }
    }

    // 포스터를 화면에 표시하거나 숨기는 상태를 초기화하고, 첫 줄을 보여주는 함수
    function initializeAndShowFirstRow() {
        // 1. 모든 포스터 숨기기
        posters.forEach(poster => poster.style.display = 'none');
        
        // 2. 현재 인덱스 초기화
        currentIndex = 0;
        
        // 3. 현재 화면 크기에 맞는 한 줄당 포스터 수 가져오기
        const postersPerRow = getPostersPerRow();
        
        // 4. 첫 번째 줄에 해당하는 포스터 개수 계산
        // 초기에 보여줄 줄 수를 2로 설정합니다.
        const initialRowsToShow = 3; 
        // 초기에 보여줄 포스터 개수 계산 (두 줄 분량)
        const initialVisibleCount = postersPerRow * initialRowsToShow; 

        // 5. 첫 번째 줄 포스터 보여주기
        for (let i = 0; i < initialVisibleCount && i < posters.length; i++) {
            posters[i].style.display = "block"; // 또는 'flex', 'grid' 등 원래 display 속성
        }
        currentIndex = Math.min(initialVisibleCount, posters.length); // 실제 보여준 개수로 currentIndex 업데이트

        // 6. "더보기" 버튼 표시 여부 결정
        if (currentIndex >= posters.length) {
            moreBtn.style.display = "none"; // 모든 포스터가 보이면 버튼 숨김
        } else {
            moreBtn.style.display = "block"; // 더 보여줄 포스터가 있으면 버튼 표시
        }
    }

    // "더보기" 버튼 클릭 시 추가 포스터를 로드하는 함수
    function loadMorePosters() {
        const postersPerRow = getPostersPerRow(); // 현재 화면 크기에 맞는 한 줄당 포스터 수
        const postersToShowThisClick = postersPerRow * rowsPerClick; // 이번 클릭으로 보여줄 포스터 수
        
        const nextBatchEndIndex = currentIndex + postersToShowThisClick;

        for (let i = currentIndex; i < nextBatchEndIndex && i < posters.length; i++) {
            posters[i].style.display = "block";
        }
        currentIndex = Math.min(nextBatchEndIndex, posters.length);

        // 모든 포스터를 보여줬다면 "더보기" 버튼 숨김
        if (currentIndex >= posters.length) {
            moreBtn.style.display = "none";
        }
    }

    // --- 이벤트 리스너 및 초기 실행 ---

    // HTML 로드 완료 시 초기 포스터 표시 함수 실행
    initializeAndShowFirstRow(); 

    // "더보기" 버튼 클릭 이벤트
    moreBtn.addEventListener("click", loadMorePosters);

    // 창 크기 변경 시 반응형 처리: 상태 초기화 후 다시 첫 줄부터 표시
    let resizeTimer;
    window.addEventListener("resize", () => {
        // 디바운싱: 리사이즈 이벤트가 너무 자주 발생하는 것을 방지
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            initializeAndShowFirstRow();
        }, 250); // 0.25초 후에 실행
    });

    // 만약 HTML에 포스터가 하나도 없다면 "더보기" 버튼을 처음부터 숨김
    if (posters.length === 0) {
        moreBtn.style.display = "none";
    }
});