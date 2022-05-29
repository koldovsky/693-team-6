const btnNavEl = document.querySelector(".nav-btn");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

const bodyEl = document.querySelector(".body");

btnNavEl.addEventListener("click", function () {
  bodyEl.classList.toggle("lock-scroll");
});

//Khrystyna Muravska's block start
(function() {
  const produJson = `
    [
      {
        "id": "1",
        "imgUrl": "img/main-about/israeli-medical-association.png",
        "name": "The Israeli Medical Association",
        "description": "Dr. Hanna Clooney is a member of the Israeli Medical Association and takes part in their events."
      },
      {
        "id": "2",
        "imgUrl": "img/main-about/american-medical-association.png",
        "name": "American Medical Association",
        "description": "Being based in New York, Hanna Clooney is an incumbent member of the American Medical Association."
      },
      {
        "id": "3",
        "imgUrl": "img/main-about/phr.png",
        "name": "PHR – Doctors for Right",
        "description": "Struggling for human rights is one of the moral stances of any practicing doctor in the world."
      },
      {
        "id": "4",
        "imgUrl": "img/main-about/european-medical-association.png",
        "name": "European Medical Association",
        "description": "Dr. Hanna Clooney has joined the EMA since her first years of practicing in New York."
      }
    ]
  `;

  function renderProducts(products) {
    const productsContainer = document.querySelector('.about__diplomas')
    for (const product of products) {
      productsContainer.innerHTML += `
        <article class="diplom">
          <img
            class="diplom__logo"
            src="${product.imgUrl}"
            alt="${product.name}"
          />
          <h4 class="diplom__h4">${product.name}</h4>
          <p class="diplom__text">${product.description}</p>
        </article>
      `;
    }
  }

  const products  = JSON.parse(produJson);
  renderProducts(products)

})()
//Khrystyna Muravska's block end

// Olena Goloyda's block start
(function() {
  const slides = [
      '<div class="slide_hospitals"><figure><img src="img/hospitals/hospital1.png" alt="Vanza Hospital" class="img_hospitals"><figccaption class ="label_hospital"> Vanza Hospital</figcaption></figure></div>',
      '<div class="slide_hospitals"><figure><img src="img/hospitals/hospital2.png" alt=" Sheriff Hospital" class="img_hospitals"><figccaption class ="label_hospital"> Sheriff Hospital</figcaption></figure></div>',
      '<div class="slide_hospitals"><figure><img src="img/hospitals/hospital3.png" alt="Best Hospital" class="img_hospitals"><figccaption class ="label_hospital"> Best Hospital</figcaption></figure></div>',
      '<div class="slide_hospitals"><figure><img src="img/hospitals/hospital4.png" alt="Kentucky Hospital" class="img_hospitals"><figccaption class ="label_hospital">Kentucky Hospital</figcaption></figure></div>'
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
