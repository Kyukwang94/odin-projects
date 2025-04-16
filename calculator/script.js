
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