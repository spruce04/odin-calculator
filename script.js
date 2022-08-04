//DOM targets
const numberZero = document.getElementById("numZero");
const numberOne = document.getElementById("numOne");
const numberTwo = document.getElementById("numTwo");
const numberThree = document.getElementById("numThree");
const numberFour = document.getElementById("numFour");
const numberFive = document.getElementById("numFive");
const numberSix = document.getElementById("numSix");
const numberSeven = document.getElementById("numSeven");
const numberEight = document.getElementById("numEight");
const numberNine = document.getElementById("numNine");
const floatingPoint = document.getElementById("floatPoint");
const AC = document.getElementById("reset");
const operatorTimes = document.getElementById("opTimes");
const operatorMinus = document.getElementById("opMinus");
const operatorEquals = document.getElementById("opEquals");
const operatorPlus = document.getElementById("opPlus");
const calcDisplay = document.getElementById("display");
let display = '';
let answer;

//basic operator functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

//Update display function
function updateDisplay(char) {
    display = display + char;
    calcDisplay.textContent = display;
}

//AC button
AC.addEventListener("click", function(){
    location.reload();
})

//Number buttons
numberOne.addEventListener("click", function(){
    updateDisplay('1');
})
numberTwo.addEventListener("click", function(){
    updateDisplay('2');
})
numberThree.addEventListener("click", function(){
    updateDisplay('3');
})
numberFour.addEventListener("click", function(){
    updateDisplay('4');
})
numberFive.addEventListener("click", function(){
    updateDisplay('5');
})
numberSix.addEventListener("click", function(){
    updateDisplay('6');
})
numberSeven.addEventListener("click", function(){
    updateDisplay('7');
})
numberEight.addEventListener("click", function(){
    updateDisplay('8');
})
numberNine.addEventListener("click", function(){
    updateDisplay('9');
})
numberZero.addEventListener("click", function(){
    updateDisplay('0');
})