document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".grid__wrapper > div");
  const classes = ["wide", "big", "tall"];

  items.forEach((item) => {
    const randomClass = classes[Math.floor(Math.random() * classes.length)];
    item.className = randomClass;
  });
});
