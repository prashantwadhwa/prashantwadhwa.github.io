const scriptURL = 'https://script.google.com/macros/s/AKfycbyvReLgC0aF2KbE2paJ66kuhoIyM7OOEzuSE6biLrdOKVxBe_yXswNH3c-rjtK10VvKCQ/exec'
        const form = document.forms['submit-to-google-sheet']

        const msg = document.getElementById("msg")

        
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
              msg.innerHTML = "Message Sent Successfully"
              setTimeout(function(){
                msg.innerHTML = ""
              },5000)
              form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })