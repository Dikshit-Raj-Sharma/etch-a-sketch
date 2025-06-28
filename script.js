
const container = document.querySelector(".container");
const containerSize = 512 // pixels
let isEraser=false;
let currentGridSize=16 // by default
function generateGrid(num) {
    //clear existing squares
    container.innerHTML = '';
    const squareSize = containerSize / num;
    for (let i = 0; i < num * num; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.addEventListener('mouseover', () => {
            (isEraser) ? square.style.backgroundColor='White': square.style.backgroundColor = 'black';
        });
        container.appendChild(square);
    }
}



const resizeBtn = document.querySelector("#resizeBtn");
const eraseBtn =document.querySelector("#eraser");
const clearBtn=document.querySelector("#clearBtn");

resizeBtn.addEventListener('click', () => {
    let userInput = prompt("Enter Grid Size (max 100) : ");
    let userInputToInt = parseInt(userInput)

    if (userInputToInt > 0 && userInputToInt <= 100) {
        currentGridSize=userInputToInt;
        generateGrid(userInputToInt);
    } else {
        alert("Invalid input. Using default 16x16 grid.");
        generateGrid(16);
    }
})
eraseBtn.addEventListener('click',()=>{
    isEraser=!isEraser;
    eraseBtn.textContent = isEraser ? 'Eraser: ON' : 'Eraser: OFF';
})
clearBtn.addEventListener('click',()=>{
    generateGrid(currentGridSize);
})
