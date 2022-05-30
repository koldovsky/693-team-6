const btnNavEl = document.querySelector(".nav-btn");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

const bodyEl = document.querySelector(".body");

btnNavEl.addEventListener("click", function () {
  bodyEl.classList.toggle("lock-scroll");
});

Khrystyna Muravska's block start
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

