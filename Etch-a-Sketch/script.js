
const gridContainer = document.querySelector('#grid-container');
const gridStyle = getComputedStyle(gridContainer);
const gridWidth = parseInt(gridStyle.width);
const gridHeight = parseInt(gridStyle.height);




let boxNumber = GetBoxNumbers();
let boxWidth = gridWidth / boxNumber;;
let boxHeight = boxWidth;

CreateBox();
DrawingWhenClick();
ChangeColor();


function GetBoxNumbers(){
    let boxNumbers = prompt('Enter the number of boxes you want to create:');
    boxNumbers= parseInt(boxNumbers);

    if (boxNumbers > 100) {
        alert('Please enter a number less than 100');
        GetBoxNumbers();
    }

    return boxNumbers;
}
function CreateBox() {
    // create div element with class: grid-item id: grid-item
    // create default 16 * 16 256 boxes
    // put created boxes as children of grid-container
    for (let i = 0; i < boxNumber*boxNumber; i++) {

        const box = document.createElement('div');
       
        box.style.width =`${boxWidth}px`;
        box.style.height = `${boxHeight}px`;

        box.classList.add('grid-item');
        box.setAttribute('id','grid-item');
        box.style.width = gridContainer
     
        gridContainer.appendChild(box);
    }
}


//DRAWING FEATURE
let isDrawing = false;

function DrawingWhenClick(){
    document.addEventListener('mousedown',()=>{
        isDrawing = true;
    })
    document.addEventListener('mouseup',()=>{
        isDrawing = false;
    })
}


function ChangeColor(){
    const boxes = document.querySelectorAll('.grid-item');
    boxes.forEach((box)=> {
        box.addEventListener('mouseenter',() => {
            if(isDrawing){
                box.style.backgroundColor = 'black';
            }
            
        })

    })
}
// GRID BUTTON 
const gridButton = document.querySelector('#grid-button');
gridButton.addEventListener('click', () => {
    location.reload();
})
