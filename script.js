const gridContainer = document.querySelector('.drawingPadContainer');
const sizeButton = document.querySelector('#size');
const blackButton = document.querySelector('#black');
const randomButton = document.querySelector('#random')
const resetButton = document.querySelector('#reset')
//calculate the size for squares given the number.

window.addEventListener('load', () => drawGrid(20));

function createNewClass(colorNameClass){
    const pad = document.getElementsByClassName('squares');
    for (let i = 0; i <pad.length; i++){
        if (pad[i].classList.length > 1){
            pad[i].classList.remove(pad[i].classList.item(1), colorNameClass);}
        else{
            pad[i].classList.add(colorNameClass);
            console.log(pad[i].classList);
        }

    }
}

//create a square
function createSquare(size, idNum){
    const square = document.createElement('div');
    square.style.border = '1px solid lightgrey';
    square.id = 'sq'+idNum;
    square.classList.add('squares');
    return square
}

// Clear the grid by removing all child elements.
function clearGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

//generate random color.
function generateRandomColor(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    //randomColor = "#" + randomColor;
    return randomColor
}

function changeSqrColor(idNum){
    const sq = document.getElementById(idNum);
    if (sq.classList.contains('black')){
        sq.style.backgroundColor = 'black';
    }
    if (sq.classList.contains('random')){
        let color = generateRandomColor();
        sq.style.backgroundColor = '#'+color;
    }
    if (sq.classList.length === 1){
        sq.style.backgroundColor = 'white'
    }
}

function drawGrid(number){
    clearGrid();
    let sizeOfSqr = squareSize(number);
    for (let i = 1; i <= (number * number); i++){
        let newSqr = createSquare(sizeOfSqr, i)
        gridContainer.appendChild(newSqr);
    }
    //automate the generation of 1frs
    let frs = '1fr ';
    for (let i = 1; i < number; i++){
        frs += '1fr ';
    }   
    gridContainer.style.gridTemplateColumns = frs ;
}

function squareSize(number){
    let size = 500 / number ;
    return size
}



// events listening and action

sizeButton.addEventListener('click', () => 
     drawGrid(Number(window.prompt("Type a number between 2 and 100", "16"))));


gridContainer.addEventListener('mouseover',(e) => {
    changeSqrColor((e.target.id));
    //console.log(e);
}       
);

resetButton.addEventListener('click', () =>{
    clearGrid();
    drawGrid(Number(window.prompt("Type a number between 2 and 100", "16")));
});

blackButton.addEventListener('click', () => { createNewClass('black')}); 

randomButton.addEventListener('click', () => {createNewClass('random')}
); 

    