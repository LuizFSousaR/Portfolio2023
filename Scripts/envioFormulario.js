const scriptURL = 'https://script.google.com/macros/s/AKfycbwa-aWLLCkBHVFQMWqSNZ3XVcBn8rofLpGlDryuvE1DMlSIdpXAqnV9_MKmH-JabZ-ETw/exec'
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.style.display = block;
            setTimeout(function() {
                msg.style.display = none;
            },5000)
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})