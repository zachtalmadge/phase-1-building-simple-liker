// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// hide modal when page loads
let modal = document.querySelector('#modal')
modal.classList.add('hidden')

// query all heart icons in the DOM
let heartIcons = document.querySelectorAll('.like-glyph')

// attatch an event listner for each heart icon node
heartIcons.forEach(heart => {
  heart.addEventListener('click', () => {
    mimicServerCall()
    .then(() => heart.classList.toggle('activated-heart'))
    .catch(() => {
      modal.classList.remove('hidden')
      // remove modal from view after 3 seconds
      setTimeout(() => modal.classList.add('hidden'), 3000)
    })
  })
})

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
