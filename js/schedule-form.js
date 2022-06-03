const form = document.querySelector('#schedule-form');

form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(form);
    console.log (form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then((resp) => {
      console.log ()
      })
      .catch((error) => console.log('Sending form failed'));
})

