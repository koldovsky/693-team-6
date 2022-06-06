(function() {
   const slides = [
      '<div class="slide"><div class="slide_symptom"><div class="about__symptom__logo"><img src="https://res2.weblium.site/res/60f820acc5ecef0021ffd377/60f83568cdb6460021c147fb" alt="icon"></div><h4>Dizziness</h4><p>A wrong feeling of whirling can happen when the signal to the brain is blocked.</p></div></div>',
      '<div class="slide"><div class="slide_symptom"><div class="about__symptom__logo"><img src="https://res2.weblium.site/res/60f820acc5ecef0021ffd377/60f8356557f9c700228e2b22" alt="icon"></div><h4>Ear Infection</h4><p>Each of three ear sections is sensitive to infections, which can be very painful.</p></div></div>',
      '<div class="slide"><div class="slide_symptom"><div class="about__symptom__logo"><img src="https://res2.weblium.site/res/60f820acc5ecef0021ffd377/60f83567a870900021552124" alt="icon"></div><h4>Mouth Sores</h4><p>There is a number of sores which can appear around or inside the mouth.</p></div></div>',
      '<div class="slide"><div class="slide_symptom"><div class="about__symptom__logo"><img src="https://res2.weblium.site/res/60f820acc5ecef0021ffd377/60f8356820e496002156fc9c" alt="icon"></div><h4>Neck Pain</h4><p>Severe neck pain can be a result of injuries or a symptom of meningitis.</p></div></div>',
      '<div class="slide"><div class="slide_symptom"><div class="about__symptom__logo"><img src="https://res2.weblium.site/res/60fab60bd230c30022a4117f/6102b39964548600212a25be" alt="icon"></div><h4>Oral Cancers</h4><p>Oral cancers may appear as red or white patches on the tongue.</p></div></div>',
      '<div class="slide"><div class="slide_symptom"><div class="about__symptom__logo"><img src="https://res2.weblium.site/res/60f820acc5ecef0021ffd377/60f8356920e496002156fca8" alt="icon"></div><h4>Breathing Problems</h4><p>Breathing problems can be chronic, temporary, or can occur while aging.</p></div></div>',
      '<div class="slide"><div class="slide_symptom"><div class="about__symptom__logo"><img src="https://res2.weblium.site/res/60fab60bd230c30022a4117f/6102b3b3014aff0021807da3" alt="icon"></div><h4>Snoring/Sleep Apnea</h4><p>Snoring can be a symptom of serious health problems, just like sleep apnea.</p></div></div>',
      '<div class="slide"><div class="slide_symptom"><div class="about__symptom__logo"><img src="https://res2.weblium.site/res/60fab60bd230c30022a4117f/6102b399fdc5c400214f14d0" alt="icon"></div><h4>Sore Throat</h4><p>A sore throat can be a symptom of a disease more serious than flu or cold.</p></div></div>'
   ];

   let currentSlide = 0;

   function renderCarousel() {
      const slideContainer = document.querySelector('.about__symptoms__carousel .slide');
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

   const btnForward = document.querySelector('.about__symptoms__carousel .forward');
   btnForward.addEventListener('click', nextSlide);

   const btnBack = document.querySelector('.about__symptoms__carousel .back');
   btnBack.addEventListener('click', prevSlide);

   window.addEventListener('resize', renderCarousel);

})();
