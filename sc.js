function makeRows (rows, cols) {
    const container = document.getElementById("container");
    let cell;
    let row;
    for (let c = 0; c < rows; c++) {
        row = document.createElement("div")
        for (let d = 0; d < cols; d++) {
            cell = document.createElement("div");
            cell.style.flex = 1;
            row.appendChild(cell).className = "grid-item";
        }
        container.appendChild(row).className = "row";
    }
}
function addColor (rows = 16, cols = 16) {
    var elem = document.querySelectorAll(".grid-item")
    for (let i = 0; i<rows * cols; i++) {
        elem[i].addEventListener("mouseenter", () => elem[i].style.backgroundColor = "purple")
        elem[i].addEventListener("mouseleave", () => elem[i].style.backgroundColor = "yellow")
    }
}


makeRows(16, 16);
addColor()

var items = 256;
var reset = document.querySelector("#reset")
reset.addEventListener("click", () => {
    let newRow= prompt();
    var rem = document.querySelectorAll(".grid-item")
    for(let i = 0; i<items; i++)
    {
        rem[i].remove();
    }
    makeRows (newRow, newRow);
    addColor(newRow, newRow);
    items = newRow**2;
})