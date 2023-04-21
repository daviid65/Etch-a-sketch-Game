const body = document.body; 
const container = document.createElement("div");
const gridContainer = document.createElement("div");
const btnContainer = document.createElement("div")
const clearBtn = document.createElement("button");
const createBtn = document.createElement("button");


body.appendChild(container);
container.appendChild(btnContainer);
btnContainer.appendChild(clearBtn);
btnContainer.appendChild(createBtn);
container.appendChild(gridContainer);
container.setAttribute("id", "container")
btnContainer.setAttribute("id", "btn-Container")

clearBtn.textContent = "Clear"
createBtn.textContent = "Create Grid"
clearBtn.classList.add("btn")
createBtn.classList.add("btn")
gridContainer.classList.add("Grid")


function createRow() {
    const row = document.createElement("div");
    let rows = prompt("How many rows?")
        if(!Number(rows)) {
        alert("sorry but the input isn't a number..")
    } else if(Number(row)) {
        for (let i = 0; i <= row; i++) {
            gridContainer.appendChild(row);
            row.classList.add("row")
        }
        console.log(row)
    }
}


function createCol() {
let cols = prompt("How many columns?")
    if(!Number(cols)) {
    alert("sorry but the input isn't a number..")
    } else if(Number(col)) {
        for (let i = 0; i <= col; i++) {
            const col = document.createElement("div");
            gridContainer.appendChild(col);
            col.classList.add("col")
        }
        console.log(col)
    }       
}

function createGrid() {
   createRow()
   createCol()
}

function clear() {

}

createBtn.addEventListener("click", createGrid)
clearBtn.addEventListener("click", clear)

