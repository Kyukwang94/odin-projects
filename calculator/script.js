import {add, subtract, multiply, divide, operate, operations} from './operator.js';

//InitData
const numBtns = Array.from(document.getElementsByClassName("digit-btn"));
const operatorBtn = [document.getElementById("operate-btn")];
const arithmeticBtn = Array.from(document.getElementsByClassName("arithmetic-btn"));
const clearBtn = [document.getElementById("clear-btn")];
const arrBtns = [...numBtns,...operatorBtn,...clearBtn,...arithmeticBtn];

const displayEl = document.getElementById("displayer");
const operators = ['+','-','*','/'];
let storedData = ["0"];

let valueLeft = [];
let valueRight = [];

let operator = "";

//ButtonHandler
arrBtns.forEach((button)=>{
    button.addEventListener(('click'),event => {
    const buttonType = checkButtonType(event)
    console.log(buttonType);
        if(buttonType == "digit-btn"){
            //NUMBER
            //Display Number
            if(storedData[0] === "0"){
                storedData[0] = button.textContent;
            }else{
                storedData.push(button.textContent);
            }            
            display(button.textContent);
            console.log(storedData);
        }
        if(buttonType == "arithmetic-btn"){
            //Is this First Arithmetic ?
            if(checkFirstArithmetic()){
                storedData.push(button.textContent);
            }
            else{
                storedData[storedData.length-1] = button.textContent;
            }
            console.log(storedData);
        }
        if(buttonType =="operate-btn"){
            console.log(storedData);
            analyzeStoredData()
        }
        if(buttonType == "clear-btn"){
            Reset();
        }
        
    })
})
function analyzeStoredData(){
    // case 30 =
    let arithmeticFoundIndex = 0;
    let operatorFound = false;
    let current = [];

    for(let i = storedData.length - 1; i >= 0; i--){
        current.unshift(storedData[i]);
        operator = storedData[i];

        if(!operatorFound && /[+\-*/]/.test(operator)){
            arithmeticFoundIndex = i;
            operatorFound = true;
            break;
        }
    }
    console.log(current);

        if(operatorFound){
            current.splice(0,1);
            console.log("Curr: ",current);
            console.log("OPERATOR: ",operator);
            valueLeft = storedData.slice(0,arithmeticFoundIndex);
            valueLeft = Number(valueLeft.join(''));
            valueRight = Number(current.join(''));
        }else {
        Reset();
        valueLeft = Number(current.join(''));
        }
    
    console.log("VL: ",valueLeft);
    console.log("VR: ",valueRight);


}

function checkFirstArithmetic(){
    const hasOperator = storedData.some(item => operators.includes(item));
    if(hasOperator){
        console.log("storedData Contains an Operator");
        return false;
    }
    else{
        console.log("No Operator Found!");
        return true;
    }
}
//DisplayFunction
function display(textContent){
    displayEl.textContent == 0 
            ? displayEl.textContent = textContent 
            : displayEl.textContent += textContent;            
}
//CheckButtonType
function checkButtonType(button){
    if(button.target.className) {
        return button.target.className;
    } 
    else{
        return button.target.id;
    }
}
//HandleData

//Show Result
//ResetData
function Reset(){
    valueLeft = 0;
    valueRight = 0;
    displayEl.textContent = "0";
    storedData=["0"];
}