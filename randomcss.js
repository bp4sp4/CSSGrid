document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".grid__wrapper > div");
  const classes = ["wide", "big", "tall"];

  // 랜덤 클래스 부여

  items.forEach((item) => {
    const randomClass = classes[Math.floor(Math.random() * classes.length)];
    item.classList.add(randomClass);
  });

  // 이미지 위치 확인
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  items.forEach((item) => observer.observe(item));
});

// 파일 다운로드
function downloadImage(imageUrl) {
  const link = document.createElement("a");
  link.href = imageUrl;
  link.download = imageUrl.split("/").pop();
  link.click();
}
