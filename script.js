"use strict";

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
document.querySelector('.guess').value = "";


const displayMessage = function(message){
    document.querySelector(".message").textContent = message;
}



document.querySelector(".check").addEventListener('click' , () => {
        
    const guess = Number(document.querySelector(".guess").value)
  
    if(!(guess > 0 && guess < 21)){
        if(score > 1){
            displayMessage("👋 Number not in range")
            score--;
            document.querySelector(".score").textContent = score;
        }
        else{
            displayMessage("😨You Lost!!") 
            document.querySelector(".score").textContent = 0;
        }
    }
    else if(guess === secretNumber){
        if(score > 1){
            displayMessage("👍You Won!!")
            document.querySelector(".number").textContent = secretNumber ;

            document.querySelector('body').style.backgroundColor = "#60b347";

            document.querySelector(".number").style.width = "30rem";

            document.querySelector('.highscore').textContent = score;
        }
        else{
            displayMessage("😨You Lost!!") 
            document.querySelector(".score").textContent = 0;
        }
        
    }
    else if(guess > secretNumber){

        if(score > 1){
            displayMessage("📈Too high!")
            
            score--;
            document.querySelector(".score").textContent = score;
        }
        else{
            displayMessage("😨You Lost!!") 
            document.querySelector(".score").textContent = 0;
        }
        
    }
    else if(guess < secretNumber){
        if(score > 1){
            displayMessage("📉Too low!!")
            score--;
            document.querySelector(".score").textContent = score;    
        }
        else{
            displayMessage("😨You Lost!!" )
            document.querySelector(".score").textContent = 0;
        }
        
    }

})



document.querySelector('.again').addEventListener('click', () => {
    score = 20 ;
    document.querySelector(".number").textContent = "?"
    secretNumber = Math.trunc(Math.random()*20)+ 1;
    displayMessage("Start guessing...")
    document.querySelector(".score").textContent = 20;
    document.querySelector(".guess").value = "" ;
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem"
});