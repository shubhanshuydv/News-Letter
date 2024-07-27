const url = "https://script.google.com/macros/s/AKfycbzSv-TOP5-s6hW0-1VNGlizB9iI1vTL18QBJwLcOqSr9nCFKI-y3WLPw03vQYSXdCss/exec";
const msg = document.getElementById("msg");

const scriptURL = url;
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        
        setTimeout(function(){msg.innerHTML = "Thank You For Subscribing!"},5000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })