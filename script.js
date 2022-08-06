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
const operatorDivide = document.getElementById("opDivide")
const calcDisplay = document.getElementById("display");
const DEL = document.getElementById("delete")
let display = '';
let addBool = false;
let minusBool = false;
let multiplyBool = false;
let divideBool = false;
let firstNum;
let secondNum;
let result;

//basic operator functions
function add(a, b) {
    return parseInt(a) + parseInt(b);
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
//Delete Function
function backspace() {
    if (display.length == 0)  {
        return;
    }
    else {
        let displayNew = display.slice(0, -1);
        display = displayNew;
        calcDisplay.textContent = display;
        if (display.indexOf('/') && display.indexOf('+') && display.indexOf('*') && display.indexOf('-')) {
            addBool = false;
            minusBool = false;
            multiplyBool = false;
            divideBool = false;
        }
    }
}
DEL.addEventListener("click", function(){
    backspace();
})

//AC button
AC.addEventListener("click", function(){
    location.reload();
})

//Equals function
function equate(operator) {
    if (addBool || minusBool || divideBool || multiplyBool) {
        let index = display.indexOf(operator);
        secondNum = display.substring(index + 1);
        switch (operator) {
            case '+':
                result = add(firstNum, secondNum);
                break;
            case '-':
                result = subtract(firstNum, secondNum);
                break;
            case '*':
                result = multiply(firstNum, secondNum);
                break;
            case '/':
                result = divide(firstNum, secondNum);
                break;
        }
        display = result;
        calcDisplay.textContent = display;
        display = result;
        addBool = false;
        minusBool = false;
        multiplyBool = false;
        divideBool = false;
    }
    else {
        return;
    }
}

//Make buttons functional
operatorEquals.addEventListener("click", function(){
    if (addBool) {
        equate('+');
    }
    else if (minusBool) {
        equate('-');
    }
    else if (divideBool) {
        equate('/');
    }
    else {
        equate('*');
    }
    
})
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
operatorTimes.addEventListener("click", function(){
    if (addBool || minusBool || divideBool || multiplyBool) {
        return;
    }
    firstNum = calcDisplay.textContent;
    updateDisplay('*');
    multiplyBool = true;
})
operatorDivide.addEventListener("click", function(){
    if (addBool || minusBool || divideBool || multiplyBool) {
        return;
    }
    firstNum = calcDisplay.textContent;
    updateDisplay('/');
    divideBool = true;
})
operatorPlus.addEventListener("click", function(){
    if (addBool || minusBool || divideBool || multiplyBool) {
        return;
    }
    firstNum = calcDisplay.textContent;
    updateDisplay('+');
    addBool = true;
})
operatorMinus.addEventListener("click", function(){
    if (addBool || minusBool || divideBool || multiplyBool) {
        return;
    }
    firstNum = calcDisplay.textContent;
    updateDisplay('-');
    minusBool = true;
})
floatingPoint.addEventListener("click", function(){
    updateDisplay('.');
})