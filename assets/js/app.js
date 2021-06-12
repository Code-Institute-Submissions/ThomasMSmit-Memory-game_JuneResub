//jshint esversion: 6

let moves = 0;
const movesCounter = document.querySelector(".moves-counter");
let stars = document.querySelectorAll(".stars li");
const cards = document.querySelectorAll('.memory-card');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let targetDiv = document.getElementById("start-page");
let btn = document.getElementById("start-game");



btn.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } 
  
  else {
    targetDiv.style.display = "block";
  }
};



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

  
  moveCounter()
  
  checkForMatch();
}


function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}


function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}


function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}


function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}


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
             hour = 0;
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
    let second = 0, minute = 0; hour = 0;
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
                hour++;
                minute = 0;
            }
        },1000);
    }





    /*

    //jshint esversion: 6


    let card = document.getElementsByClassName("card");
    let cards = [...card];
    const deck = document.getElementById("card-deck");
    let moves = 0;
    let counter = document.querySelector(".moves");
    const stars = document.querySelectorAll(".fa-star");
    let matchedCard = document.getElementsByClassName("match");
    let starsList = document.querySelectorAll(".stars li");
    let closeicon = document.querySelector(".close");
    let modal = document.getElementById("popup1");
    let openedCards = [];


    // @description shuffles cards
    // @param {array}
    // @returns shuffledarray
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }


    // @description shuffles cards when page is refreshed / loads
    document.body.onload = startGame();


    // @description function to start a new play 
    function startGame(){
    
        // empty the openCards array
        openedCards = [];

        // shuffle deck
        cards = shuffle(cards);
        // remove all exisiting classes from each card
        for (let i = 0; i < cards.length; i++){
            deck.innerHTML = "";
            [].forEach.call(cards, function(item) {
                deck.appendChild(item);
            });
            cards[i].classList.remove("show", "open", "match", "disabled");
        }
        // reset moves
        moves = 0;
        counter.innerHTML = moves;
        // reset rating
        for (let i= 0; i < stars.length; i++){
            stars[i].style.color = "#FFD700";
            stars[i].style.visibility = "visible";
        }
        //reset timer
        second = 0;
        minute = 0; 
        hour = 0;
        var timer = document.querySelector(".timer");
        timer.innerHTML = "0 mins 0 secs";
        clearInterval(interval);
    }
        //reset icon 
        document.getElementById("restart-icon").onclick = function() {startGame()};




    // @description toggles open and show class to display cards
    var displayCard = function (){
        this.classList.toggle("open");
        this.classList.toggle("show");
        this.classList.toggle("disabled");
    };


    // @description add opened cards to OpenedCards list and check if cards are match or not
    function cardOpen() {
        openedCards.push(this);
        var len = openedCards.length;
        if(len === 2){
            moveCounter();
            if(openedCards[0].type === openedCards[1].type){
                matched();
            } else {
                unmatched();
            }
        }
    }


    // @description when cards match
    function matched(){
        openedCards[0].classList.add("match", "disabled");
        openedCards[1].classList.add("match", "disabled");
        openedCards[0].classList.remove("show", "open", "no-event");
        openedCards[1].classList.remove("show", "open", "no-event");
        openedCards = [];
    }


    // description when cards don't match
    function unmatched(){
        openedCards[0].classList.add("unmatched");
        openedCards[1].classList.add("unmatched");
        disable();
        setTimeout(function(){
            openedCards[0].classList.remove("show", "open", "no-event","unmatched");
            openedCards[1].classList.remove("show", "open", "no-event","unmatched");
            enable();
            openedCards = [];
        },1100);
    }


    // @description disable cards temporarily
    function disable(){
        Array.prototype.filter.call(cards, function(card){
            card.classList.add('disabled');
        });
    }


    // @description enable cards and disable matched cards
    function enable(){
        Array.prototype.filter.call(cards, function(card){
            card.classList.remove('disabled');
            for(var i = 0; i < matchedCard.length; i++){
                matchedCard[i].classList.add("disabled");
            }
        });
    }


    // @description count player's moves
    function moveCounter(){
        moves++;
        counter.innerHTML = moves;
        //start timer on first click
        if(moves == 1){
            second = 0;
            minute = 0; 
            hour = 0;
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


    // @description game timer
    var second = 0, minute = 0; hour = 0;
    var timer = document.querySelector(".timer");
    var interval;
    function startTimer(){
        interval = setInterval(function(){
            timer.innerHTML = minute+"mins "+second+"secs";
            second++;
            if(second == 60){
                minute++;
                second=0;
            }
            if(minute == 60){
                hour++;
                minute = 0;
            }
        },1000);
    }


    // @description congratulations when all cards match, show modal and moves, time and rating
    function congratulations(){
        if (matchedCard.length == 16){
            clearInterval(interval);
            finalTime = timer.innerHTML;

            // show congratulations modal
            modal.classList.add("show");

            // declare star rating variable
            var starRating = document.querySelector(".stars").innerHTML;

            //showing move, rating, time on modal
            document.getElementById("finalMove").innerHTML = moves;
            document.getElementById("starRating").innerHTML = starRating;
            document.getElementById("totalTime").innerHTML = finalTime;

            //closeicon on modal
            closeModal();
        }
    }

    // @description start and instruction modal

            // start modal on pageload 
        $(document).ready(function(){
            $("#startmodal").modal('show');
            
        });

        
            // close modal on button press
        $("#start-game").click(function(){
            $('#startmodal').modal('hide');
        
        });


    // @description close icon on modal
    function closeModal(){
        closeicon.addEventListener("click", function(e){
            modal.classList.remove("show");
            startGame();
        });
    }


    // @desciption for user to play Again 
    function playAgain(){
        modal.classList.remove("show");
        startGame();
    }

    // play again button
    document.getElementById("play-again").onclick = function() {playAgain()};


    // loop to add event listeners to each card
    for (var i = 0; i < cards.length; i++){
        card = cards[i];
        card.addEventListener("click", displayCard);
        card.addEventListener("click", cardOpen);
        card.addEventListener("click",congratulations);
    }

*/