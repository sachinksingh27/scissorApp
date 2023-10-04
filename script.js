let icons = document.querySelectorAll(".icon-container .icon");
let selectionContainer = document.querySelector(".selection-container");
let result = document.querySelector(".result h1");
let arr = [
  ["rock", "fa-solid fa-hand-back-fist"],
  ["paper", "fa-solid fa-hand"],
  ["scissor", "fa-solid fa-hand-scissors"]
];

for (let index = 0; index < icons.length; index++) {
  icons[index].addEventListener("click", function () {
    selectionContainer.innerHTML = "";
    result.innerText = "";
        setTimeout(gameLogic, 1000,index);    
  });
}
function gameLogic(index){
    let playerChoice = arr[index][0];
    let ran = Math.floor(Math.random() * 3);
    let compChoice = arr[ran][0];
    console.log(playerChoice, compChoice);

    selectionContainer.innerHTML = `
        
 <div class="you">
 <h2>You</h2>
 <div class="icon"><i class="${arr[index][1]}"></i></div>
</div>
<div class="comp">
 <h2>Comp</h2>
 <div class="icon"><i class="${arr[ran][1]}"></i></div>
</div> 

        `;

        if(playerChoice == compChoice){
            result.innerText = "DRAW";
        }else if(
            (playerChoice == "paper" && compChoice == "rock")||
            (playerChoice == "scissor" && compChoice == "paper") ||
            (playerChoice == "rock" && compChoice == "scissor")
        ){
            result.innerText = "You Won";
        }
        else{
            result.innerText = "Comp Won";
        }
}
