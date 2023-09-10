function createGrid(size){
    let gridSize = size*size;

// find percentage of space the box should take up (basis)
    let basis = (size/gridSize)*100; 
    const container = document.querySelector(".sketch-container");
    for (let i = 0; i < gridSize; i++) {
        const box = document.createElement("div");
        box.classList.add("sketch-box");
        // set basis dynamically when created to prevent mistakes
        box.style.cssText = `flex-basis: ${basis}%;`;
        container.appendChild(box);
    };
};

// Load grid on start
const body = document.querySelector("body")
body.onload = createGrid(16)

// Sketch
let sketchBox = document.querySelectorAll(".sketch-box");
sketchBox.forEach((box) => {
    box.addEventListener("mouseover", (e)=> {
        e.currentTarget.classList.add("sketch");
    })
})