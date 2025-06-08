


// 스크롤 애니메이션
document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll('.fade-up');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 1

  });

  elements.forEach(el => observer.observe(el));
});