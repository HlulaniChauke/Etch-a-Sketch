const gridContainer = document.querySelector('.drawingPadContainer');
//calculate the size for squares given the number.
function squareSize(number){
    let size = 500 / number ;
    return size
}

//create a square
function createSquare(size, idNum){
    const square = document.createElement('div');
    square.style.border = '1px solid red';
    //square.textContent = 'wh'
    square.id = idNum;
    return square
}

let number = 16;
let sizeOfSqr = squareSize(number);


for (let i = 1; i <= (number * number); i++){
    let newSqr = createSquare(sizeOfSqr, i)
    gridContainer.appendChild(newSqr);
}

gridContainer.style = 'grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;';

