class Calculator {
    constuctor(num1,num2,op){
        this.num1 = num1;
        this.num2 = num2;
        this.op = op;
    }
}
let calculator = new Calculator;
//step 1 determines which value is being set into the calculator obj
let step = 1;
let display = document.querySelector(".display");
let result;
//Numbers 0 to 9
const button1 = document.getElementById("1");
button1.addEventListener("click", ()=>{
    numPad(1);
});
const button2 = document.getElementById("2");
button2.addEventListener("click", ()=>{
    numPad(2);
});
const button3 = document.getElementById("3");
button3.addEventListener("click", ()=>{
    numPad(3);
});
const button4 = document.getElementById("4");
button4.addEventListener("click", ()=>{
    numPad(4);
});
const button5 = document.getElementById("5");
button5.addEventListener("click", ()=>{
    numPad(5);
});
const button6 = document.getElementById("6");
button6.addEventListener("click", ()=>{
    numPad(6);
});
const button7 = document.getElementById("7");
button7.addEventListener("click", ()=>{
    numPad(7);
});
const button8 = document.getElementById("8");
button8.addEventListener("click", ()=>{
    numPad(8);
});
const button9 = document.getElementById("9");
button9.addEventListener("click", ()=>{
    numPad(9);
});
const button0 = document.getElementById("0");
button0.addEventListener("click", ()=>{
    numPad(0);
});
//Operator Buttons
const buttonX = document.getElementById("x");
buttonX.addEventListener("click", ()=>{
    opButton("*");
});
const buttonPlus = document.getElementById("plus");
buttonPlus.addEventListener("click", ()=>{
    opButton("+");
});
const buttonMinus = document.getElementById("minus");
buttonMinus.addEventListener("click", ()=>{
    opButton("-");
});
const buttonDivide = document.getElementById("divide");
buttonDivide.addEventListener("click", ()=>{
    opButton("/");
});
const buttonEqual = document.getElementById("equal");
buttonEqual.addEventListener("click", ()=>{
    equalButton(calculator.op);
});
//All Clear Button, just clears out display and resets values
const buttonAC = document.getElementById("ac");
buttonAC.addEventListener("click", ()=>{
    step = 1;
    display.textContent = "";
    calculator.num1 = null;
    calculator.num2 = null;
    calculator.op = null;
});
//+/- button switches current sign of value
const buttonSign = document.getElementById("sign");
buttonSign.addEventListener("click", ()=>{
    if (step == 1){
        let signValueStep1 = Number(display.textContent);
        calculateSign = -1 * signValueStep1;
        display.textContent = String(calculateSign);
    }else if(step == 2){
        //to finish +/- button get code below to work
        let signValueStep2 = display.textContent.slice(display.textContent.lastIndexOf(i)+1);
        console.log(signValue2);
        calculateSign = -1 * signValueStep2;
        display.textContent = String(calculateSign);
    }
});
//steps in each function ensure that buttons are pressed in correct order
//Start off by using numPad and getting input for value 1, numPad also displays to calculator monitor
function numPad(i){
    if (step == 3){
        display.textContent = "";
        step = 1;
    }
    const var0 = i;
    display.append(var0);
}
//Captures first value and locks in operator. You can now go back to numPad and get your input for value 2
function opButton(i){
    if (step ==1){
        calculator.num1 = Number(display.textContent);
        calculator.op = i;
        const varX = i;
        console.log(calculator.num1);
        console.log(calculator.op);
        display.append(varX);
        step = 2;
    }
}
//Captures the second value and uses operator and both values in if statements to calculate result
function equalButton(i){
    if (step == 2 && calculator.op == i){
        //create a .slice here so the number starts after the operator
        let valueOfNum2 = display.textContent.slice(display.textContent.lastIndexOf(i)+1);
        calculator.num2 = Number(valueOfNum2);
        console.log(calculator.num2);
        console.log("=");
        if(i == "*"){
            result = calculator.num1 * calculator.num2;
        }
        else if (i=="/"){
            result = calculator.num1 / calculator.num2;
        }
        else if (i=="+"){
            result = calculator.num1 + calculator.num2;
        }
        else if (i=="-"){
            result = calculator.num1 - calculator.num2;
        }
        display.textContent = result;
        console.log(result);
        step = 3;
    }
}