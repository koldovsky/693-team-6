(function () {
  const form = document.querySelector('#schedule-form');
  function handleSubmit(event) {
    event.preventDefault();
    const status = document.querySelector('.contact-form-status');
    fetch(form.action, {
      method: form.method,
      body: new FormData(event.target),
      headers: {
          'Accept': 'application/json'
      }
    }).then( () => {
      
      status.innerHTML = "Thanks for your submission!";
      form.reset();
      setTimeout (() => {
        status.innerHTML = "";
      },3000);
    }).catch( () => {
      status.innerHTML = "Oops! There was a problem submitting your form" 
      setTimeout (() => {
        status.innerHTML = "";
      },3000);
    });
    
  }
  form.addEventListener("submit", handleSubmit)
})();