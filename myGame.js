const body = document.body; 
const container = document.createElement("div");
const grid = document.createElement("div");
const btnContainer = document.createElement("div")
const clearBtn = document.createElement("button");
const createBtn = document.createElement("button");
const eraserBtn = document.createElement("button");
const squares = grid.querySelectorAll("div");
squares.forEach((div) => div.remove())
const color = document.querySelector(".ColorChange");
const ColorDiv = document.querySelector(".ColorGenerator");
const settings = document.querySelector(".settings");
const footer = document.getElementById("footer")



body.appendChild(container);
container.appendChild(settings);
settings.appendChild(btnContainer);
btnContainer.appendChild(clearBtn);
btnContainer.appendChild(eraserBtn)
btnContainer.appendChild(createBtn);
container.appendChild(grid);
ColorDiv.insertAdjacentElement("beforebegin", ColorDiv)
container.setAttribute("id", "container")
btnContainer.setAttribute("id", "btn-Container")

clearBtn.textContent = "Clear"
clearBtn.style.backgroundColor = "red";
clearBtn.style.fontWeight = "bold"
createBtn.textContent = "Create Grid"
eraserBtn.textContent = "eraser"
clearBtn.classList.add("btn")
createBtn.classList.add("btn")
eraserBtn.classList.add("btn")
eraserBtn.classList.add("eraser")
grid.classList.add("Grid")

function changeColor() {
    this.style.backgroundColor = "green"
}


function eraser() {

}


function clear() {
    grid.innerHTML = '';
    createGrid()
}


function createGrid() {
    let input = prompt("How many *Cols* x *Rows* do you want?")
        grid.style.gridTemplateColumns = `repeat(${input}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${input}, 1fr)`;
        
    if(!Number(input) || input > 100) {
    alert("too many squares or the input isn't a number.. try again")
    } else if (input < 2) {
        alert("Your Grid should atleast be a 2x2 Grid")
    } else {
        const gridSize = input * input;
        for (let i = 0; i <= gridSize; i++) {
            const square = document.createElement("div");
            square.setAttribute("style", "background-color: white; box-shadow: 0 0 5px black;")
            grid.insertAdjacentElement("beforeend", square);
            square.addEventListener("mouseover", changeColor)
        }   
    }        
}

createBtn.addEventListener("click", createGrid);
clearBtn.addEventListener("click", clear);


