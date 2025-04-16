
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

//DISPLAY SECTION 
const digitBtns = Array.from(document.getElementsByClassName("digit-btn"));
const operatorBtns = Array.from(document.getElementsByClassName("operator-btn"));


digitBtns.forEach(button => {
    button.addEventListener('click',(event) =>{
        console.log(event.target.id);
    })
});
operatorBtns.forEach(button => {
    button.addEventListener('click',(event) =>{
        console.log(event.target.id);
    })
});
