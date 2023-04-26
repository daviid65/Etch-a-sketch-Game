const body = document.body; 
const container = document.createElement("div");
const grid = document.createElement("div");
const btnContainer = document.createElement("div")
const clearBtn = document.createElement("button");
const createBtn = document.createElement("button");
const squares = grid.querySelectorAll("div");
squares.forEach((div) => div.remove())
const color = document.querySelector(".ColorChange")
const test = document.querySelector(".block")

body.appendChild(container);
container.appendChild(btnContainer);
btnContainer.appendChild(clearBtn);
btnContainer.appendChild(createBtn);
container.appendChild(grid);
container.setAttribute("id", "container")
btnContainer.setAttribute("id", "btn-Container")

clearBtn.textContent = "Clear"
createBtn.textContent = "Create Grid"
clearBtn.classList.add("btn")
createBtn.classList.add("btn")
grid.classList.add("Grid")

function changeColor(event) {
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    event.target.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;

    console.log(event)
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

createBtn.addEventListener("click", createGrid)


test.addEventListener("mouseover", changeColor)
test.style.height = "50px"
test.style.width = "50px"


