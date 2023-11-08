const gridContainer = document.querySelector('.drawingPadContainer');
const sizeButton = document.querySelector('#size');
//calculate the size for squares given the number.

window.addEventListener('load', () => drawGrid(20));

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

// Clear the grid by removing all child elements.
function clearGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
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



sizeButton.addEventListener('click', () => 
     drawGrid(Number(window.prompt("Type a number between 2 and 100", "16"))));

    