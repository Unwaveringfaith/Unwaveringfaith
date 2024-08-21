'use strict';

//select elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnReset = document.querySelector(".btn--new");

let score,currentScore,activePlayer,playing;
const init = function()
{
 score = [0,0];
 currentScore = 0;
 activePlayer = 0;
 playing = true;
    current0El.textContent = 0;
    current1El.textContent = 0;
    
    score0El.textContent= 0;
    score1El.textContent= 0;
    diceEl.classList.add("hidden");
    player0El.classList.add("player--active"); 
    player1El.classList.remove("player--active"); 
    player0El.classList.remove("player--winner");
    player1El.classList.remove("player--winner");
};
init();



diceEl.classList.add("hidden");

const switchPlayer = function()
{
    document.getElementById(`current--${activePlayer}`)    .textContent = 0;
    currentScore = 0;
  activePlayer =  activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
}

btnRoll.addEventListener("click",function()
{
    if(playing)
{
    let randomNumber = Math.trunc((Math.random())*6+1);

    //display number
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${randomNumber}.png`;

    //check roll
    if(randomNumber !==1)
    {
        currentScore += randomNumber;
        document.getElementById(`current--${activePlayer}`)    .textContent = currentScore;                                           
        // current0El.textContent = currentScore;
    }
    else
    {
        //switch player
        switchPlayer();
      
    }
} 
})
;


btnHold.addEventListener("click",function()
{
if(playing)

{
    // 1 add current score to active player score
    score[activePlayer] += currentScore;
    //score[1] = score[1]+ currentscore;
    document.getElementById(`score--${activePlayer}`).textContent= score[activePlayer];

    // check player 100pts
    if(score[activePlayer]>=20)
    {
        playing = false;
        diceEl.classList.add("hidden");
        document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
        document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
      
        
    }
    // 2 switch player
    else
    switchPlayer();
}});

btnNew.addEventListener("click",init);

    // playing = true;
    // console.log("true");

    // score.splice(0,2,0,0);
    // current0El.textContent = 0;
    // current1El.textContent = 0;
    
    // score0El.textContent= 0;
    // score1El.textContent= 0;
    // player0El.classList.add("player--active");  
   
    