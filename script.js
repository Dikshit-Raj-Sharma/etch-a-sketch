
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



const gridSizeBtn = document.querySelector("#gridSizeBtn");
const gridInput = document.querySelector("#gridInput");
const eraseBtn =document.querySelector("#eraser");
const clearBtn=document.querySelector("#clearBtn");

gridSizeBtn.addEventListener('click', () => {
    const size=parseInt(gridInput.value);

    if (size > 0 && size <= 100) {
        currentGridSize=size;   
        generateGrid(size);
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
