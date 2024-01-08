const button = document.querySelector("button");
button.addEventListener("click", roll);

let numDice = 1;
let numRolls = 1;
let sum = 0;
let totalRolls = 0;
let mode = 0;
//dont do ^, just pt it all in an array so that everything can be computed with the data on hand

function roll(){
    for(let i = 0; i<numDice; i++){
        for(let o = 0; o<numRolls; o++){
            return Math.floor(Math.random()*6)+1;
        }
    }
}

function update(){
    numDice= document.getElementById("diceForm").value;
    numRolls = document.getElementById("rollForm").value;
}