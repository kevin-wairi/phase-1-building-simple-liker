// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
// Your JavaScript code goes here!


const likers = document.getElementsByClassName('like-glyph')
const modal = document.getElementById('modal')


// event handler calls a function that will "mock" the behavior of a backend server. 
let count = 0;
const liked = Array.from(likers)
liked.forEach(liker=>{
  liker.addEventListener('click',function (){
 

    // server connections using mimicServerCall to response to a user action,
   
      mimicServerCall()
      .then((isRandomFailure)=>{
        count++
        console.log(isRandomFailure)
        if (!(count%2==0)) {
          liker.textContent = FULL_HEART,
          liker.classList.add('activated-heart') 
        } else{
          liker.textContent = EMPTY_HEART,
          liker.classList.remove('activated-heart');
        }}
        )
        
     
        // the catch method after .then
      .catch((isRandomFailure) => {
        modal.classList.remove('hidden')
        modal.textContent = isRandomFailure;
        console.log(isRandomFailure);
        setTimeout(()=>{
          modal.classList.add('hidden')
        },3000)
      }
      )
      })      
  }
)




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
