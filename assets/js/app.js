//jshint esversion: 6

let moves = 0;
const movesCounter = document.querySelector(".moves-counter");
let stars = document.querySelectorAll(".stars li");
let overlay = document.getElementById("popup1");
const cards = document.querySelectorAll('.memory-card');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let targetDiv = document.getElementById("start-page");
let numMatches = 0;
let i;
let finalTime;
var $;

//Start game button
$("#start-game").click(function () { 
    if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } 
});

//Function to flip cards
function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;

  
  moveCounter();
  
  checkForMatch();
}

//Function for card match check
function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    
    if (isMatch == true) {
        numMatches++;
    }
    
    if (numMatches == 8){
        congratulations();
    } 
    
    isMatch ? disableCards() : unflipCards();
}


//Disable cards function
function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);


  resetBoard();
}

//Unflip cards function
function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

//Reset all cards on board
function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

// Shuffle cards function
(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 16);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));



//Count player's moves
    function moveCounter(){
        moves++;
        movesCounter.innerHTML = moves;
       
        //start timer on first click
        if(moves == 1){
             second = 0;
             minute = 0; 
             startTimer();
        }

        // setting rates based on moves
        if (moves > 10 && moves < 14){
            for( i= 0; i < 3; i++){
                if(i > 1){
                    stars[i].style.visibility = "collapse";
                }
            }
        }
        else if (moves > 13){
            for( i= 0; i < 3; i++){
                if(i > 0){
                    stars[i].style.visibility = "collapse";
                }
            }
        }
    }
    

 //Game timer
    let second = 0, minute = 0;
    let timer = document.querySelector(".timer");
    let interval;
    function startTimer(){
        interval = setInterval(function(){
            timer.innerHTML = minute+"mins "+second+"secs";
            second++;
            if(second == 60){
                minute++;
                second=0;
            }
            if(minute == 60){
                minute = 0;
                second = 0;
            }
        },1000);
    }


    //Function for congratulations overlay to show up
    function congratulations(){
        if (numMatches == 8){
        clearInterval(interval);
        finalTime = timer.innerHTML;

            // show congratulations overlay
            overlay.classList.add("show");

            // declare star rating variable
            let starRating = document.querySelector(".stars").innerHTML;

            //showing move, rating, time on modal
            document.getElementById("finalMove").innerHTML = moves;
            document.getElementById("starRating").innerHTML = starRating;
            document.getElementById("totalTime").innerHTML = finalTime;
  
        }
    }

    
    //for user to play Again 
    function playAgain(){
        overlay.classList.remove("show");
        location.reload();
    }

    
    //play again button
    $("#play-again").click(function () {
        playAgain();
    });



    