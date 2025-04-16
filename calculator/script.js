
const operations = {
    '+': add,
    '-': subtract,
    '*': multiply,
    '/': divide
};
function add(valueA,valueB){
    return valueA + valueB;
}
function subtract(valueA,valueB){
    return valueA - valueB;
}
function multiply(valueA,valueB){
    return valueA * valueB;
}
function divide(valueA,valueB){
    if(valueA == 0 || valueB == 0){
        alert("Error 0 division");
    }
    return valueA / valueB;
}

function operate(operator, a, b) {
    const operation = operations[operator];
    return operation ? operation(a, b) : 'Invalid operator';
}

//DISPLAY RELATED SECTION (buttons)
    //Diplsay
const displayerEl = document.getElementById("displayer");
let contentOfBtn = "";
    //Buttons
const digitBtns = Array.from(document.getElementsByClassName("digit-btn"));
const operatorBtns = Array.from(document.getElementsByClassName("operator-btn"));
const allButtons = [...digitBtns,...operatorBtns];

function debugBtn(event){
    console.log("ID: ",event.target.id);
    console.log("Text: ",event.target.textContent);
}
function display(textContent){
    if(displayerEl.textContent === "0"){
        displayerEl.textContent = textContent;
        return;
    }
    displayerEl.textContent += textContent;
}
allButtons.forEach(button => {
    button.addEventListener('click',(event) =>{
        debugBtn(event);
        contentOfBtn = event.target.textContent;
        display(contentOfBtn);
    })
});
