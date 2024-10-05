let guess = document.getElementById("guess");
let submit = document.getElementById('guess-btn');

let result = document.getElementById('result')
let reset = document.getElementById('reset')

let number = Math.floor(Math.random()*100)+1



submit.addEventListener('click' , ()=>{
  let userGuess =  parseInt(guess.value);

  if(userGuess == ''){
    alert('Please enter a number')
  }
  
  if(number == userGuess){
    result.textContent = "You guessed it right" +  " " + ' the number is :' + number;
    result.style.color = "green"
    result.style.fontSize = '25px'
  

    
  }

  

  else if (number > userGuess) {
    result.textContent = 'your guess is too low'
  } 
  else {
    result.textContent = 'your guess is too high'
  }
console.log(number)

})


reset.addEventListener('click' , ()=>{
  number = Math.floor(Math.random()*100)+1
  guess.value = ''
  result.textContent = ''
  
})


