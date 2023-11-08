const gridContainer = document.querySelector('.drawingPadContainer');
const sizeButton = document.querySelector('#size');
//calculate the size for squares given the number.
function squareSize(number){
    let size = 500 / number ;
    return size
}

//create a square
function createSquare(size, idNum){
    const square = document.createElement('div');
    square.style.border = '1px solid lightgrey';
    //square.textContent = 'wh'
    square.id = idNum;
    return square
}


function drawGrid(number){
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

window.addEventListener('load', function() {
    drawGrid(20);});

sizeButton.addEventListener('click', () => 
     drawGrid(Number(window.prompt("Type a number between 2 and 100", "16"))));

    