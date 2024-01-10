const button = document.querySelector("button");
button.addEventListener("click", roll);

//counting variables in the forms
let numDice = 1;
let numRolls = 1;
//statistical variables to keep track of
let sum = 0;
let totalRolls = 0;
let mode = 0;
let mean = 0;
let median = 0;
let doubles = 0;
let triples = 0;


//dont do ^, just pt it all in an array so that everything can be computed with the data on hand
let data = [];


function roll(){
    x = 0;
    update();
    if(numDice=1){
        x = Math.floor(Math.random()*6)+1;
        data.push(x);
        d1.innerText = x;
    } else if (numDice=2){
        x = Math.floor(Math.random()*6)+1;
        data.push(x);
        d1.innerText = x;
        x = Math.floor(Math.random()*6)+1;
        data.push(x);
        d2.innerText = x;
    } else{
        x = Math.floor(Math.random()*6)+1;
        data.push(x);
        d1.innerText = x;
        x = Math.floor(Math.random()*6)+1;
        data.push(x);
        d2.innerText = x;
        x = Math.floor(Math.random()*6)+1;
        data.push(x);
        d3.innerText = x;
    }
    console.log(numDice);
}

function update2(){
    sum = data.reduce(
    (a, b) => a+b, 0,
    );

    mean = sum/totalRolls;

    if(data.length%2===0){
        median = (data[data.length/2] + data[data.length/2 - 1])/2;
    } else{ //length of data is odd
        median = data[(data.length-1)/2];
    }
}




function update(){
    numDice = diceForm.value;
    numRolls = rollForm.value;
}