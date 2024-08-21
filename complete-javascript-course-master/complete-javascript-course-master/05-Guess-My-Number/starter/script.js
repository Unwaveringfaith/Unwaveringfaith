'use strict';
var randomNumber = Math.trunc(Math.random()*20)+1;
var highscore;
var score =20;
var displayMessage = function(message)
{
    document.querySelector(".message").textContent = message;
}
document.querySelector(".check").addEventListener
("click", function()
{
    let guess = Number(document.querySelector(".guess").value);
   // console.log(document.querySelector('.message').textContent = 'correct number!');
    
    if(!guess)
    {
       displayMessage ( " No Number !");
    }
    else
    {
        // if (score > 0)
        // {
            /*
            if(guess > randomNumber)
            {
                console.log(document.querySelector('.message').textContent = 'to hight!');
                score --;
                console.log(document.querySelector(".score").textContent = score);
            }
            else if(guess < randomNumber)
            {
                console.log(document.querySelector('.message').textContent = 'to low !');
                score --;
                console.log(document.querySelector(".score").textContent = score);
            }
            */
           if(guess !== randomNumber)
           {
            if(score > 1)
            {
                displayMessage ( guess >randomNumber ? "too hight " : "too low");
                score --;
                document.querySelector(".score").textContent = score;
            }
            else
            {
                displayMessage ("you lost !!");
                document.querySelector(".score").textContent = 0 ;
            }
           }
            else 
            {
                console.log(document.querySelector('.message').textContent = 'you win !');
               
                document.querySelector("body").style.backgroundColor = "green";
                document.querySelector(".number").style.width = "30rem";
                document.querySelector(".number").textContent = randomNumber ;
                if(score > highscore)
                {
                    highscore = score;
                    document.querySelector(".highscore").textContent = highscore;
                }
            }
    }
        // else
        // {
        //     console.log(document.querySelector(".message").textContent = "you lost !!");
        //     console.log(document.querySelector(".score").textContent = 0);
        // }

   
 
}
)

//again function
document.querySelector(".btn-again").addEventListener
(
    "click",function()
    {
        console.log(document.querySelector(".score").textContent = 20);
        randomNumber = Math.trunc(Math.random()*20)+1;
        document.querySelector(".guess").textContent = " ";
        console.log(document.querySelector('.message').textContent = 'Start guessing...');
        document.querySelector(".number").textContent = "?";
        document.querySelector("body").style.backgroundColor = "#222";
        document.querySelector(".number").style.width = "15rem";
    }
)