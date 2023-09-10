
const container = document.querySelector(".sketch-container");
let currentGridWidth = 16;

// CreateBox
function createBox(){
    //Calculate basis %
    let basis = (currentGridWidth/(currentGridWidth*currentGridWidth))*100; 
    const box = document.createElement("div");
    box.classList.add("sketch-box");
    // set basis dynamically when created to prevent mistakes
    box.style.flexBasis = `${basis}%`
    return box;
}

// Create grid
function createGrid(size){
    let gridSize = size*size;

    for (let i = 0; i < gridSize; i++) {
        container.appendChild(createBox());
    };
};

// Load grid on start
const body = document.querySelector("body")
body.onload = createGrid(currentGridWidth)

// Sketch
let sketchBox = document.querySelectorAll(".sketch-box");
sketchBox.forEach((box) => {
    box.addEventListener("mouseover", (e)=> {
        e.currentTarget.classList.add("sketch");
    })
})

// Change grid size
let slider = document.querySelector(".slider");
let sliderText = slider.querySelector("#rangeValue");
slider = slider.querySelector("input");
let sliderButton = document.querySelector("#gridSize");

sliderButton.addEventListener("click", (e) => {
    let sldrVal = +slider.value;
    let textVal = +sliderText.textContent;
    if(sldrVal === currentGridWidth) console.log("Were the same");
    else {
        currentGridWidth = sldrVal;
        let toDel = container.children.length;
        for (let i = 0; i < toDel; i++) {
            container.firstChild.remove();
        }
        createGrid();
    };
    
});

// Called when slider changes
function slide(){
    sliderText.textContent = +slider.value
}

