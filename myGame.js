const body = document.body; 
const container = document.createElement("div");
const gridContainer = document.createElement("div");
gridContainer.setAttribute("style", "background-color: white; width: 450px; height: 450px; display: flex;")

body.appendChild(container)
container.appendChild(gridContainer);
container.setAttribute("id", "container")


function createGrid() {
    const row = prompt("how many rows do you want?")
    const col = prompt("how many cols do you want?")

    for (let i = 0; i < (col * row); i++) {
        const rows = document.createElement("div");
        const cols = document.createElement("div");
        gridContainer.appendChild(rows);
        gridContainer.appendChild(cols);
        rows.classList.add("rowStyle")
        cols.classList.add("colStyle")
        console.log(rows)
        console.log(cols)
    }
}

createGrid()