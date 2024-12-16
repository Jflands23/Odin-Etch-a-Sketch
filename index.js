const resetBtn = document.querySelector("#resetBtn")
const remakeBtn = document.querySelector("#remake")


window.onload = (event) => {
    generateGrid();
}

resetBtn.addEventListener("click", () => {
    let p = document.querySelectorAll('div')
    p.forEach(div => div.classList.remove("filled"));
})

remakeBtn.addEventListener("click", () => {
    let widthNum = document.querySelector("#width");
    let heightNum = document.querySelector("#height");

    removeGrid()
    generateGrid(widthNum.value, heightNum.value)
    
})

function createEventListener(element) {
    element.addEventListener("mouseover", ()=> {
        element.classList.add("filled")
    })
}

function removeGrid() {
    const container = document.querySelector("#etchAsketch")
    container.innerHTML = ""
}

function generateGrid(width, height) {
    const container = document.querySelector("#etchAsketch")
    for(let i = 1; i<= (height ? height : 16); i++) {
        let div = document.createElement("div")
        div.classList.add("etch");
        div.id = `etch${i}`;
        container.appendChild(div);
        createEventListener(div);
        for(let y = 1; y<=(width ? width : 16); y++) {
            let subDiv = document.createElement("div");
            subDiv.classList.add("sketch");
            subDiv.id = `sketch${y}`;
            div.appendChild(subDiv);
            createEventListener(subDiv);
        }

    }
}
