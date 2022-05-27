const btnNavEl = document.querySelector(".nav-btn");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

const bodyEl = document.querySelector(".body");

btnNavEl.addEventListener("click", function () {
  bodyEl.classList.toggle("lock-scroll");
});
// Olena Goloyda's block start
(function() {
  const slides = [
      '<div class="slide_hospitals"><figure><img src="img/hospitals/hospital1.png" alt="Vanza Hospital" class="img_hospitals"><figccaption> Vanza Hospital</figcaption></figure></div>',
      '<div class="slide_hospitals"><figure><img src="img/hospitals/hospital2.png" alt=" Sheriff Hospital" class="img_hospitals"><figccaption> Sheriff Hospital</figcaption></figure></div>',
      '<div class="slide_hospitals"><figure><img src="img/hospitals/hospital3.png" alt="Best Hospital" class="img_hospitals"><figccaption> Best Hospital</figcaption></figure></div>',
      '<div class="slide_hospitals"><figure><img src="img/hospitals/hospital4.png" alt="Kentucky Hospital" class="img_hospitals"><figccaption>Kentucky Hospital</figcaption></figure></div>'
  ];
  let currentSlide = 0;
  function renderCarousel() {
      const slideContainer = document.querySelector('.carousel_hospitals .slide_hospitals');
      slideContainer.innerHTML = slides[currentSlide];
      if (window.innerWidth >= 600) {
          const secondSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
          slideContainer.innerHTML += slides[secondSlide];
          if (window.innerWidth >= 900) {
              const thirdSlide = secondSlide + 1 >= slides.length ? 0 : secondSlide + 1;
              slideContainer.innerHTML += slides[thirdSlide];
          }
      }
  }
  function nextSlide() {
      currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
      renderCarousel();
  }
  function prevSlide() {
      currentSlide = currentSlide - 1 <= 0 ? slides.length - 1 : currentSlide - 1;
      renderCarousel();
  }
  renderCarousel();
  const btnForward = document.querySelector('.carousel_hospitals .forward');
  btnForward.addEventListener('click', nextSlide);
  const btnBack = document.querySelector('.carousel_hospitals .back');
  btnBack.addEventListener('click', prevSlide);
  window.addEventListener('resize', renderCarousel);
})();
// Olena Goloyda's block end