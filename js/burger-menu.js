(function () {
  const btnNavEl = document.querySelector(".nav-btn");
  const headerEl = document.querySelector(".header");

  btnNavEl.addEventListener("click", function () {
    headerEl.classList.toggle("nav-open");
  });

  const bodyEl = document.querySelector(".body");

  btnNavEl.addEventListener("click", function () {
    bodyEl.classList.toggle("lock-scroll");
  });
})();
