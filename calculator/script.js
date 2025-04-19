import {add, subtract, multiply, divide, operate, operations} from './operator.js';

let leftValue = null;
let rightValue = null;
let result = 0;
//Buttons
let digitBtns = [...document.getElementsByClassName("digit-btn")];
let arithmeticBtns = [...document.getElementsByClassName("arithmetic-btn")];
let operateBtn = document.getElementById("operate-btn");
let clearBtn = document.getElementById("clear-btn");
let allBtns = [
    ...digitBtns,
    ...arithmeticBtns,
    operateBtn,
    clearBtn
]
const displayEl = document.getElementById("displayer");
const operators = ["+", "-", "*", "/"];
let operator = "";
let isOperateBtn = false;
let reservedOperator = "";
let storedData = ["0"];

allBtns.forEach((button)=>{
    button.addEventListener('click',event=>{
        let btnType = event.target.className || event.target.id;
        if(btnType == 'digit-btn'){
            console.log(button.textContent);
            digitHandler(button);
        }
        if(btnType == 'arithmetic-btn'){
            arithmeticHandler(button);
        }
        if(btnType == 'operate-btn'){
            console.log("====OPERATE====")
            operateHandler(btnType);
        }
        if(btnType == 'clear-btn'){
            clear();
        }
        display()
        console.log(storedData);
    })
})
function clear(){
    leftValue = null;
    rightValue = null;
    result = 0;
    operator = "";
    reservedOperator = "";
    storedData = ["0"];
    displayEl.textContent = "";
}
function display(){
    displayEl.textContent = storedData.join('');
}
function digitHandler(button){
    const clickedDigit = button.textContent;
    if(isOperateBtn){
        storedData = [];
        storedData.push(clickedDigit);
        isOperateBtn = false;
        return;
    }
    if(storedData[0] == "0" && !hasOperator()){
        storedData[0] = clickedDigit;
    }
    else {
        storedData.push(clickedDigit);
    }
}

function arithmeticHandler(button){
    const clickedOperator = button.textContent;
    //NegativeNumber should't count as operator
    if(!hasOperator()){
        storedData.push(clickedOperator);
    }
    // 34 +(+,-,*,/)
    else if(hasOperator() && findFirstOperator() == storedData.length -1){
        storedData[storedData.length-1] = clickedOperator;
    }
    else{
        console.log("===ARITHMETIC OPERATION===");
        reservedOperator = clickedOperator;
        operateHandler();
    }
}
function operateHandler(operateBtn){
    //It's certain that there are both left and right values.
    let leftArr = [];
    let rightArr = [];
    let resultArr = [];
    let firstOperator = findFirstOperator();
    if(operateBtn){
        isOperateBtn = true;
        console.log(isOperateBtn);
    }
    if(!hasOperator()){
        return;
    }
    //Left , Right
    for(let i = 0; i < firstOperator; i++){
        leftArr.push(storedData[i]);
    }
    for(let i = firstOperator + 1; i < storedData.length; i++){
        rightArr.push(storedData[i]);
    }
    leftValue = Number(leftArr.join(''));
    rightValue = Number(rightArr.join(''));
    //====OPEARTE====
    result = operate(operator,leftValue,rightValue);
    console.log(`LV:${leftValue},RV:${rightValue}`);
    console.log("RESULT: ",result);
    //Set result to firstValue and Ready for next move.
    firstOperator = reservedOperator;
    leftValue = result;
    storedData = [];
    resultArr = result.toString().split('');
    for(let i = 0; i < resultArr.length; i++){
        storedData.push(resultArr[i]);
    }
    storedData.push(firstOperator);
}
function hasOperator(){
    //Start from 1 because negative number doesn't count as operator
    const hasOperator = storedData.slice(1).some(item => operators.includes(item));
    return hasOperator;
}
function findFirstOperator(){
    let index = storedData.findIndex((item,idx) => 
        idx != 0 && operators.includes(item));
    operator = storedData[index];

    return index;
}


