const button = document.getElementById("rollbutt");
button.addEventListener("click", rollRoll);

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

  mean = sum / totalRolls; 
  mean = Math.round(mean * 100) / 100 //mean

  if (data.length % 2 === 0) {
    //median
    median = (data[data.length / 2] + data[data.length / 2 - 1]) / 2;
  } else {
    //length of data is odd
    median = data[(data.length - 1) / 2];
  }

  
  //do mode
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

//array of data
let data = [];

function rollRoll() {
  for(let i=0; i<numRolls; i++){
    roll();
  }
}

function roll() {
  //rolls the dice 1,2, or 3 times and appends the rolls into the data array
  x = 0;
  y = 0;
  z = 0;
  update();

  if (numDice == 1) {
    x = Math.floor(Math.random() * 6) + 1;
    data.push(x);
    d1.innerText = x;
    totalRolls++;
    checkNum(x);
  } else if (numDice == 2) {
    x = Math.floor(Math.random() * 6) + 1;
    data.push(x);
    d1.innerText = x;
    y = Math.floor(Math.random() * 6) + 1;
    data.push(y);
    d2.innerText = y;
    totalRolls += 2;
    if(x==y){
      doubles++;
    }
    checkNum(x+y);
  } else {
    x = Math.floor(Math.random() * 6) + 1;
    data.push(x);
    d1.innerText = x;
    y = Math.floor(Math.random() * 6) + 1;
    data.push(y);
    d2.innerText = y;
    z = Math.floor(Math.random() * 6) + 1;
    data.push(z);
    d3.innerText = z;
    totalRolls += 3;
     if (x==y && y==z){
      triples++;
    } else if(x==y || y==z || x==z){
      doubles++;
    }
    checkNum(x+y+z);



  }
  update2();
  update3();
freqUpdate();
 // makeTable();
}

function makeTable(){ //1 die: 1-6 ; 2 dice: 2-12 ; 3 dice: 3-18 ; all of them have 3-6
// var newRow = freqTable.insertRow();
// var newCell = newRow.insertCell();
// newCell.innerHTML = "Three";
// newCell = newRow.insertCell();
// newCell.innerHTML = three;

}

//frequency vars
let one = 0;
let two = 0;
let three = 0;
let four = 0;
let five = 0;
let six = 0;
let seven = 0;
let eight = 0;
let nine = 0;
let ten = 0;
let eleven = 0;
let twelve = 0;
let thirteen = 0;
let fourteen = 0;
let fifteen = 0;
let sixteen = 0;
let seventeen = 0;
let eighteen = 0;

function checkNum(num){
  if (num==1){
    one++;
  }
  if (num==2){
    two++;
  }
  if (num==3){
    three++;
  }
  if (num==4){
    four++;
  }
  if (num==5){
    five++;
  }
  if (num==6){
    six++;
  }
  if (num==7){
    seven++;
  }
  if (num==8){
    eight++;
  }
  if (num==9){
    nine++;
  }
  if (num==10){
    ten++;
  }
  if (num==11){
    eleven++;
  }
  if (num==12){
    twelve++;
  }
  if (num==13){
    thirteen++;
  }
  if (num==14){
    fourteen++;
  }
  if (num==15){
    fifteen++;
  }
  if (num==16){
    sixteen++;
  }
  if (num==17){
    seventeen++;
  }
  if (num==18){
    eighteen++;
  } 
}

let freqArray = [{name:'One', val: one}, {name: 'Two', val: two}, {name: 'Three', val: three}, {name: 'Four', val: four}, {name: 'Five', val: five},
 {name: 'Six', val: six}, {name: 'Seven', val: seven}, {name: 'Eight', val: eight}, {name: 'Nine', val: nine}, {name: 'Ten', val: ten}, {name: 'Eleven', val: eleven},
  {name: 'Twelve', val: twelve}, {name: 'Thirteen', val: thirteen}, {name: 'Fourteen', val: fourteen}, {name: 'Fifteen', val: fifteen}, {name: 'Sixteen', val: sixteen},
   {name: 'Seventeen', val: seventeen}, {name: 'Eighteen', val: eighteen}];
  
function freqUpdate() {
  //FREQUENCIES//
  One.innerText = one;
  Two.innerText = two;
  Three.innerText = three;
  Four.innerText = four;
  Five.innerText = five;
  Six.innerText = six;
  Seven.innerText = seven;
  Eight.innerText = eight;
  Nine.innerText = nine;
  Ten.innerText = ten;
  Eleven.innerText = eleven;
  Twelve.innerText = twelve;
  Thirteen.innerText = thirteen;
  Fourteen.innerText = fourteen;
  Fifteen.innerText = fifteen;
  Sixteen.innerText = sixteen;
  Seventeen.innerText = seventeen;
  Eighteen.innerText = eighteen;
}