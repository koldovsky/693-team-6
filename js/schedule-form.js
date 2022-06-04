const form = document.querySelector('#schedule-form');

form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(form);
    console.dir (form);

    fetch("lieman.deutsh@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/form-data" },
      body: new URLSearchParams(formData).toString(),
    })
      .then((resp) => {
      console.dir (resp)
      })
      .catch((error) => console.log('Sending form failed'));
})

