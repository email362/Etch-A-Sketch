//shortcut for access to the container div that holds the etch a sketch; used by every function
let container = document.getElementById('container');

//changes the size of the etch-a-sketch based on window size, so that there is no vertical or horizontal scrolling
let sketchResize = () => {
    let containerWidth = window.innerHeight - 100;
    container.style.width = `${containerWidth}px`;
};

//This function changes the background color of any moused over square from black to white
let changeColor = (e) => {
    let square = e.target;
    if(square.style.backgroundColor === 'white') {
    }
    else {
        square.style.backgroundColor = 'white';
    }
};

//creates every square inside the etch-a-sketch and adds the mouseover event for each square
let createSquares = (rows) => {
    let adjustedRows = `display: grid; margin: 0 auto; grid-template-rows: repeat(${rows}, 1fr); grid-template-columns: repeat(${rows}, 1fr);`;
    container.setAttribute('style', adjustedRows);
    let numberOfSquares = rows**2;
    for(let i = 0; i< numberOfSquares; i++) {
        let square = document.createElement('div');
        square.setAttribute('class','square');
        container.appendChild(square);
    }

    let squares = document.getElementsByClassName('square');
    let squaresList = Array.from(squares);
    squaresList.forEach(square => square.addEventListener('mouseover', changeColor));
    sketchResize();
};

//helper function to change the rows/columns based on what the user inputs
let changeRows = (e) => {
    let rows = prompt("How many squares would you like in each row?");
    //make sure user input is a valid number, if not, then reset to 16
    if(parseInt(rows) == rows) {
        rows = parseInt(rows);
    }
    else {
        rows = 16;
    }
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
    createSquares(rows);
};

//initialization of the program. starts up etch-a-sketch, and starts the reset button
let init = () => {
    let resetButton = document.getElementById('resetButton');
    sketchResize();
    window.onresize = sketchResize();
    createSquares(16);
    resetButton.addEventListener('mousedown', changeRows);
};


//initialize program
init();