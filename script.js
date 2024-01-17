const button = document.getElementById("rollbutt");
button.addEventListener("click", roll);

document.getElementById("form").addEventListener("submit", function (x) {
  x.preventDefault();
});

function update() {
  //updates the user inputs

  numDice = diceInput.value;
  numRolls = rollInput.value;
}

function update2() {
  //updates the statistics after the rolls
  sum = data.reduce(
    //sum
    (a, b) => a + b,
    0
  );

  mean = sum / totalRolls; //mean

  if (data.length % 2 === 0) {
    //median
    median = (data[data.length / 2] + data[data.length / 2 - 1]) / 2;
  } else {
    //length of data is odd
    median = data[(data.length - 1) / 2];
  }
}

function update3() {
  //changes the html to the data
  Doubles.innerText = doubles;
  Triples.innerText = triples;
  Mean.innerText = mean;
  Median.innerText = median;
  Mode.innerText = mode;
}
//counting variables in the forms
var numDice = 1;
var numRolls = 1;
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

function roll() {
  //rolls the dice 1,2, or 3 times and appends the rolls into the data array
  x = 0;
  update();

  if (numDice == 1) {
    x = Math.floor(Math.random() * 6) + 1;
    data.push(x);
    d1.innerText = x;
    totalRolls++;
  } else if (numDice == 2) {
    x = Math.floor(Math.random() * 6) + 1;
    data.push(x);
    d1.innerText = x;
    x = Math.floor(Math.random() * 6) + 1;
    data.push(x);
    d2.innerText = x;
    totalRolls += 2;
  } else {
    x = Math.floor(Math.random() * 6) + 1;
    data.push(x);
    d1.innerText = x;
    x = Math.floor(Math.random() * 6) + 1;
    data.push(x);
    d2.innerText = x;
    x = Math.floor(Math.random() * 6) + 1;
    data.push(x);
    d3.innerText = x;
    totalRolls += 3;
  }
  update2();
  update3();
}
