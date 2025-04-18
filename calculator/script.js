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

